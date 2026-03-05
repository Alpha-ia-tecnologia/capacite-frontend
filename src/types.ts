/* ─── Domain Types ─── */

export type OrganizationType = "empresa" | "escola" | "igreja"

export interface User {
    id: string
    name: string
    email: string
    phone: string
    organization: string
    organizationType: OrganizationType
    role: string
    location: string
    avatarUrl: string
    createdAt: string
    streakDays: number
    lastActiveDate: string
    isAdmin?: boolean
}

/* ─── Diagnóstico ─── */
export type ScaleValue = 1 | 2 | 3 | 4
export const SCALE_LABELS: Record<ScaleValue, string> = {
    1: "Nunca",
    2: "Às vezes",
    3: "Frequentemente",
    4: "Sempre",
}

export interface DiagnosticoQuestion {
    id: string
    categoryId: string
    text: string
    order: number
}

export interface CategoryDefinition {
    id: string
    name: string
    shortName: string
    description: string
    icon: string // lucide icon name
    color: string
}

export interface DiagnosticoAnswer {
    questionId: string
    value: ScaleValue
}

export interface CategoryScore {
    categoryId: string
    score: number   // 3–12
    gap: number     // 12 - score (0–9)
}

export interface DiagnosticoResult {
    id: string
    date: string
    answers: DiagnosticoAnswer[]
    scores: CategoryScore[]
    priority1: string  // categoryId
    priority2: string | null  // categoryId or null
    suggestedTrilhas: [string, string] // two trilha IDs
}

/* ─── Palestras ─── */
export interface Palestra {
    id: string
    title: string
    speaker: string
    speakerAvatar: string
    duration: string // e.g. "25 min"
    description: string
    categoryIds: string[]
    year: number
    glsnowUrl: string
}

/* ─── Trilhas ─── */
export type TrilhaType = "impacto" | "aprofundamento" | "custom"

export interface Trilha {
    id: string
    title: string
    description: string
    type: TrilhaType
    categoryId: string
    palestraIds: string[]
    createdAt: string
}

export interface TrilhaProgress {
    trilhaId: string
    watchedPalestraIds: string[]
    startedAt: string
    completedAt: string | null
}

/* ─── Gamificação ─── */
export type StarMilestone =
    | "diagnostico_completo"
    | "primeira_palestra"
    | "trilha_completa"
    | "diagnostico_6meses"
    | "tres_trilhas"

export interface GoldStar {
    milestone: StarMilestone
    earnedAt: string
    title: string
    description: string
}

export const STAR_DEFINITIONS: Record<StarMilestone, { title: string; description: string }> = {
    diagnostico_completo: { title: "Primeira Estrela", description: "Completou o diagnóstico" },
    primeira_palestra: { title: "Segunda Estrela", description: "Assistiu a primeira palestra" },
    trilha_completa: { title: "Terceira Estrela", description: "Completou uma trilha inteira" },
    diagnostico_6meses: { title: "Quarta Estrela", description: "Refez o diagnóstico após 6 meses" },
    tres_trilhas: { title: "Quinta Estrela", description: "Completou 3 trilhas diferentes" },
}

/* ─── Notifications ─── */
export interface AppNotification {
    id: string
    type: "star" | "reminder" | "milestone" | "inactivity"
    title: string
    message: string
    read: boolean
    createdAt: string
}
