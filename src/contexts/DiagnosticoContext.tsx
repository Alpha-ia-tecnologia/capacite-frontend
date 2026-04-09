import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { DiagnosticoAnswer, DiagnosticoResult, Trilha, CategoryScore } from "@/types"
import { diagnostico as diagApi, type ApiDiagnostico } from "@/lib/api"
import { CATEGORIES } from "@/data/capacite-data"
import { calculateScores, determinePriorities, generateTrilhaSuggestions } from "@/lib/diagnostico-scoring"

interface DiagnosticoState {
    /** All past results (most recent first) */
    history: DiagnosticoResult[]
    /** Latest result, null if never done */
    latestResult: DiagnosticoResult | null
    /** Whether the user has completed at least one diagnostic */
    hasDiagnostico: boolean
    /** Trilhas suggested by the latest diagnostic */
    suggestedTrilhas: [Trilha, Trilha] | null
    /** AI-generated devolutiva text */
    devolutiva: string | null
    /** Submit a new set of answers and compute + store the result */
    submitDiagnostico: (answers: DiagnosticoAnswer[]) => Promise<DiagnosticoResult>
    /** Loading state */
    loading: boolean
    /** Load history from API */
    loadHistory: () => Promise<void>
}

const DiagnosticoContext = createContext<DiagnosticoState | null>(null)

function apiToResult(api: ApiDiagnostico): DiagnosticoResult {
    const categoryScores = (api.categoryScores ?? {}) as Record<string, number>
    const categoryGaps = (api.categoryGaps ?? {}) as Record<string, number>

    const scores: CategoryScore[] = CATEGORIES.map(cat => {
        // Backend uses numeric IDs, frontend uses string IDs
        const numId = String(CATEGORIES.indexOf(cat) + 1)
        return {
            categoryId: cat.id,
            score: categoryScores[numId] ?? 0,
            gap: categoryGaps[numId] ?? 0,
        }
    })

    const p1Cat = CATEGORIES[api.priority1Category - 1]
    const p2Cat = api.priority2Category ? CATEGORIES[api.priority2Category - 1] : null

    return {
        id: api.id,
        date: api.createdAt,
        answers: Object.entries((api.answers ?? {}) as Record<string, number>).map(([key, value]) => ({
            questionId: key.startsWith("q") ? key : `q${key}`,
            value: value as 1 | 2 | 3 | 4,
        })),
        scores,
        priority1: p1Cat?.id ?? "",
        priority2: p2Cat?.id ?? null,
        suggestedTrilhas: ["", ""], // Will be filled by trilha suggestions
    }
}

export function DiagnosticoProvider({ children }: { children: ReactNode }) {
    const [history, setHistory] = useState<DiagnosticoResult[]>([])
    const [suggestedTrilhas, setSuggestedTrilhas] = useState<[Trilha, Trilha] | null>(null)
    const [devolutiva, setDevolutiva] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const latestResult = history.length > 0 ? history[0] : null
    const hasDiagnostico = history.length > 0

    const loadHistory = useCallback(async () => {
        try {
            const list = await diagApi.list()
            setHistory(list.map(apiToResult))

            // Load devolutiva from latest
            if (list.length > 0 && list[0].devolutiva) {
                setDevolutiva(list[0].devolutiva)
            }
        } catch (err) {
            console.error("Failed to load diagnostico history:", err)
        }
    }, [])

    const submitDiagnostico = useCallback(async (answers: DiagnosticoAnswer[]): Promise<DiagnosticoResult> => {
        setLoading(true)
        try {
            // Convert frontend answers to backend format {q1: 3, q2: 2, ...}
            const answersMap: Record<string, number> = {}
            answers.forEach(a => {
                answersMap[a.questionId] = a.value
            })

            const apiResult = await diagApi.create(answersMap)
            const result = apiToResult(apiResult)

            // Also compute local trilha suggestions (for immediate display)
            const scores = calculateScores(answers)
            const { priority1, priority2 } = determinePriorities(scores)
            const trilhas = generateTrilhaSuggestions(priority1, priority2)
            result.suggestedTrilhas = [trilhas[0].id, trilhas[1].id]

            setSuggestedTrilhas(trilhas)
            setHistory(prev => [result, ...prev])

            if (apiResult.devolutiva) {
                setDevolutiva(apiResult.devolutiva)
            }

            return result
        } catch (err) {
            // Fallback: compute locally if API fails
            console.error("API diagnostico failed, computing locally:", err)
            const scores = calculateScores(answers)
            const { priority1, priority2 } = determinePriorities(scores)
            const trilhas = generateTrilhaSuggestions(priority1, priority2)

            const result: DiagnosticoResult = {
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
                answers,
                scores,
                priority1,
                priority2,
                suggestedTrilhas: [trilhas[0].id, trilhas[1].id],
            }

            setHistory(prev => [result, ...prev])
            setSuggestedTrilhas(trilhas)

            return result
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <DiagnosticoContext.Provider value={{
            history, latestResult, hasDiagnostico, suggestedTrilhas, devolutiva,
            submitDiagnostico, loading, loadHistory,
        }}>
            {children}
        </DiagnosticoContext.Provider>
    )
}

export function useDiagnostico(): DiagnosticoState {
    const ctx = useContext(DiagnosticoContext)
    if (!ctx) throw new Error("useDiagnostico must be used within DiagnosticoProvider")
    return ctx
}
