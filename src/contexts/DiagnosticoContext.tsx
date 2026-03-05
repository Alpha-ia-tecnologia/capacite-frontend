import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { DiagnosticoAnswer, DiagnosticoResult, Trilha } from "@/types"
import { storage } from "@/lib/storage"
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
    /** Submit a new set of answers and compute + store the result */
    submitDiagnostico: (answers: DiagnosticoAnswer[]) => DiagnosticoResult
}

const DiagnosticoContext = createContext<DiagnosticoState | null>(null)

export function DiagnosticoProvider({ children }: { children: ReactNode }) {
    const [history, setHistory] = useState<DiagnosticoResult[]>(() =>
        storage.get<DiagnosticoResult[]>("diagnostico_history") ?? []
    )
    const [suggestedTrilhas, setSuggestedTrilhas] = useState<[Trilha, Trilha] | null>(() =>
        storage.get<[Trilha, Trilha]>("suggested_trilhas") ?? null
    )

    useEffect(() => {
        storage.set("diagnostico_history", history)
    }, [history])

    useEffect(() => {
        if (suggestedTrilhas) storage.set("suggested_trilhas", suggestedTrilhas)
    }, [suggestedTrilhas])

    const latestResult = history.length > 0 ? history[0] : null
    const hasDiagnostico = history.length > 0

    const submitDiagnostico = useCallback((answers: DiagnosticoAnswer[]): DiagnosticoResult => {
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
    }, [])

    return (
        <DiagnosticoContext.Provider value={{ history, latestResult, hasDiagnostico, suggestedTrilhas, submitDiagnostico }}>
            {children}
        </DiagnosticoContext.Provider>
    )
}

export function useDiagnostico(): DiagnosticoState {
    const ctx = useContext(DiagnosticoContext)
    if (!ctx) throw new Error("useDiagnostico must be used within DiagnosticoProvider")
    return ctx
}
