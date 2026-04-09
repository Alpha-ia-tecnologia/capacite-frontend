import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { GoldStar, StarMilestone, AppNotification } from "@/types"
import { STAR_DEFINITIONS as DEFS } from "@/types"
import { gamificacao as gamApi } from "@/lib/api"

interface GamificacaoState {
    /** Earned stars */
    stars: GoldStar[]
    /** Pending (unread) star notifications */
    pendingNotification: AppNotification | null
    /** Check and award a star if milestone reached */
    checkMilestone: (milestone: StarMilestone) => boolean
    /** Dismiss the pending notification */
    dismissNotification: () => void
    /** Whether a specific star has been earned */
    hasStar: (milestone: StarMilestone) => boolean
    /** Streak days */
    streakDays: number
    /** Update the streak */
    updateStreak: () => void
    /** Load gamification data from API */
    loadGamificacao: () => Promise<void>
}

const STAR_TYPE_MAP: Record<string, StarMilestone> = {
    DIAGNOSTICO_COMPLETO: "diagnostico_completo",
    PRIMEIRA_PALESTRA: "primeira_palestra",
    TRILHA_COMPLETA: "trilha_completa",
    DIAGNOSTICO_6MESES: "diagnostico_6meses",
    TRES_TRILHAS: "tres_trilhas",
}

const GamificacaoContext = createContext<GamificacaoState | null>(null)

export function GamificacaoProvider({ children }: { children: ReactNode }) {
    const [stars, setStars] = useState<GoldStar[]>([])
    const [pendingNotification, setPendingNotification] = useState<AppNotification | null>(null)
    const [streakDays, setStreakDays] = useState<number>(0)

    const loadGamificacao = useCallback(async () => {
        try {
            const summary = await gamApi.getSummary()
            setStreakDays(summary.streakDays)

            const loadedStars: GoldStar[] = summary.goldStars.map(s => {
                const milestone = STAR_TYPE_MAP[s.type] ?? (s.type.toLowerCase() as StarMilestone)
                const def = DEFS[milestone]
                return {
                    milestone,
                    earnedAt: s.earnedAt,
                    title: def?.title ?? s.type,
                    description: def?.description ?? "",
                }
            })
            setStars(loadedStars)
        } catch (err) {
            console.error("Failed to load gamificacao:", err)
        }
    }, [])

    const hasStar = useCallback((milestone: StarMilestone): boolean => {
        return stars.some(s => s.milestone === milestone)
    }, [stars])

    const checkMilestone = useCallback((milestone: StarMilestone): boolean => {
        if (stars.some(s => s.milestone === milestone)) return false

        const def = DEFS[milestone]
        const newStar: GoldStar = {
            milestone,
            earnedAt: new Date().toISOString(),
            title: def.title,
            description: def.description,
        }

        setStars(prev => [...prev, newStar])
        setPendingNotification({
            id: crypto.randomUUID(),
            type: "star",
            title: "Estrela Dourada!",
            message: `${def.title}: ${def.description}. Você merece!`,
            read: false,
            createdAt: new Date().toISOString(),
        })

        // Notify backend asynchronously
        gamApi.checkStars().catch(() => {})

        return true
    }, [stars])

    const dismissNotification = useCallback(() => {
        setPendingNotification(null)
    }, [])

    const updateStreak = useCallback(() => {
        gamApi.updateStreak()
            .then(res => {
                setStreakDays(res.streakDays)
            })
            .catch(() => {})
    }, [])

    return (
        <GamificacaoContext.Provider value={{
            stars, pendingNotification, checkMilestone, dismissNotification,
            hasStar, streakDays, updateStreak, loadGamificacao,
        }}>
            {children}
        </GamificacaoContext.Provider>
    )
}

export function useGamificacao(): GamificacaoState {
    const ctx = useContext(GamificacaoContext)
    if (!ctx) throw new Error("useGamificacao must be used within GamificacaoProvider")
    return ctx
}
