/**
 * API client for CAPACITE backend.
 * All API calls go through this module.
 * Token is stored in localStorage and attached to every request.
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api"

/* ─── Token management ─── */

let token: string | null = localStorage.getItem("capacite_token")

export function setToken(t: string | null) {
    token = t
    if (t) {
        localStorage.setItem("capacite_token", t)
    } else {
        localStorage.removeItem("capacite_token")
    }
}

export function getToken(): string | null {
    return token
}

/* ─── Generic fetch wrapper ─── */

export class ApiError extends Error {
    constructor(
        public status: number,
        message: string,
        public details?: unknown,
    ) {
        super(message)
        this.name = "ApiError"
    }
}

async function request<T>(
    path: string,
    options: RequestInit = {},
): Promise<T> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }

    // Don't set Content-Type for FormData (file uploads)
    if (options.body instanceof FormData) {
        delete headers["Content-Type"]
    }

    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers,
    })

    if (!res.ok) {
        const body = await res.json().catch(() => ({ error: res.statusText }))
        throw new ApiError(res.status, body.error || "Erro na requisição", body.details)
    }

    if (res.status === 204) return undefined as T

    return res.json()
}

/* ─── Auth ─── */

export interface LoginResponse {
    user: ApiUser
    token: string
}

export interface ApiUser {
    id: string
    name: string
    email: string
    phone?: string
    organization: string
    organizationType: "EMPRESA" | "ESCOLA" | "IGREJA"
    role?: string
    location?: string
    avatarUrl?: string
    isAdmin: boolean
    streakDays: number
    lastActiveDate?: string
    createdAt: string
    goldStars?: { type: string; earnedAt: string }[]
    _count?: { diagnosticos: number; trilhas: number }
}

