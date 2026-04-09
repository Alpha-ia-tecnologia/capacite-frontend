import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"
import { useTheme } from "@/contexts/ThemeContext"
import {
    Home,
    FileEdit,
    Film,
    LayoutGrid,
    CheckCircle,
    User,
    PanelLeftClose,
    PanelLeftOpen,
    Shield,
    LogOut,
    Sun,
    Moon,
} from "lucide-react"
import logoImg from "@/assets/logo.png"

export function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    const location = useLocation()
    const { isAdmin, logout } = useAuth()
    const { theme, toggleTheme } = useTheme()

    const isDark = theme === "dark"

    return (
        <aside
            className={cn(
                "group/sidebar relative flex h-screen flex-col py-4 transition-all duration-300 ease-in-out overflow-hidden shrink-0",
                expanded ? "w-[240px] px-4" : "w-[72px] px-2"
            )}
            style={{
                backgroundColor: "var(--surface-sidebar)",
                borderRight: "1px solid var(--surface-border)",
            }}
        >
            {/* ── Top row: Logo + Toggle ── */}
            <div
                className={cn(
                    "mb-6 flex items-center transition-all duration-300",
                    expanded ? "justify-between px-2" : "justify-center px-0"
                )}
            >
                <div className="flex items-center gap-3 min-w-0">
                    <img
                        src={logoImg}
                        alt="Logo"
                        className="shrink-0 w-9 h-9 object-contain"
                    />
                    <span
                        className={cn(
                            "text-xl font-bold tracking-tight whitespace-nowrap transition-all duration-300 overflow-hidden",
                            expanded
                                ? "max-w-[160px] opacity-100"
                                : "max-w-0 opacity-0"
                        )}
                        style={{ color: "var(--text-primary)" }}
                    >
                        Capacite
                    </span>
                </div>

                {/* Toggle button — always visible at top */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={cn(
                        "shrink-0 flex items-center justify-center rounded-lg transition-all duration-200",
                        expanded ? "w-8 h-8" : "w-8 h-8 mt-2"
                    )}
                    style={{ color: "var(--text-muted)" }}
                    aria-label={expanded ? "Recolher menu" : "Expandir menu"}
                >
                    {expanded ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
                </button>
            </div>

            {/* ── Main navigation ── */}
            <nav className="flex flex-1 flex-col gap-1">
                <NavItem to="/dashboard" icon={<Home size={20} />} label="Home" active={location.pathname === "/dashboard"} expanded={expanded} isDark={isDark} />
                <div className="my-2" />
                <NavItem to="/diagnostico" icon={<FileEdit size={20} />} label="Diagnóstico" active={location.pathname.startsWith("/diagnostico")} expanded={expanded} isDark={isDark} />
                <NavItem to="/busca" icon={<Film size={20} />} label="Palestras" active={location.pathname.startsWith("/busca")} expanded={expanded} isDark={isDark} />
                <div className="my-4" />
                <NavItem to="/areas" icon={<LayoutGrid size={20} />} label="Grandes Temas" active={location.pathname.startsWith("/areas")} expanded={expanded} isDark={isDark} />
                <NavItem to="/trilhas" icon={<CheckCircle size={20} />} label="Minhas Trilhas" active={location.pathname.startsWith("/trilhas")} expanded={expanded} isDark={isDark} />
            </nav>

            {/* ── Bottom: Theme toggle + Conta + Logout ── */}
            <div className="mt-auto pt-3 pb-2 mx-1 flex flex-col gap-1" style={{ borderTop: "1px solid var(--surface-border)" }}>
                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "group/navitem relative flex items-center rounded-xl transition-all duration-200",
                        expanded ? "h-11 gap-3 px-3 w-full text-left" : "h-11 w-full justify-center"
                    )}
                    style={{ color: isDark ? "#eab308" : "#8B5CF6" }}
                >
                    <span className="shrink-0 w-5 flex items-center justify-center transition-colors">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </span>
                    <span
                        className={cn(
                            "text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden",
                            expanded
                                ? "max-w-[180px] opacity-100"
                                : "max-w-0 opacity-0"
                        )}
                    >
                        {isDark ? "Tema Claro" : "Tema Escuro"}
                    </span>

                    {!expanded && (
                        <div
                            className="pointer-events-none absolute left-full ml-3 rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 group-hover/navitem:opacity-100 transition-opacity duration-200 shadow-xl z-50"
                            style={{
                                backgroundColor: "var(--tooltip-bg)",
                                borderColor: "var(--surface-border)",
                                color: "var(--text-primary)",
                            }}
                        >
                            {isDark ? "Tema Claro" : "Tema Escuro"}
                            <div
                                className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45"
                                style={{
                                    backgroundColor: "var(--tooltip-bg)",
                                    borderLeft: "1px solid var(--surface-border)",
                                    borderBottom: "1px solid var(--surface-border)",
                                }}
                            />
                        </div>
                    )}
                </button>

                <NavItem to="/conta" icon={<User size={20} />} label="Minha Conta" active={location.pathname.startsWith("/conta")} expanded={expanded} isDark={isDark} />
                {isAdmin && (
                    <NavItem to="/admin" icon={<Shield size={20} />} label="Gestão de Usuários" active={location.pathname.startsWith("/admin")} expanded={expanded} isDark={isDark} />
                )}
                <div className="my-1 mx-1" style={{ borderTop: "1px solid var(--surface-border)" }} />
                <button
                    onClick={logout}
                    className={cn(
                        "group/navitem relative flex items-center rounded-xl transition-all duration-200 text-red-400 hover:text-red-300 hover:bg-red-500/10",
                        expanded ? "h-11 gap-3 px-3 w-full text-left" : "h-11 w-full justify-center"
                    )}
                >
                    <span className="shrink-0 w-5 flex items-center justify-center transition-colors">
                        <LogOut size={20} />
                    </span>
                    <span
                        className={cn(
                            "text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden",
                            expanded
                                ? "max-w-[180px] opacity-100"
                                : "max-w-0 opacity-0"
                        )}
                    >
                        Sair
                    </span>

                    {!expanded && (
                        <div
                            className="pointer-events-none absolute left-full ml-3 rounded-lg border px-3 py-1.5 text-xs font-medium text-red-400 whitespace-nowrap opacity-0 group-hover/navitem:opacity-100 transition-opacity duration-200 shadow-xl z-50"
                            style={{
                                backgroundColor: "var(--tooltip-bg)",
                                borderColor: "rgba(239, 68, 68, 0.2)",
                            }}
                        >
                            Sair
                            <div
                                className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45"
                                style={{
                                    backgroundColor: "var(--tooltip-bg)",
                                    borderLeft: "1px solid rgba(239, 68, 68, 0.2)",
                                    borderBottom: "1px solid rgba(239, 68, 68, 0.2)",
                                }}
                            />
                        </div>
                    )}
                </button>
            </div>
        </aside>
    )
}

