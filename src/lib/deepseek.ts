import { ai as aiApi } from "@/lib/api"

export interface AISearchResult {
    type: "palestra" | "preletor" | "tema" | "insight"
    palestraId?: string
    title: string
    subtitle: string
    relevance: number
    explanation?: string
    speaker?: string
}

function mapResultType(type?: string): AISearchResult["type"] {
    if (!type) return "palestra"
    const t = type.toLowerCase().trim()
    if (t === "preletor") return "preletor"
    if (t === "tema") return "tema"
    if (t === "insight") return "insight"
    return "palestra"
}

function deduplicateResults(results: AISearchResult[]): AISearchResult[] {
    const seen = new Set<string>()
    return results.filter(r => {
        const key = r.title.toLowerCase().trim()
        if (seen.has(key)) return false
        seen.add(key)
        return true
    })
}

function cleanAIText(text: string) {
    return text.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim()
}

function extractJSONObject(text: string): unknown | null {
    const cleaned = cleanAIText(text)

    try {
        return JSON.parse(cleaned)
    } catch {
        // Some model responses include prose before or after the JSON payload.
    }

    const start = cleaned.indexOf("{")
    const end = cleaned.lastIndexOf("}")
    if (start === -1 || end === -1 || end <= start) return null

    try {
        return JSON.parse(cleaned.slice(start, end + 1))
    } catch {
        return null
    }
}

/**
 * Recupera resultados de um JSON truncado pelo modelo: varre o texto coletando
 * objetos {...} balanceados (ignorando chaves dentro de strings) e parseia
 * cada um individualmente, descartando o objeto incompleto do final.
 */
function salvageTruncatedResults(text: string): any[] {
    const startArr = text.indexOf("[")
    if (startArr === -1) return []

    const objects: any[] = []
    let depth = 0
    let objStart = -1
    let inString = false
    let escaped = false

    for (let i = startArr; i < text.length; i++) {
        const ch = text[i]
        if (inString) {
            if (escaped) escaped = false
            else if (ch === "\\") escaped = true
            else if (ch === '"') inString = false
            continue
        }
        if (ch === '"') { inString = true; continue }
        if (ch === "{") {
            if (depth === 0) objStart = i
            depth++
        } else if (ch === "}") {
            depth--
            if (depth === 0 && objStart !== -1) {
                try {
                    const obj = JSON.parse(text.slice(objStart, i + 1))
                    if (obj && typeof obj === "object" && typeof obj.title === "string") {
                        objects.push(obj)
                    }
                } catch {
                    // objeto inválido — ignora
                }
                objStart = -1
            }
        }
    }
    return objects
}

function getResultExplanation(result: any): string {
    if (typeof result.explanation === "string" && result.explanation.trim()) {
        return result.explanation.trim()
    }

    if (typeof result.relevance === "string" && result.relevance.trim()) {
        return result.relevance.trim()
    }

    return "Sem descricao"
}

function getResultRelevance(result: any): number {
    if (typeof result.score === "number") return result.score
    if (typeof result.relevanceScore === "number") return result.relevanceScore
    if (typeof result.relevance === "number") return result.relevance

    const parsed = parseInt(String(result.relevance ?? ""), 10)
    return Number.isFinite(parsed) ? parsed : 90
}

function mapBackendResults(results: any[]): AISearchResult[] {
    return deduplicateResults(results.map(r => ({
        type: mapResultType(r.type),
        palestraId: r.palestraId,
        title: r.title || "Recomendacao",
        subtitle: r.speaker ? `${r.speaker} - ${r.categoryName || "Palestra"}` : (r.categoryName || "Sugestao da IA"),
        relevance: getResultRelevance(r),
        explanation: getResultExplanation(r),
        speaker: r.speaker,
    })))
}

