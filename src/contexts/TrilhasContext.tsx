import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { Trilha, TrilhaProgress } from "@/types"
import { storage } from "@/lib/storage"

interface TrilhasState {
    /** User's enrolled trilhas */
    trilhas: Trilha[]
    /** Progress for each enrolled trilha */
    progress: Record<string, TrilhaProgress>
    /** Total watched palestras across all trilhas */
    totalWatched: number
    /** Enroll in a trilha */
    enrollTrilha: (trilha: Trilha) => void
    /** Mark a palestra as watched in a trilha */
    markPalestraWatched: (trilhaId: string, palestraId: string) => void
    /** Check if a palestra is watched in a trilha */
    isPalestraWatched: (trilhaId: string, palestraId: string) => boolean
    /** Get progress % for a trilha */
    getProgress: (trilhaId: string) => number
    /** Count of completed trilhas */
    completedCount: number
}

const TrilhasContext = createContext<TrilhasState | null>(null)

export function TrilhasProvider({ children }: { children: ReactNode }) {
    const [trilhas, setTrilhas] = useState<Trilha[]>(() =>
        storage.get<Trilha[]>("trilhas") ?? []
    )
    const [progress, setProgress] = useState<Record<string, TrilhaProgress>>(() =>
        storage.get<Record<string, TrilhaProgress>>("trilhas_progress") ?? {}
    )

    useEffect(() => { storage.set("trilhas", trilhas) }, [trilhas])
    useEffect(() => { storage.set("trilhas_progress", progress) }, [progress])

    const enrollTrilha = useCallback((trilha: Trilha) => {
        setTrilhas(prev => {
            if (prev.find(t => t.id === trilha.id)) return prev
            return [...prev, trilha]
        })
        setProgress(prev => ({
            ...prev,
            [trilha.id]: {
                trilhaId: trilha.id,
                watchedPalestraIds: [],
                startedAt: new Date().toISOString(),
                completedAt: null,
            },
        }))
    }, [])

    const markPalestraWatched = useCallback((trilhaId: string, palestraId: string) => {
        setProgress(prev => {
            const existing = prev[trilhaId]
            if (!existing) return prev
            if (existing.watchedPalestraIds.includes(palestraId)) return prev

            const updatedWatched = [...existing.watchedPalestraIds, palestraId]
            const trilha = trilhas.find(t => t.id === trilhaId)
            const isComplete = trilha ? updatedWatched.length >= trilha.palestraIds.length : false

            return {
                ...prev,
                [trilhaId]: {
                    ...existing,
                    watchedPalestraIds: updatedWatched,
                    completedAt: isComplete ? new Date().toISOString() : null,
                },
            }
        })
    }, [trilhas])

    const isPalestraWatched = useCallback((trilhaId: string, palestraId: string): boolean => {
        return progress[trilhaId]?.watchedPalestraIds.includes(palestraId) ?? false
    }, [progress])

    const getProgress = useCallback((trilhaId: string): number => {
        const trilha = trilhas.find(t => t.id === trilhaId)
        const prog = progress[trilhaId]
        if (!trilha || !prog) return 0
        return Math.round((prog.watchedPalestraIds.length / trilha.palestraIds.length) * 100)
    }, [trilhas, progress])

    const totalWatched = Object.values(progress).reduce(
        (sum, p) => sum + p.watchedPalestraIds.length, 0
    )

    const completedCount = Object.values(progress).filter(p => p.completedAt !== null).length

    return (
        <TrilhasContext.Provider value={{
            trilhas, progress, totalWatched,
            enrollTrilha, markPalestraWatched, isPalestraWatched, getProgress,
            completedCount,
        }}>
            {children}
        </TrilhasContext.Provider>
    )
}

export function useTrilhas(): TrilhasState {
    const ctx = useContext(TrilhasContext)
    if (!ctx) throw new Error("useTrilhas must be used within TrilhasProvider")
    return ctx
}
