import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { User, OrganizationType } from "@/types"
import { storage } from "@/lib/storage"
import { auth as authApi, users as usersApi, setToken, getToken, type ApiUser, type PaginatedUsers } from "@/lib/api"

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isAdmin: boolean
    loading: boolean
    login: (email: string, password: string) => Promise<boolean>
    register: (data: { name: string; email: string; password: string; organization: string; organizationType: OrganizationType }) => Promise<void>
    logout: () => void
    updateUser: (patch: Partial<User>) => Promise<void>
    // Admin
    allUsers: User[]
    loadUsers: (params?: { search?: string }) => Promise<void>
    updateUserById: (id: string, patch: Partial<User>) => Promise<void>
    addUser: (data: { name: string; email: string; password?: string; organization?: string; organizationType?: OrganizationType }) => Promise<void>
    deleteUser: (id: string) => Promise<void>
}

const AuthContext = createContext<AuthState | null>(null)

function apiUserToUser(u: ApiUser): User {
    return {
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone ?? "",
        organization: u.organization,
        organizationType: u.organizationType.toLowerCase() as OrganizationType,
        role: u.role ?? "",
        location: u.location ?? "",
        avatarUrl: u.avatarUrl ?? "",
        createdAt: u.createdAt,
        streakDays: u.streakDays,
        lastActiveDate: u.lastActiveDate ?? new Date().toISOString().split("T")[0],
        isAdmin: u.isAdmin,
    }
}

function orgTypeToApi(t: OrganizationType): "EMPRESA" | "ESCOLA" | "IGREJA" {
    return t.toUpperCase() as "EMPRESA" | "ESCOLA" | "IGREJA"
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => storage.get<User>("user"))
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)

    // On mount, if we have a token try to restore the session
    useEffect(() => {
        const t = getToken()
        if (t && !user) {
            authApi.getProfile()
                .then(profile => {
                    const u = apiUserToUser(profile)
                    setUser(u)
                    storage.set("user", u)
                })
                .catch(() => {
                    setToken(null)
                    storage.remove("user")
                })
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Sync user to localStorage
    useEffect(() => {
        if (user) {
            storage.set("user", user)
        } else {
            storage.remove("user")
        }
    }, [user])

    const login = async (email: string, password: string): Promise<boolean> => {
        setLoading(true)
        try {
            const res = await authApi.login(email, password)
            setToken(res.token)
            const u = apiUserToUser(res.user)
            setUser(u)
            return true
        } catch (err) {
            console.error("Login failed:", err)
            return false
        } finally {
            setLoading(false)
        }
    }

    const register = async (data: { name: string; email: string; password: string; organization: string; organizationType: OrganizationType }) => {
        setLoading(true)
        try {
            const res = await authApi.register({
                name: data.name,
                email: data.email,
                password: data.password,
                organization: data.organization,
                organizationType: orgTypeToApi(data.organizationType),
            })
            setToken(res.token)
            const u = apiUserToUser(res.user)
            setUser(u)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        storage.remove("user")
        window.location.href = "/login"
    }

    const updateUser = async (patch: Partial<User>) => {
        try {
            const updated = await authApi.updateProfile(patch)
            const u = apiUserToUser(updated)
            setUser(u)
        } catch (err) {
            // Fallback: update locally
            setUser(prev => prev ? { ...prev, ...patch } : prev)
        }
    }

    const loadUsers = useCallback(async (params?: { search?: string }) => {
        try {
            const res: PaginatedUsers = await usersApi.list({ ...params, limit: 100 })
            setAllUsers(res.users.map(apiUserToUser))
        } catch (err) {
            console.error("Failed to load users:", err)
        }
    }, [])

    const updateUserById = async (id: string, patch: Partial<User>) => {
        try {
            await usersApi.update(id, patch)
            setAllUsers(prev => prev.map(u => u.id === id ? { ...u, ...patch } : u))
        } catch (err) {
            console.error("Failed to update user:", err)
        }
    }

    const addUser = async (data: { name: string; email: string; password?: string; organization?: string; organizationType?: OrganizationType }) => {
        try {
            await usersApi.create(data)
            await loadUsers()
        } catch (err) {
            console.error("Failed to create user:", err)
            throw err
        }
    }

    const deleteUser = async (id: string) => {
        try {
            await usersApi.remove(id)
            setAllUsers(prev => prev.filter(u => u.id !== id))
        } catch (err) {
            console.error("Failed to delete user:", err)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isAdmin: !!user?.isAdmin,
            loading,
            login,
            register,
            logout,
            updateUser,
            allUsers,
            loadUsers,
            updateUserById,
            addUser,
            deleteUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthState {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used within AuthProvider")
    return ctx
}
