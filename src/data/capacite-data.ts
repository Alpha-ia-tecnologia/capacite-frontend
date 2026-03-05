import type { CategoryDefinition, DiagnosticoQuestion, Palestra } from "@/types"

/* ═══ 7 Official Categories ═══ */
export const CATEGORIES: CategoryDefinition[] = [
    {
        id: "lideranca-pessoal",
        name: "Liderança Pessoal",
        shortName: "Liderança",
        description: "Consistência, coerência e clareza do líder sob pressão.",
        icon: "Crown",
        color: "#FF1493",
    },
    {
        id: "pessoas-cultura-confianca",
        name: "Pessoas, Cultura e Confiança",
        shortName: "Pessoas & Cultura",
        description: "Segurança psicológica, confiança e respeito.",
        icon: "Users",
        color: "#8B5CF6",
    },
    {
        id: "comunicacao-influencia",
        name: "Comunicação e Influência",
        shortName: "Comunicação",
        description: "Clareza, conversas difíceis e decisões em grupo.",
        icon: "MessageSquare",
        color: "#FF6B35",
    },
    {
        id: "estrategia-decisoes-execucao",
        name: "Estratégia, Decisões e Execução",
        shortName: "Estratégia",
        description: "Foco, papéis claros e acompanhamento.",
        icon: "Target",
        color: "#173DED",
    },
    {
        id: "mudanca-inovacao-reinvencao",
        name: "Mudança, Inovação e Reinvenção",
        shortName: "Inovação",
        description: "Organização em mudanças, aprendizado com erros.",
        icon: "Lightbulb",
        color: "#22c55e",
    },
    {
        id: "resiliencia-saude-bemestar",
        name: "Resiliência, Saúde Emocional e Bem-estar",
        shortName: "Resiliência",
        description: "Ritmo sustentável, limites e apoio mútuo.",
        icon: "Heart",
        color: "#eab308",
    },
    {
        id: "proposito-visao-legado",
        name: "Propósito, Visão, Legado e Impacto",
        shortName: "Propósito",
        description: "Clareza de propósito, visão compartilhada, valores praticados.",
        icon: "Compass",
        color: "#06b6d4",
    },
]

/* ═══ 21 Diagnostic Questions ═══ */
export const DIAGNOSTICO_QUESTIONS: DiagnosticoQuestion[] = [
    // Categoria 1: Liderança Pessoal
    { id: "q1", categoryId: "lideranca-pessoal", text: "Há direção estável: prioridades não mudam toda semana.", order: 1 },
    { id: "q2", categoryId: "lideranca-pessoal", text: "A liderança é coerente (fala e prática combinam).", order: 2 },
    { id: "q3", categoryId: "lideranca-pessoal", text: "Sob pressão, a liderança mantém clareza e equilíbrio (não gera caos).", order: 3 },

    // Categoria 2: Pessoas, Cultura e Confiança
    { id: "q4", categoryId: "pessoas-cultura-confianca", text: "Há confiança: baixa política interna e baixa defensividade.", order: 4 },
    { id: "q5", categoryId: "pessoas-cultura-confianca", text: "Existe segurança para discordar e trazer problemas sem medo.", order: 5 },
    { id: "q6", categoryId: "pessoas-cultura-confianca", text: "A equipe trata as pessoas com respeito mesmo em tensões.", order: 6 },

    // Categoria 3: Comunicação e Influência
    { id: "q7", categoryId: "comunicacao-influencia", text: "Informações importantes chegam com clareza e no tempo certo.", order: 7 },
    { id: "q8", categoryId: "comunicacao-influencia", text: "Conversas difíceis acontecem com respeito (sem silêncio e sem fofoca).", order: 8 },
    { id: "q9", categoryId: "comunicacao-influencia", text: "Reuniões viram decisões e combinados claros.", order: 9 },

    // Categoria 4: Estratégia, Decisões e Execução
    { id: "q10", categoryId: "estrategia-decisoes-execucao", text: "Existe foco claro (o que é prioridade agora).", order: 10 },
    { id: "q11", categoryId: "estrategia-decisoes-execucao", text: "Papéis e responsabilidades são claros.", order: 11 },
    { id: "q12", categoryId: "estrategia-decisoes-execucao", text: "O que se decide vira ação com acompanhamento e cadência.", order: 12 },

    // Categoria 5: Mudança, Inovação e Reinvenção
    { id: "q13", categoryId: "mudanca-inovacao-reinvencao", text: "Mudanças são conduzidas com organização (não viram bagunça prolongada).", order: 13 },
    { id: "q14", categoryId: "mudanca-inovacao-reinvencao", text: "A equipe aprende com erros e ajusta rápido (sem caça às bruxas).", order: 14 },
    { id: "q15", categoryId: "mudanca-inovacao-reinvencao", text: "Há espaço para testar melhorias com critério (inovar com propósito).", order: 15 },

    // Categoria 6: Resiliência, Saúde Emocional e Bem-estar
    { id: "q16", categoryId: "resiliencia-saude-bemestar", text: "O ritmo é sustentável (há margem para respirar e recuperar).", order: 16 },
    { id: "q17", categoryId: "resiliencia-saude-bemestar", text: "Limites são respeitados (urgência não é regra).", order: 17 },
    { id: "q18", categoryId: "resiliencia-saude-bemestar", text: "Em semanas difíceis, a equipe se apoia (não vira \"cada um por si\").", order: 18 },

    // Categoria 7: Propósito, Visão, Legado e Impacto
    { id: "q19", categoryId: "proposito-visao-legado", text: "O time sabe por que o trabalho importa (propósito é claro).", order: 19 },
    { id: "q20", categoryId: "proposito-visao-legado", text: "Existe visão compartilhada que orienta escolhas.", order: 20 },
    { id: "q21", categoryId: "proposito-visao-legado", text: "Valores são praticados especialmente sob pressão.", order: 21 },
]

