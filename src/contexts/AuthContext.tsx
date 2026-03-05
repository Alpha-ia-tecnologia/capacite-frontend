import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { User, OrganizationType } from "@/types"
import { storage } from "@/lib/storage"

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isAdmin: boolean
    login: (email: string, password: string) => boolean
    register: (data: { name: string; email: string; password: string; organization: string; organizationType: OrganizationType }) => void
    logout: () => void
    updateUser: (patch: Partial<User>) => void
    // Admin
    allUsers: User[]
    updateUserById: (id: string, patch: Partial<User>) => void
    deleteUser: (id: string) => void
}

const AuthContext = createContext<AuthState | null>(null)

const ADMIN_EMAILS = ["admin", "admin@capacite.com"]

function isAdminEmail(email: string): boolean {
    return ADMIN_EMAILS.includes(email.toLowerCase())
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => storage.get<User>("user"))
    const [allUsers, setAllUsers] = useState<User[]>(() => storage.get<User[]>("all_users") ?? [])

    useEffect(() => {
        if (user) {
            storage.set("user", user)
        } else {
            storage.remove("user")
        }
    }, [user])

    useEffect(() => {
        storage.set("all_users", allUsers)
    }, [allUsers])

    // Add user to all_users list
    const trackUser = useCallback((u: User) => {
        setAllUsers(prev => {
            const exists = prev.find(p => p.id === u.id)
            if (exists) return prev.map(p => p.id === u.id ? u : p)
            return [...prev, u]
        })
    }, [])

    const login = (email: string, _password: string): boolean => {
        const stored = storage.get<User>("user")
        if (stored && stored.email === email) {
            setUser(stored)
            trackUser(stored)
            return true
        }
        const admin = isAdminEmail(email)
        const defaultUser: User = {
            id: admin ? "admin-001" : crypto.randomUUID(),
            name: admin ? "Administrador" : "Usuário CAPACITE",
            email,
            phone: "",
            organization: admin ? "CAPACITE" : "Minha Empresa",
            organizationType: "empresa",
            role: admin ? "Administrador" : "Líder",
            location: "",
            avatarUrl: admin
                ? "https://randomuser.me/api/portraits/men/1.jpg"
                : "https://randomuser.me/api/portraits/men/45.jpg",
            createdAt: new Date().toISOString(),
            streakDays: 0,
            lastActiveDate: new Date().toISOString().split("T")[0],
            isAdmin: admin,
        }
        setUser(defaultUser)
        storage.set("user", defaultUser)
        trackUser(defaultUser)
        return true
    }

    const register = (data: { name: string; email: string; password: string; organization: string; organizationType: OrganizationType }) => {
        const newUser: User = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
            phone: "",
            organization: data.organization,
            organizationType: data.organizationType,
            role: "Líder",
            location: "",
            avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
            createdAt: new Date().toISOString(),
            streakDays: 0,
            lastActiveDate: new Date().toISOString().split("T")[0],
            isAdmin: false,
        }
        setUser(newUser)
        storage.set("user", newUser)
        trackUser(newUser)
    }

    const logout = () => {
        setUser(null)
        storage.remove("user")
    }

    const updateUser = (patch: Partial<User>) => {
        setUser(prev => {
            if (!prev) return prev
            const updated = { ...prev, ...patch }
            trackUser(updated)
            return updated
        })
    }

    const updateUserById = (id: string, patch: Partial<User>) => {
        setAllUsers(prev => prev.map(u => u.id === id ? { ...u, ...patch } : u))
    }

    const deleteUser = (id: string) => {
        setAllUsers(prev => prev.filter(u => u.id !== id))
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isAdmin: !!user?.isAdmin,
            login,
            register,
            logout,
            updateUser,
            allUsers,
            updateUserById,
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
