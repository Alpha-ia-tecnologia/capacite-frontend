import { useEffect } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useNavigate } from "react-router-dom"
import { useDiagnostico } from "@/contexts/DiagnosticoContext"
import { useTrilhas } from "@/contexts/TrilhasContext"
import { useGamificacao } from "@/contexts/GamificacaoContext"
import { useAuth } from "@/contexts/AuthContext"
import { getCategoryById } from "@/data/capacite-data"
import { getStrengthLevel, getStrengthColor } from "@/lib/diagnostico-scoring"
import {
    Search, ArrowRight, Star, Flame, BookOpen, Clock,
    CheckCircle, Zap, FileEdit, MessageCircle,
} from "lucide-react"
import officialPartner from "../assets/official-partner.png"


export function DashboardScreen() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { hasDiagnostico, latestResult } = useDiagnostico()
    const { trilhas, totalWatched, getProgress, completedCount } = useTrilhas()
    const { stars, streakDays, updateStreak, loadGamificacao } = useGamificacao()
    const { loadHistory } = useDiagnostico()
    const { loadTrilhas } = useTrilhas()

    useEffect(() => {
        loadHistory()
        loadTrilhas()
        loadGamificacao()
        updateStreak()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const firstName = user?.name?.split(" ")[0] ?? "Líder"

    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6 overflow-y-auto">
                {/* Greeting */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-medium text-white">Olá {firstName},</h1>
                        <p className="text-white/30 text-sm mt-1">
                            {hasDiagnostico
                                ? "Continue sua jornada de capacitação."
                                : "Bem-vindo à plataforma CAPACITE. Comece seu diagnóstico!"}
                        </p>
                    </div>
                    {/* Quick stats */}
                    <div className="flex items-center gap-4">
                        <MiniStat icon={<Star size={14} className="text-yellow-400" />} value={stars.length} label="Estrelas" />
                        <MiniStat icon={<Flame size={14} className="text-orange-400" />} value={`${streakDays}d`} label="Sequência" />
                        <MiniStat icon={<BookOpen size={14} className="text-blue-400" />} value={totalWatched} label="Palestras" />
                    </div>
                </div>

                {/* Banner: Comece Aqui (no diagnostic) or Progress Summary */}
                {!hasDiagnostico ? (
                    <button
                        onClick={() => navigate("/diagnostico")}
                        className="w-full rounded-2xl border border-[#FF1493]/20 bg-gradient-to-r from-[#FF1493]/10 via-[#FF6B35]/5 to-[#8B5CF6]/10 p-6 flex items-center gap-6 mb-6 text-left hover:from-[#FF1493]/15 transition-all group"
                    >
                        <div className="p-4 rounded-2xl bg-[#FF1493]/10 border border-[#FF1493]/20">
                            <FileEdit size={32} className="text-[#FF1493]" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-bold text-white mb-1">Comece seu diagnóstico</h2>
                            <p className="text-sm text-white/40">
                                Responda 21 perguntas rápidas (~10 min) para descobrir suas prioridades de liderança
                                e receber trilhas personalizadas.
                            </p>
                        </div>
                        <ArrowRight size={20} className="text-white/20 group-hover:text-[#FF1493] transition-colors" />
                    </button>
                ) : (
                    <div className="grid grid-cols-5 gap-3 mb-6">
                        <StatCard icon={<BookOpen size={16} />} value={totalWatched} label="Palestras Assistidas" color="#173DED" />
                        <StatCard icon={<Clock size={16} />} value={`${totalWatched * 30}m`} label="Horas de Aprendizado" color="#8B5CF6" />
                        <StatCard icon={<CheckCircle size={16} />} value={completedCount} label="Trilhas Concluídas" color="#22c55e" />
                        <StatCard icon={<Star size={16} />} value={stars.length} label="Estrelas Douradas" color="#eab308" />
                        <StatCard icon={<Flame size={16} />} value={`${streakDays}d`} label="Sequência Ativa" color="#FF6B35" />
                    </div>
                )}

                {/* Active Trilhas */}
                {trilhas.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20">Suas Trilhas</span>
                            <button onClick={() => navigate("/trilhas")} className="text-xs text-white/30 hover:text-white/60 flex items-center gap-1 transition-colors">
                                Ver todas <ArrowRight size={10} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {trilhas.slice(0, 2).map(trilha => {
                                const progress = getProgress(trilha.id)
                                return (
                                    <button
                                        key={trilha.id}
                                        onClick={() => navigate("/trilhas")}
                                        className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left hover:bg-white/[0.04] transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {trilha.type === "impacto" ? <Zap size={14} className="text-[#FF6B35]" /> : <BookOpen size={14} className="text-[#8B5CF6]" />}
                                            <span className="text-sm font-medium text-white truncate">{trilha.title}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
                                            <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #FF1493, #FF6B35)" }} />
                                        </div>
                                        <span className="text-[10px] text-white/20">{progress}% concluído</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Diagnosis summary */}
                {hasDiagnostico && latestResult && (
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20">Mapa de Categorias</span>
                            <button onClick={() => navigate("/diagnostico")} className="text-xs text-white/30 hover:text-white/60 flex items-center gap-1 transition-colors">
                                Ver diagnóstico <ArrowRight size={10} />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {latestResult.scores.map(s => {
                                const cat = getCategoryById(s.categoryId)!
                                const level = getStrengthLevel(s.score)
                                return (
                                    <div key={s.categoryId} className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center">
                                        <span className="text-[8px] text-white/30 block truncate">{cat.shortName}</span>
                                        <div className="w-full h-1 rounded-full bg-white/5 mt-1 overflow-hidden">
                                            <div className="h-full rounded-full" style={{ width: `${(s.score / 12) * 100}%`, backgroundColor: getStrengthColor(level) }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-5 mb-6">
                    <FeatureCard
                        icon={<FileEdit size={24} strokeWidth={1.5} className="text-white" />}
                        title="Diagnóstico"
                        description="Identifique suas áreas prioritárias de desenvolvimento."
                        buttonText={hasDiagnostico ? "Ver Resultado" : "Iniciar"}
                        gradientColors="from-[#FF1493] via-[#FF6B35] to-[#FF1493]"
                        onClick={() => navigate("/diagnostico")}
                    />
                    <FeatureCard
                        icon={<Search size={24} strokeWidth={1.5} className="text-white" />}
                        title="Busca Inteligente"
                        description="Pesquise palestras por tema, desafio ou palavra-chave."
                        buttonText="Pesquisar"
                        gradientColors="from-[#FF6B35] via-[#FF1493] to-[#8B5CF6]"
                        onClick={() => navigate("/busca")}
                    />
                    <FeatureCard
                        icon={<MessageCircle size={24} strokeWidth={1.5} className="text-white" />}
                        title="Perguntas das Palestras"
                        description="Perguntas personalizadas para processamento em grupo."
                        buttonText="Personalizar"
                        gradientColors="from-[#8B5CF6] via-[#FF1493] to-[#FF6B35]"
                        onClick={() => navigate("/perguntas")}
                    />
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto pb-2">
                    <div className="flex items-center gap-3">
                        <ArrowRight size={20} className="text-white/60" />
                        <span className="text-white/80 text-sm">
                            Just Keep <span className="font-bold text-white">Learning</span>
                        </span>
                    </div>
                    <img src={officialPartner} alt="Official partner" className="h-10 object-contain opacity-40" />
                </div>
            </div>
        </AppLayout>
    )
}

/* ── Sub-components ── */
function MiniStat({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
    return (
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5">
            {icon}
            <span className="text-sm font-bold text-white">{value}</span>
            <span className="text-[10px] text-white/20">{label}</span>
        </div>
    )
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string | number; label: string; color: string }) {
    return (
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
            <div className="flex justify-center mb-1" style={{ color }}>{icon}</div>
            <span className="text-lg font-bold text-white block">{value}</span>
            <span className="text-[10px] text-white/20 uppercase tracking-wide">{label}</span>
        </div>
    )
}

function FeatureCard({ icon, title, description, buttonText, gradientColors, onClick }: {
    icon: React.ReactNode; title: string; description: string; buttonText: string; gradientColors: string; onClick: () => void
}) {
    return (
        <div
            className="flex flex-col rounded-2xl backdrop-blur-sm p-6"
            style={{
                backgroundColor: "var(--feature-card-bg)",
                border: "1px solid var(--surface-border)",
                boxShadow: "var(--feature-card-shadow, none)",
            }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div style={{ color: "var(--text-primary)" }}>{icon}</div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>{title}</h3>
            </div>
            <p className="text-sm text-center leading-relaxed flex-1 flex items-center justify-center" style={{ color: "var(--text-muted)" }}>{description}</p>
            <div className="mt-4 flex justify-center">
                <div className={`p-[2px] rounded-full bg-gradient-to-r ${gradientColors}`}>
                    <button
                        onClick={onClick}
                        className="rounded-full px-8 py-2 text-sm font-medium transition-colors"
                        style={{
                            backgroundColor: "var(--feature-card-btn-bg)",
                            color: "var(--text-primary)",
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
