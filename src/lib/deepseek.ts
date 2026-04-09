/**
 * DeepSeek AI Service — CAPACITE Platform
 * Proxied through the backend API to protect the API key.
 * Falls back to direct API calls only if backend is unavailable.
 */

import { ai as aiApi } from "@/lib/api"

/* ────────────────────────────────────────────
 * BUSCA INTELIGENTE — AI-Powered Search
 * ──────────────────────────────────────────── */

export interface AISearchResult {
    type: "palestra" | "preletor" | "tema" | "insight"
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

export async function aiSearch(query: string, _catalogContext?: string): Promise<AISearchResult[]> {
    try {
        const res = await aiApi.search(query)

        // If the response came as structured results from the backend
        if ("results" in res && Array.isArray(res.results)) {
            return deduplicateResults(res.results.map(r => ({
                type: mapResultType(r.type),
                title: r.title,
                subtitle: r.speaker ? `${r.speaker} — ${r.categoryName}` : (r.categoryName || "Sugestão da IA"),
                relevance: 90,
                explanation: r.relevance,
                speaker: r.speaker,
            })))
        }

        // If it came as raw text
        if ("raw" in res) {
            const rawText = String(res.raw);
            const cleaned = rawText.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim();
            
            try {
                const parsed = JSON.parse(cleaned);
                if (parsed.results && Array.isArray(parsed.results)) {
                    return deduplicateResults(parsed.results.map((r: any) => ({
                        type: mapResultType(r.type),
                        title: r.title || "Recomendação",
                        subtitle: r.speaker ? `${r.speaker}` : (r.categoryName || "Sugestão da IA"),
                        relevance: typeof r.relevance === 'number' ? r.relevance : parseInt(r.relevance) || 90,
                        explanation: typeof r.relevance === 'string' && r.relevance.length > 10 ? r.relevance : (r.explanation || "Sem descrição"),
                        speaker: r.speaker,
                    })))
                }
            } catch {
                // Not JSON, or malformed JSON, fall through to text insight
            }

            return [{
                type: "insight",
                title: "Análise da IA",
                subtitle: cleaned.length > 200 ? cleaned.slice(0, 200) + "..." : cleaned,
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

/* ────────────────────────────────────────────
 * PERGUNTAS — AI-Powered Question Generation
 * ──────────────────────────────────────────── */

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
            palestraCategory ?? "Liderança",
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
            // Try parsing the raw response
            try {
                const parsed = JSON.parse(String(res.raw).replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim())
                if (Array.isArray(parsed)) return parsed
            } catch {
                // Fall through to fallback
            }
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
        { id: "q1", text: "Qual aspecto da palestra mais te impactou e por quê?", type: "reflexao", difficulty: "facil" },
        { id: "q2", text: "Como você pode aplicar os conceitos apresentados no seu contexto de trabalho?", type: "aplicacao", difficulty: "media" },
        { id: "q3", text: "Quais desafios você prevê ao implementar as ideias discutidas?", type: "aplicacao", difficulty: "media" },
        { id: "q4", text: "Compare a abordagem do palestrante com suas experiências anteriores.", type: "reflexao", difficulty: "avancada" },
        { id: "q5", text: "Discuta com sua equipe: como essas ideias se conectam com a estratégia da organização?", type: "discussao", difficulty: "avancada" },
    ]
}

/* ────────────────────────────────────────────
 * DEVOLUTIVA — AI-Powered Diagnostic Feedback
 * ──────────────────────────────────────────── */

export async function generateDevolutiva(
    categoryName: string,
    score: number,
    maxScore: number,
): Promise<string> {
    // Devolutiva is now generated server-side during diagnostico creation
    // This function is kept for backward compatibility
    const percentage = Math.round((score / maxScore) * 100)
    if (percentage >= 75) {
        return `${categoryName} é um ponto forte na sua organização. Continue investindo nesta área para manter a excelência.`
    } else if (percentage >= 50) {
        return `${categoryName} apresenta nível médio. Há oportunidades claras de crescimento que podem acelerar os resultados da equipe.`
    }
    return `${categoryName} é uma área prioritária de desenvolvimento. As palestras recomendadas vão ajudar a construir uma base sólida nesta competência.`
}
