/* ────────────────────────────────────────────────────────────
 * Conteúdo editorial rico das palestras (tema central, soft skills,
 * takeaways, % por categoria, avaliação técnica).
 *
 * Estes campos ainda NÃO existem no banco. Enquanto validamos o
 * layout, o conteúdo de exemplo vive aqui, chaveado por externalId
 * (o mesmo id que a busca usa para navegar: /palestras/<externalId>).
 *
 * Próximo passo (após aprovar o layout): mover estes campos para o
 * schema Palestra e ler via API, mantendo este mesmo formato.
 * ──────────────────────────────────────────────────────────── */

export interface CategoriaFit {
    titulo: string
    cor: string
    criterios: { label: string; percent: number; descricao: string }[]
}

export interface PalestraRichContent {
    speaker: string
    speakerPhoto: string
    title: string
    edition: string
    duration: string
    bio: string
    temaCentral: string
    sinopse: string[]
    softSkills: string[]
    palavrasChave: string[]
    takeaways: string[]
    categorias: CategoriaFit[]
    avaliacaoTecnica: { label: string; value: string }[]
}

export const RICH_CONTENT: Record<string, PalestraRichContent> = {
    // Angela Duckworth — "O poder da paixão e da perseverança" (GLS 2017)
    gls17_1: {
        speaker: "Angela Duckworth",
        speakerPhoto: "/speakers/angela-duckworth.png",
        title: "O Poder da Paixão e da Perseverança",
        edition: "GLS 2017–2018",
        duration: "35:54",
        bio: "Angela Duckworth é professora de psicologia na Universidade da Pensilvânia e fundadora do Character Lab, uma organização sem fins lucrativos cuja missão é promover a prática do desenvolvimento do caráter. Conselheira da Casa Branca, do Banco Mundial e de CEOs de empresas da lista Fortune 500, Duckworth estuda a coragem e o autocontrole, dois atributos essenciais para o sucesso e o bem-estar. Seu primeiro livro, Garra: o poder da paixão e da perseverança, lançado em 2016, tornou-se best-seller do New York Times.",
        temaCentral:
            "A força da garra (grit) — a combinação entre paixão duradoura e perseverança disciplinada — como o principal fator para alcançar resultados extraordinários.",
        sinopse: [
            "Angela Duckworth apresenta sua pesquisa sobre desempenho humano e busca responder a uma pergunta essencial: por que algumas pessoas alcançam resultados extraordinários enquanto outras, igualmente talentosas, não?",
            "A partir de estudos com militares, estudantes, atletas e profissionais, ela demonstra que talento e inteligência não são os fatores determinantes para o sucesso. O diferencial verdadeiro está na garra, definida como a capacidade de manter paixão e esforço constante por objetivos de longo prazo.",
            "Duckworth argumenta que líderes, educadores e organizações que desenvolvem essa mentalidade criam ambientes mais resilientes, capazes de sustentar aprendizado, crescimento e excelência ao longo do tempo. Em vez de supervalorizar talento imediato, ela defende uma cultura que priorize prática deliberada, propósito e persistência.",
        ],
        softSkills: [
            "Resiliência",
            "Perseverança",
            "Autodisciplina",
            "Mentalidade de crescimento",
            "Persistência diante de fracassos",
            "Compromisso com objetivos de longo prazo",
            "Autogestão emocional",
        ],
        palavrasChave: [
            "garra",
            "perseverança",
            "paixão de longo prazo",
            "resiliência",
            "disciplina",
            "mentalidade de crescimento",
            "persistência",
            "excelência",
            "prática deliberada",
        ],
        takeaways: [
            "Talento por si só não explica desempenho extraordinário.",
            "Garra = paixão de longo prazo + perseverança consistente.",
            "Pessoas com garra permanecem comprometidas com objetivos por anos, não apenas por entusiasmo momentâneo.",
            "O esforço consistente potencializa o talento e muitas vezes o supera.",
            "A prática deliberada é essencial para desenvolver excelência.",
            "Líderes devem criar ambientes onde falhas sejam parte do processo de aprendizagem.",
            "Propósito e esperança ajudam a sustentar a perseverança ao longo do tempo.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.2 Disciplina, hábitos e consistência",
                        percent: 85,
                        descricao:
                            "A palestra enfatiza prática deliberada, repetição, persistência e constância como elementos fundamentais para excelência.",
                    },
                    {
                        label: "1.3 Coragem e enfrentamento do medo",
                        percent: 70,
                        descricao:
                            "A construção da “garra” exige avançar apesar de fracassos, rejeições e dificuldades.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa científica" },
            { label: "Estilo", value: "Storytelling + evidências científicas" },
            { label: "Aplicabilidade", value: "Alta para desenvolvimento de liderança, educação e cultura organizacional" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },
}

export function getRichContent(id?: string | null): PalestraRichContent | undefined {
    if (!id) return undefined
    return RICH_CONTENT[id]
}
