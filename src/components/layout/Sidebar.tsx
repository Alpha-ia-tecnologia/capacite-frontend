import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"
import {
    Home,
    FileEdit,
    Search,
    MessageCircle,
    LayoutGrid,
    CheckCircle,
    User,
    ChevronLeft,
    Shield,
} from "lucide-react"
import logoImg from "@/assets/logo.png"

export function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    const location = useLocation()
    const { isAdmin } = useAuth()

    return (
        <aside
            className={cn(
                "group/sidebar relative flex h-screen flex-col border-r border-white/5 bg-[#000029] py-4 transition-all duration-300 ease-in-out overflow-hidden shrink-0",
                expanded ? "w-[240px] px-4" : "w-[72px] px-2"
            )}
        >
            {/* ── Logo + Brand ── */}
            <div
                className={cn(
                    "mb-6 flex items-center gap-3 transition-all duration-300",
                    expanded ? "px-2" : "justify-center px-0"
                )}
            >
                <img
                    src={logoImg}
                    alt="Logo"
                    className="shrink-0 w-9 h-9 object-contain transition-transform duration-300 hover:scale-110"
                />
                <span
                    className={cn(
                        "text-xl font-bold text-white tracking-tight whitespace-nowrap transition-all duration-300 overflow-hidden",
                        expanded
                            ? "max-w-[160px] opacity-100"
                            : "max-w-0 opacity-0"
                    )}
                >
                    Capacite
                </span>
            </div>

            {/* ── Main navigation ── */}
            <nav className="flex flex-1 flex-col gap-1">
                <NavItem
                    to="/dashboard"
                    icon={<Home size={20} />}
                    label="Home"
                    active={location.pathname === "/dashboard"}
                    expanded={expanded}
                />

                <div className="my-2" />

                <NavItem
                    to="/diagnostico"
                    icon={<FileEdit size={20} />}
                    label="Diagnóstico"
                    active={location.pathname.startsWith("/diagnostico")}
                    expanded={expanded}
                />
                <NavItem
                    to="/busca"
                    icon={<Search size={20} />}
                    label="Busca Inteligente"
                    active={location.pathname.startsWith("/busca")}
                    expanded={expanded}
                />
                <NavItem
                    to="/perguntas"
                    icon={<MessageCircle size={20} />}
                    label="Perguntas das Palestras"
                    active={location.pathname.startsWith("/perguntas")}
                    expanded={expanded}
                />

                <div className="my-4" />

                <NavItem
                    to="/areas"
                    icon={<LayoutGrid size={20} />}
                    label="Grandes Áreas"
                    active={location.pathname.startsWith("/areas")}
                    expanded={expanded}
                />
                <NavItem
                    to="/trilhas"
                    icon={<CheckCircle size={20} />}
                    label="Minhas Trilhas"
                    active={location.pathname.startsWith("/trilhas")}
                    expanded={expanded}
                />
            </nav>

            {/* ── Bottom: Minha Conta ── */}
            <div className="mt-auto pt-3 pb-2 border-t border-white/5 mx-1 flex flex-col gap-1">
                <NavItem
                    to="/conta"
                    icon={<User size={20} />}
                    label="Minha Conta"
                    active={location.pathname.startsWith("/conta")}
                    expanded={expanded}
                />
                {isAdmin && (
                    <NavItem
                        to="/admin"
                        icon={<Shield size={20} />}
                        label="Gestão de Usuários"
                        active={location.pathname.startsWith("/admin")}
                        expanded={expanded}
                    />
                )}

                {/* Collapse toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={cn(
                        "flex items-center rounded-xl transition-all duration-200 text-white/25 hover:text-white/60 hover:bg-white/5 w-full mt-1",
                        expanded ? "h-10 gap-3 px-3" : "h-10 justify-center"
                    )}
                    aria-label={expanded ? "Recolher menu" : "Expandir menu"}
                >
                    <span
                        className={cn(
                            "shrink-0 transition-transform duration-300",
                            expanded ? "rotate-0" : "rotate-180"
                        )}
                    >
                        <ChevronLeft size={18} />
                    </span>
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
}: {
    to: string
    icon: React.ReactNode
    label: string
    active?: boolean
    expanded?: boolean
}) {
    return (
        <Link
            to={to}
            className={cn(
                "group/navitem relative flex items-center rounded-xl transition-all duration-200",
                expanded ? "h-11 gap-3 px-3" : "h-11 w-full justify-center",
                active
                    ? "text-white bg-white/8"
                    : "text-white/35 hover:text-white/70 hover:bg-white/5"
            )}
        >
            <span className={cn("shrink-0 transition-colors", active && "text-white")}>
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
                <div className="pointer-events-none absolute left-full ml-3 rounded-lg bg-[#0a0a3a] border border-white/10 px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover/navitem:opacity-100 transition-opacity duration-200 shadow-xl z-50">
                    {label}
                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0a0a3a] border-l border-b border-white/10" />
                </div>
            )}
        </Link>
    )
}
