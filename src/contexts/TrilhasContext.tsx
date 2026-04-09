import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Trilha, TrilhaProgress } from "@/types"
import { trilhas as trilhasApi, type ApiTrilha } from "@/lib/api"

interface TrilhasState {
    /** User's enrolled trilhas */
    trilhas: Trilha[]
    /** Progress for each enrolled trilha */
    progress: Record<string, TrilhaProgress>
    /** Total watched palestras across all trilhas */
    totalWatched: number
    /** Enroll in a trilha */
    enrollTrilha: (trilha: Trilha) => Promise<void>
    /** Mark a palestra as watched in a trilha */
    markPalestraWatched: (trilhaId: string, palestraId: string) => Promise<void>
    /** Check if a palestra is watched in a trilha */
    isPalestraWatched: (trilhaId: string, palestraId: string) => boolean
    /** Get progress % for a trilha */
    getProgress: (trilhaId: string) => number
    /** Count of completed trilhas */
    completedCount: number
    /** Loading state */
    loading: boolean
    /** Load trilhas from API */
    loadTrilhas: () => Promise<void>
}

const TrilhasContext = createContext<TrilhasState | null>(null)

function apiTrilhaTypeToLocal(type: string): "impacto" | "aprofundamento" | "custom" {
    return type.toLowerCase() as "impacto" | "aprofundamento" | "custom"
}

function apiToTrilha(api: ApiTrilha): { trilha: Trilha; prog: TrilhaProgress } {
    const watchedIds = api.progress
        ?.filter(p => p.watched)
        .map(p => p.palestraId) ?? []

    const isComplete = api.isComplete ?? (api.palestraIds.length > 0 && watchedIds.length === api.palestraIds.length)

    return {
        trilha: {
            id: api.id,
            title: api.name,
            description: api.description ?? "",
            type: apiTrilhaTypeToLocal(api.type),
            categoryId: "", // Will be derived from palestras if needed
            palestraIds: api.palestraIds as string[],
            createdAt: api.createdAt,
        },
        prog: {
            trilhaId: api.id,
            watchedPalestraIds: watchedIds,
            startedAt: api.createdAt,
            completedAt: isComplete ? new Date().toISOString() : null,
        },
    }
}

export function TrilhasProvider({ children }: { children: ReactNode }) {
    const [trilhas, setTrilhas] = useState<Trilha[]>([])
    const [progress, setProgress] = useState<Record<string, TrilhaProgress>>({})
    const [loading, setLoading] = useState(false)

    const loadTrilhas = useCallback(async () => {
        try {
            const apiList = await trilhasApi.list()
            const results = apiList.map(apiToTrilha)

            // Deduplicate: keep only the first trilha per name+type
            const seen = new Map<string, typeof results[0]>()
            const duplicateIds: string[] = []

            for (const r of results) {
                const key = `${r.trilha.title}::${r.trilha.type}`
                if (seen.has(key)) {
                    duplicateIds.push(r.trilha.id)
                } else {
                    seen.set(key, r)
                }
            }

            // Delete duplicates from backend silently
            for (const id of duplicateIds) {
                trilhasApi.remove(id).catch(() => {})
            }

            const uniqueResults = [...seen.values()]
            setTrilhas(uniqueResults.map(r => r.trilha))

            const progMap: Record<string, TrilhaProgress> = {}
            uniqueResults.forEach(r => {
                progMap[r.trilha.id] = r.prog
            })
            setProgress(progMap)
        } catch (err) {
            console.error("Failed to load trilhas:", err)
        }
    }, [])

    const enrollTrilha = useCallback(async (trilha: Trilha) => {
        // Avoid duplicates by name + type (not id, since suggested trilhas get new ids each time)
        const duplicate = trilhas.find(t => t.title === trilha.title && t.type === trilha.type)
        if (duplicate) return

        setLoading(true)
        try {
            const created = await trilhasApi.create({
                name: trilha.title,
                description: trilha.description,
                type: trilha.type.toUpperCase() as "IMPACTO" | "APROFUNDAMENTO" | "CUSTOM",
                palestraIds: trilha.palestraIds,
            })

            const { trilha: newTrilha, prog } = apiToTrilha(created)
            setTrilhas(prev => [...prev, newTrilha])
            setProgress(prev => ({ ...prev, [newTrilha.id]: prog }))
        } catch (err) {
            console.error("Failed to enroll trilha:", err)
            // Fallback: add locally
            setTrilhas(prev => [...prev, trilha])
            setProgress(prev => ({
                ...prev,
                [trilha.id]: {
                    trilhaId: trilha.id,
                    watchedPalestraIds: [],
                    startedAt: new Date().toISOString(),
                    completedAt: null,
                },
            }))
        } finally {
            setLoading(false)
        }
    }, [trilhas])

    const markPalestraWatched = useCallback(async (trilhaId: string, palestraId: string) => {
        const existing = progress[trilhaId]
        if (!existing) return
        if (existing.watchedPalestraIds.includes(palestraId)) return

        // Optimistic update
        const updatedWatched = [...existing.watchedPalestraIds, palestraId]
        const trilha = trilhas.find(t => t.id === trilhaId)
        const isComplete = trilha ? updatedWatched.length >= trilha.palestraIds.length : false

        setProgress(prev => ({
            ...prev,
            [trilhaId]: {
                ...existing,
                watchedPalestraIds: updatedWatched,
                completedAt: isComplete ? new Date().toISOString() : null,
            },
        }))

        try {
            await trilhasApi.markWatched(trilhaId, palestraId, true)
        } catch (err) {
            console.error("Failed to mark watched:", err)
            // Revert on failure
            setProgress(prev => ({
                ...prev,
                [trilhaId]: existing,
            }))
        }
    }, [progress, trilhas])

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
            completedCount, loading, loadTrilhas,
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
