import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useTrilhas } from "@/contexts/TrilhasContext"
import { useDiagnostico } from "@/contexts/DiagnosticoContext"
import { useGamificacao } from "@/contexts/GamificacaoContext"
import { getCategoryById, getPalestraById } from "@/data/capacite-data"
import { useNavigate } from "react-router-dom"
import {
    Zap, BookOpen, Play, CheckCircle, ExternalLink,
    ArrowRight, Trophy,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Tab = "all" | "active" | "completed"

export function MinhasTrilhasScreen() {
    const navigate = useNavigate()
    const { trilhas, progress, getProgress, isPalestraWatched, markPalestraWatched, completedCount } = useTrilhas()
    const { hasDiagnostico } = useDiagnostico()
    const { checkMilestone, hasStar } = useGamificacao()
    const [tab, setTab] = useState<Tab>("all")
    const [selectedTrilha, setSelectedTrilha] = useState<string | null>(trilhas[0]?.id ?? null)

    const filteredTrilhas = trilhas.filter(t => {
        if (tab === "active") return !progress[t.id]?.completedAt
        if (tab === "completed") return !!progress[t.id]?.completedAt
        return true
    })

    const activeTrilha = trilhas.find(t => t.id === selectedTrilha)

    const handleMarkWatched = (trilhaId: string, palestraId: string) => {
        markPalestraWatched(trilhaId, palestraId)

        // Check gamification milestones
        if (!hasStar("primeira_palestra")) {
            checkMilestone("primeira_palestra")
        }

        // Check if trilha is now complete
        const t = trilhas.find(t => t.id === trilhaId)
        if (t) {
            const watched = progress[trilhaId]?.watchedPalestraIds ?? []
            if (watched.length + 1 >= t.palestraIds.length) {
                checkMilestone("trilha_completa")

                // Check 3 trilhas milestone
                if (completedCount + 1 >= 3) {
                    checkMilestone("tres_trilhas")
                }
            }
        }
    }

    // No trilhas yet
    if (trilhas.length === 0) {
        return (
            <AppLayout>
                <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
                    <div className="p-6 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                        <BookOpen size={48} className="text-[#8B5CF6]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Nenhuma trilha ainda</h2>
                    <p className="text-white/30 text-center max-w-md text-sm leading-relaxed">
                        {hasDiagnostico
                            ? "Acesse seu diagnóstico para ver as trilhas sugeridas e escolher por qual começar."
                            : "Complete o diagnóstico primeiro para receber trilhas personalizadas."}
                    </p>
                    <button
                        onClick={() => navigate("/diagnostico")}
                        className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white text-sm transition-all hover:scale-[1.02]"
                        style={{ background: "linear-gradient(135deg, #8B5CF6, #173DED)", boxShadow: "0 0 15px rgba(139,92,246,0.2)" }}
                    >
                        {hasDiagnostico ? "Ver Diagnóstico" : "Iniciar Diagnóstico"} <ArrowRight size={14} />
                    </button>
                </div>
            </AppLayout>
        )
    }

    return (
        <AppLayout>
            <div className="flex h-full">
                {/* Left panel: trilha list */}
                <div className="w-[340px] shrink-0 border-r border-white/5 flex flex-col">
                    <div className="p-4 border-b border-white/5">
                        <h1 className="text-lg font-bold text-white mb-3">Minhas Trilhas</h1>
                        <div className="flex gap-1 rounded-lg bg-white/[0.03] p-0.5">
                            {(["all", "active", "completed"] as Tab[]).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={cn(
                                        "flex-1 rounded-md py-1.5 text-xs font-medium transition-all",
                                        tab === t ? "bg-white/10 text-white" : "text-white/30 hover:text-white/50"
                                    )}
                                >
                                    {t === "all" && "Todas"}
                                    {t === "active" && "Em Progresso"}
                                    {t === "completed" && "Concluídas"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                        {filteredTrilhas.map(trilha => {
                            const prog = getProgress(trilha.id)
                            const cat = getCategoryById(trilha.categoryId)
                            const isComplete = !!progress[trilha.id]?.completedAt
                            return (
                                <button
                                    key={trilha.id}
                                    onClick={() => setSelectedTrilha(trilha.id)}
                                    className={cn(
                                        "w-full rounded-xl border p-3 text-left transition-all",
                                        selectedTrilha === trilha.id
                                            ? "border-white/15 bg-white/[0.05]"
                                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.03]"
                                    )}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        {trilha.type === "impacto" ? <Zap size={14} className="text-[#FF6B35]" /> : <BookOpen size={14} className="text-[#8B5CF6]" />}
                                        <span className="text-sm font-medium text-white truncate flex-1">{trilha.title}</span>
                                        {isComplete && <CheckCircle size={12} className="text-green-400" />}
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
                                        <div className="h-full rounded-full transition-all" style={{ width: `${prog}%`, background: isComplete ? "#22c55e" : "linear-gradient(90deg, #FF1493, #FF6B35)" }} />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-white/20">{prog}%</span>
                                        {cat && <span className="text-[10px] text-white/15">{cat.shortName}</span>}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Right panel: trilha detail */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {activeTrilha ? (() => {
                        const prog = getProgress(activeTrilha.id)
                        const palIds = activeTrilha.palestraIds
                        const isComplete = !!progress[activeTrilha.id]?.completedAt

                        return (
                            <>
                                <div className="p-6 border-b border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        {activeTrilha.type === "impacto" ? <Zap size={20} className="text-[#FF6B35]" /> : <BookOpen size={20} className="text-[#8B5CF6]" />}
                                        <h2 className="text-lg font-bold text-white">{activeTrilha.title}</h2>
                                        {isComplete && (
                                            <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-semibold">
                                                <Trophy size={10} /> Concluída
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-white/30">{activeTrilha.description}</p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                                            <div className="h-full rounded-full transition-all" style={{ width: `${prog}%`, background: isComplete ? "#22c55e" : "linear-gradient(90deg, #FF1493, #8B5CF6)" }} />
                                        </div>
                                        <span className="text-xs font-bold text-white">{prog}%</span>
                                    </div>
                                </div>

                                {/* Palestra list as timeline */}
                                <div className="flex-1 overflow-y-auto px-6 py-4">
                                    <div className="flex flex-col">
                                        {palIds.map((pid, idx) => {
                                            const palestra = getPalestraById(pid)
                                            if (!palestra) return null
                                            const watched = isPalestraWatched(activeTrilha.id, pid)
                                            const isNext = !watched && (idx === 0 || isPalestraWatched(activeTrilha.id, palIds[idx - 1]))

                                            return (
                                                <div key={pid} className="flex gap-4">
                                                    {/* Timeline line */}
                                                    <div className="flex flex-col items-center">
                                                        <div className={cn(
                                                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                                            watched ? "bg-green-500/20 text-green-400" : isNext ? "bg-[#FF1493]/20 text-[#FF1493]" : "bg-white/5 text-white/15"
                                                        )}>
                                                            {watched ? <CheckCircle size={14} /> : <Play size={12} />}
                                                        </div>
                                                        {idx < palIds.length - 1 && (
                                                            <div className={cn("w-px flex-1 min-h-[20px]", watched ? "bg-green-500/20" : "bg-white/5")} />
                                                        )}
                                                    </div>

                                                    {/* Palestra card */}
                                                    <div className={cn(
                                                        "flex-1 rounded-xl border p-4 mb-3 transition-all",
                                                        watched ? "border-green-500/10 bg-green-500/[0.02]" : isNext ? "border-white/10 bg-white/[0.03]" : "border-white/5 bg-white/[0.01]"
                                                    )}>
                                                        <div className="flex items-center gap-3 mb-1">
                                                            <img src={palestra.speakerAvatar} alt={palestra.speaker} className="w-8 h-8 rounded-full object-cover" />
                                                            <div className="flex-1">
                                                                <span className="text-sm font-medium text-white block">{palestra.title}</span>
                                                                <span className="text-[10px] text-white/20">{palestra.speaker} • {palestra.duration}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs text-white/20 mb-3">{palestra.description}</p>
                                                        <div className="flex gap-2">
                                                            {!watched && (
                                                                <button
                                                                    onClick={() => handleMarkWatched(activeTrilha.id, pid)}
                                                                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-semibold bg-white/5 text-white/50 hover:bg-white/10 transition-colors"
                                                                >
                                                                    <CheckCircle size={10} /> Marcar como assistida
                                                                </button>
                                                            )}
                                                            <a
                                                                href={palestra.glsnowUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-semibold text-[#FF1493]/60 border border-[#FF1493]/10 hover:bg-[#FF1493]/5 transition-colors"
                                                            >
                                                                <ExternalLink size={10} /> Assistir no GLSnow
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    })() : (
                        <div className="flex items-center justify-center h-full text-white/15 text-sm">
                            Selecione uma trilha
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}