export const auth = {
    register(data: {
        name: string
        email: string
        password: string
        organization: string
        organizationType: "EMPRESA" | "ESCOLA" | "IGREJA"
        phone?: string
        role?: string
        location?: string
    }) {
        return request<LoginResponse>("/auth/register", {
            method: "POST",
            body: JSON.stringify(data),
        })
    },

    login(email: string, password: string) {
        return request<LoginResponse>("/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        })
    },

    getProfile() {
        return request<ApiUser>("/auth/me")
    },

    updateProfile(data: { name?: string; phone?: string; role?: string; location?: string; avatarUrl?: string }) {
        return request<ApiUser>("/auth/me", {
            method: "PATCH",
            body: JSON.stringify(data),
        })
    },
}

/* ─── Users (admin) ─── */

export interface PaginatedUsers {
    users: ApiUser[]
    pagination: { page: number; limit: number; total: number; totalPages: number }
}

export const users = {
    create(data: { name: string; email: string; password?: string; organization?: string; organizationType?: string; role?: string; phone?: string }) {
        return request<ApiUser>("/users", {
            method: "POST",
            body: JSON.stringify(data),
        })
    },

    list(params?: { search?: string; sort?: string; order?: string; page?: number; limit?: number }) {
        const qs = new URLSearchParams()
        if (params?.search) qs.set("search", params.search)
        if (params?.sort) qs.set("sort", params.sort)
        if (params?.order) qs.set("order", params.order)
        if (params?.page) qs.set("page", String(params.page))
        if (params?.limit) qs.set("limit", String(params.limit))
        return request<PaginatedUsers>(`/users?${qs.toString()}`)
    },

    getById(id: string) {
        return request<ApiUser>(`/users/${id}`)
    },

    update(id: string, data: { name?: string; role?: string; isAdmin?: boolean }) {
        return request<ApiUser>(`/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        })
    },

    remove(id: string) {
        return request<{ success: boolean }>(`/users/${id}`, { method: "DELETE" })
    },
}

/* ─── Diagnóstico ─── */

export interface ApiDiagnostico {
    id: string
    userId: string
    answers: Record<string, number>
    categoryScores: Record<string, number>
    categoryGaps: Record<string, number>
    priority1Category: number
    priority2Category: number | null
    devolutiva: string | null
    suggestedTrilhas: unknown
    createdAt: string
    ranking?: Array<{ categoryId: number; categoryName: string; score: number; gap: number }>
    trilhas?: ApiTrilha[]
}

export const diagnostico = {
    create(answers: Record<string, number>) {
        return request<ApiDiagnostico>("/diagnostico", {
            method: "POST",
            body: JSON.stringify({ answers }),
        })
    },

    list() {
        return request<ApiDiagnostico[]>("/diagnostico")
    },

    getLatest() {
        return request<ApiDiagnostico>("/diagnostico/latest")
    },

    getById(id: string) {
        return request<ApiDiagnostico>(`/diagnostico/${id}`)
    },

    compare() {
        return request<{
            oldest?: { id: string; date: string }
            newest?: { id: string; date: string }
            evolution?: Record<string, { before: number; after: number; change: number }>
            totalDiagnosticos: number
            message?: string
        }>("/diagnostico/compare")
    },
}

/* ─── Trilhas ─── */

export interface ApiTrilha {
    id: string
    userId: string
    diagnosticoId?: string
    name: string
    description?: string
    type: "IMPACTO" | "APROFUNDAMENTO" | "CUSTOM"
    palestraIds: string[]
    createdAt: string
    progress?: Array<{ palestraId: string; watched: boolean; watchedAt: string | null }>
    totalPalestras?: number
    watchedCount?: number
    progressPercent?: number
    isComplete?: boolean
}

export const trilhas = {
    create(data: {
        name: string
        description?: string
        type: "IMPACTO" | "APROFUNDAMENTO" | "CUSTOM"
        palestraIds: string[]
        diagnosticoId?: string
    }) {
        return request<ApiTrilha>("/trilhas", {
            method: "POST",
            body: JSON.stringify(data),
        })
    },

    list() {
        return request<ApiTrilha[]>("/trilhas")
    },

    getById(id: string) {
        return request<ApiTrilha>(`/trilhas/${id}`)
    },

    markWatched(trilhaId: string, palestraId: string, watched: boolean) {
        return request(`/trilhas/${trilhaId}/palestras/${palestraId}`, {
            method: "PATCH",
            body: JSON.stringify({ watched }),
        })
    },

    remove(id: string) {
        return request<{ success: boolean }>(`/trilhas/${id}`, { method: "DELETE" })
    },
}

/* ─── Gamificação ─── */

export interface GamificacaoSummary {
    goldStars: Array<{ type: string; earnedAt: string }>
    totalStars: number
    streakDays: number
    lastActiveDate: string | null
    totalPalestrasAssistidas: number
    totalTrilhasCompletas: number
    totalTrilhas: number
}

export const gamificacao = {
    getSummary() {
        return request<GamificacaoSummary>("/gamificacao")
    },

    getStars() {
        return request<Array<{ type: string; earnedAt: string }>>("/gamificacao/stars")
    },

    checkStars() {
        return request<{ awarded: string[] }>("/gamificacao/check", { method: "POST" })
    },

    updateStreak() {
        return request<{ streakDays: number }>("/gamificacao/streak", { method: "POST" })
    },
}

/* ─── AI (proxied through backend) ─── */

export const ai = {
    search(query: string) {
        return request<{ results: Array<{ palestraId: string; title: string; speaker?: string; relevance: string; categoryName: string; type?: string }>; suggestion: string } | { raw: string }>("/ai/search", {
            method: "POST",
            body: JSON.stringify({ query }),
        })
    },

    generateQuestions(palestraTitle: string, speaker: string, categoryName: string, customContext?: string) {
        return request<{ questions: Array<{ question: string; purpose: string; type: string }> } | { raw: string }>("/ai/questions", {
            method: "POST",
            body: JSON.stringify({ palestraTitle, speaker, categoryName, customContext }),
        })
    },
}

/* ─── Files ─── */

export const files = {
    upload(diagnosticoId: string, file: File) {
        const form = new FormData()
        form.append("file", file)
        return request<{ id: string; originalName: string; uploadedAt: string }>(`/files/upload/${diagnosticoId}`, {
            method: "POST",
            body: form,
        })
    },

    listByDiagnostico(diagnosticoId: string) {
        return request<Array<{ id: string; originalName: string; mimeType: string; size: number; uploadedAt: string }>>(`/files/diagnostico/${diagnosticoId}`)
    },

    remove(id: string) {
        return request<{ success: boolean }>(`/files/${id}`, { method: "DELETE" })
    },
}

/* ─── Palestras (public catalog) ─── */

export const palestras = {
    getCatalog() {
        return request<Array<{ id: string; title: string; speaker: string; duration: string; description: string; categoryIds: number[]; year: number; glsnowUrl: string }>>("/palestras/catalog")
    },

    getCategories() {
        return request<Array<{ id: number; name: string; questionIds: number[] }>>("/palestras/categories")
    },
}