/* ── Nav item with tooltip on collapsed state ── */
function NavItem({
    to,
    icon,
    label,
    active,
    expanded,
    isDark,
}: {
    to: string
    icon: React.ReactNode
    label: string
    active?: boolean
    expanded?: boolean
    isDark: boolean
}) {
    return (
        <Link
            to={to}
            className={cn(
                "group/navitem relative flex items-center rounded-xl transition-all duration-200",
                expanded ? "h-11 gap-3 px-3" : "h-11 w-full justify-center",
            )}
            style={{
                color: active ? "var(--text-primary)" : "var(--text-muted)",
                backgroundColor: active
                    ? (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)")
                    : "transparent",
            }}
            onMouseEnter={e => {
                if (!active) {
                    e.currentTarget.style.color = "var(--text-secondary)"
                    e.currentTarget.style.backgroundColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"
                }
            }}
            onMouseLeave={e => {
                if (!active) {
                    e.currentTarget.style.color = "var(--text-muted)"
                    e.currentTarget.style.backgroundColor = "transparent"
                }
            }}
        >
            <span className="shrink-0 w-5 flex items-center justify-center transition-colors">
                {icon}
            </span>
            <span
                className={cn(
                    "text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden",
                    expanded
                        ? "max-w-[180px] opacity-100"
                        : "max-w-0 opacity-0"
                )}
            >
                {label}
            </span>

            {/* Tooltip on hover when collapsed */}
            {!expanded && (
                <div
                    className="pointer-events-none absolute left-full ml-3 rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 group-hover/navitem:opacity-100 transition-opacity duration-200 shadow-xl z-50"
                    style={{
                        backgroundColor: "var(--tooltip-bg)",
                        borderColor: "var(--surface-border)",
                        color: "var(--text-primary)",
                    }}
                >
                    {label}
                    <div
                        className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45"
                        style={{
                            backgroundColor: "var(--tooltip-bg)",
                            borderLeft: "1px solid var(--surface-border)",
                            borderBottom: "1px solid var(--surface-border)",
                        }}
                    />
                </div>
            )}
        </Link>
    )
}
