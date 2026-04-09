import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { PALESTRAS_CATALOG, CATEGORIES, getCategoryById } from "@/data/capacite-data"
import { generateQuestions, type AIQuestion } from "@/lib/deepseek"
import type { Palestra } from "@/types"
import {
    MessageCircle,
    Sparkles,
    ChevronRight,
    Loader2,
    AlertCircle,
    BookOpen,
    HelpCircle,
    Lightbulb,
    Users,
} from "lucide-react"

/* ── helpers ── */
function questionTypeLabel(type: AIQuestion["type"]) {
    switch (type) {
        case "reflexao": return "Reflexão"
        case "aplicacao": return "Aplicação"
        case "discussao": return "Discussão"
    }
}

function questionTypeIcon(type: AIQuestion["type"]) {
    switch (type) {
        case "reflexao": return <HelpCircle size={14} />
        case "aplicacao": return <Lightbulb size={14} />
        case "discussao": return <Users size={14} />
    }
}

function questionTypeColor(type: AIQuestion["type"]) {
    switch (type) {
        case "reflexao": return "text-blue-400 bg-blue-400/10 border-blue-400/20"
        case "aplicacao": return "text-amber-400 bg-amber-400/10 border-amber-400/20"
        case "discussao": return "text-purple-400 bg-purple-400/10 border-purple-400/20"
    }
}

function difficultyLabel(d: AIQuestion["difficulty"]) {
    switch (d) {
        case "facil": return "Fácil"
        case "media": return "Média"
        case "avancada": return "Avançada"
    }
}

function difficultyColor(d: AIQuestion["difficulty"]) {
    switch (d) {
        case "facil": return "text-green-400"
        case "media": return "text-yellow-400"
        case "avancada": return "text-red-400"
    }
}

export function PerguntasPalestrasScreen() {
    const [selectedPalestra, setSelectedPalestra] = useState<Palestra | null>(null)
    const [questions, setQuestions] = useState<AIQuestion[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [filterCategory, setFilterCategory] = useState<string>("all")

    const filteredPalestras = filterCategory === "all"
        ? PALESTRAS_CATALOG
        : PALESTRAS_CATALOG.filter(p => p.categoryIds.includes(filterCategory))

    async function handleGenerate() {
        if (!selectedPalestra) return
        setLoading(true)
        setError(null)
        setQuestions([])

        try {
            const cat = getCategoryById(selectedPalestra.categoryIds[0])
            const result = await generateQuestions(
                selectedPalestra.title,
                selectedPalestra.speaker,
                cat?.name,
            )
            setQuestions(result)
        } catch (err: any) {
            setError(err.message || "Erro ao gerar perguntas com IA.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <AppLayout>
            <div className="flex h-full overflow-hidden">
                {/* ── Left: Palestra Picker ── */}
                <div className="w-[340px] border-r border-white/5 flex flex-col overflow-hidden shrink-0">
                    <div className="p-5 border-b border-white/5">
                        <div className="flex items-center gap-2 mb-1">
                            <MessageCircle size={18} className="text-[#8B5CF6]" />
                            <h2 className="text-lg font-bold text-white">Perguntas</h2>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-white/20 mb-3">
                            Processamento Pós-Palestra
                        </p>
                        <p className="text-xs text-white/30 mb-3">Gere perguntas personalizadas com Capacite AI</p>

                        {/* Category filter */}
                        <select
                            value={filterCategory}
                            onChange={e => setFilterCategory(e.target.value)}
                            className="w-full rounded-lg bg-white/5 border border-white/10 text-white text-xs px-3 py-2 outline-none focus:border-[#8B5CF6]/50"
                        >
                            <option value="all">Todas as áreas</option>
                            {CATEGORIES.map(c => (
                                <option key={c.id} value={c.id}>{c.shortName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Palestra list */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredPalestras.map(p => {
                            const isSelected = selectedPalestra?.id === p.id
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => { setSelectedPalestra(p); setQuestions([]); setError(null) }}
                                    className={`w-full text-left px-5 py-3 border-b border-white/5 transition-all ${isSelected
                                        ? "bg-[#8B5CF6]/10 border-l-2 border-l-[#8B5CF6]"
                                        : "hover:bg-white/[0.03]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-sm font-medium truncate ${isSelected ? "text-white" : "text-white/60"}`}>
                                            {p.title}
                                        </span>
                                        <ChevronRight size={14} className="text-white/20 shrink-0" />
                                    </div>
                                    <span className="text-[10px] text-white/20">{p.speaker} · {p.duration}</span>
                                </button>
                            )
                        })}
                        {filteredPalestras.length === 0 && (
                            <div className="p-8 text-center">
                                <p className="text-white/20 text-sm">
                                    Sem perguntas
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Right: Question Display ── */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {selectedPalestra ? (
                        <>
                            {/* Header */}
                            <div className="p-6 border-b border-white/5">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">{selectedPalestra.title}</h2>
                                        <p className="text-sm text-white/40">{selectedPalestra.speaker} · {selectedPalestra.duration}</p>
                                        <p className="text-xs text-white/20 mt-1">{selectedPalestra.description}</p>
                                    </div>
                                    <button
                                        onClick={handleGenerate}
                                        disabled={loading}
                                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#FF1493] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
                                    >
                                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                                        {loading ? "Gerando..." : "Gerar com IA"}
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {questions.length > 0 && (
                                    <div className="space-y-4">
                                        {questions.map((q, i) => (
                                            <div
                                                key={q.id}
                                                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-all"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span className="shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-white/40">
                                                        {i + 1}
                                                    </span>
                                                    <div className="flex-1">
                                                        <p className="text-sm text-white leading-relaxed mb-2">{q.text}</p>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${questionTypeColor(q.type)}`}>
                                                                {questionTypeIcon(q.type)}
                                                                {questionTypeLabel(q.type)}
                                                            </span>
                                                            <span className={`text-[10px] ${difficultyColor(q.difficulty)}`}>
                                                                {difficultyLabel(q.difficulty)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {loading && (
                                    <div className="flex flex-col items-center justify-center h-64">
                                        <Loader2 size={32} className="text-[#8B5CF6] animate-spin mb-3" />
                                        <p className="text-white/50 text-sm animate-pulse">Gerando perguntas com Capacite AI...</p>
                                    </div>
                                )}

                                {error && (
                                    <div className="flex flex-col items-center justify-center h-64">
                                        <AlertCircle size={32} className="text-red-400/50 mb-3" />
                                        <p className="text-red-400/70 text-sm mb-1">Erro ao gerar perguntas</p>
                                        <p className="text-red-400/40 text-xs">{error}</p>
                                    </div>
                                )}

                                {!loading && !error && questions.length === 0 && (
                                    <div className="flex flex-col items-center justify-center h-64 text-center">
                                        <div className="p-4 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
                                            <Sparkles size={32} className="text-[#8B5CF6]" />
                                        </div>
                                        <h2 className="text-lg font-semibold text-white mb-2">Perguntas não geradas</h2>
                                        <p className="text-sm text-white/30 max-w-sm">
                                            Gere perguntas personalizadas com Capacite AI para processamento pós-palestra e aprofundamento do conteúdo.
                                        </p>
                                        <button
                                            onClick={handleGenerate}
                                            className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#FF1493] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                                        >
                                            <Sparkles size={16} />
                                            Gerar Perguntas com IA
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-center">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 inline-block mb-4">
                                    <BookOpen size={32} className="text-white/15" />
                                </div>
                                <p className="text-white/20 text-sm">Selecione uma palestra para gerar perguntas</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}
