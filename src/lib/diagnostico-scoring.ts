import type { CategoryScore, DiagnosticoAnswer, Trilha, TrilhaType } from "@/types"
import { CATEGORIES, DIAGNOSTICO_QUESTIONS, getPalestrasByCategory } from "@/data/capacite-data"

/**
 * Calculate scores for each of the 7 categories.
 * Score per category = sum of 3 answers (range 3–12).
 * Gap = 12 - score (range 0–9).
 */
export function calculateScores(answers: DiagnosticoAnswer[]): CategoryScore[] {
    return CATEGORIES.map(cat => {
        const catQuestions = DIAGNOSTICO_QUESTIONS.filter(q => q.categoryId === cat.id)
        const score = catQuestions.reduce((sum, q) => {
            const answer = answers.find(a => a.questionId === q.id)
            return sum + (answer?.value ?? 0)
        }, 0)
        return {
            categoryId: cat.id,
            score,
            gap: 12 - score,
        }
    })
}

/**
 * Determine Priority 1 and optional Priority 2.
 * - P1 = category with highest gap
 * - P2 = second highest gap IF within 1 point of P1
 */
export function determinePriorities(scores: CategoryScore[]): { priority1: string; priority2: string | null } {
    const sorted = [...scores].sort((a, b) => b.gap - a.gap)
    const priority1 = sorted[0].categoryId
    const priority2 = sorted.length > 1 && sorted[0].gap - sorted[1].gap <= 1
        ? sorted[1].categoryId
        : null
    return { priority1, priority2 }
}

/**
 * Generate two suggested trilhas based on priorities.
 * - Trilha 1: "Impacto Rápido" — shorter, action-oriented palestras
 * - Trilha 2: "Aprofundamento" — reflective, deeper palestras
 */
export function generateTrilhaSuggestions(
    priority1: string,
    priority2: string | null
): [Trilha, Trilha] {
    const now = new Date().toISOString()
    const primaryPalestras = getPalestrasByCategory(priority1)
    const secondaryPalestras = priority2
        ? getPalestrasByCategory(priority2)
        : []

    // Trilha 1: Impacto Rápido — first 3 from primary + 1 from secondary
    const t1Palestras = [...primaryPalestras.slice(0, 3)]
    if (secondaryPalestras.length > 0) t1Palestras.push(secondaryPalestras[0])

    // Trilha 2: Aprofundamento — mix with more reflection (reverse order, secondary first)
    const t2Palestras = priority2
        ? [...secondaryPalestras.slice(0, 2), ...primaryPalestras.slice(1, 3)]
        : [...primaryPalestras.slice(0, 2), ...primaryPalestras.slice(2, 3)]

    const cat1 = CATEGORIES.find(c => c.id === priority1)!

    const trilha1: Trilha = {
        id: `trilha-impacto-${Date.now()}`,
        title: `Impacto Rápido: ${cat1.shortName}`,
        description: `Comece por aqui se você quer gerar mudanças visíveis em 2-3 semanas. Palestras focadas em ação.`,
        type: "impacto" as TrilhaType,
        categoryId: priority1,
        palestraIds: t1Palestras.map(p => p.id),
        createdAt: now,
    }

    const trilha2: Trilha = {
        id: `trilha-aprofundamento-${Date.now() + 1}`,
        title: `Aprofundamento: ${cat1.shortName}`,
        description: `Comece por aqui se você quer consolidar aprendizados e criar raízes profundas. Palestras focadas em reflexão.`,
        type: "aprofundamento" as TrilhaType,
        categoryId: priority1,
        palestraIds: t2Palestras.map(p => p.id),
        createdAt: now,
    }

    return [trilha1, trilha2]
}

/**
 * Get the strength level for a category score.
 */
export function getStrengthLevel(score: number): "forte" | "medio" | "fraco" {
    if (score >= 10) return "forte"
    if (score >= 7) return "medio"
    return "fraco"
}

export function getStrengthColor(level: "forte" | "medio" | "fraco"): string {
    if (level === "forte") return "#22c55e"
    if (level === "medio") return "#eab308"
    return "#ef4444"
}

/**
 * Generate a mock devolutiva text for a category.
 * In the future this will call DeepSeek.
 */
export function generateDevolutiva(categoryId: string, score: number): {
    whatItMeans: string
    whyItAppeared: string
    firstSteps: string[]
    progressSign: string
} {
    const cat = CATEGORIES.find(c => c.id === categoryId)!
    const level = getStrengthLevel(score)

    type Devolutiva = { whatItMeans: string; whyItAppeared: string; firstSteps: string[]; progressSign: string }

    const devolutivas: Record<string, Devolutiva> = {
        "lideranca-pessoal": {
            whatItMeans: "Autoconsciência é o painel de controle interno que evita que urgência, ego ou ansiedade dirijam a organização.",
            whyItAppeared: "O diagnóstico sugere sinais de liderança mais reativa do que reflexiva.",
            firstSteps: [
                'Pergunta fixa pós-reunião: "O que eu não estou vendo aqui?"',
                "Um ajuste visível do líder comunicado ao time",
                'Fechamento de ciclo semanal: "Que padrão repetimos? Qual pequena mudança quebra esse padrão?"',
            ],
            progressSign: 'O time percebe mais frases como "Eu errei", "Vamos ajustar" — e menos "De novo isso".',
        },
        "pessoas-cultura-confianca": {
            whatItMeans: "Confiança é a fundação invisível sobre a qual tudo se constrói. Sem ela, as pessoas protegem posições em vez de buscar resultados.",
            whyItAppeared: "Há sinais de que as pessoas hesitam em ser transparentes ou discordar abertamente.",
            firstSteps: [
                "Crie um espaço mensal para feedback anônimo",
                "Reconheça publicamente quando alguém trouxer um problema",
                "Elimine uma prática que gera medo (ex: culpar em público)",
            ],
            progressSign: "Pessoas começam a trazer más notícias sem medo e buscam soluções juntas.",
        },
    }

    // Fallback genérico para categorias sem devolutiva customizada
    return devolutivas[categoryId] ?? {
        whatItMeans: `${cat.name} está entre as áreas que mais precisam de atenção na sua organização.`,
        whyItAppeared: level === "fraco"
            ? "Suas respostas indicam lacunas significativas nesta área."
            : "Há espaço para crescimento nesta competência.",
        firstSteps: [
            `Assista as palestras recomendadas sobre ${cat.shortName}`,
            "Discuta os aprendizados com sua equipe semanalmente",
            "Defina uma meta de melhoria para os próximos 14 dias",
        ],
        progressSign: "A equipe começa a perceber mudanças positivas no dia a dia.",
    }
}