/* ═══ Mock Palestras Catalog ═══ */
export const PALESTRAS_CATALOG: Palestra[] = [
    // Liderança Pessoal
    { id: "p1", title: "O Líder que se Conhece", speaker: "Craig Groeschel", speakerAvatar: "https://randomuser.me/api/portraits/men/32.jpg", duration: "28 min", description: "Como a autoconsciência transforma a liderança e gera confiança no time.", categoryIds: ["lideranca-pessoal"], year: 2023, glsnowUrl: "#" },
    { id: "p2", title: "Liderança Sob Pressão", speaker: "Patrick Lencioni", speakerAvatar: "https://randomuser.me/api/portraits/men/45.jpg", duration: "32 min", description: "Manter clareza e equilíbrio quando tudo parece desmoronar.", categoryIds: ["lideranca-pessoal"], year: 2023, glsnowUrl: "#" },
    { id: "p3", title: "Prioridades que Não Mudam", speaker: "Henry Cloud", speakerAvatar: "https://randomuser.me/api/portraits/men/55.jpg", duration: "25 min", description: "Construindo consistência e direção estável na liderança.", categoryIds: ["lideranca-pessoal"], year: 2022, glsnowUrl: "#" },

    // Pessoas, Cultura e Confiança
    { id: "p4", title: "Confiança é Construída", speaker: "Brené Brown", speakerAvatar: "https://randomuser.me/api/portraits/women/44.jpg", duration: "35 min", description: "Os pilares da confiança e como eliminá-la destrói equipes.", categoryIds: ["pessoas-cultura-confianca"], year: 2023, glsnowUrl: "#" },
    { id: "p5", title: "Segurança Psicológica", speaker: "Amy Edmondson", speakerAvatar: "https://randomuser.me/api/portraits/women/28.jpg", duration: "30 min", description: "Criar um ambiente onde é seguro discordar e aprender com erros.", categoryIds: ["pessoas-cultura-confianca"], year: 2022, glsnowUrl: "#" },
    { id: "p6", title: "Cultura como Vantagem", speaker: "Horst Schulze", speakerAvatar: "https://randomuser.me/api/portraits/men/62.jpg", duration: "27 min", description: "Respeito e excelência como base de uma cultura forte.", categoryIds: ["pessoas-cultura-confianca"], year: 2023, glsnowUrl: "#" },

    // Comunicação e Influência
    { id: "p7", title: "A Arte de Comunicar", speaker: "Andy Stanley", speakerAvatar: "https://randomuser.me/api/portraits/men/22.jpg", duration: "30 min", description: "Comunicação clara que inspira ação e alinhamento.", categoryIds: ["comunicacao-influencia"], year: 2023, glsnowUrl: "#" },
    { id: "p8", title: "Conversas Difíceis", speaker: "Sheila Heen", speakerAvatar: "https://randomuser.me/api/portraits/women/32.jpg", duration: "33 min", description: "Como abordar conflitos com respeito e chegar a resoluções.", categoryIds: ["comunicacao-influencia"], year: 2022, glsnowUrl: "#" },
    { id: "p9", title: "Reuniões que Decidem", speaker: "Patrick Lencioni", speakerAvatar: "https://randomuser.me/api/portraits/men/45.jpg", duration: "28 min", description: "Transformar reuniões em momentos de decisão e ação.", categoryIds: ["comunicacao-influencia"], year: 2023, glsnowUrl: "#" },

    // Estratégia, Decisões e Execução
    { id: "p10", title: "Foco Estratégico", speaker: "Jim Collins", speakerAvatar: "https://randomuser.me/api/portraits/men/35.jpg", duration: "35 min", description: "A disciplina de dizer não para manter o foco no que importa.", categoryIds: ["estrategia-decisoes-execucao"], year: 2023, glsnowUrl: "#" },
    { id: "p11", title: "Execução com Cadência", speaker: "Chris McChesney", speakerAvatar: "https://randomuser.me/api/portraits/men/48.jpg", duration: "30 min", description: "As 4 disciplinas da execução: foco, alavancas, placar e cadência.", categoryIds: ["estrategia-decisoes-execucao"], year: 2022, glsnowUrl: "#" },
    { id: "p12", title: "Papéis Claros, Times Fortes", speaker: "Marcus Buckingham", speakerAvatar: "https://randomuser.me/api/portraits/men/52.jpg", duration: "27 min", description: "Clareza de papéis e responsabilidades como base de alta performance.", categoryIds: ["estrategia-decisoes-execucao"], year: 2023, glsnowUrl: "#" },

    // Mudança, Inovação e Reinvenção
    { id: "p13", title: "Lidere a Mudança", speaker: "John Maxwell", speakerAvatar: "https://randomuser.me/api/portraits/men/58.jpg", duration: "32 min", description: "Como conduzir transições sem perder o time no caminho.", categoryIds: ["mudanca-inovacao-reinvencao"], year: 2023, glsnowUrl: "#" },
    { id: "p14", title: "Inovar com Propósito", speaker: "Beth Comstock", speakerAvatar: "https://randomuser.me/api/portraits/women/38.jpg", duration: "28 min", description: "Criatividade e experimentação com critério dentro de organizações.", categoryIds: ["mudanca-inovacao-reinvencao"], year: 2022, glsnowUrl: "#" },
    { id: "p15", title: "Aprendendo com Erros", speaker: "Tim Elmore", speakerAvatar: "https://randomuser.me/api/portraits/men/42.jpg", duration: "25 min", description: "Eliminar a caça às bruxas e criar cultura de aprendizado rápido.", categoryIds: ["mudanca-inovacao-reinvencao"], year: 2023, glsnowUrl: "#" },

    // Resiliência, Saúde Emocional e Bem-estar
    { id: "p16", title: "Ritmo Sustentável", speaker: "Craig Groeschel", speakerAvatar: "https://randomuser.me/api/portraits/men/32.jpg", duration: "30 min", description: "Liderar em um ritmo que permite respirar e recuperar.", categoryIds: ["resiliencia-saude-bemestar"], year: 2023, glsnowUrl: "#" },
    { id: "p17", title: "Limites Saudáveis", speaker: "Henry Cloud", speakerAvatar: "https://randomuser.me/api/portraits/men/55.jpg", duration: "28 min", description: "Urgência como regra destrói equipes: como estabelecer limites.", categoryIds: ["resiliencia-saude-bemestar"], year: 2022, glsnowUrl: "#" },
    { id: "p18", title: "Equipes que se Apoiam", speaker: "Liz Wiseman", speakerAvatar: "https://randomuser.me/api/portraits/women/45.jpg", duration: "26 min", description: "Em semanas difíceis, apoio mútuo faz toda a diferença.", categoryIds: ["resiliencia-saude-bemestar"], year: 2023, glsnowUrl: "#" },

    // Propósito, Visão, Legado e Impacto
    { id: "p19", title: "Propósito que Move", speaker: "Simon Sinek", speakerAvatar: "https://randomuser.me/api/portraits/men/28.jpg", duration: "33 min", description: "Quando o time sabe por que o trabalho importa, tudo muda.", categoryIds: ["proposito-visao-legado"], year: 2023, glsnowUrl: "#" },
    { id: "p20", title: "Visão Compartilhada", speaker: "Bill Hybels", speakerAvatar: "https://randomuser.me/api/portraits/men/65.jpg", duration: "30 min", description: "Criar uma visão que orienta escolhas e une pessoas.", categoryIds: ["proposito-visao-legado"], year: 2022, glsnowUrl: "#" },
    { id: "p21", title: "Valores Sob Pressão", speaker: "Albert Tate", speakerAvatar: "https://randomuser.me/api/portraits/men/25.jpg", duration: "27 min", description: "Os valores só são reais quando testados nos momentos difíceis.", categoryIds: ["proposito-visao-legado"], year: 2023, glsnowUrl: "#" },
]

export function getCategoryById(id: string): CategoryDefinition | undefined {
    return CATEGORIES.find(c => c.id === id)
}

export function getPalestrasByCategory(categoryId: string): Palestra[] {
    return PALESTRAS_CATALOG.filter(p => p.categoryIds.includes(categoryId))
}

export function getPalestraById(id: string): Palestra | undefined {
    return PALESTRAS_CATALOG.find(p => p.id === id)
}
