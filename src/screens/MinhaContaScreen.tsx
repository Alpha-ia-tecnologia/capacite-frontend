import React, { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useAuth } from "@/contexts/AuthContext"
import { useTheme } from "@/contexts/ThemeContext"
import { useNavigate, Navigate } from "react-router-dom"
import {
    User, LogOut, Camera, Pencil, Check, X,
    Palette, Mail, Phone, Building2, MapPin, Shield, Star,
    Sun, Moon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Tab = "perfil" | "seguranca" | "preferencias"

export function MinhaContaScreen() {
    const navigate = useNavigate()
    const { user, updateUser, logout, isAdmin } = useAuth()
    const { theme, setTheme } = useTheme()
    const [tab, setTab] = useState<Tab>("perfil")
    const [editingField, setEditingField] = useState<string | null>(null)
    const [editValue, setEditValue] = useState("")

    const [notifs, setNotifs] = useState({
        newPalestras: true,
        trilhaReminders: true,
        weeklyProgress: false,
        emailTips: false,
    })

    const handleEdit = (field: string, current: string) => {
        setEditingField(field)
        setEditValue(current)
    }

    const handleSave = (field: string) => {
        updateUser({ [field]: editValue })
        setEditingField(null)
    }

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    // Redirect to login if not authenticated
    if (!user) return <Navigate to="/login" replace />

    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6 overflow-y-auto">
                {/* ── Profile Header ── */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="relative group">
                        <img
                            src={user.avatarUrl}
                            alt={user.name}
                            className="w-20 h-20 rounded-2xl object-cover border-2" style={{ borderColor: "var(--surface-border)" }}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                            <Camera size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{user.name}</h1>
                            {isAdmin && (
                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
                                    <Shield size={10} /> Admin
                                </span>
                            )}
                        </div>
                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{user.role} • {user.organization}</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                            Membro desde {(() => { try { const d = new Date(user.createdAt); return isNaN(d.getTime()) ? "—" : d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }); } catch { return "—"; } })()}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-xs text-red-400/50 hover:text-red-400 border border-red-400/10 hover:border-red-400/20 rounded-xl px-4 py-2.5 transition-all"
                    >
                        <LogOut size={14} /> Sair da conta
                    </button>
                </div>

                {/* ── Tabs ── */}
                <div className="flex gap-4 mb-6" style={{ borderBottom: "1px solid var(--surface-border)" }}>
                    {([
                        ["perfil", <User size={14} />, "Perfil"] as [Tab, React.ReactNode, string],
                        ["seguranca", <Star size={14} />, "Segurança"] as [Tab, React.ReactNode, string],
                        ["preferencias", <Palette size={14} />, "Preferências"] as [Tab, React.ReactNode, string],
                    ]).map(([t, icon, label]) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className="flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-all"
                            style={{
                                color: tab === t ? "var(--text-primary)" : "var(--text-muted)",
                                borderBottomColor: tab === t ? "var(--text-primary)" : "transparent",
                            }}
                        >
                            {icon} {label}
                        </button>
                    ))}
                </div>

                {/* ── Perfil Tab ── */}
                {tab === "perfil" && (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 rounded-2xl p-6" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                            <span className="text-[10px] font-semibold uppercase tracking-widest mb-5 block" style={{ color: "var(--text-muted)" }}>
                                Informações Pessoais
                            </span>
                            <div className="space-y-1">
                                <ProfileField icon={<User size={14} />} label="Nome completo" value={user.name} field="name" editingField={editingField} editValue={editValue} onEdit={handleEdit} onSave={handleSave} onChange={setEditValue} onCancel={() => setEditingField(null)} />
                                <ProfileField icon={<Mail size={14} />} label="E-mail" value={user.email} field="email" editingField={editingField} editValue={editValue} onEdit={handleEdit} onSave={handleSave} onChange={setEditValue} onCancel={() => setEditingField(null)} />
                                <ProfileField icon={<Phone size={14} />} label="Telefone" value={user.phone || "Não informado"} field="phone" editingField={editingField} editValue={editValue} onEdit={handleEdit} onSave={handleSave} onChange={setEditValue} onCancel={() => setEditingField(null)} />
                                <ProfileField icon={<Building2 size={14} />} label="Organização" value={user.organization} field="organization" editingField={editingField} editValue={editValue} onEdit={handleEdit} onSave={handleSave} onChange={setEditValue} onCancel={() => setEditingField(null)} />
                                <ProfileField icon={<MapPin size={14} />} label="Localização" value={user.location || "Não informada"} field="location" editingField={editingField} editValue={editValue} onEdit={handleEdit} onSave={handleSave} onChange={setEditValue} onCancel={() => setEditingField(null)} />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl p-5" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                                <span className="text-[10px] font-semibold uppercase tracking-widest mb-3 block" style={{ color: "var(--text-muted)" }}>Tipo de Organização</span>
                                <span className={cn(
                                    "text-sm font-medium px-3 py-1 rounded-full",
                                    user.organizationType === "empresa" && "bg-[#8B5CF6]/10 text-[#8B5CF6]",
                                    user.organizationType === "escola" && "bg-[#FF6B35]/10 text-[#FF6B35]",
                                    user.organizationType === "igreja" && "bg-[#22c55e]/10 text-[#22c55e]",
                                )}>
                                    {user.organizationType === "empresa" ? "Empresa" : user.organizationType === "escola" ? "Escola" : "Igreja"}
                                </span>
                            </div>

                            <div className="rounded-2xl p-5" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                                <span className="text-[10px] font-semibold uppercase tracking-widest mb-3 block" style={{ color: "var(--text-muted)" }}>Função</span>
                                <p className="text-sm" style={{ color: "var(--text-primary)" }}>{user.role}</p>
                            </div>

                            <div className="rounded-2xl p-5" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                                <span className="text-[10px] font-semibold uppercase tracking-widest mb-3 block" style={{ color: "var(--text-muted)" }}>Última Atividade</span>
                                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{(() => { try { const d = new Date(user.lastActiveDate); return isNaN(d.getTime()) ? "—" : d.toLocaleDateString("pt-BR"); } catch { return "—"; } })()}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Segurança Tab ── */}
                {tab === "seguranca" && (
                    <div className="max-w-xl space-y-6">
                        <div className="rounded-2xl p-6" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                            <span className="text-[10px] font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--text-muted)" }}>Alterar Senha</span>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs block mb-1" style={{ color: "var(--text-muted)" }}>Senha atual</label>
                                    <input type="password" placeholder="••••••••" className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors" style={{ backgroundColor: "var(--surface-input)", border: "1px solid var(--surface-border)", color: "var(--text-primary)" }} />
                                </div>
                                <div>
                                    <label className="text-xs block mb-1" style={{ color: "var(--text-muted)" }}>Nova senha</label>
                                    <input type="password" placeholder="••••••••" className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors" style={{ backgroundColor: "var(--surface-input)", border: "1px solid var(--surface-border)", color: "var(--text-primary)" }} />
                                </div>
                                <div>
                                    <label className="text-xs block mb-1" style={{ color: "var(--text-muted)" }}>Confirmar nova senha</label>
                                    <input type="password" placeholder="••••••••" className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors" style={{ backgroundColor: "var(--surface-input)", border: "1px solid var(--surface-border)", color: "var(--text-primary)" }} />
                                </div>
                                <button className="mt-2 rounded-lg px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: "linear-gradient(135deg, #FF1493, #8B5CF6)", boxShadow: "0 0 15px rgba(255, 20, 147, 0.15)" }}>
                                    Atualizar Senha
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Preferências Tab ── */}
                {tab === "preferencias" && (
                    <div className="max-w-xl space-y-6">
                        {/* Theme selector */}
                        <div className="rounded-2xl p-6" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                            <span className="text-[10px] font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--text-muted)" }}>Aparência</span>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={cn(
                                        "rounded-xl border p-4 text-left transition-all duration-200",
                                        theme === "dark"
                                            ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/10"
                                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                                    )}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={cn("p-2 rounded-lg", theme === "dark" ? "bg-[#8B5CF6]/20 text-[#8B5CF6]" : "bg-white/5 text-white/30")}>
                                            <Moon size={18} />
                                        </div>
                                        <span className={cn("text-sm font-semibold", theme === "dark" ? "text-white" : "text-white/40")}>Escuro</span>
                                    </div>
                                    {/* Dark theme preview */}
                                    <div className="rounded-lg border border-white/10 bg-[#000029] p-3 space-y-1.5">
                                        <div className="h-2 w-16 rounded-full bg-white/15" />
                                        <div className="h-2 w-24 rounded-full bg-white/8" />
                                        <div className="h-2 w-20 rounded-full bg-white/8" />
                                        <div className="flex gap-1.5 mt-2">
                                            <div className="h-3 w-8 rounded bg-[#FF1493]/40" />
                                            <div className="h-3 w-8 rounded bg-[#8B5CF6]/40" />
                                        </div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setTheme("light")}
                                    className={cn(
                                        "rounded-xl border p-4 text-left transition-all duration-200",
                                        theme === "light"
                                            ? "border-[#FF6B35]/40 bg-[#FF6B35]/10"
                                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                                    )}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={cn("p-2 rounded-lg", theme === "light" ? "bg-[#FF6B35]/20 text-[#FF6B35]" : "bg-white/5 text-white/30")}>
                                            <Sun size={18} />
                                        </div>
                                        <span className={cn("text-sm font-semibold", theme === "light" ? "text-white" : "text-white/40")}>Claro</span>
                                    </div>
                                    {/* Light theme preview */}
                                    <div className="rounded-lg border border-gray-200 bg-[#f5f6fa] p-3 space-y-1.5">
                                        <div className="h-2 w-16 rounded-full bg-gray-300" />
                                        <div className="h-2 w-24 rounded-full bg-gray-200" />
                                        <div className="h-2 w-20 rounded-full bg-gray-200" />
                                        <div className="flex gap-1.5 mt-2">
                                            <div className="h-3 w-8 rounded bg-[#FF1493]/60" />
                                            <div className="h-3 w-8 rounded bg-[#173DED]/60" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6" style={{ border: "1px solid var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                            <span className="text-[10px] font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--text-muted)" }}>Notificações</span>
                            <div className="space-y-3">
                                <ToggleRow label="Novas palestras disponíveis" checked={notifs.newPalestras} onChange={(v) => setNotifs((p) => ({ ...p, newPalestras: v }))} />
                                <ToggleRow label="Lembretes de trilhas em andamento" checked={notifs.trilhaReminders} onChange={(v) => setNotifs((p) => ({ ...p, trilhaReminders: v }))} />
                                <ToggleRow label="Resumo semanal de progresso" checked={notifs.weeklyProgress} onChange={(v) => setNotifs((p) => ({ ...p, weeklyProgress: v }))} />
                                <ToggleRow label="Dicas de aprendizado por e-mail" checked={notifs.emailTips} onChange={(v) => setNotifs((p) => ({ ...p, emailTips: v }))} />
                            </div>
                        </div>

                        <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.02] p-6">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-red-400/30 mb-3 block">Zona de Perigo</span>
                            <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Ao excluir sua conta, todos os seus dados serão permanentemente removidos.</p>
                            <button className="text-xs text-red-400/50 border border-red-400/10 rounded-lg px-4 py-2 hover:text-red-400 hover:border-red-400/20 transition-all">Excluir minha conta</button>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    )
}

