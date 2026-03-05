import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { GoldStar, StarMilestone, AppNotification } from "@/types"
import { STAR_DEFINITIONS as DEFS } from "@/types"
import { storage } from "@/lib/storage"

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
}

const GamificacaoContext = createContext<GamificacaoState | null>(null)

export function GamificacaoProvider({ children }: { children: ReactNode }) {
    const [stars, setStars] = useState<GoldStar[]>(() =>
        storage.get<GoldStar[]>("gold_stars") ?? []
    )
    const [pendingNotification, setPendingNotification] = useState<AppNotification | null>(null)
    const [streakDays, setStreakDays] = useState<number>(() =>
        storage.get<number>("streak_days") ?? 0
    )

    useEffect(() => { storage.set("gold_stars", stars) }, [stars])
    useEffect(() => { storage.set("streak_days", streakDays) }, [streakDays])

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
            title: "⭐ Estrela Dourada!",
            message: `${def.title}: ${def.description}. Você merece!`,
            read: false,
            createdAt: new Date().toISOString(),
        })

        return true
    }, [stars])

    const dismissNotification = useCallback(() => {
        setPendingNotification(null)
    }, [])

    const updateStreak = useCallback(() => {
        const today = new Date().toISOString().split("T")[0]
        const lastDate = storage.get<string>("last_streak_date")

        if (lastDate === today) return // Already counted today

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayStr = yesterday.toISOString().split("T")[0]

        if (lastDate === yesterdayStr) {
            setStreakDays(prev => prev + 1)
        } else {
            setStreakDays(1) // Reset streak
        }

        storage.set("last_streak_date", today)
    }, [])

    return (
        <GamificacaoContext.Provider value={{
            stars, pendingNotification, checkMilestone, dismissNotification,
            hasStar, streakDays, updateStreak,
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
