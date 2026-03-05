import { useState, useRef, useEffect } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { CATEGORIES as CAPACITE_CATS, PALESTRAS_CATALOG } from "@/data/capacite-data"
import { aiSearch, type AISearchResult } from "@/lib/deepseek"
import {
    Search,
    Sparkles,
    ArrowRight,
    Clock,
    TrendingUp,
    BookOpen,
    Mic,
    Loader2,
    AlertCircle,
    Lightbulb,
} from "lucide-react"

/* ─── Static data ─── */
const TRENDING_TOPICS = [
    "Liderança transformacional",
    "Gestão de tempo para líderes",
    "Inteligência emocional no trabalho",
    "Comunicação assertiva com equipes",
    "Inovação e mudança organizacional",
]

const FILTER_CATEGORIES = [
    { label: "Tudo", icon: "🔍", filter: null },
    { label: "Palestras", icon: "🎤", filter: "palestra" },
    { label: "Preletores", icon: "👤", filter: "preletor" },
    { label: "Temas", icon: "💡", filter: "tema" },
    { label: "Insights", icon: "✨", filter: "insight" },
]

// Build catalog context string for the AI
function buildCatalogContext(): string {
    const parts: string[] = []

    parts.push("CATEGORIAS DE LIDERANÇA:")
    CAPACITE_CATS.forEach(c => {
        parts.push(`- ${c.shortName}: ${c.description}`)
    })

    parts.push("\nPALESTRAS DISPONÍVEIS:")
    PALESTRAS_CATALOG.forEach(p => {
        const cat = CAPACITE_CATS.find(c => p.categoryIds.includes(c.id))
        parts.push(`- "${p.title}" por ${p.speaker} (${p.duration}) — Categoria: ${cat?.shortName ?? "N/A"} — ${p.description}`)
    })

    return parts.join("\n")
}

const CATALOG_CTX = buildCatalogContext()