export async function aiSearch(query: string, _catalogContext?: string): Promise<AISearchResult[]> {
    try {
        const res = await aiApi.search(query)

        if ("results" in res && Array.isArray(res.results)) {
            return mapBackendResults(res.results)
        }

        if ("raw" in res) {
            const cleaned = cleanAIText(String(res.raw))
            const parsed = extractJSONObject(cleaned)

            if (
                parsed &&
                typeof parsed === "object" &&
                "results" in parsed &&
                Array.isArray(parsed.results)
            ) {
                return mapBackendResults(parsed.results)
            }

            // Resposta truncada pelo modelo: recupera os objetos completos.
            const salvaged = salvageTruncatedResults(cleaned)
            if (salvaged.length > 0) {
                return mapBackendResults(salvaged)
            }

            return [{
                type: "insight",
                title: "Analise da IA",
                subtitle: cleaned.length > 200 ? `${cleaned.slice(0, 200)}...` : cleaned,
                relevance: 85,
                explanation: cleaned,
            }]
        }

        return []
    } catch (err) {
        console.error("AI search error:", err)
        throw err
    }
}

export interface AIQuestion {
    id: string
    text: string
    type: "reflexao" | "aplicacao" | "discussao"
    difficulty: "facil" | "media" | "avancada"
}

export async function generateQuestions(
    palestraTitle: string,
    palestraSpeaker: string,
    palestraCategory?: string,
): Promise<AIQuestion[]> {
    try {
        const res = await aiApi.generateQuestions(
            palestraTitle,
            palestraSpeaker,
            palestraCategory ?? "Lideranca",
        )

        if ("questions" in res && Array.isArray(res.questions)) {
            return res.questions.map((q, i) => ({
                id: `q${i + 1}`,
                text: q.question,
                type: mapQuestionType(q.type),
                difficulty: mapDifficulty(i),
            }))
        }

        if ("raw" in res) {
            const parsed = extractJSONObject(String(res.raw))
            if (
                parsed &&
                typeof parsed === "object" &&
                "questions" in parsed &&
                Array.isArray(parsed.questions)
            ) {
                return parsed.questions.map((q: any, i: number) => ({
                    id: `q${i + 1}`,
                    text: q.question || q.text || String(q),
                    type: mapQuestionType(q.type || ""),
                    difficulty: mapDifficulty(i),
                }))
            }

            if (Array.isArray(parsed)) return parsed as AIQuestion[]
        }

        return fallbackQuestions()
    } catch (err) {
        console.error("AI questions error:", err)
        return fallbackQuestions()
    }
}

function mapQuestionType(type: string): AIQuestion["type"] {
    const t = type.toLowerCase()
    if (t.includes("reflex")) return "reflexao"
    if (t.includes("aplic")) return "aplicacao"
    if (t.includes("debate") || t.includes("discuss")) return "discussao"
    return "reflexao"
}

function mapDifficulty(index: number): AIQuestion["difficulty"] {
    if (index === 0) return "facil"
    if (index <= 2) return "media"
    return "avancada"
}

function fallbackQuestions(): AIQuestion[] {
    return [
        { id: "q1", text: "Qual aspecto da palestra mais te impactou e por que?", type: "reflexao", difficulty: "facil" },
        { id: "q2", text: "Como voce pode aplicar os conceitos apresentados no seu contexto de trabalho?", type: "aplicacao", difficulty: "media" },
        { id: "q3", text: "Quais desafios voce preve ao implementar as ideias discutidas?", type: "aplicacao", difficulty: "media" },
        { id: "q4", text: "Compare a abordagem do palestrante com suas experiencias anteriores.", type: "reflexao", difficulty: "avancada" },
        { id: "q5", text: "Discuta com sua equipe: como essas ideias se conectam com a estrategia da organizacao?", type: "discussao", difficulty: "avancada" },
    ]
}

export async function generateDevolutiva(
    categoryName: string,
    score: number,
    maxScore: number,
): Promise<string> {
    const percentage = Math.round((score / maxScore) * 100)
    if (percentage >= 75) {
        return `${categoryName} e um ponto forte na sua organizacao. Continue investindo nesta area para manter a excelencia.`
    } else if (percentage >= 50) {
        return `${categoryName} apresenta nivel medio. Ha oportunidades claras de crescimento que podem acelerar os resultados da equipe.`
    }
    return `${categoryName} e uma area prioritaria de desenvolvimento. As palestras recomendadas vao ajudar a construir uma base solida nesta competencia.`
}
