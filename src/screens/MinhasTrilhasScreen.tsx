import { useState, useEffect } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useTrilhas } from "@/contexts/TrilhasContext"
import { useDiagnostico } from "@/contexts/DiagnosticoContext"
import { useGamificacao } from "@/contexts/GamificacaoContext"
import { CATEGORIES, getCategoryById, getPalestraById, PALESTRAS_CATALOG } from "@/data/capacite-data"
import { ALL_SPEAKER_IMAGES } from "@/data/speakers-list"
import { useNavigate } from "react-router-dom"
import {
    Zap, BookOpen, Play, CheckCircle, ExternalLink,
    ArrowRight, Trophy, Plus, X, Search, Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Trilha } from "@/types"

type Tab = "all" | "active" | "completed"

function findSpeakerImage(speakerName: string): string | undefined {
    const exact = PALESTRAS_CATALOG.find(p => p.speaker === speakerName)?.speakerAvatar
    if (exact) return exact

    const normalizedName = speakerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const words = normalizedName.split(/[^a-z0-9]+/).filter(w => w.length > 1)
    if (words.length === 0) return undefined

    const matchedFile = ALL_SPEAKER_IMAGES.find(filename => {
        const fileBase = filename.replace(/\.(png|jpg|jpeg)$/, '')
        return words.every(w => fileBase.includes(w))
    })

    return matchedFile ? `/speakers/${matchedFile}` : undefined
}