/* ── Sub-components ── */
function ProfileField({ icon, label, value, field, editingField, editValue, onEdit, onSave, onChange, onCancel }: {
    icon: React.ReactNode; label: string; value: string; field: string; editingField: string | null; editValue: string
    onEdit: (f: string, v: string) => void; onSave: (f: string) => void; onChange: (v: string) => void; onCancel: () => void
}) {
    const isEditing = editingField === field
    return (
        <div className="flex items-center justify-between py-3 last:border-0" style={{ borderBottom: "1px solid var(--surface-border)" }}>
            <div className="flex items-center gap-3">
                <span style={{ color: "var(--text-subtle)" }}>{icon}</span>
                <div>
                    <span className="text-[10px] block" style={{ color: "var(--text-muted)" }}>{label}</span>
                    {isEditing ? (
                        <input value={editValue} onChange={(e) => onChange(e.target.value)} className="bg-transparent text-sm border-b border-[#8B5CF6]/30 focus:outline-none focus:border-[#8B5CF6] py-0.5 min-w-[250px]" style={{ color: "var(--text-primary)" }} autoFocus />
                    ) : (
                        <span className="text-sm" style={{ color: value?.startsWith("Não") ? "var(--text-muted)" : "var(--text-primary)", fontStyle: value?.startsWith("Não") ? "italic" : "normal" }}>{value}</span>
                    )}
                </div>
            </div>
            {isEditing ? (
                <div className="flex gap-1">
                    <button onClick={() => onSave(field)} className="p-1.5 rounded-lg hover:bg-emerald-500/10 text-emerald-400 transition-colors"><Check size={14} /></button>
                    <button onClick={onCancel} className="p-1.5 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"><X size={14} /></button>
                </div>
            ) : (
                <button onClick={() => onEdit(field, value)} className="p-1.5 rounded-lg transition-colors" style={{ color: "var(--text-subtle)" }}><Pencil size={12} /></button>
            )}
        </div>
    )
}

function ToggleRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <div className="flex items-center justify-between py-1.5">
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{label}</span>
            <button onClick={() => onChange(!checked)} className={cn("w-11 h-6 rounded-full transition-all relative", checked ? "bg-[#8B5CF6]" : "")} style={!checked ? { backgroundColor: "var(--surface-border)" } : {}}>
                <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", checked ? "left-[24px]" : "left-1")} />
            </button>
        </div>
    )
}

