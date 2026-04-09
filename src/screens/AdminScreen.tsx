import { useState, useEffect } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import type { User, OrganizationType } from "@/types"
import {
    Shield,
    Users,
    Search,
    Trash2,
    Edit2,
    Check,
    X,
    UserPlus,
    Building2,
    Mail,
    Calendar,
    ChevronDown,
    ChevronUp,
    AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

type SortField = "name" | "email" | "organization" | "createdAt"
type SortDir = "asc" | "desc"

const ORG_LABELS: Record<OrganizationType, string> = {
    empresa: "Empresa",
    escola: "Escola",
    igreja: "Igreja",
}

export function AdminScreen() {
    const navigate = useNavigate()
    const { isAdmin, allUsers, loadUsers, updateUserById, addUser, deleteUser } = useAuth()

    useEffect(() => {
        if (isAdmin) loadUsers()
    }, [isAdmin, loadUsers])

    const [search, setSearch] = useState("")
    const [sortField, setSortField] = useState<SortField>("createdAt")
    const [sortDir, setSortDir] = useState<SortDir>("desc")
    const [editingUser, setEditingUser] = useState<string | null>(null)
    const [editForm, setEditForm] = useState<Partial<User>>({})
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [showAddForm, setShowAddForm] = useState(false)
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", organization: "", organizationType: "empresa" as OrganizationType })

    // Guard: only admins
    if (!isAdmin) {
        return (
            <AppLayout>
                <div className="flex flex-col items-center justify-center h-full">
                    <Shield size={64} className="text-red-400/30 mb-4" />
                    <h1 className="text-xl font-bold text-white mb-2">Acesso Restrito</h1>
                    <p className="text-white/40 text-sm mb-4">Esta área é exclusiva para administradores.</p>
                    <button onClick={() => navigate("/dashboard")} className="text-sm text-[#FF1493] hover:underline">
                        Voltar ao Dashboard
                    </button>
                </div>
            </AppLayout>
        )
    }

    // Filter & sort
    const filtered = allUsers
        .filter(u => !u.isAdmin) // Don't show admin in user list
        .filter(u =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()) ||
            u.organization.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            const aVal = a[sortField] ?? ""
            const bVal = b[sortField] ?? ""
            const cmp = String(aVal).localeCompare(String(bVal))
            return sortDir === "asc" ? cmp : -cmp
        })

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDir(d => d === "asc" ? "desc" : "asc")
        } else {
            setSortField(field)
            setSortDir("asc")
        }
    }

    const startEdit = (user: User) => {
        setEditingUser(user.id)
        setEditForm({ name: user.name, email: user.email, organization: user.organization, organizationType: user.organizationType, role: user.role })
    }

    const saveEdit = () => {
        if (!editingUser) return
        updateUserById(editingUser, editForm)
        setEditingUser(null)
        setEditForm({})
    }

    const cancelEdit = () => {
        setEditingUser(null)
        setEditForm({})
    }

    const handleDelete = (id: string) => {
        deleteUser(id)
        setDeleteConfirm(null)
    }

    const handleAddUser = async () => {
        if (!newUser.name || !newUser.email || !newUser.password) return
        try {
            await addUser({
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                organization: newUser.organization,
                organizationType: newUser.organizationType
            })
            setShowAddForm(false)
            setNewUser({ name: "", email: "", password: "", organization: "", organizationType: "empresa" })
        } catch (err) {
            alert("Erro ao criar usuário. Verifique se o e-mail já existe.")
        }
    }

    // Stats
    const totalUsers = allUsers.filter(u => !u.isAdmin).length
    const byOrg = allUsers.filter(u => !u.isAdmin).reduce((acc, u) => {
        acc[u.organizationType] = (acc[u.organizationType] || 0) + 1
        return acc
    }, {} as Record<string, number>)
    const recentUsers = allUsers.filter(u => {
        if (u.isAdmin) return false
        const d = new Date(u.createdAt)
        const week = new Date()
        week.setDate(week.getDate() - 7)
        return d >= week
    }).length

    const SortIcon = ({ field }: { field: SortField }) => {
        if (sortField !== field) return null
        return sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />
    }

    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6 overflow-y-auto">
                {/* ── Header ── */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-1">
                        <Shield size={28} className="text-[#FF1493]" />
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Gestão de Usuários
                        </h1>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                            Admin
                        </span>
                    </div>
                    <p className="text-white/40 ml-[40px]">
                        Gerencie todos os usuários cadastrados na plataforma CAPACITE.
                    </p>
                </div>

                {/* ── Stats ── */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { label: "Total", value: totalUsers, icon: <Users size={18} />, color: "#FF1493" },
                        { label: "Empresas", value: byOrg.empresa || 0, icon: <Building2 size={18} />, color: "#8B5CF6" },
                        { label: "Escolas", value: byOrg.escola || 0, icon: <Building2 size={18} />, color: "#FF6B35" },
                        { label: "Esta Semana", value: recentUsers, icon: <Calendar size={18} />, color: "#22c55e" },
                    ].map(stat => (
                        <div key={stat.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span style={{ color: stat.color }}>{stat.icon}</span>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/25">{stat.label}</span>
                            </div>
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                        </div>
                    ))}
                </div>

                {/* ── Toolbar ── */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Buscar por nome, email ou organização..."
                            className="w-full bg-white/[0.03] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/15 transition-colors"
                        />
                    </div>
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                            background: "linear-gradient(135deg, #FF1493, #8B5CF6)",
                            boxShadow: "0 0 15px rgba(255, 20, 147, 0.2)",
                        }}
                    >
                        <UserPlus size={16} />
                        Novo Usuário
                    </button>
                </div>

                {/* ── Add user form ── */}
                {showAddForm && (
                    <div className="rounded-xl border border-[#FF1493]/20 bg-[#FF1493]/5 p-5 mb-4">
                        <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <UserPlus size={16} className="text-[#FF1493]" />
                            Adicionar Novo Usuário
                        </h3>
                        <div className="grid grid-cols-5 gap-3">
                            <input
                                value={newUser.name}
                                onChange={e => setNewUser(p => ({ ...p, name: e.target.value }))}
                                placeholder="Nome completo"
                                className="bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/15"
                            />
                            <input
                                value={newUser.email}
                                onChange={e => setNewUser(p => ({ ...p, email: e.target.value }))}
                                placeholder="Email"
                                className="bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/15"
                            />
                            <input
                                value={newUser.password}
                                onChange={e => setNewUser(p => ({ ...p, password: e.target.value }))}
                                placeholder="Senha provisória"
                                className="bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/15"
                            />
                            <input
                                value={newUser.organization}
                                onChange={e => setNewUser(p => ({ ...p, organization: e.target.value }))}
                                placeholder="Organização"
                                className="bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/15"
                            />
                            <div className="flex gap-2">
                                <select
                                    value={newUser.organizationType}
                                    onChange={e => setNewUser(p => ({ ...p, organizationType: e.target.value as OrganizationType }))}
                                    className="flex-1 bg-[#000035] border border-white/8 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-white/15"
                                >
                                    <option value="empresa">Empresa</option>
                                    <option value="escola">Escola</option>
                                    <option value="igreja">Igreja</option>
                                </select>
                                <button
                                    onClick={handleAddUser}
                                    disabled={!newUser.name || !newUser.email || !newUser.password}
                                    className="rounded-lg bg-emerald-500/20 text-emerald-400 px-3 hover:bg-emerald-500/30 transition-colors disabled:opacity-30 flex-shrink-0"
                                >
                                    <Check size={16} />
                                </button>
                                <button
                                    onClick={() => setShowAddForm(false)}
                                    className="rounded-lg bg-white/5 text-white/30 px-3 hover:bg-white/10 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Table ── */}
                <div className="rounded-xl border border-white/5 bg-white/[0.015] overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] border-b border-white/5 bg-white/[0.02]">
                        {([
                            ["name", "Usuário"],
                            ["email", "Email"],
                            ["organization", "Organização"],
                            ["createdAt", "Cadastro"],
                        ] as [SortField, string][]).map(([field, label]) => (
                            <button
                                key={field}
                                onClick={() => handleSort(field)}
                                className="flex items-center gap-1 px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white/25 hover:text-white/50 transition-colors text-left"
                            >
                                {label}
                                <SortIcon field={field} />
                            </button>
                        ))}
                        <div className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">Tipo</div>
                        <div className="px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">Ações</div>
                    </div>

                    {/* Table body */}
                    {filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16">
                            <Users size={48} className="text-white/10 mb-3" />
                            <p className="text-white/30 text-sm">
                                {search ? `Nenhum usuário encontrado para "${search}"` : "Nenhum usuário cadastrado ainda"}
                            </p>
                        </div>
                    ) : (
                        filtered.map(user => {
                            const isEditing = editingUser === user.id
                            const isDeleting = deleteConfirm === user.id

                            return (
                                <div
                                    key={user.id}
                                    className={cn(
                                        "grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] items-center border-b border-white/[0.03] transition-colors",
                                        isEditing ? "bg-[#8B5CF6]/5" : "hover:bg-white/[0.02]",
                                        isDeleting && "bg-red-500/5"
                                    )}
                                >
                                    {/* Name */}
                                    <div className="flex items-center gap-3 px-4 py-3">
                                        <img src={user.avatarUrl} alt="" className="w-8 h-8 rounded-lg object-cover shrink-0" />
                                        <div className="min-w-0">
                                            {isEditing ? (
                                                <input
                                                    value={editForm.name ?? ""}
                                                    onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white outline-none focus:border-[#8B5CF6]/30"
                                                />
                                            ) : (
                                                <>
                                                    <p className="text-sm font-medium text-white truncate">{user.name}</p>
                                                    <p className="text-[10px] text-white/20">{user.role}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="px-4 py-3">
                                        {isEditing ? (
                                            <input
                                                value={editForm.email ?? ""}
                                                onChange={e => setEditForm(p => ({ ...p, email: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white outline-none focus:border-[#8B5CF6]/30"
                                            />
                                        ) : (
                                            <span className="text-sm text-white/50 flex items-center gap-1.5">
                                                <Mail size={12} className="text-white/15" />
                                                {user.email}
                                            </span>
                                        )}
                                    </div>

                                    {/* Organization */}
                                    <div className="px-4 py-3">
                                        {isEditing ? (
                                            <input
                                                value={editForm.organization ?? ""}
                                                onChange={e => setEditForm(p => ({ ...p, organization: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-white outline-none focus:border-[#8B5CF6]/30"
                                            />
                                        ) : (
                                            <span className="text-sm text-white/40 flex items-center gap-1.5">
                                                <Building2 size={12} className="text-white/15" />
                                                {user.organization || "—"}
                                            </span>
                                        )}
                                    </div>

                                    {/* Created */}
                                    <div className="px-4 py-3">
                                        <span className="text-xs text-white/25 flex items-center gap-1">
                                            <Calendar size={11} className="text-white/15" />
                                            {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                                        </span>
                                    </div>

                                    {/* Org type badge */}
                                    <div className="px-4 py-3">
                                        <span className={cn(
                                            "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full",
                                            user.organizationType === "empresa" && "bg-[#8B5CF6]/10 text-[#8B5CF6]",
                                            user.organizationType === "escola" && "bg-[#FF6B35]/10 text-[#FF6B35]",
                                            user.organizationType === "igreja" && "bg-[#22c55e]/10 text-[#22c55e]",
                                        )}>
                                            {ORG_LABELS[user.organizationType]}
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="px-4 py-3 flex items-center gap-1">
                                        {isDeleting ? (
                                            <>
                                                <span className="text-[10px] text-red-400 mr-2">Confirmar?</span>
                                                <button
                                                    onClick={() => handleDelete(user.id)}
                                                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                                                    title="Confirmar exclusão"
                                                >
                                                    <Check size={14} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(null)}
                                                    className="p-1.5 rounded-lg bg-white/5 text-white/30 hover:bg-white/10 transition-colors"
                                                    title="Cancelar"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </>
                                        ) : isEditing ? (
                                            <>
                                                <button
                                                    onClick={saveEdit}
                                                    className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                                                    title="Salvar"
                                                >
                                                    <Check size={14} />
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    className="p-1.5 rounded-lg bg-white/5 text-white/30 hover:bg-white/10 transition-colors"
                                                    title="Cancelar"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => startEdit(user)}
                                                    className="p-1.5 rounded-lg text-white/15 hover:text-white/50 hover:bg-white/5 transition-colors"
                                                    title="Editar"
                                                >
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(user.id)}
                                                    className="p-1.5 rounded-lg text-white/15 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                                    title="Excluir"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>

                {/* Footer info */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/15">
                        {filtered.length} de {totalUsers} usuário{totalUsers !== 1 && "s"}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/15">
                        <AlertCircle size={12} />
                        Dados armazenados localmente (localStorage)
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