export function MinhasTrilhasScreen() {
    const navigate = useNavigate()
    const { trilhas, progress, getProgress, isPalestraWatched, markPalestraWatched, completedCount, enrollTrilha, loadTrilhas } = useTrilhas()
    const { hasDiagnostico } = useDiagnostico()
    const { checkMilestone, hasStar } = useGamificacao()
    const [tab, setTab] = useState<Tab>("all")
    const [selectedTrilha, setSelectedTrilha] = useState<string | null>(trilhas[0]?.id ?? null)
    const [showCreateModal, setShowCreateModal] = useState(false)

    // Load trilhas from API on mount (needed for page refresh)
    useEffect(() => {
        loadTrilhas()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-select first trilha when list loads
    useEffect(() => {
        if (!selectedTrilha && trilhas.length > 0) {
            setSelectedTrilha(trilhas[0].id)
        }
    }, [trilhas, selectedTrilha])

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

    const handleCreateTrilha = async (trilha: Trilha) => {
        await enrollTrilha(trilha)
        setShowCreateModal(false)
        // Select the newly created trilha
        setTimeout(() => {
            const latest = trilhas[trilhas.length - 1]
            if (latest) setSelectedTrilha(latest.id)
        }, 300)
    }

    // No trilhas yet
    if (trilhas.length === 0 && !showCreateModal) {
        return (
            <AppLayout>
                <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
                    <div className="p-6 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                        <BookOpen size={48} className="text-[#8B5CF6]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Nenhuma trilha ainda</h2>
                    <p className="text-white/30 text-center max-w-md text-sm leading-relaxed">
                        {hasDiagnostico
                            ? "Acesse seu diagnóstico para ver as trilhas sugeridas ou crie uma trilha personalizada."
                            : "Complete o diagnóstico para receber trilhas personalizadas ou crie uma trilha personalizada."}
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate("/diagnostico")}
                            className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white text-sm transition-all hover:scale-[1.02]"
                            style={{ background: "linear-gradient(135deg, #8B5CF6, #173DED)", boxShadow: "0 0 15px rgba(139,92,246,0.2)" }}
                        >
                            {hasDiagnostico ? "Ver Diagnóstico" : "Iniciar Diagnóstico"} <ArrowRight size={14} />
                        </button>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white text-sm border border-white/10 hover:bg-white/5 transition-all"
                        >
                            <Plus size={14} /> Criar Trilha
                        </button>
                    </div>
                </div>
                {showCreateModal && <CreateTrilhaModal onClose={() => setShowCreateModal(false)} onCreate={handleCreateTrilha} />}
            </AppLayout>
        )
    }

    return (
        <AppLayout>
            <div className="flex h-full">
                {/* Left panel: trilha list */}
                <div className="w-[340px] shrink-0 border-r border-white/5 flex flex-col">
                    <div className="p-4 border-b border-white/5">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-lg font-bold text-white">Minhas Trilhas</h1>
                            <button
                                onClick={() => setShowCreateModal(true)}
                                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#FF1493] border border-[#FF1493]/20 bg-[#FF1493]/5 hover:bg-[#FF1493]/10 transition-all"
                            >
                                <Plus size={12} /> Nova Trilha
                            </button>
                        </div>
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
                                        {trilha.type === "impacto" ? <Zap size={14} className="text-[#FF6B35]" /> : trilha.type === "custom" ? <Layers size={14} className="text-[#06b6d4]" /> : <BookOpen size={14} className="text-[#8B5CF6]" />}
                                        <span className="text-sm font-medium text-white truncate flex-1">{trilha.title}</span>
                                        {isComplete && <CheckCircle size={12} className="text-green-400" />}
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
                                        <div className="h-full rounded-full transition-all" style={{ width: `${prog}%`, background: isComplete ? "#22c55e" : "linear-gradient(90deg, #FF1493, #FF6B35)" }} />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-white/20">{prog}%</span>
                                        {cat && <span className="text-[10px] text-white/15">{cat.shortName}</span>}
                                        {trilha.type === "custom" && <span className="text-[10px] text-[#06b6d4]/50">Personalizada</span>}
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
                                        {activeTrilha.type === "impacto" ? <Zap size={20} className="text-[#FF6B35]" /> : activeTrilha.type === "custom" ? <Layers size={20} className="text-[#06b6d4]" /> : <BookOpen size={20} className="text-[#8B5CF6]" />}
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
                                            const speakerImg = findSpeakerImage(palestra.speaker)

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
                                                            {speakerImg ? (
                                                                <img src={speakerImg} alt={palestra.speaker} className="w-24 h-24 rounded-full object-cover" />
                                                            ) : (
                                                                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white/30 text-xs">🎤</div>
                                                            )}
                                                            <div className="flex-1">
                                                                <span className="text-sm font-medium text-white block">{palestra.title}</span>
                                                                <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{palestra.speaker} • {palestra.duration}</span>
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
                                                                href="https://globalleadership.com.br/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-semibold text-[#FF1493]/60 border border-[#FF1493]/10 hover:bg-[#FF1493]/5 transition-colors"
                                                            >
                                                                <ExternalLink size={10} /> Assistir
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
            {showCreateModal && <CreateTrilhaModal onClose={() => setShowCreateModal(false)} onCreate={handleCreateTrilha} />}
        </AppLayout>
    )
}

/* ─── Create Trilha Modal ─── */
function CreateTrilhaModal({ onClose, onCreate }: { onClose: () => void; onCreate: (trilha: Trilha) => void }) {
    const [step, setStep] = useState<1 | 2>(1)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedPalestras, setSelectedPalestras] = useState<string[]>([])
    const [search, setSearch] = useState("")

    const availablePalestras = PALESTRAS_CATALOG.filter(p => {
        const matchesCategory = !selectedCategory || p.categoryIds.includes(selectedCategory)
        const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.speaker.toLowerCase().includes(search.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const togglePalestra = (id: string) => {
        setSelectedPalestras(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    const handleCreate = () => {
        if (!name.trim() || selectedPalestras.length === 0) return

        const trilha: Trilha = {
            id: `custom-${Date.now()}`,
            title: name.trim(),
            description: description.trim() || `Trilha personalizada com ${selectedPalestras.length} palestras.`,
            type: "custom",
            categoryId: selectedCategory || "",
            palestraIds: selectedPalestras,
            createdAt: new Date().toISOString(),
        }
        onCreate(trilha)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl border border-white/10 bg-[#000040] overflow-hidden flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FF1493]/10">
                            <Plus size={18} className="text-[#FF1493]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Nova Trilha Personalizada</h2>
                            <p className="text-xs text-white/30">Passo {step} de 2</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors">
                        <X size={18} />
                    </button>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-white/5">
                    <div className="h-full transition-all duration-300" style={{ width: step === 1 ? "50%" : "100%", background: "linear-gradient(90deg, #FF1493, #8B5CF6)" }} />
                </div>

                {step === 1 ? (
                    /* Step 1: Name & Category */
                    <div className="flex-1 overflow-y-auto p-5 space-y-5">
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-white/30 block mb-2">Nome da Trilha *</label>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Ex: Minha jornada de comunicação"
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#FF1493]/40 transition-colors"
                                autoFocus
                            />
                        </div>

                        <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-white/30 block mb-2">Descrição (opcional)</label>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Descreva o objetivo desta trilha..."
                                rows={2}
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#FF1493]/40 transition-colors resize-none"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-white/30 block mb-3">Categoria (filtro opcional)</label>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={cn(
                                        "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                                        !selectedCategory ? "border-white/20 bg-white/10 text-white" : "border-white/5 bg-white/[0.02] text-white/30 hover:text-white/50"
                                    )}
                                >
                                    Todas
                                </button>
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={cn(
                                            "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                                            selectedCategory === cat.id
                                                ? "text-white"
                                                : "border-white/5 bg-white/[0.02] text-white/30 hover:text-white/50"
                                        )}
                                        style={selectedCategory === cat.id ? { borderColor: `${cat.color}40`, backgroundColor: `${cat.color}15`, color: cat.color } : {}}
                                    >
                                        {cat.shortName}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Step 2: Select Palestras */
                    <div className="flex-1 overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-white/5">
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Buscar palestras por título ou palestrante..."
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#FF1493]/40 transition-colors"
                                />
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-[10px] text-white/20">{availablePalestras.length} palestras disponíveis</span>
                                <span className="text-[10px] font-semibold text-[#FF1493]">{selectedPalestras.length} selecionadas</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
                            {availablePalestras.map(p => {
                                const isSelected = selectedPalestras.includes(p.id)
                                const speakerImg = findSpeakerImage(p.speaker)
                                const cat = CATEGORIES.find(c => p.categoryIds.includes(c.id))

                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => togglePalestra(p.id)}
                                        className={cn(
                                            "w-full flex items-center gap-3 rounded-xl border p-3 text-left transition-all",
                                            isSelected
                                                ? "border-[#FF1493]/30 bg-[#FF1493]/[0.06]"
                                                : "border-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all",
                                            isSelected ? "border-[#FF1493] bg-[#FF1493]" : "border-white/15"
                                        )}>
                                            {isSelected && <CheckCircle size={12} className="text-white" />}
                                        </div>

                                        {speakerImg ? (
                                            <img src={speakerImg} alt={p.speaker} className="w-24 h-24 rounded-full object-cover shrink-0" />
                                        ) : (
                                            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/30 shrink-0">🎤</div>
                                        )}

                                        <div className="flex-1 min-w-0">
                                            <span className="text-sm font-medium text-white block truncate">{p.title}</span>
                                            <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{p.speaker} • {p.duration}</span>
                                        </div>

                                        {cat && (
                                            <span
                                                className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0"
                                                style={{ color: cat.color, backgroundColor: `${cat.color}10` }}
                                            >
                                                {cat.shortName}
                                            </span>
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-white/5">
                    {step === 1 ? (
                        <>
                            <button onClick={onClose} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                Cancelar
                            </button>
                            <button
                                onClick={() => { if (name.trim()) setStep(2) }}
                                disabled={!name.trim()}
                                className="flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:hover:scale-100"
                                style={{ background: "linear-gradient(135deg, #FF1493, #8B5CF6)" }}
                            >
                                Próximo: Escolher Palestras <ArrowRight size={14} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setStep(1)} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                ← Voltar
                            </button>
                            <button
                                onClick={handleCreate}
                                disabled={selectedPalestras.length === 0}
                                className="flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:hover:scale-100"
                                style={{ background: "linear-gradient(135deg, #FF1493, #FF6B35)" }}
                            >
                                <Plus size={14} /> Criar Trilha ({selectedPalestras.length} palestras)
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
