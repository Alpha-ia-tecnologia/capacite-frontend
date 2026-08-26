import { useEffect, useState } from "react"
import { ArrowLeft, Clock, Database, Play, Tag, UserRound } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"
import { palestras } from "@/lib/api"
import { PalestraRichDetail } from "@/components/palestras/PalestraRichDetail"
import { PalestraPlayerModal } from "@/components/palestras/PalestraPlayerModal"
import { getRichContent } from "@/data/palestra-rich-content"

type PalestraDetail = Awaited<ReturnType<typeof palestras.getById>>

function asStringList(value: unknown): string[] {
    return Array.isArray(value) ? value.map(item => String(item)).filter(Boolean) : []
}

export function PalestraDetalheScreen() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [palestra, setPalestra] = useState<PalestraDetail | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (!id) return

        setIsLoading(true)
        setError(null)
        palestras.getById(id)
            .then(setPalestra)
            .catch(err => {
                setError(err instanceof Error ? err.message : "Erro ao carregar palestra do banco")
                setPalestra(null)
            })
            .finally(() => setIsLoading(false))
    }, [id])

    const topics = asStringList(palestra?.keyTopics)
    const quotes = asStringList(palestra?.keyQuotes)
    const expertise = asStringList(palestra?.speakerProfile?.expertise)

    // Vídeo disponível para embed (carrega no player interno ao clicar em Assistir).
    const canPlay = Boolean(palestra?.glsnowUrl && palestra.glsnowUrl !== "#")

    // Conteúdo editorial rico (tema central, soft skills, takeaways, etc.).
    // Quando existe para esta palestra, renderiza o layout completo.
    const richContent = getRichContent(id) ?? getRichContent(palestra?.id)

    if (richContent) {
        return (
            <AppLayout>
                <div className="mx-auto min-h-full max-w-5xl px-8 py-6">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/5"
                        style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}
                    >
                        <ArrowLeft size={14} />
                        Voltar
                    </button>
                    <PalestraRichDetail
                        data={richContent}
                        onPlay={canPlay ? () => setIsPlaying(true) : undefined}
                    />
                </div>
                {isPlaying && palestra && (
                    <PalestraPlayerModal palestra={palestra} onClose={() => setIsPlaying(false)} />
                )}
            </AppLayout>
        )
    }

    return (
        <AppLayout>
            <div className="min-h-full px-8 py-6" style={{ color: "var(--text-primary)" }}>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/5"
                    style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}
                >
                    <ArrowLeft size={14} />
                    Voltar
                </button>

                {isLoading && (
                    <div className="rounded-2xl border p-8 text-sm" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                        Carregando palestra do banco de dados...
                    </div>
                )}

                {!isLoading && error && (
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-sm text-red-300">
                        {error}
                    </div>
                )}

                {!isLoading && palestra && (
                    <>
                        <section className="grid gap-8 lg:grid-cols-[360px_1fr]">
                            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--surface-border)" }}>
                                {palestra.speakerProfile?.photoUrl ? (
                                    <img
                                        src={palestra.speakerProfile.photoUrl}
                                        alt={palestra.speaker}
                                        className="h-[460px] w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-[460px] w-full items-center justify-center bg-white/[0.03]">
                                        <UserRound size={72} style={{ color: "var(--text-subtle)" }} />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="mb-5 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full bg-[#FF1493]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF1493]">
                                        GLS {palestra.year}
                                    </span>
                                    <span className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                                        <Clock size={13} /> {palestra.duration}
                                    </span>
                                    <span className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                                        <Database size={13} /> Banco de dados
                                    </span>
                                </div>

                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                                    {palestra.speaker}
                                </p>
                                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
                                    {palestra.title}
                                </h1>

                                <p className="mt-5 max-w-3xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                    {palestra.description}
                                </p>

                                {canPlay && (
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(true)}
                                        className="mt-6 flex w-fit items-center gap-2 rounded-xl bg-[#FF1493] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#FF1493]/90"
                                    >
                                        <Play size={16} /> Assistir
                                    </button>
                                )}
                            </div>
                        </section>

                        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_360px]">
                            <main className="space-y-8">
                                {palestra.speakerProfile?.bio && (
                                    <DetailSection title="Bio do Palestrante">
                                        <p>{palestra.speakerProfile.bio}</p>
                                    </DetailSection>
                                )}

                                {palestra.summary && (
                                    <DetailSection title="Resumo / Sinopse da Palestra">
                                        <p>{palestra.summary}</p>
                                    </DetailSection>
                                )}

                                {quotes.length > 0 && (
                                    <DetailSection title="Trechos / Citações do Banco">
                                        <ul className="space-y-3">
                                            {quotes.map(quote => (
                                                <li key={quote} className="rounded-xl border p-4" style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
                                                    {quote}
                                                </li>
                                            ))}
                                        </ul>
                                    </DetailSection>
                                )}
                            </main>

                            <aside className="space-y-6">
                                {topics.length > 0 && (
                                    <Panel title="Temas / Soft Skills" icon={<Tag size={16} />}>
                                        <TagList items={topics} />
                                    </Panel>
                                )}

                                {expertise.length > 0 && (
                                    <Panel title="Expertise do Palestrante" icon={<UserRound size={16} />}>
                                        <TagList items={expertise} />
                                    </Panel>
                                )}

                                <Panel title="Dados da Palestra" icon={<Database size={16} />}>
                                    <dl className="space-y-3 text-sm">
                                        <TechRow label="ID" value={palestra.id} />
                                        <TechRow label="DB ID" value={palestra.dbId} />
                                        <TechRow label="Categorias" value={asStringList(palestra.categoryIds).join(", ") || "Nao informado"} />
                                        <TechRow label="Processada por IA" value={palestra.isProcessed ? "Sim" : "Nao"} />
                                    </dl>
                                </Panel>
                            </aside>
                        </div>
                    </>
                )}
            </div>
            {isPlaying && palestra && (
                <PalestraPlayerModal palestra={palestra} onClose={() => setIsPlaying(false)} />
            )}
        </AppLayout>
    )
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="border-t pt-6" style={{ borderColor: "var(--surface-border)" }}>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                {title}
            </h2>
            <div className="space-y-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {children}
            </div>
        </section>
    )
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <section className="rounded-2xl border p-5" style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-card)" }}>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                <span className="text-[#FF1493]">{icon}</span>
                {title}
            </h2>
            {children}
        </section>
    )
}

function TagList({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map(item => (
                <span key={item} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                    {item}
                </span>
            ))}
        </div>
    )
}

function TechRow({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{label}</dt>
            <dd className="mt-1 break-words leading-6" style={{ color: "var(--text-secondary)" }}>{value}</dd>
        </div>
    )
}
