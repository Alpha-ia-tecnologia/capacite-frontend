import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { useDiagnostico } from "@/contexts/DiagnosticoContext"
import { useGamificacao } from "@/contexts/GamificacaoContext"
import { useTrilhas } from "@/contexts/TrilhasContext"
import { CATEGORIES, DIAGNOSTICO_QUESTIONS, getCategoryById, getPalestraById } from "@/data/capacite-data"
import { getStrengthLevel, getStrengthColor, generateDevolutiva } from "@/lib/diagnostico-scoring"
import type { DiagnosticoAnswer, ScaleValue } from "@/types"
import {
    FileEdit, ArrowRight, ArrowLeft, CheckCircle, Sparkles,
    Play, RotateCcw, Zap, BookOpen,
    Crown, Users, MessageSquare, Target, Lightbulb, Heart, Compass,
} from "lucide-react"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<string, React.ReactNode> = {
    Crown: <Crown size={20} />, Users: <Users size={20} />, MessageSquare: <MessageSquare size={20} />,
    Target: <Target size={20} />, Lightbulb: <Lightbulb size={20} />, Heart: <Heart size={20} />,
    Compass: <Compass size={20} />,
}

type Phase = "landing" | "questionnaire" | "processing" | "results"

export function DiagnosticoScreen() {
    const { hasDiagnostico, latestResult, submitDiagnostico, suggestedTrilhas } = useDiagnostico()
    const { checkMilestone } = useGamificacao()
    const { enrollTrilha } = useTrilhas()
    const [phase, setPhase] = useState<Phase>(hasDiagnostico ? "landing" : "landing")
    const [answers, setAnswers] = useState<Record<string, ScaleValue>>({})
    const [currentGroup, setCurrentGroup] = useState(0) // 0–6 (one category per group)
    const [expandedCat, setExpandedCat] = useState<string | null>(null)

    const groups = CATEGORIES.map(cat => ({
        category: cat,
        questions: DIAGNOSTICO_QUESTIONS.filter(q => q.categoryId === cat.id),
    }))

    const totalQuestions = 21
    const answeredCount = Object.keys(answers).length
    const currentQuestions = groups[currentGroup]?.questions ?? []
    const allCurrentAnswered = currentQuestions.every(q => answers[q.id] !== undefined)

    const handleAnswer = (questionId: string, value: ScaleValue) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    const handleSubmit = () => {
        setPhase("processing")
        const answerArr: DiagnosticoAnswer[] = Object.entries(answers).map(([questionId, value]) => ({
            questionId,
            value,
        }))
        setTimeout(() => {
            submitDiagnostico(answerArr)
            checkMilestone("diagnostico_completo")
            setPhase("results")
        }, 2500)
    }

    const handleChooseTrilha = (index: 0 | 1) => {
        if (suggestedTrilhas) {
            enrollTrilha(suggestedTrilhas[index])
        }
    }

    const handleRedo = () => {
        setAnswers({})
        setCurrentGroup(0)
        setPhase("questionnaire")
    }

    /* ─── LANDING ─── */
    if (phase === "landing") {
        return (
            <AppLayout>
                <div className="flex flex-col gap-8 px-8 py-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Diagnóstico</h1>
                        <p className="text-white/40 mt-1">
                            {hasDiagnostico
                                ? "Revise seu diagnóstico ou faça um novo para atualizar suas trilhas."
                                : "Fica mais fácil lhe dizer por onde começar se soubermos o cenário em que você está."}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-1 py-16">
                        <div className="mb-6 p-6 rounded-2xl bg-[#173DED]/10 border border-[#173DED]/20">
                            <FileEdit size={48} className="text-[#173DED]" />
                        </div>

                        {hasDiagnostico ? (
                            <>
                                <h2 className="text-xl font-semibold text-white mb-3">Seu diagnóstico está pronto</h2>
                                <p className="text-white/40 text-center max-w-md mb-8 leading-relaxed">
                                    Você pode visualizar os resultados ou refazer o diagnóstico para atualizar suas trilhas.
                                </p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setPhase("results")}
                                        className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                        style={{ background: "linear-gradient(135deg, #FF1493, #FF6B35, #FF1493)", boxShadow: "0 0 20px rgba(255, 20, 147, 0.3)" }}
                                    >
                                        Ver Meu Diagnóstico <ArrowRight size={16} />
                                    </button>
                                    <button
                                        onClick={handleRedo}
                                        className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white/60 text-sm border border-white/10 hover:bg-white/5 transition-all"
                                    >
                                        <RotateCcw size={14} /> Refazer Diagnóstico
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-semibold text-white mb-3">Comece seu diagnóstico</h2>
                                <p className="text-white/40 text-center max-w-md mb-8 leading-relaxed">
                                    Responda 21 perguntas rápidas (~10 min) para identificar as áreas prioritárias
                                    de desenvolvimento na sua organização.
                                </p>
                                <button
                                    onClick={() => setPhase("questionnaire")}
                                    className="flex items-center gap-2 rounded-full py-3 px-8 font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ background: "linear-gradient(135deg, #FF1493, #FF6B35, #FF1493)", boxShadow: "0 0 20px rgba(255, 20, 147, 0.3)" }}
                                >
                                    Iniciar Diagnóstico <ArrowRight size={16} />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <StepCard number="01" title="21 Perguntas" description="Avalie 7 áreas de liderança (3 perguntas cada)." />
                        <StepCard number="02" title="Análise IA" description="A IA identifica suas prioridades e gera devolutivas." />
                        <StepCard number="03" title="2 Trilhas" description="Receba duas trilhas personalizadas de palestras." />
                    </div>
                </div>
            </AppLayout>
        )
    }

    /* ─── PROCESSING ─── */
    if (phase === "processing") {
        return (
            <AppLayout>
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full border-4 border-[#FF1493]/20 border-t-[#FF1493] animate-spin" />
                        <Sparkles size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF1493]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">Analisando suas respostas...</h2>
                    <p className="text-white/30 text-sm">A IA está gerando seu diagnóstico personalizado</p>
                </div>
            </AppLayout>
        )
    }

    /* ─── RESULTS ─── */
    if (phase === "results" && latestResult) {
        const sortedScores = [...latestResult.scores].sort((a, b) => a.gap - b.gap) // forte → fraco
        const priorityCat1 = getCategoryById(latestResult.priority1)!
        const devolutiva1 = generateDevolutiva(latestResult.priority1, latestResult.scores.find(s => s.categoryId === latestResult.priority1)!.score)

        return (
            <AppLayout>
                <div className="flex flex-col h-full px-8 py-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Resultado do Diagnóstico</h1>
                            <p className="text-white/30 text-sm mt-1">
                                Realizado em {new Date(latestResult.date).toLocaleDateString("pt-BR")}
                            </p>
                        </div>
                        <button onClick={handleRedo} className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/40 hover:bg-white/5 transition-colors">
                            <RotateCcw size={14} /> Refazer
                        </button>
                    </div>

                    {/* ── Category Map ── */}
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3 block">Mapa das 7 Categorias</span>
                    <div className="grid grid-cols-7 gap-3 mb-8">
                        {sortedScores.map(s => {
                            const cat = getCategoryById(s.categoryId)!
                            const level = getStrengthLevel(s.score)
                            const color = getStrengthColor(level)
                            const isPriority = s.categoryId === latestResult.priority1 || s.categoryId === latestResult.priority2
                            return (
                                <button
                                    key={s.categoryId}
                                    onClick={() => setExpandedCat(expandedCat === s.categoryId ? null : s.categoryId)}
                                    className={cn(
                                        "rounded-xl p-3 text-center transition-all duration-200 border",
                                        isPriority ? "border-white/15 bg-white/[0.04]" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                                    )}
                                >
                                    <div className="flex justify-center mb-2" style={{ color: cat.color }}>
                                        {ICON_MAP[cat.icon]}
                                    </div>
                                    <span className="text-[10px] font-medium text-white/60 block mb-1">{cat.shortName}</span>
                                    <div className="flex justify-center gap-1 mb-1">
                                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                                            <div className="h-full rounded-full transition-all" style={{ width: `${(s.score / 12) * 100}%`, backgroundColor: color }} />
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color }}>{s.score}/12</span>
                                    {isPriority && (
                                        <span className="block text-[8px] font-bold text-[#FF1493] mt-1 uppercase tracking-wider">
                                            {s.categoryId === latestResult.priority1 ? "Prioridade 1" : "Prioridade 2"}
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {/* ── Expanded category detail ── */}
                    {expandedCat && (() => {
                        const cat = getCategoryById(expandedCat)!
                        const score = latestResult.scores.find(s => s.categoryId === expandedCat)!
                        const dev = generateDevolutiva(expandedCat, score.score)
                        return (
                            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span style={{ color: cat.color }}>{ICON_MAP[cat.icon]}</span>
                                    <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                                    <span className="text-xs font-bold ml-auto" style={{ color: getStrengthColor(getStrengthLevel(score.score)) }}>
                                        {score.score}/12
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-xs font-semibold text-white/40 uppercase mb-2">O que significa</h4>
                                        <p className="text-sm text-white/60 leading-relaxed">{dev.whatItMeans}</p>
                                        <h4 className="text-xs font-semibold text-white/40 uppercase mt-4 mb-2">Por que apareceu</h4>
                                        <p className="text-sm text-white/60 leading-relaxed">{dev.whyItAppeared}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-white/40 uppercase mb-2">Primeiros Passos (14 dias)</h4>
                                        <ol className="space-y-2">
                                            {dev.firstSteps.map((step, i) => (
                                                <li key={i} className="text-sm text-white/60 flex gap-2">
                                                    <span className="text-[#FF1493] font-bold">{i + 1}.</span> {step}
                                                </li>
                                            ))}
                                        </ol>
                                        <h4 className="text-xs font-semibold text-white/40 uppercase mt-4 mb-2">Sinal de progresso</h4>
                                        <p className="text-sm text-white/60 leading-relaxed">{dev.progressSign}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })()}

                    {/* ── Priority Devolutiva (always visible) ── */}
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3 block">Sua Maior Prioridade</span>
                    <div className="rounded-2xl border border-[#FF1493]/20 bg-[#FF1493]/5 p-6 mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span style={{ color: priorityCat1.color }}>{ICON_MAP[priorityCat1.icon]}</span>
                            <h3 className="text-lg font-bold text-white">{priorityCat1.name}</h3>
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF1493]/15 text-[#FF1493] font-semibold">
                                Prioridade 1
                            </span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed mb-3">{devolutiva1.whatItMeans}</p>
                        <p className="text-xs text-white/30 italic">{devolutiva1.whyItAppeared}</p>
                    </div>

                    {/* ── Suggested Trilhas ── */}
                    {suggestedTrilhas && (
                        <>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3 block">Trilhas Sugeridas</span>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {suggestedTrilhas.map((trilha, i) => (
                                    <div key={trilha.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            {i === 0 ? <Zap size={18} className="text-[#FF6B35]" /> : <BookOpen size={18} className="text-[#8B5CF6]" />}
                                            <h3 className="text-base font-semibold text-white">{trilha.title}</h3>
                                        </div>
                                        <p className="text-sm text-white/40 leading-relaxed mb-4">{trilha.description}</p>
                                        <div className="flex flex-col gap-2 mb-4">
                                            {trilha.palestraIds.map(pid => {
                                                const p = getPalestraById(pid)
                                                if (!p) return null
                                                return (
                                                    <div key={pid} className="flex items-center gap-3 text-xs text-white/30">
                                                        <Play size={10} /> <span>{p.title}</span> <span className="text-white/15 ml-auto">{p.duration}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <button
                                            onClick={() => handleChooseTrilha(i as 0 | 1)}
                                            className="w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99]"
                                            style={{
                                                background: i === 0
                                                    ? "linear-gradient(135deg, #FF6B35, #FF1493)"
                                                    : "linear-gradient(135deg, #8B5CF6, #173DED)",
                                                boxShadow: i === 0
                                                    ? "0 0 15px rgba(255, 107, 53, 0.2)"
                                                    : "0 0 15px rgba(139, 92, 246, 0.2)",
                                            }}
                                        >
                                            {i === 0 ? "Começar Impacto Rápido" : "Começar Aprofundamento"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </AppLayout>
        )
    }

    /* ─── QUESTIONNAIRE ─── */
    return (
        <AppLayout>
            <div className="flex flex-col h-full px-8 py-6">
                {/* Header with progress */}
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h1 className="text-xl font-bold text-white">Diagnóstico</h1>
                        <p className="text-xs text-white/30">Avaliando: {groups[currentGroup].category.name}</p>
                    </div>
                    <span className="text-sm text-white/40">{answeredCount}/{totalQuestions} respondidas</span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-6">
                    <div
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{
                            width: `${(answeredCount / totalQuestions) * 100}%`,
                            background: "linear-gradient(90deg, #FF1493, #FF6B35)",
                        }}
                    />
                </div>

                {/* Category indicator */}
                <div className="flex gap-2 mb-6">
                    {groups.map((g, i) => (
                        <button
                            key={g.category.id}
                            onClick={() => setCurrentGroup(i)}
                            className={cn(
                                "flex-1 h-1 rounded-full transition-all duration-200",
                                i === currentGroup ? "opacity-100" : i < currentGroup ? "opacity-60" : "opacity-20"
                            )}
                            style={{ backgroundColor: g.category.color }}
                        />
                    ))}
                </div>

                {/* Questions */}
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
                    {currentQuestions.map((q) => (
                        <div key={q.id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                            <div className="flex items-start gap-3 mb-4">
                                <span className="text-[10px] font-bold text-white/20 mt-1">{q.order}.</span>
                                <p className="text-sm text-white/80 leading-relaxed">{q.text}</p>
                            </div>
                            <div className="flex gap-2">
                                {([1, 2, 3, 4] as ScaleValue[]).map(val => (
                                    <button
                                        key={val}
                                        onClick={() => handleAnswer(q.id, val)}
                                        className={cn(
                                            "flex-1 rounded-xl py-3 text-xs font-medium transition-all duration-200 border",
                                            answers[q.id] === val
                                                ? "border-[#FF1493]/40 bg-[#FF1493]/15 text-white"
                                                : "border-white/5 bg-white/[0.02] text-white/30 hover:bg-white/[0.05] hover:text-white/50"
                                        )}
                                    >
                                        <span className="block text-base font-bold mb-0.5">{val}</span>
                                        {val === 1 && "Nunca"}
                                        {val === 2 && "Às vezes"}
                                        {val === 3 && "Frequente"}
                                        {val === 4 && "Sempre"}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                    <button
                        onClick={() => setCurrentGroup(prev => Math.max(0, prev - 1))}
                        disabled={currentGroup === 0}
                        className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 disabled:opacity-20 transition-colors"
                    >
                        <ArrowLeft size={14} /> Anterior
                    </button>

                    <div className="flex items-center gap-1 text-xs text-white/20">
                        {currentGroup + 1} / {groups.length}
                    </div>

                    {currentGroup < groups.length - 1 ? (
                        <button
                            onClick={() => setCurrentGroup(prev => Math.min(groups.length - 1, prev + 1))}
                            disabled={!allCurrentAnswered}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-all",
                                allCurrentAnswered
                                    ? "text-[#FF1493] hover:text-[#FF1493]/80"
                                    : "text-white/15"
                            )}
                        >
                            Próxima <ArrowRight size={14} />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={answeredCount < totalQuestions}
                            className={cn(
                                "flex items-center gap-2 rounded-full py-2 px-6 text-sm font-semibold text-white transition-all",
                                answeredCount >= totalQuestions
                                    ? "hover:scale-[1.02] active:scale-[0.98]"
                                    : "opacity-30"
                            )}
                            style={{
                                background: answeredCount >= totalQuestions
                                    ? "linear-gradient(135deg, #FF1493, #FF6B35)"
                                    : "rgba(255,255,255,0.05)",
                            }}
                        >
                            <CheckCircle size={14} /> Finalizar
                        </button>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="rounded-xl border border-white/5 bg-[#000051]/60 backdrop-blur-sm p-6">
            <span className="text-xs font-bold text-[#FF1493] tracking-widest uppercase">Passo {number}</span>
            <h3 className="text-white font-semibold mt-2 mb-2">{title}</h3>
            <p className="text-white/30 text-sm leading-relaxed">{description}</p>
        </div>
    )
}
