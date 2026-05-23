import { Award, CheckCircle2, Clock, Play } from "lucide-react"
import type { PalestraRichContent } from "@/data/palestra-rich-content"

/* Layout rico da página de palestra (hero + seções editoriais). */
export function PalestraRichDetail({ data, onPlay }: { data: PalestraRichContent; onPlay?: () => void }) {
    const p = data

    return (
        <div style={{ color: "var(--text-primary)" }}>
            {/* ── Hero: foto + identificação ── */}
            <section className="grid gap-7 sm:grid-cols-[260px_1fr]">
                <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: "var(--surface-border)" }}>
                    <img src={p.speakerPhoto} alt={p.speaker} className="h-[320px] w-full object-cover object-top" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#FF1493]">{p.speaker}</p>
                    <h1 className="mt-2 text-3xl font-extrabold uppercase leading-tight md:text-4xl">{p.title}</h1>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                            {p.edition}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--surface-border)", color: "var(--text-secondary)" }}>
                            <Clock size={13} /> {p.duration}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={onPlay}
                        className="mt-6 flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: "linear-gradient(135deg, #FF1493, #8B5CF6)" }}
                    >
                        <Play size={15} fill="currentColor" />
                        Assistir palestra
                    </button>
                </div>
            </section>

            {/* ── Conteúdo ── */}
            <div className="mt-10 space-y-9">
                <Section title="Bio do Palestrante">
                    <p>{p.bio}</p>
                </Section>

                <Section title="Tema Central da Palestra">
                    <p>{p.temaCentral}</p>
                </Section>

                <Section title="Resumo / Sinopse da Palestra">
                    {p.sinopse.map((par, i) => (
                        <p key={i}>{par}</p>
                    ))}
                </Section>

                <Section title="Quais soft skills serão desenvolvidas?">
                    <ul className="grid gap-2 sm:grid-cols-2">
                        {p.softSkills.map(skill => (
                            <li key={skill} className="flex items-start gap-2.5">
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FF1493]" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Palavras-chave">
                    <div className="flex flex-wrap gap-2">
                        {p.palavrasChave.map(palavra => (
                            <span
                                key={palavra}
                                className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium"
                                style={{ color: "var(--text-secondary)", border: "1px solid var(--surface-border)" }}
                            >
                                {palavra}
                            </span>
                        ))}
                    </div>
                </Section>

                <Section title="Principais Takeaways">
                    <ul className="space-y-2.5">
                        {p.takeaways.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF1493]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Em quais categorias esta palestra se encaixa?">
                    <div className="space-y-4">
                        {p.categorias.map(cat => (
                            <div
                                key={cat.titulo}
                                className="rounded-2xl border p-5"
                                style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-card)" }}
                            >
                                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: cat.cor }}>
                                    {cat.titulo}
                                </h3>
                                <div className="space-y-4">
                                    {cat.criterios.map(c => (
                                        <div key={c.label}>
                                            <div className="mb-1.5 flex items-center justify-between gap-3">
                                                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                                                    {c.label}
                                                </span>
                                                <span className="text-sm font-bold" style={{ color: cat.cor }}>
                                                    {c.percent}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "var(--surface-border)" }}>
                                                <div className="h-full rounded-full" style={{ width: `${c.percent}%`, backgroundColor: cat.cor }} />
                                            </div>
                                            <p className="mt-2 text-xs leading-6" style={{ color: "var(--text-secondary)" }}>
                                                {c.descricao}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Avaliação Técnica para o Catálogo CAPACITE" icon={<Award size={15} />}>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {p.avaliacaoTecnica.map(item => (
                            <div
                                key={item.label}
                                className="rounded-xl border p-4"
                                style={{ borderColor: "var(--surface-border)", backgroundColor: "var(--surface-card)" }}
                            >
                                <dt className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                                    {item.label}
                                </dt>
                                <dd className="mt-1.5 text-sm leading-6" style={{ color: "var(--text-primary)" }}>
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>

            <div className="h-10" />
        </div>
    )
}

function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em]" style={{ color: "var(--text-primary)" }}>
                <span className="inline-block h-4 w-1 rounded-full bg-[#FF1493]" />
                {icon && <span className="text-[#FF1493]">{icon}</span>}
                {title}
            </h2>
            <div className="space-y-3 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {children}
            </div>
        </section>
    )
}
