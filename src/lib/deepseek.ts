/**
 * DeepSeek AI Service — CAPACITE Platform
 * Uses DeepSeek chat completions API for intelligent search and question generation.
 */

const DEEPSEEK_API_KEY = "sk-0fdd491fe75e4ef284858134988c49b2"
const DEEPSEEK_BASE_URL = "https://api.deepseek.com/v1"

interface ChatMessage {
    role: "system" | "user" | "assistant"
    content: string
}

interface DeepSeekResponse {
    choices: { message: { content: string } }[]
}

async function chat(messages: ChatMessage[], temperature = 0.7): Promise<string> {
    const res = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages,
            temperature,
            max_tokens: 2048,
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`DeepSeek API error ${res.status}: ${err}`)
    }

    const data: DeepSeekResponse = await res.json()
    return data.choices[0]?.message?.content ?? ""
}

/* ────────────────────────────────────────────
 * BUSCA INTELIGENTE — AI-Powered Search
 * ──────────────────────────────────────────── */

export interface AISearchResult {
    type: "palestra" | "preletor" | "tema" | "insight"
    title: string
    subtitle: string
    relevance: number
    explanation?: string
}

export async function aiSearch(query: string, catalogContext: string): Promise<AISearchResult[]> {
    const systemPrompt = `Você é o assistente de busca inteligente da plataforma CAPACITE de desenvolvimento de liderança.
Você tem acesso ao catálogo de palestras e áreas de conhecimento abaixo.

CATÁLOGO:
${catalogContext}

Instruções:
1. Analise a busca do usuário e encontre os resultados mais relevantes do catálogo.
2. Também sugira insights e temas relacionados que enriqueçam a busca.
3. Responda APENAS em JSON válido, sem markdown, sem \`\`\`, com o formato:
[
  { "type": "palestra"|"preletor"|"tema"|"insight", "title": "...", "subtitle": "...", "relevance": 0-100, "explanation": "..." }
]
4. Ordene por relevância decrescente.
5. Retorne entre 3 e 8 resultados.
6. Sempre em português brasileiro.`

    const response = await chat([
        { role: "system", content: systemPrompt },
        { role: "user", content: query },
    ], 0.5)

    try {
        // Strip any markdown fencing if present  
        const cleaned = response.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim()
        return JSON.parse(cleaned)
    } catch {
        console.error("Failed to parse AI search response:", response)
        return [{
            type: "insight",
            title: "Resposta da IA",
            subtitle: response.slice(0, 200),
            relevance: 80,
        }]
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
    const systemPrompt = `Você é um especialista em andragogia e desenvolvimento de líderes na plataforma CAPACITE.
Sua tarefa é gerar perguntas de reflexão pós-palestra que ajudem o líder a internalizar e aplicar os conceitos apresentados.

Regras:
1. Gere exatamente 5 perguntas.
2. Cada pergunta deve ter um tipo diferente:
   - "reflexao": Introspectiva, sobre a experiência do participante
   - "aplicacao": Prática, sobre como usar no contexto real de trabalho
   - "discussao": Para debate em grupo, conexão com outros temas
3. Distribua as dificuldades: 1 fácil, 2 média, 2 avançada.
4. Perguntas devem ser específicas para o tema da palestra, não genéricas.
5. Responda APENAS em JSON válido, sem markdown, sem \`\`\`:
[
  { "id": "q1", "text": "...", "type": "reflexao"|"aplicacao"|"discussao", "difficulty": "facil"|"media"|"avancada" }
]
6. Sempre em português brasileiro.`

    const userPrompt = `Palestra: "${palestraTitle}"
Preletor: ${palestraSpeaker}
${palestraCategory ? `Categoria: ${palestraCategory}` : ""}

Gere 5 perguntas de processamento pós-palestra.`

    const response = await chat([
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
    ], 0.8)

    try {
        const cleaned = response.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim()
        return JSON.parse(cleaned)
    } catch {
        console.error("Failed to parse AI questions response:", response)
        // Fallback generic questions
        return [
            { id: "q1", text: "Qual aspecto da palestra mais te impactou e por quê?", type: "reflexao", difficulty: "facil" },
            { id: "q2", text: "Como você pode aplicar os conceitos apresentados no seu contexto de trabalho?", type: "aplicacao", difficulty: "media" },
            { id: "q3", text: "Quais desafios você prevê ao implementar as ideias discutidas?", type: "aplicacao", difficulty: "media" },
            { id: "q4", text: "Compare a abordagem do palestrante com suas experiências anteriores.", type: "reflexao", difficulty: "avancada" },
            { id: "q5", text: "Discuta com sua equipe: como essas ideias se conectam com a estratégia da organização?", type: "discussao", difficulty: "avancada" },
        ]
    }
}

/* ────────────────────────────────────────────
 * DEVOLUTIVA — AI-Powered Diagnostic Feedback
 * ──────────────────────────────────────────── */

export async function generateDevolutiva(
    categoryName: string,
    score: number,
    maxScore: number,
): Promise<string> {
    const percentage = Math.round((score / maxScore) * 100)

    const systemPrompt = `Você é um consultor especialista em desenvolvimento de liderança da plataforma CAPACITE.
Gere uma devolutiva concisa (máximo 3 frases) sobre o desempenho do líder na categoria avaliada.
Seja construtivo, específico e motivador. Use tom profissional mas acolhedor.
Responsa APENAS o texto da devolutiva, sem aspas, sem JSON.`

    const userPrompt = `Categoria: "${categoryName}"
Score: ${score}/${maxScore} (${percentage}%)
${percentage >= 75 ? "Ponto forte" : percentage >= 50 ? "Nível médio" : "Lacuna identificada"}

Gere a devolutiva.`

    return await chat([
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
    ], 0.7)
}