export function BuscaInteligenteScreen() {
    const [query, setQuery] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [results, setResults] = useState<AISearchResult[]>([])
    const [hasSearched, setHasSearched] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [recentSearches, setRecentSearches] = useState<string[]>(() => {
        const saved = localStorage.getItem("capacite_recent_searches")
        return saved ? JSON.parse(saved) : []
    })
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const saveSearch = (q: string) => {
        const updated = [q, ...recentSearches.filter(s => s !== q)].slice(0, 5)
        setRecentSearches(updated)
        localStorage.setItem("capacite_recent_searches", JSON.stringify(updated))
    }

    const handleSearch = async () => {
        if (!query.trim()) return
        setIsSearching(true)
        setHasSearched(true)
        setError(null)
        saveSearch(query.trim())

        try {
            const aiResults = await aiSearch(query, CATALOG_CTX)
            setResults(aiResults)
        } catch (err: any) {
            console.error("Search error:", err)
            setError(err.message || "Erro ao conectar com a IA. Tente novamente.")
            setResults([])
        } finally {
            setIsSearching(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch()
    }

    const handleSuggestionClick = (text: string) => {
        setQuery(text)
        // Trigger search immediately
        setTimeout(() => {
            setQuery(text)
            setIsSearching(true)
            setHasSearched(true)
            setError(null)
            saveSearch(text)
            aiSearch(text, CATALOG_CTX)
                .then(r => setResults(r))
                .catch(err => {
                    setError(err.message || "Erro ao conectar com a IA.")
                    setResults([])
                })
                .finally(() => setIsSearching(false))
        }, 50)
    }

    const filteredResults = activeFilter
        ? results.filter(r => r.type === activeFilter)
        : results

    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6">
                {/* ── Header ── */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-1">
                        <Sparkles size={28} className="text-[#FF1493]" />
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Busca Inteligente
                        </h1>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF1493]/10 text-[#FF1493] border border-[#FF1493]/20">
                            DeepSeek AI
                        </span>
                    </div>
                    <p className="text-white/40 ml-[40px]">
                        Pesquise sobre qualquer palestra, tema ou preletor com inteligência artificial.
                    </p>
                </div>

                {/* ── Search Bar ── */}
                <div className="relative mb-6">
                    <div
                        className="relative rounded-2xl p-[1px] transition-all duration-300"
                        style={{
                            background: query
                                ? "linear-gradient(135deg, #FF1493, #8B5CF6, #173DED)"
                                : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
                        }}
                    >
                        <div className="flex items-center gap-3 rounded-2xl bg-[#000035] px-5 py-4">
                            {isSearching ? (
                                <Loader2 size={22} className="text-[#FF1493] animate-spin shrink-0" />
                            ) : (
                                <Search size={22} className="text-white/30 shrink-0" />
                            )}
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Pergunte qualquer coisa: 'Como melhorar comunicação com a equipe?'"
                                className="flex-1 bg-transparent text-white text-base placeholder:text-white/25 outline-none"
                            />
                            <button
                                className="shrink-0 p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors"
                                title="Busca por voz (em breve)"
                            >
                                <Mic size={18} />
                            </button>
                            <button
                                onClick={handleSearch}
                                disabled={!query.trim() || isSearching}
                                className="shrink-0 flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:hover:scale-100"
                                style={{
                                    background: "linear-gradient(135deg, #FF1493, #8B5CF6)",
                                    boxShadow: query ? "0 0 20px rgba(255, 20, 147, 0.25)" : "none",
                                }}
                            >
                                Buscar
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Category filters ── */}
                <div className="flex gap-3 mb-6">
                    {FILTER_CATEGORIES.map((cat) => (
                        <button
                            key={cat.label}
                            onClick={() => setActiveFilter(activeFilter === cat.filter ? null : cat.filter)}
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200 ${activeFilter === cat.filter
                                ? "border-white/20 bg-white/10 text-white"
                                : "border-white/8 bg-white/[0.03] text-white/50 hover:text-white/80 hover:bg-white/[0.06]"
                                }`}
                        >
                            <span className="text-base">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ── Content area ── */}
                <div className="flex-1 overflow-y-auto">
                    {!hasSearched ? (
                        /* ── Empty state: suggestions ── */
                        <div className="grid grid-cols-2 gap-8">
                            {/* Trending */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <TrendingUp size={16} className="text-[#FF1493]" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
                                        Sugestões de Busca
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {TRENDING_TOPICS.map((topic) => (
                                        <button
                                            key={topic}
                                            onClick={() => handleSuggestionClick(topic)}
                                            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                                        >
                                            <Sparkles size={14} className="text-[#FF1493]/50 group-hover:text-[#FF1493] transition-colors" />
                                            {topic}
                                            <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white/30" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent */}
                            <div>
                                {recentSearches.length > 0 && (
                                    <>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Clock size={16} className="text-white/30" />
                                            <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
                                                Pesquisas Recentes
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            {recentSearches.map((search) => (
                                                <button
                                                    key={search}
                                                    onClick={() => handleSuggestionClick(search)}
                                                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                >
                                                    <Clock size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                                                    {search}
                                                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white/30" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Quick tip */}
                                <div className="mt-6 rounded-xl border border-[#173DED]/20 bg-[#173DED]/5 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BookOpen size={14} className="text-[#173DED]" />
                                        <span className="text-xs font-semibold text-[#173DED]">Dica</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed">
                                        Faça perguntas naturais! A IA entende frases como "Quais palestras falam sobre gestão de equipes remotas?" ou "Como melhorar minha comunicação como líder?"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : isSearching ? (
                        /* ── Loading state ── */
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 rounded-full bg-[#FF1493]/20 blur-xl animate-pulse" />
                                <div className="relative p-5 rounded-full bg-[#FF1493]/10 border border-[#FF1493]/20">
                                    <Sparkles size={32} className="text-[#FF1493] animate-pulse" />
                                </div>
                            </div>
                            <p className="text-white/50 text-sm animate-pulse">
                                Buscando com DeepSeek AI...
                            </p>
                            <p className="text-white/20 text-xs mt-1">Analisando catálogo e gerando insights</p>
                        </div>
                    ) : error ? (
                        /* ── Error state ── */
                        <div className="flex flex-col items-center justify-center py-20">
                            <AlertCircle size={48} className="text-red-400/50 mb-4" />
                            <p className="text-red-400/70 text-sm mb-1">Erro na busca</p>
                            <p className="text-white/20 text-xs text-center max-w-sm">{error}</p>
                            <button onClick={handleSearch} className="mt-4 text-xs text-[#FF1493] hover:underline">
                                Tentar novamente
                            </button>
                        </div>
                    ) : filteredResults.length > 0 ? (
                        /* ── Results ── */
                        <div>
                            <span className="text-xs text-white/30 mb-4 block">
                                {filteredResults.length} resultado{filteredResults.length !== 1 && "s"} encontrado{filteredResults.length !== 1 && "s"} para "{query}"
                            </span>
                            <div className="flex flex-col gap-3">
                                {filteredResults.map((result, idx) => (
                                    <ResultCard key={idx} result={result} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* ── No results ── */
                        <div className="flex flex-col items-center justify-center py-20">
                            <Search size={48} className="text-white/10 mb-4" />
                            <p className="text-white/40 text-sm mb-1">
                                Nenhum resultado para "{query}"
                            </p>
                            <p className="text-white/20 text-xs">
                                Tente reformular sua pergunta ou usar termos diferentes.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}

/* ── Result card component ── */
function ResultCard({ result }: { result: AISearchResult }) {
    const typeConfig = {
        palestra: { label: "Palestra", color: "#FF1493", icon: "🎤" },
        preletor: { label: "Preletor", color: "#FF6B35", icon: "👤" },
        tema: { label: "Tema", color: "#8B5CF6", icon: "💡" },
        insight: { label: "Insight IA", color: "#173DED", icon: "✨" },
    }
    const config = typeConfig[result.type]

    return (
        <div className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 p-5 transition-all duration-200 text-left w-full">
            <div
                className="mt-0.5 shrink-0 flex items-center justify-center w-10 h-10 rounded-lg text-lg"
                style={{ backgroundColor: `${config.color}10`, border: `1px solid ${config.color}20` }}
            >
                {config.icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium text-sm truncate">{result.title}</h3>
                    <span
                        className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ color: config.color, backgroundColor: `${config.color}15` }}
                    >
                        {config.label}
                    </span>
                </div>
                <p className="text-white/35 text-xs">{result.subtitle}</p>
                {result.explanation && (
                    <div className="flex items-start gap-1.5 mt-2 text-xs text-white/25 leading-relaxed">
                        <Lightbulb size={12} className="mt-0.5 shrink-0 text-[#eab308]/50" />
                        <span>{result.explanation}</span>
                    </div>
                )}
            </div>
            <div className="shrink-0 flex items-center gap-3">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-white/20 uppercase tracking-wider">Relevância</span>
                    <span className="text-sm font-bold" style={{ color: config.color }}>
                        {result.relevance}%
                    </span>
                </div>
                <ArrowRight size={16} className="text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-200" />
            </div>
        </div>
    )
}
