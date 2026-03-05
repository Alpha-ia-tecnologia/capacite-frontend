import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useDiagnostico } from "@/contexts/DiagnosticoContext"
import { CATEGORIES, getPalestrasByCategory } from "@/data/capacite-data"
import { getStrengthLevel, getStrengthColor } from "@/lib/diagnostico-scoring"
import {
    Search, ChevronDown, ChevronUp, Play,
    Crown, Users, MessageSquare, Target, Lightbulb, Heart, Compass,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

const ICON_MAP: Record<string, React.ReactNode> = {
    Crown: <Crown size={22} />, Users: <Users size={22} />, MessageSquare: <MessageSquare size={22} />,
    Target: <Target size={22} />, Lightbulb: <Lightbulb size={22} />, Heart: <Heart size={22} />,
    Compass: <Compass size={22} />,
}

export function GrandesAreasScreen() {
    const navigate = useNavigate()
    const { latestResult, hasDiagnostico } = useDiagnostico()
    const [search, setSearch] = useState("")
    const [selectedArea, setSelectedArea] = useState<string | null>(null)

    const filteredCategories = CATEGORIES.filter(cat =>
        cat.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.description.toLowerCase().includes(search.toLowerCase())
    )

    const getScoreForCategory = (catId: string) => {
        if (!latestResult) return null
        return latestResult.scores.find(s => s.categoryId === catId) ?? null
    }

    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Grandes Áreas</h1>
                        <p className="text-white/30 text-sm mt-1">As 7 categorias de desenvolvimento de liderança</p>
                    </div>
                    {!hasDiagnostico && (
                        <button
                            onClick={() => navigate("/diagnostico")}
                            className="text-xs text-[#FF1493] border border-[#FF1493]/20 rounded-full px-4 py-2 hover:bg-[#FF1493]/10 transition-colors"
                        >
                            Faça o diagnóstico para ver seus indicadores
                        </button>
                    )}
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Buscar área por nome ou descrição..."
                        className="w-full rounded-xl bg-white/[0.03] border border-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/10 transition-colors"
                    />
                </div>

                {/* Stats summary */}
                {hasDiagnostico && latestResult && (
                    <div className="flex gap-3 mb-6">
                        {(() => {
                            const forte = latestResult.scores.filter(s => getStrengthLevel(s.score) === "forte").length
                            const medio = latestResult.scores.filter(s => getStrengthLevel(s.score) === "medio").length
                            const fraco = latestResult.scores.filter(s => getStrengthLevel(s.score) === "fraco").length
                            return (
                                <>
                                    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-white font-bold">{forte}</span>
                                        <span className="text-[10px] text-white/30">Fortes</span>
                                    </div>
                                    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <span className="text-sm text-white font-bold">{medio}</span>
                                        <span className="text-[10px] text-white/30">Médias</span>
                                    </div>
                                    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-sm text-white font-bold">{fraco}</span>
                                        <span className="text-[10px] text-white/30">Lacunas</span>
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                )}

                {/* Categories Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {filteredCategories.map(cat => {
                        const score = getScoreForCategory(cat.id)
                        const level = score ? getStrengthLevel(score.score) : null
                        const color = level ? getStrengthColor(level) : cat.color
                        const isSelected = selectedArea === cat.id
                        const palestras = getPalestrasByCategory(cat.id)
                        const isPriority = latestResult?.priority1 === cat.id || latestResult?.priority2 === cat.id

                        return (
                            <div key={cat.id}>
                                <button
                                    onClick={() => setSelectedArea(isSelected ? null : cat.id)}
                                    className={cn(
                                        "w-full rounded-2xl border p-5 text-left transition-all duration-200",
                                        isSelected ? "border-white/15 bg-white/[0.04]" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.03]",
                                        isPriority && "border-[#FF1493]/20"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-white/[0.03]" style={{ color: cat.color }}>
                                            {ICON_MAP[cat.icon]}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-base font-semibold text-white">{cat.name}</h3>
                                                {isPriority && (
                                                    <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF1493]/15 text-[#FF1493] font-semibold">
                                                        {latestResult?.priority1 === cat.id ? "P1" : "P2"}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-white/30 mt-0.5">{cat.description}</p>
                                        </div>
                                        {/* Score indicator */}
                                        {score && (
                                            <div className="flex items-center gap-3 mr-4">
                                                <div className="w-20 h-1.5 rounded-full bg-white/5 overflow-hidden">
                                                    <div className="h-full rounded-full transition-all" style={{ width: `${(score.score / 12) * 100}%`, backgroundColor: color }} />
                                                </div>
                                                <span className="text-xs font-bold min-w-[32px] text-right" style={{ color }}>{score.score}/12</span>
                                            </div>
                                        )}
                                        {!score && (
                                            <span className="text-[10px] text-white/15 mr-4">Sem dados</span>
                                        )}
                                        {isSelected ? <ChevronUp size={16} className="text-white/20" /> : <ChevronDown size={16} className="text-white/20" />}
                                    </div>
                                </button>

                                {/* Expanded detail */}
                                {isSelected && (
                                    <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] p-5 ml-4">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3 block">
                                            Palestras — {cat.shortName} ({palestras.length})
                                        </span>
                                        <div className="flex flex-col gap-2">
                                            {palestras.map(p => (
                                                <div key={p.id} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 hover:bg-white/[0.04] transition-colors">
                                                    <img src={p.speakerAvatar} alt={p.speaker} className="w-8 h-8 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <span className="text-sm font-medium text-white block">{p.title}</span>
                                                        <span className="text-[10px] text-white/20">{p.speaker} • {p.duration}</span>
                                                    </div>
                                                    <a
                                                        href={p.glsnowUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white/40 border border-white/5 hover:bg-white/5 transition-colors"
                                                    >
                                                        <Play size={10} /> Assistir
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </AppLayout>
    )
}
