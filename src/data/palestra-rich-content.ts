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

    // Bryan Stevenson — "Liderança agora, responsabilidade social sempre!" (GLS 2017)
    gls17_2: {
        speaker: "Bryan Stevenson",
        speakerPhoto: "/speakers/bryan-stevenson.png",
        title: "Liderança Agora, Responsabilidade Social Sempre!",
        edition: "GLS 2017–2018",
        duration: "30 min",
        bio: "Bryan Stevenson, advogado e ativista altamente aclamado, tem dedicado sua carreira a ajudar os pobres, encarcerados e condenados por meio de sua liderança na Equal Justice Initiative. Stevenson participou com sucesso em vários casos na Suprema Corte dos EUA, e sua palestra TED tem mais de três milhões de visualizações. Autor do best-seller Just Mercy, integra a lista da Fortune de Maiores Líderes do Mundo de 2016.",
        temaCentral:
            "A liderança capaz de gerar justiça se sustenta em quatro práticas — aproximar-se de quem sofre, mudar as narrativas que perpetuam a desigualdade, manter a esperança e ter coragem de fazer o que é desconfortável.",
        sinopse: [
            "Bryan Stevenson, advogado e fundador da Equal Justice Initiative, parte de sua experiência com condenados à morte, encarcerados e crianças julgadas como adultos para responder a uma pergunta de liderança: como criar justiça em ambientes marcados pela desigualdade?",
            "Ele estrutura a resposta em quatro pilares. Primeiro, proximidade: não se lidera bem à distância — é preciso chegar perto de quem sofre para enxergar as nuances do problema. Segundo, mudar as narrativas que sustentam a injustiça, em especial a “narrativa da diferença racial” e a “política do medo e da raiva”. Terceiro, manter a esperança, pois “a falta de esperança é a inimiga da justiça”. Quarto, ter coragem de fazer coisas desconfortáveis, já que nenhuma transformação relevante nasce na zona de conforto.",
            "Por meio de histórias pessoais — a avó que insistia em “abraçá-lo de longe”, o menino de 14 anos preso como adulto, o cliente com deficiência intelectual executado e o veterano dos direitos civis que chamava suas cicatrizes de “medalhas de honra” — Stevenson defende que a verdadeira liderança nasce do reconhecimento da própria vulnerabilidade e se mede pela forma como tratamos os mais pobres e negligenciados, não os ricos e poderosos.",
        ],
        softSkills: [
            "Coragem moral",
            "Empatia e escuta ativa",
            "Resiliência diante da adversidade",
            "Esperança e persistência",
            "Integridade e coerência",
            "Liderança orientada a propósito",
            "Disposição para sair da zona de conforto",
        ],
        palavrasChave: [
            "proximidade",
            "justiça social",
            "coragem",
            "esperança",
            "narrativas",
            "vulnerabilidade",
            "empatia",
            "propósito",
            "liderança servidora",
            "responsabilidade social",
        ],
        takeaways: [
            "Não se lidera bem à distância: a liderança eficaz se aproxima de quem sofre.",
            "Por trás de cada problema existe uma narrativa que precisa ser compreendida e, muitas vezes, mudada.",
            "O medo e a raiva são ingredientes essenciais da injustiça e corroem comunidades e organizações.",
            "A esperança é condição para liderar — a falta de esperança é a inimiga da justiça.",
            "Transformações relevantes exigem disposição para fazer coisas desconfortáveis.",
            "Cada pessoa é mais do que a pior coisa que já fez.",
            "A liderança verdadeira se mede por como tratamos os mais pobres e negligenciados — não por notas, renda ou poder.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.3 Coragem e enfrentamento do medo",
                        percent: 90,
                        descricao:
                            "A palestra é um chamado explícito a “ser corajoso” e a se posicionar diante do risco, da dor e do desconforto — coragem como pré-requisito da liderança.",
                    },
                    {
                        label: "1.2 Coerência e integridade sob pressão",
                        percent: 75,
                        descricao:
                            "Stevenson lidera pelo exemplo: aproxima-se pessoalmente do sofrimento e age conforme os valores que defende, mesmo quando custa caro.",
                    },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    {
                        label: "7.1 Clareza de propósito",
                        percent: 90,
                        descricao:
                            "Todo o discurso ancora a liderança em um propósito de justiça — “o oposto da pobreza não é a riqueza, é a justiça”.",
                    },
                    {
                        label: "7.3 Legado e impacto social",
                        percent: 85,
                        descricao:
                            "As “medalhas de honra” do veterano dos direitos civis sintetizam a liderança como legado de transformação social que perdura.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional baseada em narrativa e experiência de campo" },
            { label: "Estilo", value: "Storytelling pessoal + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para liderança com propósito, ESG, diversidade e responsabilidade social" },
            { label: "Intensidade conceitual", value: "Média (forte carga emocional e ética)" },
        ],
    },

    // Fredrik Haren — "Liderança criativa em um mundo de grandes transformações" (GLS 2017)
    gls17_3: {
        speaker: "Fredrik Haren",
        speakerPhoto: "/speakers/fredrik-haren.png",
        title: "Liderança Criativa em um Mundo de Grandes Transformações",
        edition: "GLS 2017–2018",
        duration: "26:22",
        bio: "Fredrik Härén é especialista em criatividade empresarial e autor de nove livros, incluindo The Idea Book — escolhido como um dos 100 Melhores Livros de Negócios de Todos os Tempos. Orador mundialmente reconhecido, foi convidado para palestrar a líderes em mais de 60 países em seis continentes sobre a importância da criatividade na resolução de problemas. Nascido na Suécia e radicado em Singapura há mais de doze anos, Härén combina perspectiva global e sensibilidade cultural para fornecer passos práticos que ajudam indivíduos e organizações a se tornarem genuinamente mais criativos.",
        temaCentral:
            "A criatividade — entendida como a capacidade de combinar conhecimentos já existentes de formas novas — é a competência profissional mais crítica da atualidade, e cabe ao líder desenvolvê-la ativamente em seu time, não apenas proclamá-la em missões e discursos.",
        sinopse: [
            "Fredrik Härén abre a palestra com um diagnóstico revelador: embora praticamente todos os líderes afirmem que criatividade é importante no trabalho, menos da metade se considera criativo e quase ninguém acredita que sua organização faz o suficiente para desenvolvê-la. A partir de dados coletados em mais de 2 mil audiências em 60 países, ele mostra que a lacuna entre o reconhecimento da criatividade como prioridade e a prática real de cultivá-la é o problema central da liderança contemporânea.",
            "Para desmontar a ideia de que criatividade é dom misterioso, Härén propõe uma definição operacional: uma ideia é o resultado de alguém tomar conhecimento e informação já existentes e combiná-los de uma forma nova. Com exemplos que vão do urinol integrado ao lavatório ao seu próprio livro-caderno, ele demonstra que o potencial criativo é ilimitado — e que o verdadeiro obstáculo não é falta de talento, mas a resistência à mudança e o apego às formas estabelecidas de fazer as coisas. A parábola do irmão nadando em círculos numa piscina vazia, enquanto um homem protesta que ele está “nadando errado”, ilustra com precisão como normas internalizadas bloqueiam soluções evidentes.",
            "A conclusão central é direta: líderes não tornam suas equipes criativas falando sobre criatividade, incluindo a palavra em declarações de missão ou comprando livros sobre o assunto. A mudança acontece quando o próprio líder pratica a criatividade de forma visível — porque as pessoas se inspiram ao ver alguém que admiram fazendo algo criativo e concluem “se essa pessoa pode, eu também posso”. Härén encerra com um desafio concreto: cada líder deve identificar a coisa mais criativa que já fez e planejar as próximas ações criativas que vai executar.",
        ],
        softSkills: [
            "Pensamento criativo",
            "Abertura à mudança",
            "Liderança pelo exemplo",
            "Percepção de oportunidades",
            "Coragem de questionar o status quo",
            "Inspiração de equipes",
            "Adaptabilidade em contextos de transformação",
        ],
        palavrasChave: [
            "criatividade",
            "inovação",
            "liderança criativa",
            "mudança",
            "combinação de ideias",
            "percepção de ideias",
            "status quo",
            "transformação organizacional",
            "inspiração",
            "criatividade empresarial",
        ],
        takeaways: [
            "Criatividade não é magia: é a capacidade de combinar conhecimentos existentes de formas novas.",
            "A confiança criativa não tem correlação direta com a criatividade real — o que importa é agir, não apenas acreditar ser criativo.",
            "A grande mudança não foi do livro para o e-book, mas do livro para o smartphone — líderes precisam perceber onde o mundo realmente foi, não onde imaginam que foi.",
            "As pessoas resistem à mudança não por maldade, mas porque foram ensinadas que “a forma certa” é a única forma — e ninguém as desafiou a pensar diferente.",
            "Acrescentar inovação à declaração de missão não torna ninguém mais criativo; o que transforma é ver o líder praticando a criatividade.",
            "Quando um líder age criativamente, as pessoas ao redor concluem “se ele pode, eu também posso” — esse é o mecanismo real de disseminação da criatividade.",
            "A tarefa mais importante de um líder criativo é tornar as pessoas que trabalham para ele mais criativas — e isso exige exemplo, não discurso.",
        ],
        categorias: [
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    {
                        label: "5.1 Criatividade e geração de novas ideias",
                        percent: 95,
                        descricao:
                            "A palestra inteira orbita a definição operacional de criatividade como combinação de conhecimentos existentes — com exemplos concretos de como gerar e reconhecer ideias novas.",
                    },
                    {
                        label: "5.2 Adaptação e resposta às transformações do mercado",
                        percent: 82,
                        descricao:
                            "Härén demonstra com dados reais (indústria editorial, fotos em aeroportos) que organizações e líderes falham ao diagnosticar onde o mundo realmente mudou, não onde supõem que mudou.",
                    },
                ],
            },
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.1 Liderança pelo exemplo e modelagem de comportamento",
                        percent: 88,
                        descricao:
                            "O argumento central da palestra é que líderes só tornam equipes criativas quando eles próprios praticam a criatividade de forma visível — “as pessoas são inspiradas a ser criativas ao ver alguém fazendo algo criativo”.",
                    },
                    {
                        label: "1.4 Autoconhecimento e reflexão sobre a própria prática",
                        percent: 72,
                        descricao:
                            "Härén encerra com uma pergunta direta ao líder: “Qual é a coisa mais criativa que já fiz?” e “Quais as coisas mais criativas que poderia fazer?” — um convite explícito à reflexão sobre a própria prática.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Provocativa e prática baseada em dados globais e exemplos do cotidiano" },
            { label: "Estilo", value: "Humor e storytelling intercalados com dados de pesquisa e demonstrações ao vivo" },
            { label: "Aplicabilidade", value: "Alta para líderes que buscam cultivar cultura de inovação e criatividade em equipes" },
            { label: "Intensidade conceitual", value: "Média (conceitos acessíveis, impacto pelo acúmulo de exemplos e pela lógica da inspiração)" },
        ],
    },

    // Gary Haugen — "Não tema, lidere!" (GLS 2017)
    gls17_4: {
        speaker: "Gary Haugen",
        speakerPhoto: "/speakers/gary-haugen.png",
        title: "Não Tema, Lidere!",
        edition: "GLS 2017–2018",
        duration: "39:14",
        bio: "Gary Haugen lidera o International Justice Mission (IJM), uma agência mundial que resgata vítimas de violência, exploração, escravidão e opressão. Ex-procurador dos direitos humanos no Departamento de Justiça dos EUA e ex-diretor das Nações Unidas para a investigação do genocídio em Ruanda, Haugen é reconhecido pelo Departamento de Estado dos EUA como “herói” na luta contra o tráfico de pessoas — a mais alta honraria concedida pelo governo americano pela liderança contra a escravidão. Autor de quatro livros, seu trabalho já foi destaque no Foreign Affairs, The New York Times e Forbes. Sob sua liderança, a IJM auxiliou mais de 40 mil vítimas resgatadas em todo o mundo.",
        temaCentral:
            "O medo é o principal inimigo da liderança e dos sonhos — para liderar com excelência é preciso identificar os próprios medos, adotar uma postura ofensiva diante dos desafios e construir uma comunidade de coragem.",
        sinopse: [
            "Gary Haugen abre a palestra com uma tese provocadora: todas as melhores formações de liderança do mundo podem tornar-se completamente inúteis pelo medo. Partindo do exemplo de Martin Luther King Jr., que abandonou o texto preparado para o discurso “Eu tenho um sonho” ao sentir o chamado do momento, Haugen argumenta que a liderança começa sempre com um sonho nascido do amor — e que o medo é o destruidor silencioso desse amor, convertendo-o em preocupação consigo mesmo.",
            "A palestra se estrutura em três práticas concretas. A primeira é fazer um inventário honesto dos próprios medos: Haugen conta que quase não fundou a IJM porque tinha medo não da violência ou dos riscos financeiros, mas de parecer um fracasso diante dos outros — um medo que só descobriu ao se aquietar e perguntar com honestidade o que o ameaçava de fato. A segunda prática é trocar a estratégia defensiva pela ofensiva: líderes que jogam apenas para não perder nunca avançam; Deus convida seu povo a lutar contra as trevas, avançar sobre o que está corrompido e levar cura e justiça. O sucesso da IJM no Camboja — onde o tráfico sexual infantil entrou em colapso documentado — é apresentado como evidência concreta do que significa “jogar ao ataque”.",
            "A terceira prática é construir uma comunidade de coragem. Haugen narra o assassinato de três membros da IJM no Quênia por um gangue policial e descreve como, diante do luto e do medo, a equipe escolheu apoiar-se mutuamente, retomar os passos e dobrar os esforços — crescendo 20% após o ataque. O encontro no velório com David Makara, ex-cliente resgatado de rua que se tornou advogado, sintetiza a mensagem final: a coragem é tão contagiosa quanto o medo, e líderes que forjam comunidades amorosas ao seu redor descobrem que “o soldado real na batalha por toda a bondade é o próprio Deus”, o que torna possível liderar sem medo.",
        ],
        softSkills: [
            "Coragem e enfrentamento do medo",
            "Autoconhecimento e introspecção",
            "Liderança orientada a propósito",
            "Resiliência diante de ameaças reais",
            "Construção de comunidade e confiança",
            "Visão ofensiva e proatividade",
            "Esperança como combustível da ação",
        ],
        palavrasChave: [
            "medo",
            "sonhos de liderança",
            "coragem",
            "comunidade de coragem",
            "estratégia ofensiva",
            "autoconhecimento",
            "escravidão moderna",
            "justiça",
            "esperança",
            "propósito",
        ],
        takeaways: [
            "O medo é o destruidor silencioso de sonhos — ele converte o amor que inspira a visão em preocupação consigo mesmo.",
            "O medo real raramente é o medo óbvio: é necessário aquietar-se e perguntar honestamente “do que tenho eu realmente medo aqui?”.",
            "Líderes que não examinam seus próprios medos são conduzidos por eles — equipes inteiras e organizações são lideradas pelas inseguranças de seus líderes.",
            "Nenhum grande sonho de amor foi edificado sobre o medo do que pode correr mal; ele nasce da esperança grande do que pode correr bem.",
            "Jogar à defesa é abandonar o sonho: a liderança eficaz avança sobre o que está errado no mundo em vez de recuar para um abrigo de segurança.",
            "Cavaleiros solitários não realizam grandes sonhos — é preciso forjar uma comunidade de coragem sustentada por serviço humilde e amor mútuo.",
            "A coragem é tão contagiosa quanto o medo: quando a equipe escolhe confiar uns nos outros diante da adversidade, o sonho sobrevive e cresce.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.3 Coragem e enfrentamento do medo",
                        percent: 95,
                        descricao:
                            "A palestra inteira é um chamado estruturado a identificar, nomear e superar o medo como pré-requisito absoluto da liderança — ilustrado pela experiência pessoal de Haugen ao fundar a IJM e ao enfrentar o assassinato de membros da equipe.",
                    },
                    {
                        label: "1.1 Autoconhecimento e integridade interior",
                        percent: 82,
                        descricao:
                            "Haugen defende a prática diária do “Silêncio das 8:30 h” como método institucional de autoexame — sem introspecção rotineira, os líderes são guiados por medos inexplorados em vez de sonhos conscientes.",
                    },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Resiliência diante de adversidades extremas",
                        percent: 90,
                        descricao:
                            "O relato do assassinato de três colaboradores no Quênia e a resposta coletiva da equipe — que cresceu 20% em vez de se dispersar — é o exemplo mais direto de resiliência organizacional sustentada por vínculos emocionais profundos.",
                    },
                    {
                        label: "6.2 Comunidade como suporte emocional e antídoto ao medo",
                        percent: 85,
                        descricao:
                            "Haugen argumenta explicitamente que a única proteção duradoura contra o medo é “a força de uma comunidade verdadeiramente amorosa”, ancorando saúde emocional no pertencimento e no serviço mútuo.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com estrutura prática em três pilares" },
            { label: "Estilo", value: "Narrativa de campo + chamado à ação com base espiritual" },
            { label: "Aplicabilidade", value: "Alta para liderança em contextos de alta pressão, ONGs, missão e propósito" },
            { label: "Intensidade conceitual", value: "Média (alto impacto emocional e espiritual)" },
        ],
    },

    // Immaculée Ilibagiza — "O perdão e o desenvolvimento emocional" (GLS 2017)
    gls17_5: {
        speaker: "Immaculée Ilibagiza",
        speakerPhoto: "/speakers/immaculee-ilibagiza.png",
        title: "O Perdão e o Desenvolvimento Emocional",
        edition: "GLS 2017–2018",
        duration: "29:13",
        bio: "Immaculée Ilibagiza é sobrevivente do genocídio de Ruanda, em 1994, que tirou a vida de cerca de um milhão de Tutsis, incluindo quase toda a sua família. Ela sobreviveu permanecendo em silêncio, junto a outras sete mulheres, em um banheiro de aproximadamente 1x1 m por 91 dias. Apesar do sofrimento inimaginável, Immaculée comprometeu-se com uma vida de paz, esperança e perdão. Ilibagiza trabalha com as Nações Unidas, recebeu múltiplos doutorados honorários e prêmios humanitários, incluindo o Prêmio Internacional Mahatma Gandhi para a Reconciliação e a Paz. É autora de sete livros, entre eles o best-seller do New York Times “Sobrevivi para contar”.",
        temaCentral:
            "O perdão não é uma rendição ao mal, mas uma libertação interior que rompe o ciclo de ódio — e só é possível quando abrimos mão da ira e escolhemos, conscientemente, ver o outro como também filho de Deus.",
        sinopse: [
            "A partir da experiência devastadora do genocídio de Ruanda, em que perdeu pais, irmãos e toda a rede familiar em 91 dias de esconderijo num banheiro minúsculo, Immaculée Ilibagiza descreve como a ira — inicialmente compreendida por ela como um ato de heroísmo e lealdade aos seus mortos — foi consumindo seu corpo e sua mente. Ela relata a progressão física da raiva: suor, taquicardia, dor de cabeça, incapacidade de sorrir — e a percepção de que, ao alimentar o ódio, estava se tornando semelhante àqueles que a perseguiam.",
            "O núcleo da palestra é a jornada interior pelo perdão. Immaculée descreve como a oração sistemática — em especial a repetição do Pai Nosso com a frase “perdoa-nos assim como perdoamos” — funcionou como um espelho incômodo que a forçou a confrontar sua própria recusa em perdoar. A virada acontece quando ela medita sobre o momento em que Jesus, agonizando na cruz, diz “Pai, perdoa-lhes, porque não sabem o que fazem.”. A segunda parte dessa frase — “não sabem” — é o que quebra sua resistência: ela compreende que seus algozes agiam sem noção das consequências eternas de seus atos, e que competir com o mal somente a aprisionaria nele.",
            "Ao sair do esconderijo e descobrir a dimensão da perda, Immaculée escolhe agir: percorre o campo de refugiados cada manhã em busca de alguém para ajudar, decide escrever um livro em inglês — língua que aprendera escondida, sem professores — e visita a prisão para oferecer perdão pessoalmente a um dos assassinos de sua família. Ela conclui com um chamado universal: o perdão não é um privilégio de situações brandas, é possível em qualquer circunstância; e a liberdade e alegria que dele decorrem são a prova de que abrir mão do ódio é um ato de poder, não de fraqueza.",
        ],
        softSkills: [
            "Resiliência emocional extrema",
            "Gestão da raiva e das emoções negativas",
            "Empatia radical",
            "Coragem interior",
            "Esperança como prática ativa",
            "Propósito diante da adversidade",
            "Capacidade de perdoar",
        ],
        palavrasChave: [
            "perdão",
            "resiliência",
            "genocídio",
            "ira",
            "fé",
            "esperança",
            "desenvolvimento emocional",
            "libertação interior",
            "amor",
            "propósito",
        ],
        takeaways: [
            "A ira prolongada destrói quem a carrega antes de atingir o alvo — reconhecê-la é o primeiro passo para a cura.",
            "Perdoar não significa aprovar o mal cometido, mas recusar-se a ser aprisionado por ele.",
            "Ver o outro como também filho de Deus — mesmo o inimigo — é o que torna o perdão psicologicamente possível.",
            "Trabalhar com o que se tem, mesmo na pior situação, é a única estratégia produtiva disponível.",
            "A esperança não é ingenuidade; é uma decisão ativa de continuar agindo com propósito a cada dia.",
            "Líderes que amam genuinamente deixam marcas que atravessam gerações — como o pai de Immaculée, cujos ensinamentos eram lembrados décadas depois.",
            "Se eu posso perdoar, qualquer um pode perdoar — o perdão é um chamado universal, não reservado a situações brandas.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Gestão de emoções difíceis sob pressão extrema",
                        percent: 95,
                        descricao:
                            "A palestra inteira gira em torno de como Immaculée enfrentou ira, medo e desespero durante 91 dias de esconderijo, transformando essas emoções por meio de oração, reflexão e rendição consciente.",
                    },
                    {
                        label: "6.2 Recuperação e reconstrução após trauma",
                        percent: 90,
                        descricao:
                            "Ao sair do esconderijo e descobrir a perda de toda a família, ela escolhe deliberadamente servir outros no campo de refugiados, aprender inglês e escrever um livro — reconstrução como ação, não como espera.",
                    },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.1 Cultura de amor, cuidado e pertencimento",
                        percent: 80,
                        descricao:
                            "O exemplo do pai de Immaculée — que punha o bem do vizinho acima dos bens materiais e disciplinava com amor, não com raiva — ilustra como uma cultura familiar de cuidado genuíno gera confiança e lealdade duradouras.",
                    },
                    {
                        label: "2.3 Confiança e reconciliação em ambientes de conflito",
                        percent: 85,
                        descricao:
                            "A visita à prisão para oferecer perdão pessoalmente ao assassino de sua família, e a distinção entre os perpetradores e a maioria da outra tribo que “tinha medo de fazer o bem”, demonstram como a confiança pode ser reconstruída mesmo após a ruptura mais radical.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Testemunho pessoal com profundidade espiritual e psicológica" },
            { label: "Estilo", value: "Narrativa autobiográfica com chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para liderança servidora, saúde emocional, cultura organizacional e desenvolvimento pessoal" },
            { label: "Intensidade conceitual", value: "Média (altíssima carga emocional e ética)" },
        ],
    },

    // Juliet Funt — "O tempo ocioso para a construção de soluções" (GLS 2017)
    gls17_6: {
        speaker: "Juliet Funt",
        speakerPhoto: "/speakers/juliet-funt.png",
        title: "O “Tempo Ocioso” para a Construção de Soluções",
        edition: "GLS 2017–2018",
        duration: "31:57",
        bio: "Juliet Funt é fundadora e presidente da WhiteSpace at Work, consultora e palestrante reconhecida cuja missão é descobrir o potencial das empresas ao aliviar o peso sobre a questão do talento. Guerreira contra o ativismo reativo e o excesso de trabalho sem sentido, Funt desenvolveu uma metodologia prática para a melhoria do processo pessoal que reduz a complexidade no local de trabalho. Filha do criador do primeiro reality show da TV, Allen Funt do programa “Candid Camera”, ela testemunhou em primeira mão como grandes criadores jamais se apressam na elaboração de grandes ideias. As equipes que incorporam o espírito e a metodologia da WhiteSpace aumentam a criatividade e o engajamento, recuperam capacidade perdida e passam a trabalhar no seu mais alto potencial.",
        temaCentral:
            "O “WhiteSpace” — pausa estratégica intencional entre as atividades — é o ingrediente secreto que líderes e organizações estão perdendo, e sem o qual talento, inovação e resultados de longo prazo ficam sistematicamente comprometidos.",
        sinopse: [
            "Juliet Funt abre sua palestra descrevendo com precisão cômica o dia típico de um profissional moderno: uma sequência ininterrupta de e-mails, reuniões, teleconferências e notificações que deixa zero espaço para pensar. Ela apresenta dados impactantes: 80% das organizações reconhecem que seu pessoal está sobrecarregado de atividades e informações, mas apenas 8% possuem programas para fazer algo a respeito. O custo desse ativismo irrefletido, apurado em seu trabalho de consultoria, é de aproximadamente 1 milhão de dólares por ano para cada 50 pessoas — um desperdício que jamais seria tolerado em uma linha de produção industrial, mas que é aceito com naturalidade no ambiente de escritório.",
            "O coração da palestra é o conceito de WhiteSpace: uma pausa estratégica entre as atividades — que pode durar meio segundo ou meia hora — capaz de funcionar como oxigênio para que tudo o mais se inflame. Funt distingue o WhiteSpace da meditação, da divagação mental e do mindfulness: ao contrário dessas práticas, o WhiteSpace não tem regras nem metas; é uma experiência de liberdade sem limites na qual a mente pode brincar, improvisar e seguir instintos. Ela apresenta os “quatro ladrões da produtividade” — impulso, excelência, informação e atividade — ativos positivos que, em excesso, se corrompem em superimpulso, perfeccionismo, sobrecarga de informação e correria, e ensina um plano de duas etapas: primeiro, reconhecer qual ladrão está em ação; segundo, derrotá-lo com quatro perguntas-filtro (“Existe algo que eu possa deixar?”, “Quando é que ‘está bom’ está suficientemente bom?”, “O que preciso realmente saber?”, “O que merece a minha atenção?”).",
            "Na parte final, Funt aplica o método ao problema concreto dos e-mails — o “Voldemort do trabalho atarefado” — propondo códigos de urgência real no assunto das mensagens para romper a expectativa de resposta imediata. Ela encerra com duas histórias pessoais de alta carga emocional: a mulher que perdeu o último passeio com o pai dois dias antes de ele morrer, e o próprio momento em que Funt quase ignorou os filhos brincando no quintal por estar “ocupada” no laptop. Esses relatos concretizam a tese de que o WhiteSpace não é luxo nem fraqueza — é condição para estar presente nos momentos que importam, tanto nos negócios quanto na vida.",
        ],
        softSkills: [
            "Gestão do tempo e atenção",
            "Pensamento estratégico",
            "Autoconhecimento",
            "Capacidade de simplificar e eliminar o supérfluo",
            "Presença e foco intencional",
            "Liderança de equipes sob pressão",
            "Equilíbrio entre desempenho e bem-estar",
        ],
        palavrasChave: [
            "whitespace",
            "pausa estratégica",
            "ativismo reativo",
            "produtividade",
            "ladrões do tempo",
            "sobrecarga",
            "inovação",
            "reflexão",
            "mentalidade redutora",
            "liderança consciente",
        ],
        takeaways: [
            "A pausa estratégica entre atividades é fonte formidável de poder profissional — é quando surgem estratégia, introspecção e inovação.",
            "80% das organizações reconhecem a sobrecarga, mas apenas 8% agem: o custo do ativismo irrefletido chega a 1 milhão de dólares anuais por cada 50 pessoas.",
            "Os quatro ladrões da produtividade são impulso, excelência, informação e atividade — virtudes que se corrompem quando levadas ao excesso.",
            "Quatro perguntas-filtro simples (“Existe algo que eu possa deixar?”, “Quando ‘está bom’ é suficientemente bom?”, “O que preciso realmente saber?”, “O que merece minha atenção?”) são suficientes para mudar permanentemente a forma como uma equipe trabalha.",
            "A cultura do e-mail como esporte competitivo de resposta imediata destrói o espaço necessário para o trabalho profundo de reflexão.",
            "Grandes líderes — de Jack Welch a Bill Gates — reservavam deliberadamente tempo sem tarefas para pensar: o WhiteSpace não é passividade, é estratégia.",
            "O WhiteSpace também protege os momentos irrecuperáveis da vida pessoal: reconhecer os ladrões do tempo é condição para estar presente onde realmente importa.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.1 Priorização e foco estratégico",
                        percent: 92,
                        descricao:
                            "A palestra inteira gira em torno de identificar e eliminar o que não merece atenção — as quatro perguntas-filtro são ferramentas diretas de priorização estratégica para líderes e equipes.",
                    },
                    {
                        label: "4.2 Eficiência operacional e eliminação de desperdício",
                        percent: 88,
                        descricao:
                            "Funt quantifica o custo do ativismo reativo em 1 milhão de dólares por 50 pessoas e apresenta a “mentalidade redutora” como método sistemático para cortar o desperdício organizacional.",
                    },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Prevenção do esgotamento e gestão da sobrecarga",
                        percent: 90,
                        descricao:
                            "A palestra diagnostica a sobrecarga como epidemia organizacional e propõe o WhiteSpace como antídoto prático — pausas que reiniciam o corpo e o cérebro cansados antes que o esgotamento se instale.",
                    },
                    {
                        label: "6.2 Presença e qualidade de vida além do trabalho",
                        percent: 78,
                        descricao:
                            "As histórias do piquenique perdido e dos filhos lavando o carro ancoram a tese de que cultivar espaço vazio é condição para não perder os momentos irrecuperáveis da vida pessoal e familiar.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Prática com metodologia aplicável imediatamente" },
            { label: "Estilo", value: "Storytelling humorístico + framework de duas etapas + chamada à ação" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipes, gestão de produtividade e cultura organizacional" },
            { label: "Intensidade conceitual", value: "Média (conceitos acessíveis com profundidade estratégica)" },
        ],
    },

    // Marcus Buckingham — "Reinventando a gestão da performance" (GLS 2017)
    gls17_7: {
        speaker: "Marcus Buckingham",
        speakerPhoto: "/speakers/marcus-buckingham.png",
        title: "Reinventando a Gestão da Performance",
        edition: "GLS 2017–2018",
        duration: "37:24",
        bio: "Marcus Buckingham é autoridade mundial em pontos fortes, performance e engajamento no trabalho. Após três décadas como pesquisador sênior na Gallup, fundou a The Marcus Buckingham Company, dedicada a transformar a forma como organizações entendem e desenvolvem pessoas. Autor de best-sellers como “Primeiro, Quebre Todas as Regras” e “A Verdade que há em Si”, Buckingham é o principal responsável pelo movimento dos pontos fortes nos negócios e publicou pesquisas de referência na Harvard Business Review sobre gestão de performance.",
        temaCentral:
            "As avaliações de performance tradicionais medem mais o avaliador do que o avaliado — a saída é substituir rankings subjetivos anuais por check-ins semanais individuais baseados em pontos fortes, transformando o papel do líder em coach que gera atenção frequente e personalizada.",
        sinopse: [
            "Marcus Buckingham abre a palestra com sua premissa de pesquisador: para aprender sobre excelência, é preciso estudar a excelência — não o fracasso invertido. A partir dessa base, ele questiona o modelo dominante de gestão de talentos e propõe que líderes se perguntem o que, de fato, acontece nas suas melhores equipes, para depois replicar essas condições. Com dados de 25 anos de pesquisa, ele identifica oito condições presentes em equipes de alto desempenho, organizadas em dois eixos: o que une o grupo (propósito, valores, confiança, futuro) e o que torna cada indivíduo único (clareza de expectativas, uso de pontos fortes, reconhecimento e crescimento pessoal).",
            "O núcleo mais provocador da palestra é a demonstração de que as avaliações de performance convencionais — inclusive as populares grades de nove caixas e os sistemas 360 graus — são informação de má qualidade. Um estudo com mais de 500 mil classificações revelou que ao menos 54% da nota atribuída a um colaborador reflete padrões subjetivos do avaliador, não o desempenho real de quem é avaliado. Buckingham argumenta que esse efeito não diminui com escalas mais detalhadas; na verdade, cresce. A solução não é abolir as classificações — as empresas precisam de números para investir diferenciadamente em pessoas — mas girar as perguntas: em vez de “como você avalia o Chris?”, o líder responde “procuro o Chris quando quero resultados extraordinários?” — uma avaliação da própria experiência, muito mais confiável.",
            "A proposta prática central é o check-in semanal individual: uma conversa um-a-um de poucos minutos em que o líder pergunta apenas “quais são as suas prioridades esta semana e como posso ajudar?”. Esse ritual substitui o feedback anual — que o cérebro processa como ameaça — pela atenção de coaching contínua, que é o que as pessoas realmente desejam. Buckingham encerra afirmando que um ano é composto de 52 pequenos sprints e que o trabalho do líder é garantir que o sprint 37 seja tão focado e energizado para cada membro da equipe quanto o sprint número 1.",
        ],
        softSkills: [
            "Escuta ativa e atenção individualizada",
            "Coaching e desenvolvimento de pessoas",
            "Pensamento baseado em evidências",
            "Comunicação frequente e direta",
            "Reconhecimento de pontos fortes",
            "Liderança personalizada",
            "Disciplina e consistência na gestão",
        ],
        palavrasChave: [
            "pontos fortes",
            "gestão de performance",
            "check-in semanal",
            "avaliação subjetiva",
            "engajamento de equipes",
            "coaching",
            "alto desempenho",
            "liderança individualizada",
            "feedback",
            "talento",
        ],
        takeaways: [
            "Excelência tem seu próprio padrão — não se aprende sobre ela estudando o fracasso e invertendo-o.",
            "As oito condições de equipes de alto desempenho equilibram o senso de “nós” (missão, valores, confiança) com o reconhecimento do “eu” (pontos fortes, expectativas claras, crescimento).",
            "Avaliações de performance tradicionais refletem mais o avaliador do que o avaliado — ao menos 54% da nota mede o padrão subjetivo de quem classifica.",
            "Adicionar mais avaliadores a um sistema falho não corrige o problema; ruído somado a ruído continua sendo ruído.",
            "A solução não é eliminar classificações, mas girar as perguntas: o líder avalia sua própria experiência com o colaborador, não o colaborador diretamente.",
            "Check-ins semanais individuais — “quais são suas prioridades e como posso ajudar?” — são a ferramenta mais poderosa para construir equipes de alto desempenho.",
            "As pessoas não querem feedback; querem atenção de coaching — que o líder se sente ao seu lado para ajudá-las a contribuir mais, não que lhes diga onde estão erradas.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.2 Tomada de decisão baseada em dados e evidências",
                        percent: 90,
                        descricao:
                            "A palestra inteira é construída sobre pesquisa psicométrica de 25 anos — Buckingham usa dados para demolir um sistema e propor uma alternativa concreta.",
                    },
                    {
                        label: "4.4 Execução operacional e ritmo de gestão",
                        percent: 82,
                        descricao:
                            "O check-in semanal individual é apresentado como um mecanismo de execução — um ritmo de gestão que transforma um ano em 52 sprints monitorados.",
                    },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.3 Desenvolvimento e engajamento de talentos",
                        percent: 93,
                        descricao:
                            "O foco em pontos fortes, atenção individualizada e coaching contínuo é o eixo central da proposta — desenvolvimento como prática semanal, não evento anual.",
                    },
                    {
                        label: "2.1 Construção de equipes de alto desempenho",
                        percent: 88,
                        descricao:
                            "As oito condições de equipes excepcionais e a lógica de integrar missão coletiva com individualização compõem um modelo direto de construção de cultura de alta performance.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa científica com proposta prática" },
            { label: "Estilo", value: "Pesquisador + humor + dados + chamada à ação operacional" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipe, RH e cultura organizacional" },
            { label: "Intensidade conceitual", value: "Média-alta (argumentação densa com dados, conclusão direta)" },
        ],
    },

    // Sam Adeyemi — "Liderando você mesmo" (GLS 2017)
    gls17_8: {
        speaker: "Sam Adeyemi",
        speakerPhoto: "/speakers/sam-adeyemi.png",
        title: "Liderando Você Mesmo",
        edition: "GLS 2017–2018",
        duration: "32:46",
        bio: "Sob a liderança de Sam Adeyemi, a Igreja Daystar Christian Center cresceu de um punhado de pessoas em 1995 para mais de 25 mil participantes, com projetos de impacto comunitário amplamente reconhecidos. Autor de vários livros e apresentador de programas de televisão que alcançam telespectadores em todos os continentes, Adeyemi fundou a Daystar Leadership Academy com o propósito de preparar uma nova geração de líderes que atuarão como catalisadores na transformação da África e do mundo. Sua liderança é marcada por uma paixão declarada por desmantelar sistemas hierárquicos, capacitar jovens líderes e construir uma cultura organizacional que liberta o potencial humano de dentro para fora.",
        temaCentral:
            "A verdadeira liderança começa por dentro: antes de transformar seguidores, o líder precisa transformar a própria identidade — e então criar condições para que cada pessoa ao seu redor descubra quem ela realmente pode ser.",
        sinopse: [
            "Sam Adeyemi parte de uma constatação nascida de sua experiência pessoal como fundador de uma Igreja em Lagos: na liderança, você não atrai quem quer — atrai quem você é. A dinâmica de liderar pessoas de um ponto a outro só funciona quando há alinhamento entre a identidade do líder e a identidade dos seguidores. Isso significa que a primeira e mais urgente tarefa do líder não é corrigir o comportamento externo das pessoas, mas transformar a crença que elas têm de si mesmas — o que Adeyemi chama de “milagre da liderança”.",
            "Para sustentar esse argumento, Adeyemi recorre a histórias de alto contraste: o jovem em situação de rua que voltou a seu ambiente original após ser brevemente transformado em aparência, mas não em identidade; a enxadrista Phiona Mutesi de Uganda, cujo potencial extraordinário estava bloqueado pela crença de que não pertencia àquele nível; e a anedota da mãe judia que já chamava seus filhos de médico e advogado quando tinham 2 e 3 anos. Em todos os casos, a transformação exterior sustentável só ocorre quando há uma mudança no interior — na forma como a pessoa se vê, no que acredita poder fazer e no que acredita ter.",
            "A partir dessa premissa, Adeyemi propõe quatro passos práticos para líderes: (1) descrever a visão repetidamente, incluindo os seguidores como protagonistas dela; (2) desenvolver um sistema de formação estruturado que produza as pessoas ideais para a visão; (3) modelar pessoalmente a transformação que se exige dos outros, definindo padrões elevados para si mesmo; e (4) reinventar-se continuamente, abandonando cada nível de sucesso para crescer ao próximo — pois um líder parado paralisa também os que o seguem.",
        ],
        softSkills: [
            "Autoconhecimento",
            "Liderança transformacional",
            "Visão de potencial nos outros",
            "Humildade e serviço",
            "Coragem de reinventar-se",
            "Desenvolvimento intencional de pessoas",
            "Modelagem pelo exemplo",
        ],
        palavrasChave: [
            "identidade",
            "liderança transformacional",
            "autoestima",
            "visão",
            "formação de líderes",
            "crença limitante",
            "reinvenção",
            "potencial humano",
            "cultura organizacional",
            "liderança servidora",
        ],
        takeaways: [
            "Na liderança, você não atrai quem quer — atrai quem você é.",
            "A mudança real e sustentável na vida das pessoas começa com uma mudança no seu sentido de identidade.",
            "Um dos maiores presentes que um líder pode dar a alguém é uma nova crença sobre si mesmo.",
            "Descreva a visão repetidamente e inclua seus seguidores como protagonistas dela — não como são agora, mas como podem se tornar.",
            "Um sistema de formação estruturado é o mecanismo que converte visão em pessoas capazes de realizá-la.",
            "O líder deve modelar a transformação que pede aos outros, definindo padrões elevados para si mesmo antes de exigi-los.",
            "Reinvente-se continuamente: um líder parado num nível de sucesso paralisa também os que o seguem.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.1 Autoconhecimento e identidade do líder",
                        percent: 95,
                        descricao:
                            "A tese central da palestra é que a liderança eficaz começa pela identidade do próprio líder — “você não atrai quem quer, atrai quem você é” — tornando o autoconhecimento o ponto de partida de toda a argumentação.",
                    },
                    {
                        label: "1.4 Reinvenção e crescimento contínuo",
                        percent: 88,
                        descricao:
                            "Adeyemi dedica o quarto passo prático inteiro à reinvenção contínua, afirmando que o líder “morre em um nível para evoluir para outro” e que parar num nível de sucesso paralisa os seguidores.",
                    },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    {
                        label: "7.2 Visão compartilhada e inclusão dos seguidores",
                        percent: 90,
                        descricao:
                            "Adeyemi define visão como “a capacidade de ver pessoas não apenas da forma que são, mas da forma como poderiam ser” e instrui líderes a chamarem seus seguidores pelo que enxergam neles na visão, não pelo que são no presente.",
                    },
                    {
                        label: "7.3 Legado e multiplicação de líderes",
                        percent: 82,
                        descricao:
                            "A palestra culmina no desejo de transformar organizações em “fábricas de produção de liderança”, e Adeyemi relata encorajar líderes formados a abrirem suas próprias organizações — legado que se multiplica além da instituição original.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Prática-inspiracional baseada em experiência de campo e storytelling" },
            { label: "Estilo", value: "Storytelling pessoal + framework de 4 passos + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para desenvolvimento de líderes, formação de equipes e cultura organizacional" },
            { label: "Intensidade conceitual", value: "Média (conceitos acessíveis com ancoragem em narrativas concretas)" },
        ],
    },


    // ===== gls18-19 =====
// Craig Groeschel — "O líder que as pessoas amam seguir" (GLS 2018-2019)
    gls18_1: {
        speaker: "Craig Groeschel",
        speakerPhoto: "/speakers/craig-groeschel.png",
        title: "O Líder que as Pessoas Amam Seguir",
        edition: "GLS 2018–2019",
        duration: "40:44",
        bio: "Craig Groeschel é o fundador e pastor sênior da Life.Church, uma das maiores igrejas dos Estados Unidos, com dezenas de campi e presença digital global. É também o criador do YouVersion Bible App, que soma mais de 300 milhões de downloads. Reconhecido como um dos líderes cristãos mais influentes do mundo, Craig fala regularmente sobre liderança em conferências empresariais e ministeriais.",
        temaCentral: "O que diferencia líderes amados daqueles meramente respeitados não é competência técnica, mas a capacidade de fazer as pessoas ao redor se sentirem valorizadas, inspiradas e capacitadas.",
        sinopse: [
            "Uma pesquisa com 4.000 profissionais revelou algo surpreendente: enquanto líderes acreditam que as pessoas os seguem por causa de competência financeira ou tecnológica, os liderados dizem que querem um líder que demonstre inteligência emocional e habilidade relacional. Sob os melhores líderes, os colaboradores relatam três sentimentos recorrentes: sentem-se valorizados, inspirados e capacitados.",
            "Craig apresenta quatro qualidades que separam líderes amados dos demais. A primeira é ter um coração que se importa — aquele líder que para, observa e diz “eu noto você” e “você importa”. A segunda é ter paixão por inspirar, característica ligada a líderes centrados em valores, guiados por propósito e obcecados pela missão. A terceira é a vontade de capacitar: “você pode ter controle ou crescimento, mas não os dois ao mesmo tempo” — líderes que delegam autoridade, e não apenas tarefas, liberam o potencial das equipes.",
            "A quarta qualidade — coragem para ser real, transparente e vulnerável — é a mais difícil e a mais poderosa. Citando Maya Angelou, Craig conclui que as pessoas podem esquecer o que você disse ou fez, mas nunca esquecerão como você as fez sentir. Líderes verdadeiramente amados não inspiram pelo cargo que ocupam, mas pela presença que oferecem.",
        ],
        softSkills: ["Inteligência emocional", "Empatia", "Autenticidade", "Vulnerabilidade", "Inspiração", "Capacitação", "Autoconhecimento"],
        palavrasChave: ["liderança autêntica", "inteligência emocional", "capacitação", "confiança", "vulnerabilidade", "inspiração", "propósito", "cultura organizacional", "influência"],
        takeaways: [
            "Funcionários não buscam líderes com mais competência técnica — buscam líderes que demonstrem inteligência emocional e se importem genuinamente.",
            "Sob grandes líderes, as pessoas se sentem valorizadas, inspiradas e capacitadas — os três sentimentos são igualmente essenciais.",
            "Um coração que se importa começa com a prática simples de notar as pessoas: parar, observar e dizer “você importa”.",
            "Líderes inspiradores são centrados em valores, guiados por propósito e obcecados pela missão — não pelos resultados financeiros.",
            "Você pode ter controle ou crescimento, mas não os dois: delegar autoridade (não apenas tarefas) é o que libera o potencial das equipes.",
            "A coragem de ser real e vulnerável não é fraqueza — é a qualidade que mais aproxima líderes de suas equipes.",
            "As pessoas esquecem o que você disse, esquecem o que você fez, mas nunca esquecem como você as fez sentir.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    { label: "1.1 Autoconhecimento e identidade do líder", percent: 85, descricao: "Craig explora a pergunta sobre o que define um líder genuíno, conectando identidade pessoal com estilo de liderança e impacto nas pessoas." },
                    { label: "1.3 Coragem e autenticidade", percent: 90, descricao: "A quarta qualidade apresentada — coragem para ser real, transparente e vulnerável — é o núcleo emocional da palestra." },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    { label: "2.1 Construção de confiança e segurança psicológica", percent: 88, descricao: "A palestra articula como líderes constroem ambientes onde as pessoas se sentem seguras para contribuir com autenticidade." },
                    { label: "2.3 Engajamento e motivação de equipes", percent: 92, descricao: "Os três sentimentos — valorizado, inspirado, capacitado — são o mapa prático para engajamento real de equipes." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com base em pesquisa" },
            { label: "Estilo", value: "Storytelling pessoal combinado com dados e princípios práticos" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipes, gestores, pastores e empreendedores" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

    // Craig Groeschel — "Liderança preventiva" (GLS 2018-2019)
    gls18_2: {
        speaker: "Craig Groeschel",
        speakerPhoto: "/speakers/craig-groeschel.png",
        title: "Liderança Preventiva",
        edition: "GLS 2018–2019",
        duration: "46:08",
        bio: "Craig Groeschel é o fundador e pastor sênior da Life.Church, uma das maiores igrejas dos Estados Unidos, com dezenas de campi e presença digital global. É também o criador do YouVersion Bible App, que soma mais de 300 milhões de downloads. Reconhecido como um dos líderes cristãos mais influentes do mundo, Craig fala regularmente sobre liderança em conferências empresariais e ministeriais.",
        temaCentral: "Líderes preventivos não gerenciam o presente — eles antecipam o futuro. Em um mundo de mudanças aceleradas, a capacidade de enxergar onde o puck vai estar é o que separa organizações que prosperam das que declinam.",
        sinopse: [
            "A história do YouVersion Bible App ilustra a mentalidade preventiva em ação: quando a Apple abriu a App Store em 2008, um jovem de 19 anos trabalhando meio período construiu o aplicativo em poucos dias. No primeiro dia, 83.000 downloads. Em dez anos, mais de 300 milhões. O insight não veio de uma análise de mercado sofisticada — veio de um líder disposto a agir antes de ter certeza. Wayne Gretzky capturou essa mentalidade com precisão: “A maioria dos jogadores vai onde o puck está. Eu vou onde o puck vai estar.”",
            "Craig introduz o conceito da “maldição da certeza”: líderes bem-sucedidos tendem a parar de aprender justamente quando mais precisam aprender. O Efeito Dunning-Kruger explica como o excesso de confiança cega organizações para ameaças reais. A Kodak não falhou por falta de tecnologia — eles inventaram a câmera digital em 1975. Falharam porque se identificavam como uma empresa de filmes, não como uma empresa de memórias.",
            "Para cultivar liderança preventiva, Craig propõe três práticas: Desenvolvimento (ampliar consciência situacional com 21 perguntas estratégicas), Discernimento (desenvolver capacidade de leitura de contexto antes de agir) e Disrupção (questionar ativamente as próprias premissas antes que o mercado o faça). Como Emerson sintetizou: quem entende o “como” tem um emprego; quem entende o “por quê” é o chefe.",
        ],
        softSkills: ["Pensamento antecipativo", "Adaptabilidade", "Aprendizado contínuo", "Discernimento", "Curiosidade", "Humildade intelectual", "Visão estratégica"],
        palavrasChave: ["liderança preventiva", "antecipação", "inovação", "disrupção", "aprendizado", "visão", "mudança", "estratégia", "mentalidade de crescimento"],
        takeaways: [
            "Líderes preventivos não reagem ao presente — eles se posicionam para onde o futuro está se movendo.",
            "A “maldição da certeza” é o maior inimigo de organizações bem-sucedidas: o sucesso gera complacência que cega para ameaças futuras.",
            "O Efeito Dunning-Kruger atinge líderes experientes: quanto mais bem-sucedidos, mais difícil se torna reconhecer o que não se sabe.",
            "A Kodak falhou não por falta de tecnologia, mas por definir mal seu negócio: eram uma empresa de filmes, não de memórias.",
            "Desenvolvimento, discernimento e disrupção são as três práticas que constroem a capacidade de antecipar o futuro.",
            "Fazer 21 perguntas estratégicas regularmente amplia a consciência situacional e previne pontos cegos organizacionais.",
            "Quem entende o “como” tem um emprego; quem entende o “por quê” lidera organizações que duram.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    { label: "4.2 Pensamento estratégico e visão de longo prazo", percent: 94, descricao: "A palestra é construída inteiramente em torno da capacidade de antecipar cenários futuros antes que se tornem necessidades urgentes." },
                    { label: "4.4 Gestão de riscos e incertezas", percent: 87, descricao: "Craig aborda diretamente como a maldição da certeza e o viés de confirmação criam vulnerabilidades estratégicas não percebidas." },
                ],
            },
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    { label: "5.1 Liderança em tempos de mudança acelerada", percent: 91, descricao: "O case YouVersion e a análise da Kodak ilustram como líderes respondem (ou falham em responder) à velocidade das transformações." },
                    { label: "5.3 Cultura de experimentação e aprendizado", percent: 85, descricao: "As práticas de desenvolvimento e disrupção propõem um sistema para institucionalizar o aprendizado contínuo nas organizações." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Estratégica com casos reais" },
            { label: "Estilo", value: "Análise de casos + framework prático + humor situacional" },
            { label: "Aplicabilidade", value: "Alta para CEOs, líderes sênior e empreendedores em mercados em transformação" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },

    // Angela Ahrendts — "Lições de liderança" (GLS 2018-2019)
    gls18_3: {
        speaker: "Angela Ahrendts",
        speakerPhoto: "/speakers/angela-ahrendts.png",
        title: "Lições de Liderança",
        edition: "GLS 2018–2019",
        duration: "35:20",
        bio: "Angela Ahrendts é ex-vice-presidente sênior de Varejo da Apple e ex-CEO da Burberry, onde transformou a marca de luxo britânica em uma potência global. Reconhecida como uma das mulheres mais poderosas do mundo dos negócios, Angela é conhecida por sua liderança centrada em humanidade, propósito e inteligência emocional. Cresceu em uma pequena cidade de Indiana e atribui sua visão de liderança aos valores aprendidos em família e na fé.",
        temaCentral: "Liderança genuína não se constrói com métricas de performance, mas com a capacidade de cuidar profundamente das pessoas — um valor que não pode ser ensinado, apenas cultivado.",
        sinopse: [
            "Angela Ahrendts compartilhou lições de liderança em formato de conversa com Craig Groeschel, revelando os princípios que guiaram sua trajetória desde uma pequena cidade de Indiana até os mais altos cargos do mundo corporativo. A frase do pai — “posso te ensinar qualquer coisa, mas não posso te ensinar a se importar” — é a âncora de toda a sua filosofia de liderança. Líderes que genuinamente se importam com as pessoas ao redor criam ambientes onde o engajamento real se torna possível.",
            "Na Apple, Angela redefiniu o papel das equipes de varejo: o trabalho delas não era vender, mas educar e inspirar. Para medir isso, a empresa adotou métricas qualitativas como o NPS — uma forma de capturar o impacto humano que números de vendas não conseguem traduzir. Ela também revelou uma lacuna crítica de percepção: 80% dos executivos acreditam que encorajam suas equipes constantemente, mas apenas 20% dos colaboradores concordam. Essa desconexão, quando ignorada, destrói culturas.",
            "Sobre fé e liderança, Angela foi direta: ela lê, escuta e ora diariamente. Seu TED Talk “Human Energy” foi, em suas palavras, sobre o Espírito Santo — mesmo que o contexto fosse corporativo. Para ela, a vida espiritual e a liderança profissional não são esferas separadas. A autenticidade de quem você é em casa deve ser a mesma de quem você é na sala de reuniões.",
        ],
        softSkills: ["Empatia", "Autenticidade", "Cuidado genuíno", "Comunicação inspiradora", "Inteligência emocional", "Fé e propósito", "Presença humana"],
        palavrasChave: ["liderança humana", "cultura organizacional", "propósito", "engajamento", "autenticidade", "fé", "inspiração", "varejo", "apple"],
        takeaways: [
            "Você pode ensinar competências técnicas, mas não pode ensinar uma pessoa a se importar genuinamente com as outras.",
            "A função da liderança não é vender resultados, mas educar e inspirar — o desempenho é consequência, não objetivo.",
            "80% dos líderes acreditam que encorajam suas equipes; apenas 20% dos colaboradores concordam — fechar essa lacuna é urgente.",
            "Métricas qualitativas como NPS capturam o que números de vendas não conseguem: o impacto humano real da liderança.",
            "Líderes autênticos não separam quem são na fé de quem são na liderança — a coerência entre esferas é a base da confiança.",
            "Crescer em contexto humilde não é limitação — é onde valores de liderança genuína são formados.",
            "A energia humana que um líder carrega para o ambiente é o seu ativo mais valioso e mais difícil de replicar.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    { label: "1.2 Valores, ética e caráter do líder", percent: 92, descricao: "A conversa gira em torno de valores formados pela família, pela fé e pela experiência de vida como fundação da liderança." },
                    { label: "1.3 Coragem e autenticidade", percent: 88, descricao: "Angela conecta autenticidade pessoal com eficácia profissional, recusando a separação entre vida espiritual e liderança corporativa." },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    { label: "2.2 Desenvolvimento e valorização de pessoas", percent: 90, descricao: "A filosofia de educar e inspirar em vez de vender é uma forma de desenvolvimento humano aplicado ao contexto corporativo." },
                    { label: "2.3 Engajamento e motivação de equipes", percent: 87, descricao: "A lacuna entre percepção de líderes e experiência de colaboradores é tratada como problema central de engajamento." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Entrevista inspiracional com executiva de alto nível" },
            { label: "Estilo", value: "Diálogo reflexivo com histórias pessoais e insights práticos" },
            { label: "Aplicabilidade", value: "Alta para líderes de organizações de serviços, varejo e missão" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

    // Danielle Strickland — "Juntos somos melhores" (GLS 2018-2019)
    gls18_4: {
        speaker: "Danielle Strickland",
        speakerPhoto: "/speakers/danielle-strickland.png",
        title: "Juntos Somos Melhores",
        edition: "GLS 2018–2019",
        duration: "30:51",
        bio: "Danielle Strickland é autora, palestrante e ativista social canadense com décadas de experiência na linha de frente de questões de justiça, igualdade de gênero e transformação comunitária. Ex-oficial do Exército da Salvação, ela faz uso de humor, profundidade bíblica e provocação profética para desafiar líderes a reimaginar o que é possível quando diferentes pessoas colaboram genuinamente.",
        temaCentral: "A maior oportunidade de transformação social da nossa geração está no que acontece quando homens e mulheres param de competir e começam a colaborar — e isso começa quando cada líder decide acreditar que um mundo melhor é possível.",
        sinopse: [
            "No contexto do movimento #MeToo e das relações tensas entre gêneros, Danielle Strickland apresentou um argumento audacioso: a resposta não é separação, mas colaboração radical. Citando a especialista Gunilla Ekberg, ela propôs que toda mudança social massiva começa com duas coisas — imaginar um mundo melhor e compreender profundamente a opressão que impede esse mundo de existir. A palestra desafia líderes a iniciar esse processo internamente.",
            "A narrativa bíblica de Gênesis sobre a criação da mulher como “ezer” — palavra hebraica que significa ao mesmo tempo ajudante, guerreira e salvadora — redefine o que colaboração entre gêneros pode ser. Não se trata de uniformidade, mas de mutualidade. O relatório McKinsey que aponta $12 a $28 trilhões de valor econômico potencial desbloqueado pela igualdade de gênero e o trabalho de Muhammad Yunus com o Grameen Bank ilustram que incluir mulheres plenamente não é altruísmo — é estratégia.",
            "Danielle apresentou três passos práticos para líderes que querem construir times verdadeiramente complementares: primeiro, acreditar que um mundo diferente é possível; segundo, não ter medo — pois o medo é a moeda da opressão; terceiro, abraçar diferença com mutualidade, capturado pelo conceito africano de Ubuntu: “Eu sou porque nós somos.” A palestra termina com um convite ao protagonismo coletivo como caminho para o impacto máximo.",
        ],
        softSkills: ["Colaboração", "Empatia intercultural", "Coragem", "Inclusão", "Pensamento sistêmico", "Propósito coletivo", "Liderança servidora"],
        palavrasChave: ["igualdade de gênero", "colaboração", "mutualidade", "diversidade", "inclusão", "ubuntu", "justiça social", "liderança", "transformação"],
        takeaways: [
            "Toda grande mudança social começa com dois atos: imaginar um mundo melhor e compreender a opressão que o impede.",
            "A palavra hebraica “ezer” — usada para descrever a mulher na criação — significa guerreira e salvadora, não subordinada.",
            "A igualdade de gênero poderia adicionar $12 a $28 trilhões à economia global — inclusão não é altruísmo, é estratégia.",
            "O medo é a moeda da opressão: líderes que querem mudança real precisam aprender a agir apesar do medo.",
            "Diferença sem mutualidade produz conflito; mutualidade sem diferença produz mediocridade. Os dois juntos geram excelência.",
            "Ubuntu — “Eu sou porque nós somos” — é a filosofia que transforma grupos em comunidades de impacto.",
            "O maior risco para líderes hoje não é fracassar sozinhos, mas não descobrir o que poderiam ser juntos.",
        ],
        categorias: [
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    { label: "2.4 Diversidade, inclusão e pertencimento", percent: 96, descricao: "A palestra é dedicada inteiramente à construção de culturas onde diferença e mutualidade coexistem como forças complementares." },
                    { label: "2.1 Construção de confiança e segurança psicológica", percent: 83, descricao: "O conceito de Ubuntu e os três passos práticos criam um framework para ambientes onde todas as vozes podem contribuir." },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    { label: "7.2 Impacto social e responsabilidade coletiva", percent: 91, descricao: "A perspectiva de justiça social e o dado McKinsey conectam a narrativa individual com impacto econômico e civilizacional." },
                    { label: "7.1 Propósito como motor de liderança", percent: 85, descricao: "Danielle convoca líderes a agir não por conveniência, mas por convicção de que um mundo melhor é possível e necessário." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Profética e mobilizadora" },
            { label: "Estilo", value: "Argumentação provocativa com humor, narrativa bíblica e dados sociais" },
            { label: "Aplicabilidade", value: "Alta para líderes que buscam construir organizações mais inclusivas e equipes diversas" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },

    // David Livermore — "Inteligência Cultural" (GLS 2018-2019)
    gls18_5: {
        speaker: "David Livermore",
        speakerPhoto: "/speakers/david-livermore.png",
        title: "Inteligência Cultural",
        edition: "GLS 2018–2019",
        duration: "29:49",
        bio: "David Livermore é pesquisador e presidente do Cultural Intelligence Center (EUA), considerado uma das maiores autoridades mundiais em inteligência cultural (CQ). Autor de mais de doze livros traduzidos em múltiplos idiomas, ele assessora governos, multinacionais e organizações religiosas sobre como liderar e trabalhar efetivamente em contextos multiculturais. Seu trabalho combina pesquisa científica rigorosa com aplicação prática acessível.",
        temaCentral: "Em um mundo cada vez mais interconectado, a inteligência cultural — a capacidade de trabalhar efetivamente com pessoas de origens diferentes — não é uma habilidade opcional para líderes, mas a condição básica para relevância e impacto.",
        sinopse: [
            "David Livermore apresentou o conceito de CQ — Inteligência Cultural — como uma competência mensurável e desenvolvível, distinta do QI e da inteligência emocional. O CQ é composto por quatro elementos: Impulso (CQ Drive — a motivação e curiosidade genuína para aprender sobre culturas diferentes), Conhecimento (CQ Knowledge — compreensão de padrões culturais), Estratégia (CQ Strategy — capacidade de tomar perspectiva antes de agir) e Ação (CQ Action — saber quando adaptar e quando não adaptar o comportamento). O Impulso é o preditor mais poderoso de sucesso intercultural.",
            "Uma das histórias mais reveladoras da palestra envolve um intérprete que se recusou a traduzir uma piada autodepreciativa de Livermore para uma plateia chinesa — porque na China, um líder que se rebaixa perde autoridade diante de quem ouve. A história expõe como o que funciona em um contexto pode ser catastrófico em outro. Igualmente iluminadora é a análise da parábola do filho pródigo: pastores russos focam na fome, tanzanianos na ausência de cuidado comunitário, americanos no desperdício de riqueza — e todos estão certos, porque todos os elementos estão no texto.",
            "Livermore também alertou sobre um dado contra-intuitivo: programas de diversidade que ensinam apenas as diferenças entre culturas podem piorar as relações interculturais se não forem acompanhados de estratégia de perspectiva. Entender diferenças sem desenvolver a capacidade de assumir outras perspectivas produz estereótipos mais rígidos, não mais compreensão. CQ não é sobre eliminar diferenças — é sobre navegar nelas com sabedoria.",
        ],
        softSkills: ["Curiosidade cultural", "Adaptabilidade", "Empatia intercultural", "Perspectiva", "Escuta ativa", "Flexibilidade comportamental", "Aprendizado contínuo"],
        palavrasChave: ["inteligência cultural", "diversidade", "liderança global", "adaptabilidade", "perspectiva", "culturas", "comunicação intercultural", "cq", "inclusão"],
        takeaways: [
            "CQ — Inteligência Cultural — é uma competência mensurável composta por Impulso, Conhecimento, Estratégia e Ação.",
            "O CQ Impulso (motivação genuína para aprender sobre outras culturas) é o preditor mais poderoso de eficácia intercultural.",
            "O que funciona perfeitamente em uma cultura pode destruir sua credibilidade em outra — como uma piada autodepreciativa em contexto de alta distância de poder.",
            "A mesma história bíblica é lida de formas completamente diferentes por culturas diferentes — e todas as leituras estão no texto.",
            "Programas de diversidade que ensinam apenas diferenças, sem desenvolver CQ Estratégia, podem reforçar estereótipos em vez de reduzi-los.",
            "CQ Ação não significa sempre adaptar — significa saber quando adaptar e quando manter sua identidade cultural sem ofender.",
            "Líderes globais não eliminam diferenças culturais: eles desenvolvem a capacidade de navegar nelas com curiosidade e sabedoria.",
        ],
        categorias: [
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    { label: "2.4 Diversidade, inclusão e pertencimento", percent: 95, descricao: "A palestra oferece o framework científico mais completo disponível para líderes que querem desenvolver competência intercultural genuína." },
                    { label: "2.1 Construção de confiança e segurança psicológica", percent: 84, descricao: "Compreender padrões culturais e assumir perspectivas diferentes é fundação para criar ambientes de confiança em times diversos." },
                ],
            },
            {
                titulo: "Categoria 3 — Comunicação e Influência",
                cor: "#FF6B35",
                criterios: [
                    { label: "3.1 Comunicação clara e impactante", percent: 88, descricao: "Os exemplos de comunicação intercultural — o intérprete chinês, as leituras do filho pródigo — ilustram como contexto cultural define o impacto de qualquer mensagem." },
                    { label: "3.3 Escuta ativa e comunicação não-verbal", percent: 82, descricao: "CQ Estratégia envolve ouvir com atenção ao contexto cultural antes de agir ou comunicar, uma forma avançada de escuta ativa." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Educacional com base em pesquisa científica" },
            { label: "Estilo", value: "Framework conceitual + casos práticos + dados de pesquisa" },
            { label: "Aplicabilidade", value: "Alta para líderes de organizações globais, times multiculturais e missão transcultural" },
            { label: "Intensidade conceitual", value: "Alta" },
        ],
    },

    // Erwin McManus — "A última flecha" (GLS 2018-2019)
    gls18_6: {
        speaker: "Erwin McManus",
        speakerPhoto: "/speakers/erwin-mcmanus.png",
        title: "A Última Flecha: Não Pare Até Ter Terminado",
        edition: "GLS 2018–2019",
        duration: "39:52",
        bio: "Erwin Raphael McManus é autor, palestrante, cineasta e pastor fundador da Mosaic, uma comunidade de fé em Los Angeles conhecida por sua diversidade e criatividade. Nascido em El Salvador e criado nos EUA, Erwin escreve e fala na intersecção entre espiritualidade, criatividade e potencial humano. Seu livro “A Última Flecha” foi escrito antes de um diagnóstico de câncer de próstata avançado — uma coincidência que transformou o livro em testemunho.",
        temaCentral: "A dor não é o limite do seu potencial — é a fronteira da sua grandeza. Líderes que escolhem não parar diante do sofrimento descobrem que seus maiores momentos estão do outro lado do que os assusta.",
        sinopse: [
            "Erwin McManus contou que escreveu “A Última Flecha” com o argumento de que ninguém deveria morrer com flechas não disparadas — sem ter usado tudo o que tinha. Meses depois, ele foi diagnosticado com câncer de próstata em estágio avançado, de alto volume e alto risco. Na noite do diagnóstico, ele reabriu o manuscrito e encontrou uma frase que havia escrito: “Preciso te dizer, antes que ouças de outra pessoa, que estou morrendo.” E então: “Mas você também está.” A vida não deu aviso — mas o livro havia preparado o autor para a mensagem que ele mesmo precisaria receber.",
            "O cirurgião que realizou a cirurgia de 6,5 horas foi o inventor do robô Da Vinci. Erwin acordou da cirurgia sem anestesia suficiente, em dor intensa, e às 3h da manhã se levantou e caminhou pelo hospital sem auxílio. Três meses depois, jogou basquete. Não por imprudência — por recusa a ser definido pela sua limitação. “Sua liberdade está do outro lado do seu medo”, ele declarou. “Sua grandeza está do outro lado da sua dor.”",
            "A palestra desmonta o que McManus chama de “mitologia da grandeza”: vemos pessoas em seu pico e imaginamos que chegaram lá sem sacrifício. A verdade é que toda grandeza tem uma anatomia de dor não vista. Dick DeVos articulou o princípio de liderança subjacente: “Líderes não fogem do fogo — eles correm em direção ao fogo.” Filipenses 1:21 foi a ancora espiritual: “Para mim, viver é Cristo e morrer é lucro.” Quando a morte não é o pior cenário, tudo muda.",
        ],
        softSkills: ["Resiliência", "Coragem", "Propósito", "Perseverança", "Fé", "Autodomínio", "Liderança sob pressão"],
        palavrasChave: ["resiliência", "coragem", "dor", "grandeza", "propósito", "fé", "liderança", "perseverança", "superação"],
        takeaways: [
            "Ninguém deveria morrer com flechas não disparadas: o objetivo de uma vida bem vivida é usar tudo o que se tem.",
            "A dor não é o limite do seu potencial — é a fronteira onde sua grandeza começa.",
            "Sua liberdade está do outro lado do seu medo: o que você evita é muitas vezes o portal para o que você deveria ser.",
            "A mitologia da grandeza esconde o sacrifício: vemos pessoas no pico, não vemos os anos de dor que as formaram.",
            "Líderes não fogem do fogo — correm em direção a ele, porque é lá que a transformação acontece.",
            "Quando a morte deixa de ser o pior cenário, o líder se liberta de medos que antes o paralisavam.",
            "A maior tragédia não é falhar — é chegar ao fim com capacidade não utilizada, com flechas que nunca foram disparadas.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    { label: "6.1 Resiliência e gestão de adversidades", percent: 97, descricao: "O testemunho pessoal de diagnóstico de câncer, cirurgia e recuperação é o exemplo mais poderoso de resiliência apresentado no GLS." },
                    { label: "6.3 Propósito como ancora em tempos de crise", percent: 93, descricao: "A âncora espiritual de Filipenses 1:21 e o conceito da última flecha mostram como propósito claro sustenta o líder na adversidade extrema." },
                ],
            },
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    { label: "1.3 Coragem e autenticidade", percent: 95, descricao: "Erwin demonstra, com sua própria história, que coragem não é ausência de medo — é a escolha de agir apesar dele." },
                    { label: "1.4 Desenvolvimento e crescimento intencional", percent: 88, descricao: "A metáfora da última flecha convida a um exame honesto de onde o potencial ainda não foi mobilizado." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Testemunhal e profética" },
            { label: "Estilo", value: "Narrativa pessoal intensa com teologia aplicada e princípios de liderança" },
            { label: "Aplicabilidade", value: "Alta para líderes em crise, pastores e qualquer pessoa diante de limites pessoais" },
            { label: "Intensidade conceitual", value: "Média com alta carga emocional" },
        ],
    },

    // John Maxwell — "Ver mais e ver antes" (GLS 2018-2019)
    gls18_7: {
        speaker: "John Maxwell",
        speakerPhoto: "/speakers/john-maxwell.png",
        title: "Ver Mais e Ver Antes",
        edition: "GLS 2018–2019",
        duration: "25:35",
        bio: "John Maxwell é considerado o maior especialista em liderança do mundo, autor de mais de 100 livros com mais de 30 milhões de cópias vendidas, incluindo “As 21 Irrefutáveis Leis da Liderança”. Fundador da John Maxwell Company e da EQUIP Leadership, já treinou mais de 6 milhões de líderes em todos os países do mundo. Aos 71 anos na época desta palestra, Maxwell falou com a autoridade de quem nunca parou de crescer.",
        temaCentral: "Ver mais e ver antes não é um dom reservado a poucos — é uma capacidade que pode ser desenvolvida intencionalmente por qualquer líder disposto a cultivar mentalidade abundante, aprendizado contínuo e uma visão maior do que sua circunstância atual.",
        sinopse: [
            "John Maxwell apresentou cinco princípios que ele pratica aos 71 anos para continuar crescendo e enxergando além do presente. O primeiro é a mentalidade abundante: enquanto a mentalidade de escassez vê um mundo de recursos limitados e competição zero-sum, a abundante enxerga possibilidades em expansão. O segundo é o processo de ação correto: não apenas testar e falhar, mas testar → falhar → aprender → melhorar → tentar novamente. O “aprender” no meio é o que separa quem cresce de quem apenas persiste.",
            "O terceiro princípio é colocar-se intencionalmente na companhia de pessoas inspiradoras. Maxwell contou da reunião de 50 anos do ensino médio onde todos falavam de remédios e doenças — e sua decisão consciente de frequentar ambientes onde as conversas expandem horizontes em vez de estreitá-los. O quarto é crescer intencionalmente todos os dias: citando Earl Nightingale, uma hora de estudo por dia em uma área específica por cinco anos torna qualquer pessoa uma das mais bem informadas do mundo naquele tema.",
            "O quinto princípio é ter sempre uma lacuna de visão — o espaço entre o que você está fazendo e o que poderia estar fazendo. Maxwell citou o pai aos 96 anos: “As maiores possibilidades da minha vida estão à minha frente.” A lacuna de visão é preenchida por duas práticas espirituais: orar pelas pessoas certas e pedir a Deus o que está além da sua capacidade. Efésios 3:20 é a promessa subjacente: Deus é capaz de fazer infinitamente mais do que tudo que pedimos ou imaginamos.",
        ],
        softSkills: ["Mentalidade de crescimento", "Aprendizado contínuo", "Visão", "Perseverança", "Curiosidade", "Humildade", "Fé estratégica"],
        palavrasChave: ["visão", "crescimento intencional", "mentalidade abundante", "aprendizado", "liderança", "propósito", "lacuna de visão", "fé", "desenvolvimento"],
        takeaways: [
            "Mentalidade abundante não é otimismo ingênuo — é a crença fundamentada de que o mundo tem mais possibilidades do que limitações.",
            "O processo correto de ação é: testar → falhar → aprender → melhorar → tentar novamente. O “aprender” é o passo que a maioria pula.",
            "Você se torna quem frequenta: colocar-se intencionalmente perto de pessoas inspiradoras é uma decisão estratégica de liderança.",
            "Uma hora de estudo por dia em uma área específica por cinco anos torna qualquer pessoa referência mundial naquele tema.",
            "A lacuna de visão — o espaço entre o que você faz e o que poderia fazer — é onde o crescimento futuro está esperando.",
            "O pai de Maxwell aos 96 anos: “As maiores possibilidades da minha vida ainda estão à minha frente.” Visão não tem prazo de validade.",
            "O teto do seu potencial é o chão do que Deus pode fazer: Efésios 3:20 é o fundamento da liderança com fé.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    { label: "1.4 Desenvolvimento e crescimento intencional", percent: 96, descricao: "Os cinco princípios de Maxwell são um sistema completo de desenvolvimento pessoal intencional, testado ao longo de décadas." },
                    { label: "1.1 Autoconhecimento e identidade do líder", percent: 84, descricao: "A revisão do seu próprio livro 25 anos depois — mudando 89% do conteúdo — é o exemplo definitivo de autoavaliação honesta." },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    { label: "7.3 Visão de longo prazo e construção de legado", percent: 93, descricao: "O conceito de lacuna de visão e a história do pai de Maxwell constroem um argumento poderoso para liderança com perspectiva de décadas." },
                    { label: "7.1 Propósito como motor de liderança", percent: 87, descricao: "A integração de fé, oração e crescimento intencional posiciona o propósito como combustível — não como decoração — da trajetória de liderança." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Didática e inspiracional" },
            { label: "Estilo", value: "Princípios estruturados com histórias pessoais e referências espirituais" },
            { label: "Aplicabilidade", value: "Alta para qualquer líder em qualquer estágio da carreira" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

    // Juliet Funt — "A vantagem da simplicidade" (GLS 2018-2019)
    gls18_8: {
        speaker: "Juliet Funt",
        speakerPhoto: "/speakers/juliet-funt.png",
        title: "A Vantagem da Simplicidade",
        edition: "GLS 2018–2019",
        duration: "26:03",
        bio: "Juliet Funt é CEO da WhiteSpace at Work e especialista em produtividade e simplicidade organizacional. Filha do comediante Allen Funt, criador do programa Candid Camera, Juliet aplica o mesmo espírito de observação aguçada ao mundo corporativo — revelando como o excesso de atividade, reuniões e tecnologia está destruindo a capacidade das organizações de pensar com clareza. Seus clientes incluem Nike, Cisco, Abbvie e dezenas de outras Fortune 500.",
        temaCentral: "A normalidade é a maior ameaça à simplicidade: quando aceitamos o frenético como padrão, deixamos de questionar o desperdício que está destruindo a capacidade das nossas organizações de realizar o que realmente importa.",
        sinopse: [
            "Juliet Funt abriu com uma história da Cuba dos anos 1980: o chuveiro elétrico improvisado chamado “fazedor de viúvas” — uma instalação obviamente perigosa que as pessoas usavam porque era tudo que tinham e porque era normal. A normalidade, ela argumentou, é exatamente o mecanismo pelo qual aceitamos o que deveria ser inaceitável. E no mundo corporativo moderno, o equivalente ao chuveiro mortífero é o ritmo frenético de emails, reuniões intermináveis, relatórios desnecessários e smartphones que nunca se calam.",
            "As organizações estão pagando caro por pessoas inteligentes para fazer trabalho desnecessário — e ninguém está questionando isso porque parece normal. A cultura do “busy” (ocupado) tornou-se um sinal de status em vez de um alarme. Quando não há espaço para pensar, as melhores ideias nunca surgem. Os melhores problemas nunca são examinados. As decisões mais importantes são tomadas com informações incompletas porque não havia tempo para processar.",
            "A filosofia de White Space de Juliet propõe que espaços intencionais de pausa — momentos sem agenda, sem telas, sem demandas — não são luxo, são infraestrutura cognitiva. Construir uma cultura genuína de simplicidade exige coragem organizacional: questionar reuniões, eliminar relatórios sem impacto e proteger o tempo de pensamento como recurso estratégico. A naturalidade do frenético só muda quando líderes decidem que a normalidade precisa ser desafiada.",
        ],
        softSkills: ["Foco", "Clareza", "Simplificação", "Tomada de decisão", "Gestão de atenção", "Coragem organizacional", "Pensamento crítico"],
        palavrasChave: ["simplicidade", "produtividade", "espaço em branco", "foco", "cultura organizacional", "eficiência", "reuniões", "liderança", "clareza"],
        takeaways: [
            "A normalidade é o mecanismo pelo qual aceitamos o que deveria ser inaceitável: o frenético parece normal porque é comum.",
            "Organizações estão pagando pessoas inteligentes para fazer trabalho desnecessário — e ninguém questiona porque virou padrão.",
            "A cultura do “busy” se tornou sinal de status: quanto mais ocupado, mais importante — mesmo que o ocupado seja improdutivo.",
            "Sem espaços de pausa intencional, as melhores ideias nunca emergem e as decisões mais importantes são tomadas às cegas.",
            "White Space — espaço em branco — não é ausência de trabalho: é a infraestrutura cognitiva que torna o trabalho valioso possível.",
            "Simplificar exige coragem: questionar reuniões, eliminar relatórios e proteger tempo de pensamento vai contra a inércia cultural.",
            "A vantagem competitiva do futuro pertencerá a organizações que protegerem a capacidade humana de pensar com profundidade.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    { label: "4.3 Priorização e foco estratégico", percent: 93, descricao: "A palestra é uma análise profunda de como a ausência de priorização clara gera o paradoxo de estar ocupado sem avançar no que importa." },
                    { label: "4.1 Tomada de decisão sob pressão e ambiguidade", percent: 82, descricao: "A falta de espaço para pensar é identificada como causa direta de decisões tomadas com informações incompletas em contexto de pressão." },
                ],
            },
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    { label: "5.4 Gestão da atenção e do foco em ambientes de distração", percent: 95, descricao: "Juliet articula com precisão como smartphones, emails e reuniões desnecessárias destroem a atenção que toda inovação real exige." },
                    { label: "5.1 Liderança em tempos de mudança acelerada", percent: 80, descricao: "A proposta de desacelerar intencionalmente em um mundo acelerado é em si uma postura de liderança contracultural e estratégica." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Provocativa e prática" },
            { label: "Estilo", value: "Humor observacional + análise organizacional + filosofia de trabalho" },
            { label: "Aplicabilidade", value: "Alta para líderes de organizações com cultura de excesso e para gestores de equipes de alta demanda" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

    // Nthabiseng Legoete — "O difícil trabalho de impulsionar a visão" (GLS 2018-2019)
    gls18_9: {
        speaker: "Nthabiseng Legoete",
        speakerPhoto: "/speakers/nthabiseng-legoete.png",
        title: "O Difícil Trabalho de Impulsionar a Visão",
        edition: "GLS 2018–2019",
        duration: "20:07",
        bio: "Nthabiseng Legoete é médica e empreendedora social sul-africana, fundadora da Quali Health, uma rede de clínicas comunitárias que democratiza o acesso à saúde de qualidade em comunidades de baixa renda na África do Sul. Sua jornada combina formação médica de alto nível com visão empresarial e fé profunda, tornando-a uma das vozes mais inspiradoras sobre liderança com propósito no continente africano.",
        temaCentral: "Impulsionar uma visão grande não é um processo linear de entusiasmo crescente — é um trabalho difícil que exige foco inabalável no “o quê” e no “por quê”, flexibilidade radical no “como” e fé que sustenta quando nada mais sustenta.",
        sinopse: [
            "Nthabiseng Legoete sonhou construir 100 instalações de saúde nacionais para depois expandir globalmente — democratizando o acesso à saúde de qualidade. O sonho era claro. O caminho, não. A primeira lição aprendida foi sobre foco: manter o “o quê” (o que você está construindo) e o “por quê” (para quem e para quê) absolutamente fixos, enquanto o “como” precisa ser revisado continuamente. Quando pessoas-chave deixaram a organização e o modelo inicial não funcionou como previsto, ela quase desistiu — até perceber que a visão não pode depender de uma pessoa, nem de um método.",
            "A segunda lição foi sobre enfrentar derrotas. Legoete foi direta: desafios não são surpresas do caminho — são parte esperada e necessária do processo. Em 2018, ela precisou fazer uma reestruturação dolorosa: cortar pessoas, reorganizar operações, recomeçar de um patamar mais baixo. Mas aqui está o que ela aprendeu: sem dor, não há grandes histórias. Sem grandes histórias, não há grandes organizações. Sem grandes organizações, não há grandes líderes. A dor não é um defeito da jornada — é o material de construção do legado.",
            "A terceira e mais profunda lição foi sobre fé. Para Nthabiseng, a fé foi simultaneamente o motor que a impulsionava e a âncora que a segurava quando tudo ao redor oscilava. Não como evasão da realidade, mas como fundamento que permitia continuar operando quando as circunstâncias externas não justificavam a continuidade. “Tudo trabalha e conspira para o bem” não é ingenuidade — é a convicção operacional que sustenta líderes de visão quando o caminho ainda não está visível.",
        ],
        softSkills: ["Resiliência", "Foco", "Fé", "Perseverança", "Adaptabilidade", "Liderança com propósito", "Coragem de recomeçar"],
        palavrasChave: ["visão", "propósito", "saúde", "empreendedorismo social", "fé", "resiliência", "liderança africana", "impacto social", "perseverança"],
        takeaways: [
            "O “o quê” e o “por quê” da sua visão devem ser inabaláveis; o “como” precisa ser revisado com liberdade quando o caminho exige.",
            "Uma visão não pode depender de uma pessoa: quando a visão é genuína, ela sobrevive à saída de qualquer indivíduo.",
            "Desafios não são surpresas do caminho — são parte esperada e necessária de qualquer jornada de impacto real.",
            "Sem dor, não há grandes histórias; sem grandes histórias, não há grandes organizações; sem grandes organizações, não há grandes líderes.",
            "Reestruturações dolorosas não são sinais de fracasso — são o processo de construir algo mais sólido sobre base mais verdadeira.",
            "Fé é simultaneamente motor e âncora: ela impulsiona quando não há razão externa para continuar e sustenta quando tudo oscila.",
            "”Tudo trabalha e conspira para o bem” é uma convicção operacional — não ingenuidade — que sustenta líderes de visão na longa jornada.",
        ],
        categorias: [
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    { label: "7.1 Propósito como motor de liderança", percent: 96, descricao: "A trajetória da Quali Health é o exemplo mais vivo de como propósito claro sustenta um líder através de múltiplas crises e recomeços." },
                    { label: "7.2 Impacto social e responsabilidade coletiva", percent: 91, descricao: "Democratizar o acesso à saúde em comunidades vulneráveis é o caso de impacto social mais concreto apresentado no GLS 2018-19." },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    { label: "6.1 Resiliência e gestão de adversidades", percent: 93, descricao: "A reestruturação de 2018 e a disposição de recomeçar são demonstrações práticas de resiliência organizacional e pessoal." },
                    { label: "6.3 Propósito como ancora em tempos de crise", percent: 90, descricao: "A fé descrita como âncora operacional ilustra como propósito transcendente sustenta decisões difíceis quando a lógica externa falharia." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Testemunhal e inspiracional" },
            { label: "Estilo", value: "Narrativa pessoal de empreendedorismo social com princípios destilados" },
            { label: "Aplicabilidade", value: "Alta para empreendedores sociais, líderes em crise e fundadores de organizações de impacto" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

    // Rasmus Ankersen — "Como manter o sucesso" (GLS 2018-2019)
    gls18_10: {
        speaker: "Rasmus Ankersen",
        speakerPhoto: "/speakers/rasmus-ankersen.png",
        title: "Como Manter o Sucesso",
        edition: "GLS 2018–2019",
        duration: "34:09",
        bio: "Rasmus Ankersen é escritor, empreendedor dinamarquês e um dos mais inovadores executivos do futebol europeu — presidente do FC Midtjylland da Dinamarca e diretor do Brentford FC da Inglaterra, onde pioneirou o uso de análise de dados avançada (Big Data) no esporte. Autor do livro “Hunger in Paradise”, Rasmus fala sobre como organizações de alto desempenho evitam a complacência e mantêm o crescimento após alcançar o sucesso.",
        temaCentral: "O sucesso é o maior inimigo do sucesso: organizações que chegam ao topo enfrentam forças psicológicas que as tornam vulneráveis exatamente no momento em que parecem mais fortes. A longevidade exige que líderes aprendam a lutar contra si mesmos.",
        sinopse: [
            "Rasmus Ankersen abriu com um paradoxo visual: um gráfico mostrando a expectativa de vida humana crescendo enquanto a expectativa de vida corporativa cai vertiginosamente. A Nokia 3310 — símbolo de domínio global com 50% de participação de mercado — perdeu 47 pontos percentuais em menos de cinco anos. Não por incompetência operacional, mas por um fenômeno que Rasmus chama de “viés de resultado”: quando os resultados são bons, tendemos a assumir que as decisões que os produziram também foram boas — mesmo quando foram apenas sortudas ou circunstanciais.",
            "O caso do Newcastle United ilustra como o sucesso imediato produz complacência estratégica: terminar em 5° lugar na Premier League levou a gestão a relaxar processos que eram a causa do desempenho, não o resultado dele. A organização começou a administrar o sucesso em vez de continuar fazendo o que havia produzido o sucesso. Para Ankersen, organizações de alto desempenho sustentável não lutam contra seus competidores — lutam contra sua própria psicologia.",
            "O insight mais poderoso da palestra vem de uma pergunta do CEO da Lego: “Em que negócio realmente estamos?” A Lego estava competindo com a Mega Bloks quando seu verdadeiro competidor era o iPhone no quarto das crianças. A Coca-Cola se redefiniu da indústria de refrigerantes para a indústria de líquidos — o que a levou a criar um produto de água filtrada. Líderes que conseguem “tornar o mundo maior e a si mesmos menores” — abdicando da identidade que os trouxe ao sucesso para encontrar a identidade que os levará ao próximo nível — são os que mantêm o sucesso.",
        ],
        softSkills: ["Pensamento crítico", "Humildade", "Adaptabilidade", "Consciência estratégica", "Foco na causa", "Questionamento de premissas", "Visão sistêmica"],
        palavrasChave: ["sucesso sustentável", "complacência", "viés de resultado", "estratégia", "liderança", "inovação", "identidade organizacional", "big data", "reinvenção"],
        takeaways: [
            "O sucesso é o maior inimigo do sucesso: ele cria as condições psicológicas que tornam organizações vulneráveis no seu pico.",
            "Viés de resultado: bons resultados nos fazem assumir que as decisões que os produziram também foram boas — mesmo quando foram sortudas.",
            "Organizações de alto desempenho não lutam contra competidores — lutam contra sua própria psicologia de complacência.",
            "Administrar o sucesso em vez de continuar fazendo o que o produziu é o erro mais comum de organizações que chegaram ao topo.",
            "A pergunta mais estratégica para qualquer líder: “Em que negócio realmente estamos?” — porque a resposta define quem são os verdadeiros competidores.",
            "Tornar o mundo maior e a si mesmo menor — abandonar a identidade que trouxe sucesso — é a condição para o próximo nível.",
            "A longevidade organizacional exige que líderes criem sistemas que funcionem apesar da psicologia humana, não por causa dela.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    { label: "4.2 Pensamento estratégico e visão de longo prazo", percent: 94, descricao: "A análise do paradoxo longevidade humana vs. corporativa e os casos Nokia e Lego constroem um framework rigoroso de estratégia de longo prazo." },
                    { label: "4.1 Tomada de decisão sob pressão e ambiguidade", percent: 86, descricao: "O viés de resultado é identificado como o principal distorsor de decisões em organizações bem-sucedidas — onde a ambiguidade é mascarada pelo sucesso." },
                ],
            },
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    { label: "5.2 Disrupção e reinvenção organizacional", percent: 92, descricao: "Os exemplos de Coca-Cola, Lego e Nokia ilustram os três desfechos possíveis diante da necessidade de reinvenção: sucesso, resgate e colapso." },
                    { label: "5.1 Liderança em tempos de mudança acelerada", percent: 89, descricao: "Rasmus conecta a aceleração das mudanças com a queda da expectativa de vida corporativa, exigindo que líderes mudem antes de precisar mudar." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Analítica com dados e casos reais" },
            { label: "Estilo", value: "Framework conceitual + análise de casos esportivos e corporativos + insights provocativos" },
            { label: "Aplicabilidade", value: "Alta para CEOs, conselhos de administração e líderes de organizações em momento de sucesso ou transição" },
            { label: "Intensidade conceitual", value: "Alta" },
        ],
    },

    // Sheila Heen — "Navegando em conversas difíceis" (GLS 2018-2019)
    gls18_11: {
        speaker: "Sheila Heen",
        speakerPhoto: "/speakers/sheila-heen.png",
        title: "Navegando em Conversas Difíceis",
        edition: "GLS 2018–2019",
        duration: "38:48",
        bio: "Sheila Heen é professora da Harvard Law School e membro do Harvard Negotiation Project há mais de 20 anos. Coautora dos livros “Difficult Conversations: How to Discuss What Matters Most” e “Thanks for the Feedback”, ela pesquisa e ensina como pessoas e organizações navegam conversas de alta tensão — seja em negociações internacionais, conflitos familiares ou feedbacks difíceis no trabalho.",
        temaCentral: "Toda conversa difícil carrega três camadas simultâneas — a história do que aconteceu, a camada emocional e a camada de identidade. Líderes que aprendem a navegar essas três camadas com habilidade transformam conflito em conexão.",
        sinopse: [
            "Sheila Heen começou com uma observação que ressoa com qualquer líder: “Toda conversa difícil me diz duas coisas — que você se importa com o que está fazendo e que se importa com a pessoa com quem está falando.” O conflito não é o problema; a incapacidade de navegar nele com habilidade é. Para tornar a estrutura compreensível, ela usou o caso de Monisha e Paul — dois gestores em conflito sobre orçamento de corridas — para revelar que toda conversa difícil tem, simultaneamente, três camadas em operação.",
            "A primeira camada é a história: quem está certo, de quem é a culpa, quais eram as intenções. A segunda é a camada emocional: o que cada pessoa sente e o quanto esses sentimentos distorcem a percepção. A terceira — e mais invisível — é a camada de identidade: o que esta conversa diz sobre mim? Sou competente? Sou uma boa pessoa? Sou digno de confiança? Quando a identidade está em jogo, as pessoas param de ouvir e começam a se defender.",
            "O conceito mais poderoso da palestra é a voz interna — o comentário contínuo que corre em paralelo a qualquer conversa, interpretando, julgando e reagindo. Quando não reconhecemos essa voz, ela governa nossa comunicação sem que percebamos. A habilidade de “olhar além do que estamos realmente dizendo um ao outro” — de perceber a conversa que está acontecendo abaixo da conversa visível — é o que separa comunicadores habilidosos de comunicadores reativos. Líderes que desenvolvem essa habilidade transformam conflitos em conversas construtivas.",
        ],
        softSkills: ["Comunicação empática", "Escuta ativa", "Inteligência emocional", "Autoconhecimento", "Gestão de conflitos", "Presença", "Regulação emocional"],
        palavrasChave: ["conversas difíceis", "feedback", "conflito", "comunicação", "harvard", "identidade", "emoções", "liderança", "negociação"],
        takeaways: [
            "Toda conversa difícil prova que você se importa: com o trabalho e com a pessoa — o conflito é sinal de relacionamento, não de falha.",
            "Toda conversa difícil tem três camadas simultâneas: a história (o que aconteceu), as emoções (o que sinto) e a identidade (o que isso diz sobre mim).",
            "A camada de identidade é a mais invisível e a mais poderosa: quando nossa autoimagem está em risco, paramos de ouvir e começamos a nos defender.",
            "A voz interna — o comentário contínuo que interpreta cada interação — governa nossa comunicação quando não a reconhecemos conscientemente.",
            "Líderes habilidosos aprendem a ver a conversa que está acontecendo abaixo da conversa visível — e respondem àquela, não a esta.",
            "Atribuir más intenções é o erro mais comum em conversas difíceis: na maioria dos casos, ambos os lados têm razões legítimas para sua perspectiva.",
            "A habilidade de navegar conversas difíceis não é dom — é uma competência desenvolvível que transforma conflito em conexão e confiança.",
        ],
        categorias: [
            {
                titulo: "Categoria 3 — Comunicação e Influência",
                cor: "#FF6B35",
                criterios: [
                    { label: "3.2 Conversas difíceis e feedback eficaz", percent: 98, descricao: "Esta é a palestra mais específica e tecnicamente aprofundada sobre o tema de todo o GLS 2018-19, com framework completo e casos práticos." },
                    { label: "3.3 Escuta ativa e comunicação não-verbal", percent: 90, descricao: "O conceito de voz interna e a habilidade de ver além do que está sendo dito são formas avançadas de escuta ativa e presença comunicativa." },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    { label: "6.2 Inteligência emocional e autorregulação", percent: 91, descricao: "O reconhecimento da voz interna e da camada emocional como elementos conscientes é o núcleo de qualquer prática de inteligência emocional." },
                    { label: "6.4 Relacionamentos saudáveis e gestão de conflitos", percent: 95, descricao: "Sheila apresenta as conversas difíceis não como ameaça aos relacionamentos, mas como o caminho para relacionamentos mais profundos e honestos." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Educacional com base em pesquisa e casos práticos" },
            { label: "Estilo", value: "Framework analítico + casos ilustrativos + humor acadêmico" },
            { label: "Aplicabilidade", value: "Alta para líderes, gestores de RH, pastores e qualquer pessoa em posição que exige conversas difíceis regulares" },
            { label: "Intensidade conceitual", value: "Alta" },
        ],
    },

    // Strive Masiyiwa — "Filantropia e Inovação" (GLS 2018-2019)
    gls18_12: {
        speaker: "Strive Masiyiwa",
        speakerPhoto: "/speakers/strive-masiyiwa.png",
        title: "Filantropia e Inovação",
        edition: "GLS 2018–2019",
        duration: "44:51",
        bio: "Strive Masiyiwa é o fundador e CEO do Econet Wireless, conglomerado de telecomunicações presente em cerca de 25 países, e um dos empresários mais influentes da África. Nascido no Zimbabwe, ele travou uma batalha judicial de cinco anos contra o governo de Mugabe para quebrar o monopólio estatal das telecomunicações. Comprometeu a maior parte de sua fortuna pessoal com filantropia, financiando a educação de mais de 250.000 jovens africanos através da Higherlife Foundation.",
        temaCentral: "O verdadeiro empreendedorismo não começa com uma oportunidade de mercado — começa com a identificação de uma necessidade humana genuína. E o que você perde por servir ao Reino de Deus, Ele retorna centuplado.",
        sinopse: [
            "Em formato de entrevista com o Bispo TD Jakes, Strive Masiyiwa revelou a trajetória improvável de um engenheiro de telecomunicações que voltou ao Zimbabwe em 1990 e encontrou um país onde 75% da população nunca havia ouvido uma linha telefônica tocar. Em vez de aceitar o monopólio estatal como realidade imutável, ele travou uma batalha constitucional de cinco anos contra o regime de Mugabe. Durante esse período, a Bíblia e a Constituição do Zimbabwe eram os únicos documentos sobre sua mesa. Policiais o prendiam nas sextas-feiras; ele pregava para eles na cela.",
            "O marco espiritual de toda a jornada foi sua conversão ao cristianismo em junho de 1994 — na véspera do lançamento do negócio. A fé não foi um adorno da história; foi o motor que o sustentou durante cinco anos de batalha judicial, pressão financeira extrema e isolamento social. O princípio que guiou sua filosofia empresarial veio do missionário TL Osborn: “Se você quer ter sucesso, identifique uma necessidade humana e busque resolvê-la.” Não uma oportunidade de mercado — uma necessidade.",
            "A dimensão filantrópica da palestra é de proporções extraordinárias: 250.000 órfãos amparados, 40.000 dos estudantes mais brilhantes do continente enviados às melhores universidades do mundo, 353 deles nas universidades da Ivy League apenas no ano da palestra. Para Masiyiwa, isso não é caridade — é investimento. E a promessa de Marcos 10:29 é sua teoria de retorno: “Tudo que você perde por Mim e pelo Meu evangelho, Eu retornarei centuplado.” A filantropia não esgotou sua riqueza — multiplicou-a.",
        ],
        softSkills: ["Fé", "Perseverança", "Propósito", "Generosidade", "Visão de longo prazo", "Coragem convicta", "Liderança servidora"],
        palavrasChave: ["filantropia", "inovação", "áfrica", "telecomunicações", "fé", "empreendedorismo", "propósito", "impacto social", "econet"],
        takeaways: [
            "Empreendedorismo verdadeiro começa com uma necessidade humana genuína, não com uma oportunidade de mercado.",
            "Uma batalha de cinco anos contra um governo autoritário foi sustentada por fé, Bíblia e Constituição — nada mais sobre a mesa.",
            "Valores são universais: Masiyiwa operou em 50-60 nacionalidades com os mesmos princípios — o que une pessoas é mais profundo que o que as divide.",
            "O maior erro de negócios é pensar que seu cliente é você: Oprah articulou o que Masiyiwa viveu ao conectar telecomunicações a quem nunca ouviu um telefone.",
            "Filantropia não é caridade — é investimento: 250.000 jovens educados são uma força de transformação continental.",
            "Sempre seja o estudante, nunca o professor: assumir que você não sabe é o que mantém líderes relevantes em qualquer contexto cultural.",
            "Marcos 10:29 como teoria de retorno: o que você perde por servir ao Reino, Deus retorna centuplado — Masiyiwa viveu isso literalmente.",
        ],
        categorias: [
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    { label: "7.2 Impacto social e responsabilidade coletiva", percent: 97, descricao: "A escala da filantropia de Masiyiwa — 250.000 órfãos, 40.000 universitários, 353 na Ivy League — é o caso de impacto individual mais impressionante do evento." },
                    { label: "7.3 Visão de longo prazo e construção de legado", percent: 93, descricao: "A perspectiva de transformar a África através de telecomunicações e educação é uma visão de legado continental que transcende gerações." },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    { label: "6.1 Resiliência e gestão de adversidades", percent: 94, descricao: "Cinco anos de batalha judicial, prisões periódicas e pressão extrema — e a persistência inabalável — definem o padrão mais alto de resiliência do GLS 2018-19." },
                    { label: "6.3 Propósito como ancora em tempos de crise", percent: 92, descricao: "A fé convertida em junho de 1994 foi o único sustento identificável durante os anos mais difíceis da jornada de Masiyiwa." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Entrevista inspiracional com empreendedor de impacto global" },
            { label: "Estilo", value: "Diálogo revelador com histórias de risco extremo, fé e filantropia em escala continental" },
            { label: "Aplicabilidade", value: "Alta para líderes com visão de impacto social e empreendedores em mercados emergentes" },
            { label: "Intensidade conceitual", value: "Média com alta carga de propósito" },
        ],
    },

    // TD Jakes — "Planar!" (GLS 2018-2019)
    gls18_13: {
        speaker: "TD Jakes",
        speakerPhoto: "/speakers/td-jakes.png",
        title: "Planar!",
        edition: "GLS 2018–2019",
        duration: "16:17",
        bio: "TD Jakes — Thomas Dexter Jakes — é Bispo, autor, cineasta e CEO da TDJ Enterprises, com sede em Dallas, Texas. Fundador da Potter's House, uma das maiores megaigrejas dos EUA com mais de 30.000 membros, ele é considerado um dos pregadores mais influentes do mundo. Filho de um zelador e uma professora de West Virginia, construiu um império de mídia, entretenimento e impacto social que inclui filmes, livros e iniciativas comunitárias.",
        temaCentral: "Visões grandes demais para serem críveis são exatamente o tipo certo de visão: elas demandam mais do que você tem, atraem ajuda que você não esperava e levam você a um destino que nenhum caminho conhecido poderia alcançar.",
        sinopse: [
            "TD Jakes abriu com uma meditação sobre a natureza das visões: elas devem ser atormentadoras, irritantes e frustrantes. “Se você tem uma visão na qual todos acreditam, ela é pequena demais para você.” O tipo certo de visão é aquela que você precisa escolher com cuidado para quem conta — não porque é errada, mas porque é grande demais para ser crível antes de se tornar real. A história dos irmãos Wright é o eixo da narrativa: dois irmãos que consertavam bicicletas em Dayton, Ohio, olharam para o céu e disseram “meu lugar é lá em cima” — e o mundo nunca mais foi o mesmo.",
            "A história do seu próprio pai — um zelador negro de West Virginia que em 1960, com um esfregão e um balde, declarou que abriria uma empresa — é o coração pessoal da palestra. Parecia absolutamente ridículo. Cinco anos depois, 52 funcionários, 10 caminhões e contratos em todo o estado. “Aprendi a acreditar em coisas malucas”, disse Jakes. “Se você não acredita em nada maluco, você não tem energia suficiente para se motivar a descobrir o que você pode ser.” A visão precisa ser maior do que a provisão disponível — sempre.",
            "O insight sobre o “vento favorável” é a contribuição estratégica mais original da palestra: os irmãos Wright levaram o avião de Dayton para Kitty Hawk porque o vento estava favorável. Você pode ter a ideia certa no lugar errado. Fazer a coisa certa na hora errada não produz sucesso. Mas quando você tem a ideia certa com o vento favorável — como TD Jakes teve com Tyler Perry e a peça “Mulher, Estás Livre!”, que levou a um contrato com a Sony e 15 anos de filmes —  você pode abrir as asas e absolutamente, enfaticamente voar.",
        ],
        softSkills: ["Visão audaciosa", "Fé", "Perseverança", "Criatividade", "Adaptabilidade", "Leitura de contexto", "Liderança inspiradora"],
        palavrasChave: ["visão", "sonho", "fé", "vento favorável", "timing", "empreendedorismo", "liderança", "criatividade", "propósito"],
        takeaways: [
            "Se todos acreditam na sua visão, ela é pequena demais: o tipo certo de visão é aquela que você precisa escolher com cuidado para quem conta.",
            "Visões devem ser atormentadoras, irritantes e frustrantes — essa tensão é o combustível que mantém o líder em movimento.",
            "Acreditar em “coisas malucas” não é ingenuidade — é a energia necessária para descobrir o que você é capaz de construir.",
            "Uma visão maior do que sua provisão atrai ajuda que você não esperava: quando a carga é grande demais, outras formigas aparecem.",
            "Onde você começa não importa — o zelador com esfregão e balde pode construir uma empresa com 52 funcionários em cinco anos.",
            "O vento favorável é real: fazer a coisa certa na hora errada não produz sucesso — leia o contexto antes de decolar.",
            "A parceria certa no momento certo muda os próximos 15 anos da sua vida: você faz mais junto do que separado.",
        ],
        categorias: [
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    { label: "7.3 Visão de longo prazo e construção de legado", percent: 96, descricao: "A palestra é uma celebração da visão audaciosa — do zelador de West Virginia aos irmãos Wright — como o único motor de legados que transcendem gerações." },
                    { label: "7.1 Propósito como motor de liderança", percent: 92, descricao: "TD Jakes conecta propósito com timing estratégico (vento favorável) — o propósito não basta; ele precisa encontrar o momento certo para decolar." },
                ],
            },
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    { label: "1.3 Coragem e autenticidade", percent: 90, descricao: "Acreditar em “coisas malucas” quando todo o contexto diz que é impossível é a forma mais pura de coragem que TD Jakes descreve e viveu." },
                    { label: "1.4 Desenvolvimento e crescimento intencional", percent: 84, descricao: "A trajetória de peças gospel com quase falência até contrato com a Sony demonstra como crescimento intencional + timing correto = transformação." },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional e profética" },
            { label: "Estilo", value: "Pregação narrativa com storytelling pessoal, metáforas históricas e chamada à ação" },
            { label: "Aplicabilidade", value: "Alta para empreendedores, líderes em estágio inicial e qualquer pessoa com visão maior do que seus recursos atuais" },
            { label: "Intensidade conceitual", value: "Média com alta potência motivacional" },
        ],
    },


    // ===== gls19-20 =====
// Chris Voss — "Um-a-um com Paula Faris" (GLS 2019–2020)
gls19_1: {
    speaker: "Chris Voss",
    speakerPhoto: "/speakers/chris-voss.png",
    title: "Um-a-um com Paula Faris",
    edition: "GLS 2019–2020",
    duration: "30:57",
    bio: "Chris Voss fundou o Black Swan Group, uma firma especializada em treinamento e consultoria para empresas da Fortune 500 em negociações complexas de alto risco. Veterano de 24 anos do FBI, ele atuou como principal negociador de sequestros internacionais e foi treinado pelo FBI, Scotland Yard e Harvard Law School. Em seu livro best-seller 'Negocie como se sua vida dependesse disso', Voss decompõe estratégias de negociação testadas em campo para que qualquer pessoa possa aplicá-las no ambiente de trabalho, nos negócios e na vida pessoal.",
    temaCentral: "A empatia tática e as técnicas de negociação do FBI transformam qualquer interação cotidiana em uma oportunidade de colaboração e acordo. Perguntas estratégicas e escuta ativa valem mais do que argumentos lógicos.",
    sinopse: [
        "Chris Voss, em entrevista conduzida por Paula Faris, revela que todo mundo participa de cinco a sete negociações por dia sem perceber — de uma conversa com o chefe a um pedido a um filho. O princípio central de sua abordagem é a empatia tática: compreender profundamente de onde o outro lado vem e articular esse entendimento antes de apresentar qualquer pedido. Técnicas como o espelhamento (repetir as últimas palavras do interlocutor) e o uso de pausas estratégicas criam rapport imediato e derrubam resistências sem confronto.",
        "Voss apresenta distinções práticas entre respostas que fecham e respostas que abrem conversas. Buscar o 'está certo' — em vez do 'você está certo' — sinaliza que o outro lado internalizou genuinamente o ponto de vista; usar perguntas iniciadas por 'como' em vez de 'por que' gera colaboração em vez de defensividade. Ele demonstra também que provocar conscientemente o 'não' do interlocutor vale tanto quanto cinco 'sins', pois o 'não' cria uma sensação de controle que libera a outra pessoa para ouvir. Ser agradável e descontraído aumenta em seis vezes as chances de fechar um acordo.",
        "Para o contexto corporativo, Voss propõe que ao negociar um aumento ou promoção, a abordagem mais eficaz não é pedir diretamente, mas perguntar: 'Como posso me envolver em projetos essenciais para o futuro estratégico da empresa?' Essa pergunta abre espaço para o gestor co-criar o caminho, em vez de rejeitar uma demanda. Conclui afirmando que a curiosidade genuína é o antídoto mais rápido para o medo, e que negociação, bem usada, é uma ferramenta de colaboração — não de manipulação.",
    ],
    softSkills: [
        "Escuta ativa e empática",
        "Comunicação estratégica",
        "Inteligência emocional em conflitos",
        "Formulação de perguntas poderosas",
        "Gestão da tensão interpessoal",
        "Persuasão sem coerção",
        "Presença e autocontrole sob pressão",
    ],
    palavrasChave: [
        "negociação",
        "empatia tática",
        "escuta ativa",
        "espelhamento",
        "perguntas estratégicas",
        "rejeição consciente",
        "rapport",
        "comunicação não violenta",
        "influência",
        "fbi",
    ],
    takeaways: [
        "Todo mundo negocia de 5 a 7 vezes por dia — reconhecer isso é o primeiro passo para negociar melhor.",
        "Empatia tática significa articular o ponto de vista do outro antes de apresentar o seu próprio.",
        "O espelhamento — repetir as últimas palavras do interlocutor — cria conexão imediata e incentiva o outro a elaborar.",
        "Buscar o 'está certo' em vez do 'você está certo' confirma que a outra pessoa internalizou genuinamente a perspectiva.",
        "Provocar o 'não' consciente libera o interlocutor para ouvir, pois cria sensação de controle e segurança.",
        "Perguntas com 'como' geram colaboração; perguntas com 'por que' geram defensividade.",
        "A curiosidade genuína é o antídoto mais rápido para o medo em qualquer conversa difícil.",
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                { label: "3.1 Técnicas de persuasão e negociação", percent: 95, descricao: "A palestra é um manual completo de ferramentas de negociação baseadas em empatia e comunicação estratégica, direto do campo de atuação do FBI." },
                { label: "3.2 Escuta e leitura do interlocutor", percent: 90, descricao: "O espelhamento, as pausas e a busca pelo 'está certo' revelam técnicas sofisticadas de leitura e resposta ao estado emocional do outro." },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.1 Autocontrole e presença em situações de pressão", percent: 82, descricao: "Voss demonstra como a calma, a curiosidade e o controle emocional são pré-requisitos para negociar eficazmente em cenários de alta tensão." },
                { label: "1.4 Iniciativa e proatividade na comunicação", percent: 78, descricao: "A proposta de reformular pedidos por perguntas estratégicas exige uma postura proativa e autorresponsável do líder em qualquer contexto." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Entrevista / Masterclass prática" },
        { label: "Estilo", value: "Didático, narrativo e altamente aplicável" },
        { label: "Aplicabilidade", value: "Imediata — ferramentas prontas para uso em conversas do dia a dia" },
        { label: "Intensidade conceitual", value: "Moderada — conceitos acessíveis com profundidade de campo" },
    ],
},

// Craig Groeschel — "Coração acima da Razão" (GLS 2019–2020)
gls19_2: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "Coração acima da Razão",
    edition: "GLS 2019–2020",
    duration: "39:53",
    bio: "Craig Groeschel é o pastor sênior da Life.Church, uma das igrejas mais inovadoras dos EUA, com múltiplas localidades e presença global online. Reconhecida por sua abordagem missionária orientada por tecnologia, a Life.Church é a criadora do aplicativo da Bíblia YouVersion — baixado em todos os países do mundo. Nomeado entre os 25 melhores CEOs dos EUA pela Glassdoor, Groeschel é autor best-seller do New York Times e apresenta o Podcast de Liderança Craig Groeschel, com mais de 1 milhão de downloads mensais, onde compartilha princípios práticos de liderança aplicáveis a qualquer contexto organizacional.",
    temaCentral: "Os líderes mais eficazes não lideram apenas com a cabeça, mas principalmente com o coração — e a liderança que inspira nasce de caráter, vulnerabilidade e comprometimento com valores que transcendem resultados financeiros.",
    sinopse: [
        "Craig Groeschel argumenta que a liderança mais transformadora não é resultado de habilidades técnicas ou inteligência analítica, mas de uma qualidade raramente ensinada: a coragem de liderar com o coração. Líderes que constroem culturas excepcionais criam ambientes onde as pessoas não apenas entregam resultados, mas se comprometem emocionalmente com a missão. Esse comprometimento não nasce de incentivos externos, mas de uma liderança que demonstra autenticidade, vulnerabilidade e paixão genuína pelos valores que prega.",
        "Groeschel apresenta a tese central de que líderes que desejam transformar suas equipes precisam começar por transformar a si mesmos. A maioria dos problemas que um líder enxerga na equipe é, na verdade, um reflexo da liderança que está sendo exercida. Mudar a cultura sem mudar a si mesmo é uma ilusão: a equipe observa mais o que o líder faz do que o que ele diz, e calibra seu comprometimento de acordo com a autenticidade percebida na liderança.",
        "Em um desafio direto, Groeschel convida cada líder a examinar com honestidade o que realmente motiva suas decisões: medo ou fé, autopreservação ou serviço, ego ou propósito. A liderança que inspira não vem de título ou posição, mas de credibilidade e caráter construídos ao longo do tempo — e esse caráter se revela, antes de tudo, na disposição de ser o primeiro a mudar.",
    ],
    softSkills: [
        "Vulnerabilidade e autenticidade na liderança",
        "Autoconhecimento e autorregulação",
        "Liderança servidora",
        "Construção de cultura organizacional",
        "Coragem para mudança pessoal",
        "Alinhamento entre valores e ações",
        "Inspiração e engajamento de equipes",
    ],
    palavrasChave: [
        "liderança pelo coração",
        "vulnerabilidade",
        "cultura organizacional",
        "autenticidade",
        "caráter",
        "transformação pessoal",
        "engajamento",
        "propósito",
        "credibilidade",
    ],
    takeaways: [
        "Os melhores líderes não lideram apenas com a cabeça — lideram com o coração, e isso cria um comprometimento emocional que habilidades técnicas não conseguem gerar.",
        "Liderança que inspira nasce de caráter e credibilidade construídos ao longo do tempo, não de título ou posição.",
        "A equipe observa mais o que o líder faz do que o que ele diz — autenticidade é o que calibra o comprometimento do time.",
        "Líderes que querem transformar suas equipes precisam estar dispostos a se transformar primeiro.",
        "Vulnerabilidade autêntica não é fraqueza — é o fundamento de uma cultura de confiança e comprometimento real.",
        "Examine o que de verdade motiva suas decisões: medo ou fé, ego ou propósito, autopreservação ou serviço.",
        "Mudar a cultura sem mudar a si mesmo é uma ilusão — o reflexo começa no espelho da liderança.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.2 Autoconhecimento e desenvolvimento de caráter", percent: 95, descricao: "A palestra centra-se inteiramente na jornada interior do líder — o que o motiva, o que o limita e como o caráter define o impacto da liderança." },
                { label: "1.3 Vulnerabilidade e autenticidade", percent: 90, descricao: "Groeschel posiciona a vulnerabilidade autêntica como a principal alavanca para construir culturas de confiança e comprometimento genuíno." },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                { label: "7.1 Liderança orientada por valores e propósito", percent: 88, descricao: "O desafio central da palestra é a pergunta sobre o que realmente motiva o líder — medo ou fé, ego ou propósito — tornando o alinhamento com valores o tema subjacente." },
                { label: "7.3 Legado construído através do desenvolvimento de outros", percent: 75, descricao: "A ideia de que o líder deve ser o primeiro a mudar implica que seu legado é medido pela transformação que ele catalisou nos que o cercam." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra inspiracional com desafio prático" },
        { label: "Estilo", value: "Direto, provocador e emocionalmente ressonante" },
        { label: "Aplicabilidade", value: "Alta — reflexão pessoal imediata com impacto cultural de médio prazo" },
        { label: "Intensidade conceitual", value: "Moderada — profundidade filosófica com linguagem acessível" },
    ],
},

// Craig Groeschel — "Endireite a Curva" (GLS 2019–2020)
gls19_3: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "Endireite a Curva",
    edition: "GLS 2019–2020",
    duration: "40:46",
    bio: "Craig Groeschel é o pastor sênior da Life.Church, uma das igrejas mais inovadoras dos EUA, com múltiplas localidades e presença global online. Reconhecida por sua abordagem missionária orientada por tecnologia, a Life.Church é a criadora do aplicativo da Bíblia YouVersion — baixado em todos os países do mundo. Nomeado entre os 25 melhores CEOs dos EUA pela Glassdoor, Groeschel é autor best-seller do New York Times e apresenta o Podcast de Liderança Craig Groeschel, com mais de 1 milhão de downloads mensais, onde compartilha princípios práticos de liderança aplicáveis a qualquer contexto organizacional.",
    temaCentral: "Os melhores líderes antecipam desvios e corrigem o rumo proativamente — pequenos ajustes feitos cedo evitam crises grandes, e a excelência nasce da disciplina constante de avaliação e melhoria.",
    sinopse: [
        "Craig Groeschel usa a metáfora visual de 'endireitar a curva' para descrever uma das habilidades mais subestimadas da liderança eficaz: a capacidade de identificar pequenos desvios antes que se tornem grandes crises. Assim como um piloto que corrige frações de grau durante o voo para chegar ao destino correto, líderes que desenvolvem o hábito de ajustes incrementais e precoces constroem organizações muito mais estáveis e resilientes do que aqueles que só reagem quando a situação já é crítica.",
        "A palestra aborda o papel crucial da coragem na liderança proativa. Confrontar realidades desconfortáveis cedo — seja uma dinâmica cultural problemática, um colaborador que não está entregando, ou um processo que está se deteriorando — exige muito mais de um líder do que reagir à crise já instalada. Groeschel argumenta que líderes que esperam que problemas se resolvam sozinhos geralmente enfrentam consequências exponencialmente maiores, e que a desculpa do 'não quero criar conflito' frequentemente mascara medo disfarçado de prudência.",
        "A excelência organizacional, segundo Groeschel, não é um destino, mas um conjunto de disciplinas — avaliação contínua, ajuste honesto e melhoria sistemática. Criar sistemas e processos que previnem desvios culturais é tão importante quanto corrigir os desvios quando eles aparecem. A liderança de excelência não é heroica nem dramática: é feita de pequenas decisões difíceis tomadas consistentemente antes que o custo de não tomá-las se torne insuportável.",
    ],
    softSkills: [
        "Antecipação e pensamento sistêmico",
        "Coragem para conversas difíceis",
        "Disciplina na avaliação contínua",
        "Tomada de decisão proativa",
        "Construção de sistemas e processos",
        "Confronto saudável e direto",
        "Gestão da mudança incremental",
    ],
    palavrasChave: [
        "proatividade",
        "ajuste de rota",
        "cultura organizacional",
        "disciplina",
        "excelência",
        "prevenção de crises",
        "liderança sistêmica",
        "coragem",
        "melhoria contínua",
    ],
    takeaways: [
        "Pequenos desvios não corrigidos cedo se tornam grandes crises — o custo do atraso é exponencial.",
        "A metáfora do piloto é precisa: ajustar frações de grau durante o voo é o que garante chegar ao destino correto.",
        "Confrontar realidades desconfortáveis cedo exige mais coragem do que reagir à crise já instalada.",
        "A desculpa de 'não quero criar conflito' frequentemente mascara medo disfarçado de prudência.",
        "Líderes que esperam que problemas se resolvam sozinhos invariavelmente enfrentam consequências maiores do que precisariam.",
        "Excelência não é um destino, mas uma disciplina — avaliação, ajuste e melhoria feitos de forma consistente.",
        "Criar sistemas que previnem desvios culturais é tão importante quanto corrigir os desvios quando eles aparecem.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                { label: "4.2 Tomada de decisão proativa e antecipatória", percent: 92, descricao: "O cerne da palestra é a habilidade de detectar desvios precocemente e agir antes que se tornem crises — o princípio estratégico central de 'endireitar a curva'." },
                { label: "4.4 Criação de sistemas e processos de excelência", percent: 85, descricao: "Groeschel argumenta que a excelência organizacional depende de sistemas e disciplinas que previnem desvios, não apenas de reações a problemas já instalados." },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.1 Coragem para decisões difíceis", percent: 88, descricao: "Confrontar realidades desconfortáveis proativamente é posicionado como um ato de coragem — um traço central do caráter do líder de excelência." },
                { label: "1.5 Disciplina e consistência comportamental", percent: 82, descricao: "A palestra define excelência como disciplina constante — avaliação, ajuste e melhoria sistemática — e não como heroísmo ocasional." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra de desenvolvimento de liderança com framework prático" },
        { label: "Estilo", value: "Metafórico, direto e com aplicação imediata" },
        { label: "Aplicabilidade", value: "Alta — princípios acionáveis para qualquer nível de liderança" },
        { label: "Intensidade conceitual", value: "Moderada — conceitos acessíveis com implicações sistêmicas profundas" },
    ],
},

// Danielle Strickland — "Conduzindo à Mudança Transformadora" (GLS 2019–2020)
gls19_4: {
    speaker: "Danielle Strickland",
    speakerPhoto: "/speakers/danielle-strickland.png",
    title: "Conduzindo à Mudança Transformadora",
    edition: "GLS 2019–2020",
    duration: "26:42",
    bio: "Danielle Strickland liderou igrejas, iniciou escolas de treinamento e estabeleceu departamentos de justiça ao redor do mundo ao longo de 22 anos como oficial do Exército da Salvação. Embaixadora da Stop The Traffik, ela co-fundou o Infinitum, Brave Global, Amplify Peace e o Women Speakers Collective, iniciativas que empoderam líderes e transformam comunidades globalmente. Com um chamado profundo para capacitar pessoas e combater injustiças sistêmicas, Strickland é autora de vários livros, incluindo 'O êxodo definitivo: liberte-se da escravidão', e é reconhecida como uma das vozes mais contundentes sobre liderança transformadora e justiça social.",
    temaCentral: "A mudança transformadora genuína não vem de cima para baixo, mas de dentro para fora — e líderes que libertam em vez de controlar são os únicos capazes de gerar transformação sistêmica duradoura.",
    sinopse: [
        "Danielle Strickland desafia radicalmente a visão tradicional de liderança como controle e comando, propondo em seu lugar uma liderança que liberta e empodera. Usando sua experiência de duas décadas no Exército da Salvação e em iniciativas de combate ao tráfico humano, ela demonstra que a mudança sistêmica genuína começa onde a maioria dos líderes menos espera: dentro de si mesmos. A verdadeira transformação não acontece de cima para baixo, por decreto ou imposição, mas de dentro para fora — primeiro no líder, depois na equipe, depois na organização, e então na comunidade ao redor.",
        "Strickland argumenta que o primeiro ato de um líder transformador é perguntar: 'Minha liderança está libertando ou aprisionando as pessoas ao meu redor?' Muitos líderes bem-intencionados criam, sem perceber, ambientes de dependência, medo ou conformidade passiva. A liderança que liberta desafia as pessoas a crescerem além do que o líder imagina possível, cria espaço para falhas e aprendizado, e resiste ao impulso de centralizar poder e decisão. Ser um agente de libertação em vez de um mantenedor do status quo é uma escolha que exige coragem e renúncia constante.",
        "A abordagem de Strickland é visceralmente prática: ela propõe que a mudança começa com a transformação da mentalidade, da postura e dos valores do líder. Não é possível liderar uma organização para um lugar onde o próprio líder ainda não foi. Usando histórias de comunidades transformadas por líderes que escolheram soltar o controle e confiar nos liderados, ela demonstra que o paradoxo da liderança transformadora é que quanto mais o líder solta, mais influência genuína ele ganha.",
    ],
    softSkills: [
        "Liderança servidora e libertadora",
        "Coragem para questionar o status quo",
        "Empatia sistêmica e visão social",
        "Renúncia ao controle em favor da confiança",
        "Transformação pessoal como pré-requisito da liderança",
        "Criação de ambientes de empoderamento",
        "Resiliência diante de resistência e injustiça",
    ],
    palavrasChave: [
        "mudança transformadora",
        "liderança libertadora",
        "empoderamento",
        "justiça social",
        "transformação sistêmica",
        "status quo",
        "confiança",
        "liderança servidora",
        "autotransformação",
    ],
    takeaways: [
        "A mudança transformadora genuína não vem de cima para baixo — ela começa dentro do líder e se irradia para fora.",
        "Pergunte-se honestamente: 'Minha liderança está libertando ou aprisionando as pessoas ao meu redor?'",
        "Ser um agente de libertação exige renunciar ao controle — o que é contraintuitivo e exige coragem constante.",
        "Não é possível liderar uma organização para um lugar onde o próprio líder ainda não foi.",
        "Líderes que centralizam poder e decisão criam dependência; líderes que delegam criam multiplicadores.",
        "O paradoxo da liderança transformadora: quanto mais o líder solta o controle, mais influência genuína ele ganha.",
        "A transformação sistêmica começa com a transformação individual — de mentalidade, postura e valores.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                { label: "5.1 Liderança como agente de transformação sistêmica", percent: 93, descricao: "Strickland apresenta um modelo de liderança que não apenas gerencia mudanças, mas é ela mesma o catalisador de transformações profundas em pessoas, organizações e comunidades." },
                { label: "5.3 Ruptura com modelos tradicionais de liderança", percent: 88, descricao: "A proposta de substituir controle por libertação representa uma reinvenção radical do papel do líder — o que se alinha diretamente com a categoria de inovação e reinvenção." },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.3 Transformação pessoal como fundamento da liderança", percent: 90, descricao: "A tese central é que a mudança externa começa com a mudança interna do líder — colocando o desenvolvimento pessoal como pré-requisito indispensável para qualquer impacto organizacional." },
                { label: "1.2 Coragem e renúncia ao status quo", percent: 82, descricao: "Questionar sua própria forma de liderar e estar disposto a soltar o controle são atos de coragem pessoal que Strickland posiciona como a marca do líder transformador." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra provocadora com testemunho e chamado à ação" },
        { label: "Estilo", value: "Apaixonado, direto e narrativo com forte apelo emocional" },
        { label: "Aplicabilidade", value: "Alta — desafio imediato de autoavaliação com impacto cultural de longo prazo" },
        { label: "Intensidade conceitual", value: "Moderada-alta — reflexão profunda sobre o papel e a identidade do líder" },
    ],
},

// DeVon Franklin — "A Sua Diferença É o Seu Destino" (GLS 2019–2020)
gls19_5: {
    speaker: "DeVon Franklin",
    speakerPhoto: "/speakers/devon-franklin.png",
    title: "A Sua Diferença É o Seu Destino",
    edition: "GLS 2019–2020",
    duration: "31:09",
    bio: "DeVon Franklin é um produtor premiado de Hollywood, autor best-seller do New York Times e coach de sucesso espiritual. CEO da Franklin Entertainment com a 20th Century Fox, ele produziu sucessos de bilheteria como 'Milagres do paraíso', 'O céu é de verdade' e 'A estrela de Belém'. Nomeado pela Beliefnet como um dos Cristãos Mais Influentes com menos de 40 anos, Franklin é reconhecido por navegar com integridade em um dos ambientes mais secularizados do mundo — Hollywood — sem abrir mão de sua fé ou de sua singularidade. Seu livro mais recente, 'The Truth About Men', reflete seu comprometimento em usar liderança e mídia como ferramentas de encorajamento para milhões de pessoas ao redor do mundo.",
    temaCentral: "Aquilo que nos torna diferentes — nossas peculiaridades, experiências únicas e perspectivas singulares — não é um obstáculo ao sucesso, mas a própria chave para o nosso destino e nosso impacto mais autêntico.",
    sinopse: [
        "DeVon Franklin confronta um dos impulsos mais comuns entre líderes ambiciosos: o desejo de conformar-se, esconder suas diferenças e imitar os modelos de sucesso dos outros. Usando sua própria jornada como produtor negro guiado por fé em um ambiente secular como Hollywood, ele demonstra de forma visceral que a diferença abraçada com coragem cria um impacto que a conformidade jamais criaria. Não foi apesar de sua singularidade que Franklin chegou onde chegou — foi por causa dela.",
        "A palestra apresenta uma inversão poderosa do senso comum sobre sucesso e adequação. A maioria das pessoas experimenta suas diferenças como vulnerabilidades a esconder ou problemas a resolver. Franklin argumenta que as maiores contribuições à humanidade — nas artes, nos negócios, na ciência, na liderança — vieram de pessoas que se recusaram a apagar o que as tornava únicas. A diferença não é o problema: é a proposta de valor mais difícil de replicar e o ativo mais durável que um líder possui.",
        "O desafio final de Franklin é direto e pessoal: pare de tentar ser uma versão medíocre de outra pessoa e comece a ser a versão extraordinária de si mesmo. Ele propõe que o destino de um líder não está em encontrar o modelo certo a imitar, mas em descobrir e abraçar plenamente quem ele foi chamado a ser. A singularidade, quando vivida com coragem e integridade, não apenas diferencia — ela transforma. E é essa transformação que cria legados que sobrevivem ao tempo.",
    ],
    softSkills: [
        "Autenticidade e coragem identitária",
        "Resiliência diante da pressão de conformidade",
        "Propósito como âncora de decisão",
        "Autoconhecimento e autoexpressão",
        "Navegação em ambientes que diferem dos seus valores",
        "Liderança com integridade em contextos adversos",
        "Visão de longo prazo e legado intencional",
    ],
    palavrasChave: [
        "singularidade",
        "autenticidade",
        "identidade",
        "propósito",
        "destino",
        "conformidade",
        "legado",
        "coragem identitária",
        "diferença como vantagem",
        "hollywood",
    ],
    takeaways: [
        "Aquilo que te torna diferente não é o seu obstáculo — é a chave do seu destino e do seu impacto mais autêntico.",
        "As maiores contribuições à humanidade vieram de pessoas que se recusaram a apagar o que as tornava únicas.",
        "Tentar conformar-se ao modelo de sucesso de outra pessoa é o caminho mais certo para uma vida medíocre.",
        "Sua diferença é a proposta de valor mais difícil de replicar e o ativo mais durável que você possui como líder.",
        "Não foi apesar da sua singularidade que os grandes líderes chegaram onde chegaram — foi por causa dela.",
        "Pare de tentar ser uma versão medíocre de outra pessoa e comece a ser a versão extraordinária de si mesmo.",
        "A singularidade vivida com coragem e integridade não apenas diferencia — ela transforma e cria legados duradouros.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                { label: "7.2 Identidade e singularidade como fonte de propósito", percent: 95, descricao: "Franklin posiciona a diferença individual como a própria substância do destino e do legado de cada líder — tornando propósito e identidade inseparáveis." },
                { label: "7.4 Impacto autêntico versus adequação social", percent: 90, descricao: "A palestra contrasta explicitamente conformidade e autenticidade, argumentando que apenas a segunda gera impacto genuíno e duradouro." },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.2 Autoconhecimento e coragem identitária", percent: 88, descricao: "O chamado de Franklin para cada líder descobrir e abraçar plenamente quem é representa uma jornada profunda de autoconhecimento e coragem pessoal." },
                { label: "1.6 Integridade em contextos adversos", percent: 80, descricao: "A trajetória de Franklin em Hollywood como homem de fé demonstra como manter integridade e singularidade em ambientes que pressionam pela conformidade." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra inspiracional com testemunho pessoal" },
        { label: "Estilo", value: "Narrativo, apaixonado e desafiador" },
        { label: "Aplicabilidade", value: "Alta — convite imediato à autoavaliação sobre identidade e conformidade" },
        { label: "Intensidade conceitual", value: "Moderada — mensagem profunda com linguagem acessível e direta" },
    ],
},

// Jason Dorsey — "Revelando os Segredos das Gerações" (GLS 2019–2020)
gls19_6: {
    speaker: "Jason Dorsey",
    speakerPhoto: "/speakers/jason-dorsey.png",
    title: "Revelando os Segredos das Gerações",
    edition: "GLS 2019–2020",
    duration: "33:03",
    bio: "Jason Dorsey é Presidente do The Center for Generational Kinetics, organização que realiza pesquisas, palestras e consultoria para separar mito de verdade geracional para líderes ao redor do mundo. Sua equipe já reposicionou marcas globais para conquistar cada geração e conduziu clientes de último para primeiro lugar tanto em retenção de funcionários quanto em crescimento de clientes. Considerado o palestrante e pesquisador número 1 sobre gerações e chamado de 'guru da pesquisa' pela Adweek, Dorsey usa pesquisa original baseada em dados — não em estereótipos ou impressões — para explicar comportamentos geracionais e transformar como líderes constroem equipes multigeracionais eficazes.",
    temaCentral: "As diferenças geracionais entre Baby Boomers, Geração X, Millennials e Geração Z não são mitos ou exageros — são realidades mensuráveis moldadas pelo contexto histórico de cada geração, e líderes que as compreendem criam ambientes mais eficazes e inclusivos.",
    sinopse: [
        "Jason Dorsey apresenta dados de pesquisa que desmistificam os estereótipos mais comuns sobre as gerações no ambiente de trabalho. As diferenças observadas entre Baby Boomers, Geração X, Millennials e Geração Z não são resultado de preguiça, falta de comprometimento ou fraqueza de caráter das gerações mais jovens — são consequências previsíveis de diferentes formações, experiências históricas e contextos tecnológicos que moldaram os valores e expectativas de cada grupo. Tratar essas diferenças como defeitos a corrigir é desperdiçar a maior fonte de diversidade cognitiva disponível em uma organização.",
        "A palestra oferece um mapa prático das principais características e expectativas de cada geração no contexto do trabalho. Dorsey mostra como cada geração se relaciona de forma distinta com feedback, reconhecimento, tecnologia, hierarquia e propósito. Líderes que aplicam o mesmo estilo de liderança, comunicação e reconhecimento para todas as gerações invariavelmente alienam parte significativa de suas equipes — não por má-fé, mas por ignorância das premissas não declaradas de cada grupo.",
        "A parte mais prática da palestra apresenta estratégias concretas para líderes adaptarem sua comunicação, sistemas de reconhecimento e cultura organizacional para engajar cada geração de forma autêntica. Isso não significa ter múltiplos padrões de excelência, mas múltiplos idiomas de liderança — usar a mesma mensagem de formas que ressoem com pessoas formadas em contextos históricos diferentes. Organizações que dominam essa habilidade retêm talentos de todas as faixas etárias e constroem culturas verdadeiramente inclusivas.",
    ],
    softSkills: [
        "Inteligência cultural e geracional",
        "Adaptação da comunicação ao interlocutor",
        "Liderança inclusiva e multigeracional",
        "Pensamento baseado em dados e evidências",
        "Empatia com perspectivas históricas distintas",
        "Flexibilidade de estilo de liderança",
        "Construção de culturas de pertencimento",
    ],
    palavrasChave: [
        "gerações",
        "millennials",
        "geração z",
        "diversidade geracional",
        "retenção de talentos",
        "cultura organizacional",
        "comunicação adaptativa",
        "pesquisa comportamental",
        "liderança inclusiva",
        "baby boomers",
    ],
    takeaways: [
        "As diferenças geracionais são realidades mensuráveis — ignorá-las ou tratá-las como defeitos é desperdiçar a maior diversidade cognitiva da organização.",
        "Cada geração foi moldada por um contexto histórico específico que define seus valores, expectativas e forma de se relacionar com o trabalho.",
        "Aplicar o mesmo estilo de liderança para todas as gerações é garantia de alienar parte significativa da equipe.",
        "Adaptar a comunicação não significa ter múltiplos padrões de excelência — significa falar múltiplos idiomas de liderança.",
        "Organizações que entendem diferenças geracionais retêm mais talentos e criam culturas genuinamente inclusivas.",
        "Desmistificar estereótipos geracionais com dados é o primeiro passo para construir uma liderança mais eficaz e justa.",
        "Os melhores líderes multigeracionais encontram o que é universal em cada pessoa enquanto adaptam como comunicam e reconhecem.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                { label: "2.3 Diversidade geracional e inclusão", percent: 94, descricao: "A palestra é centrada em como líderes podem criar culturas genuinamente inclusivas compreendendo e respeitando as diferenças geracionais — o tema central de pessoas e cultura." },
                { label: "2.1 Retenção e engajamento de talentos", percent: 88, descricao: "Dorsey demonstra como o entendimento geracional impacta diretamente retenção de funcionários e engajamento de equipes multigeracionais." },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                { label: "3.3 Adaptação da comunicação ao contexto e ao receptor", percent: 90, descricao: "O cerne prático da palestra é a adaptação do estilo de comunicação e reconhecimento para cada geração — uma competência central de influência eficaz." },
                { label: "3.5 Uso de dados e evidências para persuadir", percent: 82, descricao: "Dorsey fundamenta toda a argumentação em pesquisa original e dados mensuráveis, demonstrando como evidências amplificam a credibilidade e o poder de influência de um líder." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra baseada em pesquisa com aplicação prática" },
        { label: "Estilo", value: "Informativo, bem-humorado e orientado por dados" },
        { label: "Aplicabilidade", value: "Muito alta — insights imediatamente acionáveis para líderes de equipes multigeracionais" },
        { label: "Intensidade conceitual", value: "Moderada — conteúdo denso apresentado de forma acessível e envolvente" },
    ],
},

// Jia Jiang — "Sem Medo da Rejeição" (GLS 2019–2020)
gls19_7: {
    speaker: "Jia Jiang",
    speakerPhoto: "/speakers/jia-jiang.png",
    title: "Sem Medo da Rejeição",
    edition: "GLS 2019–2020",
    duration: "31:49",
    bio: "Jia Jiang começou sua carreira no mundo corporativo antes de se tornar empreendedor e se deparar com o maior obstáculo de sua vida: o medo paralisante da rejeição. Para enfrentar esse medo, embarcou em uma jornada de 100 dias fazendo pedidos deliberadamente improváveis a estranhos — e descobriu um mundo onde as pessoas são muito mais gentis e abertas do que imaginava. A experiência se tornou viral e um livro best-seller, 'Sem medo da rejeição'. Hoje, como CEO da Wuju Learning e proprietário do Rejection Therapy, Jiang treina pessoas e organizações ao redor do mundo a se tornarem destemidas através do treinamento sistemático contra a rejeição.",
    temaCentral: "O medo da rejeição é o maior freio invisível da liderança e da inovação — e ele pode ser sistematicamente desmontado através da exposição gradual e intencional, revelando que a maioria das rejeições que tememos nunca acontece.",
    sinopse: [
        "Jia Jiang conta a história da jornada de 100 dias que mudou sua vida e a de milhares de pessoas ao redor do mundo. Temendo a rejeição como empreendedor, ele decidiu dessensibilizar-se através da exposição deliberada: fazer pedidos absurdos e improváveis a estranhos todos os dias por 100 dias consecutivos. Os pedidos foram desde pedir donuts em formato de argola olímpica à Krispy Kreme — que uma atendente gentilmente fez para ele — até pedir para jogar futebol no quintal de um desconhecido. O que ele descobriu transformou sua compreensão sobre o medo da rejeição: a maioria das rejeições que tememos nunca acontece, e quando acontece, não é fatal.",
        "A palestra revela insights poderosos sobre a psicologia da rejeição e do pedido. A forma como fazemos um pedido importa tanto quanto o pedido em si: contexto, calor humano, curiosidade genuína e persistência gentil frequentemente transformam um 'não' em 'sim'. Jiang descobriu que as pessoas ao redor são muito mais generosas, abertas e dispostas a ajudar do que nossa ansiedade sobre rejeição nos faz acreditar. O medo da rejeição é, na maior parte das vezes, uma narrativa que criamos internamente — e essa narrativa é treinável.",
        "Para líderes e organizações, o impacto do medo da rejeição é imenso e silencioso: ele impede líderes de pedir recursos, fazer propostas ousadas, contratar as pessoas certas, inovar e arriscar. Ao treinar sistematicamente a tolerância à rejeição, líderes e equipes ganham uma vantagem competitiva enorme — a disposição de tentar o que outros evitam por medo. Jiang conclui com um convite prático: qual é o pedido que você tem evitado fazer por medo de ser rejeitado? Esse é exatamente o pedido que você precisa fazer amanhã.",
    ],
    softSkills: [
        "Resiliência emocional e tolerância à rejeição",
        "Coragem de agir apesar do medo",
        "Persistência gentil e criativa",
        "Formulação estratégica de pedidos",
        "Mentalidade de crescimento diante do fracasso",
        "Autoliderança e treinamento de comportamento",
        "Inovação pelo ato de arriscar",
    ],
    palavrasChave: [
        "rejeição",
        "medo",
        "coragem",
        "resiliência",
        "dessensibilização",
        "inovação",
        "persistência",
        "empreendedorismo",
        "treinamento comportamental",
    ],
    takeaways: [
        "A maioria das rejeições que tememos nunca acontece — e quando acontece, não é fatal.",
        "A forma como fazemos um pedido importa tanto quanto o pedido em si: contexto e calor humano fazem toda a diferença.",
        "O medo da rejeição é treinável — exposição deliberada e gradual dessensibiliza o sistema nervoso ao risco social.",
        "Persistência gentil frequentemente transforma um 'não' inicial em 'sim' — não insistência agressiva, mas curiosidade e abertura.",
        "As pessoas ao redor são muito mais generosas e abertas do que nossa ansiedade sobre rejeição nos faz acreditar.",
        "O medo da rejeição impede líderes de pedir recursos, propor ideias ousadas e inovar — é um freio invisível e custoso.",
        "Qual é o pedido que você tem evitado por medo? Esse é exatamente o pedido que você precisa fazer.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                { label: "6.2 Tolerância ao fracasso e à rejeição como competência", percent: 95, descricao: "A palestra é construída inteiramente sobre o desenvolvimento da resiliência diante da rejeição — posicionando essa tolerância como uma habilidade treinável e fundamental." },
                { label: "6.1 Gestão do medo e da ansiedade social", percent: 88, descricao: "Jiang demonstra como o medo da rejeição — uma forma de ansiedade social — pode ser sistematicamente desmontado através de exposição intencional e gradual." },
            ],
        },
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                { label: "5.4 Coragem para arriscar e experimentar", percent: 90, descricao: "O antídoto para a estagnação inovadora é, segundo Jiang, a disposição de tentar o que outros evitam por medo de rejeição — conectando diretamente resiliência e capacidade de inovar." },
                { label: "5.2 Mentalidade de crescimento diante do fracasso", percent: 82, descricao: "A jornada de 100 dias é um exemplo vivo de como reframing do fracasso como aprendizado catalisa crescimento pessoal e profissional." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra narrativa com framework comportamental" },
        { label: "Estilo", value: "Bem-humorado, inspirador e com chamado à ação imediata" },
        { label: "Aplicabilidade", value: "Muito alta — desafio prático claro e imediatamente acionável" },
        { label: "Intensidade conceitual", value: "Baixa-moderada — mensagem poderosa em linguagem extremamente acessível" },
    ],
},

// Jo Saxton — "Aumente o Nível da Sua Liderança" (GLS 2019–2020)
gls19_8: {
    speaker: "Jo Saxton",
    speakerPhoto: "/speakers/jo-saxton.png",
    title: "Aumente o Nível da Sua Liderança",
    edition: "GLS 2019–2020",
    duration: "30:44",
    bio: "Nascida de pais nigerianos e criada em Londres, Inglaterra, Jo Saxton traz uma perspectiva multicultural e internacional única para a liderança. Com experiência em equipes pastorais no Reino Unido e nos EUA, ela é a fundadora do Ezer Collective, uma iniciativa dedicada a equipar e investir em mulheres líderes ao redor do mundo. Saxton co-apresenta o podcast Lead Stories: Tales of Leadership and Life com Steph O'Brien e é autora de três livros, incluindo 'The Dream of You', obra que explora como identidade e chamado se entrelaçam. Sua voz única como mulher negra em contextos de liderança predominantemente brancos e masculinos confere uma profundidade e autenticidade raras às suas mensagens sobre identidade, propósito e elevação.",
    temaCentral: "Elevar o nível da liderança começa por recusar as identidades impostas pelo mundo e assumir plenamente quem você foi chamado a ser — porque o legado de um líder é medido por quantas outras pessoas ele elevou ao longo do caminho.",
    sinopse: [
        "Jo Saxton desafia líderes a saírem de uma liderança de manutenção — fazer o mínimo necessário para manter o status quo — para uma liderança de elevação, tanto de si mesmos quanto das pessoas ao seu redor. Ela argumenta que muitos líderes estão operando bem abaixo de seu potencial real, não por falta de capacidade, mas por estarem aprisionados por insegurança, pelo peso da comparação e pelas identidades que outros impuseram a eles ao longo do tempo. Reconhecer e rejeitar essas identidades impostas é o primeiro passo para uma liderança genuinamente transformadora.",
        "Usando sua própria trajetória como mulher negra em ambientes predominantemente brancos e masculinos, Saxton demonstra como a autenticidade radical — conhecer e ocupar plenamente quem você é, sem desculpa e sem apologia — é a fundação de toda liderança transformadora. Ela não teoriza sobre diversidade de forma abstrata; ela a encarna, descrevendo os momentos em que foi invisível, subestimada ou excluída, e como a clareza sobre sua identidade e propósito a manteve fiel a si mesma. O que ela oferece não é otimismo superficial, mas uma liderança forjada em contextos difíceis.",
        "O convite final de Saxton é ao mesmo tempo pessoal e organizacional: qual identidade o mundo impôs a você que você precisa recusar? E quais pessoas ao seu redor estão sendo invisibilizadas ou mantidas abaixo de seu potencial por uma liderança que não as vê? O legado de um líder, propõe ela, não é medido por seus próprios feitos individuais, mas por quantas outras pessoas ele elevou, libertou e equipou ao longo de seu caminho.",
    ],
    softSkills: [
        "Autenticidade e clareza de identidade",
        "Resiliência em ambientes adversos",
        "Liderança que eleva e empodera outros",
        "Coragem para ocupar plenamente seu espaço",
        "Consciência do impacto cultural da liderança",
        "Rejeição de identidades impostas externamente",
        "Construção de legado através do desenvolvimento de outros",
    ],
    palavrasChave: [
        "elevação",
        "identidade",
        "autenticidade",
        "liderança feminina",
        "diversidade",
        "empoderamento",
        "legado",
        "potencial",
        "inclusão",
        "autoconhecimento",
    ],
    takeaways: [
        "Muitos líderes operam bem abaixo de seu potencial real — aprisionados por insegurança e identidades impostas por outros.",
        "Autenticidade radical — conhecer e ocupar plenamente quem você é — é a fundação de toda liderança transformadora.",
        "O primeiro ato de elevar o nível é recusar as identidades que o mundo impôs e assumir a identidade que você foi chamado a ser.",
        "O legado de um líder não é medido por seus próprios feitos, mas por quantas outras pessoas ele elevou ao longo do caminho.",
        "Liderança de elevação é o oposto de liderança de manutenção — ela desafia, investe e liberta as pessoas ao redor.",
        "Quais pessoas ao seu redor estão sendo invisibilizadas ou mantidas abaixo de seu potencial por sua liderança?",
        "Clareza sobre identidade e propósito é o que mantém líderes fiéis a si mesmos em contextos que pressionam pela conformidade.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.2 Identidade, autoconhecimento e autenticidade", percent: 95, descricao: "Saxton posiciona a clareza de identidade — saber quem você é e recusar identidades impostas — como o fundamento de toda liderança eficaz e transformadora." },
                { label: "1.7 Coragem para ocupar plenamente seu espaço", percent: 88, descricao: "A narrativa pessoal de Saxton como mulher negra em contextos adversos ilustra o que significa ter coragem de ser plenamente quem se é, sem desculpa ou apologia." },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                { label: "4.5 Liderança que cria líderes — multiplicação de impacto", percent: 85, descricao: "A proposta de que o legado é medido por quantas pessoas o líder elevou aponta diretamente para uma estratégia de liderança orientada para multiplicação de capacidade e impacto." },
                { label: "4.1 Elevação de padrões e expectativas organizacionais", percent: 78, descricao: "O movimento de liderança de manutenção para liderança de elevação implica uma decisão estratégica sobre qual padrão de desempenho e potencial o líder está disposto a exigir — de si e de outros." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra de identidade e desenvolvimento de liderança" },
        { label: "Estilo", value: "Pessoal, vulnerável e desafiador com profundidade emocional" },
        { label: "Aplicabilidade", value: "Alta — reflexão sobre identidade e legado com impacto imediato e duradouro" },
        { label: "Intensidade conceitual", value: "Moderada-alta — conteúdo denso sobre identidade, propósito e liderança" },
    ],
},

// Krish Kandiah — "Liderança VIP" (GLS 2019–2020)
gls19_9: {
    speaker: "Krish Kandiah",
    speakerPhoto: "/speakers/krish-kandiah.png",
    title: "Liderança VIP",
    edition: "GLS 2019–2020",
    duration: "29:42",
    bio: "Dr. Krish Kandiah é o diretor fundador da Home for Good, uma iniciativa de caridade britânica dedicada a encontrar lares permanentes e amorosos para crianças no sistema de acolhimento do Reino Unido. Defensor apaixonado do acolhimento e da adoção, ele e sua esposa têm sete filhos através de nascimento, adoção e acolhimento temporário. Autor de 13 livros, incluindo 'Faitheism: Why Christians and Atheists have more in common than you think', Kandiah é radiodifusor regular na BBC e contribuidor do Guardian e do Times of London, levando sua visão de liderança comprometida com os mais vulneráveis para audiências amplas e diversas.",
    temaCentral: "A verdadeira liderança VIP não trata poucos como especiais — trata todos como especiais, com atenção prioritária aos vulneráveis, invisíveis e periféricos, pois a medida de uma organização é o que ela faz pelos mais frágeis.",
    sinopse: [
        "Krish Kandiah propõe uma reinvenção radical do conceito de VIP no contexto da liderança. Em vez de tratar como VIPs apenas os poderosos, influentes e bem-conectados, ele desafia organizações e líderes a tratarem como VIPs os vulneráveis, os invisíveis e os periféricos — as pessoas que o mundo prefere ignorar. Usando sua experiência profunda com crianças em acolhimento e adoção, ele demonstra que as organizações mais transformadoras não são aquelas que servem os clientes ou membros mais fáceis, mas as que se comprometem de forma genuína com os mais difíceis, marginalizados e negligenciados.",
        "A palestra convida líderes a uma autoauditoria incômoda de suas culturas organizacionais: quem tem voz? Quem é invisível? Quem se beneficia das estruturas existentes e quem fica de fora? Kandiah argumenta que essas perguntas revelam os valores reais de uma organização — não os valores declarados nos cartazes e no site, mas os valores operacionais que determinam onde o tempo, os recursos e a atenção são de fato alocados. Liderança com propósito começa por enxergar e servir os que o mundo prefere ignorar.",
        "A lição mais provocadora de Kandiah é sobre métricas de impacto: a medida real de uma organização não é o que ela faz pelos poderosos, mas o que faz pelos frágeis. Organizações que constroem culturas de inclusão genuína — não apenas inclusão simbólica — criam ambientes onde pessoas de todas as origens e contextos encontram pertencimento, voz e possibilidade. Esse tipo de cultura não é apenas o mais ético, argumenta ele, mas também o mais resiliente, criativo e sustentável no longo prazo.",
    ],
    softSkills: [
        "Empatia com os vulneráveis e marginalizados",
        "Liderança inclusiva e equitativa",
        "Visão sistêmica das dinâmicas de poder",
        "Coragem para servir os mais difíceis",
        "Autoavaliação crítica de cultura organizacional",
        "Comprometimento com propósito de impacto social",
        "Criação de culturas de pertencimento genuíno",
    ],
    palavrasChave: [
        "vulnerabilidade",
        "inclusão",
        "liderança vip",
        "invisíveis",
        "propósito social",
        "pertencimento",
        "justiça organizacional",
        "cultura de acolhimento",
        "impacto",
    ],
    takeaways: [
        "Liderança VIP não é tratar poucos como especiais — é tratar todos como especiais, especialmente os mais frágeis.",
        "As organizações mais transformadoras são as que servem os mais difíceis, não apenas os mais fáceis de servir.",
        "A medida real de uma organização não é o que ela faz pelos poderosos, mas o que faz pelos frágeis e invisíveis.",
        "Pergunte-se: quem tem voz na sua organização? Quem é invisível? Quem fica de fora das estruturas existentes?",
        "Os valores reais de uma organização são revelados pela alocação real de tempo, recursos e atenção — não pelos declarados.",
        "Culturas de inclusão genuína são mais resilientes, criativas e sustentáveis do que culturas de uniformidade.",
        "Liderança com propósito começa por enxergar e servir os que o mundo prefere ignorar.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                { label: "2.4 Inclusão genuína e culturas de pertencimento", percent: 93, descricao: "Kandiah posiciona a inclusão dos vulneráveis e invisíveis como o teste definitivo da qualidade de uma cultura organizacional — indo muito além de diversidade simbólica." },
                { label: "2.2 Valores organizacionais e comportamento real", percent: 85, descricao: "A proposta de autoauditoria das culturas organizacionais — comparando valores declarados com valores operacionais — é um dos frameworks mais práticos da palestra." },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                { label: "7.5 Impacto social como critério de liderança", percent: 90, descricao: "Kandiah redefine a medida de sucesso de uma organização pelo impacto que ela gera nos mais frágeis — uma inversão de prioridades que coloca o propósito social no centro da liderança." },
                { label: "7.2 Propósito que transcende resultados financeiros", percent: 82, descricao: "A visão de servir os vulneráveis como prioridade organizacional é um exemplo claro de propósito que vai além de métricas tradicionais de sucesso e impacto." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra com testemunho pessoal e framework de liderança" },
        { label: "Estilo", value: "Compassivo, provocador e com chamado à autoavaliação" },
        { label: "Aplicabilidade", value: "Alta — framework de autoauditoria cultural imediatamente aplicável" },
        { label: "Intensidade conceitual", value: "Moderada — conceitos acessíveis com profundidade de impacto significativa" },
    ],
},

// Liz Bohannon — "Coragem de Principiante" (GLS 2019–2020)
gls19_10: {
    speaker: "Liz Bohannon",
    speakerPhoto: "/speakers/liz-bohannon.png",
    title: "Coragem de Principiante",
    edition: "GLS 2019–2020",
    duration: "39:53",
    bio: "Liz Bohannon é a fundadora da Sseko Designs, uma marca de moda socialmente consciente que cria oportunidades de liderança e educação para mulheres em Uganda e em todo o mundo. Nomeada pela Bloomberg Businessweek como uma das principais empreendedoras sociais e pela Forbes como uma das 20 melhores palestrantes, ela construiu a Sseko sem nenhuma experiência prévia em moda, negócios internacionais ou desenvolvimento social. Em seu livro 'Beginner's Pluck', ela compartilha 14 princípios para não encontrar, mas construir uma vida de propósito, paixão e impacto — transformando a coragem do principiante de qualidade acidental em prática deliberada.",
    temaCentral: "A coragem de principiante — a disposição de começar sem saber, errar publicamente e persistir sem garantias — é a característica mais valiosa de um líder inovador, e a vulnerabilidade de 'não sei, mas vou descobrir' é uma vantagem estratégica, não uma fraqueza.",
    sinopse: [
        "Liz Bohannon desafia o mito dominante de que o sucesso exige expertise prévia, credenciais impecáveis e auto-confiança perfeita antes de se começar qualquer coisa de valor. Ela propõe, com base em sua própria história de criar a Sseko Designs sem nenhuma experiência em moda, negócios ou desenvolvimento internacional, que a 'coragem de principiante' é a característica mais rara e mais valiosa que um líder inovador pode possuir. Não é a expertise que diferencia os maiores criadores — é a disposição de começar mesmo sem ela.",
        "A palestra revela como a cultura de 'fingir que sabe' cria organizações frágeis e líderes isolados. Quando líderes simulam certeza que não têm, eles tomam decisões com informações incompletas, criam equipes que também fingem, e desenvolvem culturas de medo onde errar é vergonhoso em vez de instrutivo. A alternativa que Bohannon propõe — líderes que dizem abertamente 'não sei, mas vou descobrir' — cria o oposto: organizações onde o aprendizado é celebrado, onde a vulnerabilidade gera confiança, e onde a inovação real tem espaço para acontecer.",
        "Bohannon conclui com um convite radical à adoção deliberada da mentalidade de principiante como prática de liderança. Ela propõe que abraçar o status de principiante — com sua curiosidade, abertura e ausência de respostas prontas — não é uma fase a superar, mas uma postura a cultivar permanentemente. Os líderes mais inovadores e adaptativos são aqueles que conseguem manter a humildade e a curiosidade do principiante mesmo quando acumulam experiência. É essa postura que permite aprendizado acelerado, equipes engajadas e a capacidade de inovar continuamente em um mundo que muda mais rápido do que qualquer especialidade se consolida.",
    ],
    softSkills: [
        "Coragem para começar sem expertise prévia",
        "Tolerância à ambiguidade e à incerteza",
        "Mentalidade de crescimento e aprendizado contínuo",
        "Vulnerabilidade como ferramenta de liderança",
        "Inovação a partir da ignorância produtiva",
        "Persistência sem garantias de resultado",
        "Humildade intelectual e curiosidade permanente",
    ],
    palavrasChave: [
        "principiante",
        "coragem",
        "vulnerabilidade",
        "inovação",
        "aprendizado",
        "empreendedorismo social",
        "mentalidade de crescimento",
        "humildade",
        "começar sem saber",
        "propósito",
    ],
    takeaways: [
        "A coragem de principiante é a característica mais rara e mais valiosa de um líder inovador — não a expertise.",
        "Não é o conhecimento prévio que diferencia os maiores criadores, mas a disposição de começar sem ele.",
        "A cultura de 'fingir que sabe' cria organizações frágeis, líderes isolados e equipes que também fingem.",
        "Dizer 'não sei, mas vou descobrir' cria confiança, abre espaço para inovação e atrai colaboradores de alto calibre.",
        "Cada erro em território desconhecido é uma aula que nenhum curso pode replicar — e o custo de não tentar é sempre maior.",
        "A mentalidade de principiante não é uma fase a superar — é uma postura a cultivar permanentemente como líder.",
        "Os líderes mais adaptativos mantêm a curiosidade e a humildade do principiante mesmo quando acumulam décadas de experiência.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                { label: "5.5 Inovação a partir da ignorância e da curiosidade", percent: 93, descricao: "Bohannon demonstra que a ausência de expertise pode ser uma vantagem para inovar — o principiante não tem a rigidez de quem 'sabe como as coisas são feitas', e isso libera pensamento não convencional." },
                { label: "5.2 Mentalidade de crescimento como motor de reinvenção", percent: 88, descricao: "A proposta de abraçar permanentemente o status de principiante é a forma mais sustentável de manter capacidade de aprendizado e reinvenção contínuos." },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                { label: "1.8 Humildade intelectual e vulnerabilidade como força", percent: 90, descricao: "Bohannon posiciona a vulnerabilidade de admitir ignorância não como fraqueza, mas como uma das formas mais poderosas de liderança autêntica e geradora de confiança." },
                { label: "1.1 Coragem para iniciar e persistir sem garantias", percent: 85, descricao: "Toda a palestra é um argumento em favor da coragem de agir antes de estar pronto — o que é um traço central de liderança pessoal e iniciativa." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra de empreendedorismo e desenvolvimento de liderança" },
        { label: "Estilo", value: "Narrativo, bem-humorado e emocionalmente autêntico" },
        { label: "Aplicabilidade", value: "Muito alta — convite imediato a mudar a relação com o não-saber" },
        { label: "Intensidade conceitual", value: "Moderada — mensagem profunda com exemplos concretos e acessíveis" },
    ],
},

// Todd Henry — "Domesticando Tigres" (GLS 2019–2020)
gls19_11: {
    speaker: "Todd Henry",
    speakerPhoto: "/speakers/todd-henry.png",
    title: "Domesticando Tigres",
    edition: "GLS 2019–2020",
    duration: "29:46",
    bio: "Todd Henry ensina líderes e organizações a estabelecer práticas que levam ao brilhantismo todos os dias. Como apresentador do Podcast Accidental Creative — com milhões de downloads — ele oferece dicas semanais e ideias para manter-se produtivo, brilhante e saudável criativamente. É autor de quatro livros, incluindo 'Die Empty', nomeado pela Amazon como um dos melhores livros de 2013, e 'Herding Tigers', um manual prático para qualquer pessoa encarregada de liderar equipes ao brilhantismo criativo. Henry é reconhecido internacionalmente como uma das maiores autoridades em como líderes podem criar as condições para que o talento criativo floresça de forma consistente e sustentável.",
    temaCentral: "Liderar pessoas criativas exige uma abordagem completamente diferente do modelo tradicional de gestão — em vez de controle e processos rígidos, o líder precisa criar as condições ambientais onde o talento criativo pode rugir com seu pleno potencial.",
    sinopse: [
        "Todd Henry usa a metáfora de 'domesticar tigres' para descrever o desafio único e fascinante de liderar pessoas criativas — pessoas talentosas, apaixonadas, frequentemente imprevisíveis e invariavelmente resistentes a controle. A palestra parte de uma premissa central: liderar criativos exige uma abordagem fundamentalmente diferente do modelo tradicional de gestão orientado por controle, processos e previsibilidade. O que funciona para gerenciar resultados mensuráveis frequentemente sufoca o talento criativo que é a única fonte real de diferenciação competitiva de uma organização.",
        "Henry apresenta quatro tensões centrais que todo líder de equipes criativas precisa navegar com sabedoria: estabilidade versus risco, processos versus liberdade, pessoas versus resultados, e manutenção versus crescimento. Nenhuma dessas tensões tem uma resolução permanente ou uma resposta certa para todos os contextos — o que distingue o líder de criativos habilidoso é a capacidade de sentir onde o pêndulo está e ajustá-lo de forma dinâmica. Dar estrutura demais sufoca; dar liberdade demais gera caos improdutivo.",
        "O insight central de Henry é que domesticar tigres não significa domá-los — significa criar o ambiente onde eles possam rugir com seu pleno potencial. Os melhores líderes de equipes criativas estabelecem estruturas mínimas que protegem o que mais importa: o tempo, a energia e a atenção das pessoas talentosas. Eles removem obstáculos, blindam a equipe de ruídos desnecessários, criam condições de segurança psicológica para experimentação, e se recusam a desperdiçar o talento raro que têm sob sua responsabilidade em burocracia, reuniões inúteis e microgerenciamento.",
    ],
    softSkills: [
        "Liderança contextual e situacional",
        "Gestão de tensões e paradoxos organizacionais",
        "Criação de ambientes de segurança psicológica",
        "Proteção do tempo e atenção da equipe",
        "Facilitação do brilhantismo criativo alheio",
        "Navegação entre estrutura e liberdade",
        "Remoção de obstáculos e blindagem da equipe",
    ],
    palavrasChave: [
        "liderança criativa",
        "equipes criativas",
        "segurança psicológica",
        "brilhantismo",
        "tensões organizacionais",
        "estrutura e liberdade",
        "produtividade criativa",
        "gestão de talentos",
        "domesticar tigres",
    ],
    takeaways: [
        "Liderar pessoas criativas exige uma abordagem completamente diferente do modelo de gestão tradicional orientado por controle.",
        "Domesticar tigres não é domá-los — é criar o ambiente onde eles podem rugir com seu pleno potencial.",
        "Todo líder de criativos navega quatro tensões constantes: estabilidade vs. risco, processo vs. liberdade, pessoas vs. resultados, manutenção vs. crescimento.",
        "Estrutura demais sufoca o talento; liberdade demais gera caos — o equilíbrio dinâmico é a habilidade central do líder de criativos.",
        "Os melhores líderes de equipes criativas estabelecem estruturas mínimas que protegem tempo, energia e atenção dos talentos.",
        "Remover obstáculos e blindar a equipe de ruídos desnecessários é tão valioso quanto qualquer iniciativa de desenvolvimento.",
        "Desperdiçar talento raro em burocracia, reuniões inúteis e microgerenciamento é um dos erros mais caros que um líder pode cometer.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                { label: "4.3 Criação de condições para alto desempenho", percent: 92, descricao: "Henry demonstra que o papel estratégico do líder de criativos é criar as condições ambientais — proteção de tempo, remoção de obstáculos, segurança psicológica — que permitem ao talento produzir em seu melhor nível." },
                { label: "4.6 Navegação de tensões e paradoxos organizacionais", percent: 87, descricao: "A framework das quatro tensões é uma ferramenta estratégica poderosa para líderes diagnosticarem onde estão e ajustarem o equilíbrio entre forças opostas em suas equipes." },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                { label: "6.4 Proteção da energia criativa e da saúde do talento", percent: 88, descricao: "A proposta de blindar a equipe de ruídos, microgerenciamento e burocracia é, em essência, uma prática de proteção da saúde emocional e criativa dos colaboradores." },
                { label: "6.3 Segurança psicológica como condição de desempenho", percent: 82, descricao: "Henry posiciona a segurança psicológica — o ambiente onde experimentação e erro são seguros — como pré-requisito para que equipes criativas entreguem seu melhor trabalho." },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Palestra de liderança criativa com framework prático" },
        { label: "Estilo", value: "Analítico, bem estruturado e com exemplos vividos" },
        { label: "Aplicabilidade", value: "Muito alta — framework das quatro tensões imediatamente aplicável por qualquer líder de equipes criativas" },
        { label: "Intensidade conceitual", value: "Moderada-alta — conteúdo denso com estrutura clara e acessível" },
    ],
},


    // ===== gls20-21 =====
// Albert Tate — "Liderança que atende ao momento" (GLS 2020–2021)
gls20_1: {
    speaker: "Albert Tate",
    speakerPhoto: "/speakers/albert-tate.png",
    title: "Liderança que Atende ao Momento",
    edition: "GLS 2020–2021",
    duration: "33:42",
    bio: "Albert Tate é pastor sênior e fundador da Fellowship Church, uma das igrejas multiétnicas de crescimento mais rápido nos EUA, estabelecida em 2012. Antes de fundar a Fellowship Church, ocupou cargos estratégicos de liderança pastoral por mais de 20 anos. Integra o conselho de várias organizações, incluindo a Azusa Pacific University, o Fuller Youth Institute's Advisory Council e a Global Leadership Network. Comunicador dinâmico reconhecido por combinar desafio bíblico com humor, é colaborador do livro Letters to a Birmingham Jail: A Response to the Words and Dreams of Dr. Martin Luther King Jr.",
    temaCentral:
        "A liderança autêntica não é algo que se busca fora de si — ela precisa ser cultivada de dentro para fora, manifestando-se em três ações essenciais: derrubar mesas de injustiça, lavar os pés de aliados e adversários, e lutar com integridade até abraçar a própria identidade.",
    sinopse: [
        "Albert Tate abre sua fala com a história de Elijah McCoy, inventor negro cuja genialidade foi impedida pela discriminação racial, mas que criou uma inovação tão superior que os clientes precisavam pedir “o verdadeiro McCoy” para distingui-la das imitações. A partir daí, Tate lança a pergunta que permeia toda a palestra: sua liderança é autêntica ou é uma imitação do que você vê nos outros?",
        "A resposta é estruturada em três fatores essenciais de liderança autêntica, extraídos da vida de Jesus. O primeiro é derrubar as mesas da injustiça — identificar sistemas que excluem e barrá-los ativamente, perguntando sempre “Onde está o roxo?” em sua equipe, organização ou comunidade. O segundo é lavar os pés — exercer compaixão radical, inclusive para com aqueles que nos traem ou frustram, recusando a “cultura do cancelamento” como prática legítima de liderança.",
        "O terceiro fator é aprender a lutar para abraçar sua identidade, como Jacó que wrestling com o divino e recebeu um novo nome. Tate conclui que momentos de crise — pandemia, tensão racial, ruptura institucional — não exigem que o líder imite outros, mas que apareça com a liderança que foi desenvolvida dentro de si. É essa autenticidade cultivada que atende ao momento.",
    ],
    softSkills: [
        "Coragem para confrontar a injustiça",
        "Compaixão radical e incondicional",
        "Autoconhecimento e autenticidade",
        "Resiliência identitária sob pressão",
        "Senso de justiça e inclusão",
        "Humildade para servir a quem discorda",
        "Integridade em momentos de crise",
    ],
    palavrasChave: [
        "liderança autêntica",
        "injustiça sistêmica",
        "inclusão",
        "compaixão",
        "identidade",
        "serviço",
        "coragem",
        "propósito",
        "crise",
        "pertencimento",
    ],
    takeaways: [
        "A liderança não é algo que se busca fora de si — é algo a ser cultivado de dentro para fora.",
        "Líderes autênticos derrubam as mesas da injustiça sem derrubar as pessoas que cometem injustiças.",
        "Pergunte sempre “Onde está o roxo?” para identificar quem está sistematicamente excluído da sua mesa.",
        "Compaixão radical inclui lavar os pés de quem te trai — negar isso é negar a essência da liderança servidora.",
        "A cultura do cancelamento não é uma prática de liderança — cada pessoa vale mais do que o seu pior ato.",
        "Crises exigem que o líder apareça com a identidade que foi desenvolvida, não com uma imitação de outros.",
        "A autenticidade que atende ao momento é resultado de anos de cultivo interior, não de performance externa.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e autenticidade",
                    percent: 90,
                    descricao:
                        "O fio condutor da palestra é a pergunta “Você é um verdadeiro McCoy?” — um chamado direto à liderança que emerge da identidade cultivada, não da imitação.",
                },
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 80,
                    descricao:
                        "Derrubar mesas da injustiça e lavar os pés de inimigos exige coragem explícita — Tate afirma que é “difícil derrubar a mesa em que você está confortavelmente sentado”.",
                },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.3 Legado e impacto social",
                    percent: 85,
                    descricao:
                        "A pergunta “Onde está o roxo?” posiciona o líder como agente de transformação estrutural — o impacto é medido por quem passa a ter acesso à mesa.",
                },
                {
                    label: "7.1 Clareza de propósito",
                    percent: 75,
                    descricao:
                        "A luta de Jacó para abraçar sua identidade representa o propósito encontrado no enfrentamento — Tate ancora a liderança em quem se é, não no que se faz.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com base em narrativa bíblica e histórica" },
        { label: "Estilo", value: "Storytelling emocional + humor + chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para liderança com propósito, diversidade e inclusão, cultura organizacional" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional e ética)" },
    ],
},

// Amy Edmondson — "Segurança psicológica" (GLS 2020–2021)
gls20_2: {
    speaker: "Amy Edmondson",
    speakerPhoto: "/speakers/amy-edmondson.png",
    title: "Segurança Psicológica",
    edition: "GLS 2020–2021",
    duration: "27:25",
    bio: "Amy Edmondson é Professora Novartis de Liderança e Gestão na Harvard Business School e pioneira do conceito de segurança psicológica nas organizações. Reconhecida pelo ranking global Thinkers50 dos principais pensadores em gestão desde 2011 e eleita “Pensadora de Gestão mais Influente de 2019” pela HRMI, é autora de quatro livros, entre eles Teaming: How Organizations Learn, Innovate and Compete in the Knowledge Economy e The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth. Suas pesquisas influenciam organizações de saúde, tecnologia e serviços em todo o mundo.",
    temaCentral:
        "Segurança psicológica — a crença de que o ambiente é seguro para riscos interpessoais — é o alicerce que permite que qualquer voz, em qualquer nível hierárquico, contribua com o que importa antes que seja tarde demais.",
    sinopse: [
        "Amy Edmondson parte da tragédia da Columbia de 2003: um engenheiro viu um potencial problema no lançamento da espaçonave, tentou investigar, foi silenciado pela hierarquia e, na reunião onde poderia ter falado, simplesmente não conseguiu. Seis meses depois, a investigação confirmou que a causa do desastre era exatamente o que ele havia pressentido. A frase “Eu simplesmente não consegui” captura a realidade de milhões de profissionais que diariamente retêm informações críticas por medo de parecer ignorantes, incompetentes ou negativos.",
        "A pesquisadora define segurança psicológica como a crença de que o local de trabalho é seguro para riscos interpessoais — não como um ambiente sem conflito, mas como um espaço onde discordar, questionar e admitir erros são atos bem-vindos. Em estudo com 23 UTIs norte-americanas, equipes com segurança psicológica equivalente entre todos os níveis hierárquicos alcançaram 18% de melhoria em mortalidade e complicações. O Google, em seu Projeto Aristóteles, chegou à mesma conclusão: segurança psicológica era o fator número um que distinguia equipes de alta performance.",
        "Edmondson apresenta comportamentos concretos que líderes podem adotar em cada nível: líderes seniores devem praticar antecipação nítida e conclusão visível de compromissos; líderes de equipe devem exercer comunicação antecipatória, falibilidade e encorajamento ativo ao risco. O ponto central é que a voz de qualquer pessoa, a qualquer momento, pode ser decisiva — e a função do líder é criar as condições para que essa voz seja dita antes que o dano seja irreversível.",
    ],
    softSkills: [
        "Escuta ativa e abertura ao questionamento",
        "Humildade intelectual",
        "Comunicação transparente e antecipada",
        "Coragem para discordar construtivamente",
        "Confiança interpessoal",
        "Gestão emocional em ambientes de pressão",
        "Liderança inclusiva e não punitiva",
    ],
    palavrasChave: [
        "segurança psicológica",
        "hierarquia",
        "silêncio organizacional",
        "confiança",
        "aprendizado",
        "inovação",
        "voz da equipe",
        "liderança inclusiva",
        "risco interpessoal",
        "cultura organizacional",
    ],
    takeaways: [
        "A maioria das pessoas não fala o que sabe porque não quer parecer ignorante, incompetente, intrometida ou negativa.",
        "Segurança psicológica não é ausência de conflito — é a permissão para ser sincero sem punição.",
        "O silêncio em reuniões de alto nível pode custar vidas, projetos e organizações inteiras.",
        "Quanto maior o status hierárquico, maior a sensação de que sua voz é bem-vinda — o líder precisa ativamente reverter essa assimetria.",
        "Equipes com segurança psicológica uniforme entre níveis alcançaram desempenho significativamente melhor em contextos de saúde e tecnologia.",
        "O líder deve ser o primeiro a mostrar falibilidade — só assim cria a permissão para que os outros falem.",
        "A voz de qualquer pessoa, a qualquer momento, pode ser a informação decisiva que salva a missão.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção de confiança e ambiente seguro",
                    percent: 95,
                    descricao:
                        "A palestra inteira define e demonstra empiricamente como construir ambientes onde as pessoas confiam o suficiente para falar — é o tema central e o objeto de pesquisa da palestrante.",
                },
                {
                    label: "2.3 Cultura de aprendizado e falibilidade",
                    percent: 88,
                    descricao:
                        "Edmondson demonstra que organizações psicologicamente seguras aprendem mais rápido porque erros e dúvidas são compartilhados antes de se tornarem desastres.",
                },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.2 Comunicação antecipatória e transparente",
                    percent: 82,
                    descricao:
                        "A palestrante apresenta comportamentos específicos de comunicação — dizer o que vai acontecer antes, compartilhar preocupações sem esperar certeza — como pilares da segurança psicológica.",
                },
                {
                    label: "3.1 Escuta ativa e abertura ao feedback",
                    percent: 78,
                    descricao:
                        "O estudo da Columbia ilustra o custo do líder que não cria espaço para que preocupações sejam ouvidas — a escuta ativa do líder é pré-requisito para que a voz da equipe apareça.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa científica e estudos de caso" },
        { label: "Estilo", value: "Acadêmico-aplicado com storytelling e dados" },
        { label: "Aplicabilidade", value: "Alta para líderes de equipe, RH, cultura organizacional e saúde" },
        { label: "Intensidade conceitual", value: "Alta (pesquisa quantitativa + framework comportamental)" },
    ],
},

// Craig Groeschel — "Lidere durante o mergulho" (GLS 2020–2021)
gls20_3: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "Lidere Durante o Mergulho",
    edition: "GLS 2020–2021",
    duration: "40:52",
    bio: "Craig Groeschel é fundador e pastor sênior da Life.Church, uma das igrejas mais inovadoras do mundo, com serviços presenciais em mais de 40 campi e frequência semanal superior a 85 mil pessoas. Criador do YouVersion Bible App, com mais de meio bilhão de downloads globais, Groeschel foi eleito um dos dez principais CEOs dos EUA em empresas de pequeno e médio porte pela Glassdoor. É autor best-seller do New York Times, apresentador do Craig Groeschel Leadership Podcast — o mais ouvido do mundo na categoria liderança — e representante global do Global Leadership Summit.",
    temaCentral:
        "Toda organização passa por ciclos de vida, e quando o declínio chega, o líder tem uma escolha: apertar o botão com mais força ou ter a coragem de liderar durante o mergulho — aceitando que as coisas podem piorar antes de melhorar para que a reinvenção seja possível.",
    sinopse: [
        "Craig Groeschel apresenta o conceito de ciclos de vida organizacional — nascimento, crescimento, maturidade, declínio e morte — e argumenta que a pandemia de 2020 empurrou a maioria das organizações para fases de mergulho inevitáveis. O erro mais comum do líder nessa situação é fazer o que sempre foi feito, só com mais intensidade: apertar o botão do elevador com mais força quando o elevador simplesmente não está funcionando.",
        "O caminho alternativo é “liderar durante o mergulho”: ter a coragem de reconhecer o ciclo, assumir responsabilidade sem culpar a Covid, a economia ou os millennials, e mudar a forma como se pensa na mudança. Groeschel demonstra, com a história da senhora Fran, que as pessoas não odeiam a mudança — elas odeiam a maneira como os líderes tentam mudá-las. Conectar a mudança ao que as pessoas já valorizam transforma resistência em engajamento.",
        "Groeschel estrutura quatro práticas para liderar durante o mergulho: mudar como pensa na mudança; assumir a responsabilidade em vez de apontar culpados; criar vocabulário compartilhado — “mergulho de desenvolvimento”, “mergulho de eficiência” — para que a equipe entenda que o momento difícil é estratégico; e agir com fé, a coragem de avançar com incerteza sabendo que às vezes as coisas precisam piorar antes de melhorar.",
    ],
    softSkills: [
        "Coragem para liderar em tempos de incerteza",
        "Responsabilidade e accountability",
        "Adaptabilidade e agilidade organizacional",
        "Comunicação da mudança com empatia",
        "Pensamento estratégico em crise",
        "Resiliência e perseverança",
        "Mentalidade de crescimento pós-crise",
    ],
    palavrasChave: [
        "ciclo de vida organizacional",
        "declínio",
        "reinvenção",
        "mudança",
        "crise",
        "responsabilidade",
        "coragem",
        "adaptação",
        "liderança em crise",
        "oportunidade",
    ],
    takeaways: [
        "Toda organização tem ciclos — nascimento, crescimento, maturidade, declínio. Ignorar o ciclo acelera a morte.",
        "Em momentos de crise, grandes líderes não apontam culpados — eles assumem responsabilidade.",
        "As pessoas não odeiam a mudança, elas odeiam a forma como os líderes tentam mudá-las.",
        "Criar vocabulário compartilhado para o momento difícil ajuda a equipe a entender que o mergulho é estratégico.",
        "Às vezes as coisas têm que piorar antes de melhorar — essa é a essência de liderar durante o mergulho.",
        "Crises criam oportunidades sem precedentes para líderes que observam com atenção e agem com agilidade.",
        "A coragem de avançar com incerteza é o que separa a reinvenção do declínio permanente.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 88,
                    descricao:
                        "O título da palestra é um chamado explícito à coragem — “liderar durante o mergulho” significa avançar sabendo que as coisas podem piorar antes de melhorar.",
                },
                {
                    label: "1.2 Disciplina, responsabilidade e accountability",
                    percent: 80,
                    descricao:
                        "Groeschel afirma enfaticamente que “grandes líderes nunca apontam culpados — assumem responsabilidade”, tornando a accountability um atributo central da palestra.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.1 Resiliência e capacidade de recuperação",
                    percent: 85,
                    descricao:
                        "O conceito de “liderar durante o mergulho” é uma estrutura de resiliência organizacional — a capacidade de atravessar o declínio sem perder o rumo da reinvenção.",
                },
                {
                    label: "6.2 Equilíbrio emocional em contextos adversos",
                    percent: 72,
                    descricao:
                        "Groeschel aborda a gestão emocional do líder diante do peso das decisões em crise, reconhecendo que o medo de piorar as coisas é real e precisa ser enfrentado com fé e estratégia.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prático-estratégica com base em ciclos de vida organizacional" },
        { label: "Estilo", value: "Storytelling + humor + framework aplicável" },
        { label: "Aplicabilidade", value: "Alta para líderes organizacionais, pastores, empreendedores e gestores em crise" },
        { label: "Intensidade conceitual", value: "Média (conceitos acessíveis com profundidade estratégica)" },
    ],
},

// Lysa TerKeurst — "O obstáculo mais surpreendente à inovação" (GLS 2020–2021)
gls20_4: {
    speaker: "Lysa TerKeurst",
    speakerPhoto: "/speakers/lysa-terkeurst.png",
    title: "O Obstáculo Mais Surpreendente à Inovação",
    edition: "GLS 2020–2021",
    duration: "42:55",
    bio: "Lysa TerKeurst é presidente do Proverbs 31 Ministries e fundadora do COMPEL Writer Training, que já ajudou centenas de autores a desenvolver sua escrita. Autora de mais de 20 livros best-sellers, incluindo It's Not Supposed to Be This Way e Uninvited, foi destaque na Fox News, na Oprah e no The Today Show e recebeu o Champions of Faith Author Award. Seu ministério alcança milhões de pessoas por meio de escritos, estudos bíblicos e programas de treinamento em todo o mundo. Seu livro Forgiving What You Can't Forget aborda o poder transformador do perdão para reconstruir vidas e relacionamentos.",
    temaCentral:
        "O maior obstáculo à inovação não é a falta de criatividade ou recursos — é o rancor e a falta de perdão que paralisam líderes, sufocam equipes e impedem que as pessoas se sintam seguras o suficiente para arriscar.",
    sinopse: [
        "Lysa TerKeurst propõe uma tese inesperada: a inovação não é bloqueada pela ausência de boas ideias, mas pela ausência de perdão. Para ela, inovação é “o mistério que alguém da sua equipe está morrendo de vontade de resolver, se ao menos você o fizer sentir-se seguro o suficiente para fazê-lo.” Quando líderes guardam rancores, criam ambientes de ansiedade e paranoia onde as pessoas se protegem em vez de criar — e pessoas que não cometem erros são aquelas que simplesmente não fazem nada.",
        "A palestrante apresenta três artigos de publicações como Forbes e Inc.com que quantificam o impacto do perdão nos negócios: um deles aponta que organizações com CEOs de alto caráter — avaliados com base em integridade, responsabilidade, compaixão e perdão — tiveram retorno sobre o patrimônio cinco vezes maior do que aquelas lideradas por executivos de baixo caráter. O perdão, longe de ser apenas uma virtude pessoal, é uma ferramenta de liderança com impacto direto na performance.",
        "TerKeurst compartilha sua própria jornada: em 2016, no auge do crescimento do Proverbs 31 Ministries, uma série de traições profundas e pessoais a colocou diante da necessidade urgente de perdoar. A conclusão que ela oferece é que a verdadeira recompensa do perdão não é o benefício organizacional — é parar de sofrer pelo que outros fizeram com você. Quando líderes transformam a dor em compaixão e a ferida em sabedoria, criam espaços onde as equipes podem voar.",
    ],
    softSkills: [
        "Capacidade de perdoar e liberar rancores",
        "Criação de ambientes psicologicamente seguros",
        "Integridade e caráter como base da liderança",
        "Compaixão com limites saudáveis",
        "Resiliência emocional pós-traição",
        "Vulnerabilidade como ato de liderança",
        "Cultura de risco e aprendizado com o erro",
    ],
    palavrasChave: [
        "perdão",
        "inovação",
        "rancor",
        "segurança psicológica",
        "caráter",
        "liderança com integridade",
        "compaixão",
        "vulnerabilidade",
        "cultura organizacional",
        "risco criativo",
    ],
    takeaways: [
        "O maior obstáculo à inovação não é a falta de criatividade — é o rancor que paralisa líderes e equipes.",
        "Pessoas que não cometem erros não fazem nada — líderes que não perdoam sufocam a inovação.",
        "Organizações lideradas por executivos com alto caráter (incluindo perdão) apresentam desempenho financeiro superior.",
        "O perdão não é fraqueza — é a ferramenta que cria o ambiente seguro onde a inovação acontece.",
        "Transformar dor em compaixão e ferida em sabedoria é o trabalho mais importante do líder.",
        "Quando o líder cria espaço para a graça, a equipe se arrisca — e é no risco que mora a inovação.",
        "A verdadeira recompensa do perdão é parar de carregar o sofrimento causado por outros.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.2 Criação de ambiente seguro para inovar",
                    percent: 90,
                    descricao:
                        "TerKeurst demonstra que o perdão é o mecanismo que cria a segurança psicológica necessária para que a equipe assuma riscos e inove — sem ele, as pessoas se trancam em autopreservação.",
                },
                {
                    label: "5.1 Mentalidade inovadora e tolerância ao erro",
                    percent: 82,
                    descricao:
                        "A palestra argumenta que líderes que não perdoam erros criam culturas avessas ao risco, onde as pessoas escolhem a inação segura sobre a tentativa corajosa.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Caráter e integridade como fundamento",
                    percent: 85,
                    descricao:
                        "A pesquisa citada avalia o caráter executivo com base em integridade, responsabilidade, compaixão e perdão — TerKeurst ancora a liderança eficaz no caráter pessoal do líder.",
                },
                {
                    label: "1.4 Autogestão emocional e cura pessoal",
                    percent: 80,
                    descricao:
                        "Ao compartilhar sua jornada de perdão após traições profundas, a palestrante demonstra que a saúde emocional do líder é pré-requisito para a saúde de toda a organização.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com fundamentação em pesquisa e narrativa pessoal" },
        { label: "Estilo", value: "Storytelling emocional + dados de negócios + chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para cultura organizacional, liderança com caráter e gestão de conflitos" },
        { label: "Intensidade conceitual", value: "Média (proposta contraintuitiva com suporte empírico)" },
    ],
},

// Marcus Buckingham — "Como os melhores líderes desenvolvem resiliência" (GLS 2020–2021)
gls20_5: {
    speaker: "Marcus Buckingham",
    speakerPhoto: "/speakers/marcus-buckingham.png",
    title: "Como os Melhores Líderes Desenvolvem Resiliência",
    edition: "GLS 2020–2021",
    duration: "20:08",
    bio: "Marcus Buckingham é pesquisador global, pensador de liderança e pioneiro do Movimento dos Pontos Fortes, que ajudou milhões de profissionais a identificar e maximizar seus talentos naturais. Ex-pesquisador sênior da Gallup Organization, lidera atualmente a visão do ADP Research Institute como Chefe de Pessoas e Desempenho. Autor de nove livros best-sellers, incluindo First Break All the Rules, Now Discover Your Strengths e Nine Lies About Work, seu trabalho é referenciado por empresas como Toyota, Facebook, Coca-Cola, Microsoft e Disney. No GLS 2020, apresentou em primeira mão os resultados de sua pesquisa inédita sobre resiliência com 25 mil trabalhadores em 25 países.",
    temaCentral:
        "Resiliência não é um traço de personalidade com o qual se nasce — é uma capacidade construída a partir de três fontes distintas: como o indivíduo se sente sobre si mesmo, como percebe seu líder direto e como avalia os líderes seniores da organização.",
    sinopse: [
        "Marcus Buckingham apresenta pela primeira vez os resultados de uma pesquisa inédita do ADP Research Institute com 25 mil trabalhadores em 25 países, cujo objetivo era identificar o que de fato compõe a resiliência — não como conceito abstrato, mas como capacidade mensurável e previsível. Após testar centenas de variáveis, a pesquisa chegou a 10 itens que predizem comportamentos resilientes reais, como ausência de acidentes, baixo absenteísmo e retenção voluntária.",
        "Os 10 itens convergem para três fontes distintas: como o trabalhador se sente sobre si mesmo e seu trabalho (autonomia, foco, entusiasmo, esperança); como percebe seu líder de equipe (comunicação antecipatória, confiança, encorajamento ao risco); e como avalia os líderes seniores da organização (preparo para eventualidades, consistência entre o que dizem e fazem, confiança geral). A resiliência, portanto, não depende apenas do indivíduo — ela é sistêmica e relacional.",
        "Buckingham traduz os achados em práticas concretas: líderes seniores devem cultivar “antecipação nítida” — pintar imagens claras do futuro para transformar ansiedade em confiança — e “conclusão visível”, cumprindo o que prometem e chamando atenção para isso. Líderes de equipe devem praticar comunicação antecipatória, mostrar falibilidade e encorajar o risco. Membros da equipe devem desenvolver a capacidade de encontrar sentido no trabalho diário.",
    ],
    softSkills: [
        "Comunicação antecipatória e transparente",
        "Confiança como prática deliberada",
        "Encorajamento ao risco calculado",
        "Sentido e propósito no trabalho",
        "Consistência entre discurso e ação",
        "Liderança orientada a clareza e esperança",
        "Autogestão e foco em contextos adversos",
    ],
    palavrasChave: [
        "resiliência",
        "pontos fortes",
        "confiança",
        "comunicação antecipatória",
        "liderança de equipe",
        "segurança",
        "esperança",
        "autonomia",
        "pesquisa organizacional",
        "performance",
    ],
    takeaways: [
        "Resiliência não é um traço fixo de personalidade — é uma capacidade construída em três camadas relacionais.",
        "Os 10 itens que mais predizem resiliência real envolvem autonomia, confiança no líder e clareza sobre o futuro.",
        "Líderes seniores constroem resiliência com antecipação nítida: pintam imagens claras do futuro para transformar ansiedade em confiança.",
        "Conclusão visível — fazer o que prometeu e destacar isso — é um dos maiores construtores de confiança organizacional.",
        "Líderes de equipe resilientes comunicam antecipadamente, mostram falibilidade e encorajam o risco.",
        "A resiliência é sistêmica — um único líder não consegue sustentá-la sozinho sem o suporte das camadas acima e abaixo.",
        "Saber o que virá é mais poderoso do que saber se será bom ou ruim — nitidez reduz o medo do desconhecido.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.1 Resiliência sistêmica e individual",
                    percent: 95,
                    descricao:
                        "A palestra inteira é dedicada a definir, medir e construir resiliência com base em pesquisa empírica — é o tema central e o objeto de estudo do palestrante.",
                },
                {
                    label: "6.3 Esperança e orientação ao futuro",
                    percent: 85,
                    descricao:
                        "Um dos 10 itens que compõem resiliência é “sempre acredito que as coisas vão dar certo no final” — Buckingham demonstra que esperança é mensurável e cultivável.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Consistência e confiabilidade como liderança",
                    percent: 80,
                    descricao:
                        "A “conclusão visível” — cumprir o que prometeu e chamar atenção para isso — é apresentada como prática fundamental do líder sênior para construir resiliência em sua equipe.",
                },
                {
                    label: "1.5 Comunicação clara e antecipada",
                    percent: 78,
                    descricao:
                        "Buckingham demonstra que a comunicação antecipatória do líder — dizer o que a equipe precisa saber antes de precisar — é um dos maiores preditores de resiliência organizacional.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa quantitativa inédita" },
        { label: "Estilo", value: "Acadêmico-aplicado com dados e recomendações práticas por nível hierárquico" },
        { label: "Aplicabilidade", value: "Alta para RH, líderes seniores, gestores de equipe e desenvolvimento organizacional" },
        { label: "Intensidade conceitual", value: "Alta (pesquisa empírica com framework de três camadas)" },
    ],
},

// Michael Todd — "O ritmo da liderança" (GLS 2020–2021)
gls20_6: {
    speaker: "Michael Todd",
    speakerPhoto: "/speakers/michael-todd.png",
    title: "O Ritmo da Liderança",
    edition: "GLS 2020–2021",
    duration: "26:22",
    bio: "Michael Todd e sua esposa Natalie assumiram a liderança da Transformation Church em 2015, crescendo de uma pequena congregação para mais de 125 mil participantes semanais entre presenciais e online. Pastor e influenciador de mídia social, suas pregações acumulam mais de 17 milhões de visualizações no YouTube. É autor do best-seller Relationship Goals, lançado em abril de 2020. Todd é reconhecido por sua capacidade de comunicar princípios de liderança e fé de forma contemporânea e culturalmente relevante para uma audiência multigeracional, multiétnica e multicultural.",
    temaCentral:
        "O ritmo de liderança insustentável é um dos maiores inimigos do líder moderno — e encontrar o ritmo da graça, o ponto ideal entre grandes resultados e descanso verdadeiro, é o que transforma líderes que lutam em líderes que caminham a passos largos por décadas.",
    sinopse: [
        "Michael Todd abre sua fala tocando bateria no palco para ilustrar o tema: quando diferentes partes — mão direita, esquerda, pé direito e esquerdo — trabalham em ritmos diferentes, o resultado é ruído. Quando estão alinhadas, surge a música. A mesma lógica se aplica à liderança: quando empresa, família, fé, saúde e integridade operam em ritmos desconexos, o líder se fragmenta. Ele revela que o seu próprio ritmo quase o matou no início da liderança da Transformation Church.",
        "Todd apresenta o contraste entre dois modos de operar: “lutar”, que é correr acelerado, esgotado, sem sustentabilidade; e “stride” — andar a passos largos, decididos, em uma direção específica. Ele encontrou na vida de Jesus o modelo: em três anos, Jesus construiu o movimento mais duradouro da história sem nunca ser visto correndo para um compromisso. O segredo não estava na velocidade, mas no ritmo intencional.",
        "Em dezembro de 2017, Todd cancelou compromissos importantes da organização para diminuir o ritmo — e viu a Transformation Church crescer exponencialmente nos anos seguintes. A conclusão que ele compartilha é que o “ritmo da graça” é o ponto ideal entre grandes resultados e descanso verdadeiro, entre trabalho duro e saúde integral, entre números fantásticos e sucesso interior genuíno. Líderes que encontram esse ritmo têm impacto duradouro; líderes que lutam chegam ao esgotamento.",
    ],
    softSkills: [
        "Autogestão e equilíbrio de vida",
        "Clareza de prioridades e foco",
        "Coragem para desacelerar quando necessário",
        "Integridade e coerência entre esferas da vida",
        "Sustentabilidade na liderança de longo prazo",
        "Humildade para reconhecer limites pessoais",
        "Transparência e vulnerabilidade como líder",
    ],
    palavrasChave: [
        "ritmo",
        "sustentabilidade",
        "esgotamento",
        "descanso",
        "equilíbrio",
        "liderança saudável",
        "integridade",
        "propósito",
        "saúde mental",
        "resultados duradouros",
    ],
    takeaways: [
        "O ritmo insustentável é um dos maiores inimigos do líder — e muitos estão operando bem além de seus limites sem perceber.",
        "Há dois modos de operar: “lutar” (correr acelerado sem sustentabilidade) e “stride” (caminhar a passos largos, decididos e intencionais).",
        "Jesus completou a missão mais impactante da história sem nunca ser visto correndo para um compromisso — o ritmo importa.",
        "O ritmo da graça é o ponto ideal entre grandes resultados e descanso verdadeiro, entre trabalho duro e saúde integral.",
        "Quando empresa, família, fé e saúde operam em ritmos desconexos, o resultado é ruído — não música.",
        "Desacelerar estrategicamente não é fracasso — pode ser o maior ato de liderança que um líder realiza.",
        "Líderes que encontram o ritmo certo têm impacto duradouro; líderes que lutam chegam ao esgotamento antes do legado.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Disciplina, hábitos e ritmo sustentável",
                    percent: 92,
                    descricao:
                        "A palestra é inteiramente sobre encontrar e manter o ritmo certo na liderança — Todd demonstra que a disciplina do ritmo é mais determinante para o legado do que a intensidade do esforço.",
                },
                {
                    label: "1.4 Saúde integral e autogestão",
                    percent: 85,
                    descricao:
                        "Todd revela que seu ritmo quase o destruiu e que a mudança de pace transformou tanto sua saúde quanto os resultados da organização — saúde interior e impacto externo estão diretamente conectados.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.3 Decisões estratégicas de longo prazo",
                    percent: 78,
                    descricao:
                        "A decisão de cancelar compromissos e diminuir o ritmo em 2017 foi contraintuitiva mas estratégica — Todd demonstra que líderes eficazes tomam decisões de ritmo como escolhas de longo prazo.",
                },
                {
                    label: "4.1 Clareza de prioridades e foco estratégico",
                    percent: 72,
                    descricao:
                        "O conceito de “stride” — passos decididos em uma direção específica — pressupõe clareza de prioridades que permite ao líder avançar com intencionalidade e sem dispersão.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com base em experiência pessoal e princípios de liderança" },
        { label: "Estilo", value: "Storytelling pessoal + metáfora musical + humor" },
        { label: "Aplicabilidade", value: "Alta para líderes em risco de burnout, liderança saudável e sustentabilidade de carreira" },
        { label: "Intensidade conceitual", value: "Média-baixa (alta carga emocional e de identificação pessoal)" },
    ],
},

// Nona Jones — "Seguro não é o suficiente" (GLS 2020–2021)
gls20_7: {
    speaker: "Nona Jones",
    speakerPhoto: "/speakers/nona-jones.png",
    title: "Seguro Não É o Suficiente",
    edition: "GLS 2020–2021",
    duration: "26:12",
    bio: "Nona Jones é executiva, empreendedora, autora, pastora e palestrante internacional. Nomeada para um cargo executivo em uma empresa Fortune 100 com apenas 23 anos, liderou iniciativas premiadas em relações públicas, negociou acordos multimilionários, discursou na ONU e defendeu a reforma da política educacional no Congresso — tudo antes dos 35 anos. Como chefe das parcerias de fé mundiais no Facebook, liderou o trabalho da empresa com organizações religiosas em todo o mundo. A revista Essence a reconheceu como “Mulher com menos de 40 anos para ficar de olho”. É autora de Success from the Inside Out, que ajuda líderes a escolherem o sucesso com propósito.",
    temaCentral:
        "Segurança e impacto são estados diametralmente opostos — quando os líderes recuam para zonas de conforto psicológicas diante de temas difíceis como a injustiça racial, abandonam exatamente o desafio que poderia elevar seu nível de liderança.",
    sinopse: [
        "Nona Jones originalmente prepararia uma palestra sagaz e envolvente, mas em 25 de maio de 2020 assistiu ao assassinato de George Floyd e mudou tudo. O que ela viu nos dias seguintes foi algo inédito: CEOs, pastores e influenciadores descendo às redes sociais para condenar o racismo. Mas, ao observar de perto, percebeu que as conversas mais desconfortáveis estavam sendo travadas no conforto das amizades — com pessoas negras próximas que certamente não os acusariam de racismo, e de forma abstrata o suficiente para não gerar risco real.",
        "A tese central de Jones é radical: “conforto e impacto são estados diametralmente opostos”. Ela identifica três zonas de conforto psicológicas nas quais os líderes se refugiam quando os assuntos ficam difíceis — a zona do medo (de perder clientes, seguidores ou status), a zona da culpa performática (reconhecer o problema sem mudar nada) e a zona da abstração (debater o assunto de forma hipotética para não ter que agir concretamente). Em cada caso, a segurança é escolhida sobre o impacto.",
        "Jones cita Einstein — “um problema não pode ser resolvido pelo mesmo nível de consciência que o criou” — para argumentar que a oportunidade de crescer sempre vem embrulhada em um desconforto. Não se trata apenas de racismo: é sobre qualquer tema que exige que o líder confronte algo dentro de si antes de agir no mundo. O convite é para que os líderes deixem de buscar segurança e passem a buscar o desconforto que os tornará líderes maiores.",
    ],
    softSkills: [
        "Coragem para entrar em territórios desconfortáveis",
        "Consciência crítica e autocrítica",
        "Empatia profunda e não seletiva",
        "Disposição para o crescimento incômodo",
        "Integridade na ação, não apenas no discurso",
        "Liderança em contextos de diversidade e inclusão",
        "Vulnerabilidade como diferencial de liderança",
    ],
    palavrasChave: [
        "zona de conforto",
        "injustiça racial",
        "impacto",
        "coragem",
        "diversidade",
        "crescimento",
        "liderança corajosa",
        "desconforto produtivo",
        "consciência",
        "autenticidade",
    ],
    takeaways: [
        "Segurança e impacto são estados diametralmente opostos — não dá para causar impacto duradouro estando confortável.",
        "Ter conversas difíceis dentro do conforto das amizades não é enfrentar o problema — é uma forma sofisticada de evitá-lo.",
        "Os líderes que mais têm a perder são os que mais precisam falar — o status acumulado é um ativo para o impacto, não um escudo para o silêncio.",
        "A oportunidade de crescer sempre vem embrulhada em uma afronta a quão incríveis pensamos que somos.",
        "Não ser racista não é o suficiente quando a neutralidade tem um preço pago por outros.",
        "O medo é real e deve ser explorado, não ignorado — nosso trabalho como líderes é descobrir o que o medo está tentando nos ensinar.",
        "Um problema não pode ser resolvido pelo mesmo nível de consciência que o criou — crescer como líder exige sair da zona segura.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.3 Coragem e disposição para o desconforto",
                    percent: 92,
                    descricao:
                        "A palestra é um chamado explícito e sustentado ao desconforto como condição da liderança — Jones demonstra que a coragem de sair da zona segura é o que separa líderes com impacto real de líderes com boa imagem.",
                },
                {
                    label: "1.1 Autoconsciência e crescimento pessoal",
                    percent: 85,
                    descricao:
                        "Jones desafia os líderes a examinar suas próprias zonas de conforto psicológicas — o crescimento começa com a honestidade sobre onde e por que estamos escolhendo a segurança.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.4 Diversidade, equidade e inclusão",
                    percent: 88,
                    descricao:
                        "O contexto da palestra é o assassinato de George Floyd e a resposta das lideranças — Jones conecta diretamente a capacidade do líder de enfrentar a injustiça racial com sua eficácia em construir culturas verdadeiramente inclusivas.",
                },
                {
                    label: "2.2 Liderança com integridade em temas sensíveis",
                    percent: 80,
                    descricao:
                        "Jones diferencia liderança de aparência de liderança de substância — ter a conversa certa no lugar certo com as pessoas certas, mesmo quando é desconfortável, é o critério de integridade que ela estabelece.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Provocativa e profética com base em evento histórico e análise comportamental" },
        { label: "Estilo", value: "Storytelling contemporâneo + análise crítica + chamado à ação corajoso" },
        { label: "Aplicabilidade", value: "Alta para líderes comprometidos com DEI, cultura organizacional e liderança com caráter" },
        { label: "Intensidade conceitual", value: "Média-alta (desconforto intencional como dispositivo pedagógico)" },
    ],
},

// Paula Faris — "Como liderar em um recomeço" (GLS 2020–2021)
gls20_8: {
    speaker: "Paula Faris",
    speakerPhoto: "/speakers/paula-faris.png",
    title: "Como Liderar em um Recomeço",
    edition: "GLS 2020–2021",
    duration: "23:25",
    bio: "Paula Faris é jornalista vencedora do Emmy Award, ex-coâncora do Good Morning America Weekend Edition e ex-coapresentadora do The View, da ABC. Apresentadora do popular podcast Journeys of Faith with Paula Faris, que explora como pessoas influentes se apoiam na fé para navegar seus melhores e piores momentos, Faris é também correspondente sênior nacional da ABC News e autora de Called Out: Why I Traded Two Dream Jobs for a Life of True Calling. Em 2018, no auge de sua carreira, deixou voluntariamente dois empregos dos sonhos para reorientar sua vida em torno de seus valores mais profundos — uma jornada que se tornou a base de sua liderança e de sua mensagem.",
    temaCentral:
        "Liderar em um recomeço começa por liderar a si mesmo — e isso exige a coragem de sair de onde você está, mesmo quando o mundo não entende, quando o medo paralisa e quando o próximo capítulo ainda não está visível.",
    sinopse: [
        "Paula Faris usa um princípio do jornalismo — “não esconda o ouro” — para abrir sua fala com total transparência: ela mesma está no meio de uma reviravolta vocacional, se preparando para deixar empregos, cidades e rotinas que a definiram. Reconhece que muitos no Summit estão passando pelo mesmo, seja por escolha ou por imposição — a pandemia acelerou recomeços em escala global. E compartilha que a tragédia e a oportunidade não apenas coexistem como são frequentemente as duas faces do mesmo momento.",
        "Faris estrutura a liderança no recomeço em três práticas. A primeira é “se você está em paz, vá em frente” — ela descreve como largou dois empregos dos sonhos no auge da carreira porque estava em conflito com seus valores mais profundos e sua fé. Dentro de sete meses, viveu cinco eventos adversos seguidos — aborto, concussão, acidente de carro, pneumonia, entre outros — que a desaceleraram à força. A segunda prática é normalizar o medo — o medo do recomeço não indica que a decisão está errada, mas que o caminho é real.",
        "A terceira prática é dar a si mesmo permissão para se aventurar: reconhecer que seus dons e talentos não se limitam ao que você fez até agora, e que a identidade não pode ser definida pelo que se faz, mas por quem se é. Faris conclui que a liderança no recomeço é aprender a colocar a máscara de oxigênio em si mesmo primeiro — só depois de liderar a própria transição com paz, medo normalizado e permissão para explorar, é possível liderar a transição dos outros.",
    ],
    softSkills: [
        "Coragem para recomeçar e se reinventar",
        "Autoconhecimento e clareza de valores",
        "Gestão do medo e da incerteza",
        "Autenticidade e transparência como liderança",
        "Resiliência diante de perdas e adversidades",
        "Discernimento e paz interior como bússolas",
        "Capacidade de liderar a própria transição",
    ],
    palavrasChave: [
        "recomeço",
        "transição vocacional",
        "medo",
        "identidade",
        "fé",
        "coragem",
        "propósito",
        "reinvenção",
        "mudança",
        "autenticidade",
    ],
    takeaways: [
        "A tragédia e a oportunidade coexistem — muitas vezes são as duas faces do mesmo momento de recomeço.",
        "Se você está em paz com a direção, vá em frente — mesmo que o mundo não entenda e o próximo capítulo não esteja visível.",
        "O medo do recomeço não indica que a decisão está errada — indica que o caminho é real e importa.",
        "Dar a si mesmo permissão para se aventurar começa por reconhecer que sua identidade não é definida pelo que você faz.",
        "Liderar os outros em uma transição exige ter liderado a si mesmo primeiro — coloque a máscara antes de ajudar quem está ao lado.",
        "Às vezes a vida nos desacelera à força quando não temos a coragem de desacelerar voluntariamente.",
        "Seus dons e talentos não se limitam ao que você fez até hoje — o recomeço é uma expansão, não um retrocesso.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.3 Reinvenção pessoal e vocacional",
                    percent: 90,
                    descricao:
                        "A palestra é construída sobre a experiência pessoal de Faris ao deixar dois empregos dos sonhos para se reinventar — ela oferece um framework concreto para navegar a transição vocacional com intencionalidade.",
                },
                {
                    label: "5.1 Mentalidade de crescimento diante da adversidade",
                    percent: 82,
                    descricao:
                        "Faris demonstra que a série de adversidades que sofreu não foram obstáculos ao recomeço, mas catalisadores — uma perspectiva que transforma a relação do líder com o fracasso e a perda.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Saúde emocional e equilíbrio de vida",
                    percent: 85,
                    descricao:
                        "Faris revela que estava no auge da carreira e no ponto mais baixo da vida simultaneamente — uma separação entre sucesso externo e bem-estar interno que ela aborda com vulnerabilidade e como alerta para líderes.",
                },
                {
                    label: "6.1 Resiliência e capacidade de atravessar perdas",
                    percent: 80,
                    descricao:
                        "A sequência de cinco adversidades em sete meses é apresentada como a experiência que forjou sua capacidade de liderar recomeços com autenticidade.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em narrativa pessoal e vulnerabilidade autêntica" },
        { label: "Estilo", value: "Storytelling emocional + framework prático + fé como dimensão de liderança" },
        { label: "Aplicabilidade", value: "Alta para líderes em transição, burnout vocacional, reinvenção de carreira" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional com estrutura aplicável)" },
    ],
},

// Tomas Chamorro-Premuzic — "Os 6 traços da liderança" (GLS 2020–2021)
gls20_9: {
    speaker: "Tomas Chamorro-Premuzic",
    speakerPhoto: "/speakers/tomas-chamorro-premuzic.png",
    title: "Os 6 Traços da Liderança",
    edition: "GLS 2020–2021",
    duration: "30:57",
    bio: "Dr. Tomas Chamorro-Premuzic é psicólogo, cientista de talentos e um dos cientistas sociais mais prolíficos de sua geração. Professor de Psicologia Empresarial na University College London e na Columbia University, é Cientista-Chefe de Talentos do ManpowerGroup e cofundador da Deeper Signals e da META Profiling. Prestou consultoria a clientes como JP Morgan, Goldman Sachs, Google, BBC, Twitter, P&G, o Exército Britânico, a ONU e o Banco Mundial. Com 10 livros e mais de 150 artigos científicos publicados, seu trabalho se concentra em perfis psicológicos, gestão de talentos e desenvolvimento de liderança baseados em dados.",
    temaCentral:
        "Em tempos de crise, a eficácia do líder depende de seis traços específicos e mensuráveis: inteligência, curiosidade intelectual, competência social, tolerância à ambiguidade, humildade e resiliência — e a maioria dos líderes que parecem confiantes carecem de pelo menos quatro deles.",
    sinopse: [
        "Tomas Chamorro-Premuzic parte de uma pergunta central: será que crises exigem um tipo diferente de liderança? Usando Winston Churchill como exemplo — grande líder de guerra, ineficaz em tempos de paz — ele demonstra que o contexto importa profundamente. A questão não é se um líder é bom ou ruim em abstrato, mas se seus traços de personalidade se encaixam nas demandas do momento. E crises como a pandemia de 2020 criaram demandas muito específicas.",
        "Com base em décadas de pesquisa empírica e quantitativa sobre perfis de liderança, Chamorro-Premuzic identifica seis atributos que predizem eficácia em contextos de crise: inteligência (capacidade de aprender rápido e raciocinar abstratamente, e de contratar pessoas mais inteligentes do que si mesmo); curiosidade intelectual (mente faminta que não se satisfaz com o que já sabe); competência social (capacidade de ler, influenciar e conectar pessoas); tolerância à ambiguidade (funcionar sob incerteza sem paralisar); humildade (reconhecer limitações e ouvir os outros); e resiliência emocional (manter estabilidade e positividade sob pressão extrema).",
        "O insight mais contraintuitivo da palestra é que os traços que levam alguém a parecer um líder — carisma, confiança excessiva, extroversão dominante — frequentemente não são os mesmos que o tornam um líder eficaz. Chamorro-Premuzic apresenta dados que mostram que líderes carismáticos são percebidos como melhores do que são, enquanto líderes com os seis traços acima frequentemente passam despercebidos em processos de seleção. O desafio para as organizações é aprender a selecionar pelo potencial de eficácia, não pela performance de confiança.",
    ],
    softSkills: [
        "Inteligência aplicada e raciocínio sob pressão",
        "Curiosidade intelectual e aprendizado contínuo",
        "Competência social e leitura de pessoas",
        "Tolerância à ambiguidade e à incerteza",
        "Humildade intelectual e abertura ao outro",
        "Resiliência emocional em contextos adversos",
        "Autoconsciência sobre os próprios limites",
    ],
    palavrasChave: [
        "traços de liderança",
        "crise",
        "inteligência",
        "curiosidade",
        "humildade",
        "resiliência",
        "competência social",
        "carisma",
        "seleção de líderes",
        "psicologia da liderança",
    ],
    takeaways: [
        "Crises exigem líderes com seis traços específicos: inteligência, curiosidade, competência social, tolerância à ambiguidade, humildade e resiliência.",
        "Os traços que fazem alguém parecer um líder raramente são os que o tornam um líder eficaz — confiança excessiva é frequentemente um obstáculo.",
        "Contratar pessoas mais inteligentes que você é uma das demonstrações mais poderosas de inteligência como líder.",
        "Curiosidade intelectual — a mente faminta que se desconforta com o que não sabe — é mais importante do que o conhecimento acumulado.",
        "Líderes carismáticos são percebidos como melhores do que são; líderes humildes e eficazes muitas vezes passam despercebidos.",
        "Tolerância à ambiguidade é o que permite que o líder tome decisões racionais quando o cenário ainda é incerto — habilidade essencial em crises.",
        "A resiliência emocional do líder é contagiante — equipes estabilizam com base no estado emocional de quem está à frente.",
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.3 Competência social e leitura interpessoal",
                    percent: 85,
                    descricao:
                        "Competência social é um dos seis traços centrais apresentados por Chamorro-Premuzic — a capacidade de ler, influenciar e conectar pessoas é apresentada como diferencial de eficácia em crise.",
                },
                {
                    label: "3.1 Influência sem carisma excessivo",
                    percent: 78,
                    descricao:
                        "A palestra demonstra que o carisma sem substância engana — líderes verdadeiramente influentes em contextos difíceis são aqueles com humildade, inteligência e curiosidade, não os mais exuberantes.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Seleção e desenvolvimento de talentos",
                    percent: 82,
                    descricao:
                        "Chamorro-Premuzic apresenta os seis traços como critérios para identificar e selecionar líderes eficazes — uma aplicação direta à gestão de talentos e ao desenvolvimento de liderança nas organizações.",
                },
                {
                    label: "2.3 Humildade e cultura de aprendizado",
                    percent: 80,
                    descricao:
                        "A humildade é apresentada como traço central da liderança eficaz em crise — líderes que reconhecem seus limites e ouvem outros criam culturas mais inteligentes e adaptativas.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa empírica e psicologia da liderança" },
        { label: "Estilo", value: "Acadêmico-aplicado com dados, exemplos históricos e framework de seis traços" },
        { label: "Aplicabilidade", value: "Alta para RH, seleção de líderes, desenvolvimento executivo e gestão de crises" },
        { label: "Intensidade conceitual", value: "Alta (psicometria aplicada com implicações contraintuitivas)" },
    ],
},

// Vanessa Van Edwards — "A ciência da liderança: impactando para o bem" (GLS 2020–2021)
gls20_10: {
    speaker: "Vanessa Van Edwards",
    speakerPhoto: "/speakers/vanessa-van-edwards.png",
    title: "A Ciência da Liderança: Impactando para o Bem",
    edition: "GLS 2020–2021",
    duration: "26:47",
    bio: "Vanessa Van Edwards é fundadora e pesquisadora comportamental da Science of People, autora do best-seller nacional Captivate: A Ciência de Ter Sucesso com as Pessoas, traduzido para 16 idiomas. Mais de 36 milhões de pessoas a seguiram no YouTube e em sua palestra viral no TED. Considerada uma “pessoa esquisita em recuperação”, transformou sua ansiedade social de infância em uma carreira de mais de uma década estudando as forças ocultas que comandam o comportamento humano. Treina líderes de empresas como Google, Facebook, Microsoft, Comcast e MIT com ferramentas científicas para aprimorar inteligência emocional, comunicação interpessoal e liderança.",
    temaCentral:
        "Líderes que causam impacto duradouro são aqueles que dominam a ciência dos sinais — aprendendo a equilibrar cordialidade e competência, e usando palavras, linguagem corporal e pré-ativação de forma intencional para moldar como as pessoas pensam, se sentem e agem.",
    sinopse: [
        "Vanessa Van Edwards abre com uma confissão: ela foi uma criança esquisita com ansiedade social que temia recreios e festas de aniversário. Essa experiência a tornou obcecada pelas pessoas que naturalmente irradiam confiança e cativam os outros — e essa obsessão se tornou sua carreira científica. Com base em pesquisa da Harvard Business School, ela apresenta a estrutura fundamental da liderança percebida: quando conhecemos alguém, avaliamos imediatamente dois traços — cordialidade (“posso confiar nessa pessoa?”) e competência (“posso respeitá-la?”).",
        "O insight central é que a maioria das pessoas tem desequilíbrio em um dos dois lados: muito cordiais mas não respeitadas como autoridade, ou muito competentes mas vistas como frias e inacessíveis. Líderes eficazes são aqueles que habitam simultaneamente o ponto ideal de ambos os traços — e isso pode ser aprendido e praticado intencionalmente. Van Edwards apresenta o conceito de “pré-ativação” para demonstrar como palavras e sinais moldam o comportamento das pessoas antes mesmo da interação acontecer.",
        "A pesquisadora demonstra com exemplos concretos — e-mails, convites de calendário, linguagem corporal — como sinais intencionais transformam interações. Trocar “reunião” por “sessão colaborativa” ou “momento de criatividade” não é cosmético: a pré-ativação funciona porque o cérebro processa a palavra “colaborar” e aumenta a disposição real para colaborar. A conclusão é que líderes que compreendem a ciência dos sinais podem moldar ambientes de maneira mais positiva e duradoura — impactando para o bem de forma sistemática, não por acaso.",
    ],
    softSkills: [
        "Inteligência interpessoal e leitura de sinais",
        "Comunicação intencional e estratégica",
        "Equilíbrio entre cordialidade e competência",
        "Escuta ativa e presença social",
        "Influência positiva e empática",
        "Autoconhecimento sobre estilo de comunicação",
        "Construção deliberada de confiança e respeito",
    ],
    palavrasChave: [
        "sinais",
        "pré-ativação",
        "cordialidade",
        "competência",
        "comunicação não-verbal",
        "liderança percebida",
        "confiança",
        "ciência do comportamento",
        "influência",
        "linguagem corporal",
    ],
    takeaways: [
        "Toda interação começa antes de você aparecer — pré-ative as pessoas com as palavras certas nos e-mails, convites e mensagens.",
        "Líderes eficazes habitam o ponto ideal de dois traços simultaneamente: cordialidade (confiança) e competência (respeito).",
        "A maioria das pessoas está desequilibrada em um dos dois lados — identificar onde você está é o primeiro passo para mudar.",
        "Palavras moldam comportamentos: trocar “reunião” por “sessão colaborativa” aumenta a disposição real para colaborar.",
        "A ciência da pré-ativação mostra que o cérebro responde às palavras antes de a interação acontecer — use isso a seu favor.",
        "Interações não começam quando você aparece — começam quando alguém pensa em você pela primeira vez.",
        "Líderes que entendem os sinais que enviam podem moldar ambientes de forma intencional e consistente, não apenas instintiva.",
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.1 Comunicação intencional e pré-ativação",
                    percent: 92,
                    descricao:
                        "A palestra inteira é sobre como sinais intencionais — palavras, linguagem corporal, convites — moldam percepções e comportamentos antes e durante as interações, tornando a comunicação a ferramenta central da liderança de impacto.",
                },
                {
                    label: "3.2 Equilíbrio entre cordialidade e autoridade",
                    percent: 88,
                    descricao:
                        "Van Edwards demonstra com base em pesquisa que o ponto ideal da liderança percebida é a combinação de cordialidade e competência — e que líderes podem aprender a habitar esse ponto intencionalmente.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção de confiança e rapport",
                    percent: 85,
                    descricao:
                        "A pesquisa de Van Edwards demonstra que confiança é o primeiro critério avaliado em qualquer interação — e que líderes podem construí-la sistematicamente por meio de sinais intencionais.",
                },
                {
                    label: "2.2 Inteligência interpessoal como ferramenta de liderança",
                    percent: 80,
                    descricao:
                        "A Science of People aborda liderança como uma ciência aprendível — qualquer pessoa pode desenvolver a inteligência interpessoal necessária para impactar positivamente sua equipe e organização.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Científico-aplicada com base em comportamento humano e pesquisa de campo" },
        { label: "Estilo", value: "Storytelling pessoal + dados + ferramentas práticas e imediatas" },
        { label: "Aplicabilidade", value: "Alta para qualquer líder — comunicação, influência e construção de confiança são universais" },
        { label: "Intensidade conceitual", value: "Média (ciência acessível com aplicações diretas e imediatas)" },
    ],
},

// NOTE: sem transcrição — construído a partir da bio + tema
gls20_11: {
    speaker: "Kaká",
    speakerPhoto: "/speakers/kaka.png",
    title: "Liderança Amorosa – Entrevista com Kaká",
    edition: "GLS 2020–2021",
    duration: "27:41",
    bio: "Kaká — nome completo Ricardo Izecson dos Santos Leite — é um dos maiores jogadores de futebol da história, eleito Melhor Jogador do Mundo pela FIFA em 2007 e campeão da Liga dos Campeões da Europa com o AC Milan. Após uma carreira de destaque no São Paulo, Milan, Real Madrid e Seleção Brasileira, Kaká tornou-se um dos embaixadores mais reconhecidos do esporte, usando sua plataforma para falar sobre fé, propósito e liderança. No GLS 2020–2021, participa em formato de entrevista, compartilhando como os valores de amor, servir e liderar com autenticidade moldaram sua trajetória dentro e fora dos gramados.",
    temaCentral:
        "A liderança amorosa — aquela que serve sem exigir reconhecimento, que influencia pelo exemplo e que encontra seu propósito mais fundo além dos resultados — é o modelo que Kaká viveu no esporte e propõe como alternativa à liderança movida pelo ego e pela conquista.",
    sinopse: [
        "Em formato de entrevista, Kaká compartilha como sua trajetória no futebol de elite foi marcada não apenas por conquistas técnicas, mas por uma compreensão crescente de que a liderança mais poderosa é a que se fundamenta no amor — amor pela equipe, pelo processo e pelas pessoas que dependem do líder. Ele fala sobre o que aprendeu liderar sob pressão extrema, em ambientes de altíssima competitividade, sem perder de vista quem é e o que valoriza.",
        "A entrevista explora como a fé moldou sua abordagem à liderança: a disposição de servir sem calcular o retorno, a humildade de aprender com companheiros mais experientes e a coragem de ser autêntico mesmo quando o ambiente pressionava por performance e imagem. Kaká reflete sobre como os momentos de derrota, lesão e incerteza foram os que mais o formaram como líder — não os troféus.",
        "O tema central da liderança amorosa é apresentado como um antídoto à liderança movida pelo ego e pela conquista a qualquer custo. Kaká propõe que líderes de qualquer setor podem aprender com o esporte de alto rendimento que o impacto duradouro não vem da autoafirmação, mas da capacidade de inspirar, servir e elevar os que estão ao redor — um modelo de liderança que começa de dentro para fora.",
    ],
    softSkills: [
        "Liderança servidora e amor genuíno pelo outro",
        "Humildade diante do sucesso e da derrota",
        "Autenticidade sob pressão extrema",
        "Fé e propósito como âncoras identitárias",
        "Resiliência aprendida nas adversidades",
        "Influência pelo exemplo e não pelo status",
        "Gratidão como postura de liderança",
    ],
    palavrasChave: [
        "liderança amorosa",
        "serviço",
        "fé",
        "propósito",
        "humildade",
        "autenticidade",
        "esporte e liderança",
        "impacto",
        "exemplo",
        "gratidão",
    ],
    takeaways: [
        "A liderança mais poderosa é a que se fundamenta no amor — ao time, ao processo e às pessoas que dependem do líder.",
        "Liderar com autenticidade em ambientes de alta pressão é mais difícil — e mais necessário — do que liderar quando tudo vai bem.",
        "Os momentos de derrota e adversidade formam líderes mais completos do que os momentos de conquista.",
        "Servir sem calcular o retorno é o que transforma um jogador de destaque em um líder que as pessoas seguem de verdade.",
        "Fé e propósito funcionam como âncoras que permitem ao líder manter sua identidade intacta quando tudo ao redor muda.",
        "O impacto duradouro não vem da autoafirmação, mas da capacidade de inspirar e elevar os que estão ao redor.",
        "Liderança amorosa não é fraqueza — é a forma mais sustentável e transformadora de influência em qualquer contexto.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.1 Propósito além da performance",
                    percent: 88,
                    descricao:
                        "Kaká demonstra que sua trajetória no esporte foi moldada por um propósito mais profundo do que troféus — a liderança amorosa como vocação que transcende os resultados.",
                },
                {
                    label: "7.3 Legado e influência de longo prazo",
                    percent: 82,
                    descricao:
                        "A reflexão sobre como liderar servindo — sem calcular retorno — é apresentada como o caminho para um legado que persiste além da carreira, dos títulos e da visibilidade.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.2 Liderança servidora e cultura de amor",
                    percent: 85,
                    descricao:
                        "O conceito de liderança amorosa pressupõe uma cultura onde o líder serve sem exigir reconhecimento — um modelo que transforma o ambiente e eleva todos ao redor.",
                },
                {
                    label: "2.3 Autenticidade e confiança como base da influência",
                    percent: 78,
                    descricao:
                        "Kaká aborda como a autenticidade — ser quem se é mesmo sob pressão extrema — é o fundamento da confiança que permite influenciar de verdade, não apenas por posição ou fama.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional em formato de entrevista com atleta de elite" },
        { label: "Estilo", value: "Narrativa pessoal + reflexão sobre fé, esporte e propósito" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam integrar fé, propósito e liderança servidora" },
        { label: "Intensidade conceitual", value: "Média-baixa (forte carga inspiracional e emocional)" },
    ],
},


    // ===== gls21-22 =====
// Craig Groeschel — Expandindo sua capacidade de liderança (GLS 2021–2022)
    gls21_1: {
        speaker: "Craig Groeschel",
        speakerPhoto: "/speakers/craig-groeschel.png",
        title: "Expandindo Sua Capacidade de Liderança",
        edition: "GLS 2021–2022",
        duration: "42:02",
        bio: "Craig Groeschel é o fundador e pastor sênior da Life.Church, eleita o melhor lugar para trabalhar entre pequenas e médias empresas pelo Glassdoor em 2020. Reconhecido mundialmente como um líder de líderes, Groeschel lidera uma das igrejas mais inovadoras do mundo, criadora do aplicativo bíblico YouVersion, baixado em todos os países do planeta. Viajando como campeão do Global Leadership Summit, ele defende o desenvolvimento de líderes em todos os setores da sociedade. Apresentador do Craig Groeschel Leadership Podcast e autor best-seller do New York Times, seu livro mais recente é Winning the War in Your Mind: Change Your Thinking, Change Your Life.",
        temaCentral:
            "Expandir a capacidade de liderança exige suportar PUC — dor, incerteza e caos — ao desapegar o controle, capacitar outros líderes e permanecer fiel ao propósito mesmo nos períodos mais difíceis.",
        sinopse: [
            "Craig Groeschel abre o Global Leadership Summit 2021 com uma pergunta essencial para líderes esgotados: como continuar crescendo quando o mundo ao redor parece desmoronar? Saindo de um dos anos mais turbulentos da história recente — marcado por pandemia, divisão política e conflitos sociais —, ele propõe que a pressão, quando bem gerenciada, é a porta de entrada para o potencial.",
            "O coração da palestra é o conceito de 'PUC' — um acrônimo criado pelo próprio Groeschel para nomear o peso inominável que todo líder carrega: dor, incerteza e caos. Para ele, crescer como líder significa ampliar a capacidade de suportar esse tríplice desafio. Isso implica desapegar o controle — pois 'você pode ter controle ou pode ter crescimento, mas não pode ter os dois' — e investir na capacitação de outros líderes, mesmo que o processo gere erros e momentos de caos temporário.",
            "Groeschel encerra com um chamado espiritual e prático: líderes que sofrem são líderes que estão, de fato, liderando. Usando a experiência do apóstolo Paulo como espelho, ele recorda que o peso mais pesado da liderança não é físico, mas relacional e emocional. O remédio está em confiar, capacitar e transformar a dor em propósito — sabendo que 'todos ganham quando um líder melhora'.",
        ],
        softSkills: [
            "Tolerância à ambiguidade e ao caos",
            "Delegação e capacitação de equipes",
            "Autogestão emocional sob pressão",
            "Resiliência e perseverança",
            "Liderança servidora",
            "Clareza de propósito em tempos de crise",
            "Disposição para crescer pelo desconforto",
        ],
        palavrasChave: [
            "capacidade de liderança",
            "tolerância ao caos",
            "dor na liderança",
            "incerteza",
            "capacitação",
            "desapego do controle",
            "crescimento",
            "propósito",
            "resiliência",
        ],
        takeaways: [
            "A pressão bem gerenciada é a porta de entrada para o potencial do líder.",
            "PUC — dor, incerteza e caos — é o peso que todo líder em crescimento precisa aprender a suportar.",
            "Você pode ter controle ou crescimento, mas não os dois ao mesmo tempo.",
            "Os melhores líderes focam em capacitar outros líderes, não em controlar resultados.",
            "Quem não sofre provavelmente não está liderando de verdade.",
            "A incerteza não sinaliza liderança ruim — ela sinaliza a necessidade de liderança.",
            "Desapegar tarefas e confiar na equipe gera líderes que superam o próprio líder.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.2 Disciplina, hábitos e consistência",
                        percent: 88,
                        descricao:
                            "Groeschel apresenta o conceito de PUC como disciplina de suportar dor, incerteza e caos de forma consistente ao longo da jornada de liderança.",
                    },
                    {
                        label: "1.3 Coragem e enfrentamento do medo",
                        percent: 82,
                        descricao:
                            "A palestra é um chamado explícito a liderar mesmo exausto, desanimado e sob incerteza — coragem como condição estrutural do crescimento.",
                    },
                ],
            },
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.3 Delegação e alavancagem de equipe",
                        percent: 90,
                        descricao:
                            "O núcleo prático da palestra é a decisão estratégica de delegar, aceitar erros temporários e formar líderes mais capazes que o próprio líder.",
                    },
                    {
                        label: "4.1 Clareza de objetivos e prioridades",
                        percent: 75,
                        descricao:
                            "Groeschel destaca que o líder deve identificar o que controla desnecessariamente e liberar espaço para que outros cresçam em direção ao objetivo comum.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com framework prático" },
            { label: "Estilo", value: "Storytelling pessoal + humor + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipes em crescimento, pastores e gestores em ambiente de pressão" },
            { label: "Intensidade conceitual", value: "Média (forte carga motivacional e emocional)" },
        ],
    },

// Francesca Gino — Talento rebelde (GLS 2021–2022)
    gls21_2: {
        speaker: "Francesca Gino",
        speakerPhoto: "/speakers/francesca-gino.png",
        title: "Talento Rebelde",
        edition: "GLS 2021–2022",
        duration: "24:23",
        bio: "Dra. Francesca Gino é professora na Unidade de Negociação, Organizações e Mercados da Harvard Business School, reconhecida por sua pesquisa premiada sobre como ter vidas mais produtivas, criativas e gratificantes. Consultora de Disney, Goldman Sachs, Honeywell, Novartis e das Forças Armadas dos EUA, sua pesquisa foi destacada em The Wall Street Journal, The Economist, Harvard Business Review e Scientific American. Homenageada como uma das 40 professoras de negócios mais influentes com menos de 40 anos e entre os 50 pensadores de gestão mais influentes pelo Thinkers50, ela é autora de Rebel Talent — obra que explora por que vale a pena quebrar regras no trabalho e na vida.",
        temaCentral:
            "O talento rebelde — a capacidade de questionar normas com autenticidade, curiosidade e visão — não é uma ameaça às organizações, mas o motor de inovação, engajamento e excelência que líderes precisam cultivar ativamente.",
        sinopse: [
            "Francesca Gino inicia sua palestra no restaurante italiano três estrelas Michelin Osteria Francescana, o melhor do mundo em 2016 e 2018, onde o maître Giuseppe Palmieri ignora todas as regras do estabelecimento e pede pizza de uma pizzaria externa para atender ao filho de oito anos de um cliente. Esse gesto, aparentemente simples, exemplifica o que ela chama de 'talento rebelde': a disposição inteligente de quebrar normas em prol de uma experiência superior.",
            "A pesquisadora apresenta cinco características que definem os rebeldes talentosos nas organizações: novidade — a busca constante por novas experiências e perspectivas; curiosidade — fazer as perguntas que ninguém ousa fazer; perspectiva — enxergar o próprio trabalho de fora; diversidade — valorizar diferenças em vez de suprimi-las; e autenticidade — agir de acordo com os próprios valores mesmo sob pressão. Para ilustrar a autenticidade, ela cita um experimento na empresa indiana Wipro, onde funcionários que refletiram sobre sua identidade e pontos fortes antes de começar o trabalho apresentaram desempenho muito superior e permaneceram mais tempo na empresa.",
            "Gino encerra com o episódio do voo US Airways 1549, que pousou no Rio Hudson após uma colisão com gansos. O piloto Chesley Sullenberger quebrara protocolos ao tomar uma decisão não prevista no manual — e salvou 155 vidas. Para a pesquisadora, esse é o retrato máximo do talento rebelde: líderes que enxergam além das regras não para destruir a ordem, mas para servi-la de forma mais profunda e eficaz.",
        ],
        softSkills: [
            "Curiosidade intelectual",
            "Autenticidade e coragem de ser diferente",
            "Pensamento criativo e inovador",
            "Adaptabilidade e abertura ao novo",
            "Liderança pelo exemplo",
            "Visão sistêmica e perspectiva externa",
            "Valorização da diversidade de pensamento",
        ],
        palavrasChave: [
            "talento rebelde",
            "autenticidade",
            "curiosidade",
            "inovação",
            "quebra de normas",
            "diversidade",
            "engajamento",
            "criatividade",
            "liderança não conformista",
            "perspectiva",
        ],
        takeaways: [
            "Os melhores líderes são reconhecidos pelas regras que violaram com propósito, não pelas que apenas seguiram.",
            "Rebeldes talentosos não destroem a ordem — eles a servem de forma mais profunda e eficaz.",
            "A autenticidade no ambiente de trabalho gera maior engajamento, desempenho e retenção de talentos.",
            "Curiosidade é uma habilidade de liderança: faça perguntas que outros consideram óbvias ou incômodas.",
            "Buscar novidade e diversidade de perspectiva expande a capacidade de inovação da equipe.",
            "Em momentos de crise, líderes que sabem quando quebrar o protocolo salvam vidas e organizações.",
            "Cultivar talento rebelde na equipe cria organizações mais resilientes, criativas e autênticas.",
        ],
        categorias: [
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    {
                        label: "5.2 Cultura de inovação e experimentação",
                        percent: 92,
                        descricao:
                            "A palestra é uma defesa aprofundada de criar cultura que tolera e incentiva a quebra criativa de normas como mecanismo de inovação organizacional.",
                    },
                    {
                        label: "5.1 Abertura à mudança e adaptabilidade",
                        percent: 85,
                        descricao:
                            "O talento rebelde exige que líderes e equipes abandonem o conformismo e desenvolvam abertura ativa a novas perspectivas e experiências.",
                    },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.3 Autenticidade e confiança nas equipes",
                        percent: 88,
                        descricao:
                            "O experimento da Wipro demonstra empiricamente que ambientes que cultivam autenticidade geram maior confiança, retenção e desempenho coletivo.",
                    },
                    {
                        label: "2.1 Valorização da diversidade de pensamento",
                        percent: 80,
                        descricao:
                            "Gino apresenta diversidade como um dos cinco talentos rebeldes centrais, essencial para expandir o repertório criativo das organizações.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Conceitual baseada em pesquisa científica e cases reais" },
            { label: "Estilo", value: "Storytelling + evidências de pesquisa comportamental" },
            { label: "Aplicabilidade", value: "Alta para líderes que desejam cultivar inovação, engajamento e cultura organizacional autêntica" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },

// Juliet Funt — Um minuto para pensar (GLS 2021–2022)
    gls21_3: {
        speaker: "Juliet Funt",
        speakerPhoto: "/speakers/juliet-funt.png",
        title: "Um Minuto para Pensar",
        edition: "GLS 2021–2022",
        duration: "25:26",
        bio: "Juliet Funt é a CEO e fundadora da WhiteSpace at Work, empresa de treinamento e consultoria que ajuda organizações a recuperarem criatividade, produtividade e engajamento. Guerreira contra a 'ocupação reativa', ela se tornou especialista globalmente reconhecida em ajudar líderes a lidar com a 'era da sobrecarga'. Seus clientes incluem Spotify, National Geographic, Pepsi, Nike, Wells Fargo e ESPN. Sempre em destaque na Forbes e na Fast Company, ela lança no GLS 2021 seu primeiro livro, A Minute to Think: Reclaim Creativity, Conquer Busyness, and Do Your Best Work.",
        temaCentral:
            "O espaço em branco — pausas estratégicas e intencionais dentro do dia de trabalho — é o ingrediente mais escasso e mais valioso para restaurar criatividade, clareza e execução de alto nível em líderes e equipes.",
        sinopse: [
            "Juliet Funt abre com uma metáfora poderosa: aprender a fazer fogueira. Para acender uma fogueira, é preciso dar espaço ao fogo — oxigênio entre as madeiras. Líderes que empilham reuniões, tarefas e interrupções sem parar sufocam sua própria capacidade criativa exatamente da mesma forma. A 'ocupação reativa', diz ela, é o maior inimigo da excelência nas organizações modernas.",
            "A especialista apresenta quatro tipos de pausa que qualquer líder pode praticar: a pausa estética — momentos de beleza e contemplação que restauram o espírito; a pausa de redução — eliminar o que não é essencial antes de agir; a pausa de consolidação — refletir sobre o que foi aprendido antes de seguir em frente; e a pausa de expectativa — criar intencionalmente espaço de antecipação e curiosidade. Cada uma delas, praticada em pequenas doses ao longo do dia, devolve ao líder a capacidade de pensar com profundidade e agir com precisão.",
            "Funt encerra desafiando líderes a questionarem a cultura da hiperatividade nas suas organizações. Fazer pausas não é preguiça — é estratégia. Equipes que incorporam a mentalidade WhiteSpace recuperam capacidade perdida, executam em seu melhor nível e criam com muito mais qualidade. O convite final é simples: dê a si mesmo e à sua equipe um minuto real para pensar.",
        ],
        softSkills: [
            "Gestão intencional do tempo",
            "Autoconsciência e autogestão",
            "Criatividade e pensamento reflexivo",
            "Foco e clareza mental",
            "Liderança pelo exemplo em cultura saudável",
            "Simplicidade e eliminação do supérfluo",
            "Equilíbrio entre produtividade e bem-estar",
        ],
        palavrasChave: [
            "espaço em branco",
            "pausa estratégica",
            "criatividade",
            "ocupação reativa",
            "produtividade",
            "clareza mental",
            "sobrecarga",
            "reflexão",
            "foco",
            "cultura organizacional",
        ],
        takeaways: [
            "O espaço em branco — pausa intencional — é o ingrediente mais escasso e valioso do trabalho moderno.",
            "A ocupação reativa é o maior inimigo da criatividade e da excelência nas organizações.",
            "Assim como uma fogueira precisa de oxigênio, o pensamento criativo precisa de espaço para respirar.",
            "Quatro tipos de pausa — estética, de redução, de consolidação e de expectativa — restauram a capacidade de liderança.",
            "Equipes que praticam pausas estratégicas executam em nível superior e retêm mais talentos.",
            "Eliminar o não essencial antes de agir é uma decisão estratégica, não uma fraqueza.",
            "Dar às pessoas um minuto real para pensar é um dos maiores presentes que um líder pode oferecer.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.2 Gestão do tempo e priorização",
                        percent: 93,
                        descricao:
                            "A palestra inteira é construída em torno da necessidade de pausas estratégicas como ferramenta de priorização e execução de alta qualidade.",
                    },
                    {
                        label: "4.1 Clareza de objetivos e foco",
                        percent: 80,
                        descricao:
                            "Funt demonstra que a clareza de propósito só emerge quando há espaço deliberado para reflexão — sem pausa, não há foco real.",
                    },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.2 Prevenção do esgotamento e autocuidado",
                        percent: 88,
                        descricao:
                            "A metodologia WhiteSpace é apresentada como antídoto direto ao esgotamento causado pela cultura da hiperatividade e da ocupação reativa.",
                    },
                    {
                        label: "6.1 Equilíbrio entre desempenho e bem-estar",
                        percent: 82,
                        descricao:
                            "Funt demonstra que pausas intencionais não reduzem produtividade — ao contrário, elevam a qualidade da entrega e o engajamento da equipe.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Prática com framework aplicável imediatamente" },
            { label: "Estilo", value: "Metáforas + ferramentas concretas + humor" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipes, gestores de projetos e qualquer profissional sobrecarregado" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

// Rich Wilkerson Jr. — A Labuta da Liderança (GLS 2021–2022)
    gls21_4: {
        speaker: "Rich Wilkeson",
        speakerPhoto: "/speakers/rich-wilkerson-jr.png",
        title: "A Labuta da Liderança",
        edition: "GLS 2021–2022",
        duration: "24:39",
        bio: "Rich Wilkerson Jr. é um comunicador dinâmico e autor com paixão por encorajar jovens adultos. Nascido em uma família de quatro gerações de plantadores de igrejas e líderes, fundou em 2010 a Conferência de Liderança VOUS e, em 2015, a Igreja VOUS em Miami, Flórida, onde atua como pastor principal. Sob sua liderança, a VOUS é conhecida como catalisador de fé, criatividade e diversidade, celebrando a cultura vibrante de Miami. É autor de Sandcastle Kings e Friend of Sinners, e sua comunidade de fé já alcançou mais de cem países.",
        temaCentral:
            "Um legado ambicioso não acontece por acidente — ele é forjado com determinação e labuta deliberada, e líderes que compreendem o valor de cada fase, mesmo as pequenas, constroem grandeza com fundamentos sólidos.",
        sinopse: [
            "Rich Wilkerson Jr. abre com uma história pessoal sobre seu pai, um eterno otimista cuja frase favorita é 'Isso é ótimo!' — independentemente das circunstâncias. A partir dessa figura paterna, ele introduz o tema central: a perspectiva que um líder carrega sobre as dificuldades da liderança determina sua capacidade de atravessá-las com propósito e não apenas com resistência.",
            "O núcleo da mensagem é a valorização de cada fase da jornada de liderança — especialmente as fases pequenas, invisíveis e aparentemente sem impacto. Wilkerson desafia a cultura contemporânea do 'grande' e do imediato, argumentando que tudo o que é grande já foi pequeno. Ele propõe que líderes aprendam a declarar 'Isso é grande!' sobre as conquistas do dia a dia, reprogramando sua relação com o progresso gradual e o trabalho invisível.",
            "Wilkerson encerra com um chamado à labuta intencional: dar o nome certo às fases difíceis transforma o significado da experiência. Em vez de 'fase estressante', dizer 'fase de fortalecimento'; em vez de 'período difícil', dizer 'fase de aprendizado'. Para ele, propósito não é encontrado depois da dificuldade — ele é forjado dentro dela. Líderes que compreendem isso constroem não apenas organizações, mas legados.",
        ],
        softSkills: [
            "Perspectiva positiva e mentalidade de crescimento",
            "Resiliência diante das fases difíceis",
            "Persistência e determinação",
            "Liderança com propósito em todas as fases",
            "Humildade para valorizar o trabalho pequeno",
            "Gestão do discurso interno (naming)",
            "Capacidade de inspirar e influenciar equipes",
        ],
        palavrasChave: [
            "labuta da liderança",
            "legado",
            "perspectiva",
            "grandeza",
            "propósito",
            "determinação",
            "fases da liderança",
            "mentalidade",
            "resiliência",
        ],
        takeaways: [
            "Um legado ambicioso não acontece por acidente — ele é forjado com determinação e labuta deliberada.",
            "Tudo o que é grande já foi pequeno: valorizar cada fase é a base de qualquer grandeza duradoura.",
            "O nome que você dá a uma fase difícil determina o propósito que você extrai dela.",
            "Líderes que não se importam com sentimentos que ditam propósitos são mais fortes do que os que deixam o contrário acontecer.",
            "Declarar 'Isso é grande!' sobre vitórias pequenas reprograma a cultura da equipe.",
            "Onde eu estou agora é exatamente onde preciso estar para chegar onde devo chegar.",
            "A labuta da liderança não é um obstáculo ao legado — ela é o caminho pelo qual o legado é forjado.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.1 Autoconhecimento e mentalidade de crescimento",
                        percent: 85,
                        descricao:
                            "Wilkerson apresenta a reprogramação do discurso interno e da perspectiva sobre as fases difíceis como fundamento do desenvolvimento pessoal do líder.",
                    },
                    {
                        label: "1.3 Coragem e persistência diante da adversidade",
                        percent: 80,
                        descricao:
                            "A labuta é apresentada como escolha corajosa de permanecer fiel ao propósito mesmo quando as fases parecem pequenas e sem impacto visível.",
                    },
                ],
            },
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.3 Propósito como âncora emocional",
                        percent: 82,
                        descricao:
                            "A palestra demonstra como dar significado correto às fases difíceis transforma o impacto emocional delas e sustenta o líder no longo prazo.",
                    },
                    {
                        label: "6.1 Perspectiva positiva e saúde mental",
                        percent: 75,
                        descricao:
                            "A história do pai e o conceito de 'Isso é ótimo!' ilustram como cultivar perspectiva positiva genuína é uma prática de saúde emocional para líderes.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com forte apelo emocional e narrativo" },
            { label: "Estilo", value: "Storytelling pessoal + humor + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para líderes em fases de transição, jovens líderes e pastores" },
            { label: "Intensidade conceitual", value: "Baixa-média (forte carga motivacional)" },
        ],
    },

// Jamie Kern Lima — Resiliência bilionária (GLS 2021–2022)
    gls21_5: {
        speaker: "Jamie Kern Lima",
        speakerPhoto: "/speakers/jamie-kern-lima.png",
        title: "Resiliência Bilionária",
        edition: "GLS 2021–2022",
        duration: "33:47",
        bio: "Jamie Kern Lima fundou a IT Cosmetics em sua sala de estar e a transformou na maior marca de maquiagem de luxo dos EUA. Ao vender a empresa para a L'Oréal por US$ 1,2 bilhão, tornou-se a primeira CEO mulher de uma marca na história de mais de 100 anos do grupo. Reconhecida pela Goldman Sachs como uma das 100 Empreendedoras Mais Intrigantes e pela Forbes como uma das Mulheres Mais Ricas que se Fizeram por Si Mesmas, ela é autora do best-seller do New York Times e Wall Street Journal Believe IT: How to Go from Underestimated to Unstoppable, que a ajuda a orientar líderes a superar dúvidas e viver autenticamente.",
        temaCentral:
            "A resiliência bilionária não nasce de estratégias de negócios perfeitas, mas da capacidade de superar insegurança profunda, rejeição constante e dúvida interna — e seguir em frente mesmo quando ninguém acredita em você.",
        sinopse: [
            "Jamie Kern Lima começa recusando a narrativa simplificada da mídia — 'garçonete do Denny's cria empresa bilionária' — para contar a história real por trás do sucesso: uma jornada marcada por insegurança devastadora, rejeição constante de investidores e parceiros, e a luta diária para acreditar em si mesma quando ninguém mais acreditava. Para ela, o verdadeiro caminho de subestimado a obstinado passa inevitavelmente pelo enfrentamento honesto da dúvida interna.",
            "O núcleo da palestra é a distinção entre dois tipos de rejeição que todo líder enfrenta: a rejeição externa — dos outros — e a rejeição interna — de si mesmo. Kern Lima argumenta que a segunda é infinitamente mais perigosa, pois opera silenciosamente e corrói a identidade antes que o líder perceba. Ela compartilha episódios concretos de sua jornada na IT Cosmetics — rejeições de grandes redes de varejo, reuniões fracassadas, momentos de quase desistência — e como cada um deles foi uma escola de resiliência.",
            "Kern Lima encerra com um chamado à autenticidade radical: líderes que escondem suas inseguranças atrás do cargo ou do título estão pagando um preço altíssimo em saúde, relacionamentos e impacto. Acreditar em si mesmo — especialmente quando tudo ao redor sugere o contrário — não é ingenuidade: é o ato mais corajoso e mais estratégico que um líder pode praticar.",
        ],
        softSkills: [
            "Resiliência diante da rejeição",
            "Autoconfiança e crença em si mesmo",
            "Autenticidade radical",
            "Coragem para persistir sem validação externa",
            "Inteligência emocional e autoconhecimento",
            "Liderança pelo exemplo e vulnerabilidade",
            "Propósito como combustível da persistência",
        ],
        palavrasChave: [
            "resiliência",
            "rejeição",
            "insegurança",
            "autenticidade",
            "autoconfiança",
            "empreendedorismo",
            "persistência",
            "crença",
            "identidade do líder",
            "obstinação",
        ],
        takeaways: [
            "A rejeição interna — de si mesmo — é mais perigosa do que qualquer rejeição externa.",
            "Uma história de sucesso é, na verdade, sempre uma história de persistência.",
            "Esconder insegurança atrás do título de líder tem um custo alto em saúde, relacionamentos e impacto.",
            "Acreditar em si mesmo quando ninguém mais acredita é o ato mais corajoso e estratégico de um líder.",
            "A autenticidade radical — ser quem você realmente é — é o diferencial que cria conexão genuína com equipes e clientes.",
            "Cada rejeição é uma escola de resiliência, não um sinal de que você deve parar.",
            "O caminho de subestimado a obstinado passa obrigatoriamente pelo enfrentamento honesto da dúvida interna.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Resiliência e superação de adversidades",
                        percent: 95,
                        descricao:
                            "A palestra inteira é construída sobre a jornada de superação de insegurança e rejeição sistemática como fundação da resiliência empresarial e pessoal.",
                    },
                    {
                        label: "6.2 Saúde emocional e autoconhecimento",
                        percent: 85,
                        descricao:
                            "Kern Lima explora com profundidade a dinâmica da dúvida interna e seu impacto na identidade e na capacidade de liderança autêntica.",
                    },
                ],
            },
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.3 Coragem e autenticidade sob pressão",
                        percent: 90,
                        descricao:
                            "Kern Lima apresenta a autenticidade radical e a coragem de seguir em frente sem validação externa como as competências centrais de sua liderança pessoal.",
                    },
                    {
                        label: "1.1 Autoconhecimento e identidade do líder",
                        percent: 82,
                        descricao:
                            "A palestra é um convite profundo a conhecer e aceitar a própria história — inclusive as partes de insegurança — como base para uma liderança genuína.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional baseada em narrativa pessoal e vulnerabilidade" },
            { label: "Estilo", value: "Storytelling pessoal + emoção + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para empreendedores, líderes em crise de identidade e qualquer pessoa enfrentando rejeição" },
            { label: "Intensidade conceitual", value: "Média (forte carga emocional e motivacional)" },
        ],
    },

// Shola Richards — Exigir civilidade para liderar (GLS 2021–2022)
    gls21_6: {
        speaker: "Shola Richards",
        speakerPhoto: "/speakers/shola-richards.png",
        title: "Exigir Civilidade para Liderar",
        edition: "GLS 2021–2022",
        duration: "31:36",
        bio: "Shola Richards é autor best-seller, especialista em civilidade no local de trabalho e fundador e CEO da Go Together Global. Seu trabalho foi destacado no Today Show, CBS, Forbes e Black Enterprise, alcançando leitores em mais de 160 países por meio de seus artigos e da série 'Positivity Solution'. Autoproclamado 'extremista de gentileza', Richards compartilhou sua mensagem com organizações líderes de saúde, universidades de ponta, Silicon Valley e a indústria cinematográfica. Foi o palestrante principal para o Departamento de Segurança Interna dos EUA três dias antes do 15º aniversário do 11 de setembro. É autor dos livros Making Work Work e Go Together.",
        temaCentral:
            "A civilidade não é uma opção suave de liderança — é uma exigência estratégica: líderes são definidos por como tratam as pessoas, e criar ambientes de trabalho seguros, respeitosos e colaborativos é a responsabilidade mais fundamental de quem lidera.",
        sinopse: [
            "Shola Richards abre com uma afirmação direta que atravessa toda a palestra: 'Somos definidos por como tratamos uns aos outros.' Usando a sabedoria de sua mãe do Mississippi — 'há dois tipos de gente: as que te fazem sentir bem quando entram na sala, e as que te fazem sentir bem quando saem' —, ele introduz o conceito de civilidade não como cortesia superficial, mas como uma escolha profunda de liderança que molda a cultura de toda uma organização.",
            "O especialista explora a diferença crítica entre ser 'agradável' e ser 'gentil': agradar é dizer o que as pessoas querem ouvir para evitar conflito; gentileza é dizer a verdade com cuidado genuíno pela outra pessoa. Líderes que confundem os dois criam culturas de silêncio tóxico, onde problemas reais nunca chegam à superfície. Richards apresenta práticas concretas para líderes eliminarem o que enfraquece as equipes — bullying passivo, sarcasmo, exclusão e incivilidade cotidiana — e construírem ambientes onde as pessoas genuinamente prosperam.",
            "Richards encerra com um desafio claro: civilidade não é fraqueza — é a forma mais exigente e corajosa de liderança. Em um mundo onde a divisão e o discurso inferior se tornaram norma, líderes que exigem civilidade de si mesmos e de suas equipes não estão sendo ingênuos — estão sendo os agentes de mudança de que o mundo mais precisa.",
        ],
        softSkills: [
            "Civilidade e gentileza intencional",
            "Comunicação honesta e corajosa",
            "Empatia genuína e escuta ativa",
            "Integridade relacional",
            "Criação de ambientes psicologicamente seguros",
            "Liderança pelo exemplo em cultura positiva",
            "Coragem de confrontar a incivilidade",
        ],
        palavrasChave: [
            "civilidade",
            "cultura organizacional",
            "gentileza",
            "respeito",
            "liderança positiva",
            "ambiente de trabalho saudável",
            "integridade relacional",
            "comunicação",
            "colaboração",
            "segurança psicológica",
        ],
        takeaways: [
            "Somos definidos por como tratamos uns aos outros — civilidade é a medida mais real de liderança.",
            "Há uma diferença fundamental entre ser agradável e ser gentil: gentileza exige coragem e honestidade.",
            "Líderes que toleram incivilidade estão, na prática, endossando-a e destruindo a cultura da equipe.",
            "Criar ambientes onde as pessoas prosperam é a responsabilidade mais fundamental de quem lidera.",
            "A gentileza não é fraqueza — é a forma mais exigente e corajosa de exercer liderança.",
            "Incivilidade cotidiana — sarcasmo, exclusão, bullying passivo — corrói equipes tão devastadoramente quanto crises abertas.",
            "Líderes que exigem civilidade de si mesmos primeiro são os mais credíveis para exigi-la das equipes.",
        ],
        categorias: [
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.2 Cultura de respeito e segurança psicológica",
                        percent: 95,
                        descricao:
                            "A palestra inteira é um framework prático para construir culturas organizacionais fundadas em civilidade, respeito e segurança psicológica genuína.",
                    },
                    {
                        label: "2.3 Confiança e integridade relacional",
                        percent: 85,
                        descricao:
                            "Richards demonstra que a confiança nas equipes é construída ou destruída por micro-interações cotidianas — e que líderes íntegros modelam o padrão.",
                    },
                ],
            },
            {
                titulo: "Categoria 3 — Comunicação e Influência",
                cor: "#FF6B35",
                criterios: [
                    {
                        label: "3.1 Comunicação honesta e corajosa",
                        percent: 82,
                        descricao:
                            "A distinção entre ser agradável e ser gentil posiciona a comunicação honesta e corajosa como competência central de líderes que influenciam positivamente.",
                    },
                    {
                        label: "3.3 Influência pelo exemplo e pela presença",
                        percent: 78,
                        descricao:
                            "Richards argumenta que líderes definem a cultura da equipe por meio de sua presença e comportamento — quem entra e faz as pessoas se sentirem bem lidera pelo exemplo.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Prática e inspiracional com forte base ética" },
            { label: "Estilo", value: "Storytelling + humor + ferramentas comportamentais" },
            { label: "Aplicabilidade", value: "Alta para líderes de equipes, gestores de RH e qualquer organização que enfrenta problemas de cultura" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

// Ibukun Awosika — O Poder de Escolha do Líder (GLS 2021–2022)
    gls21_7: {
        speaker: "Ibukun Awosika",
        speakerPhoto: "/speakers/ibukun-awosika.png",
        title: "O Poder de Escolha do Líder",
        edition: "GLS 2021–2022",
        duration: "28:21",
        bio: "Ibukun Awosika possui mais de três décadas de experiência combinada como empreendedora e em cargos de alto nível corporativo e em conselhos de organizações sem fins lucrativos em diversos setores e geografias. Reconhecida globalmente, recebeu o prêmio Forbes 'Mulher África Presidente' de 2020 e foi a primeira nigeriana a receber o 'International Women Entrepreneurial Challenge' em 2008. Atualmente é presidente do Conselho do First Bank of Nigeria Limited, o principal banco do país, e fundadora e CEO do The Chair Centre Group. Integra conselhos da Cadbury Nigeria e do Conselho Consultivo Internacional da IESE Business School em Barcelona.",
        temaCentral:
            "O poder de escolha do líder reside na capacidade de proteger sua integridade e seus valores mesmo quando a pressão é intensa, o futuro é incerto e o ambiente exige conformidade — porque são as escolhas feitas nesses momentos que definem o legado.",
        sinopse: [
            "Ibukun Awosika abre com uma reflexão que atravessa sua trajetória de décadas na liderança em contextos de alta pressão: como povo e como líderes, frequentemente esquecemos que temos o poder de escolha — que somos nós que seguramos o controle remoto de nossas próprias vidas. Em ambientes que pressionam à conformidade e situações que tentam ao ceder, a escolha consciente e fundamentada em valores é a âncora mais sólida que um líder pode ter.",
            "A empresária nigeriana explora os momentos críticos em que o poder de escolha é testado: quando pressões externas — financeiras, políticas, relacionais — empurram o líder a comprometer sua integridade; quando a incerteza do futuro torna tentador seguir o caminho da menor resistência; e quando os custos de permanecer fiel aos próprios valores parecem insuportavelmente altos. Em cada um desses momentos, Awosika demonstra a partir de sua própria experiência que a escolha de integridade, embora mais difícil no curto prazo, é sempre a mais estratégica no longo prazo.",
            "Awosika encerra com um chamado à consciência de que liderar é, fundamentalmente, um exercício contínuo de escolhas. A qualidade dessas escolhas — especialmente as feitas quando ninguém está observando, quando o custo é real e quando a pressão é máxima — é o que separa líderes que constroem legados duradouros daqueles que constroem apenas carreiras temporárias.",
        ],
        softSkills: [
            "Integridade e coerência de valores",
            "Tomada de decisão sob pressão",
            "Coragem para escolhas difíceis",
            "Autoconsciência e clareza de propósito",
            "Liderança baseada em princípios",
            "Resiliência ética",
            "Responsabilidade e prestação de contas",
        ],
        palavrasChave: [
            "poder de escolha",
            "integridade",
            "valores",
            "decisão sob pressão",
            "conformidade",
            "legado",
            "coragem",
            "propósito",
            "liderança ética",
            "responsabilidade",
        ],
        takeaways: [
            "Como povo, frequentemente esquecemos que temos o poder de escolha — o controle remoto de nossas vidas está em nossas mãos.",
            "A qualidade das escolhas feitas sob pressão máxima define a qualidade do legado do líder.",
            "Integridade não é negociável: ceder aos valores no curto prazo é sempre mais caro no longo prazo.",
            "Liderar é um exercício contínuo de escolhas — cada uma delas moldando a cultura e o futuro da organização.",
            "Os momentos de maior pressão são exatamente os momentos em que o poder de escolha precisa ser exercido com mais consciência.",
            "Proteger valores em ambientes que pressionam à conformidade é a forma mais corajosa de liderar.",
            "Líderes que escolhem com integridade, mesmo a custo pessoal, constroem legados que inspiram gerações.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.2 Integridade e coerência de valores",
                        percent: 93,
                        descricao:
                            "A palestra é centrada na proteção da integridade e dos valores como escolha consciente e estratégica, mesmo quando o custo é alto e a pressão é máxima.",
                    },
                    {
                        label: "1.3 Coragem em decisões difíceis",
                        percent: 87,
                        descricao:
                            "Awosika demonstra a partir de sua trajetória que as decisões mais corajosas são exatamente as que preservam os valores sob pressão intensa.",
                    },
                ],
            },
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.4 Tomada de decisão sob pressão e incerteza",
                        percent: 85,
                        descricao:
                            "A palestra explora como líderes eficazes tomam decisões estratégicas em cenários de incerteza sem comprometer sua bússola ética.",
                    },
                    {
                        label: "4.1 Clareza de propósito como guia estratégico",
                        percent: 78,
                        descricao:
                            "Awosika demonstra que a clareza de propósito e valores é o critério mais confiável para navegar decisões complexas em ambientes de alta pressão.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional baseada em experiência de liderança de alto nível" },
            { label: "Estilo", value: "Narrativa pessoal + reflexão filosófica + chamado à ação" },
            { label: "Aplicabilidade", value: "Alta para líderes corporativos, conselheiros e qualquer pessoa enfrentando dilemas éticos de liderança" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },

// Michelle Poler — Olá, medo! (GLS 2021–2022)
    gls21_8: {
        speaker: "Michelle Poler",
        speakerPhoto: "/speakers/michelle-poler.png",
        title: "Olá, Medo!",
        edition: "GLS 2021–2022",
        duration: "31:26",
        bio: "Michelle Poler é fundadora da Hello Fears, empreendedora social e autora venezuelana radicada nos EUA. Seu projeto '100 Dias Sem Medo' tornou-se viral e chamou a atenção do Today Show, Forbes, CBS, CNN, Huffington Post, Buzzfeed e muitos outros. Com a Hello Fears, ela criou um movimento social que alcançou mais de 70 milhões de pessoas em todo o mundo, capacitando-as a sair de suas zonas de conforto. Palestrante requisitada, já se apresentou no Google, Yum Brands, Facebook, Wells Fargo, ESPN, Netflix, Procter & Gamble, Microsoft e Toyota. É autora do livro Hello, Fears: Crush Your Comfort Zone and Become Who You're Meant to Be.",
        temaCentral:
            "Enfrentar o medo não é a ausência de medo, mas a decisão deliberada de agir apesar dele — e líderes que desenvolvem essa capacidade não apenas transformam a si mesmos, mas criam culturas onde as equipes também ousam crescer.",
        sinopse: [
            "Michelle Poler abre com uma premissa provocadora: enfrentar nossos medos é um componente crucial para ser um líder forte e empoderar equipes que buscam coragem em nós. Mas com que frequência realmente o fazemos? A partir do seu projeto '100 Dias Sem Medo' — que a tornou viral globalmente —, ela demonstra que o medo não é o inimigo da liderança: é o portal de entrada para o crescimento mais significativo.",
            "Poler explora os diferentes tipos de medo que líderes enfrentam: medos físicos óbvios, medos sociais — como o de julgamento, rejeição e fracasso — e o medo mais silencioso e devastador de todos, o de não ser suficiente. Ela distingue coragem de ausência de medo: corajoso não é quem não sente medo, mas quem age apesar dele. Essa distinção transforma a relação do líder com a própria vulnerabilidade, convertendo-a de fraqueza em força.",
            "Poler encerra com um convite: mudar o olhar sobre o que nos dá medo cria um novo potencial para o sucesso. Líderes que aprendem a dizer 'Olá, medo!' — reconhecendo-o sem ser paralisados por ele — não apenas ampliam seus próprios limites, mas modelam para suas equipes uma cultura de ousadia inteligente, onde erros são parte do crescimento e o desconforto é sinal de que algo importante está acontecendo.",
        ],
        softSkills: [
            "Coragem e ação apesar do medo",
            "Vulnerabilidade como força de liderança",
            "Resiliência emocional",
            "Mentalidade de crescimento",
            "Autenticidade e autoconhecimento",
            "Capacidade de inspirar e empoderar equipes",
            "Tolerância ao desconforto e ao fracasso",
        ],
        palavrasChave: [
            "medo",
            "coragem",
            "zona de conforto",
            "crescimento",
            "vulnerabilidade",
            "autenticidade",
            "empoderamento",
            "mentalidade de crescimento",
            "ousadia",
            "resiliência",
        ],
        takeaways: [
            "Enfrentar o medo não é a ausência de medo — é a decisão de agir apesar dele.",
            "Corajoso não é quem não sente medo, mas quem age mesmo sentindo.",
            "O medo não é o inimigo da liderança: é o portal de entrada para o crescimento mais significativo.",
            "Líderes que modelam coragem diante do medo criam culturas onde as equipes também ousam crescer.",
            "Mudar o olhar sobre o que nos dá medo cria um novo potencial para o sucesso.",
            "O medo de não ser suficiente é o mais silencioso e o mais devastador de todos — e precisa ser nomeado.",
            "Dizer 'Olá, medo!' é reconhecer a emoção sem ser paralisado por ela — a base de qualquer liderança corajosa.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Gestão do medo e da ansiedade",
                        percent: 93,
                        descricao:
                            "A palestra é completamente centrada na relação do líder com o medo — seu reconhecimento, ressignificação e uso como catalisador de crescimento.",
                    },
                    {
                        label: "6.2 Vulnerabilidade e saúde emocional",
                        percent: 85,
                        descricao:
                            "Poler transforma vulnerabilidade de fraqueza em força, demonstrando que líderes emocionalmente saudáveis abraçam o desconforto em vez de evitá-lo.",
                    },
                ],
            },
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    {
                        label: "5.3 Saída da zona de conforto e reinvenção",
                        percent: 90,
                        descricao:
                            "O projeto '100 Dias Sem Medo' é o exemplo máximo de reinvenção pessoal por meio da saída deliberada e sistemática da zona de conforto.",
                    },
                    {
                        label: "5.1 Cultura de ousadia e experimentação",
                        percent: 78,
                        descricao:
                            "Poler apresenta líderes corajosos como criadores de culturas organizacionais onde o erro e o desconforto são vistos como parte natural do crescimento.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com forte base narrativa e emocional" },
            { label: "Estilo", value: "Storytelling pessoal + humor + chamado à ação prática" },
            { label: "Aplicabilidade", value: "Alta para qualquer líder que enfrenta paralisia por medo, mudanças e desafios de crescimento pessoal" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

// Bianca Olthoff — A escolha de liderar (GLS 2021–2022)
    gls21_9: {
        speaker: "Bianca Olthoff",
        speakerPhoto: "/speakers/bianca-juarez-olthoff.png",
        title: "A Escolha de Liderar",
        edition: "GLS 2021–2022",
        duration: "27:22",
        bio: "Bianca Juarez Olthoff é pastora da The Father's House em Orange County, Califórnia, onde lidera ao lado do marido, Matt. Fundadora e presidente da organização sem fins lucrativos In The Name of Love, está comprometida em servir os encarcerados e equipá-los para descobrir a liberdade, independente das circunstâncias. Com mais de 20 anos no ministério, ela inspira pessoas a viverem com paixão e propósito. Autora best-seller, é conhecida por seus livros Play with Fire e How to Have Your Life Not Suck. Autodescrita como uma 'MexiRican apaixonada, amante de Jesus, que ensina a Bíblia e escreve livros'.",
        temaCentral:
            "Liderar é sempre uma escolha — e as maiores barreiras à liderança não são as portas fechadas ao redor, mas as barreiras mentais da insegurança e da autorresistência que construímos por dentro.",
        sinopse: [
            "Bianca Olthoff abre com uma tensão universal: tanto portas fechadas quanto portas abertas podem ser igualmente paralisantes. É muito fácil encontrar motivos para não avançar — 'não é o momento certo', 'não me sinto confiante', 'ninguém me deu permissão'. Para ela, a escolha de liderar começa antes de qualquer oportunidade externa: começa no momento em que o líder decide romper com as barreiras mentais da insegurança e da autorresistência.",
            "Olthoff explora com profundidade o papel da insegurança na liderança — não a insegurança óbvia e visível, mas a insegurança disfarçada de prudência, humildade ou espera pelo momento certo. Ela usa sua própria trajetória de mais de 20 anos no ministério e no serviço a populações marginalizadas para demonstrar que a liderança corajosa não nasce de ausência de dúvida, mas da decisão de agir apesar dela. A permissão para liderar não vem de fora — ela é uma escolha interna.",
            "Olthoff encerra com um chamado urgente: o próximo passo que você está adiando pode ser exatamente aquele que mais pessoas ao seu redor precisam que você dê. A liderança não é um status que se conquista — é uma escolha que se faz, todos os dias, diante de portas abertas e fechadas, de segurança e de medo, de clareza e de confusão. Quem decide liderar muda não apenas a própria vida, mas a de todos que estão à sua volta.",
        ],
        softSkills: [
            "Coragem para liderar sem permissão externa",
            "Superação da insegurança e da autorresistência",
            "Tomada de iniciativa e proatividade",
            "Autoconfiança e identidade de liderança",
            "Propósito como motivação para agir",
            "Resiliência diante das barreiras internas",
            "Liderança servidora e vocacional",
        ],
        palavrasChave: [
            "escolha de liderar",
            "insegurança",
            "autorresistência",
            "coragem",
            "próximo passo",
            "propósito",
            "permissão interna",
            "liderança vocacional",
            "barreiras mentais",
        ],
        takeaways: [
            "Portas abertas podem ser tão paralisantes quanto portas fechadas — a escolha de atravessá-las é sempre interna.",
            "A maior barreira à liderança não é externa: é a insegurança e a autorresistência que construímos por dentro.",
            "A permissão para liderar não vem de fora — ela é uma escolha que cada líder faz por si mesmo.",
            "Insegurança disfarçada de prudência ou humildade ainda é insegurança — e precisa ser reconhecida.",
            "Liderar é uma escolha que se faz todos os dias, não um status conquistado uma única vez.",
            "O próximo passo que você está adiando pode ser exatamente o que as pessoas ao seu redor mais precisam.",
            "Líderes que escolhem agir apesar da insegurança catalisam o próximo passo de todos ao seu redor.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.1 Identidade e autoconfiança do líder",
                        percent: 90,
                        descricao:
                            "A palestra é centrada na construção da identidade de liderança como escolha interna — independente de validação externa, cargo ou circunstâncias favoráveis.",
                    },
                    {
                        label: "1.3 Coragem e iniciativa",
                        percent: 85,
                        descricao:
                            "Olthoff apresenta a coragem de dar o próximo passo — mesmo sem permissão explícita e sem certeza total — como o ato mais fundamental de liderança.",
                    },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    {
                        label: "7.1 Clareza de propósito como motor da liderança",
                        percent: 82,
                        descricao:
                            "Olthoff ancora a escolha de liderar em propósito vocacional — a convicção de que existem pessoas que precisam que você dê exatamente esse próximo passo.",
                    },
                    {
                        label: "7.3 Impacto e responsabilidade social",
                        percent: 75,
                        descricao:
                            "O trabalho com populações encarceradas ilustra que a escolha corajosa de liderar tem impacto direto e transformador na vida das pessoas mais marginalizadas.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com forte apelo vocacional e pessoal" },
            { label: "Estilo", value: "Storytelling + humor + chamado à ação corajoso" },
            { label: "Aplicabilidade", value: "Alta para líderes em transição, jovens líderes e qualquer pessoa diante de uma escolha de liderança" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

// Albert Tate — Encontre o seu Ritmo (GLS 2021–2022)
    gls21_10: {
        speaker: "Albert Tate",
        speakerPhoto: "/speakers/albert-tate.png",
        title: "Encontre o Seu Ritmo",
        edition: "GLS 2021–2022",
        duration: "40:07",
        bio: "Albert Tate é o pastor fundador da Fellowship Church, uma das igrejas multiétnicas de maior crescimento nos Estados Unidos, lançada em janeiro de 2012 em Monrovia, Califórnia. Comunicador dinâmico, mistura narrativa poderosa com bom senso de humor para ilustrar a graça e o amor de Deus em igrejas, ambientes acadêmicos e conferências. Serve no Conselho de Curadores da Azusa Pacific University, na Global Leadership Network e na Stadia. Contribuiu para o livro Letters to a Birmingham Jail: A Response to the Words and Dreams of Dr. Martin Luther King Jr. e hospeda o Albert Tate Podcast.",
        temaCentral:
            "Encontrar o ritmo certo de liderança exige três princípios fundamentais: descanso intencional, comunidade autêntica e renovação espiritual — sem os quais nenhum líder sustenta saúde, criatividade e impacto no longo prazo.",
        sinopse: [
            "Albert Tate abre com o retrato do líder moderno: em ciclo interminável de observações, dúvidas e adaptações, sempre testando teorias e reorganizando equipes. Em meio a todo esse trabalho, uma pergunta essencial permanece sem resposta: como encontrar um ritmo de descanso? Como manter um compasso que sustente saúde, criatividade e impacto ao longo do tempo?",
            "Tate apresenta três princípios básicos para encontrar o próprio compasso. O primeiro é descanso intencional — não como ausência de trabalho, mas como prática deliberada de restauração que precede e potencializa toda a liderança eficaz. O segundo é comunidade autêntica — líderes que se isolam eventualmente colapsam; aqueles que constroem relações genuínas encontram força que nenhuma estratégia substitui. O terceiro é renovação espiritual — a reconexão com a fonte de propósito e sentido que sustenta o líder quando todas as métricas de sucesso falham.",
            "Tate encerra com um convite à consciência: a liderança sustentável não é apenas sobre fazer mais e melhor — é sobre encontrar o ritmo que permite ao líder permanecer inteiro, presente e frutífero ao longo de décadas, e não apenas de meses. Moldar a própria realidade para enxergar novas possibilidades começa com a coragem de parar, descansar e renovar antes que o esgotamento force a parada.",
        ],
        softSkills: [
            "Gestão do ritmo e da energia pessoal",
            "Autocuidado e descanso intencional",
            "Construção de comunidade e relações autênticas",
            "Renovação espiritual e reconexão com propósito",
            "Autoconhecimento e autoconsciência",
            "Sustentabilidade na liderança de longo prazo",
            "Equilíbrio entre produtividade e saúde",
        ],
        palavrasChave: [
            "ritmo de liderança",
            "descanso intencional",
            "comunidade autêntica",
            "renovação espiritual",
            "sustentabilidade",
            "saúde do líder",
            "equilíbrio",
            "propósito",
            "bem-estar",
            "longo prazo",
        ],
        takeaways: [
            "Encontrar o próprio ritmo de liderança é condição para sustentar saúde, criatividade e impacto no longo prazo.",
            "Descanso intencional não é ausência de trabalho — é prática deliberada que potencializa toda a liderança eficaz.",
            "Líderes que se isolam eventualmente colapsam; comunidade autêntica é força insubstituível.",
            "A renovação espiritual reconecta o líder à fonte de propósito quando todas as métricas de sucesso falham.",
            "Moldar a própria realidade para enxergar novas possibilidades começa com a coragem de parar e renovar.",
            "Liderança sustentável não é sobre fazer mais e melhor — é sobre permanecer inteiro ao longo de décadas.",
            "O compasso certo não é encontrado por acidente: ele é construído com disciplina, comunidade e fé.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.2 Ritmo saudável e prevenção do esgotamento",
                        percent: 92,
                        descricao:
                            "A palestra é uma resposta direta ao esgotamento sistêmico de líderes, apresentando três princípios concretos para construir ritmo saudável e sustentável.",
                    },
                    {
                        label: "6.3 Propósito e renovação espiritual",
                        percent: 85,
                        descricao:
                            "Tate demonstra que a renovação espiritual é o terceiro pilar do ritmo saudável — uma âncora de propósito que sustenta o líder quando o desempenho externo vacila.",
                    },
                ],
            },
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.2 Autodisciplina e gestão de energia",
                        percent: 82,
                        descricao:
                            "Encontrar o ritmo exige autodisciplina ativa: construir hábitos de descanso, comunidade e renovação antes que o esgotamento os force.",
                    },
                    {
                        label: "1.1 Autoconhecimento e sustentabilidade pessoal",
                        percent: 78,
                        descricao:
                            "Tate convida líderes a conhecerem seus próprios limites e ritmos naturais como base para uma liderança duradoura e íntegra.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Inspiracional com forte apelo espiritual e prático" },
            { label: "Estilo", value: "Narrativa + humor + princípios práticos" },
            { label: "Aplicabilidade", value: "Alta para líderes em risco de esgotamento, pastores e qualquer líder que busca sustentabilidade no longo prazo" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },

// A.R. Bernard — Liderança Extraordinária: Um-a-um com A.R. Bernard (GLS 2021–2022)
    gls21_11: {
        speaker: "A.R. Bernard",
        speakerPhoto: "/speakers/ar-bernard.png",
        title: "Liderança Extraordinária: Um-a-um com A.R. Bernard",
        edition: "GLS 2021–2022",
        duration: "34:12",
        bio: "A.R. Bernard é um líder religioso influente e visionário transformador, pastor fundador e presidente do Christian Cultural Center no Brooklyn, Nova York — uma das maiores congregações dos EUA, com mais de 40.000 membros. Antes de seguir seu chamado ao ministério, teve carreira bem-sucedida em finanças, colaborando com a NYC Economic Development Corporation e o Gabinete Consultivo do Chanceler Escolar de NYC. Líder de pensamento em fé e cultura, foi destaque em Fox News, CNN, NBC Today, MSNBC e CBS. Apresentador do programa The Rev and The Rabbi na rádio WABC, ele liderou parceria com a Gotham Organization para criar mais de 2.000 unidades de habitação social e centros de saúde e educação para comunidades carentes.",
        temaCentral:
            "A liderança extraordinária nasce da maturidade para navegar a tensão entre convicção e adaptação — saber quando manter firme os princípios e quando mudar a abordagem para alcançar um impacto genuíno e duradouro.",
        sinopse: [
            "Nesta entrevista conduzida pela jornalista Paula Faris, A.R. Bernard responde aos desafios e decisões complexas que definem os líderes atuais. Partindo de sua trajetória singular — de uma carreira em finanças ao pastoreio de uma das maiores congregações dos EUA, passando pela influência em políticas públicas e desenvolvimento econômico urbano —, Bernard oferece uma perspectiva rara sobre o que significa liderar com excelência em múltiplos contextos e ao longo de décadas.",
            "Um dos temas centrais é a tensão entre convicção e adaptação: líderes extraordinários possuem princípios sólidos que não negociam, mas são suficientemente flexíveis para adaptar sua abordagem ao contexto sem perder a bússola. Bernard explora como a fé pode ser um recurso — e não uma limitação — para líderes seculares e como a inteligência emocional e a sabedoria prática são mais determinantes para o impacto duradouro do que qualquer habilidade técnica isolada.",
            "Bernard conclui com sua visão de liderança como serviço transformador: o legado de um líder não se mede pelo tamanho da organização ou pelo acúmulo de prestígio, mas pela qualidade das vidas transformadas e pela saúde das comunidades que ele serviu. Para ele, liderança extraordinária é aquela que continua impactando depois que o líder saiu do palco.",
        ],
        softSkills: [
            "Sabedoria prática e maturidade de liderança",
            "Adaptabilidade sem perda de convicção",
            "Inteligência emocional e relacionamento",
            "Liderança transformadora e impacto social",
            "Comunicação e influência em múltiplos contextos",
            "Propósito e visão de longo prazo",
            "Humildade e aprendizado contínuo",
        ],
        palavrasChave: [
            "liderança extraordinária",
            "convicção",
            "adaptação",
            "sabedoria",
            "legado",
            "impacto social",
            "maturidade",
            "propósito",
            "fé e liderança",
            "transformação comunitária",
        ],
        takeaways: [
            "Liderança extraordinária nasce da maturidade para navegar a tensão entre convicção firme e adaptação estratégica.",
            "O legado de um líder não é medido pelo tamanho da organização, mas pela qualidade das vidas transformadas.",
            "Fé pode ser um recurso poderoso — não uma limitação — para qualquer líder que enfrenta decisões complexas.",
            "Inteligência emocional e sabedoria prática são mais determinantes para o impacto duradouro do que habilidades técnicas isoladas.",
            "Líderes extraordinários possuem princípios que não negociam, mas são flexíveis o suficiente para adaptar a abordagem ao contexto.",
            "Liderança que continua impactando depois que o líder saiu do palco é a medida real de excelência.",
            "Servir comunidades marginalizadas é uma das mais altas expressões de liderança com propósito.",
        ],
        categorias: [
            {
                titulo: "Categoria 1 — Liderança Pessoal",
                cor: "#FF1493",
                criterios: [
                    {
                        label: "1.2 Maturidade e sabedoria de liderança",
                        percent: 88,
                        descricao:
                            "Bernard exemplifica com sua trajetória multidécadas como a maturidade e a sabedoria prática são os ativos mais valiosos de um líder extraordinário.",
                    },
                    {
                        label: "1.1 Convicção de valores e adaptação estratégica",
                        percent: 82,
                        descricao:
                            "A tensão central da entrevista é entre manter convicções sólidas e adaptar abordagens — a marca de líderes que impactam em múltiplos contextos.",
                    },
                ],
            },
            {
                titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
                cor: "#06b6d4",
                criterios: [
                    {
                        label: "7.3 Legado e impacto comunitário",
                        percent: 90,
                        descricao:
                            "O projeto de mais de 2.000 unidades habitacionais e centros de saúde para comunidades carentes é o retrato concreto de um legado de liderança transformadora.",
                    },
                    {
                        label: "7.1 Clareza de propósito e visão de longo prazo",
                        percent: 84,
                        descricao:
                            "Bernard demonstra que a clareza de propósito — servir e transformar vidas — é o norte que guia todas as decisões de liderança extraordinária.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Entrevista aprofundada com líder experiente" },
            { label: "Estilo", value: "Diálogo reflexivo + narrativa + sabedoria prática" },
            { label: "Aplicabilidade", value: "Alta para líderes sênior, pastores e qualquer pessoa que busca sabedoria sobre liderança de longo prazo com impacto social" },
            { label: "Intensidade conceitual", value: "Média-alta" },
        ],
    },

// Henry Cloud — Liderança e saúde mental (GLS 2021–2022)
    gls21_12: {
        speaker: "Henry Cloud",
        speakerPhoto: "/speakers/henry-cloud.png",
        title: "Liderança e Saúde Mental",
        edition: "GLS 2021–2022",
        duration: "54:54",
        bio: "Dr. Henry Cloud é renomado especialista em liderança, psicólogo clínico e autor best-seller do New York Times. Seus 45 livros venderam quase 15 milhões de cópias em todo o mundo, e seu trabalho beneficiou mais de 150 milhões de pessoas. Possui extenso histórico em coaching executivo, dedicando grande parte do tempo a trabalhar com CEOs, equipes de liderança e executivos para melhorar desempenho, habilidades de liderança e cultura. A revista Success o nomeou entre os 25 líderes mais influentes em crescimento e desenvolvimento pessoal, ao lado de Oprah, Brené Brown e Seth Godin. Seu livro Integrity foi denominado pelo New York Times 'o melhor livro do grupo'.",
        temaCentral:
            "A saúde mental não é apenas uma questão pessoal do líder — é uma variável estratégica de desempenho organizacional: líderes que cuidam de sua saúde emocional lideram melhor, e líderes que entendem saúde mental tornam-se agentes de cura para suas equipes.",
        sinopse: [
            "Henry Cloud começa quebrando estigmas: o que queremos dizer com 'saúde mental' e o que ela tem a ver com liderança? Para o psicólogo clínico com 25 anos de experiência em coaching executivo, a resposta é direta — tem tudo. Líderes saudáveis emocionalmente tomam melhores decisões, criam culturas mais produtivas, gerenciam conflitos com mais eficácia e sustentam desempenho no longo prazo. Saúde mental não é ausência de crise — é a capacidade de processar e crescer a partir dela.",
            "Cloud apresenta os padrões mais comuns de disfunção emocional que ele observa em líderes de alto nível: a incapacidade de receber feedback sem defensividade, o perfeccionismo paralisante, o isolamento emocional disfarçado de autossuficiência, e a resistência a pedir ajuda por medo de parecer fraco. Para cada padrão, ele oferece uma abordagem clínica e prática — não apenas para que o líder se cure, mas para que se torne um agente de cura para a equipe ao redor.",
            "Cloud encerra com um convite às organizações: investir em saúde mental de líderes não é uma iniciativa de bem-estar — é uma estratégia de alto desempenho. Líderes que compreendem e cuidam de sua própria saúde emocional criam equipes mais resilientes, mais criativas e mais produtivas. E líderes que aprendem a reconhecer sinais de sofrimento nas pessoas ao seu redor têm o poder de transformar culturas inteiras.",
        ],
        softSkills: [
            "Autoconsciência e saúde emocional",
            "Capacidade de receber e integrar feedback",
            "Empatia e reconhecimento do sofrimento alheio",
            "Abertura à vulnerabilidade e pedido de ajuda",
            "Liderança como agente de cura",
            "Gestão de conflitos com maturidade emocional",
            "Resiliência e crescimento pós-crise",
        ],
        palavrasChave: [
            "saúde mental",
            "liderança emocional",
            "psicologia da liderança",
            "autoconsciência",
            "cura",
            "equipes saudáveis",
            "feedback",
            "vulnerabilidade",
            "desempenho",
            "bem-estar organizacional",
        ],
        takeaways: [
            "Saúde mental não é ausência de crise — é a capacidade de processar e crescer a partir dela.",
            "Líderes emocionalmente saudáveis tomam melhores decisões, criam culturas mais fortes e sustentam desempenho no longo prazo.",
            "Os padrões de disfunção mais comuns em líderes de alto nível incluem defensividade, perfeccionismo e isolamento emocional.",
            "Pedir ajuda não é fraqueza — é a forma mais inteligente de liderar quando os próprios recursos estão esgotados.",
            "Líderes que entendem saúde mental tornam-se agentes de cura para toda a equipe ao redor.",
            "Investir em saúde mental de líderes não é iniciativa de bem-estar — é estratégia de alto desempenho.",
            "Reconhecer sinais de sofrimento nas pessoas da equipe e agir sobre eles transforma culturas organizacionais inteiras.",
        ],
        categorias: [
            {
                titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
                cor: "#eab308",
                criterios: [
                    {
                        label: "6.1 Saúde mental como variável de desempenho",
                        percent: 95,
                        descricao:
                            "Cloud demonstra com rigor clínico que saúde mental é diretamente correlacionada com qualidade de liderança, tomada de decisão e cultura organizacional.",
                    },
                    {
                        label: "6.2 Cura e crescimento emocional do líder",
                        percent: 88,
                        descricao:
                            "A palestra apresenta frameworks clínicos concretos para que líderes identifiquem seus padrões disfuncionais e construam saúde emocional progressiva.",
                    },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.4 Liderança como agente de cultura saudável",
                        percent: 85,
                        descricao:
                            "Cloud posiciona líderes emocionalmente saudáveis como agentes de cura para as equipes — transformando culturas organizacionais pelo exemplo e pela presença.",
                    },
                    {
                        label: "2.2 Reconhecimento e apoio ao bem-estar da equipe",
                        percent: 80,
                        descricao:
                            "A palestra ensina líderes a reconhecer sinais de sofrimento nas pessoas ao redor e a criar ambientes onde buscar ajuda é sinal de força, não de fraqueza.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Técnica-clínica com forte aplicabilidade prática" },
            { label: "Estilo", value: "Expertise clínica + cases + linguagem acessível" },
            { label: "Aplicabilidade", value: "Alta para líderes de todos os níveis, equipes de RH e organizações que enfrentam crises de saúde mental" },
            { label: "Intensidade conceitual", value: "Alta" },
        ],
    },

// Stanley McChrystal — Dominando o risco (GLS 2021–2022)
    gls21_13: {
        speaker: "Stanley McChrystal",
        speakerPhoto: "/speakers/stanley-mcchrystal.png",
        title: "Dominando o Risco",
        edition: "GLS 2021–2022",
        duration: "29:37",
        bio: "General Stanley McChrystal é um general de quatro estrelas aposentado do Exército dos EUA, amplamente reconhecido por ter liderado uma organização abrangente de contraterrorismo que redefiniu a interação entre agências militares e governamentais. Ao longo de sua carreira liderou as Forças de Assistência à Segurança Internacional no Afeganistão, o Comando Conjunto de Operações Especiais e o 75º Regimento Ranger, comandando mais de 150.000 tropas de 45 países. Fundador do McChrystal Group e pesquisador sênior no Instituto Jackson de Assuntos Globais da Universidade de Yale. Autor dos best-sellers do New York Times My Share of the Task e Team of Teams: New Rules of Engagement for a Complex World.",
        temaCentral:
            "Dominar o risco não é eliminá-lo — é desenvolver a capacidade de detectar, compreender e agir sobre múltiplas dimensões de risco em tempo real, construindo organizações adaptáveis que operam com excelência mesmo em ambientes de alta incerteza.",
        sinopse: [
            "Stanley McChrystal abre com uma premissa clara: para um líder, o risco é inevitável. A questão não é evitá-lo, mas desenvolver a capacidade de dominá-lo — de compreender suas múltiplas dimensões, ajustar os controles disponíveis e agir com precisão mesmo sob pressão máxima. Essa capacidade, construída ao longo de décadas de operações militares em ambientes de altíssima complexidade, é totalmente transferível para o mundo empresarial e organizacional.",
            "McChrystal apresenta um sistema para detectar e agir frente ao risco que vai além das matrizes tradicionais de probabilidade e impacto. Para ele, o risco tem dimensões que incluem a velocidade com que se manifesta, a interconexão com outros riscos sistêmicos, a capacidade organizacional de resposta, e o nível de confiança nas informações disponíveis. Organizações que entendem e ajustam essas dimensões simultaneamente criam uma vantagem competitiva real — não porque evitam o risco, mas porque respondem a ele com mais agilidade e eficácia do que os concorrentes.",
            "McChrystal conclui com uma lição da experiência militar: a diferença entre organizações que sobrevivem a crises e as que sucumbem raramente é a qualidade do plano inicial — é a capacidade de adaptar o plano em tempo real quando a realidade não coopera. Líderes que dominam o risco não são os que mais preveem — são os que mais aprendem, mais rápido, no meio da crise.",
        ],
        softSkills: [
            "Tomada de decisão sob pressão e incerteza",
            "Pensamento sistêmico e visão de risco",
            "Adaptabilidade e aprendizado em tempo real",
            "Liderança em ambientes de alta complexidade",
            "Comunicação clara em situações de crise",
            "Construção de equipes de alta performance",
            "Coragem e serenidade diante do risco",
        ],
        palavrasChave: [
            "gestão de risco",
            "liderança em crise",
            "adaptabilidade",
            "pensamento sistêmico",
            "incerteza",
            "decisão sob pressão",
            "organizações ágeis",
            "ambientes complexos",
            "alta performance",
            "aprendizado em tempo real",
        ],
        takeaways: [
            "Para um líder, o risco é inevitável — a questão é desenvolver a capacidade de dominá-lo, não eliminá-lo.",
            "Risco tem múltiplas dimensões: velocidade, interconexão sistêmica, capacidade de resposta e qualidade das informações.",
            "Organizações que ajustam essas dimensões em tempo real têm vantagem competitiva real em ambientes de crise.",
            "A diferença entre organizações que sobrevivem a crises e as que sucumbem é a capacidade de adaptar o plano em tempo real.",
            "Líderes que dominam o risco não são os que mais preveem — são os que mais aprendem, mais rápido, no meio da crise.",
            "Construir equipes de alta performance em ambientes de incerteza exige confiança mútua e clareza de missão.",
            "A capacidade de lidar com situações difíceis sob pressão define a trajetória de influência de qualquer líder.",
        ],
        categorias: [
            {
                titulo: "Categoria 4 — Estratégia, Decisões e Execução",
                cor: "#173DED",
                criterios: [
                    {
                        label: "4.4 Tomada de decisão sob pressão e risco",
                        percent: 95,
                        descricao:
                            "A palestra inteira é um framework para tomar decisões estratégicas em ambientes de alta incerteza e risco sistêmico, construído a partir de décadas de experiência militar.",
                    },
                    {
                        label: "4.3 Execução adaptativa e aprendizado em tempo real",
                        percent: 88,
                        descricao:
                            "McChrystal demonstra que a excelência executiva em ambientes complexos depende da capacidade de adaptar planos em tempo real quando a realidade diverge da previsão.",
                    },
                ],
            },
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    {
                        label: "5.2 Adaptabilidade organizacional em ambientes complexos",
                        percent: 85,
                        descricao:
                            "O modelo Team of Teams de McChrystal apresenta como organizações podem se reinventar para operar com agilidade e eficácia em ambientes de alta complexidade e mudança constante.",
                    },
                    {
                        label: "5.1 Inovação em processos e estruturas de liderança",
                        percent: 78,
                        descricao:
                            "A redefinição de como agências militares e governamentais interagem ilustra como inovar em estruturas de liderança é condição para dominar ambientes de alta complexidade.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Técnica e estratégica com forte base experiencial" },
            { label: "Estilo", value: "Expertise militar + framework prático + narrativa de campo" },
            { label: "Aplicabilidade", value: "Alta para líderes de organizações em ambientes complexos, gestores de risco e executivos de alta performance" },
            { label: "Intensidade conceitual", value: "Alta" },
        ],
    },

// Jerry Lorenzo — Colaboração, Criatividade e Convicção (GLS 2021–2022)
    gls21_14: {
        speaker: "Jerry Lorenzo",
        speakerPhoto: "/speakers/jerry-lorenzo.png",
        title: "Colaboração, Criatividade e Convicção",
        edition: "GLS 2021–2022",
        duration: "18:40",
        bio: "Jerry Lorenzo Manuel é designer de moda americano e fundador da marca Fear of God, descrita pela GQ como 'reinventor da moda americana de luxo'. Criado em Sacramento, West Palm Beach e Chicago, cresceu acompanhando a carreira de beisebol profissional de seu pai pelo país, desenvolvendo uma apreciação pelo patrimônio e pela cultura americana contemporânea. Equipado com um MBA da Escola de Negócios da Universidade Loyola de Chicago e um entendimento profundo da lacuna entre a passarela e o guarda-roupa, Lorenzo fundou a Fear of God em 2013. Mais recentemente, assumiu como chefe global da Adidas Basketball, em parceria que uniu criatividade e alta performance.",
        temaCentral:
            "Criatividade sustentável não é um talento nato — é uma disciplina construída sobre convicção profunda, colaboração autêntica e a coragem de manter fidelidade à própria visão mesmo quando o mercado pressiona por conformidade.",
        sinopse: [
            "Nesta entrevista conduzida por Craig Groeschel, Jerry Lorenzo oferece uma perspectiva incomum sobre liderança criativa: em vez de apresentar criatividade como um dom misterioso reservado a poucos, ele a desmistifica como uma disciplina que qualquer líder pode cultivar. A questão não é 'sou criativo?' — a questão é 'tenho convicção suficiente para seguir minha visão criativa mesmo quando ninguém mais a vê ainda?'",
            "Lorenzo explora como a colaboração autêntica — não a cooperação funcional, mas a parceria genuína fundada em respeito mútuo e valores compartilhados — é o amplificador de criatividade mais poderoso que um líder pode desenvolver. Sua parceria com a Adidas exemplifica isso: não foi uma transação comercial, mas uma convergência de visões criativas que multiplicaram o que cada parte poderia ter criado sozinha. Para ele, o melhor da colaboração acontece quando cada parceiro traz sua identidade intacta para a mesa.",
            "Lorenzo encerra com uma reflexão sobre convicção: em um mercado que recompensa a relevância imediata, manter fidelidade à própria visão criativa a longo prazo é o ato mais corajoso — e mais estratégico — de qualquer líder criativo. A Fear of God não se tornou ícone por seguir tendências, mas por criar com honestidade e por construir uma identidade tão autêntica que acabou definindo a própria tendência.",
        ],
        softSkills: [
            "Criatividade e visão estética",
            "Convicção e fidelidade à própria identidade",
            "Colaboração e parceria autêntica",
            "Coragem para liderar pelo estilo próprio",
            "Adaptabilidade com coerência de valores",
            "Inspiração e influência pelo trabalho",
            "Resiliência diante da pressão por conformidade",
        ],
        palavrasChave: [
            "criatividade",
            "convicção",
            "colaboração",
            "identidade de marca",
            "moda e liderança",
            "autenticidade criativa",
            "visão",
            "inovação",
            "parceria",
            "influência cultural",
        ],
        takeaways: [
            "Criatividade sustentável não é um dom — é uma disciplina construída sobre convicção e prática constante.",
            "O melhor da colaboração acontece quando cada parceiro traz sua identidade intacta para a mesa.",
            "Manter fidelidade à própria visão criativa quando o mercado pressiona por conformidade é o ato mais corajoso de um líder criativo.",
            "Convicção profunda é o que transforma uma ideia em identidade e uma identidade em legado.",
            "Líderes criativos que constroem com honestidade acabam por definir tendências — não por segui-las.",
            "A parceria mais poderosa não é a transação mais lucrativa, mas a convergência de visões que se multiplicam mutuamente.",
            "Qualquer líder pode desenvolver disciplinas criativas — independentemente do setor ou da função.",
        ],
        categorias: [
            {
                titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
                cor: "#22c55e",
                criterios: [
                    {
                        label: "5.2 Criatividade e inovação como disciplina de liderança",
                        percent: 92,
                        descricao:
                            "Lorenzo desmistifica criatividade como dom e a apresenta como disciplina cultivável — um framework de inovação que qualquer líder pode aplicar em qualquer contexto.",
                    },
                    {
                        label: "5.3 Identidade de marca e reinvenção cultural",
                        percent: 85,
                        descricao:
                            "A Fear of God exemplifica como líderes criativos com convicção profunda conseguem reinventar categorias inteiras de mercado ao invés de seguir tendências existentes.",
                    },
                ],
            },
            {
                titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
                cor: "#8B5CF6",
                criterios: [
                    {
                        label: "2.1 Colaboração autêntica e parceria estratégica",
                        percent: 82,
                        descricao:
                            "A abordagem de Lorenzo à colaboração — fundada em respeito mútuo e valores compartilhados, não apenas em interesse comercial — é um modelo de parceria estratégica autêntica.",
                    },
                    {
                        label: "2.3 Cultura criativa e confiança na equipe",
                        percent: 75,
                        descricao:
                            "A entrevista revela como Lorenzo constrói culturas criativas onde cada colaborador é encorajado a trazer sua identidade e perspectiva únicas para o trabalho coletivo.",
                    },
                ],
            },
        ],
        avaliacaoTecnica: [
            { label: "Tipo de palestra", value: "Entrevista com líder criativo de alto impacto cultural" },
            { label: "Estilo", value: "Diálogo reflexivo + narrativa de trajetória + insights práticos" },
            { label: "Aplicabilidade", value: "Alta para líderes criativos, empreendedores de moda/cultura e qualquer líder que deseja desenvolver visão criativa e convicção" },
            { label: "Intensidade conceitual", value: "Média" },
        ],
    },


    // ===== gls22-23 =====
// Bob Iger — A viagem de uma vida (GLS 2022–2023)
gls22_1: {
    speaker: "Bob Iger",
    speakerPhoto: "/speakers/bob-iger.png",
    title: "A Viagem de uma Vida",
    edition: "GLS 2022–2023",
    duration: "28:16",
    bio: "Bob Iger é ex-CEO e presidente executivo da Walt Disney Company, cargo que ocupou por 15 anos. Sob sua liderança, a Disney se tornou uma das maiores e mais admiradas empresas de mídia e entretenimento do mundo, com aquisições transformadoras da Pixar, Marvel, Lucasfilm e 21st Century Fox. Durante sua gestão, a empresa foi reconhecida pela Forbes como uma das “Empresas Mais Reputadas” e uma das “Melhores Empregadoras”; pela Fortune como uma das “Empresas Mais Admiradas do Mundo”; e pela Barron’s como uma das “Empresas Mais Respeitadas do Mundo”. Iger é autor do best-seller do New York Times “The Ride of a Lifetime” (publicado no Brasil como “Onde os Sonhos Acontecem”), em que compartilha as lições aprendidas ao longo de sua trajetória à frente da Disney.",
    temaCentral:
        "A liderança de alto impacto se sustenta em relacionamentos genuínos, coragem para tomar grandes riscos e confiança no instinto — princípios que Bob Iger aplicou em cada aquisição bilionária e em cada decisão que redefiniu a indústria do entretenimento.",
    sinopse: [
        "Em uma conversa conduzida pela jornalista Paula Faris, Bob Iger compartilha as lições mais profundas de seus 15 anos como CEO da Disney. Partindo de hábitos simples — como acordar às 4h45 para pensar em silêncio — até decisões que movimentaram bilhões de dólares, Iger revela que liderança eficaz começa com decência: tratar pessoas com justiça, construir relacionamentos sólidos e honrar a confiança em todos os níveis da organização.",
        "O coração da palestra é a história da aquisição da Pixar. Iger descreve como, ao assumir a CEO da Disney, percebeu que a empresa precisava urgentemente revitalizar sua divisão de animação. Contra a opinião de investidores céticos, ele buscou reconectar-se pessoalmente com Steve Jobs — um relacionamento que havia se rompido — e concluiu a aquisição por US$ 7,3 bilhões. Momentos antes do anúncio público, Jobs revelou em particular que seu câncer havia voltado, oferecendo a Iger a chance de cancelar o acordo. A decisão de prosseguir, tomada em segundos, ilustra como liderança exige discernimento emocional sob pressão extrema.",
        "Iger também aborda sua filosofia de assumir grandes riscos em um mundo onde o status quo nunca é estratégia vencedora. Ele descreve como cada grande aquisição — Pixar, Marvel, Lucasfilm e 21st Century Fox — começou com uma conversa privada, fruto de confiança construída ao longo do tempo. E revela que a decisão de não adquirir o Twitter foi guiada pelo instinto: mesmo com aprovação dos conselhos, algo o disse que a aquisição não era a escolha certa. Para Iger, talento analítico e dados são ferramentas, mas a última palavra pertence ao julgamento pessoal do líder.",
    ],
    softSkills: [
        "Inteligência emocional e decência interpessoal",
        "Coragem para assumir grandes riscos",
        "Gestão de relacionamentos estratégicos",
        "Tomada de decisão sob pressão",
        "Confiança no instinto como bússola",
        "Visão de longo prazo e ousadia estratégica",
        "Comunicação direta e transparência",
    ],
    palavrasChave: [
        "liderança",
        "relacionamentos",
        "confiança",
        "risco",
        "instinto",
        "aquisições",
        "decência",
        "inovação",
        "propósito",
        "resiliência",
    ],
    takeaways: [
        "Negócios são feitos de relacionamentos: quanto melhores eles forem, melhores serão os resultados.",
        "Tratar pessoas com decência não é fraqueza — é um atributo poderoso e estrategicamente vantajoso.",
        "Grandes riscos exigem coragem: o status quo nunca é estratégia vencedora em um mundo em constante mudança.",
        "Toda grande decisão se resume, no final, ao instinto de alguém sobre aceitar ou não os dados disponíveis.",
        "Confiança se constrói em conversas privadas, cara a cara — não em reuniões com muitos presentes.",
        "Os momentos de maior triunfo profissional frequentemente vêm acompanhados de emoções opostas que testam o caráter do líder.",
        "Para liderar uma organização complexa, é essencial identificar e focar no que é mais importante antes de qualquer outra coisa.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.2 Visão de longo prazo e ousadia",
                    percent: 90,
                    descricao:
                        "Iger descreve como a visão de transformar a Disney Animation norteou cada aquisição — Pixar, Marvel, Lucasfilm e Fox — ao longo de 15 anos.",
                },
                {
                    label: "7.3 Legado e impacto duradouro",
                    percent: 80,
                    descricao:
                        "A palestra reflete sobre o legado construído a partir de decisões corajosas que redefiniu a maior empresa de entretenimento do mundo.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 85,
                    descricao:
                        "A decisão de prosseguir com a aquisição da Pixar, mesmo após a revelação da doença de Jobs, é um exemplo central de coragem sob pressão.",
                },
                {
                    label: "1.1 Autoconhecimento e inteligência emocional",
                    percent: 75,
                    descricao:
                        "Iger valoriza explicitamente o tempo de silêncio matutino e a capacidade de ler emoções em situações de alta tensão como fundamentos de sua liderança.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Entrevista narrativa baseada em experiência executiva" },
        { label: "Estilo", value: "Storytelling pessoal + princípios práticos de liderança" },
        { label: "Aplicabilidade", value: "Alta para CEOs, líderes sênior e profissionais de estratégia e cultura organizacional" },
        { label: "Intensidade conceitual", value: "Média (forte carga narrativa e emocional)" },
    ],
},

// Carey Nieuwhof — Aprenda a liderar em uma nova realidade (GLS 2022–2023)
gls22_2: {
    speaker: "Carey Nieuwhof",
    speakerPhoto: "/speakers/carey-nieuwhof.png",
    title: "Aprenda a Liderar em uma Nova Realidade",
    edition: "GLS 2022–2023",
    duration: "32:22",
    bio: "Carey Nieuwhof é ex-advogado, fundador da Connexus Church em Barrie, Ontário — uma das igrejas mais influentes da América do Norte —, e hoje dedica-se integralmente a ajudar líderes a prosperar. É autor best-seller, apresentador de podcast amplamente acessado e palestrante internacional. Seu livro “At Your Best: How to Get Time, Energy, and Priorities Working in Your Favor” foi destaque na Forbes, Fast Company e Business Insider. Carey também administra uma empresa digital com equipe totalmente remota e é uma das vozes mais buscadas sobre liderança e inovação organizacional no mundo de língua inglesa.",
    temaCentral:
        "A crise é simultaneamente reveladora e aceleradora: líderes que compreendem as cinco tendências disruptivas do pós-pandemia e adaptam sua liderança a elas não apenas sobrevivem — eles saem na frente.",
    sinopse: [
        "Carey Nieuwhof abre a palestra com um exercício de imaginação: e se em 2019 alguém tivesse previsto a pandemia, a Grande Renúncia, a guerra na Europa, a inflação e o colapso da frequência às igrejas? Ninguém acreditaria. No entanto, tudo isso aconteceu — e o cenário pós-pandemia impôs o ambiente de liderança mais desafiador que a maioria dos líderes já enfrentou. A premissa de Carey é que a crise não escolhe ninguém: ela revela o que estava escondido e acelera o que já estava em movimento.",
        "A palestra estrutura-se em torno de cinco tendências disruptivas que todo líder precisa compreender. A primeira é a lacuna geracional no ambiente de trabalho: profissionais mais velhos e mais jovens têm expectativas radicalmente diferentes sobre onde e como trabalhar. A segunda é a aceleração do trabalho híbrido e remoto, que transformou em realidade em meses o que levaria décadas. A terceira é o êxodo cultural — a frequência às igrejas e o envolvimento com instituições não voltou aos níveis de 2019, tornando o engajamento um desafio permanente. A quarta é a crise de confiança nas lideranças em todos os setores. A quinta é a necessidade de líderes desenvolverem um ritmo de vida sustentável como pré-condição para liderar bem.",
        "Nieuwhof encerra com uma mensagem de esperança prática: líderes não precisam saber tudo sobre o futuro para liderar bem no presente. É preciso observar as tendências, adaptar estruturas e — acima de tudo — cuidar da própria saúde e energia para poder servir às pessoas que dependem de sua liderança. A capacidade de aprender a liderar em uma nova realidade é, ela mesma, a habilidade mais valiosa de um líder.",
    ],
    softSkills: [
        "Leitura de contexto e adaptabilidade",
        "Visão estratégica de tendências",
        "Liderança integrativa entre gerações",
        "Gestão de energia e ritmo sustentável",
        "Comunicação inspiracional",
        "Aprendizado contínuo sob pressão",
        "Resiliência institucional",
    ],
    palavrasChave: [
        "disrupção",
        "tendências",
        "liderança pós-pandemia",
        "trabalho híbrido",
        "engajamento",
        "gerações",
        "sustentabilidade",
        "inovação",
        "adaptação",
    ],
    takeaways: [
        "A crise é reveladora e aceleradora: ela expõe o que estava escondido e acelera o que já estava em movimento.",
        "A lacuna entre gerações no ambiente de trabalho é real e precisa ser gerenciada com intencionalidade.",
        "O trabalho híbrido não é tendência passageira — organizações que não se adaptarem podem não sobreviver.",
        "A frequência e o engajamento com instituições foram estruturalmente alterados e não voltarão ao pré-pandemia.",
        "A confiança nas lideranças está em queda global; líderes precisam construí-la ativamente no nível local.",
        "Um líder esgotado não consegue liderar bem: cuidar da própria energia é responsabilidade estratégica.",
        "Aprender a liderar em uma nova realidade é a habilidade de liderança mais valiosa do nosso tempo.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.1 Leitura de tendências e antecipação",
                    percent: 92,
                    descricao:
                        "A palestra inteira é estruturada em torno de cinco tendências disruptivas que líderes precisam compreender para navegar o ambiente pós-pandemia.",
                },
                {
                    label: "5.3 Adaptação organizacional",
                    percent: 85,
                    descricao:
                        "Nieuwhof defende que líderes precisam adaptar modelos de trabalho, engajamento e cultura para responder a uma realidade irreversivelmente transformada.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.5 Gestão de energia e ritmo sustentável",
                    percent: 80,
                    descricao:
                        "Carey afirma que um líder esgotado não lidera bem e que cuidar da própria saúde e energia é pré-condição estratégica para servir a outros.",
                },
                {
                    label: "1.4 Aprendizado contínuo e mentalidade de crescimento",
                    percent: 75,
                    descricao:
                        "A palestra é um convite ao aprendizado deliberado sobre tendências emergentes — a capacidade de aprender e adaptar-se é apresentada como a habilidade mais valiosa.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Análise de tendências com aplicação prática" },
        { label: "Estilo", value: "Didático + conversacional com exemplos contextuais" },
        { label: "Aplicabilidade", value: "Alta para líderes de igrejas, organizações sem fins lucrativos e empresas em transformação" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},

// Craig Groeschel — Liderança única (GLS 2022–2023)
gls22_3: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "Liderança Única",
    edition: "GLS 2022–2023",
    duration: "39:07",
    bio: "Craig Groeschel é fundador e pastor sênior da Life.Church, eleita o melhor lugar para trabalhar em 2021 entre pequenas e médias empresas pelo Glassdoor. A Life.Church é a criadora do aplicativo Bíblia YouVersion — instalado mais de 500 milhões de vezes em todo o mundo. Autor best-seller do New York Times, Craig é também apresentador do renomado Craig Groeschel Leadership Podcast, com audiência global. Seu livro mais recente, “Lead Like It Matters” (publicado no Brasil como “Lidere com isso em mente”), é a versão revisada e expandida de seu clássico sobre o “isso” que separa organizações que prosperam das que apenas existem. Viaja pelo mundo em nome do Global Leadership Summit defendendo a formação de líderes em todos os setores da sociedade.",
    temaCentral:
        "Há algo intangível que separa líderes e organizações que prosperam daqueles que apenas existem — Craig Groeschel chama esse algo de “isso”, e toda a palestra é uma jornada para entender o que o cria, o que o destrói e como cultivá-lo intencionalmente.",
    sinopse: [
        "Craig Groeschel abre a palestra com uma pergunta que todo líder já se fez: por que algumas organizações com os mesmos recursos, sistemas e pessoas têm uma energia vibrante que outras simplesmente não têm? Em suas igrejas com múltiplos locais, todos tinham o mesmo louvor, o mesmo ensino e a mesma cultura — mas os resultados eram radicalmente diferentes. Aquelas que prosperavam tinham “isso”. As outras, não. Entender o que é esse “isso” se tornou a missão de Craig.",
        "A pesquisa de Craig sobre o “isso” revelou que ele não é produto de um modelo ou programa: não se copia. Ele emerge de líderes que cultivam sete qualidades específicas: clareza de propósito que todos entendem e vivem, confiança que cria segurança para arriscar, equipes que trabalham com excelência movidas por missão e não por regras, cultura de aprendizado onde erros são permitidos, liderança que serve antes de ser servida, comunicação que inspira ao invés de apenas informar, e fé coletiva de que algo maior está sendo construído. Cada um desses elementos pode ser desenvolvido intencionalmente — mas todos podem ser destruídos por decisões erradas de liderança.",
        "Craig conclui desafiando cada líder a fazer a pergunta mais difícil: “a minha organização tem ‘isso’?” E, se a resposta for não ou ainda não, quais são as decisões específicas que precisam ser tomadas agora para começar a cultivar esse diferencial. Para Groeschel, liderança única não é dom inato de poucos — é a consequência de escolhas diárias de quem tem clareza sobre o que importa e coragem para priorizá-lo.",
    ],
    softSkills: [
        "Clareza de propósito e visão",
        "Construção de cultura organizacional",
        "Liderança servidora",
        "Comunicação inspiracional",
        "Tomada de decisão com valores",
        "Desenvolvimento de equipes de alto desempenho",
        "Coragem de liderar de forma diferente",
    ],
    palavrasChave: [
        "cultura organizacional",
        "liderança",
        "propósito",
        "missão",
        "equipe",
        "confiança",
        "diferencial",
        "excelência",
        "inspiração",
    ],
    takeaways: [
        "O “isso” que separa organizações que prosperam das que apenas existem não se copia — ele emerge de dentro para fora.",
        "Clareza de propósito é a fundação: quando todos entendem o “por quê”, a energia organizacional muda.",
        "Confiança cria o ambiente seguro onde as pessoas se arriscam, aprendem e crescem.",
        "Equipes movidas por missão superam equipes movidas por regras em qualidade e engajamento.",
        "Uma cultura de aprendizado onde erros são permitidos é pré-condição para inovação.",
        "Liderança servidora não é fraqueza — é o que atrai pessoas que querem contribuir ao máximo.",
        "O “isso” pode ser destruído por decisões erradas de liderança: protegê-lo é responsabilidade do líder.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Clareza de valores e propósito pessoal",
                    percent: 88,
                    descricao:
                        "Craig defende que o “isso” começa no líder: sua clareza de propósito e seus valores moldam a cultura de toda a organização.",
                },
                {
                    label: "1.3 Coragem de liderar de forma diferente",
                    percent: 78,
                    descricao:
                        "A palestra desafia líderes a resistir à tentação de copiar modelos alheios e a ter coragem de construir uma identidade organizacional genuína.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.2 Construção e gestão de cultura organizacional",
                    percent: 90,
                    descricao:
                        "Os sete princípios do “isso” são, na prática, um mapa estratégico para construir cultura de alto desempenho de forma intencional.",
                },
                {
                    label: "4.3 Desenvolvimento e engajamento de equipes",
                    percent: 82,
                    descricao:
                        "Groeschel demonstra como equipes movidas por missão — em vez de regras — entregam resultados superiores em ambientes de confiança.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual com base em pesquisa organizacional própria" },
        { label: "Estilo", value: "Storytelling + estrutura de princípios práticos" },
        { label: "Aplicabilidade", value: "Alta para pastores, líderes organizacionais e gestores de cultura" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},

// Deb Liu — Recupere seu poder (GLS 2022–2023)
gls22_4: {
    speaker: "Deb Liu",
    speakerPhoto: "/speakers/deb-liu.png",
    title: "Recupere Seu Poder",
    edition: "GLS 2022–2023",
    duration: "20:12",
    bio: "Deb Liu é presidente e CEO da Ancestry, uma das maiores plataformas de genealogia e DNA do mundo. Com mais de 19 anos na indústria de tecnologia, foi nomeada uma das engenheiras femininas mais poderosas pela Business Insider. Antes de liderar a Ancestry, foi executiva sênior no Facebook, onde criou e liderou o Facebook Marketplace, além de construir os negócios de jogos e a plataforma de pagamentos da empresa. Anteriormente, atuou no PayPal e no eBay. Fundou a Women in Product, organização sem fins lucrativos com mais de 30.000 membros. É autora de “Take Back Your Power” (Recupere Seu Poder), lançado em agosto de 2022 e focado em criar o próprio caminho mesmo diante de obstáculos.",
    temaCentral:
        "Poder não é um conceito reservado a outros — é algo que cada líder possui, muitas vezes sem perceber. Deb Liu ensina como reconhecer, reivindicar e usar o próprio poder de forma ética e transformadora.",
    sinopse: [
        "Deb Liu inicia a palestra com um experimento simples: pede à audiência que pense na palavra “poder” e observe quem vem à mente. Quase ninguém pensa em si mesmo. Esse é o problema central que ela quer desmontar: temos um relacionamento doentio com o poder, enxergando-o nos outros e jamais em nós mesmos. Achamos que é errado desejá-lo, que ele corrompe, e usamos eufemismos para evitar a palavra. Mas esse tabu nos impede de agir com toda a nossa influência.",
        "Para Liu, poder é simplesmente a capacidade de agir e criar mudança — e todos os líderes o têm, em diferentes medidas. O desafio está em como usá-lo. Ela apresenta a distinção entre poder como ferramenta de controle (sobre pessoas) e poder como ferramenta de serviço (com pessoas). Líderes que usam o poder para servir constroem ambientes onde outros crescem, ganham voz e desenvolvem o próprio poder. Líderes que o usam para controlar criam dependência, medo e estagnação.",
        "Liu encerra com práticas concretas: identificar onde você tem mais influência do que percebe, usar essa influência para abrir portas para outros, e recusar-se a aceitar como permanentes as limitações impostas por sistemas ou pessoas. Recuperar o próprio poder é, antes de tudo, um ato de responsabilidade — porque o poder não usado para o bem é poder perdido.",
    ],
    softSkills: [
        "Autoconhecimento e percepção de influência",
        "Liderança com propósito ético",
        "Coragem de reivindicar a própria voz",
        "Empoderamento e desenvolvimento de outros",
        "Resiliência diante de barreiras sistêmicas",
        "Comunicação assertiva",
        "Mentalidade de possibilidade",
    ],
    palavrasChave: [
        "poder",
        "influência",
        "empoderamento",
        "diversidade",
        "liderança feminina",
        "autoconfiança",
        "serviço",
        "mudança",
        "barreiras",
    ],
    takeaways: [
        "Quase ninguém se vê como poderoso — mas essa crença nos impede de agir com toda a nossa capacidade de influência.",
        "Poder é a capacidade de criar mudança — e todos os líderes o possuem em alguma medida.",
        "A diferença entre poder saudável e poder tóxico está em se ele é usado sobre as pessoas ou com as pessoas.",
        "Líderes que usam o poder para servir criam ambientes onde outros crescem e desenvolvem o próprio poder.",
        "Aceitar como permanentes as limitações impostas por sistemas ou outras pessoas é abrir mão da própria agência.",
        "Identificar onde você tem mais influência do que percebe é o primeiro passo para recuperar o seu poder.",
        "O poder não usado para o bem é poder perdido: reivindicá-lo é uma responsabilidade, não um privilégio.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e percepção de influência",
                    percent: 90,
                    descricao:
                        "A palestra convida cada líder a reconhecer o poder que já possui — um exercício fundamental de autoconhecimento e percepção da própria agência.",
                },
                {
                    label: "1.3 Coragem de reivindicar a própria voz",
                    percent: 82,
                    descricao:
                        "Liu desafia líderes — especialmente mulheres e minorias — a recusar limitações impostas e a reivindicar o espaço de influência que lhes pertence.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.3 Superação de barreiras sistêmicas e pessoais",
                    percent: 85,
                    descricao:
                        "A trajetória de Deb Liu — como mulher asiático-americana em Silicon Valley — ancora concretamente a narrativa de superar obstáculos sem perder a integridade.",
                },
                {
                    label: "6.1 Mentalidade de possibilidade",
                    percent: 75,
                    descricao:
                        "Liu encoraja líderes a não internalizarem como definitivas as limitações externas, cultivando uma visão de possibilidade mesmo em ambientes adversos.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com aplicação prática" },
        { label: "Estilo", value: "Narrativa pessoal + provocação conceitual" },
        { label: "Aplicabilidade", value: "Alta para líderes de diversidade, inclusão e desenvolvimento de talentos" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Johnny C. Taylor — O papel crítico da empatia na liderança (GLS 2022–2023)
gls22_5: {
    speaker: "Johnny C. Taylor",
    speakerPhoto: "/speakers/johnny-taylor-jr.png",
    title: "O Papel Crítico da Empatia na Liderança",
    edition: "GLS 2022–2023",
    duration: "28:43",
    bio: "Johnny C. Taylor Jr. é presidente e CEO da Society for Human Resource Management (SHRM), a maior organização profissional de recursos humanos do mundo, com mais de 300.000 membros em mais de 165 países impactando a vida de mais de 110 milhões de trabalhadores diariamente. Advogado e executivo com mais de 20 anos de experiência, Taylor já ocupou cargos de liderança na IAC/Interactive Corp, Paramount Pictures, Blockbuster Entertainment Group e como CEO do Thurgood Marshall College Fund. É conselheiro do presidente dos EUA sobre Faculdades e Universidades Historicamente Negras e autor do best-seller nacional “RESET: A Leader’s Guide to Work in an Age of Upheaval”. Escreve coluna semanal “Ask HR” no USA Today e testemunha frequentemente perante o Congresso americano sobre questões de mercado de trabalho.",
    temaCentral:
        "A empatia não é uma habilidade suave secundária — é a competência mais crítica e mais carente na liderança contemporânea, com impacto direto no engajamento, na retenção e na performance das equipes.",
    sinopse: [
        "Johnny C. Taylor Jr. começa a palestra com uma declaração direta: temos um problema sério de empatia no mundo do trabalho, e esse é o desafio mais relevante que qualquer líder enfrenta hoje. Como CEO da maior organização de RH do mundo, ele tem acesso a dados que poucos líderes têm — e eles mostram que a empatia não é percebida como um traço de líderes eficazes, mas ela deveria ser a primeira competência avaliada em qualquer processo de seleção ou promoção.",
        "Taylor define empatia não como concordar com tudo nem como eliminar a accountability, mas como a capacidade genuína de ver e sentir a perspectiva do outro antes de agir. Ele apresenta dados sobre o colapso da confiança nas lideranças globais e argumenta que líderes com alta empatia constroem equipes mais engajadas, retêm talentos com mais eficácia e tomam decisões que consideram o impacto humano de suas escolhas. A empatia, nesse sentido, é vantagem competitiva.",
        "O palestrante encerra com um chamado prático: empatia é uma habilidade que pode ser desenvolvida, mas exige prática deliberada. Isso significa ouvir mais do que falar, fazer perguntas antes de dar respostas, e criar espaços onde as pessoas se sentem seguras para compartilhar o que realmente pensam. Para Taylor, líderes empáticos não são os mais populares — são os que constroem os ambientes mais saudáveis e de mais alto desempenho.",
    ],
    softSkills: [
        "Empatia e escuta ativa",
        "Inteligência emocional",
        "Construção de confiança",
        "Liderança inclusiva",
        "Comunicação com impacto humano",
        "Tomada de decisão com consciência social",
        "Gestão de pessoas em ambientes complexos",
    ],
    palavrasChave: [
        "empatia",
        "liderança",
        "confiança",
        "engajamento",
        "recursos humanos",
        "inclusão",
        "escuta",
        "performance",
        "ambiente de trabalho",
    ],
    takeaways: [
        "A empatia é a competência mais crítica e mais carente na liderança contemporânea — e isso tem custo mensurável.",
        "Empatia não é concordar com tudo: é ver e sentir a perspectiva do outro antes de agir.",
        "Líderes empáticos constroem equipes mais engajadas, retêm talentos e tomam decisões de maior qualidade humana.",
        "A confiança nas lideranças globais está em colapso — e a empatia é o antídoto mais eficaz disponível.",
        "Ouvir mais do que falar é o primeiro exercício prático de empatia que qualquer líder pode começar hoje.",
        "Criar espaços psicologicamente seguros onde as pessoas falam o que pensam é consequência direta da liderança empática.",
        "Empatia é habilidade, não traço inato: pode — e deve — ser desenvolvida intencionalmente.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Empatia e escuta como ferramentas de liderança",
                    percent: 95,
                    descricao:
                        "A palestra inteira é dedicada a demonstrar por que a empatia é a competência mais crítica para criar culturas de confiança e alto desempenho.",
                },
                {
                    label: "2.3 Confiança como fundamento do ambiente de trabalho",
                    percent: 85,
                    descricao:
                        "Taylor apresenta dados sobre o colapso global da confiança e argumenta que líderes empáticos são os únicos capazes de reverter esse cenário nas suas organizações.",
                },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.2 Escuta ativa e comunicação empática",
                    percent: 88,
                    descricao:
                        "Taylor ensina que comunicação empática começa com ouvir mais do que falar e fazer perguntas antes de dar respostas — habilidades que influenciam diretamente o engajamento.",
                },
                {
                    label: "3.1 Influência baseada em credibilidade e caráter",
                    percent: 75,
                    descricao:
                        "A credibilidade de Taylor como líder da maior organização de RH do mundo ancora sua influência e dá peso aos dados que ele apresenta sobre empatia.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual baseada em dados e experiência executiva" },
        { label: "Estilo", value: "Argumentativo + didático com chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para líderes de RH, gestores de pessoas e CEOs em todos os setores" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},

// Jon Acuff — Trilhas sonoras da mente (GLS 2022–2023)
gls22_6: {
    speaker: "Jon Acuff",
    speakerPhoto: "/speakers/jon-acuff.png",
    title: "Trilhas Sonoras da Mente",
    edition: "GLS 2022–2023",
    duration: "33:56",
    bio: "Jon Acuff é autor best-seller do New York Times de sete livros, incluindo “Soundtracks: The Surprising Solution to Overthinking” (Trilhas Sonoras: a surpreendente solução para o excesso de pensamento). Por mais de 20 anos, ajudou algumas das maiores marcas do mundo a contar suas histórias, incluindo The Home Depot, Bose e Staples. É um dos Top 100 palestrantes de liderança da revista Inc. e falou para centenas de milhares de pessoas em empresas como FedEx, Nissan, Microsoft, Chick-fil-A, Nokia e Comedy Central. Escreveu para a Time, Harvard Business Review, Fast Company, Reader’s Digest e MSNBC. Autodenominado “nerd das metas”, Jon combina humor afiado, honestidade desarmante e esperança prática em tudo o que faz.",
    temaCentral:
        "As trilhas sonoras negativas que tocam em loop na mente são o maior obstáculo para o desempenho e a realização — e a boa notícia é que é possível identificá-las, questionar sua validade e substituí-las por pensamentos que impulsionam em vez de paralisar.",
    sinopse: [
        "Jon Acuff começa com uma confissão: ele é um obcecado por metas que leu 100 livros em um ano, correu mais de 1.600 km e contratou um treinador de tênis de mesa. Mas descobriu que o maior obstáculo para alcançar qualquer objetivo não é a falta de plano, disciplina ou talento — é a trilha sonora negativa que toca em loop na própria cabeça. Pensamentos repetitivos e automáticos, como “não sou bom o suficiente” ou “isso nunca vai funcionar”, funcionam como narrativas invisíveis que sabotam a ação antes mesmo de ela começar.",
        "Acuff apresenta três perguntas para avaliar qualquer pensamento que ocupa espaço na mente: (1) Esse pensamento é verdadeiro? (2) Esse pensamento me ajuda? (3) Esse pensamento é necessário? Quando um pensamento falha em pelo menos um desses critérios, ele merece ser substituído. A palestra demonstra como pensamentos negativos muitas vezes surgem de experiências passadas, opiniões de outras pessoas ou medos projetados no futuro — e nenhum desses elementos precisa ditar o comportamento no presente.",
        "A solução não é o pensamento positivo superficial, mas a substituição deliberada: identificar o pensamento limitante, questioná-lo com evidências reais, e escolher uma trilha sonora nova que seja ao mesmo tempo honesta e útil. Acuff conclui desafiando cada participante a identificar a trilha sonora que está travando sua liderança e a começar hoje mesmo o trabalho de substituí-la por algo que o impulsione para onde deseja ir.",
    ],
    softSkills: [
        "Autoconhecimento e metacognição",
        "Gestão de pensamentos limitantes",
        "Resiliência mental",
        "Mentalidade de crescimento",
        "Autodisciplina emocional",
        "Humor como ferramenta de conexão",
        "Orientação a metas e resultados",
    ],
    palavrasChave: [
        "pensamentos limitantes",
        "mentalidade",
        "metas",
        "autoconsciência",
        "resiliência",
        "superação",
        "produtividade",
        "liderança interna",
        "comportamento",
    ],
    takeaways: [
        "A trilha sonora negativa que toca em loop na mente é o maior obstáculo para o desempenho — mais do que a falta de plano ou talento.",
        "Pensamentos repetitivos e automáticos funcionam como narrativas invisíveis que sabotam a ação antes de ela começar.",
        "Três perguntas para avaliar qualquer pensamento: Ele é verdadeiro? Ele me ajuda? Ele é necessário?",
        "Pensamentos negativos muitas vezes surgem de experiências passadas ou medos projetados — não da realidade presente.",
        "A solução não é o pensamento positivo superficial, mas a substituição deliberada por trilhas que sejam honestas e úteis.",
        "Líderes que dominam sua trilha sonora interna têm mais energia, clareza e capacidade de inspirar outros.",
        "Identificar e substituir um único pensamento limitante pode mudar radicalmente a trajetória de uma liderança.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Gestão de pensamentos e saúde mental",
                    percent: 92,
                    descricao:
                        "A palestra inteira é dedicada a como identificar, questionar e substituir pensamentos limitantes que comprometem o desempenho e o bem-estar.",
                },
                {
                    label: "6.1 Resiliência mental e emocional",
                    percent: 80,
                    descricao:
                        "Acuff ensina que a capacidade de não ser governado por pensamentos negativos automáticos é uma forma de resiliência que pode ser desenvolvida deliberadamente.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Autodisciplina e gestão da mente",
                    percent: 85,
                    descricao:
                        "O método das três perguntas é uma ferramenta prática de autodisciplina cognitiva — a capacidade de escolher intencionalmente os pensamentos que guiam a ação.",
                },
                {
                    label: "1.4 Mentalidade de crescimento",
                    percent: 75,
                    descricao:
                        "A crença central da palestra é que a mentalidade pode ser mudada — e que essa mudança é a alavanca mais poderosa para o desenvolvimento pessoal e profissional.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com metodologia prática" },
        { label: "Estilo", value: "Humorístico + didático com técnica aplicável" },
        { label: "Aplicabilidade", value: "Alta para qualquer líder que enfrenta bloqueios mentais ou deseja otimizar performance" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Judah Smith — Liderando com a dor (GLS 2022–2023)
gls22_7: {
    speaker: "Judah Smith",
    speakerPhoto: "/speakers/judah-smith.png",
    title: "Liderando com a Dor",
    edition: "GLS 2022–2023",
    duration: "36:46",
    bio: "Judah Smith é pastor principal da Churchome — anteriormente chamada The City Church —, com congregações em Seattle e Los Angeles e um aplicativo global. Pastor de sétima geração, é conhecido mundialmente por mensagens frescas, bem-humoradas e que desmistificam a Bíblia, tornando o cristianismo acessível a uma nova geração. Além do ministério, é capelão do Seattle Seahawks e um dos fundadores do aplicativo Faithful. Recentemente, catalisou o evento 1DayLA, mobilizando mais de 25.000 voluntários para servir a comunidade de Los Angeles. É autor do best-seller do New York Times “Jesus Is ____” e de “How’s Your Soul? Why Everything That Matters Starts with the Inside You”.",
    temaCentral:
        "Toda liderança real acontece em meio à dor — não apesar dela. Judah Smith ensina como permanecer íntegro, presente e eficaz mesmo quando as circunstâncias internas ou externas fazem tudo parecer impossível.",
    sinopse: [
        "Judah Smith começa a palestra esclarecendo o título: “liderar com a dor” não significa causar dor às pessoas — significa liderar enquanto você mesmo está com dor. A dor é parte inevitável da liderança, seja ela de origem pessoal, relacional, ministerial ou organizacional. A questão não é se você vai enfrentá-la, mas como você vai liderar quando ela chegar.",
        "Com o humor característico e histórias tiradas do cotidiano do casamento e da liderança pastoral, Judah tece uma reflexão profunda sobre autenticidade: líderes que fingem não ter dor criam culturas onde ninguém pode ser honesto. Em contraste, líderes que lideram com vulnerabilidade — sem usar a dor como desculpa nem como performance — criam ambientes de confiança onde as pessoas se sentem seguras para trazer suas próprias dificuldades. A dor compartilhada com integridade cria conexão.",
        "Smith conclui com a distinção entre dores que passam e dores que ficam: algumas circunstâncias mudam, outras não. Para as permanentes, o caminho não é a negação nem o colapso, mas a integração. Liderar com dor significa aprender a agir a partir de um lugar de esperança mesmo quando os sentimentos ainda não acompanham. A liderança mais durável é a que não depende de circunstâncias favoráveis para ser exercida com excelência.",
    ],
    softSkills: [
        "Vulnerabilidade e autenticidade",
        "Resiliência emocional",
        "Liderança em meio à adversidade",
        "Integridade sob pressão",
        "Empatia com quem sofre",
        "Esperança como escolha intencional",
        "Humor como instrumento de conexão",
    ],
    palavrasChave: [
        "dor",
        "liderança",
        "autenticidade",
        "vulnerabilidade",
        "resiliência",
        "esperança",
        "integridade",
        "adversidade",
        "pastoral",
    ],
    takeaways: [
        "Toda liderança real acontece em meio à dor — a questão é como você lidera quando ela chega.",
        "Líderes que fingem não ter dor criam culturas onde ninguém pode ser honesto.",
        "Vulnerabilidade sem perda de integridade é o que cria ambientes de confiança genuína.",
        "Dor compartilhada com autenticidade gera conexão — conexão que nenhum programa de engajamento consegue produzir.",
        "A diferença entre dores que passam e dores que ficam importa: nem toda dificuldade tem resolução no tempo esperado.",
        "Liderar com dor significa agir a partir de esperança mesmo quando os sentimentos ainda não acompanham.",
        "A liderança mais durável não depende de circunstâncias favoráveis — ela é exercida com excelência independentemente delas.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.4 Liderança em meio à adversidade",
                    percent: 90,
                    descricao:
                        "A palestra é dedicada integralmente ao tema de como manter a qualidade da liderança mesmo quando o líder está passando por dor real e intensa.",
                },
                {
                    label: "6.3 Resiliência emocional e esperança como escolha",
                    percent: 82,
                    descricao:
                        "Smith defende que a esperança é uma escolha deliberada, não um sentimento — e que líderes resilientes aprendem a agir a partir dela mesmo quando as emoções ainda não acompanham.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Integridade e autenticidade",
                    percent: 85,
                    descricao:
                        "Judah demonstra que autenticidade na liderança exige coragem para ser visto com dor, sem usar isso como performance ou como desculpa.",
                },
                {
                    label: "1.3 Coragem de permanecer presente",
                    percent: 75,
                    descricao:
                        "A palestra desafia líderes a permanecerem inteiros e presentes mesmo quando as circunstâncias internas tornam isso incrivelmente difícil.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional pastoral com reflexão sobre liderança" },
        { label: "Estilo", value: "Humorístico + profundamente emocional e reflexivo" },
        { label: "Aplicabilidade", value: "Alta para pastores, líderes de organizações sem fins lucrativos e qualquer líder em crise pessoal" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional)" },
    ],
},

// Lynsi Snyder — O coração por trás do In-N-Out Burger (GLS 2022–2023)
gls22_8: {
    speaker: "Lynsi Snyder",
    speakerPhoto: "/speakers/lynsi-snyder.png",
    title: "O Coração por Trás do In-N-Out Burger",
    edition: "GLS 2022–2023",
    duration: "19:31",
    bio: "Lynsi Snyder-Ellington é presidente do In-N-Out Burger, a icônica rede de hambúrgueres fundada por seus avós em 1948 e que permanece privada e operada pela família até hoje. Comprometida com os valores originais da empresa — foco nas pessoas e atmosfera orientada para a equipe —, Lynsi fez o In-N-Out figurar na lista dos Melhores Lugares para Trabalhar do Glassdoor por sete anos consecutivos e na lista da Forbes como um dos Melhores Empregadores nos EUA. A empresa conta com aproximadamente 30.000 funcionários. Além de liderar o negócio, Lynsi supervisiona todos os esforços filantrópicos da empresa por meio da Fundação In-N-Out Burger e da Fundação Slave 2 Nothing, e é cofundadora da Army of Love, organização sem fins lucrativos dedicada a unir o corpo de Cristo.",
    temaCentral:
        "Liderar uma empresa de legado familiar não é cargo — é chamado. Lynsi Snyder mostra como valores profundos, foco nas pessoas e fé servem de bússola quando tudo o mais muda.",
    sinopse: [
        "Lynsi Snyder não escolheu liderar o In-N-Out Burger — ela nasceu dentro dele. Com 27 anos, assumiu o comando da empresa fundada por seus avós em 1948 sem ter certeza de que estava pronta, mas com a convicção de que, se Deus a colocou ali, Ele a ajudaria a enfrentar o que viesse. Em uma entrevista conduzida por Paula Faris, ela compartilha os bastidores de uma liderança que muitos de fora idealizam e poucos compreendem de verdade.",
        "O maior desafio que Lynsi descreve não é operacional — é a percepção equivocada que as pessoas têm sobre quem ela é e o que a empresa representa. Chamada de “princesa do hambúrguer”, ela precisou construir autoridade e identidade próprias dentro de um legado que a antecede em décadas. Sua resposta foi ancorar a liderança nos mesmos valores que seus avós plantaram: cuidado genuíno com as pessoas, qualidade que não se negocia e uma cultura que trata funcionários como família.",
        "Lynsi encerra refletindo sobre fé e propósito: o que sustenta a liderança do In-N-Out não é a estratégia de mercado, mas o coração por trás de tudo. Para ela, a empresa não existe apenas para vender hambúrgueres — ela existe para impactar vidas, tanto dos funcionários quanto dos clientes. Esse “coração” é o legado mais precioso que ela carrega e que se recusa a deixar enfraquecer.",
    ],
    softSkills: [
        "Liderança com fé e propósito",
        "Gestão de legado e identidade organizacional",
        "Humildade e autenticidade",
        "Cuidado genuíno com pessoas",
        "Resiliência diante de expectativas externas",
        "Comprometimento com valores inegociáveis",
        "Liderança servidora orientada por missão",
    ],
    palavrasChave: [
        "legado familiar",
        "propósito",
        "valores",
        "cultura",
        "pessoas",
        "fé",
        "qualidade",
        "liderança",
        "identidade",
    ],
    takeaways: [
        "Assumir uma liderança sem se sentir totalmente pronto é normal: esperar pela prontidão perfeita é não agir nunca.",
        "O maior desafio de líderes de legado é construir identidade própria sem apagar o que veio antes.",
        "Cultura que trata funcionários como família não é slogan — é política concreta que se reflete em resultados mensuráveis.",
        "O coração por trás de uma organização é o que a diferencia quando os produtos e preços são comparáveis.",
        "Valores inegociáveis são a âncora que impede uma empresa de se perder quando as pressões externas se intensificam.",
        "Fé não é ausência de dúvida — é o que permite dar o próximo passo mesmo quando a certeza não existe.",
        "Legado é o eco que um líder cria — e cabe a cada geração decidir se ele será amplificado ou silenciado.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.3 Gestão e continuidade de legado",
                    percent: 92,
                    descricao:
                        "A palestra inteira é uma reflexão sobre como carregar e honrar um legado familiar enquanto se constrói uma identidade de liderança própria.",
                },
                {
                    label: "7.1 Propósito como bússola organizacional",
                    percent: 85,
                    descricao:
                        "Lynsi articula com clareza que o In-N-Out existe para impactar vidas, não apenas para vender hambúrgueres — e esse propósito guia cada decisão estratégica.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.2 Cultura de cuidado e pertencimento",
                    percent: 88,
                    descricao:
                        "O modelo do In-N-Out de tratar funcionários como família é o principal diferencial competitivo que Lynsi descreve e que se traduz em sete anos consecutivos como um dos melhores lugares para trabalhar.",
                },
                {
                    label: "2.4 Valores inegociáveis como fundação cultural",
                    percent: 80,
                    descricao:
                        "A qualidade e o cuidado com pessoas são apresentados como valores que não se negociam independentemente de pressões de mercado.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Entrevista narrativa sobre liderança de legado" },
        { label: "Estilo", value: "Conversacional + reflexivo com perspectiva pessoal e espiritual" },
        { label: "Aplicabilidade", value: "Alta para líderes de empresas familiares, empreendedores e gestores de cultura" },
        { label: "Intensidade conceitual", value: "Baixa-média (forte carga emocional e inspiracional)" },
    ],
},

// Sahar Hashemi — Desbloqueando a mentalidade de start-up em sua organização (GLS 2022–2023)
gls22_9: {
    speaker: "Sahar Hashemi",
    speakerPhoto: "/speakers/sahar-hashemi.png",
    title: "Desbloqueando a Mentalidade de Start-up em Sua Organização",
    edition: "GLS 2022–2023",
    duration: "31:18",
    bio: "Sahar Hashemi é co-fundadora da Coffee Republic, a primeira rede de cafeterias do Reino Unido, que ela expandiu para 110 lojas e um valor de mercado de £50 milhões. Ex-advogada, também fundou a Skinny Candy, marca pioneira no segmento de doces sem açúcar. Foi nomeada pela Rainha Elizabeth II como “Pioneira para a vida da nação” e recebeu o título de OBE por serviços à economia britânica e à caridade. Seu primeiro livro, “Anyone Can Do It”, tornou-se best-seller ao desmistificar o empreendedorismo. Seu livro mais recente, “Start Up Forever”, aborda como grandes organizações podem recuperar o espírito empreendedor das startups. Descrita como “um agente de mudança” e “um poderoso catalisador para o empreendedorismo dentro de grandes corporações”.",
    temaCentral:
        "O mindset de startup não é privilégio de fundadores visionários ou aventureiros — ele existe dentro de cada pessoa e pode ser desbloqueado em qualquer organização, independentemente de tamanho ou setor.",
    sinopse: [
        "Sahar Hashemi começa com uma provocação: pede que a audiência levante a mão quem acredita ter um mindset de startup. Poucos levantam. E ela admite que ela mesma não levantaria, porque o imaginário dominante sobre empreendedores — Elon Musk, Zuckerberg, Branson — exclui a maioria das pessoas. Mas essa exclusão é uma ilusão que prejudica organizações inteiras: o empreendedorismo não é traço inato de poucos eleitos. É uma vontade de criar que existe no DNA de todo ser humano.",
        "Hashemi apresenta a distinção central de sua visão: grandes organizações começam como startups cheias de energia, improvisação e propósito — e gradualmente trocam esse espírito por processos, hierarquias e aversão ao risco. O que se perde no caminho não é competência — é a mentalidade de “cliente como chefe”, a disposição para agir antes de ter certeza e a curiosidade que gera inovação real. Recuperar esse espírito dentro de organizações estabelecidas é possível — e é urgente.",
        "Sahar encerra com ferramentas práticas para despertar o empreendedor adormecido dentro de qualquer equipe: começar pelo problema do cliente em vez da solução interna, criar espaços de experimentação sem punição pelo fracasso e cultivar a mentalidade de “girar a chave” — a escolha deliberada de agir com curiosidade e criatividade mesmo dentro de estruturas estabelecidas. A inovação não começa no laboratório de P&D — começa na forma como cada pessoa na organização decide encarar seu trabalho.",
    ],
    softSkills: [
        "Mentalidade empreendedora",
        "Tolerância ao risco e à incerteza",
        "Orientação para o cliente",
        "Criatividade e improvisação",
        "Liderança inovadora em estruturas estabelecidas",
        "Coragem de experimentar",
        "Curiosidade como prática de liderança",
    ],
    palavrasChave: [
        "startup",
        "inovação",
        "empreendedorismo",
        "mentalidade",
        "cliente",
        "experimentação",
        "cultura",
        "criatividade",
        "transformação",
    ],
    takeaways: [
        "O mindset de startup não é traço inato de poucos — é uma vontade de criar que existe no DNA de todo ser humano.",
        "Grandes organizações perdem o espírito empreendedor ao trocar curiosidade por processo e propósito por burocracia.",
        "A mentalidade de “cliente como chefe” é o primeiro elemento do espírito startup que precisa ser recuperado.",
        "Agir antes de ter certeza absoluta é característica de startups — e pode ser cultivada em qualquer organização.",
        "Criar espaços de experimentação sem punição pelo fracasso é a condição para que a inovação aconteça de verdade.",
        "Girar a chave — a escolha deliberada de agir com curiosidade — está disponível para qualquer pessoa em qualquer cargo.",
        "A inovação começa na forma como cada pessoa decide encarar seu trabalho, não em laboratórios de P&D.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.2 Mentalidade empreendedora e cultura de inovação",
                    percent: 93,
                    descricao:
                        "A palestra é dedicada inteiramente a como despertar o espírito empreendedor adormecido dentro de grandes organizações — o núcleo exato desta categoria.",
                },
                {
                    label: "5.4 Experimentação e tolerância ao risco",
                    percent: 85,
                    descricao:
                        "Hashemi apresenta ferramentas práticas para criar espaços de experimentação seguros onde inovação real pode emergir sem punição pelo fracasso.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.4 Orientação para o cliente como estratégia",
                    percent: 82,
                    descricao:
                        "A mentalidade de “cliente como chefe” é apresentada como o princípio estratégico mais importante que as startups possuem e as grandes organizações frequentemente perdem.",
                },
                {
                    label: "4.1 Decisão em contexto de incerteza",
                    percent: 75,
                    descricao:
                        "Sahar ensina que a disposição para agir antes de ter todas as respostas é uma competência estratégica, não um déficit de planejamento.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com ferramentas práticas de inovação" },
        { label: "Estilo", value: "Energia alta + storytelling de empreendedora com chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para líderes corporativos, equipes de inovação e gestores de transformação organizacional" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Stephanie Chung — Adaptando sua liderança para os desafios de hoje (GLS 2022–2023)
gls22_10: {
    speaker: "Stephanie Chung",
    speakerPhoto: "/speakers/stephanie-chung.png",
    title: "Adaptando Sua Liderança para os Desafios de Hoje",
    edition: "GLS 2022–2023",
    duration: "29:04",
    bio: "Stephanie Chung tem mais de 30 anos de experiência catalisando crescimento transformador no setor de aviação. Em 2018, tornou-se a primeira afro-americana a presidir uma grande empresa de aviação privada ao assumir a presidência da JetSuite, onde reposicionou a marca de um serviço de commodity para uma experiência de cliente de luxo. Anteriormente, foi VP de Vendas na Flexjet, supervisionando uma equipe que gerou mais de US$ 835 milhões em receita. Serviu também na US Airways, Delta Air Lines e Bombardier. Em 2020, ingressou na Wheels Up como primeira Diretora de Crescimento da empresa. É membro do C200, comunidade das mulheres mais bem-sucedidas nos negócios, e foi incluída na lista Ebony Power 100.",
    temaCentral:
        "No ambiente de desconfiança global em que vivemos, o líder mais eficaz é o que constrói confiança de forma local, consistente e intencional — e coloca o relacionamento no centro de cada estratégia de liderança.",
    sinopse: [
        "Stephanie Chung abre a palestra com dados impactantes do Edelman Trust Barometer: o mundo atingiu o nível mais baixo de confiança já registrado em governos e na mídia. Por primeira vez na história, as empresas inspiram mais confiança do que qualquer outra instituição. Isso coloca sobre os ombros dos líderes empresariais uma responsabilidade sem precedentes: os funcionários esperam que seus líderes tomem posição sobre economia, desigualdade, diversidade e aquecimento global. A relação entre empregado e empregador nunca foi tão crítica.",
        "Chung apresenta sua tese central: a confiança tornou-se localizada. Os funcionários não confiam em instituições abstratas — eles confiam no seu CEO, no seu gestor direto, na pessoa que eles veem todo dia. Isso significa que a liderança que importa não é a que aparece nos comunicados corporativos, mas a que se manifesta nas interações cotidianas. Construir confiança local exige presença, consistência, vulnerabilidade e a disposição de dialogar sobre temas difíceis.",
        "Stephanie encerra com princípios práticos de liderança adaptativa: reconhecer onde a confiança foi perdida, agir com humildade para reconstruí-la, e criar rituais de conexão que sinalizem aos funcionários que são vistos e valorizados. No ambiente atual, líderes que adaptam seu estilo para construir confiança genuína terão equipes mais leais, mais engajadas e mais dispostas a dar o melhor de si mesma diante dos desafios de um mundo em transformação acelerada.",
    ],
    softSkills: [
        "Construção e manutenção de confiança",
        "Liderança adaptativa",
        "Inteligência emocional sob pressão",
        "Comunicação em contextos de incerteza",
        "Presença e conexão com equipes",
        "Coragem de dialogar sobre temas difíceis",
        "Liderança inclusiva e consciente",
    ],
    palavrasChave: [
        "confiança",
        "liderança adaptativa",
        "engajamento",
        "presença",
        "conexão",
        "diversidade",
        "desafios",
        "relacionamento",
        "ambiente de trabalho",
    ],
    takeaways: [
        "A confiança nas instituições atingiu seu nível histórico mais baixo — e isso coloca os líderes empresariais em uma posição de responsabilidade sem precedente.",
        "A confiança tornou-se localizada: as pessoas confiam no seu gestor direto, não em instituições abstratas.",
        "Liderança que importa é a que se manifesta nas interações cotidianas, não nos comunicados corporativos.",
        "Construir confiança local exige presença, consistência e disposição para dialogar sobre temas difíceis.",
        "Funcionários esperam que seus líderes tomem posição sobre as grandes questões do nosso tempo.",
        "Reconhecer onde a confiança foi perdida e agir com humildade para reconstruí-la é sinal de liderança madura.",
        "Líderes que adaptam seu estilo para construir conexão genuína terão equipes mais leais e mais engajadas.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Adaptabilidade e leitura de contexto",
                    percent: 88,
                    descricao:
                        "Stephanie mostra como líderes precisam adaptar seu estilo ao contexto de desconfiança atual, ajustando comportamentos e prioridades para construir confiança de forma eficaz.",
                },
                {
                    label: "1.2 Presença e consistência como fundamento da confiança",
                    percent: 80,
                    descricao:
                        "A palestra enfatiza que confiança se constrói com presença e consistência — não com declarações ou programas pontuais.",
                },
            ],
        },
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.3 Liderança em contexto de transformação acelerada",
                    percent: 82,
                    descricao:
                        "Chung contextualiza a crise de confiança no cenário maior de transformação do mundo do trabalho e propõe respostas adaptativas concretas.",
                },
                {
                    label: "5.1 Diagnóstico de cenário e resposta estratégica",
                    percent: 75,
                    descricao:
                        "O uso do Edelman Trust Barometer como ponto de partida exemplifica como líderes eficazes lêem dados do ambiente e adaptam sua liderança a partir deles.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual baseada em dados com aplicação prática" },
        { label: "Estilo", value: "Assertivo + inspiracional com perspectiva de liderança feminina" },
        { label: "Aplicabilidade", value: "Alta para CEOs, gestores sênior e líderes que enfrentam crises de engajamento" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Vanessa Van Edwards — Ciência da conexão (GLS 2022–2023)
gls22_11: {
    speaker: "Vanessa Van Edwards",
    speakerPhoto: "/speakers/vanessa-van-edwards.png",
    title: "Ciência da Conexão",
    edition: "GLS 2022–2023",
    duration: "37:25",
    bio: "Vanessa Van Edwards é autora best-seller nacional de “Captivate: The Science of Succeeding with People”, traduzido para 16 idiomas, e de “Cues: Master the Secret Language of Charismatic Communication”. Por mais de uma década, lidera treinamentos corporativos e workshops para públicos ao redor do mundo, incluindo eventos como SXSW e MIT, e em empresas como Google, Dove, Microsoft e Comcast. Conhecida por sua abordagem única de conectar pesquisas científicas a habilidades sociais práticas, Vanessa transforma dados de psicologia comportamental em ferramentas aplicáveis imediatamente por qualquer líder.",
    temaCentral:
        "A conexão não é mágica nem sorte — ela tem ciência. Líderes que dominam os sinais verbais e não-verbais da comunicação carismática constroem confiança mais rapidamente, influenciam com mais eficácia e criam equipes mais coesas.",
    sinopse: [
        "Vanessa Van Edwards abre com uma história pouco conhecida: quando uma mina de cobre desabou no Chile em 2010, prendendo 33 mineradores por 69 dias, o contramestre Luis Urzúa não apenas planejou a sobrevivência física do grupo — ele desenvolveu estratégias de sobrevivência emocional. Criou exercícios de fuga, rituais de oração coletiva e estruturas de tomada de decisão em equipe. Quando o resgate finalmente chegou, Urzúa foi o último a subir. Essa história resume o que Vanessa vai ensinar: liderança eficaz é conexão intencional.",
        "Vanessa apresenta a ciência por trás do que ela chama de “sinais” (cues): os comportamentos verbais e não-verbais que determinam se as pessoas nos percebem como competentes, confiáveis e carismáticos. Pesquisas mostram que os primeiros segundos de qualquer interação ativam julgamentos automáticos que são difíceis de reverter. Líderes que entendem esses sinais — postura, expressão facial, tom de voz, contato visual, escolha de palavras — podem calibrar suas interações para criar conexão genuína muito mais rápido.",
        "A palestra encerra com estratégias práticas baseadas em ciência: como abrir conversas de forma que sinalize calorosa competência, como fazer perguntas que constroem rapport rapidamente, como usar a presença física para comunicar confiança e engajamento, e como criar rituais de conexão em equipes remotas ou híbridas. Para Vanessa, conexão é uma habilidade — e habilidades se aprendem, praticam e aperfeiçoam.",
    ],
    softSkills: [
        "Comunicação não-verbal consciente",
        "Carisma e presença de liderança",
        "Construção rápida de rapport",
        "Inteligência social",
        "Escuta ativa e engajamento",
        "Confiança e credibilidade interpessoal",
        "Liderança de equipes com conexão intencional",
    ],
    palavrasChave: [
        "comunicação",
        "conexão",
        "ciência comportamental",
        "carisma",
        "sinais",
        "confiança",
        "influência",
        "rapport",
        "liderança",
        "equipes",
    ],
    takeaways: [
        "Conexão não é sorte — ela tem ciência, e os sinais que emitimos determinam como somos percebidos em segundos.",
        "Os primeiros instantes de qualquer interação ativam julgamentos automáticos que são difíceis de reverter depois.",
        "Postura, expressão facial, tom de voz e escolha de palavras comunicam competência e confiança antes de qualquer argumento.",
        "Perguntas bem formuladas constroem rapport muito mais rápido do que declarações ou apresentações.",
        "Líderes que dominam os sinais da comunicação carismática influenciam com mais eficácia e criam times mais coesos.",
        "Conexão intencional é uma responsabilidade de liderança — não um extra para quando sobra tempo.",
        "Carisma é habilidade, não dom: pode ser aprendido, praticado e aperfeiçoado por qualquer pessoa.",
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.1 Comunicação carismática e sinais não-verbais",
                    percent: 95,
                    descricao:
                        "A palestra é dedicada inteiramente à ciência da comunicação carismática — os sinais verbais e não-verbais que determinam como líderes são percebidos e a rapidez com que constroem confiança.",
                },
                {
                    label: "3.3 Influência e construção de rapport",
                    percent: 88,
                    descricao:
                        "Vanessa apresenta estratégias científicas para construir rapport rapidamente — uma competência central para líderes que precisam influenciar em contextos de alta diversidade e ritmo acelerado.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Criação de conexão genuína em equipes",
                    percent: 85,
                    descricao:
                        "A história de Luis Urzúa e os 33 mineradores demonstra que conexão intencional é o que sustenta equipes mesmo nas circunstâncias mais extremas.",
                },
                {
                    label: "2.3 Confiança como resultado de sinais consistentes",
                    percent: 78,
                    descricao:
                        "Vanessa mostra que confiança não é construída por declarações — é o resultado acumulado de sinais consistentes ao longo de múltiplas interações.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Científica com aplicação prática imediata" },
        { label: "Estilo", value: "Didático + engajante com base em pesquisa comportamental" },
        { label: "Aplicabilidade", value: "Alta para qualquer líder que precisa influenciar, inspirar ou construir confiança com equipes e parceiros" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},


    // ===== gls23-24 =====
// Albert Tate — "Lidere onde estiver" (GLS 2023–2024)
gls23_1: {
    speaker: "Albert Tate",
    speakerPhoto: "/speakers/albert-tate.png",
    title: "Lidere Onde Estiver",
    edition: "GLS 2023–2024",
    duration: "17:31",
    bio: "Albert Tate é o pastor fundador e líder da Fellowship Church no condado de Los Angeles, Califórnia. Comunicador dinâmico que engaja públicos globais através de seu podcast e do programa matinal diário “Good News Today”, Tate serve no Conselho de Curadores da Azusa Pacific University, na Global Leadership Network e na organização de plantação de igrejas Stadia. É fundador e CEO da The Greatest Story, Inc., presidente do Harambee Ministries e autor de “How We Love Matters: A Call to Practice Relentless Racial Reconciliation” e “Disobedient God: Trusting a God Who Goes Off Script”.",
    temaCentral:
        "Liderar não exige perfeição nem condições ideais — exige presença e fidelidade no momento atual, confiando na porção diária que Deus fornece para cada desafio.",
    sinopse: [
        "Albert Tate abre a palestra com uma honestidade desarmante: atravessou um período extraordinariamente difícil — desafios pessoais, organizacionais e de equilíbrio familiar — que o fez questionar sua capacidade de liderar. A conversa com Craig Groeschel, que revelou ter passado por fases igualmente terríveis, foi o ponto de virada: fases difíceis não desqualificam líderes, fazem parte da jornada.",
        "A partir da metáfora bíblica do maná — o pão diário dado aos filhos de Israel no deserto —, Tate constrói o argumento central: Deus não fornece liderança em atacado (ao estilo Costco), mas na medida certa do dia. Tentar acumular ou antecipar a provisão gera ansiedade; confiar no suficiente de hoje libera presença e gratidão para liderar agora.",
        "Com histórias de Daniel na cova dos leões, Moisés diante do Mar Vermelho e do personagem Dory em “Procurando Nemo”, Tate convoca líderes a simplesmente continuarem — continuarem liderando no desânimo, na paranoia, na depressão. O segredo revelado por um pastor veterano resume tudo: ‘Tudo o que fiz foi simplesmente não desistir.’ Presença consistente, não perfeição, é o que o mundo precisa dos líderes.",
    ],
    softSkills: [
        "Presença e atenção plena",
        "Resiliência emocional",
        "Humildade e autenticidade",
        "Perseverança diária",
        "Gestão da ansiedade antecipatória",
        "Gratidão como prática de liderança",
        "Confiança em meio à incerteza",
    ],
    palavrasChave: [
        "liderança presente",
        "presença",
        "maná diário",
        "perseverança",
        "resiliência",
        "autenticidade",
        "fases difíceis",
        "confiança",
        "não desistir",
        "liderança imperfeita",
    ],
    takeaways: [
        "Fases difíceis não desqualificam líderes — fazem parte inevitável da jornada de qualquer um.",
        "Deus fornece a porção necessária para o dia de hoje; tentar antecipar o amanhã gera ansiedade desnecessária.",
        "Continuar presente e ativo — mesmo no desânimo — é em si um ato poderoso de liderança.",
        "O segredo de líderes duradouros muitas vezes é simples: eles simplesmente não desistiram.",
        "Comparar sua realidade interna com a aparência externa dos outros drena a energia e distorce a perspectiva.",
        "Confiar no suficiente de hoje é o que constrói a confiança para o amanhã.",
        "Lidere onde você está — não onde espera chegar.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e gestão das emoções",
                    percent: 90,
                    descricao:
                        "Tate expõe sua própria vulnerabilidade — ansiedade, comparação, desânimo — e convoca líderes a reconhecerem suas fases difíceis em vez de os mascararem.",
                },
                {
                    label: "1.2 Disciplina, hábitos e consistência",
                    percent: 80,
                    descricao:
                        "O ‘maná diário’ é uma metáfora de consistência: aparecer e liderar dia após dia, independentemente das circunstâncias.",
                },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.2 Esperança e visão de longo prazo",
                    percent: 75,
                    descricao:
                        "A narrativa de Daniel, Moisés e Jesus ancora a persistência em algo maior do que as circunstâncias imediatas — um propósito que sustenta o líder.",
                },
                {
                    label: "7.3 Legado e impacto social",
                    percent: 70,
                    descricao:
                        "A frase do pastor veterano — ‘simplesmente não desistir’ — aponta que o impacto duradouro se constrói com presença acumulada, não com grandes gestos.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Motivacional com ancoragem bíblica e storytelling pessoal" },
        { label: "Estilo", value: "Humor + vulnerabilidade + narrativa inspiracional" },
        { label: "Aplicabilidade", value: "Alta para líderes em fases de esgotamento, transição ou dúvida vocacional" },
        { label: "Intensidade conceitual", value: "Baixa-média (foco emocional e prático)" },
    ],
},

// Albert Tate — "Liderando em tempos difíceis" (GLS 2023–2024)
gls23_2: {
    speaker: "Albert Tate",
    speakerPhoto: "/speakers/albert-tate.png",
    title: "Liderando em Tempos Difíceis",
    edition: "GLS 2023–2024",
    duration: "29:01",
    bio: "Albert Tate é o pastor fundador e líder da Fellowship Church no condado de Los Angeles, Califórnia. Comunicador dinâmico que engaja públicos globais através de seu podcast e do programa matinal diário “Good News Today”, Tate serve no Conselho de Curadores da Azusa Pacific University, na Global Leadership Network e na organização de plantação de igrejas Stadia. É fundador e CEO da The Greatest Story, Inc., presidente do Harambee Ministries e autor de “How We Love Matters: A Call to Practice Relentless Racial Reconciliation” e “Disobedient God: Trusting a God Who Goes Off Script”.",
    temaCentral:
        "Liderar em tempos difíceis exige que o líder permaneça de coração aberto — não apenas presente em corpo e função, mas integralmente presente, mesmo quando a dor e a decepção tentam fechar esse coração.",
    sinopse: [
        "Tate parte de uma identificação inesperada com a mulher samaritana do poço em João 4: após mais de 20 anos de ministério, nunca sentiu tanto quanto agora o desejo de fazer tudo sozinho, afastado das pessoas. As decepções acumuladas — pessoas que partiram, dificuldades de relacionamento, o peso emocional de liderar — criaram um mecanismo de proteção que o leva a ‘comparecer sem trazer o coração’.",
        "Com honestidade cortante, Tate nomeia o perigo silencioso do ministério e da liderança prolongada: aprender a ‘fazer’ — a dar o sermão, a conduzir a reunião, a liderar a equipe — de forma tão tecnicamente competente que a presença interna vai se esvaziando sem que ninguém perceba. É a liderança no piloto automático, que cumpre a função mas perde a chama.",
        "A virada narrativa chega quando Jesus encontra a mulher no poço: ele não a julgou, não a descartou, foi diretamente até ela. Para Tate, essa é a imagem do líder que Deus chama a ser em tempos difíceis — alguém que, mesmo ferido, permanece disponível ao encontro real com as pessoas. Liderar com o coração aberto não é ingenuidade; é a escolha mais corajosa que um líder pode fazer.",
    ],
    softSkills: [
        "Vulnerabilidade corajosa",
        "Presença integral (mente, coração e alma)",
        "Autoconhecimento emocional",
        "Resiliência relacional",
        "Prevenção do isolamento como mecanismo de defesa",
        "Liderança com empatia mesmo na dor",
        "Autenticidade sustentada ao longo do tempo",
    ],
    palavrasChave: [
        "liderança em crise",
        "coração aberto",
        "isolamento",
        "presença integral",
        "decepção",
        "esgotamento ministerial",
        "vulnerabilidade",
        "piloto automático",
        "liderança autêntica",
        "relacionamentos",
    ],
    takeaways: [
        "Liderar em tempos difíceis é mais do que comparecer — é comparecer de coração aberto.",
        "O perigo silencioso da liderança longa é aprender a ‘fazer’ sem sentir, executar sem se importar.",
        "O isolamento como proteção é compreensível, mas cobra um preço alto: a profundidade dos relacionamentos que sustentam a liderança.",
        "Decepção com pessoas e até com Deus é uma experiência real de líderes honestos — nomear isso é o primeiro passo para superá-la.",
        "Jesus não descartou a mulher no poço no momento mais vulnerável dela; líderes são chamados a esse mesmo padrão.",
        "Fechar o coração para não se machucar também fecha a possibilidade de impactar genuinamente.",
        "A liderança mais poderosa acontece quando o líder escolhe continuar presente de dentro para fora, não apenas de fora para dentro.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e gestão das emoções",
                    percent: 92,
                    descricao:
                        "Tate mergulha nas próprias emoções — exaustão, decepção, isolamento — com uma precisão psicológica rara, nomeando dinâmicas internas que a maioria dos líderes evita reconhecer.",
                },
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 82,
                    descricao:
                        "Manter o coração aberto depois de ter sido ferido é descrito como o ato de coragem mais exigente — e mais necessário — da liderança.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.1 Saúde emocional e autocuidado do líder",
                    percent: 88,
                    descricao:
                        "A palestra é um diagnóstico preciso dos sinais de esgotamento emocional em líderes e um convite à recuperação pela via do relacionamento, não do desempenho.",
                },
                {
                    label: "6.3 Prevenção do burnout e sustentabilidade",
                    percent: 78,
                    descricao:
                        "Reconhecer o mecanismo de proteção do isolamento e substituí-lo por presença genuína é apresentado como a chave para a sustentabilidade da liderança de longo prazo.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Reflexiva e autobiográfica com base narrativa bíblica" },
        { label: "Estilo", value: "Testemunho pessoal + diagnóstico emocional + chamado à ação interior" },
        { label: "Aplicabilidade", value: "Muito alta para líderes em esgotamento, isolamento ou crise de motivação" },
        { label: "Intensidade conceitual", value: "Média (alta carga emocional e espiritual)" },
    ],
},

// Chris Mathebula — "Um sacrifício que vale a pena" (GLS 2023–2024)
gls23_3: {
    speaker: "Chris Mathebula",
    speakerPhoto: "/speakers/chris-mathebula.png",
    title: "Um Sacrifício Que Vale a Pena",
    edition: "GLS 2023–2024",
    duration: "29:10",
    bio: "Chris Mathebula é o Pastor Principal e Visionário dos Ministérios de Restauração da Esperança, uma igreja contemporânea com sete campi e congregação de 20.000 membros em Gauteng, África do Sul. Fundador da organização humanitária People Matter to God Foundation e do Movimento Cidadão Devotado, é cidadão devotado, autor de nove livros — sendo o mais recente “Devoted Citizen” —, colunista e consultor de liderança. Seu programa de TV “Hope Alive” é transmitido regularmente em redes internacionais de televisão e rádio.",
    temaCentral:
        "Nada de extraordinário jamais é alcançado sem sacrifício — e os maiores legados da história foram construídos por pessoas dispostas a abrir mão de algo presente por um bem futuro maior.",
    sinopse: [
        "Mathebula abre com sua própria história: concebido como oitavo filho de uma família pobre que tentou interromper a gestação, ele sobreviveu e foi dedicado pelos pais como ‘portador de Cristo’ e ‘dom de Deus’. Essa narrativa pessoal de sobrevivência estabelece o tom: cada vida, cada líder, é já o resultado de algum sacrifício anterior.",
        "O fio condutor é a história dos doze cientistas soviéticos sitiados em Leningrado durante a Segunda Guerra Mundial, que morreram de fome rodeados de toneladas de sementes geneticamente modificadas que preservaram para as gerações futuras. Mathebula usa esse exemplo histórico real para articular sua tese central: sacrifício genuíno é escolher o bem de quem virá depois em detrimento do conforto de quem está agora.",
        "Com referências a Thomas Edison, os irmãos Wright, Nelson Mandela, Madre Teresa e Martin Luther King, Mathebula demonstra que toda conquista extraordinária tem um sacrifício invisível na sua raiz. O desafio final é pessoal: que sacrifício você está disposto a fazer para que a próxima geração possa florescer?",
    ],
    softSkills: [
        "Visão de longo prazo",
        "Abnegação e serviço",
        "Coragem diante do custo",
        "Responsabilidade geracional",
        "Propósito como motivação superior",
        "Gratidão e consciência do legado recebido",
        "Persistência apesar das perdas",
    ],
    palavrasChave: [
        "sacrifício",
        "legado",
        "propósito",
        "gerações futuras",
        "abnegação",
        "coragem",
        "impacto",
        "história",
        "liderança servidora",
    ],
    takeaways: [
        "Nada de verdadeiramente extraordinário jamais foi alcançado sem que alguém abrisse mão de algo.",
        "Os maiores líderes da história não pensaram apenas no presente — investiram no futuro de quem viria depois.",
        "Cada pessoa é resultado de sacrifícios invisíveis feitos por outros; reconhecer isso muda a perspectiva sobre a própria responsabilidade.",
        "O sacrifício genuíno não é ausência de custo — é escolher suportá-lo por algo maior.",
        "Conforto e grandeza raramente coexistem; a grandeza exige disposição para o desconforto.",
        "Líderes que não fazem sacrifícios conscientes deixam para outros a conta do que evitaram pagar.",
        "A pergunta fundamental não é ‘o que ganho?’, mas ‘pelo que estou disposto a abrir mão para que outros vivam melhor?’",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.3 Legado e impacto social",
                    percent: 93,
                    descricao:
                        "O exemplo dos cientistas de Leningrado é a personificação do legado: morrer para que gerações futuras vivam é o sacrifício mais radical e mais significativo descrito na palestra.",
                },
                {
                    label: "7.1 Clareza de propósito",
                    percent: 82,
                    descricao:
                        "Mathebula sustenta que só quem tem propósito claro consegue sustentar o custo do sacrifício — o propósito é o combustível que torna o sacrifício suportável.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 78,
                    descricao:
                        "Os irmãos Wright são citados como exemplo de coragem extrema: testar um avião sabendo que a falha pode ser fatal é o arquétipo do sacrifício corajoso.",
                },
                {
                    label: "1.2 Disciplina, hábitos e consistência",
                    percent: 70,
                    descricao:
                        "Edison fracassando 999 vezes e persistindo exemplifica que o sacrifício é frequentemente uma prática repetida, não um gesto único.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com exemplos históricos e testemunho pessoal" },
        { label: "Estilo", value: "Narrativa histórica + storytelling pessoal + chamado à reflexão" },
        { label: "Aplicabilidade", value: "Alta para líderes que precisam de clareza de propósito e disposição para o custo da liderança" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional e ética geracional)" },
    ],
},

// Craig Groeschel — "O futuro da liderança é a confiança" (GLS 2023–2024)
gls23_4: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "O Futuro da Liderança É a Confiança",
    edition: "GLS 2023–2024",
    duration: "41:30",
    bio: "Craig Groeschel é o fundador e Pastor Sênior da Life.Church, classificada pelo Glassdoor como o Melhor Lugar para Trabalhar por dois anos consecutivos. Reconhecido mundialmente como um líder de líderes, é criador do YouVersion Bible App — instalado em mais de meio bilhão de dispositivos únicos —, apresentador do Craig Groeschel Leadership Podcast, um dos mais ouvidos do mundo, e autor best-seller do New York Times. Seu livro mais recente é “Think Ahead: 7 Decisions You Can Make Today for the God-Honoring Life You Want Tomorrow”.",
    temaCentral:
        "Em um mundo onde a desconfiança é a emoção padrão, o maior desafio — e diferencial — do líder contemporâneo é construir confiança intencional por meio de uma equação de três variáveis: transparência, empatia e consistência.",
    sinopse: [
        "Groeschel abre com uma pergunta incômoda ao público: ‘Confiam em mim? Por quê?’ O ponto é preciso: vivemos em uma era de ceticismo estrutural, pós-fake news, pós-pandemia, pós-escândalos — em que mais da metade da população, segundo o Barômetro de Confiança Edelman, não confia em ninguém sem provas. Essa realidade não é abstrata: é o ambiente em que todo líder opera hoje.",
        "A solução que Groeschel apresenta não é um happy hour nem uma dinâmica de equipe. É uma equação de liderança: Transparência + Empatia + Consistência = Confiança. Cada variável é destrinchada com exemplos pessoais — o ‘mistério do pastor’ que o ensinou a esconder fraquezas, e como a autotransparência sobre sua própria ansiedade e imperfeição paradoxalmente aumentou, e não diminuiu, a confiança das pessoas.",
        "O princípio mais poderoso da palestra é que a comunicação nunca é neutra: quando a comunicação diminui, a incerteza aumenta — e as pessoas preenchem os espaços com as piores suposições possíveis. Líderes que constroem confiança real são aqueles que praticam transparência mesmo quando é desconfortável, empatia mesmo quando é inconveniente, e consistência mesmo quando é custoso.",
    ],
    softSkills: [
        "Transparência e comunicação honesta",
        "Empatia organizacional",
        "Consistência de caráter",
        "Gestão da vulnerabilidade pública",
        "Construção de cultura de confiança",
        "Comunicação proativa em tempos de incerteza",
        "Integridade sob pressão",
    ],
    palavrasChave: [
        "confiança",
        "transparência",
        "empatia",
        "consistência",
        "ceticismo",
        "cultura organizacional",
        "comunicação",
        "liderança",
        "credibilidade",
        "autenticidade",
    ],
    takeaways: [
        "A desconfiança é a emoção padrão do mundo atual — líderes precisam construir confiança ativamente, não esperar por ela.",
        "Transparência + Empatia + Consistência = Confiança: a ausência de qualquer uma dessas três variáveis enfraquece todo o sistema.",
        "Quando a comunicação diminui, a incerteza aumenta — e as pessoas sempre preenchem os vazios com as piores suposições.",
        "A vulnerabilidade autêntica do líder, longe de enfraquecer sua autoridade, tende a aumentar a confiança de sua equipe.",
        "Líderes tendem a ser menos transparentes justamente quando mais precisariam sê-lo — nos momentos difíceis.",
        "Empatia não é concordar com tudo, mas genuinamente se importar com o que o outro sente antes de falar.",
        "Consistência ao longo do tempo é o ativo mais difícil de construir e o mais poderoso para sustentar a confiança.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção de confiança e segurança psicológica",
                    percent: 95,
                    descricao:
                        "A equação Transparência + Empatia + Consistência = Confiança é o núcleo da palestra, apresentada como o framework essencial para criar ambientes onde as pessoas se comprometem de coração.",
                },
                {
                    label: "2.3 Comunicação e engajamento de equipes",
                    percent: 85,
                    descricao:
                        "O princípio ‘quando a comunicação diminui, a incerteza aumenta’ é respaldado por observações práticas de Groeschel sobre como líderes perdem a confiança das equipes ao ficarem em silêncio nos momentos difíceis.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e gestão das emoções",
                    percent: 78,
                    descricao:
                        "Groeschel usa sua própria ansiedade pré-palestra e o hábito histórico de esconder fraquezas como exemplo de como a falta de autoconhecimento corrói a autenticidade e, consequentemente, a confiança.",
                },
                {
                    label: "1.2 Coerência e integridade sob pressão",
                    percent: 82,
                    descricao:
                        "A consistência é apresentada como virtude que se manifesta especialmente sob pressão — o momento em que a maioria dos líderes tende a abandoná-la.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual-prática com framework aplicável e storytelling pessoal" },
        { label: "Estilo", value: "Humor + autocrítica + ensino estruturado em equação" },
        { label: "Aplicabilidade", value: "Muito alta para líderes de equipes, pastores, gestores e CEOs em qualquer contexto" },
        { label: "Intensidade conceitual", value: "Média-alta (framework claro, aprofundado com exemplos)" },
    ],
},

// Dallas Jenkins — "Liderando The Chosen" (GLS 2023–2024)
gls23_5: {
    speaker: "Dallas Jenkins",
    speakerPhoto: "/speakers/dallas-jenkins.png",
    title: "Liderando The Chosen",
    edition: "GLS 2023–2024",
    duration: "25:08",
    bio: "Dallas Jenkins é o criador, diretor e co-roteirista de “The Chosen”, a primeira série de várias temporadas sobre a vida de Jesus Cristo e o maior projeto de entretenimento com financiamento coletivo de todos os tempos. Produtor desde os 25 anos, colaborou com Universal, Lionsgate, Pureflix, Hallmark Channel e Amazon. “The Chosen” acumulou mais de 520 milhões de visualizações por episódio em mais de 175 países, está disponível em Amazon Prime, Netflix e Peacock, e foi traduzida para mais de 50 idiomas.",
    temaCentral:
        "Liderar um projeto de impacto global começa com uma motivação cristalina — e essa motivação, quando genuína, permeia cada decisão criativa, cada detalhe de produção e cada relacionamento dentro da equipe.",
    sinopse: [
        "Em uma entrevista conduzida por Erwin McManus no próprio set de “The Chosen” em Dallas, Texas, Jenkins revela a arquitetura motivacional por trás do projeto: fazer com que mais de um bilhão de pessoas vivenciem o Jesus autêntico. Essa motivação não é apenas um slogan — é o critério de decisão que guia cada escolha, desde a localização do set até o tipo de madeira usada nas portas das construções.",
        "Jenkins introduz o princípio de ‘pintar até a parte interna da gaveta’ — caprichar nos detalhes que o público talvez nunca note, porque a autenticidade se constrói na soma das invisibilidades. A decisão de usar madeira com mais de mil anos nas portas da recriação de Cafarnaum é emblemática: o espectador não vê, mas sente. Essa obsessão com o detalhe é, para Jenkins, inseparável da integridade do propósito.",
        "O diálogo entre Jenkins e McManus revela também a dimensão humana da liderança criativa: a pressão de um projeto financiado por fãs, as escolhas que precisam ser defendidas internamente, e o princípio de que liderar algo tão grande exige clareza diária sobre o porquê. A motivação autentica o esforço; o esforço autentica a mensagem.",
    ],
    softSkills: [
        "Clareza de propósito como bússola decisória",
        "Atenção ao detalhe e excelência artesanal",
        "Liderança criativa sob escala",
        "Autenticidade como princípio produtivo",
        "Resiliência em projetos de longo prazo",
        "Capacidade de inspirar equipes por missão",
        "Integridade entre visão e execução",
    ],
    palavrasChave: [
        "propósito",
        "motivação",
        "liderança criativa",
        "autenticidade",
        "The Chosen",
        "excelência",
        "detalhe",
        "visão",
        "inovação",
        "impacto cultural",
    ],
    takeaways: [
        "A motivação clara e genuína é o critério mais poderoso para decisões em projetos complexos.",
        "Caprichar nos detalhes invisíveis é uma forma de respeito pelo propósito — e pelo público.",
        "Liderar pelo propósito atrai pessoas que se comprometem com a missão, não apenas com o salário.",
        "A autenticidade de um projeto se constrói na coerência entre o porquê declarado e as mil escolhas pequenas do dia a dia.",
        "Projetos de impacto real raramente surgem de condições perfeitas — surgem de motivações inegociáveis.",
        "O maior risco criativo não é errar um detalhe, mas perder de vista a razão original do projeto.",
        "Liderar algo sem precedente exige disposição para defender escolhas que outros não compreendem ainda.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.1 Clareza de propósito",
                    percent: 92,
                    descricao:
                        "Jenkins articula com precisão que a motivação de fazer com que um bilhão de pessoas vivenciem o Jesus autêntico não é abstrata — ela guia ativamente cada decisão de produção e liderança.",
                },
                {
                    label: "7.3 Legado e impacto cultural",
                    percent: 85,
                    descricao:
                        "Com 520 milhões de visualizações e tradução para 50 idiomas, “The Chosen” é apresentado como um projeto de impacto geracional, não apenas comercial.",
                },
            ],
        },
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.2 Inovação e modelos não convencionais",
                    percent: 82,
                    descricao:
                        "Financiamento coletivo, distribuição gratuita via app e construção de set físico próprio são escolhas não convencionais que definiram o modelo inovador de “The Chosen”.",
                },
                {
                    label: "5.1 Liderança de projetos de alta incerteza",
                    percent: 75,
                    descricao:
                        "Liderar o maior projeto de entretenimento com crowdfunding da história envolveu navegação constante em território sem precedentes.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Entrevista narrativa no set — formato diálogo entre criadores" },
        { label: "Estilo", value: "Conversa íntima + bastidores + reflexão sobre motivação e propósito criativo" },
        { label: "Aplicabilidade", value: "Alta para líderes criativos, empreendedores e gestores de projetos de impacto" },
        { label: "Intensidade conceitual", value: "Baixa-média (profundidade experiencial, não teórica)" },
    ],
},

// Erin Meyer — "Promovendo uma cultura de reinvenção" (GLS 2023–2024)
gls23_6: {
    speaker: "Erin Meyer",
    speakerPhoto: "/speakers/erin-meyer.png",
    title: "Promovendo Uma Cultura de Reinvenção",
    edition: "GLS 2023–2024",
    duration: "33:29",
    bio: "Erin Meyer é professora na INSEAD e coautora, com Reed Hastings, do best-seller do New York Times “No Rules Rules: Netflix and the Culture of Reinvention” (eleito melhor livro de negócios de 2020 pelo Financial Times). Também autora de “The Culture Map”, foi selecionada pelo Thinkers50 por três vezes como uma das cinquenta pensadoras mais influentes do mundo dos negócios. Seu trabalho sobre gestão intercultural e cultura organizacional foi publicado na Harvard Business Review, New York Times e Forbes.",
    temaCentral:
        "No mundo atual, o maior risco organizacional não é cometer erros — é ser irrelevante por falta de inovação. Construir uma cultura que promova reinvenção exige substituir afirmações absolutas por dilemas concretos e criar sistemas de feedback radical que liberem a inteligência coletiva.",
    sinopse: [
        "Meyer abre com um diagnóstico provocador: a maioria das organizações modernas ainda opera com a mentalidade da era industrial — obcecada com eliminação de erros, consistência e replicabilidade. Esse modelo fazia sentido quando o maior risco era a falha de processo. Hoje, em um número crescente de setores, o risco maior é a irrelevância por falta de agilidade e inovação.",
        "A pesquisa aprofundada que Meyer conduziu na Netflix — entrevistando centenas de funcionários e convivendo com Reed Hastings — revelou que a cultura da empresa não se sustenta em frases inspiradoras expostas no saguão, mas em dilemas reais compartilhados com os times. Em vez de declarar ‘valorizamos a integridade’ (como a Enron também o fazia), a Netflix articula as tensões concretas que seus funcionários enfrentam e como a cultura as resolve.",
        "O principal instrumento da cultura de reinvenção é o feedback radical — uma prática que a Netflix levou ao extremo e que Meyer desmistifica: não se trata de crueldade, mas de respeito intelectual pelo colega. A ideia de que ‘a falta de feedback honesto é a forma mais cara de gentileza’ sintetiza a filosofia: organizações que não criam espaço seguro para a verdade incômoda pagam o preço com decisões ruins e talentos desperdiçados.",
    ],
    softSkills: [
        "Feedback radical e cultura de honestidade",
        "Agilidade e adaptabilidade organizacional",
        "Comunicação de dilemas em vez de absolutos",
        "Liderança que tolera e aprende com erros inteligentes",
        "Coragem para receber e dar feedback difícil",
        "Pensamento sistêmico sobre cultura",
        "Disposição para questionar processos estabelecidos",
    ],
    palavrasChave: [
        "cultura organizacional",
        "reinvenção",
        "Netflix",
        "feedback radical",
        "inovação",
        "era industrial",
        "irrelevância",
        "dilemas",
        "agilidade",
        "cultura de equipe",
    ],
    takeaways: [
        "Em muitos setores, o maior risco não é mais errar — é não ser inovador o suficiente para continuar relevante.",
        "Valores expostos no saguão mudam pouco; dilemas concretos compartilhados com os times mudam comportamentos.",
        "Organizações que não criam espaço para feedback honesto pagam o preço com decisões ruins e talentos desperdiçados.",
        "A cultura da Netflix não se baseia em confiança cega, mas em transparência radical — todos sabem o que importa e por quê.",
        "Líderes que protegem suas equipes de notícias ruins, na verdade, as privam de informação necessária para decidir bem.",
        "A reinvenção não é um evento — é uma capacidade cultural que precisa ser intencionalmente construída e mantida.",
        "Substituir afirmações absolutas por dilemas reais é o primeiro passo para articular uma cultura que orienta comportamentos de verdade.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.1 Cultura de inovação e aprendizado contínuo",
                    percent: 93,
                    descricao:
                        "Meyer sustenta que a capacidade de se reinventar não é um traço individual mas uma propriedade cultural — e descreve como a Netflix construiu essa propriedade sistematicamente.",
                },
                {
                    label: "5.3 Gestão da mudança e superação da rigidez",
                    percent: 85,
                    descricao:
                        "A crítica à mentalidade da era industrial é direta: organizações que não atualizam seus modelos operacionais se tornam irrelevantes, independentemente de seus valores declarados.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.2 Cultura de feedback e desenvolvimento",
                    percent: 88,
                    descricao:
                        "O feedback radical é o instrumento central da palestra — Meyer o descreve como a prática que mais distingue organizações que genuinamente aprendem das que apenas simulam aprender.",
                },
                {
                    label: "2.1 Transparência e comunicação organizacional",
                    percent: 78,
                    descricao:
                        "A transparência radical da Netflix — em que todas as informações relevantes são compartilhadas amplamente — é apresentada como pré-requisito para uma cultura de reinvenção funcional.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Acadêmico-prática baseada em pesquisa etnográfica na Netflix" },
        { label: "Estilo", value: "Ensino estruturado + casos reais + provocação conceitual" },
        { label: "Aplicabilidade", value: "Muito alta para líderes organizacionais, gestores de cultura, RH e times de inovação" },
        { label: "Intensidade conceitual", value: "Alta (framework robusto com implicações práticas imediatas)" },
    ],
},

// Erwin McManus — "Mudança de mentalidade" (GLS 2023–2024)
gls23_7: {
    speaker: "Erwin McManus",
    speakerPhoto: "/speakers/erwin-mcmanus.png",
    title: "Mudança de Mentalidade",
    edition: "GLS 2023–2024",
    duration: "19:15",
    bio: "Erwin Raphael McManus é autor premiado, artista e fundador do Mosaic, movimento de fé em Los Angeles que inspirou milhões ao redor do mundo. Seus livros venderam mais de um milhão de cópias em mais de uma dúzia de idiomas. Consultor de organizações que vão da NFL ao Pentágono, passou os últimos 30 anos aconselhando CEOs, atletas profissionais, empresas bilionárias e líderes mundiais. Orienta líderes e empreendedores globalmente através da The Arena e pelo trabalho inovador em “The Art of Communication”. Seu mais recente livro é “The Seven Frequencies of Communication”.",
    temaCentral:
        "Há uma genialidade latente em cada pessoa que pode nunca ser alcançada — e a barreira não é externa, mas interna: as estruturas mentais que impomos a nós mesmos e que definem um teto artificial para o que acreditamos ser possível.",
    sinopse: [
        "McManus ancora a palestra em um momento de 1990: ouvindo no rádio a análise da derrota de Buster Douglas para Evander Holyfield, oito meses depois de ter feito o impossível ao nocautear Mike Tyson. O comentarista lançou a sentença que deflagrou décadas de pesquisa: ‘Algumas pessoas são simplesmente estruturadas para o fracasso.’ Em vez de recusar a ideia, McManus a internalizou como uma pergunta de espelho: estou estruturado para o fracasso?",
        "A resposta que McManus desenvolveu ao longo de décadas de trabalho é que a estrutura do fracasso não é destino — é arquitetura mental que pode ser redesenhada. As limitações mais devastadoras não vêm de fora, mas de histórias que ouvimos na infância, de vozes que interiorizamos, de comparações que distorceram nossa percepção do que somos capazes de fazer. McManus descreve seu próprio processo de perceber, aos 10 anos, ouvindo seus pais comentar sobre ele, que já havia absorvido uma narrativa diminutiva sobre si mesmo.",
        "O ‘mind shift’ — a mudança de mentalidade — não é otimismo superficial. É o trabalho profundo de identificar as estruturas limitantes, questionar sua origem e substituí-las por novas arquiteturas internas que estejam à altura do potencial real. McManus propõe que a transformação começa com uma pergunta simples e radical: e se eu pudesse?",
    ],
    softSkills: [
        "Autoconhecimento e identificação de crenças limitantes",
        "Mentalidade de crescimento",
        "Coragem para questionar narrativas internalizadas",
        "Resiliência psicológica",
        "Criatividade como capacidade desbloqueável",
        "Autoconsciência das estruturas internas",
        "Disposição para redefinir o próprio potencial",
    ],
    palavrasChave: [
        "mentalidade",
        "crenças limitantes",
        "potencial",
        "genialidade",
        "mind shift",
        "crescimento",
        "bloqueios internos",
        "transformação",
        "autolimitação",
        "capacidade latente",
    ],
    takeaways: [
        "Cada pessoa carrega uma genialidade latente que pode nunca ser alcançada se as estruturas mentais limitantes não forem identificadas e redesenhadas.",
        "As barreiras mais devastadoras para o desempenho raramente são externas — são arquiteturas internas construídas por vozes e experiências do passado.",
        "Buster Douglas nocauteou Tyson mas perdeu para si mesmo oito meses depois: o maior adversário de um líder é frequentemente a própria mente.",
        "A pergunta ‘estou estruturado para o fracasso?’ é incômoda mas libertadora: nomear o padrão é o primeiro passo para quebrá-lo.",
        "O ‘mind shift’ não é positividade superficial — é um trabalho intencional de identificar, questionar e substituir crenças sobre o que é possível.",
        "Vozes que ouvimos na infância podem continuar definindo nosso teto de desempenho décadas depois, sem que percebamos.",
        "A genialidade não é privilégio de poucos — é uma capacidade que está esperando ser desbloqueada pela mudança de perspectiva.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.4 Reinvenção pessoal e redesenho de identidade",
                    percent: 90,
                    descricao:
                        "McManus apresenta o ‘mind shift’ como um processo de reinvenção da arquitetura interna — não uma mudança superficial de atitude, mas uma reestruturação profunda das crenças sobre o próprio potencial.",
                },
                {
                    label: "5.1 Superação de estruturas limitantes",
                    percent: 82,
                    descricao:
                        "A história de Buster Douglas é usada para ilustrar como estruturas limitantes internas destroem o potencial externo — mesmo quando o ambiente já foi conquistado.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e crenças sobre si mesmo",
                    percent: 88,
                    descricao:
                        "O coração da palestra é o autoconhecimento: identificar as narrativas limitantes que habitam a mente e questionar sua validade é apresentado como o ato mais transformador de liderança pessoal.",
                },
                {
                    label: "1.4 Desenvolvimento de potencial e crescimento",
                    percent: 80,
                    descricao:
                        "McManus convoca líderes a questionarem seus tetos artificiais e a investirem no desbloqueio do potencial latente — não como inspiração, mas como prática concreta.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Desenvolvimento pessoal com base em psicologia aplicada e storytelling" },
        { label: "Estilo", value: "Narrativa provocadora + questionamento socrático + apelo à autotransformação" },
        { label: "Aplicabilidade", value: "Alta para qualquer líder que sente que opera abaixo do seu potencial real" },
        { label: "Intensidade conceitual", value: "Média-alta (conceito simples com profundidade psicológica)" },
    ],
},

// Henry Cloud — "Confiança" (GLS 2023–2024)
gls23_8: {
    speaker: "Henry Cloud",
    speakerPhoto: "/speakers/henry-cloud.png",
    title: "Confiança",
    edition: "GLS 2023–2024",
    duration: "19:19",
    bio: "Dr. Henry Cloud é renomado especialista em liderança, psicólogo clínico e autor best-seller do New York Times. Seus 46 livros, incluindo o icônico “Limites”, venderam mais de 20 milhões de cópias em todo o mundo. Possui extensa experiência em coaching executivo e como consultor de liderança, dedicando a maior parte de seu tempo trabalhando com CEOs, equipes de liderança e executivos para melhorar desempenho, habilidades de liderança e cultura. Seu livro mais recente é “Confiança: Aprenda Quando Conceder, Quando Retirar, Como Ganhar e Como Consertar Quando Quebrada”.",
    temaCentral:
        "Os seres humanos são programados para confiar — não confiar é o comportamento anormal, e não o contrário. Entender os cinco componentes que tornam alguém digno de confiança permite construir relacionamentos e organizações mais saudáveis e produtivos.",
    sinopse: [
        "Cloud abre desconstruindo a crença popular de que ‘não confiar em ninguém’ é sinal de sabedoria ou autopreservação. Com uma analogia irônica sobre passageiros de avião — que confiam em pilotos, mecânicos e controladores de voo que jamais conhecerão —, ele demonstra que a confiança é tão fundamental para a existência humana quanto o ar: o problema não é confiar, mas aprender em quem e como confiar.",
        "O episódio central da palestra é a intervenção de Cloud em uma crise corporativa: CEO e presidente de uma organização global em colapso, centenas de milhares de vidas e bilhões de dólares em risco. Quando o presidente decide sair, Cloud se senta fisicamente diante da porta e pede um momento. O que se segue é uma aula prática de como a confiança se rompe — e como pode ser restaurada — quando o líder tem coragem de fazer as perguntas certas nas horas certas.",
        "A partir dessa experiência e de décadas de trabalho clínico e executivo, Cloud oferece um mapa de cinco componentes da confiança: motivação (o outro se importa com meu bem?), capacidade (consegue entregar o que promete?), integridade (é honesto mesmo quando dói?), capacidade de perdoar e receber perdão, e historicidade (há um padrão de comportamento ao longo do tempo?). Qualquer ausência nesse mapa cria desconfiança justificada.",
    ],
    softSkills: [
        "Construção e restauração de confiança",
        "Escuta ativa e inteligência emocional",
        "Integridade como prática diária",
        "Gestão de conflitos interpessoais",
        "Coragem para conversas difíceis",
        "Avaliação criteriosa de relacionamentos",
        "Capacidade de perdoar e pedir perdão",
    ],
    palavrasChave: [
        "confiança",
        "relacionamentos",
        "integridade",
        "motivação",
        "capacidade",
        "historicidade",
        "liderança",
        "psicologia",
        "perdão",
        "diagnóstico relacional",
    ],
    takeaways: [
        "Os humanos são biologicamente programados para confiar — a desconfiança total é um estado patológico, não uma virtude.",
        "A confiança tem cinco componentes: motivação, capacidade, integridade, capacidade de perdão e historicidade — a ausência de qualquer um cria desconfiança legítima.",
        "Muitas rupturas de confiança não são causadas por má intenção, mas por incompetência ou falta de comunicação — e isso faz diferença na forma de restaurar.",
        "O líder que tem coragem de fazer a pergunta certa no momento certo pode reverter crises que pareciam irreversíveis.",
        "Confiar em alguém não significa confiar em tudo — é possível e saudável confiar em domínios específicos.",
        "A historicidade — o padrão de comportamento ao longo do tempo — é o componente mais confiável para avaliar se alguém é digno de confiança.",
        "Relacionamentos que não sobrevivem à honestidade não merecem a desonestidade que precisariam para sobreviver.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção e restauração de confiança",
                    percent: 95,
                    descricao:
                        "A palestra inteira gira em torno dos componentes da confiança — Cloud oferece um mapa clínico preciso para construir, avaliar e restaurar confiança em qualquer relacionamento.",
                },
                {
                    label: "2.4 Gestão de conflitos e ruptura relacional",
                    percent: 85,
                    descricao:
                        "A intervenção na crise corporativa é um caso real de como a ruptura de confiança pode ser abordada com coragem e método — e o que está em risco quando não é.",
                },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.2 Escuta e presença em momentos críticos",
                    percent: 82,
                    descricao:
                        "O gesto de sentar diante da porta e fazer a pergunta certa ao presidente em crise é um exemplo de como a comunicação eficaz em momentos de ruptura exige coragem e presença, não retórica.",
                },
                {
                    label: "3.3 Influência e persuasão em contextos de conflito",
                    percent: 75,
                    descricao:
                        "Cloud demonstra que a influência genuína — capaz de mudar o curso de uma crise — nasce da autoridade emocional, não do poder hierárquico.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Psicologia aplicada à liderança com casos clínicos e executivos reais" },
        { label: "Estilo", value: "Storytelling + framework diagnóstico + humor clínico" },
        { label: "Aplicabilidade", value: "Muito alta para líderes que lidam com relacionamentos, equipes e crises de confiança" },
        { label: "Intensidade conceitual", value: "Alta (modelo psicológico robusto com aplicação prática imediata)" },
    ],
},

// Jeanne Stevens — "O que está aqui agora?" (GLS 2023–2024)
gls23_9: {
    speaker: "Jeanne Stevens",
    speakerPhoto: "/speakers/jeanne-stevens.png",
    title: "O Que Está Aqui Agora?",
    edition: "GLS 2023–2024",
    duration: "44:10",
    bio: "Jeanne Stevens é a pastora fundadora e co-líder da Soul City Church em Chicago, uma das igrejas urbanas que mais crescem nos Estados Unidos. Antes de fundar a Soul City Church em 2010, fez parte do corpo pastoral da Willow Creek Community Church e da North Point Community Church. Palestrante, líder e escritora muito procurada, é autora do best-seller Amazon “What’s Here Now?’ e do devocional “Less is More”. Moradora de Chicago com seu marido Jarrett e dois filhos, é uma embaixadora da Visão Mundial.",
    temaCentral:
        "Líderes não podem liderar o lugar onde estão se não souberem onde estão — a presença plena não é um luxo espiritual, mas a condição fundamental da liderança eficaz e de uma vida bem vivida.",
    sinopse: [
        "Stevens abre com um dado desconcertante: pesquisas da Harvard Research Group mostram que 47% do tempo as pessoas estão mentalmente em outro lugar — não no momento presente. Diante de uma vida média de 700.800 horas, a questão não é apenas filosófica: em quantas delas você está, de fato, aqui? A resposta honesta é perturbadora para qualquer líder que sente que está ‘funcionando’ mas não ‘vivendo’.",
        "Stevens aprofunda o diagnóstico com dados sobre o uso de celulares — 144 verificações diárias, 89% verificam o aparelho nos primeiros 10 minutos após acordar —, mas vai além da crítica óbvia à tecnologia. O ponto central é que a ausência da presença não é apenas uma questão de distração digital: é uma postura interior que foi cultivada como mecanismo de sobrevivência, especialmente em líderes que aprenderam a operar no modo automático para suportar a pressão.",
        "A virada da palestra é a pergunta do título: ‘O que está aqui agora?’ Não como resignação ao presente, mas como descoberta ativa. Stevens argumenta que há sempre algo de Deus operando no momento presente que só pode ser encontrado por quem está genuinamente presente — e que a liderança mais poderosa emerge da capacidade de perceber, nomear e responder ao que está disponível agora, em vez de esperar as condições ideais que nunca chegam.",
    ],
    softSkills: [
        "Presença plena e atenção intencional",
        "Autoconsciência situacional",
        "Liderança no momento presente",
        "Resistência à distração e ao piloto automático",
        "Escuta ativa do ambiente e das pessoas",
        "Gratidão como prática de presença",
        "Capacidade de nomear o que está disponível agora",
    ],
    palavrasChave: [
        "presença",
        "momento presente",
        "atenção plena",
        "distração",
        "consciência",
        "liderança presente",
        "mindfulness",
        "disponibilidade",
        "aqui e agora",
        "vida plena",
    ],
    takeaways: [
        "Você não pode liderar o lugar onde está se não souber, de fato, onde está.",
        "Metade do tempo, as pessoas estão mentalmente em outro lugar — isso é a norma, não a exceção, e tem um custo enorme para a liderança.",
        "A presença não é passividade — é atenção ativa ao que está disponível no momento, que é frequentemente mais do que imaginamos.",
        "A pergunta ‘O que está aqui agora?’ é uma prática de descoberta, não de resignação.",
        "O piloto automático protege do esgotamento no curto prazo, mas compromete a profundidade e a relevância da liderança no longo prazo.",
        "Estar genuinamente presente é a forma mais radical de respeito pelo outro — e pela própria vida.",
        "Líderes que aprendem a perceber o que está disponível agora raramente ficam paralisados esperando as condições perfeitas.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e presença interior",
                    percent: 90,
                    descricao:
                        "Stevens aponta que liderar começa com saber onde se está — física, emocional e espiritualmente — e que essa consciência de si mesmo é o fundamento de toda liderança presente.",
                },
                {
                    label: "1.2 Disciplina da atenção",
                    percent: 82,
                    descricao:
                        "A presença intencional é apresentada como uma disciplina — algo que precisa ser praticado contra o pull natural da distração e do piloto automático.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Prevenção do esgotamento pelo cultivo da presença",
                    percent: 80,
                    descricao:
                        "Stevens sugere que o antídoto para o esgotamento não é mais eficiência, mas mais presença — a capacidade de encontrar o que está disponível no momento atual em vez de operar no modo de sobrevivência.",
                },
                {
                    label: "6.1 Saúde mental e bem-estar do líder",
                    percent: 75,
                    descricao:
                        "A pesquisa Harvard sobre presença e os dados sobre uso de celular constroem o argumento de que a saúde mental e emocional do líder está diretamente ligada à sua capacidade de estar presente.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Desenvolvimento pessoal com ancoragem em pesquisa e espiritualidade prática" },
        { label: "Estilo", value: "Storytelling + dados + questionamento reflexivo + humor acessível" },
        { label: "Aplicabilidade", value: "Muito alta para líderes sobrecarregados, distraídos ou operando no piloto automático" },
        { label: "Intensidade conceitual", value: "Média (conceito simples com profundidade experiencial e espiritual)" },
    ],
},

// Krish Kandiah — "O paradoxo da esperança" (GLS 2023–2024)
gls23_10: {
    speaker: "Krish Kandiah",
    speakerPhoto: "/speakers/krish-kandiah.png",
    title: "O Paradoxo da Esperança",
    edition: "GLS 2023–2024",
    duration: "27:09",
    bio: "Dr. Krish Kandiah é empreendedor social, diretor fundador da Home for Good — instituição que encontra lares permanentes para crianças no sistema de acolhimento do Reino Unido —, e fundador da Sanctuary Foundation, de apoio a refugiados. Pai biológico, temporário e adotivo, é defensor de crianças vulneráveis e especialista reconhecido em realojamento de refugiados, bem-estar infantil e mobilização da sociedade civil. Autor de 13 livros, locutor regular na BBC e colaborador do Guardian e do Times de Londres.",
    temaCentral:
        "A esperança autêntica não é ingenuidade diante da realidade — é a capacidade paradoxal de agir a favor de quem está em situação impossível, precisamente porque se acredita que o impossível pode mudar.",
    sinopse: [
        "Kandiah abre com uma cena vivida às 5h45 da manhã na fila da Embaixada da Nigéria em Londres: pai temporário de um menino de 3 anos que havia morado em 8 lares diferentes, ele corria para conseguir um passaporte que permitisse incluir a criança nas férias da família. O absurdo burocrático, o homem branco em uma fila de nigerianos tentando obter um visto nigeriano, a mulher na fila que confronta com humor o outro que acredita em amor pela internet — tudo isso cria uma abertura inesperada para falar sobre o que é agir com esperança diante do que parece impossível.",
        "O ‘paradoxo da esperança’ que Kandiah explora é este: a esperança não elimina a dificuldade — ela coexiste com ela. Agir com esperança por uma criança que já foi devolvida oito vezes, por um refugiado sem documentos, por uma comunidade sem recursos, é precisamente o ato mais contracultural e mais poderoso disponível a um líder. A esperança não é otimismo ingênuo; é a recusa de aceitar que a situação atual é a situação final.",
        "A experiência de Kandiah fundando a Home for Good e a Sanctuary Foundation é o laboratório vivo do paradoxo: quanto mais se aproxima da realidade mais dura dos sistemas de acolhimento e refúgio, mais a esperança se torna não uma emoção, mas uma prática — um conjunto de ações concretas tomadas precisamente quando as circunstâncias menos justificariam.",
    ],
    softSkills: [
        "Esperança como prática e não apenas sentimento",
        "Resiliência em sistemas complexos e burocráticos",
        "Compaixão ativa",
        "Liderança em causas aparentemente impossíveis",
        "Empatia radical pelo vulnerável",
        "Persistência institucional",
        "Coragem de agir contra a corrente",
    ],
    palavrasChave: [
        "esperança",
        "paradoxo",
        "vulnerabilidade",
        "acolhimento",
        "refugiados",
        "compaixão",
        "ação",
        "sistemas",
        "liderança social",
        "impossível",
    ],
    takeaways: [
        "A esperança genuína não é a ausência de dificuldade — é a recusa de aceitar que a situação atual é a situação final.",
        "Agir com esperança em favor do vulnerável é precisamente o gesto mais poderoso quando as circunstâncias menos o justificam.",
        "O paradoxo da esperança: quanto mais próximo da realidade dura, mais necessária e mais real ela se torna como prática.",
        "Líderes que trabalham por causas impossíveis não esperam que o sistema mude para agir — eles agem para que o sistema mude.",
        "Compaixão sem ação é sentimento; ação sem compaixão é eficiência. A esperança une as duas.",
        "Uma criança que passou por oito lares em três anos merece um décimo lar — e isso é uma decisão de esperança, não de otimismo.",
        "As maiores transformações sociais da história foram lideradas por pessoas que se recusaram a aceitar o impossível como permanente.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.3 Legado e impacto social",
                    percent: 90,
                    descricao:
                        "A Home for Good e a Sanctuary Foundation são exemplos concretos de legado construído pela esperança em ação — instituições que existem porque alguém se recusou a aceitar que as crianças e refugiados vulneráveis eram problema insolúvel.",
                },
                {
                    label: "7.1 Propósito como fonte de persistência",
                    percent: 82,
                    descricao:
                        "Kandiah demonstra que o propósito de proteger o vulnerável é o que sustenta a ação mesmo quando os sistemas são lentos, burocráticos e desanimadores.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.3 Esperança como prática de resiliência",
                    percent: 85,
                    descricao:
                        "A esperança não é apresentada como emoção espontânea mas como disciplina praticada — especialmente quando as circunstâncias a contradizem diretamente.",
                },
                {
                    label: "6.1 Sustentabilidade emocional em missões difíceis",
                    percent: 75,
                    descricao:
                        "Trabalhar com crianças devolvidas oito vezes e refugiados sem documentos exige uma forma específica de saúde emocional que Kandiah nomeia como ‘esperança paradoxal’.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com base em experiência de campo e empreendedorismo social" },
        { label: "Estilo", value: "Storytelling pessoal + paradoxo conceitual + chamado à ação concreta" },
        { label: "Aplicabilidade", value: "Alta para líderes em causas sociais, ONGs, pastores e todos que trabalham com vulneráveis" },
        { label: "Intensidade conceitual", value: "Média (paradoxo simples mas com profundidade prática e emocional)" },
    ],
},

// Liz Bohannon — "O topo é solitário, mas não precisa ser" (GLS 2023–2024)
gls23_11: {
    speaker: "Liz Bohannon",
    speakerPhoto: "/speakers/liz-bohannon.png",
    title: "O Topo É Solitário, Mas Não Precisa Ser",
    edition: "GLS 2023–2024",
    duration: "33:31",
    bio: "Liz Forkin Bohannon é fundadora da Sseko Designs — hoje parte da maior marca de moda de comércio justo do mundo com venda social —, autora do best-seller “Beginner’s Pluck: Build your Life of Purpose & Impact Now” e apresentadora do podcast Plucking Up. Por meio de seu trabalho, busca criar oportunidades educacionais e econômicas para mulheres em todo o mundo. Nomeada entre os três principais líderes de transformação por John Maxwell, listada como um dos 20 melhores palestrantes dos EUA pela Forbes e como empreendedora social líder pela Bloomberg Businessweek.",
    temaCentral:
        "A solidão no topo da liderança não é inevitável — é uma escolha. E a alternativa à solidão não é abrir mão da liderança, mas construir intencionalmente comunidade, vulnerabilidade e colaboração como práticas centrais da cultura de liderança.",
    sinopse: [
        "Bohannon retorna ao Summit após 2019, ano em que o mundo não sabia o que estava prestes a mudar. A pandemia — com seu isolamento forçado, suas tendências absurdas e seu bebê — serve de contexto para a palestra: quando o mundo virou de cabeça para baixo, a solidão da liderança ficou exposta de uma forma que muitos líderes não estavam preparados para enfrentar. O topo, que já era solitário, ficou ainda mais.",
        "Usando sua trajetória na Sseko Designs — de fundadora solo a parceira de Agnes, a empresária ugandesa que hoje lidera a empresa em Uganda — Bohannon demonstra que a solidão no topo tem duas causas principais: a ilusão de que líderes precisam ter todas as respostas, e o medo de que vulnerabilidade seja sinal de fraqueza. As duas crenças criam uma cápsula de isolamento que sufoca o líder e empobrece a organização.",
        "A alternativa proposta não é psicológica mas estrutural: construir deliberadamente comunidade de liderança — pares, mentores, colaboradores que conhecem a realidade interna, não apenas a fachada —, cultivar a vulnerabilidade como prática de liderança, e substituir a competição entre líderes pela colaboração. O topo não precisa ser solitário; precisa ser habitado de forma diferente.",
    ],
    softSkills: [
        "Vulnerabilidade como fortaleza",
        "Construção intencional de comunidade de liderança",
        "Colaboração versus competição",
        "Autoconsciência sobre os riscos do isolamento",
        "Abertura para mentoria e pares",
        "Humildade intelectual",
        "Liderança como prática relacional",
    ],
    palavrasChave: [
        "solidão",
        "comunidade",
        "vulnerabilidade",
        "colaboração",
        "liderança",
        "topo",
        "parceria",
        "isolamento",
        "propósito",
        "pertencimento",
    ],
    takeaways: [
        "A solidão no topo não é inevitável — é o resultado de escolhas culturais e relacionais que podem ser feitas de outra forma.",
        "Líderes que acreditam que precisam ter todas as respostas constroem involuntariamente uma cápsula de isolamento que os sufoca.",
        "Vulnerabilidade não é fraqueza de liderança — é a prática que cria os relacionamentos que sustentam a liderança.",
        "A pandemia expôs o que já estava lá: quando o contexto muda radicalmente, líderes que não têm comunidade ficam sem solo firme.",
        "Competição entre líderes é cara; colaboração é estratégica — e raramente acontece por acidente.",
        "Parceiros que conhecem a realidade interna do seu trabalho são mais valiosos do que admiradores que conhecem apenas a fachada.",
        "O topo precisa ser habitado de forma diferente — com pares, com transparência e com a disposição de ser conhecido de verdade.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção de comunidade e pertencimento",
                    percent: 88,
                    descricao:
                        "Bohannon argumenta que a solidão no topo é um problema cultural que só se resolve com construção intencional de comunidade — não um problema individual que se resolve com força de vontade.",
                },
                {
                    label: "2.3 Colaboração e parcerias estratégicas",
                    percent: 82,
                    descricao:
                        "A parceria com Agnes — que evoluiu de funcionária para CEO — é apresentada como modelo de colaboração que enriquece ambas as líderes e cria impacto que nenhuma das duas criaria sozinha.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.1 Saúde emocional do líder e prevenção do isolamento",
                    percent: 85,
                    descricao:
                        "A palestra é, em essência, um diagnóstico do isolamento como risco de saúde emocional do líder e uma proposta prática de prevenção por meio da vulnerabilidade e da comunidade.",
                },
                {
                    label: "6.3 Sustentabilidade da liderança a longo prazo",
                    percent: 78,
                    descricao:
                        "Líderes que constroem comunidade genuína são mais resilientes nos momentos de crise — a pandemia é usada como teste empírico desta hipótese.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Pessoal e empreendedora com storytelling e reflexão sobre cultura de liderança" },
        { label: "Estilo", value: "Testemunho autobiográfico + humor + chamado à mudança estrutural relacional" },
        { label: "Aplicabilidade", value: "Alta para líderes que sentem solidão no cargo, fundadores, empreendedores e pastores" },
        { label: "Intensidade conceitual", value: "Média (profundidade relacional e emocional, baixa complexidade técnica)" },
    ],
},

// Pat Gelsinger — "Construa seu MAP de carreira" (GLS 2023–2024)
gls23_12: {
    speaker: "Pat Gelsinger",
    speakerPhoto: "/speakers/pat-gelsinger.png",
    title: "Construa Seu MAP de Carreira",
    edition: "GLS 2023–2024",
    duration: "30:42",
    bio: "Patrick (Pat) Gelsinger é o CEO da Intel Corporation e membro do seu conselho de diretores. Com mais de quatro décadas de liderança em tecnologia, iniciou na Intel em 1979 e se tornou seu primeiro diretor de tecnologia, arquiteto do processador original 80486, e responsável por tecnologias como USB e Wi-Fi. Antes de retornar à Intel em 2021, foi CEO da VMware, quase triplicando suas receitas. Possui oito patentes em design VLSI, arquitetura de computadores e comunicações, graduações em engenharia elétrica e mestrado em Stanford. Fala frequentemente sobre fé, trabalho e filantropia.",
    temaCentral:
        "Uma carreira extraordinária não segue uma fórmula universal — ela emerge da integração entre Missão (propósito de vida), Arte (o que você faz de melhor) e Paixão (o que o move), formando um MAP pessoal e intransferível.",
    sinopse: [
        "Gelsinger inicia com sua origem improvável: filho de agricultores da Pensilvânia rural, criado em uma comunidade Amish, ele ingressou na Intel por acidente após ganhar uma bolsa de estudos que tecnicamente não deveria ter solicitado ainda no segundo ano do ensino médio. Essa narrativa de improviso e oportunidade não esperada é o pano de fundo para sua tese central: os grandes líderes raramente seguem o plano que traçaram — eles desenvolvem a capacidade de reconhecer e aproveitar o que surge.",
        "O framework MAP — Missão, Arte e Paixão — é a síntese da experiência de Gelsinger ao longo de quatro décadas. Missão é o propósito que transcende o cargo; Arte é o conjunto específico de capacidades que só você combina da forma que combina; Paixão é o que o faz levantar animado mesmo nos dias difíceis. Quando os três se alinham, a carreira deixa de ser uma série de cargos e se torna uma contribuição coerente.",
        "Gelsinger é direto sobre os fracassos: aprendeu mais com eles do que com os sucessos. Cada transição de carreira — da Intel para a EMC, da EMC para a VMware, e o retorno à Intel em 2021 como CEO — foi mediada por perguntas sobre o MAP: isso está alinhado com minha missão? Usa minha arte? Alimenta minha paixão? O modelo não é uma garantia de sucesso, mas uma bússola que orienta as escolhas ao longo do tempo.",
    ],
    softSkills: [
        "Autoconhecimento vocacional",
        "Visão estratégica de carreira",
        "Aprendizado com fracassos",
        "Integração entre fé, trabalho e propósito",
        "Resiliência em transições de carreira",
        "Clareza de missão pessoal",
        "Humildade diante do acaso e da providência",
    ],
    palavrasChave: [
        "MAP de carreira",
        "missão",
        "arte",
        "paixão",
        "propósito",
        "vocação",
        "Intel",
        "liderança executiva",
        "fracasso",
        "trajetória",
    ],
    takeaways: [
        "Uma carreira de impacto não segue uma fórmula universal — ela emerge da integração pessoal entre Missão, Arte e Paixão.",
        "Os maiores aprendizados de carreira raramente vêm dos sucessos — vêm dos fracassos honestamente examinados.",
        "Oportunidades que parecem acidente muitas vezes são o MAP em ação — reconhecê-las exige autoconhecimento.",
        "Missão transcende cargo: quando a missão é clara, as transições de carreira têm uma lógica que vai além do currículo.",
        "Arte é o conjunto único de capacidades que só você combina da forma que combina — identificá-la é estratégico.",
        "Paixão sustenta a energia nos dias difíceis que qualquer trajetória significativa inevitavelmente inclui.",
        "Fé, trabalho e contribuição social não são compartimentos separados — integrados, formam a base de uma liderança duradoura.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.3 Planejamento estratégico de longo prazo",
                    percent: 85,
                    descricao:
                        "O framework MAP é apresentado como uma ferramenta de planejamento estratégico pessoal — uma bússola que orienta decisões de carreira ao longo de décadas, não apenas o próximo passo.",
                },
                {
                    label: "4.1 Tomada de decisão sob incerteza",
                    percent: 78,
                    descricao:
                        "Cada transição de carreira de Gelsinger — especialmente o retorno à Intel como CEO — é descrita como uma decisão tomada com MAP como critério, não com certeza de resultado.",
                },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.1 Clareza de propósito e missão pessoal",
                    percent: 88,
                    descricao:
                        "O M de Missão no framework MAP é o elemento que ancora toda a trajetória — sem clareza de missão, a Arte e a Paixão perdem direção e se fragmentam.",
                },
                {
                    label: "7.2 Integração entre fé, trabalho e impacto",
                    percent: 80,
                    descricao:
                        "Gelsinger é explícito sobre o papel da fé em sua trajetória — não como elemento separado, mas como dimensão integradora que dá sentido ao trabalho técnico e à liderança executiva.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Autobiográfica com framework prático de desenvolvimento de carreira" },
        { label: "Estilo", value: "Storytelling pessoal + modelo conceitual + lições de fracasso e aprendizado" },
        { label: "Aplicabilidade", value: "Alta para profissionais em qualquer estágio de carreira, especialmente líderes em transição" },
        { label: "Intensidade conceitual", value: "Média (framework claro e acessível, aprofundado pela experiência real)" },
    ],
},

// Patrick Lencioni — "Coragem nos tempos atuais" (GLS 2023–2024)
gls23_13: {
    speaker: "Patrick Lencioni",
    speakerPhoto: "/speakers/patrick-lencioni.png",
    title: "Coragem Nos Tempos Atuais",
    edition: "GLS 2023–2024",
    duration: "27:42",
    bio: "Patrick Lencioni é fundador e presidente do The Table Group, consultoria executiva especializada em saúde organizacional. Recusou uma oferta de emprego da Pixar para abrir sua própria empresa. Seus livros venderam mais de 10 milhões de exemplares, e seu clássico “Os 5 desafios das equipes”, publicado há mais de 20 anos, permanece presença constante nas listas de best-sellers. Seu livro mais recente é “Os 6 tipos de talento profissional”. Participa do Global Leadership Summit há mais de 20 anos.",
    temaCentral:
        "O mundo de 2023 exige um tipo diferente de liderança: líderes que tenham a coragem de ser sábios, virtuosos e corajosos — não apenas competentes e estratégicos — em um tempo que pune exatamente essas virtudes.",
    sinopse: [
        "Lencioni declara desde o início que esta é a palestra mais importante que já deu no Summit — e explica o porquê: o mundo mudou profundamente desde 2003, e não apenas superficialmente. As polarizações, o cancelamento cultural, o relativismo moral e a pressão para que líderes silencem suas convicções criaram um ambiente em que as três virtudes essenciais da liderança — sabedoria, virtude e coragem — são precisamente as que mais se tornaram impopulares.",
        "Lencioni estrutura a palestra em torno de três pilares. Sabedoria é a capacidade de enxergar a realidade como ela é, não como gostaríamos que fosse — e inclui a humildade de reconhecer o que não sabemos. Virtude é o compromisso com o bem mesmo quando é custoso — não a moralidade performática, mas o caráter que resiste à pressão. Coragem é o que conecta sabedoria e virtude à ação: sem coragem, o líder sabe e quer, mas não faz.",
        "O chamado final de Lencioni é explicitamente contracultural: em um tempo que premia a adaptação conveniente e pune a convicção firme, líderes com sabedoria, virtude e coragem são exatamente o que o mundo mais precisa — e os mais propensos a pagar o preço por serem o que são. O convite é que eles paguem esse preço consciente e deliberadamente.",
    ],
    softSkills: [
        "Coragem moral e intelectual",
        "Sabedoria como clareza sobre a realidade",
        "Virtude como caráter sob pressão",
        "Liderança contracultural",
        "Integridade de convicção",
        "Disposição para pagar o preço das próprias escolhas",
        "Humildade diante do desconhecido",
    ],
    palavrasChave: [
        "coragem",
        "sabedoria",
        "virtude",
        "liderança",
        "caráter",
        "convicção",
        "tempos difíceis",
        "integridade",
        "polarização",
        "liderança contracultural",
    ],
    takeaways: [
        "As três virtudes mais necessárias para líderes hoje — sabedoria, virtude e coragem — são precisamente as mais impopulares no ambiente atual.",
        "Sabedoria não é inteligência — é a capacidade de enxergar a realidade como ela é, incluindo as partes inconvenientes.",
        "Virtude não é moralidade performática — é o caráter que age pelo bem mesmo quando o custo é real e o aplauso é ausente.",
        "Coragem é o que transforma sabedoria e virtude em liderança real — sem ela, o líder sabe e quer, mas não faz.",
        "O ambiente atual pune exatamente as virtudes que a liderança mais precisa — e isso torna essas virtudes ainda mais necessárias.",
        "Líderes que adaptam suas convicções à pressão do ambiente não estão sendo pragmáticos — estão sendo incongruentes.",
        "O maior presente que um líder pode dar ao mundo hoje é ter a coragem de ser sábio, virtuoso e íntegro quando tudo convida ao contrário.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.3 Coragem e enfrentamento do medo",
                    percent: 93,
                    descricao:
                        "A coragem é o tema central e o terceiro pilar do framework — Lencioni a define como a virtude que transforma sabedoria e virtude em ação real, especialmente quando o contexto pune essa ação.",
                },
                {
                    label: "1.2 Integridade e caráter sob pressão",
                    percent: 88,
                    descricao:
                        "A virtude — entendida como caráter que age pelo bem mesmo quando custoso — é o segundo pilar, e Lencioni é explícito: o mundo atual testa esse caráter de formas que gerações anteriores não conheceram.",
                },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.1 Influência baseada em convicção e integridade",
                    percent: 82,
                    descricao:
                        "Lencioni sustenta que a influência genuína — a que muda organizações e culturas — só é possível para líderes que têm convicções claras e a coragem de expressá-las, mesmo sob pressão.",
                },
                {
                    label: "3.3 Comunicação corajosa em contextos hostis",
                    percent: 75,
                    descricao:
                        "A palestra é ela mesma um exemplo de comunicação corajosa: Lencioni diz coisas que sabe serem impopulares em certos contextos, e usa isso como demonstração do que prega.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Ética e liderança com framework de três virtudes e chamado contracultural" },
        { label: "Estilo", value: "Direto + provocador + humor autocrítico + chamado à responsabilidade" },
        { label: "Aplicabilidade", value: "Alta para líderes em qualquer contexto que enfrentam pressão para silenciar convicções" },
        { label: "Intensidade conceitual", value: "Média-alta (framework simples com implicações éticas profundas)" },
    ],
},

// Ryan Leak — "Aumentando o nível – 3 perguntas para líderes de outro nível" (GLS 2023–2024)
gls23_14: {
    speaker: "Ryan Leak",
    speakerPhoto: "/speakers/ryan-leak.png",
    title: "Aumentando o Nível — 3 Perguntas Para Líderes de Outro Nível",
    edition: "GLS 2023–2024",
    duration: "32:15",
    bio: "Ryan Leak é coach executivo, autor best-seller e CEO da Ryan Leak Group LLC, empresa de desenvolvimento de liderança que atende times da NBA a empresas Fortune 500. Amplamente conhecido por dois documentários — “The Surprise Wedding” e “Chasing Failure” —, treina mais de 15.000 líderes empreendedores e fala para mais de 200.000 pessoas por ano. Seu livro mais recente, “Leveling Up: 12 Questions to Elevate Your Personal and Professional Development”, foi destaque no USA Today e no Wall Street Journal.",
    temaCentral:
        "Líderes que param de crescer criam organizações que param de crescer. Três perguntas estratégicas — sobre o que você está evitando, sobre quem você está se tornando e sobre o que você está perseguindo — são as chaves para desbloquear o próximo nível.",
    sinopse: [
        "Leak abre com uma provocação simples: já houve um momento em que você achou que era bom em algo, até encontrar alguém realmente bom nessa mesma coisa e percebeu que ‘o nível aqui é outro’? Essa experiência de confronto com um patamar superior é o ponto de partida para a palestra: há sempre um próximo nível, e a questão não é se ele existe, mas se você está ativamente buscando chegar lá.",
        "A partir de sua experiência como coach executivo com líderes de alto desempenho, Leak identifica o padrão mais comum que impede líderes de subirem de nível: o piloto automático. Líderes presos no piloto automático continuam executando, mas pararam de crescer. Estão exaustos como se estivessem correndo, mas ficam no mesmo lugar — como em uma esteira. O diagnóstico é preciso porque é invisível: do lado de fora, parece ocupação; por dentro, é estagnação.",
        "As três perguntas que Leak propõe são intencionalmente desconfortáveis. A primeira é sobre o que você está evitando — porque o próximo nível quase sempre está do outro lado exatamente do que você mais evita. A segunda é sobre quem você está se tornando — não apenas o que está fazendo. A terceira é sobre o que você está ativamente perseguindo — pois crescimento sem direção é apenas movimento. Juntas, as três perguntas formam uma auditoria de crescimento que qualquer líder pode fazer em qualquer estágio da carreira.",
    ],
    softSkills: [
        "Autoconsciência de crescimento e estagnação",
        "Coragem para confrontar o que evita",
        "Mentalidade de crescimento contínuo",
        "Autodisciplina e intencionalidade",
        "Coaching como prática de desenvolvimento",
        "Clareza sobre quem se está se tornando",
        "Orientação a objetivos audaciosos",
    ],
    palavrasChave: [
        "leveling up",
        "próximo nível",
        "piloto automático",
        "crescimento",
        "estagnação",
        "coaching",
        "perguntas estratégicas",
        "desenvolvimento",
        "liderança",
        "intencionalidade",
    ],
    takeaways: [
        "Quando líderes param de crescer, suas organizações param de crescer — o crescimento do líder não é opcional.",
        "O piloto automático parece produtividade, mas é estagnação: o líder executa, mas não cresce.",
        "O próximo nível quase sempre está do outro lado daquilo que você mais evita.",
        "A pergunta ‘quem estou me tornando?’ é mais estratégica do que ‘o que estou fazendo?’ — o ser precede o fazer.",
        "Crescimento sem direção é apenas movimento; é preciso saber o que se está perseguindo.",
        "Líderes de outro nível não esperam as condições perfeitas — criam as condições ao se tornarem melhores versões de si mesmos.",
        "As perguntas certas, feitas com honestidade, são mais valiosas do que as respostas que já se sabe dar.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.2 Desenvolvimento estratégico de líderes e equipes",
                    percent: 88,
                    descricao:
                        "As três perguntas de Leak são instrumentos de desenvolvimento estratégico — elas criam um diagnóstico de crescimento que pode ser aplicado individualmente ou com equipes.",
                },
                {
                    label: "4.1 Diagnóstico e superação da estagnação",
                    percent: 82,
                    descricao:
                        "O conceito de ‘piloto automático’ é um diagnóstico preciso de estagnação disfarçada de ocupação — e Leak oferece ferramentas concretas para sair dele.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.4 Mentalidade de crescimento contínuo",
                    percent: 90,
                    descricao:
                        "A palestra inteira é uma defesa da mentalidade de crescimento como prática deliberada — não um traço de personalidade, mas uma escolha que precisa ser feita repetidamente.",
                },
                {
                    label: "1.1 Autoconhecimento e coragem para confrontar a própria estagnação",
                    percent: 80,
                    descricao:
                        "Reconhecer que se está no piloto automático exige autoconhecimento honesto — e a coragem de admitir que o nível em que se está não é o nível para o qual se foi chamado.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Coaching de liderança com framework prático de três perguntas" },
        { label: "Estilo", value: "Humor + provocação estratégica + storytelling + coaching ao vivo" },
        { label: "Aplicabilidade", value: "Muito alta para líderes em qualquer estágio que sentem que atingiram um platô" },
        { label: "Intensidade conceitual", value: "Média (framework simples e poderoso, com alta aplicabilidade imediata)" },
    ],
},


    // ===== gls24-25 =====
// Arthur C. Brooks — Mais Feliz em um Mundo Infeliz (GLS 2024–2025)
gls24_2: {
    speaker: "Arthur C. Brooks",
    speakerPhoto: "/speakers/arthur-brooks.png",
    title: "Mais Feliz em um Mundo Infeliz",
    edition: "GLS 2024–2025",
    duration: "35:37",
    bio: "Professor de Prática de Liderança Pública e Não Governamental na Harvard Kennedy School e Professor de Prática de Gestão na Harvard Business School, onde leciona sobre liderança e felicidade. Colunista da revista The Atlantic com a coluna “How to Build a Life”. Autor de 13 livros, incluindo o best-seller “Build the Life You Want” (2023), coescrito com Oprah Winfrey. Reconhecido como uma das vozes mais relevantes sobre ciência da felicidade e bem-estar aplicados à liderança.",
    temaCentral: "Felicidade não é um sentimento passageiro, mas uma combinação de três macronutrientes essenciais: diversão, satisfação e significado. Em um mundo que está ficando progressivamente menos feliz, líderes têm o poder e a responsabilidade de agir para mudar esse cenário.",
    sinopse: [
        "Arthur C. Brooks apresenta uma visão baseada em evidências científicas sobre a natureza da felicidade, distinguindo-a de emoções positivas passageiras e demonstrando que ela é construída a partir de três pilares fundamentais: diversão (prazer no presente), satisfação (recompensa pelo esforço) e significado (propósito que transcende o eu).",
        "Com dados alarmantes sobre o declínio global do bem-estar, Brooks desafia líderes a olharem para dentro de suas organizações e culturas, reconhecendo que ambientes de trabalho podem ser vetores de infelicidade ou de florescimento humano — e que a escolha entre esses caminhos é, em grande medida, uma decisão de liderança.",
        "A palestra encerra com estratégias práticas e contraintuitivas para cultivar felicidade duradoura, incluindo a gestão das emoções negativas, o valor do sofrimento intencional e como líderes podem usar sua influência para construir culturas onde as pessoas genuinamente florescem."
    ],
    softSkills: [
        "Inteligência emocional",
        "Autoconhecimento",
        "Gestão de bem-estar",
        "Empatia organizacional",
        "Liderança consciente",
        "Resiliência positiva",
        "Propósito intencional"
    ],
    palavrasChave: [
        "felicidade",
        "bem-estar",
        "liderança",
        "significado",
        "satisfação",
        "ciência da felicidade",
        "cultura organizacional",
        "emoções positivas",
        "propósito"
    ],
    takeaways: [
        "Felicidade é uma combinação de diversão, satisfação e significado — não apenas ausência de sofrimento.",
        "O mundo está ficando menos feliz e líderes têm papel ativo nessa reversão.",
        "Emoções negativas são informações valiosas, não problemas a serem eliminados.",
        "Sofrimento intencional — esforço, disciplina e desconforto — é necessário para a satisfação duradoura.",
        "Líderes que cultivam ambientes de significado geram equipes mais engajadas e resilientes.",
        "A felicidade sustentável requer gestão ativa, não espera passiva por boas circunstâncias.",
        "Conexões humanas genuínas são o investimento de maior retorno para o bem-estar individual e coletivo."
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "Gestão do bem-estar",
                    percent: 92,
                    descricao: "A palestra oferece framework científico robusto para compreender e cultivar felicidade de forma intencional e sustentável."
                },
                {
                    label: "Saúde emocional aplicada",
                    percent: 88,
                    descricao: "Brooks demonstra como líderes podem usar inteligência emocional para construir ambientes organizacionais que favorecem o florescimento humano."
                }
            ]
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Autoconhecimento do líder",
                    percent: 85,
                    descricao: "A palestra desafia líderes a examinarem sua própria relação com a felicidade antes de influenciar a cultura de suas organizações."
                },
                {
                    label: "Responsabilidade cultural",
                    percent: 80,
                    descricao: "Apresenta liderança como um ato de responsabilidade ativa pelo bem-estar coletivo, não apenas pelos resultados organizacionais."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com base científica" },
        { label: "Estilo", value: "Analítico e narrativo" },
        { label: "Aplicabilidade", value: "Alta — estratégias práticas imediatas" },
        { label: "Intensidade conceitual", value: "Média-alta" }
    ]
},

// Carey Lohrenz — Alcance de Controle (GLS 2024–2025)
gls24_3: {
    speaker: "Carey Lohrenz",
    speakerPhoto: "/speakers/carey-lohrenz.png",
    title: "Alcance de Controle",
    edition: "GLS 2024–2025",
    duration: "26:36",
    bio: "Primeira mulher piloto de caça F-14 Tomcat da Marinha dos EUA, realizou missões em todo o mundo em ambientes de altíssimo risco e pressão extrema. Ex-presidente da Women Military Aviators Association e membro do conselho de liderança da NACD. Autora best-seller reconhecida por ajudar marcas globais como Cisco, Dell e Deloitte a elevar sua performance. Seu livro mais recente, “Span of Control”, ensina líderes a sobreviver e ter sucesso em tempos de crise e incerteza.",
    temaCentral: "Liderança destemida é construída sobre três pilares indissociáveis: coragem, obstinação e integridade. O segredo para prosperar em ambientes de alta pressão está em dominar o que se pode controlar e liberar o que está fora do alcance — esse é o verdadeiro 'alcance de controle'.",
    sinopse: [
        "Carey Lohrenz traz lições forjadas nas condições mais extremas da aviação militar — onde erros custam vidas — para o ambiente corporativo e de liderança. A analogia com o cockpit do F-14 serve como pano de fundo para uma análise poderosa sobre como líderes operam sob pressão máxima sem perder o foco nem a integridade.",
        "A palestra explora como a coragem não é ausência de medo, mas a capacidade de agir apesar dele; como a obstinação (grit) sustenta líderes quando a motivação falha; e como a integridade cria a confiança que permite que equipes operem com coesão em momentos críticos. Esses três pilares formam a espinha dorsal da liderança destemida.",
        "Lohrenz apresenta o conceito de 'alcance de controle' como uma ferramenta mental prática: identificar com clareza o que está dentro da esfera de influência do líder, agir com toda a energia disponível nessa zona, e deliberadamente soltar o restante — evitando o desperdício de recursos mentais e emocionais que paralisa a liderança em tempos de crise."
    ],
    softSkills: [
        "Coragem executiva",
        "Tomada de decisão sob pressão",
        "Integridade como base da liderança",
        "Foco e priorização",
        "Resiliência em crises",
        "Gestão do controle pessoal",
        "Liderança em ambientes de alto risco"
    ],
    palavrasChave: [
        "liderança destemida",
        "alcance de controle",
        "coragem",
        "obstinação",
        "integridade",
        "aviação militar",
        "gestão de crises",
        "tomada de decisão",
        "alta performance",
        "resiliência"
    ],
    takeaways: [
        "Liderança destemida se apoia em três pilares: coragem, obstinação e integridade.",
        "Coragem não é ausência de medo, mas ação intencional apesar dele.",
        "O 'alcance de controle' é uma ferramenta mental para concentrar energia onde ela gera impacto real.",
        "Integridade não é negociável — é a base da confiança que permite equipes operarem em crises.",
        "Líderes que tentam controlar tudo perdem energia preciosa; os melhores sabem o que soltar.",
        "Obstinação sustentada (grit) é o diferencial entre líderes que persistem e os que desistem.",
        "Ambientes de alta pressão revelam caráter — a preparação antecipada é o único antídoto."
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Desenvolvimento de caráter",
                    percent: 93,
                    descricao: "A palestra mergulha nos fundamentos do caráter do líder — coragem, obstinação e integridade — com exemplos práticos de situações de vida ou morte."
                },
                {
                    label: "Autogestão sob pressão",
                    percent: 90,
                    descricao: "Lohrenz oferece ferramentas concretas para líderes manterem clareza e foco em ambientes de alta pressão e incerteza."
                }
            ]
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "Tomada de decisão em crises",
                    percent: 87,
                    descricao: "O conceito de alcance de controle oferece uma estrutura estratégica para priorizar recursos e decisões em cenários complexos."
                },
                {
                    label: "Execução sob incerteza",
                    percent: 82,
                    descricao: "A experiência militar de Lohrenz demonstra como executar com precisão mesmo quando nem todas as variáveis podem ser controladas."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com framework prático" },
        { label: "Estilo", value: "Narrativo e direto" },
        { label: "Aplicabilidade", value: "Alta — ferramentas aplicáveis imediatamente" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Craig Groeschel — Permissão Para Se Obcecar (GLS 2024–2025)
gls24_4: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "Permissão Para Se Obcecar",
    edition: "GLS 2024–2025",
    duration: "40:51",
    bio: "Fundador e Pastor Sênior da Life.Church, classificada repetidamente pelo Glassdoor como um dos Melhores Lugares para Trabalhar nos Estados Unidos. Criador do YouVersion Bible App, instalado em mais de meio bilhão de dispositivos ao redor do mundo. Apresentador do renomado “Craig Groeschel Leadership Podcast”, seguido por líderes em todos os setores. Autor best-seller do New York Times, com seu mais recente livro “Think Ahead” explorando a importância do pensamento estratégico para líderes.",
    temaCentral: "A conformidade é o caminho mais rápido para a mediocridade. Líderes extraordinários precisam de permissão para se obcecar com as coisas que vão mudar o mundo — rompendo com as forças sociais e culturais que condicionam todos à aceitação do status quo.",
    sinopse: [
        "Craig Groeschel desafia a premissa de que líderes eficazes devem ser equilibrados e moderados em todas as áreas. A tese central da palestra é provocadora: a obsessão — quando direcionada ao que realmente importa — não é um desvio patológico, mas uma característica essencial dos líderes que criam impacto real e duradouro.",
        "A palestra explora as forças invisíveis que empurram líderes em direção à mediocridade: a pressão pela conformidade social, o medo do julgamento dos pares, a cultura organizacional que recompensa a segurança em detrimento da excelência, e o hábito mental de aceitar o 'bom o suficiente'. Groeschel nomeia essas forças e oferece caminhos para resistir a elas.",
        "Com histórias de líderes que escolheram a obsessão sobre a conformidade e colheram resultados extraordinários, a palestra encerra com um convite: identificar a área onde a obsessão pode gerar o maior impacto e dar a si mesmo a permissão de persegui-la sem desculpas, criando culturas que valorizam a excelência radical."
    ],
    softSkills: [
        "Convicção e coragem",
        "Foco estratégico",
        "Resistência à pressão social",
        "Pensamento disruptivo",
        "Disciplina criativa",
        "Liderança inspiracional",
        "Tolerância ao inconformismo"
    ],
    palavrasChave: [
        "obsessão",
        "excelência",
        "conformidade",
        "mediocridade",
        "liderança extraordinária",
        "propósito",
        "foco",
        "cultura organizacional",
        "disrupção"
    ],
    takeaways: [
        "A conformidade é a maior ameaça à excelência — líderes extraordinários resistem a ela ativamente.",
        "Obsessão direcionada não é patologia, mas combustível para impacto extraordinário.",
        "Forças sociais invisíveis condicionam líderes ao 'bom o suficiente' — identificá-las é o primeiro passo.",
        "Líderes medianos tentam ser bons em tudo; líderes extraordinários escolhem onde ser incomparáveis.",
        "Dar permissão a si mesmo para se obcecar é um ato de coragem, não de arrogância.",
        "Culturas de excelência são construídas por líderes que modelam a obsessão saudável.",
        "O 'Think Ahead' (pensar à frente) exige disposição para ser incompreendido no presente."
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Mentalidade de excelência",
                    percent: 94,
                    descricao: "Groeschel desafia diretamente as crenças limitantes que mantêm líderes presos à mediocridade, oferecendo permissão e framework para a excelência radical."
                },
                {
                    label: "Identidade e convicção do líder",
                    percent: 89,
                    descricao: "A palestra fortalece a convicção interna necessária para que líderes resistam às pressões externas de conformidade."
                }
            ]
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "Foco estratégico",
                    percent: 83,
                    descricao: "A obsessão estratégica exige escolhas claras sobre onde concentrar energia — o que é também uma decisão executiva fundamental."
                },
                {
                    label: "Cultura de alta performance",
                    percent: 80,
                    descricao: "Líderes que modelam obsessão saudável criam organizações que executam em níveis extraordinários."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional e desafiadora" },
        { label: "Estilo", value: "Provocativo e narrativo" },
        { label: "Aplicabilidade", value: "Alta — mudança de mentalidade imediata" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Dan Owolabi — Um Legado de Liderança (GLS 2024–2025)
gls24_5: {
    speaker: "Dan Owolabi",
    speakerPhoto: "/speakers/dan-owolabi.png",
    title: "Um Legado de Liderança",
    edition: "GLS 2024–2025",
    duration: "27:44",
    bio: "Diretor Executivo da Branches Worldwide, organização sem fins lucrativos dedicada a investir em empreendedores de alto impacto em escala global. Com quase 20 anos de experiência em desenvolvimento de liderança, Dan auxilia líderes em 18 países distribuídos por quatro continentes. Seu livro “Authentic Leadership” foi um dos lançamentos número 1 na Amazon, consolidando sua reputação como uma das vozes mais importantes sobre liderança genuína e construção de legado duradouro.",
    temaCentral: "Trabalhar duro não garante um legado. É preciso distinguir claramente entre sucesso — que mede conquistas pessoais — e legado — que mede o impacto deixado nas pessoas. Construir um legado exige sacrifício, identificação do que realmente importa e ação deliberada para criar algo que dure muito além de nós.",
    sinopse: [
        "Dan Owolabi abre a palestra com uma distinção que poucos líderes param para fazer: a diferença fundamental entre sucesso e legado. O sucesso é frequentemente medido por conquistas, reconhecimento e acumulação — métricas visíveis e validadas pela cultura. O legado, por outro lado, é medido pelo impacto invisível deixado nas vidas das pessoas que continuarão após a nossa partida.",
        "A palestra percorre os erros mais comuns que líderes cometem ao tentar construir legado: confundir visibilidade com impacto, priorizar resultados de curto prazo sobre formação de pessoas, e negligenciar o investimento em líderes que os sucederão. Com exemplos de líderes de quatro continentes, Owolabi demonstra que o verdadeiro legado raramente é planejado — mas sempre é intencional.",
        "O encerramento desafia cada líder a realizar um inventário honesto: quem está sendo formado pela sua liderança? O que continuará existindo quando você não estiver mais lá? Owolabi oferece perguntas práticas e um framework simples para que líderes comecem a construir legado hoje, independentemente do estágio da carreira."
    ],
    softSkills: [
        "Visão de longo prazo",
        "Mentoria e desenvolvimento de pessoas",
        "Sacrifício intencional",
        "Autenticidade na liderança",
        "Impacto além dos resultados",
        "Propósito transcendente",
        "Humildade executiva"
    ],
    palavrasChave: [
        "legado",
        "liderança autêntica",
        "sucesso",
        "impacto",
        "mentoria",
        "formação de líderes",
        "propósito",
        "sacrifício",
        "longo prazo"
    ],
    takeaways: [
        "Sucesso e legado são métricas distintas — confundi-los é o erro mais comum de líderes talentosos.",
        "Legado não é o que você conquista, mas o que você deixa nas pessoas ao seu redor.",
        "Construir legado exige sacrifício deliberado — algo precisa ser colocado em segundo plano para que o que importa venha primeiro.",
        "O legado mais poderoso é a formação de outros líderes que multiplicarão o impacto além da sua presença.",
        "Visibilidade não é sinônimo de impacto — o legado mais profundo frequentemente acontece em silêncio.",
        "Perguntar 'o que continuará quando eu não estiver mais aqui?' é o ponto de partida para construção de legado.",
        "Liderança autêntica — baseada em quem você realmente é — é a única que gera legado genuíno."
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "Construção de legado",
                    percent: 95,
                    descricao: "A palestra é inteiramente dedicada a distinguir sucesso de legado e oferecer um framework para construção intencional de impacto duradouro."
                },
                {
                    label: "Visão de longo prazo",
                    percent: 90,
                    descricao: "Owolabi desafia líderes a expandirem seu horizonte temporal muito além dos ciclos anuais de planejamento."
                }
            ]
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Autenticidade como fundação",
                    percent: 85,
                    descricao: "A liderança autêntica — alinhada à identidade real do líder — é apresentada como pré-requisito para qualquer legado genuíno."
                },
                {
                    label: "Sacrifício intencional",
                    percent: 80,
                    descricao: "A disposição para sacrificar o conforto imediato em favor do impacto duradouro é explorada como virtude central do líder de legado."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional e reflexiva" },
        { label: "Estilo", value: "Narrativo e interrogativo" },
        { label: "Aplicabilidade", value: "Alta — convida à ação imediata" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// David Ashcraft — A Força Oculta que Pode Destruir Seu Legado (GLS 2024–2025)
gls24_6: {
    speaker: "David Ashcraft",
    speakerPhoto: "/speakers/david-ashcraft.png",
    title: "A Força Oculta que Pode Destruir Seu Legado",
    edition: "GLS 2024–2025",
    duration: "39:10",
    bio: "Presidente e CEO da Global Leadership Network (GLN), organização pioneira no desenvolvimento de liderança em escala global. Anteriormente liderou a LCBC Church em Manheim, Pensilvânia, levando-a de 150 frequentadores a uma comunidade com 19 locais e mais de 22 mil pessoas. Fundador e presidente da The Advantage. Autor de “What Was I Thinking?”, livro sobre as armadilhas mentais que comprometem líderes em seu momento de maior influência.",
    temaCentral: "Jim Collins ensina que um líder de nível cinco é aquele cuja organização fica melhor depois que ele parte. A força oculta que destrói esse tipo de legado é o ego — quando o líder começa a colocar o próprio sucesso e reconhecimento acima do sucesso duradouro da organização e das pessoas que serve.",
    sinopse: [
        "David Ashcraft parte do conceito de 'líder nível cinco' de Jim Collins para construir uma análise corajosa e pessoal sobre a maior ameaça ao legado de um líder: o ego descontrolado. Com a autoridade de quem liderou organizações por décadas e agora preside a maior rede global de desenvolvimento de liderança, Ashcraft fala com vulnerabilidade sobre como o ego pode se disfarçar de virtude.",
        "A palestra expõe as manifestações mais perigosas do ego na liderança: a necessidade de crédito que sufoca a colaboração, a dificuldade de reconhecer erros que paralisa o aprendizado, a centralização de decisões que impede o desenvolvimento de novos líderes, e o medo do fracasso que leva a evitar riscos necessários. Ashcraft demonstra como cada uma dessas manifestações destrói o que poderia ser um legado extraordinário.",
        "O encerramento é um convite à autoavaliação radical: que forças ocultas estão trabalhando contra o legado que você quer construir? Ashcraft oferece práticas concretas de humildade intencional, prestação de contas e construção de sistemas que funcionam independentemente da presença do líder — os verdadeiros marcadores de uma liderança que transcende o tempo."
    ],
    softSkills: [
        "Humildade executiva",
        "Autoconhecimento profundo",
        "Gestão do ego",
        "Vulnerabilidade intencional",
        "Desenvolvimento de sucessores",
        "Accountability pessoal",
        "Liderança servidora"
    ],
    palavrasChave: [
        "ego",
        "legado",
        "humildade",
        "liderança nível cinco",
        "autoconhecimento",
        "Jim Collins",
        "vulnerabilidade",
        "sucessão",
        "armadilhas da liderança"
    ],
    takeaways: [
        "O ego é a força oculta mais destrutiva para líderes que querem construir legado duradouro.",
        "Um líder de nível cinco constrói organizações que ficam melhores depois que ele parte.",
        "O ego se disfarça de virtude — confiança, visão, determinação — tornando-o difícil de identificar.",
        "Líderes que precisam de crédito criam culturas que sufocam a colaboração e a iniciativa.",
        "Humildade intencional não é fraqueza — é a base de qualquer legado genuíno.",
        "Sistemas que funcionam sem o líder são o maior indicador de liderança de nível cinco.",
        "A prestação de contas voluntária é o antídoto mais eficaz contra o crescimento do ego."
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Gestão do ego e autoconhecimento",
                    percent: 93,
                    descricao: "A palestra é uma análise corajosa e prática sobre como o ego compromete a liderança, com ferramentas para identificá-lo e contê-lo."
                },
                {
                    label: "Humildade como competência",
                    percent: 88,
                    descricao: "Ashcraft reposiciona a humildade como uma habilidade de liderança essencial, não apenas como virtude moral."
                }
            ]
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "Legado organizacional",
                    percent: 85,
                    descricao: "A construção de organizações que prosperam além da presença do líder é apresentada como o maior indicador de liderança de impacto."
                },
                {
                    label: "Sucessão intencional",
                    percent: 78,
                    descricao: "Ashcraft demonstra que o desenvolvimento de sucessores é parte inseparável da construção de um legado que dura."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Reflexiva e desafiadora" },
        { label: "Estilo", value: "Vulnerável e analítico" },
        { label: "Aplicabilidade", value: "Alta — autoavaliação e mudança de práticas" },
        { label: "Intensidade conceitual", value: "Média-alta" }
    ]
},

// Erwin McManus — 7 Frequências da Comunicação (GLS 2024–2025)
gls24_7: {
    speaker: "Erwin McManus",
    speakerPhoto: "/speakers/erwin-mcmanus.png",
    title: "7 Frequências da Comunicação",
    edition: "GLS 2024–2025",
    duration: "38:33",
    bio: "Autor e artista premiado cujos livros venderam mais de um milhão de cópias em mais de uma dúzia de idiomas ao redor do mundo. Passou 30 anos aconselhando CEOs, atletas profissionais, empresas bilionárias, universidades e líderes mundiais sobre comunicação e liderança. Fundador do Mosaic em Los Angeles, comunidade reconhecida pela inovação cultural. Seu livro “The Seven Frequencies of Communication” foi lançado em 2024, consolidando décadas de pesquisa e prática sobre o poder transformador da linguagem.",
    temaCentral: "Humanos são criaturas de circuito aberto — a comunicação não é uma simples troca de informações, mas uma força que invade a alma, acende imagens internas e pode literalmente mudar vidas. Existem 7 frequências distintas de comunicação que líderes precisam dominar para exercer influência plena e genuína.",
    sinopse: [
        "Erwin McManus abre com uma provocação neurológica: somos 'criaturas de circuito aberto', o que significa que nossas emoções e estados internos são literalmente contagiosos e moldáveis através da comunicação. Isso transforma radicalmente a responsabilidade do líder-comunicador — cada palavra, tom e presença tem um impacto mensurável nas pessoas ao redor.",
        "A palestra apresenta o framework das 7 frequências de comunicação — não como um modelo teórico, mas como um mapa prático das diferentes camadas em que a comunicação humana opera: desde a transmissão básica de informações até a criação de imagens mentais que mobilizam ação, passando pela frequência emocional, a narrativa de identidade e a comunicação de visão que inspira movimento coletivo.",
        "McManus demonstra, com histórias de líderes reais e exemplos do seu trabalho com CEOs e atletas de elite, como dominar múltiplas frequências permite ao líder adaptar sua comunicação ao contexto, à pessoa e ao momento — tornando-se não apenas um comunicador mais eficaz, mas um agente de transformação que usa a linguagem como ferramenta de criação de realidade."
    ],
    softSkills: [
        "Comunicação multidimensional",
        "Inteligência emocional na comunicação",
        "Presença e carisma",
        "Escuta ativa profunda",
        "Adaptação de mensagem",
        "Influência através da narrativa",
        "Consciência do impacto interpessoal"
    ],
    palavrasChave: [
        "comunicação",
        "frequências",
        "influência",
        "linguagem",
        "liderança",
        "narrativa",
        "impacto emocional",
        "circuito aberto",
        "persuasão"
    ],
    takeaways: [
        "Somos criaturas de circuito aberto — a comunicação tem impacto físico e emocional real nas pessoas.",
        "Existem 7 frequências distintas de comunicação que operam em camadas diferentes da experiência humana.",
        "Líderes que dominam múltiplas frequências têm capacidade de influência incomparavelmente maior.",
        "A frequência errada na mensagem certa torna a comunicação ineficaz — contexto e pessoa determinam a frequência.",
        "Comunicação não é sobre o que você diz, mas sobre o que o outro experimenta ao receber sua mensagem.",
        "A narrativa é a frequência mais poderosa para criar imagens mentais que mobilizam ação.",
        "Líderes extraordinários usam a linguagem como ferramenta de criação — eles constroem realidade com palavras."
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "Framework de comunicação",
                    percent: 95,
                    descricao: "As 7 frequências oferecem um mapa prático e completo para líderes elevarem seu impacto comunicacional em todos os contextos."
                },
                {
                    label: "Influência através da linguagem",
                    percent: 92,
                    descricao: "McManus demonstra como dominar diferentes camadas da comunicação multiplica a capacidade de influência do líder."
                }
            ]
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Presença e impacto do líder",
                    percent: 83,
                    descricao: "A palestra conecta comunicação à identidade do líder, mostrando que a autenticidade é a frequência que unifica todas as outras."
                },
                {
                    label: "Responsabilidade comunicacional",
                    percent: 78,
                    descricao: "Líderes de circuito aberto têm responsabilidade ampliada pelo impacto de sua presença e linguagem em todas as interações."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual e prática" },
        { label: "Estilo", value: "Criativo e filosófico" },
        { label: "Aplicabilidade", value: "Alta — framework aplicável imediatamente" },
        { label: "Intensidade conceitual", value: "Alta" }
    ]
},

// Jo Saxton — Amplifique Seu Propósito Para Elevar Seu Impacto (GLS 2024–2025)
gls24_8: {
    speaker: "Jo Saxton",
    speakerPhoto: "/speakers/jo-saxton.png",
    title: "Amplifique Seu Propósito Para Elevar Seu Impacto",
    edition: "GLS 2024–2025",
    duration: "17:48",
    bio: "Fundadora do Ezer Collective, iniciativa dedicada a investir estrategicamente em mulheres líderes ao redor do mundo. Atualmente Diretora Executiva do The 25 na Bethel University, programa de desenvolvimento para líderes emergentes. Filha de pais nigerianos, criada em Londres, Jo traz uma perspectiva global e multicultural única para o desenvolvimento de liderança. Coapresentadora do “The Lead Stories Podcast” e autora de vários livros, incluindo “Ready to Rise”, sobre como líderes encontram e amplificam sua voz.",
    temaCentral: "A palavra 'voz' vem da mesma raiz latina de 'vocação'. Quando líderes perdem sua voz — seu senso de propósito e direção —, ela não desapareceu: está danificada por trauma, estresse crônico e hábitos destrutivos. Ampliar o propósito para elevar o impacto começa por cuidar da saúde interior que sustenta tudo que é visível externamente.",
    sinopse: [
        "Jo Saxton inicia com uma etimologia reveladora: a palavra 'voice' (voz) em inglês vem do latim 'vox', da mesma família de 'vocation' (vocação). Essa conexão linguística aponta para uma verdade profunda sobre liderança: a voz de um líder — sua capacidade de articular visão, influenciar pessoas e agir com propósito — está intimamente ligada à sua vocação, ao chamado que organiza toda a sua vida.",
        "A palestra explora por que tantos líderes chegam a um ponto em que sua voz parece diminuída ou silenciada: trauma não processado, esgotamento crônico, comparação com outros, vozes internas críticas e a cultura de performance que recompensa a aparência de saúde enquanto negligencia a saúde real. Saxton identifica esses 'ladrões de voz' com a precisão de quem trabalhou com milhares de líderes em diferentes continentes.",
        "O caminho para amplificar o propósito, segundo Saxton, não começa por estratégia ou visibilidade externa, mas pela recuperação da saúde interior: silêncio, comunidade, mentoria, processamento de feridas e alinhamento entre identidade e chamado. A palestra é um convite corajoso para que líderes parem de tentar amplificar um sinal fraco e invistam na antena — sua vida interior."
    ],
    softSkills: [
        "Consciência de propósito",
        "Saúde interior do líder",
        "Recuperação da voz",
        "Vulnerabilidade como força",
        "Autodiscernimento",
        "Liderança a partir da autenticidade",
        "Cuidado com a saúde emocional"
    ],
    palavrasChave: [
        "propósito",
        "voz",
        "vocação",
        "saúde interior",
        "impacto",
        "liderança feminina",
        "trauma",
        "esgotamento",
        "autenticidade",
        "desenvolvimento pessoal"
    ],
    takeaways: [
        "Voz e vocação têm a mesma raiz — a voz do líder expressa o propósito que organiza sua liderança.",
        "Líderes que perdem a voz não a perderam — ela está danificada e precisa de cuidado, não de substituição.",
        "Trauma, esgotamento e comparação são os principais 'ladrões de voz' que líderes precisam identificar.",
        "Amplificar o impacto externo sem cuidar da saúde interior é como aumentar o volume de um sinal distorcido.",
        "A saúde interior — silêncio, comunidade, mentoria — é a condição necessária para qualquer impacto duradouro.",
        "Líderes que se conhecem profundamente lideram a partir de um lugar de força, não de medo ou aprovação.",
        "Investir no desenvolvimento de outros líderes é uma das formas mais poderosas de amplificar o próprio propósito."
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "Clareza de propósito",
                    percent: 92,
                    descricao: "Saxton oferece um caminho profundo e prático para líderes recuperarem e amplificarem seu senso de propósito e vocação."
                },
                {
                    label: "Impacto sustentável",
                    percent: 87,
                    descricao: "A palestra demonstra que impacto duradouro exige fundação interior sólida — não apenas estratégia e visibilidade externa."
                }
            ]
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Saúde interior do líder",
                    percent: 90,
                    descricao: "O cuidado com a vida interior é apresentado como competência central de liderança, não como luxo periférico."
                },
                {
                    label: "Autenticidade e identidade",
                    percent: 85,
                    descricao: "Saxton desafia líderes a liderar a partir de quem realmente são, não de quem acham que deveriam ser."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Reflexiva e transformadora" },
        { label: "Estilo", value: "Narrativo e pastoral" },
        { label: "Aplicabilidade", value: "Alta — convida a mudanças de dentro para fora" },
        { label: "Intensidade conceitual", value: "Média-alta" }
    ]
},

// Joni Eareckson — O Paradoxo de Liderar a Partir de Sua Fraqueza (GLS 2024–2025)
gls24_9: {
    speaker: "Joni Eareckson",
    speakerPhoto: "/speakers/joni-eareckson-tada.png",
    title: "O Paradoxo de Liderar a Partir de Sua Fraqueza",
    edition: "GLS 2024–2025",
    duration: "20:36",
    bio: "Líder global reconhecida na defesa dos direitos das pessoas com deficiência. Após um acidente de mergulho em 1967 que a deixou tetraplégica aos 17 anos, Joni dedicou décadas a ajudar outros a encontrar propósito e dignidade em meio ao sofrimento. CEO da Joni and Friends, organização presente em dezenas de países. Durante seu mandato no Conselho Nacional de Deficiência dos EUA, a histórica Lei dos Americanos com Deficiência (ADA) foi aprovada. Recebeu o Prêmio William Wilberforce e o Prêmio de Realização de Vida da Christian Leadership Alliance.",
    temaCentral: "O paradoxo central da liderança: a fraqueza não é um obstáculo ao impacto genuíno, mas o próprio caminho para ele. A tetraplegia de Joni não a impediu de liderar — foi precisamente o que deu autenticidade, profundidade e alcance global à sua liderança transformadora.",
    sinopse: [
        "Joni Eareckson Tada traz para o palco do GLS uma das histórias de liderança mais improváveis e poderosas da história contemporânea. Tetraplégica há mais de cinco décadas, Joni questiona diretamente a premissa implícita de quase toda literatura de liderança: que liderar exige força, saúde, capacidade plena e superação das fraquezas. Sua vida é a evidência viva de que o pressuposto está errado.",
        "A palestra explora o paradoxo com precisão clínica: quando líderes escondem suas fraquezas, criam uma distância artificial com aqueles que lideram. Quando as revelam com autenticidade, constroem confiança que nenhuma competência técnica pode gerar. Joni demonstra, com décadas de evidência empírica, que a vulnerabilidade estratégica não é fraqueza — é a forma mais sofisticada de força.",
        "O encerramento é um desafio direto a cada líder: qual é a fraqueza que você está escondendo que, se revelada com coragem, poderia se tornar o ponto de conexão mais poderoso com as pessoas que você lidera? Joni oferece não respostas fáceis, mas a perspectiva transformadora de quem aprendeu — através de décadas de sofrimento real — que a liderança mais autêntica nasce exatamente onde esperamos encontrar apenas limitação."
    ],
    softSkills: [
        "Vulnerabilidade estratégica",
        "Resiliência profunda",
        "Autenticidade radical",
        "Liderança pelo exemplo",
        "Propósito através do sofrimento",
        "Conexão humana genuína",
        "Coragem de ser visto"
    ],
    palavrasChave: [
        "fraqueza",
        "paradoxo da liderança",
        "vulnerabilidade",
        "autenticidade",
        "deficiência",
        "resiliência",
        "propósito",
        "sofrimento",
        "impacto"
    ],
    takeaways: [
        "Fraqueza não é obstáculo à liderança — pode ser o fundamento mais poderoso para o impacto genuíno.",
        "Líderes que escondem fraquezas criam distância; os que as revelam com autenticidade constroem confiança.",
        "A vulnerabilidade estratégica é a forma mais sofisticada de força na liderança.",
        "Sofrimento vivido com propósito gera uma autoridade moral que nenhuma conquista pode substituir.",
        "O que consideramos limitação pode ser exatamente o que nos torna únicos e indispensáveis.",
        "Conexão humana genuína nasce da honestidade sobre nossa humanidade compartilhada — incluindo as fraquezas.",
        "Líderes que lideraram a partir de suas fraquezas constroem legados que transcendem suas circunstâncias."
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Autenticidade e vulnerabilidade",
                    percent: 93,
                    descricao: "Joni representa a expressão mais radical de liderança autêntica — vivida e ensinada a partir de décadas de vulnerabilidade real."
                },
                {
                    label: "Identidade além das circunstâncias",
                    percent: 89,
                    descricao: "A palestra desafia líderes a construírem sua identidade e autoridade em algo mais profundo que conquistas e capacidades."
                }
            ]
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "Resiliência transformadora",
                    percent: 91,
                    descricao: "A história de Joni é a evidência máxima de que resiliência não é apenas sobrevivência, mas transformação de circunstâncias adversas em plataforma de impacto."
                },
                {
                    label: "Propósito através do sofrimento",
                    percent: 86,
                    descricao: "Joni demonstra como encontrar e sustentar propósito mesmo nas circunstâncias mais desafiadoras — uma habilidade central para qualquer líder."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Testemunhal e transformadora" },
        { label: "Estilo", value: "Narrativo e provocativo" },
        { label: "Aplicabilidade", value: "Alta — mudança de perspectiva profunda" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Kindra Hall — Aproveite o Poder da História (GLS 2024–2025)
gls24_10: {
    speaker: "Kindra Hall",
    speakerPhoto: "/speakers/kindra-hall.png",
    title: "Aproveite o Poder da História",
    edition: "GLS 2024–2025",
    duration: "28:30",
    bio: "Autora best-seller e ex-diretora de narrativas da Success Magazine. Especialista de referência em storytelling aplicado aos negócios, reconhecida pela Gartner e pela Forbes. Seu livro de estreia “Stories that Stick” foi descrito como “possivelmente o livro de negócios mais valioso que você lerá”. Seu mais recente livro, “The Story Edge”, lançado em 2024, aprofunda como líderes podem usar histórias como vantagem competitiva. Ajudou marcas globais como Target, Univision, United Way, USO e Farmers Insurance a transformar sua comunicação através da narrativa.",
    temaCentral: "Histórias são a ponte que leva pessoas do caos à clareza, do ceticismo à confiança, da indiferença ao engajamento. O poder de uma história bem contada pode transformar radicalmente como líderes se comunicam, influenciam e criam conexão genuína com suas equipes, clientes e comunidades.",
    sinopse: [
        "Kindra Hall abre com uma premissa neurológica: o cérebro humano não é projetado para processar dados e argumentos lógicos com a mesma eficiência com que processa histórias. Essa assimetria cognitiva é a chave para entender por que líderes que dominam o storytelling têm uma vantagem de influência que transcende habilidades técnicas, posição hierárquica ou volume de recursos.",
        "A palestra apresenta o framework de Hall para identificar, estruturar e contar histórias que funcionam em contextos de liderança: histórias de fundação que constroem credibilidade, histórias de valor que demonstram impacto, histórias de conexão que criam vínculos emocionais, e histórias de visão que mobilizam pessoas em direção a um futuro comum. Cada tipo de história serve a um propósito específico na paleta do líder-narrador.",
        "Com exemplos de campanhas reais, momentos de liderança e situações do cotidiano corporativo, Hall demonstra que storytelling não é um dom raro — é uma habilidade que pode ser desenvolvida sistematicamente. O encerramento desafia cada participante a identificar a história que está esperando para ser contada e que poderia mudar o nível de influência e conexão de sua liderança."
    ],
    softSkills: [
        "Storytelling estratégico",
        "Comunicação persuasiva",
        "Conexão emocional",
        "Escuta narrativa",
        "Influência através de histórias",
        "Construção de credibilidade",
        "Comunicação de visão"
    ],
    palavrasChave: [
        "storytelling",
        "narrativa",
        "comunicação",
        "influência",
        "conexão",
        "persuasão",
        "liderança",
        "engajamento",
        "confiança",
        "impacto"
    ],
    takeaways: [
        "O cérebro humano processa histórias de forma mais eficiente do que dados — isso cria uma vantagem de influência para líderes que dominam o storytelling.",
        "Existem tipos diferentes de histórias para diferentes objetivos de liderança: credibilidade, valor, conexão e visão.",
        "Storytelling não é dom — é habilidade que pode ser desenvolvida sistematicamente por qualquer líder.",
        "Histórias levam pessoas do ceticismo à confiança com uma eficiência que argumentos racionais raramente alcançam.",
        "A história que você conta sobre sua organização determina quem se junta a ela e por quê.",
        "Líderes que dominam o storytelling têm 'The Story Edge' — uma vantagem competitiva de influência.",
        "Cada líder tem histórias esperando para ser contadas — encontrá-las e estruturá-las é uma habilidade de alto impacto."
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "Storytelling como ferramenta de liderança",
                    percent: 95,
                    descricao: "A palestra oferece um framework completo e prático para líderes desenvolverem e usarem histórias como seu principal instrumento de influência."
                },
                {
                    label: "Persuasão narrativa",
                    percent: 91,
                    descricao: "Hall demonstra como histórias bem construídas superam argumentos racionais na capacidade de mover pessoas à ação."
                }
            ]
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "Construção de confiança",
                    percent: 84,
                    descricao: "Histórias autênticas são apresentadas como o caminho mais eficaz para construir confiança em equipes e com clientes."
                },
                {
                    label: "Conexão cultural",
                    percent: 79,
                    descricao: "A narrativa é posicionada como ferramenta central para criar e manter culturas organizacionais coesas e com propósito compartilhado."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prática e inspiracional" },
        { label: "Estilo", value: "Narrativo e didático" },
        { label: "Aplicabilidade", value: "Muito alta — framework imediatamente aplicável" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Krish Kandiah — Reputação: Como Você Quer Ser Lembrado Como Líder (GLS 2024–2025)
gls24_11: {
    speaker: "Krish Kandiah",
    speakerPhoto: "/speakers/krish-kandiah.png",
    title: "Reputação: Como Você Quer Ser Lembrado Como Líder",
    edition: "GLS 2024–2025",
    duration: "31:51",
    bio: "Empreendedor social com trajetória notável na fundação de instituições de caridade, mobilização de comunidades ao redor de causas urgentes e promoção de mudanças sistêmicas. Especialista global em reforma do sistema de acolhimento infantil, integração de refugiados e inovação educacional. Leciona na Universidade de Oxford e assessora o governo do Reino Unido em políticas sociais. Cuidador temporário de crianças em situação de vulnerabilidade e defensor incansável dos mais frágeis.",
    temaCentral: "A confiança nos líderes está em seu nível historicamente mais baixo. A reputação não é construída pela imagem pública cuidadosamente gerenciada, mas por autenticidade, integridade e vulnerabilidade — especialmente pela forma como ficamos conhecidos pelas pessoas mais próximas e pelas mais vulneráveis.",
    sinopse: [
        "Krish Kandiah abre com um dado que deve preocupar qualquer líder: a confiança institucional e pessoal nas figuras de liderança nunca esteve tão baixa. Em um momento em que a autoridade formal perde credibilidade, a reputação — construída pela consistência entre valores e ações — torna-se o único ativo verdadeiramente valioso que um líder possui.",
        "A palestra desconstrói a ideia de que reputação é sinônimo de imagem pública. Kandiah, que trabalha com populações vulneráveis e sabe o que é ser julgado por quem nada tem a ganhar sendo gentil, propõe que a verdadeira reputação de um líder é revelada em duas situações: como ele é percebido por quem está mais próximo (família, equipe direta, colaboradores que conhecem os bastidores) e como ele trata os mais vulneráveis e invisíveis.",
        "Com histórias de sua experiência como cuidador temporário e assessor de políticas públicas, Kandiah apresenta práticas concretas para construir uma reputação que resiste ao escrutínio: consistência entre o público e o privado, humildade que reconhece erros, compromisso com os invisíveis e a disposição de ser vulnerável mesmo quando a posição permitiria a performance de invulnerabilidade."
    ],
    softSkills: [
        "Integridade consistente",
        "Autenticidade no contexto público e privado",
        "Humildade diante do erro",
        "Compromisso com os vulneráveis",
        "Construção de confiança",
        "Transparência intencional",
        "Liderança ética"
    ],
    palavrasChave: [
        "reputação",
        "confiança",
        "integridade",
        "autenticidade",
        "vulnerabilidade",
        "liderança ética",
        "consistência",
        "impacto social",
        "legado"
    ],
    takeaways: [
        "A confiança nos líderes está em crise — reputação genuína é o único ativo que pode reconstruí-la.",
        "Reputação não é imagem gerenciada — é o que as pessoas mais próximas e mais vulneráveis dizem sobre você.",
        "A consistência entre o público e o privado é o maior indicador de integridade de um líder.",
        "Como um líder trata os invisíveis — aqueles que nada têm a oferecer em troca — revela seu verdadeiro caráter.",
        "Humildade que reconhece erros publicamente é mais poderosa para a reputação do que nunca errar.",
        "Vulnerabilidade intencional — revelar humanidade real — cria confiança que a performance de perfeição nunca alcança.",
        "A reputação de longo prazo é construída por pequenas decisões diárias, não por grandes gestos estratégicos."
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "Reputação como legado",
                    percent: 90,
                    descricao: "Kandiah posiciona a reputação como a expressão mais honesta do legado de um líder — o que permanece depois que a posição e os títulos são removidos."
                },
                {
                    label: "Impacto nos vulneráveis",
                    percent: 85,
                    descricao: "O compromisso com os mais vulneráveis é apresentado como o marcador mais confiável do verdadeiro impacto de uma liderança."
                }
            ]
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "Integridade como prática",
                    percent: 88,
                    descricao: "A palestra oferece ferramentas concretas para cultivar integridade — não como valor abstrato, mas como prática diária verificável."
                },
                {
                    label: "Autenticidade no poder",
                    percent: 83,
                    descricao: "Kandiah desafia líderes a manterem autenticidade mesmo quando a posição oferece proteção confortável pela performance."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Reflexiva e ética" },
        { label: "Estilo", value: "Narrativo e desafiador" },
        { label: "Aplicabilidade", value: "Alta — práticas concretas de integridade" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Marcus Buckingham — Liberte a Força Mais Poderosa nos Negócios (GLS 2024–2025)
gls24_12: {
    speaker: "Marcus Buckingham",
    speakerPhoto: "/speakers/marcus-buckingham.png",
    title: "Liberte a Força Mais Poderosa nos Negócios",
    edition: "GLS 2024–2025",
    duration: "34:31",
    bio: "Um dos principais pesquisadores globais sobre pontos fortes, liderança e alto desempenho. Após duas décadas na Gallup Organization e a co-criação do StrengthsFinder, fundou empresa de software para desenvolvimento de líderes. Atualmente lidera estudos globais de engajamento e performance no ADP Research Institute. Autor de dois dos livros de negócios mais vendidos de todos os tempos, com artigos seminais na Harvard Business Review. Seu livro “Love + Work” revela o papel transformador do amor no desempenho organizacional.",
    temaCentral: "A força mais poderosa nos negócios não é a inteligência artificial, a eficiência dos processos ou a escala tecnológica — é o amor: a capacidade singular de ver, valorizar e liberar a singularidade de cada pessoa. Em 2024, nenhuma instituição global alcançou confiança de mais de 15% das pessoas. A solução está em líderes que constroem culturas onde cada indivíduo se sente verdadeiramente visto.",
    sinopse: [
        "Marcus Buckingham abre com uma estatística perturbadora: os dados globais do ADP Research Institute mostram que, em 2024, nenhuma instituição — governos, empresas, organizações religiosas, mídia — alcançou a confiança de mais de 15% da população global. Essa crise de confiança sem precedentes não é um problema de comunicação ou de relações públicas — é um sintoma de líderes que perderam a capacidade de realmente ver as pessoas.",
        "A palestra apresenta a tese central de Buckingham com a profundidade de décadas de pesquisa: a força mais poderosa nos negócios é o amor — especialmente na forma da atenção específica que um líder dá à singularidade de cada membro de sua equipe. Não o amor romântico, mas o amor como ato de percepção radical: ver o que é específico, especial e irrepetível em cada pessoa e criar as condições para que isso floresça.",
        "Com dados, histórias e o framework de pontos fortes que Buckingham desenvolveu ao longo de três décadas, a palestra demonstra que equipes onde os membros sentem que seus pontos fortes são vistos e usados diariamente têm engajamento sete vezes maior, produtividade significativamente mais alta e retenção dramaticamente superior. A conclusão é provocadora: liberar a força mais poderosa nos negócios não exige tecnologia — exige atenção humana intencional."
    ],
    softSkills: [
        "Liderança centrada em pontos fortes",
        "Atenção individualizada",
        "Construção de confiança",
        "Visão da singularidade das pessoas",
        "Liderança com amor intencional",
        "Engajamento de equipes",
        "Desenvolvimento humano"
    ],
    palavrasChave: [
        "pontos fortes",
        "amor no trabalho",
        "engajamento",
        "confiança",
        "singularidade",
        "liderança",
        "cultura organizacional",
        "alta performance",
        "desenvolvimento de pessoas"
    ],
    takeaways: [
        "A força mais poderosa nos negócios é o amor — a atenção específica à singularidade de cada pessoa.",
        "Em 2024, nenhuma instituição global alcançou confiança de mais de 15% das pessoas — isso é uma crise de liderança.",
        "Líderes que veem e nomeiam os pontos fortes específicos de cada pessoa criam engajamento extraordinário.",
        "O oposto de amor no trabalho não é ódio — é indiferença, a incapacidade de ver a singularidade do outro.",
        "Equipes cujos membros usam pontos fortes diariamente têm desempenho e retenção dramaticamente superiores.",
        "Liberar a força mais poderosa nos negócios não exige tecnologia — exige atenção humana intencional.",
        "A crise de confiança global só será resolvida por líderes que constroem culturas onde as pessoas se sentem verdadeiramente vistas."
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "Desenvolvimento baseado em pontos fortes",
                    percent: 95,
                    descricao: "Buckingham apresenta décadas de pesquisa demonstrando que culturas baseadas em pontos fortes superam dramaticamente culturas baseadas na correção de fraquezas."
                },
                {
                    label: "Construção de confiança organizacional",
                    percent: 90,
                    descricao: "A palestra oferece uma resposta direta à crise global de confiança: líderes que veem a singularidade de cada pessoa constroem confiança irresistível."
                }
            ]
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "Alocação estratégica de talentos",
                    percent: 83,
                    descricao: "Ver e alocar pessoas de acordo com seus pontos fortes é uma decisão estratégica com impacto mensurável no desempenho organizacional."
                },
                {
                    label: "Gestão de alta performance",
                    percent: 79,
                    descricao: "O framework de pontos fortes oferece uma abordagem estratégica para elevar a performance de equipes de forma sustentável."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Baseada em pesquisa e inspiracional" },
        { label: "Estilo", value: "Analítico e provocativo" },
        { label: "Aplicabilidade", value: "Muito alta — mudança imediata de comportamento" },
        { label: "Intensidade conceitual", value: "Média-alta" }
    ]
},

// Michael Jr. — Engraçado Como o Conflito Funciona (GLS 2024–2025)
gls24_13: {
    speaker: "Michael Jr.",
    speakerPhoto: "/speakers/michael-jr.png",
    title: "Engraçado Como o Conflito Funciona",
    edition: "GLS 2024–2025",
    duration: "19:10",
    bio: "Um dos comunicadores e comediantes mais talentosos e de maior impacto da atualidade. Sua comédia, que combina humor genuíno e clareza de propósito, já o levou a palcos como TEDx, The Tonight Show com Jay Leno e Jimmy Kimmel Live. Com sua esposa Ebony, tem como objetivo pessoal alcançar um milhão de casamentos fortalecidos. Aparece em filmes de grande alcance como War Room e Selfie Dad. Autor do best-seller “Funny How Life Works”, sobre como o humor pode ser usado como ferramenta de transformação.",
    temaCentral: "E se os conflitos fossem a chave para a paz — não o problema a ser eliminado, mas o combustível necessário para o crescimento, a clareza e o propósito? Uma nova perspectiva sobre o conflito pode transformar radicalmente como líderes, equipes e relacionamentos operam.",
    sinopse: [
        "Michael Jr. começa com o que parece ser uma pergunta simples: e se o conflito não fosse o inimigo? Com o talento único de um comediante que usa o humor como ferramenta de revelação, ele desconstrui a premissa de que ambientes saudáveis são ambientes sem tensão. A realidade, demonstra Michael Jr., é que o conflito gerenciado bem é o principal catalisador de crescimento em qualquer organização ou relacionamento.",
        "A palestra percorre diferentes tipos de conflito — interno, interpessoal, organizacional — e demonstra como cada um deles, quando visto através de uma nova lente, revela informações valiosas que o conforto nunca poderia oferecer. Michael Jr. usa humor, histórias pessoais e o framework da comédia (setup e punch line) para mostrar que a tensão do conflito, como a tensão de uma boa piada, é o que gera o momento de revelação.",
        "O encerramento convida líderes a mudarem sua relação com o conflito: de algo a ser evitado ou gerenciado minimamente para algo a ser acolhido como dado importante sobre onde crescimento é necessário. Michael Jr. oferece ferramentas práticas e contraintuitivas — muitas delas derivadas da sua experiência em comédia — para transformar a narrativa interna sobre conflito de ameaça em oportunidade."
    ],
    softSkills: [
        "Gestão construtiva de conflitos",
        "Perspectiva e reencadramento",
        "Comunicação com humor e clareza",
        "Resiliência diante da tensão",
        "Empatia estratégica",
        "Inteligência emocional",
        "Crescimento através do desconforto"
    ],
    palavrasChave: [
        "conflito",
        "humor",
        "crescimento",
        "perspectiva",
        "comunicação",
        "transformação",
        "propósito",
        "liderança",
        "reencadramento"
    ],
    takeaways: [
        "O conflito não é o inimigo — é informação sobre onde crescimento é necessário.",
        "Ambientes sem tensão não são saudáveis — são estagnados.",
        "A perspectiva sobre o conflito determina se ele destrói ou catalisa crescimento.",
        "Humor e leveza não trivializam conflitos — eles criam espaço seguro para verdades difíceis.",
        "Assim como a tensão de uma boa piada é o que gera o insight, a tensão do conflito é o que gera clareza.",
        "Líderes que acolhem conflito como dado valioso têm culturas mais honestas e resilientes.",
        "Mudar a narrativa interna sobre conflito — de ameaça para oportunidade — é uma habilidade de liderança fundamental."
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "Comunicação em situações de tensão",
                    percent: 88,
                    descricao: "Michael Jr. oferece ferramentas práticas para líderes comunicarem com clareza e humor em momentos de conflito."
                },
                {
                    label: "Perspectiva e reencadramento",
                    percent: 84,
                    descricao: "A capacidade de reencadrar conflitos como oportunidades é apresentada como habilidade de comunicação e liderança de alto impacto."
                }
            ]
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "Gestão de conflitos em equipes",
                    percent: 86,
                    descricao: "A palestra oferece uma nova perspectiva sobre como tratar conflitos em equipes — não como falhas culturais, mas como indicadores de saúde e crescimento."
                },
                {
                    label: "Culturas de honestidade",
                    percent: 80,
                    descricao: "Líderes que acolhem conflito criam culturas onde as pessoas se sentem seguras para dizer verdades difíceis — um marcador essencial de confiança."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional e contraintuitiva" },
        { label: "Estilo", value: "Humorístico e narrativo" },
        { label: "Aplicabilidade", value: "Alta — mudança de perspectiva imediata" },
        { label: "Intensidade conceitual", value: "Baixa-média" }
    ]
},

// Mike Krzyzewski — Vitória por Meio do Trabalho em Equipe (GLS 2024–2025)
gls24_14: {
    speaker: "Mike Krzyzewski",
    speakerPhoto: "/speakers/mike-krzyzewski.png",
    title: "Vitória por Meio do Trabalho em Equipe",
    edition: "GLS 2024–2025",
    duration: "31:17",
    bio: "Lendário treinador de basquete da Universidade de Duke — conhecido mundialmente como Coach K —, com 1.202 vitórias na NCAA, 13 participações em Final Fours e cinco títulos nacionais. Liderou a seleção olímpica dos Estados Unidos a três medalhas de ouro consecutivas (2008, 2012, 2016). Formado na Academia Militar de West Point, integrante do Hall da Fama do Basquete. Cofundador do Coach K Center on Leadership and Ethics e professor de liderança na Fuqua School of Business da Universidade de Duke.",
    temaCentral: "Liderança é a profissão mais fascinante do mundo. Os três pilares da liderança de alta performance são agilidade, comunicação e clareza de propósito. A vitória consistente — em quadras, organizações e vidas — não vem da genialidade do líder, mas da qualidade do trabalho em equipe que ele cultiva e conduz.",
    sinopse: [
        "Coach K traz para o GLS a sabedoria destilada de mais de quatro décadas treinando alguns dos melhores atletas e líderes do mundo — e uma convicção central: o líder não ganha sozinho. Com um histórico incomparável de vitórias tanto em nível universitário quanto olímpico, Krzyzewski tem autoridade única para falar sobre o que realmente diferencia equipes que vencem de equipes que apenas jogam.",
        "A palestra explora os três pilares da liderança que Coach K identificou ao longo de sua carreira: agilidade — a capacidade de adaptar estratégia, comunicação e estilo de acordo com o momento, o adversário e as pessoas; comunicação — a habilidade de transmitir verdade com amor, clareza sem crueldade e expectativas sem ambiguidade; e clareza de propósito — o 'por quê' que sustenta a equipe quando os resultados são adversos e a pressão é máxima.",
        "Com histórias do vestiário olímpico, de Final Fours e de momentos de crise com atletas, Coach K demonstra que trabalho em equipe não é um valor abstrato — é uma competência que se cultiva através de rituais, conversas difíceis, transparência radical e a disposição do líder de ser o primeiro a demonstrar vulnerabilidade. O encerramento é um desafio: como você está conduzindo sua equipe hoje?"
    ],
    softSkills: [
        "Construção de coesão de equipe",
        "Comunicação direta e amorosa",
        "Agilidade de liderança",
        "Propósito compartilhado",
        "Liderança situacional",
        "Resiliência em adversidade",
        "Gestão de alta performance"
    ],
    palavrasChave: [
        "trabalho em equipe",
        "liderança",
        "agilidade",
        "comunicação",
        "propósito",
        "alta performance",
        "coesão",
        "vitória",
        "esportes e negócios"
    ],
    takeaways: [
        "Liderança é a profissão mais fascinante e responsável do mundo — e o líder não ganha sozinho.",
        "Agilidade é a capacidade de adaptar estilo e estratégia sem perder a clareza de valores.",
        "Comunicação eficaz no esporte de elite — e nos negócios — é direta, clara e fundamentada em respeito.",
        "Clareza de propósito é o que sustenta equipes quando os resultados são adversos e a pressão é máxima.",
        "Trabalho em equipe não é um valor abstrato — é uma competência cultivada por rituais e conversas difíceis.",
        "O líder que demonstra vulnerabilidade primeiro cria o espaço para que a equipe faça o mesmo.",
        "Vitória consistente é resultado de cultura de alta performance construída sobre confiança e responsabilidade mútua."
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "Construção de equipes de alta performance",
                    percent: 93,
                    descricao: "Coach K oferece um framework testado em décadas de liderança esportiva de elite para construir equipes que vencem de forma consistente."
                },
                {
                    label: "Cultura de confiança e responsabilidade",
                    percent: 88,
                    descricao: "A palestra demonstra como criar culturas onde a confiança e a responsabilidade mútua se reforçam para produzir alta performance."
                }
            ]
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "Agilidade estratégica",
                    percent: 85,
                    descricao: "A agilidade de adaptar estratégia sem perder clareza de propósito é explorada com exemplos concretos de liderança esportiva de alto nível."
                },
                {
                    label: "Execução sob pressão",
                    percent: 82,
                    descricao: "Coach K demonstra como equipes treinadas para executar sob pressão máxima são construídas através de cultura, não apenas de habilidade técnica."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com aplicação prática" },
        { label: "Estilo", value: "Narrativo e didático" },
        { label: "Aplicabilidade", value: "Alta — princípios transferíveis para qualquer contexto" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Molly Fletcher — Impulso Dinâmico (GLS 2024–2025)
gls24_15: {
    speaker: "Molly Fletcher",
    speakerPhoto: "/speakers/molly-fletcher.png",
    title: "Impulso Dinâmico",
    edition: "GLS 2024–2025",
    duration: "32:57",
    bio: "Uma das primeiras e mais bem-sucedidas mulheres agentes esportivas do mundo. Durante sua carreira como presidente da CSE, negociou mais de 500 milhões de dólares em contratos e representou nomes lendários como John Smoltz, Matt Kuchar e Doc Rivers. Uma das 50 principais palestrantes do mundo, com mais de um milhão de visualizações no TED Talk. Fundadora da Game Changer Performance Group. Autora de cinco livros, incluindo o mais recente “Dynamic Drive”, que explora a ciência e a prática do impulso sustentável.",
    temaCentral: "O talento por si só não basta — o que diferencia os melhores não é a intensidade do esforço, mas a qualidade do impulso: um tipo específico de motivação sustentável, alimentada por propósito claro, que mantém o foco no que realmente importa e gera legado ao longo do tempo.",
    sinopse: [
        "Molly Fletcher abre com uma provocação nascida de décadas negociando com e ao lado dos maiores atletas e treinadores do mundo: o diferencial entre os bons e os melhores não é o talento — é o impulso. Mas não qualquer impulso: o 'impulso dinâmico' que Molly descreve é aquele que nasce de propósito, se sustenta por valores e se renova continuamente, em vez de queimar rápido e deixar exaustão e vazio.",
        "A palestra mapeia os elementos do impulso dinâmico com a precisão de quem observou centenas de atletas e executivos de elite ao longo de décadas: a clareza de propósito que orienta o esforço, os rituais que renovam a energia, a capacidade de reaprender que evita a estagnação, a gestão de relacionamentos que multiplica o impulso e a disposição de abraçar o desconforto como caminho inevitável para o crescimento.",
        "Com histórias de nos bastidores do esporte profissional e do mundo corporativo, Molly demonstra que o impulso dinâmico não é um traço de personalidade — é um sistema de práticas que qualquer líder pode desenvolver. O encerramento é uma série de perguntas práticas: o que está alimentando seu impulso hoje? O que está drenando? E como você pode reconfigurar ambas as forças para que o impulso seja sustentável e gere legado?"
    ],
    softSkills: [
        "Motivação sustentável",
        "Gestão de energia",
        "Clareza de propósito",
        "Aprendizado contínuo",
        "Resiliência em alta performance",
        "Gestão de relacionamentos estratégicos",
        "Foco no que importa"
    ],
    palavrasChave: [
        "impulso dinâmico",
        "motivação",
        "propósito",
        "alta performance",
        "sustentabilidade",
        "legado",
        "agente esportiva",
        "renovação",
        "foco",
        "crescimento"
    ],
    takeaways: [
        "Talento não é o diferencial — o impulso dinâmico, alimentado por propósito, é o que separa os bons dos melhores.",
        "Impulso sem propósito queima rápido; impulso com propósito se renova e gera legado.",
        "Os melhores atletas e líderes têm sistemas de renovação de energia — não apenas sistemas de produção.",
        "Reaprender continuamente é o antídoto contra a estagnação que acompanha o sucesso.",
        "Relacionamentos estratégicos multiplicam o impulso — os melhores não chegam sozinhos ao topo.",
        "Abraçar o desconforto deliberadamente é a única forma de continuar crescendo quando o sucesso já foi alcançado.",
        "Auditar o que alimenta e o que drena o seu impulso é uma prática de liderança de alto impacto."
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "Sistema de alta performance",
                    percent: 90,
                    descricao: "Fletcher oferece um framework prático e baseado em evidências para construir e manter sistemas de alta performance sustentável."
                },
                {
                    label: "Execução orientada por propósito",
                    percent: 85,
                    descricao: "A palestra demonstra como alinhar execução ao propósito gera resultados mais consistentes e sustentáveis do que esforço puro."
                }
            ]
        },
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "Renovação e reaprendizado",
                    percent: 83,
                    descricao: "A capacidade de se reinventar continuamente — reaprendendo e abraçando o desconforto — é central para o impulso dinâmico que Fletcher descreve."
                },
                {
                    label: "Adaptação em alta performance",
                    percent: 78,
                    descricao: "Fletcher demonstra como os melhores líderes e atletas se adaptam continuamente sem perder o impulso central que os diferencia."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prática e inspiracional" },
        { label: "Estilo", value: "Narrativo e estratégico" },
        { label: "Aplicabilidade", value: "Muito alta — sistema prático imediatamente aplicável" },
        { label: "Intensidade conceitual", value: "Média" }
    ]
},

// Will Guidara — Hospitalidade Irracional (GLS 2024–2025)
gls24_16: {
    speaker: "Will Guidara",
    speakerPhoto: "/speakers/will-guidara.png",
    title: "Hospitalidade Irracional",
    edition: "GLS 2024–2025",
    duration: "34:02",
    bio: "Autor do best-seller internacional “Unreasonable Hospitality”, que redefiniu o conceito de excelência no atendimento ao cliente. Ex-co-proprietário do Eleven Madison Park, restaurante que ele e seu parceiro levaram de lugar desconhecido a conquistar quatro estrelas do New York Times, três estrelas Michelin e o cobiçado título de número 1 na lista dos 50 Melhores Restaurantes do Mundo em 2017. Anfitrião da Welcome Conference, o principal evento sobre hospitalidade do mundo. Formado pela Cornell University.",
    temaCentral: "Hospitalidade irracional é a prática de fazer mais do que o esperado — muito mais — para criar memórias inesquecíveis nas pessoas. O caminho para a excelência organizacional não está apenas em processos perfeitos e produtos impecáveis, mas em criar conexões humanas genuínas que fazem as pessoas se sentirem verdadeiramente vistas, valorizadas e cuidadas.",
    sinopse: [
        "Will Guidara abre com a história do restaurante que se tornaria o melhor do mundo — não por ter a comida mais técnica ou o ambiente mais sofisticado, mas por ter redefinido o que significa genuinamente cuidar das pessoas. Hospitalidade irracional é o ato deliberado e sistemático de ir além do que é contratualmente exigido para criar momentos que as pessoas nunca esquecerão — e que as fazem querer voltar, não pela comida, mas pela forma como se sentiram.",
        "A palestra explora como o princípio da hospitalidade irracional se aplica muito além dos restaurantes: em empresas de tecnologia, organizações sem fins lucrativos, equipes de liderança e qualquer contexto onde pessoas servem outras pessoas. Guidara demonstra, com histórias memoráveis dos bastidores do Eleven Madison Park, que os momentos mais impactantes raramente custam mais do que atenção e criatividade — mas exigem uma cultura organizacional que os torna possíveis.",
        "O encerramento é um desafio para líderes: como você está criando momentos de hospitalidade irracional para as pessoas que você lidera? Para seus clientes? Para sua comunidade? Guidara oferece um framework prático — baseado em escuta profunda, leitura do ambiente e ação criativa — para líderes construírem culturas onde a hospitalidade irracional não é o esforço extra de alguns, mas a expectativa normal de todos."
    ],
    softSkills: [
        "Serviço com excelência",
        "Atenção ao detalhe",
        "Escuta profunda",
        "Criatividade no atendimento",
        "Construção de memórias positivas",
        "Liderança de cultura de excelência",
        "Conexão humana genuína"
    ],
    palavrasChave: [
        "hospitalidade irracional",
        "excelência",
        "serviço",
        "conexão humana",
        "cultura organizacional",
        "liderança",
        "experiência do cliente",
        "memórias",
        "cuidado",
        "além do esperado"
    ],
    takeaways: [
        "Hospitalidade irracional é fazer muito mais do que o esperado para criar memórias inesquecíveis.",
        "Excelência organizacional não nasce de processos perfeitos, mas de conexões humanas genuínas.",
        "Os momentos mais impactantes raramente custam muito — custam atenção, criatividade e intenção.",
        "Culturas de hospitalidade não são criadas por indivíduos excepcionais, mas por líderes que tornam a excelência a expectativa normal.",
        "Escuta profunda — realmente ouvir o que as pessoas precisam, não apenas o que pedem — é o fundamento da hospitalidade.",
        "Líderes que criam experiências inesquecíveis para suas equipes colhem engajamento e lealdade que o salário nunca alcança.",
        "O princípio da hospitalidade irracional se aplica a qualquer contexto onde pessoas servem outras pessoas — incluindo liderança."
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "Cultura de excelência no serviço",
                    percent: 93,
                    descricao: "Guidara demonstra como construir culturas onde a hospitalidade irracional é a norma — não o esforço extra de alguns indivíduos."
                },
                {
                    label: "Conexão humana como diferencial",
                    percent: 89,
                    descricao: "A palestra evidencia que conexões humanas genuínas são o diferencial competitivo mais poderoso e mais difícil de replicar."
                }
            ]
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "Legado através do serviço",
                    percent: 85,
                    descricao: "Guidara demonstra que o legado mais duradouro de qualquer organização é a memória que ela cria nas pessoas que serve."
                },
                {
                    label: "Propósito centrado nas pessoas",
                    percent: 80,
                    descricao: "A hospitalidade irracional é apresentada como expressão prática de um propósito organizacional genuinamente centrado no florescimento humano."
                }
            ]
        }
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional com framework prático" },
        { label: "Estilo", value: "Narrativo e concreto" },
        { label: "Aplicabilidade", value: "Muito alta — aplicável a qualquer contexto de liderança" },
        { label: "Intensidade conceitual", value: "Baixa-média" }
    ]
},


    // ===== gls25-26 =====
// Craig Groeschel — A monotonia é o segredo do sucesso (GLS 2025–2026)
gls25_1: {
    speaker: "Craig Groeschel",
    speakerPhoto: "/speakers/craig-groeschel.png",
    title: "A Monotonia É o Segredo do Sucesso",
    edition: "GLS 2025–2026",
    duration: "40:27",
    bio: "Craig Groeschel é o fundador e pastor principal da Life.Church, reconhecida globalmente como um líder de líderes e três vezes vencedora do Prêmio Gallup de Local de Trabalho Excepcional. Conhecida por sua abordagem missionária no uso da tecnologia, a Life.Church criou a família de aplicativos YouVersion — instalada em quase um bilhão de dispositivos únicos ao redor do mundo. Groeschel também apresenta o Craig Groeschel Leadership Podcast, um dos mais ouvidos globalmente, e é autor best-seller do New York Times.",
    temaCentral:
        "A grandeza na liderança não nasce do carisma nem da fama, mas da disciplina diária, do sacrifício silencioso e do ritmo monótono que, somados à fidelidade ao longo do tempo, produzem um impacto duradouro.",
    sinopse: [
        "Craig Groeschel desafia a visão glamorosa que a maioria dos líderes tem sobre o sucesso. A partir de sua trajetória — de uma garagem com poucos fundadores até uma das igrejas mais influentes dos Estados Unidos — ele demonstra que a liderança extraordinária raramente nasce de momentos épicos, mas de escolhas consistentes repetidas dia após dia.",
        "O cerne da palestra é uma equação simples e poderosa: Consistência + Fidelidade × Tempo = Impacto Duradouro. Groeschel argumenta que a maioria dos líderes quer os resultados de uma grande liderança sem percorrer os passos que ela exige — os holofotes sem os sacrifícios, os melhores momentos sem o trabalho duro. Usando o conceito de 'hábito fundamental' de Charles Duhigg, ele mostra como pequenas ações corretas e repetidas criam uma reação em cadeia que transforma organizações inteiras.",
        "Groeschel encerra com um chamado direto: o que os torna grandes não é o que fazem de vez em quando, mas as coisas certas que fazem consistentemente. Em um mundo obcecado com viralidade e crescimento instantâneo, ele defende que monótono sempre supera brilhante — e que líderes que abraçam essa verdade constroem legados que resistem ao tempo.",
    ],
    softSkills: [
        "Consistência e disciplina diária",
        "Autodisciplina e gestão de hábitos",
        "Fidelidade aos compromissos de longo prazo",
        "Resiliência diante da rotina",
        "Liderança pelo exemplo",
        "Foco estratégico",
        "Paciência para colher resultados no tempo certo",
    ],
    palavrasChave: [
        "consistência",
        "fidelidade",
        "monotonia",
        "hábito fundamental",
        "impacto duradouro",
        "disciplina",
        "liderança sustentável",
        "perseverança",
        "resultados de longo prazo",
    ],
    takeaways: [
        "Grande liderança não é chamativa — é monótona, consistente e fiel.",
        "A fórmula do impacto duradouro é: Consistência + Fidelidade × Tempo.",
        "A consistência fecha a lacuna entre boas intenções e ações reais.",
        "Hábitos fundamentais são pequenas ações corretas que criam reações em cadeia em todas as áreas da organização.",
        "Monótono sempre supera brilhante quando aplicado com integridade ao longo do tempo.",
        "O que nos torna ótimos não é o que fazemos de vez em quando, mas o que fazemos consistentemente.",
        "Líderes que querem os holofotes sem os sacrifícios raramente deixam legado duradouro.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Disciplina, hábitos e consistência",
                    percent: 92,
                    descricao:
                        "A palestra é inteiramente construída em torno da disciplina diária e dos hábitos fundamentais como motores do impacto na liderança.",
                },
                {
                    label: "1.4 Autogestão e integridade ao longo do tempo",
                    percent: 80,
                    descricao:
                        "Groeschel enfatiza que a equação do impacto só funciona quando aplicada 'com integridade ao longo do tempo', conectando autogestão a resultados reais.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.3 Execução disciplinada e foco em prioridades",
                    percent: 78,
                    descricao:
                        "A palestra defende que fazer as coisas certas consistentemente supera estratégias brilhantes executadas de forma irregular.",
                },
                {
                    label: "4.1 Clareza de metas e visão de longo prazo",
                    percent: 70,
                    descricao:
                        "A trajetória da Life.Church de uma garagem a quase um bilhão de usuários ilustra como visão + consistência produzem escala.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em experiência pessoal e princípios práticos" },
        { label: "Estilo", value: "Storytelling pessoal + ensino estruturado com humor" },
        { label: "Aplicabilidade", value: "Alta para líderes de qualquer nível que buscam consistência e resultado sustentável" },
        { label: "Intensidade conceitual", value: "Média (acessível, com profundidade prática)" },
    ],
},

// Juliet Funt — O excesso na liderança (GLS 2025–2026)
gls25_2: {
    speaker: "Juliet Funt",
    speakerPhoto: "/speakers/juliet-funt.png",
    title: "O Excesso na Liderança",
    edition: "GLS 2025–2026",
    duration: "35:25",
    bio: "Juliet Funt é fundadora e CEO da Juliet Funt Group, consultora de empresas da Fortune 500 e presença frequente nos principais veículos de mídia global, incluindo Forbes e Fast Company. Defensora apaixonada da liberação do potencial das organizações ao aliviar suas equipes da sobrecarga de tarefas desnecessárias, ela já apresentou seus conceitos para empresas como Spotify, Nike, Pepsi, Sephora e ESPN. É autora do livro Um Minuto (Harper Collins, 2021).",
    temaCentral:
        "O excesso de projetos, tarefas e comprometimentos obscurece a visão dos líderes e esgota suas equipes — a escolha estratégica de eliminar o desperdício com ousadia é o que permite que a missão venha primeiro.",
    sinopse: [
        "Juliet Funt abre sua palestra com uma metáfora poderosa: os Blue Angels, pilotos da Marinha americana que voam a 45 centímetros um do outro a mais de 1.100 km/h, utilizam o 'Voo em Cadeira' — uma visualização mental precisa da missão — para eliminar qualquer distração antes de decolar. Ela pergunta: os líderes conseguem ver mentalmente para onde estão navegando? Ou sua visão está obscurecida por projetos, planos e tarefas demais?",
        "O diagnóstico central é o que Funt chama de 'excesso na liderança': líderes que acumulam compromissos por hábito ou ego, sem questionar se cada um serve à missão. A solução não é trabalhar mais nem cortar indiscriminadamente, mas desenvolver a capacidade de abrir mão mais rápido — como os líderes militares que fazem cortes sem hesitar quando a missão exige velocidade.",
        "Com exemplos pessoais e empresariais, Funt defende a 'escolha estratégica' como competência central da liderança de alta performance. Líderes que aprendem a eliminar o desperdício com clareza e ousadia liberam capacidade cognitiva, emocional e organizacional para o que realmente importa — e colocam a missão onde ela sempre deveria estar: em primeiro lugar.",
    ],
    softSkills: [
        "Tomada de decisão estratégica",
        "Capacidade de abrir mão e priorizar",
        "Clareza mental sob pressão",
        "Gestão de energia e foco",
        "Coragem para eliminar o supérfluo",
        "Autoconhecimento e reflexão",
        "Liderança orientada à missão",
    ],
    palavrasChave: [
        "excesso",
        "escolha estratégica",
        "foco",
        "missão",
        "priorização",
        "desperdício",
        "liderança de precisão",
        "alta performance",
        "eliminação do supérfluo",
    ],
    takeaways: [
        "O excesso de projetos e compromissos obscurece a visão e esgota as equipes.",
        "Líderes de alta performance sabem abrir mão mais rápido quando a missão exige.",
        "A escolha estratégica é uma competência de liderança, não uma fraqueza.",
        "Clareza mental começa com a eliminação corajosa do que não serve à missão.",
        "Não é o volume de trabalho que define o impacto, mas a precisão das prioridades.",
        "O 'Voo em Cadeira' dos Blue Angels é uma metáfora de visualização e foco que todo líder deveria praticar.",
        "A missão sempre vem em primeiro lugar — tudo o que obscurece esse foco deve ser questionado.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.3 Gestão de energia e prevenção do esgotamento",
                    percent: 85,
                    descricao:
                        "A palestra diagnostica o excesso como causa central do esgotamento e propõe a eliminação estratégica de tarefas como mecanismo de proteção da energia do líder.",
                },
                {
                    label: "6.1 Saúde mental e clareza cognitiva",
                    percent: 78,
                    descricao:
                        "Funt mostra como a sobrecarga de projetos prejudica a clareza mental, usando sua própria experiência com a terapeuta como ilustração.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.2 Priorização e eliminação estratégica",
                    percent: 90,
                    descricao:
                        "O tema central da palestra é exatamente a capacidade de priorizar e eliminar o desperdício com ousadia e clareza como competência estratégica.",
                },
                {
                    label: "4.3 Execução focada e orientada à missão",
                    percent: 80,
                    descricao:
                        "A metáfora dos Blue Angels ilustra como execução de precisão depende de eliminar distrações e concentrar toda a energia na missão.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prática baseada em consultoria com Fortune 500 e experiências militares" },
        { label: "Estilo", value: "Storytelling + insight prático com humor e vulnerabilidade pessoal" },
        { label: "Aplicabilidade", value: "Alta para líderes e gestores que enfrentam sobrecarga e perda de foco estratégico" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},

// Erica Dhawan — Conexão humana na era digital (GLS 2025–2026)
gls25_3: {
    speaker: "Erica Dhawan",
    speakerPhoto: "/speakers/erica-dhawan.png",
    title: "Conexão Humana na Era Digital",
    edition: "GLS 2025–2026",
    duration: "31:14",
    bio: "Erica Dhawan é uma autoridade reconhecida internacionalmente em colaboração e inovação no século XXI, nomeada pela Thinkers50 como a “Oprah dos Pensadores de Gestão”. Criadora do conceito de “inteligência conectiva”, ela aparece regularmente na Harvard Business Review, Fast Company e Wall Street Journal, e já inspirou líderes de Davos, do Exército dos EUA, da Coca-Cola e da Cisco. É autora best-seller e consultora de equipes e organizações globais.",
    temaCentral:
        "Na era das videochamadas, e-mails e mensagens, todos nos tornamos imigrantes da linguagem corporal digital — e os líderes que dominam essa nova gramática de comunicação são os que constroem confiança, engajamento e colaboração autêntica.",
    sinopse: [
        "Erica Dhawan parte de sua própria história: criada como filha de imigrantes indianos em Pittsburgh, ela aprendeu a se conectar através da diferença dominando a leitura da linguagem corporal dos outros. Quarenta anos depois, essa habilidade se tornou a base de sua missão — pois hoje todos somos imigrantes, mas desta vez para o mundo da linguagem corporal digital.",
        "Por meio de exemplos reais, como a troca de e-mails entre Sarah e John — colegas que trabalharam juntos por seis anos mas não conseguiram ler o tom e a intenção um do outro em mensagens digitais — Dhawan demonstra que a comunicação digital cria lacunas invisíveis de interpretação que minam a confiança e a colaboração. Não é o que dizemos, é como dizemos — e no ambiente digital, os sinais não verbais precisam ser reaprendidos.",
        "Dhawan desafia os líderes a deixarem de perguntar 'como vamos nos adaptar ao novo normal?' e passarem a perguntar 'como vamos criar um normal melhor?' Líderes que dominam a nova linguagem digital — aprendendo a transmitir intenção, calor humano e clareza através de telas — são os que constroem as equipes mais engajadas, inovadoras e confiantes da era moderna.",
    ],
    softSkills: [
        "Comunicação digital eficaz",
        "Inteligência conectiva",
        "Escuta ativa em ambientes virtuais",
        "Empatia intercultural",
        "Leitura de sinais não verbais digitais",
        "Construção de confiança à distância",
        "Adaptabilidade à mudança tecnológica",
    ],
    palavrasChave: [
        "inteligência conectiva",
        "linguagem corporal digital",
        "comunicação",
        "confiança",
        "colaboração",
        "trabalho híbrido",
        "equipes remotas",
        "conexão humana",
        "era digital",
    ],
    takeaways: [
        "Todos nos tornamos imigrantes da linguagem corporal digital — e precisamos aprender essa nova gramática.",
        "Não é o que dizemos, é como dizemos — e no digital, os sinais não verbais precisam ser conscientemente reconstruídos.",
        "Lacunas de interpretação em mensagens digitais corroem a confiança mesmo entre colegas de longa data.",
        "Líderes devem parar de se adaptar ao novo normal e começar a criar um normal melhor.",
        "A inteligência conectiva é a habilidade central para construir equipes engajadas na era da IA.",
        "Pequenos sinais digitais — como o tempo de resposta e o tom de um e-mail — carregam mensagens poderosas sobre relacionamento.",
        "Comunicação de precisão digital começa com a consciência de que o receptor não tem acesso ao seu contexto interno.",
    ],
    categorias: [
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.1 Comunicação clara e adaptada ao contexto",
                    percent: 93,
                    descricao:
                        "A palestra é focada inteiramente na comunicação digital e na necessidade de adaptar a linguagem ao novo contexto de trabalho remoto e híbrido.",
                },
                {
                    label: "3.3 Construção de credibilidade e confiança pela comunicação",
                    percent: 85,
                    descricao:
                        "Dhawan demonstra como a linguagem corporal digital impacta diretamente a percepção de confiabilidade e intenção entre colegas.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.2 Construção de confiança em equipes diversas e distribuídas",
                    percent: 82,
                    descricao:
                        "O exemplo de Sarah e John ilustra como a falta de domínio da linguagem digital destrói a confiança em equipes, mesmo quando há anos de relacionamento.",
                },
                {
                    label: "2.4 Colaboração e inteligência coletiva",
                    percent: 75,
                    descricao:
                        "A inteligência conectiva de Dhawan é definida como a capacidade de desbloquear o poder coletivo das equipes por meio de comunicação inteligente.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Conceitual-prática baseada em pesquisa e experiência com grandes organizações" },
        { label: "Estilo", value: "Storytelling pessoal + casos reais + frameworks práticos" },
        { label: "Aplicabilidade", value: "Alta para líderes de equipes híbridas, remotas e multiculturais" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Gabriel Salguero — Liderando no hífen (GLS 2025–2026)
gls25_4: {
    speaker: "Gabriel Salguero",
    speakerPhoto: "/speakers/gabriel-salguero.png",
    title: "Liderando no Hífen",
    edition: "GLS 2025–2026",
    duration: "34:12",
    bio: "O Rev. Gabriel Salguero é pastor da The Gathering Place, uma congregação multiétnica das Assembleias de Deus em Orlando, Flórida, e presidente e fundador da National Latino Evangelical Coalition, uma coalizão de várias milhares de congregações nos Estados Unidos. Jersey-Riquenho — filho de pais porto-riquenhos nascido em New Jersey — ele atuou no White House Faith-Based Advisory Council e foi nomeado pelo New York Times, CNN Español e NBC Universal como um dos líderes evangélicos latinos mais proeminentes dos EUA.",
    temaCentral:
        "O líder hifenizado — aquele que vive na tensão entre identidades, culturas e perspectivas diferentes — é exatamente o tipo de líder que o mundo hiperpolarizado e hiperconflituoso de hoje precisa: construtores de pontes que entendem antes de consertar.",
    sinopse: [
        "Gabriel Salguero abre com humor e identidade: seu nome completo de seis sobrenomes e sua condição de 'Jersey-Riquenho' — um porto-riquenho nascido do 'lado errado' da Ponte George Washington, segundo sua esposa. Mas por trás da leveza está uma convicção profunda: sua vida inteira foi um exercício de tradução, de viver no hífen entre culturas, idiomas, teologias e mundos.",
        "Salguero convoca os líderes a abraçarem o que ele chama de 'liderança hifenizada': a capacidade de viver na tensão entre opostos sem buscar resolução imediata, mas sim maior compreensão. Em um mundo hiperpolarizado, hiperdividido e hiperconflituoso, os líderes que correm para consertar sem primeiro entender frequentemente criam mais problemas. A meta nem sempre é a resolução — é a compreensão.",
        "A partir de sua experiência na ONU, na Casa Branca e em comunidades de refugiados, Salguero desafia os líderes a quebrarem silos e verem a força que a diversidade constrói. Líderes hifenizados transformam diferenças e barreiras em pedras angulares — e esse é precisamente o tipo de liderança que pontes culturais, organizacionais e relacionais exigem.",
    ],
    softSkills: [
        "Inteligência intercultural",
        "Escuta antes da ação",
        "Tolerância à ambiguidade e tensão",
        "Construção de pontes entre grupos diferentes",
        "Empatia estrutural",
        "Liderança em contextos de conflito",
        "Identidade integrada e resiliência cultural",
    ],
    palavrasChave: [
        "liderança hifenizada",
        "diversidade",
        "construção de pontes",
        "tensão criativa",
        "identidade",
        "polarização",
        "compreensão",
        "multiculturalismo",
        "integração",
    ],
    takeaways: [
        "Líderes hifenizados vivem na tensão entre identidades e culturas — e isso é uma força, não uma fraqueza.",
        "Em um mundo polarizado, a meta do líder nem sempre é a resolução imediata, mas a compreensão profunda.",
        "Correr para consertar sem entender frequentemente cria mais problemas do que resolve.",
        "Líderes que resistem ao ímpeto de resolver desenvolvem capacidade de escuta e empatia mais profundas.",
        "A diversidade constrói força quando líderes aprendem a transformar diferenças em pedras angulares.",
        "Não estou confuso — estou integrado: a frase que define a liderança hifenizada.",
        "O mundo precisa de líderes que saibam enfrentar conflitos e viver na tensão sem se despedaçar.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e identidade do líder",
                    percent: 88,
                    descricao:
                        "Salguero ancora toda a palestra em sua própria identidade hifenizada como modelo para líderes que operam entre mundos diferentes.",
                },
                {
                    label: "1.3 Coragem e enfrentamento da tensão",
                    percent: 80,
                    descricao:
                        "A proposta central exige coragem para resistir ao impulso de resolver e permanecer na tensão desconfortável do conflito.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.3 Liderança inclusiva e diversidade cultural",
                    percent: 92,
                    descricao:
                        "A palestra é uma defesa direta da liderança que transforma diversidade étnica, cultural e ideológica em força organizacional.",
                },
                {
                    label: "2.5 Gestão de conflitos e construção de pontes",
                    percent: 85,
                    descricao:
                        "Salguero oferece uma estrutura prática para líderes que precisam navegar conflitos profundos sem perder a integridade relacional.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em experiência pessoal e atuação em contextos de conflito" },
        { label: "Estilo", value: "Storytelling autobiográfico + ensino com humor e profundidade teológica" },
        { label: "Aplicabilidade", value: "Alta para líderes de organizações diversas, contextos multiculturais e ambientes polarizados" },
        { label: "Intensidade conceitual", value: "Média" },
    ],
},

// Thasunda Brown Duckett — Entrevista com David Ashcraft (GLS 2025–2026)
gls25_5: {
    speaker: "Thasunda Brown Duckett",
    speakerPhoto: "/speakers/thasunda-brown-duckett.png",
    title: "Entrevista Com David Ashcraft",
    edition: "GLS 2025–2026",
    duration: "35:06",
    bio: "Thasunda Brown Duckett é presidente e CEO da TIAA, referência global em aposentadoria segura e investimentos de impacto, liderando ativos de mais de US$ 1,6 trilhão. Antes, atuou 17 anos no JPMorgan Chase, onde foi CEO do Consumer Bank e Auto Finance. Em 2024, foi incluída na lista TIME100 das pessoas mais influentes do mundo e reconhecida como CNBC Changemaker. Integra conselhos como NIKE, Inc. e Robert F. Kennedy Human Rights, e fundou a Otis and Rosie Brown Foundation para capacitar quem melhora comunidades.",
    temaCentral:
        "As pessoas veem a glória, mas não conhecem a história — e é exatamente da história vivida, dos valores transmitidos pela família e do propósito de servir que nasce a liderança capaz de criar impacto real e duradouro para todos.",
    sinopse: [
        "Em uma entrevista conduzida por David Ashcraft, Thasunda Brown Duckett revela a origem do seu propósito: recém-formada na faculdade, ela analisou o plano de aposentadoria do pai e detectou um problema — décadas de trabalho duro sem poupança previdenciária adequada. Aquele momento moldou sua missão e lançou uma trajetória que a levaria à liderança de uma das maiores organizações financeiras do mundo.",
        "Duckett narra como sua jornada foi construída sobre os valores de seus pais, Otis e Rosie Brown, e sobre a crença de que liderança não é apenas sobre sucesso pessoal, mas sobre ampliar oportunidades para todos. Como pessoa que nunca teria sonhado com tudo o que alcançou, ela reflete sobre como a autenticidade — 'ser a Thasunda' — foi sua bússola em momentos de pressão e decisão.",
        "A conversa revela uma líder que enxerga segurança financeira como bem social, não apenas produto corporativo, e que usa sua posição para defender equidade, inclusão e dignidade para comunidades historicamente marginalizadas. Seu chamado é claro: não basta ter sucesso — é preciso criar caminhos para que outros também cheguem.",
    ],
    softSkills: [
        "Liderança orientada a propósito",
        "Autenticidade sob pressão",
        "Visão de impacto social",
        "Coragem para ocupar espaços inéditos",
        "Empatia com comunidades vulneráveis",
        "Resiliência pessoal e profissional",
        "Integridade e coerência de valores",
    ],
    palavrasChave: [
        "propósito",
        "impacto social",
        "autenticidade",
        "liderança feminina",
        "equidade financeira",
        "legado familiar",
        "inclusão",
        "segurança financeira",
        "valores",
        "transformação",
    ],
    takeaways: [
        "As pessoas veem a glória, mas não conhecem a história — o propósito nasce das experiências mais pessoais.",
        "Um momento de clareza sobre as necessidades de quem amamos pode definir toda uma missão de vida.",
        "Liderança autêntica é saber quem você é e não abrir mão disso sob pressão.",
        "Não basta ter sucesso — a verdadeira liderança cria caminhos para que outros também cheguem.",
        "Segurança financeira é um bem social: líderes que entendem isso ampliam seu impacto exponencialmente.",
        "Família e valores transmitidos de geração em geração são a fundação de lideranças que transformam instituições.",
        "Ocupar um espaço inédito exige coragem para ser a primeira — e responsabilidade de não ser a última.",
    ],
    categorias: [
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e autenticidade",
                    percent: 90,
                    descricao:
                        "Duckett reitera ao longo da entrevista que sua bússola sempre foi 'ser a Thasunda' — autenticidade como fundamento da liderança.",
                },
                {
                    label: "1.3 Coragem para ocupar posições de pioneirismo",
                    percent: 82,
                    descricao:
                        "Tornar-se CEO de uma das maiores organizações financeiras do mundo como mulher negra exigiu coragem estrutural e pessoal.",
                },
            ],
        },
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.1 Clareza de propósito ancorado em experiência pessoal",
                    percent: 95,
                    descricao:
                        "O plano de aposentadoria do pai como ponto de origem do propósito é um dos exemplos mais nítidos de clareza vocacional apresentados no Summit.",
                },
                {
                    label: "7.3 Legado e impacto comunitário",
                    percent: 88,
                    descricao:
                        "A Otis and Rosie Brown Foundation e o trabalho na TIAA traduzem o legado familiar em estruturas que ampliam oportunidades para milhões.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Entrevista narrativa com liderança executiva de alto nível" },
        { label: "Estilo", value: "Conversa biográfica + reflexão sobre propósito e impacto social" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam alinhar carreira, propósito e impacto social" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional e inspiracional)" },
    ],
},

// Tasha Eurich — Como prosperar quando só resiliência não basta (GLS 2025–2026)
gls25_6: {
    speaker: "Tasha Eurich",
    speakerPhoto: "/speakers/tasha-eurich.png",
    title: "Como Prosperar Quando Só Resiliência Não Basta",
    edition: "GLS 2025–2026",
    duration: "38:08",
    bio: "Tasha Eurich é psicóloga organizacional, pesquisadora e autora best-seller do New York Times, reconhecida como a principal especialista mundial em autoconhecimento e comunicação. Com doutorado em Psicologia Industrial-Organizacional concluído aos 26 anos, trabalhou com clientes como Google, Salesforce, NBA e a Casa Branca. Como diretora do The Eurich Group, ela ajuda executivos a se transformarem quando os desafios são mais altos — sendo, segundo ela mesma, uma reveladora de verdades para algumas das pessoas mais poderosas do mundo.",
    temaCentral:
        "Resiliência — a capacidade de suportar e voltar ao ponto de partida — não é suficiente para prosperar em um mundo de caos constante. O que os líderes precisam é de algo mais profundo: a capacidade de transformar estresse em força e seguir crescendo através das adversidades.",
    sinopse: [
        "Tasha Eurich começa quebrando um mito confortável: até os líderes mais fortes estão se segurando 'com fita adesiva e orações'. A partir de sua própria experiência — um formigamento nos braços que evoluiu para dor intensa, o limite da resiliência após anos de sobrecarrega — ela apresenta a pergunta que mudou sua pesquisa: por que resiliência não basta?",
        "A palestra expõe dois extremos igualmente disfuncionais: Sarah, a líder que trabalha até as 22h incapaz de parar, e Michael, que cortou todas as responsabilidades por medo do burnout e agora se sente desconectado e sem propósito. Nenhum dos dois está prosperando. Eurich propõe que prosperar não é suportar nem fugir — é um estado dinâmico que exige ferramentas específicas para transformar estresse em crescimento.",
        "Com base em pesquisa rigorosa para seu mais recente livro, Eurich entrega ferramentas concretas para que os líderes se tornem 'inquebráveis' — não no sentido de não sentirem dor, mas no sentido de utilizarem a dor como catalisador de desenvolvimento pessoal e profissional. Líderes que prosperam transformam estresse em força.",
    ],
    softSkills: [
        "Autoconsciência em situações de pressão",
        "Regulação emocional",
        "Curiosidade diante da adversidade",
        "Gestão do estresse como recurso",
        "Resiliência adaptativa",
        "Autocompaixão estratégica",
        "Capacidade de prosperar, não apenas sobreviver",
    ],
    palavrasChave: [
        "resiliência",
        "prosperar",
        "estresse",
        "bem-estar",
        "autoconhecimento",
        "burnout",
        "saúde mental",
        "liderança inquebrantável",
        "transformação",
        "caos constante",
    ],
    takeaways: [
        "Resiliência — voltar ao ponto de partida — não é suficiente para prosperar em um mundo de caos constante.",
        "Tanto o excesso de responsabilidades quanto a fuga delas impedem que o líder prospere de verdade.",
        "Prosperar é um estado dinâmico que exige ferramentas ativas, não apenas resistência passiva.",
        "Líderes que ficam curiosos diante da adversidade — perguntando 'por que?' — encontram caminhos que outros não veem.",
        "Transformar estresse em força é uma competência que pode ser aprendida e desenvolvida.",
        "Os mais fortes que você conhece também estão lutando — vulnerabilidade compartilhada cria comunidade e soluções.",
        "Ser inquebrantável não significa não sentir dor; significa usar a dor como catalisador de crescimento.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Resiliência adaptativa e crescimento pós-adversidade",
                    percent: 95,
                    descricao:
                        "A palestra é centrada na distinção entre resiliência básica e a capacidade mais profunda de prosperar — transformar adversidade em força.",
                },
                {
                    label: "6.1 Saúde mental e prevenção do burnout",
                    percent: 88,
                    descricao:
                        "Os casos de Sarah e Michael ilustram dois caminhos para o burnout, e Eurich oferece uma terceira via baseada em pesquisa.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.1 Autoconhecimento e autoconsciência",
                    percent: 85,
                    descricao:
                        "Eurich é a principal especialista mundial em autoconhecimento, e a palestra aplica essa pesquisa diretamente ao contexto de prosperidade sob pressão.",
                },
                {
                    label: "1.2 Curiosidade e aprendizado contínuo como prática de liderança",
                    percent: 78,
                    descricao:
                        "A pergunta 'por que resiliência não basta?' é apresentada como o tipo de curiosidade que distingue líderes que prosperam dos que apenas sobrevivem.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Científico-prática baseada em pesquisa de psicologia organizacional" },
        { label: "Estilo", value: "Storytelling com casos reais + pesquisa + ferramentas práticas" },
        { label: "Aplicabilidade", value: "Alta para líderes sob alta pressão que buscam bem-estar sustentável e performance" },
        { label: "Intensidade conceitual", value: "Média-alta" },
    ],
},

// Bradley Rapier — Entre na roda (GLS 2025–2026)
gls25_7: {
    speaker: "Bradley Rapier",
    speakerPhoto: "/speakers/bradley-rapier.png",
    title: "Entre Na Roda",
    edition: "GLS 2025–2026",
    duration: "26:38",
    bio: "Bradley Rapier é coreógrafo premiado e indicado ao Emmy, com mais de três décadas de experiência em dança, produção e liderança de talentos de Hollywood à Broadway. Apareceu em The Ellen Show, So You Think You Can Dance e Dancing with the Stars, e é criador da aclamada produção Off-Broadway 'GROOVALOO'. Fundou o Groove Theory, uma estrutura que ajuda líderes a criarem ambientes onde produtividade, criatividade e bem-estar prosperam — inspirando organizações desde a Disney até o McDonald's.",
    temaCentral:
        "Entrar na roda — aquele espaço de abertura, vulnerabilidade e presença plena onde a criatividade e o engajamento genuíno acontecem — é o chamado de todo líder que deseja criar culturas onde as pessoas se sintam verdadeiramente convidadas a participar.",
    sinopse: [
        "Bradley Rapier começa com uma cena de 1990 na Sunset Strip de Hollywood: um jovem canadense chegando a uma boate onde, no terceiro andar, 'tudo acontecia'. A roda de hip-hop que ele encontrou naquela noite se tornou a metáfora central de sua vida e liderança. A roda — um espaço circular onde dançarinos se reúnem, se observam e se convidam — é um modelo vivo de engajamento, criatividade e pertencimento.",
        "Rapier observou que, mesmo com a roda aberta, muitas pessoas ficavam de fora — assistindo, hesitando, esperando uma permissão que nunca viria. Essa observação o levou a criar o Groove Theory: uma estrutura que ajuda líderes a construírem ambientes onde todos se sentem não apenas permitidos, mas ativamente convidados a entrar na roda. A diferença entre uma organização onde as pessoas participam e uma onde ficam de fora está na qualidade do convite do líder.",
        "A palestra é uma experiência tanto quanto um ensinamento: Rapier usa o movimento, a energia e a presença corporativa para demonstrar que liderança não é apenas um conjunto de habilidades mentais, mas uma prática física e relacional. Líderes que entram na roda e chamam os outros para dançar criam culturas de pertencimento, inovação e bem-estar.",
    ],
    softSkills: [
        "Criação de ambientes de pertencimento",
        "Liderança pelo convite e não pela imposição",
        "Presença e energia genuína",
        "Vulnerabilidade como ferramenta de engajamento",
        "Criatividade organizacional",
        "Leitura do ambiente e das pessoas",
        "Inspiração e motivação de equipes",
    ],
    palavrasChave: [
        "engajamento",
        "pertencimento",
        "criatividade",
        "cultura organizacional",
        "convite",
        "participação",
        "bem-estar",
        "roda",
        "comunidade",
        "movimento",
    ],
    takeaways: [
        "Líderes entram na roda primeiro — e depois chamam os outros para dançar.",
        "A diferença entre pertencimento e exclusão está na qualidade do convite do líder.",
        "Criar ambientes onde todos se sentem convidados a participar é uma competência de liderança central.",
        "Muitas pessoas ficam de fora não por falta de vontade, mas por falta de um convite genuíno.",
        "Liderança não é apenas mental — é física, relacional e energética.",
        "O Groove Theory mostra que produtividade, criatividade e bem-estar prosperam quando o líder cria o espaço certo.",
        "Uma cultura viva de engajamento começa quando o líder para de esperar que as pessoas entrem e começa a convidá-las ativamente.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.3 Criação de culturas de criatividade e experimentação",
                    percent: 88,
                    descricao:
                        "O Groove Theory é especificamente desenhado para criar ambientes onde criatividade e bem-estar disparam — inovação através da cultura.",
                },
                {
                    label: "5.1 Liderança da mudança a partir do exemplo",
                    percent: 80,
                    descricao:
                        "Rapier demonstra que mudar uma cultura começa quando o líder entra na roda primeiro, modelando o comportamento que quer ver.",
                },
            ],
        },
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.1 Construção de cultura de pertencimento",
                    percent: 92,
                    descricao:
                        "A metáfora da roda é uma representação direta da cultura de pertencimento — onde todos são convidados, não apenas tolerados.",
                },
                {
                    label: "2.6 Engajamento e motivação de equipes",
                    percent: 85,
                    descricao:
                        "A palestra inteira é sobre como líderes criam ambientes onde as pessoas querem participar ativamente, não apenas cumprir obrigações.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Experiencial e inspiracional baseada em arte, movimento e liderança criativa" },
        { label: "Estilo", value: "Performance + storytelling + metáfora vivida" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam transformar cultura organizacional e elevar engajamento" },
        { label: "Intensidade conceitual", value: "Média (forte impacto emocional e experiencial)" },
    ],
},

// James Hewitt — Desempenho regenerativo (GLS 2025–2026)
gls25_8: {
    speaker: "James Hewitt",
    speakerPhoto: "/speakers/james-hewitt.png",
    title: "Desempenho Regenerativo",
    edition: "GLS 2025–2026",
    duration: "32:54",
    bio: "James Hewitt é cientista especializado em performance humana e ex-ciclista profissional, que após perceber que seus clientes não aplicavam os princípios de resistência esportiva ao trabalho, fez doutorado em Ciência do Desempenho e criou a Knowledge Work Lab. Consultor de equipes de Fórmula 1 e empresas da Fortune 500, ele usa estratégias apoiadas pela neurociência para ajudar líderes a alcançar alta performance de forma sustentável — tratando o trabalho do conhecimento como um esporte de resistência.",
    temaCentral:
        "Liderar é uma corrida de longa distância, não de curta distância — e os líderes que tratam o trabalho como um esporte de resistência, alternando períodos de alta exigência com recuperação intencional, são os que sustentam alta performance sem se destruir.",
    sinopse: [
        "James Hewitt apresenta dois personagens: Sarah, que trabalha até as 22h sem conseguir parar, e Michael, que reduziu tanto suas responsabilidades por medo do burnout que perdeu o engajamento e o propósito. Nenhum dos dois representa desempenho regenerativo — um está em modo de sobrevivência, o outro em modo de fuga. A pergunta central da palestra é: como líderes sustentam alta performance sem chegar a nenhum desses extremos?",
        "A resposta vem da ciência do esporte de resistência: atletas de elite não treinam na máxima intensidade o tempo todo. Eles alternam picos de esforço com recuperação estruturada — e é exatamente isso que falta no trabalho do conhecimento. Hewitt demonstra que líderes que 'aceleravam quando precisavam frear' e 'retomavam quando precisavam se recuperar' não estavam sendo mais produtivos, estavam apenas destruindo sua capacidade de longo prazo.",
        "A palestra oferece um framework prático para o desempenho regenerativo: entender quando aplicar intensidade e quando recuperar, tratar a recuperação com a mesma seriedade que o desempenho, e construir ritmos de trabalho que sejam sustentáveis no longo prazo. Líderes que aplicam essa ciência prosperam como atletas de elite — com performance alta, duradoura e saudável.",
    ],
    softSkills: [
        "Gestão de energia e recuperação intencional",
        "Autoconhecimento sobre limites e capacidades",
        "Disciplina na alternância entre esforço e descanso",
        "Resiliência baseada em ciência",
        "Planejamento de longo prazo",
        "Consciência corporal e fisiológica",
        "Liderança sustentável",
    ],
    palavrasChave: [
        "desempenho regenerativo",
        "resistência",
        "recuperação",
        "neurociência",
        "alta performance",
        "sustentabilidade",
        "burnout",
        "trabalho do conhecimento",
        "bem-estar",
        "ciência do desempenho",
    ],
    takeaways: [
        "Liderar é uma corrida de longa distância — e precisa ser treinada como tal.",
        "Líderes que aceleraram quando precisavam frear destroem sua capacidade de performance no longo prazo.",
        "Recuperação intencional não é fraqueza — é parte integrante do ciclo de alta performance.",
        "O trabalho do conhecimento precisa ser tratado com os mesmos princípios de periodização do esporte de resistência.",
        "A diferença entre Sarah e Michael não é a quantidade de horas trabalhadas, mas a ausência de ritmo regenerativo em ambos.",
        "Atletas de elite alternam picos de intensidade com recuperação estruturada — líderes podem e devem fazer o mesmo.",
        "Desempenho regenerativo é o modelo que permite alta entrega sem o custo do esgotamento.",
    ],
    categorias: [
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.4 Performance sustentável e prevenção do burnout",
                    percent: 95,
                    descricao:
                        "O desempenho regenerativo é apresentado como o antídoto científico ao burnout e ao subengajamento — um modelo de saúde e alta performance simultâneas.",
                },
                {
                    label: "6.3 Gestão de energia como recurso estratégico",
                    percent: 88,
                    descricao:
                        "Hewitt aplica a ciência do esporte à gestão da energia cognitiva e emocional dos líderes, tratando recuperação como componente de performance.",
                },
            ],
        },
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.4 Ritmo e disciplina de execução de longo prazo",
                    percent: 82,
                    descricao:
                        "A proposta de periodização do trabalho cria um framework estratégico para executar com alta performance ao longo do tempo sem degradação.",
                },
                {
                    label: "4.1 Planejamento baseado em evidências",
                    percent: 75,
                    descricao:
                        "Hewitt fundamenta toda a palestra em neurociência e ciência do esporte, trazendo evidências concretas para decisões sobre ritmo e recuperação.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Científico-prática baseada em neurociência e ciência do desempenho esportivo" },
        { label: "Estilo", value: "Storytelling de casos + framework científico aplicado à liderança" },
        { label: "Aplicabilidade", value: "Alta para líderes e executivos que buscam performance sustentável sem burnout" },
        { label: "Intensidade conceitual", value: "Média-alta (rigor científico com linguagem acessível)" },
    ],
},

// Stephanie Chung — Como liderar pessoas diferentes de você (GLS 2025–2026)
gls25_9: {
    speaker: "Stephanie Chung",
    speakerPhoto: "/speakers/stephanie-chung.png",
    title: "Como Liderar Pessoas Diferentes de Você",
    edition: "GLS 2025–2026",
    duration: "17:05",
    bio: "Stephanie Chung fez história como a primeira mulher negra e segunda mulher a presidir uma grande empresa de aviação privada, após gerar US$ 1 bilhão em receita anual como líder de vendas no setor. Com 30 anos de experiência, ela traz expertise em neurociência de vendas e liderança, atuando no conselho da Make-A-Wish e colaborando com Business Executives for National Security. Seu primeiro emprego foi carregando bagagens em Boston — e foi um vice-presidente que notou seu potencial e mudou sua trajetória.",
    temaCentral:
        "Grandes líderes veem força na diferença — e a capacidade de liderar pessoas que não se parecem, não pensam e não pedem por você é o que transforma equipes de baixo desempenho em equipes de alto impacto.",
    sinopse: [
        "Stephanie Chung abre com um momento de pura vulnerabilidade: enviada pelo CEO para liderar a equipe de vendas com pior desempenho de toda a empresa no Texas — uma equipe de homens brancos que não pediram por ela, não a queriam e mal a olhavam nos olhos no primeiro dia. Ela não queria ir. Mas foi.",
        "A partir desse momento de desconforto radical, Chung desenvolveu os princípios que transformaram aquela equipe resistente em campeã. O segredo não foi ignorar as diferenças, mas entendê-las profundamente — aprender como cada pessoa pensa, o que a motiva, o que a faz sentir vista e valorizada. Liderar pessoas diferentes de você começa por reconhecer que sua maneira de motivar, comunicar e conectar pode não funcionar para quem é diferente.",
        "Chung defende que a capacidade de cruzar diferenças — de gênero, raça, cultura, estilo de trabalho — é a competência de liderança mais subestimada e mais necessária do mundo atual. Líderes que enxergam força na diferença e investem em conhecer cada pessoa onde ela está constroem equipes que superam qualquer meta.",
    ],
    softSkills: [
        "Liderança inclusiva e intercultural",
        "Inteligência emocional aplicada à diferença",
        "Escuta ativa e curiosidade genuína",
        "Adaptação do estilo de liderança",
        "Construção de confiança com resistência",
        "Empatia estratégica",
        "Coragem para liderar fora da zona de conforto",
    ],
    palavrasChave: [
        "diversidade",
        "inclusão",
        "liderança intercultural",
        "diferença",
        "equipe de alta performance",
        "empatia",
        "adaptação",
        "confiança",
        "neurociência de vendas",
    ],
    takeaways: [
        "Grandes líderes veem força na diferença — não ameaça.",
        "Liderar pessoas que não se parecem com você começa por entender profundamente o que as motiva.",
        "A resistência inicial de uma equipe não é o destino — é o ponto de partida para construir confiança.",
        "Sua forma de motivar pode não funcionar para quem é diferente de você — adaptar é uma competência de liderança.",
        "A diversidade de uma equipe é um ativo multiplicador quando o líder aprende a ativá-la.",
        "O primeiro investimento em uma equipe resistente é ser a presença que aparece mesmo quando não é querida.",
        "Cruzar diferenças de gênero, raça e cultura é a habilidade de liderança mais necessária e mais subestimada do mundo atual.",
    ],
    categorias: [
        {
            titulo: "Categoria 2 — Pessoas, Cultura e Confiança",
            cor: "#8B5CF6",
            criterios: [
                {
                    label: "2.3 Liderança de equipes diversas e inclusivas",
                    percent: 95,
                    descricao:
                        "A palestra é um case ao vivo de como liderar uma equipe completamente diferente do líder e transformá-la em campeã por meio de entendimento profundo.",
                },
                {
                    label: "2.2 Construção de confiança em contextos de resistência",
                    percent: 88,
                    descricao:
                        "O primeiro dia da Chung no Texas — braços cruzados, ausência de contato visual — é uma aula sobre como construir confiança onde não havia nenhuma.",
                },
            ],
        },
        {
            titulo: "Categoria 3 — Comunicação e Influência",
            cor: "#FF6B35",
            criterios: [
                {
                    label: "3.2 Adaptação da comunicação a diferentes perfis",
                    percent: 85,
                    descricao:
                        "Chung demonstra que comunicar e motivar pessoas diferentes exige adaptar radicalmente o estilo de liderança e comunicação.",
                },
                {
                    label: "3.4 Influência sem autoridade formal",
                    percent: 78,
                    descricao:
                        "Liderar uma equipe que não a pediu e não a queria exigiu de Chung influência baseada em caráter e presença, não em hierarquia.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em experiência pessoal e prática de liderança" },
        { label: "Estilo", value: "Storytelling autobiográfico direto com insights práticos" },
        { label: "Aplicabilidade", value: "Alta para líderes que gerenciam equipes diversas, multiculturais ou resistentes" },
        { label: "Intensidade conceitual", value: "Média (alto impacto prático e emocional)" },
    ],
},

// John Maxwell — Deixando um legado que importa (GLS 2025–2026)
gls25_10: {
    speaker: "John Maxwell",
    speakerPhoto: "/speakers/john-maxwell.png",
    title: "Deixando um Legado que Importa",
    edition: "GLS 2025–2026",
    duration: "34:47",
    bio: "John C. Maxwell fundou diversas organizações, escreveu mais de 90 livros — incluindo seis best-sellers do New York Times — treinou mais de 5 milhões de líderes em 180 países e criou a maior empresa de coaching do mundo. A Business Insider o chamou de autoridade número 1 em liderança dos Estados Unidos e a Inc. Magazine o identificou como o especialista em liderança mais popular do mundo. Também recebeu o Prêmio Horatio Alger e o Prêmio Madre Teresa pela Paz Global e Liderança.",
    temaCentral:
        "Um legado que importa não nasce de livros escritos nem de palcos ocupados, mas de vidas transformadas — e a ferramenta mais poderosa para transformar vidas é colocar pessoas em pequenos grupos onde bons valores são discutidos, vividos e multiplicados de mão em mão.",
    sinopse: [
        "John Maxwell começa com uma revelação inesperada: ele nunca quis ser escritor — queria apenas ajudar mais pessoas, e a escrita se tornou a ferramenta para isso. Ao descobrir que mais pessoas no mundo secular compravam seus livros do que no mundo da fé cristã, ele fez uma transição decisiva: 'Vou entrar nesse mundo, porque quero agregar valor ali'. Assim nasceu a Maxwell Leadership e, depois, a iniciativa global de Mesas de Liderança.",
        "A parte mais poderosa da palestra é o relato das Mesas 'Além do Sucesso': pequenos grupos ao redor do mundo onde pessoas comuns aprendem valores de liderança baseados em princípios bíblicos, lideram as próprias mesas e transformam suas comunidades — uma mesa de cada vez. O caso de Tony, que passou dois anos preso injustamente, cheio de raiva, e encontrou esperança e transformação em uma dessas mesas, ilustra o que Maxwell chama de legado real.",
        "Maxwell encerra com uma convicção profunda: mudar o mundo não requer palcos nem best-sellers. Requer colocar as pessoas certas em torno de uma mesa, dar a elas bons valores para discutir e confiar que elas vão multiplicar. O legado que importa não se mede em livros vendidos, mas em vidas que mudaram e passaram a mudar outras vidas.",
    ],
    softSkills: [
        "Visão de longo prazo e impacto geracional",
        "Multiplicação intencional de líderes",
        "Generosidade de conhecimento e experiência",
        "Humildade para servir e agregar valor",
        "Coragem de transitar entre mundos diferentes",
        "Discipulado e mentoria estruturada",
        "Fé como fundamento da liderança",
    ],
    palavrasChave: [
        "legado",
        "transformação",
        "valores",
        "multiplicação",
        "liderança servidora",
        "mesas de liderança",
        "impacto geracional",
        "propósito",
        "esperança",
        "discipulado",
    ],
    takeaways: [
        "Um legado que importa nasce de vidas transformadas, não de conquistas pessoais.",
        "A ferramenta mais poderosa de multiplicação de impacto é colocar pessoas em pequenos grupos com bons valores.",
        "Quando as pessoas aprendem bons valores e começam a vivê-los, suas vidas se tornam mais valiosas.",
        "Você muda o mundo uma mesa de cada vez — e isso está ao alcance de qualquer líder.",
        "O legado real é quando a pessoa transformada começa a transformar outros.",
        "Transitar para um novo mundo de impacto exige coragem de dizer 'quero agregar valor ali também'.",
        "A esperança é a semente do legado — e ela pode ser plantada em qualquer pessoa, em qualquer contexto.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.3 Legado e impacto geracional",
                    percent: 95,
                    descricao:
                        "A palestra inteira é uma reflexão sobre o que constitui um legado que importa — e o caso de Tony e das Mesas exemplifica legado vivo e multiplicador.",
                },
                {
                    label: "7.1 Clareza de propósito além do sucesso pessoal",
                    percent: 90,
                    descricao:
                        "Maxwell demonstra que seu propósito nunca foi ser best-seller, mas ajudar pessoas — a escrita e o coaching foram ferramentas, não fins.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.5 Multiplicação e desenvolvimento de outros líderes",
                    percent: 88,
                    descricao:
                        "A iniciativa das Mesas de Liderança é um modelo concreto de como um líder multiplica seu impacto colocando outros em condição de liderar.",
                },
                {
                    label: "1.2 Humildade e serviço como prática de liderança",
                    percent: 80,
                    descricao:
                        "Maxwell revela que a transição de pastor local a autor global foi guiada por humildade — o desejo de agregar valor onde as pessoas já estavam.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional-biográfica com foco em legado e multiplicação de impacto" },
        { label: "Estilo", value: "Narrativa autobiográfica + casos de transformação + chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam transcender o sucesso pessoal e construir impacto duradouro" },
        { label: "Intensidade conceitual", value: "Média (profundidade filosófica com linguagem acessível)" },
    ],
},

// Christine Caine — Uma visão que ancora (GLS 2025–2026)
gls25_11: {
    speaker: "Christine Caine",
    speakerPhoto: "/speakers/christine-caine.png",
    title: "Uma Visão que Ancora",
    edition: "GLS 2025–2026",
    duration: "38:16",
    bio: "Christine Caine e seu marido fundaram a A21 Campaign — uma das maiores organizações de combate ao tráfico humano do mundo, vencedora do Prêmio Memorial Madre Teresa e do Prêmio Presidencial por Esforços Extraordinários no combate ao tráfico de pessoas. Também fundou a Propel Women, que apoia mulheres a ativarem seu propósito, e as Zoe Churches na Europa. Nascida na Grécia e criada na Austrália, ela não falava inglês até os cinco anos e é autora best-seller com presença em conferências de liderança ao redor do mundo.",
    temaCentral:
        "Uma visão que ancora não nasce de ambição ou planejamento estratégico, mas de um encontro com uma necessidade real que clama por resposta — e líderes que permanecem ancorados em sua visão têm a força para suportar qualquer tormenta que venha pelo caminho.",
    sinopse: [
        "Christine Caine estava em Tessalônica, na Grécia, com 40 anos, acabada de ter um bebê, procurando apenas férias e uma medalha de honra pela sobrevivência. Não estava procurando um novo trabalho nem uma nova visão. E então viu os cartazes — dezenas de rostos de mulheres e crianças desaparecidas. Como sua primeira língua é o grego, ela lia: 'Desaparecida, desaparecida'. E não conseguiu continuar andando.",
        "Aquele momento de parada diante de uma necessidade invisível para a maioria se tornou a semente da A21 Campaign. Caine usa essa história para ensinar que visão não é algo que você escolhe — é algo que te escolhe quando você está disposta a ver o que outros preferem não ver. Liderar a partir da visão exige permanecer ancorado mesmo quando tudo ao redor tenta mover você do seu lugar.",
        "A palestra é um chamado poderoso para que líderes parem, olhem ao redor e identifiquem a necessidade que clama por sua resposta — aquela que, se você não atender, talvez ninguém atenda. Uma visão que ancora não deixa o líder à deriva nos momentos de tempestade; ela o mantém firme no propósito, mesmo quando o custo é alto.",
    ],
    softSkills: [
        "Visão como âncora de liderança",
        "Coragem para responder ao chamado inesperado",
        "Persistência diante do custo da visão",
        "Sensibilidade para enxergar necessidades invisíveis",
        "Liderança movida por propósito e não por planejamento",
        "Fé como sustentação da visão de longo prazo",
        "Resiliência ancorada em clareza de missão",
    ],
    palavrasChave: [
        "visão",
        "âncora",
        "propósito",
        "tráfico humano",
        "chamado",
        "missão",
        "liderança com causa",
        "persistência",
        "necessidade",
        "impacto social",
    ],
    takeaways: [
        "Uma visão que ancora não nasce de ambição — nasce de um encontro com uma necessidade que não te deixa continuar andando.",
        "Líderes que permanecem ancorados em sua visão têm força para suportar qualquer tormenta.",
        "A visão mais poderosa é aquela que te escolhe, não aquela que você escolheu.",
        "Quando há uma necessidade e um líder a enxerga, a resposta é intervir — não continuar andando.",
        "Uma visão clara é o que separa a liderança que flutua da liderança que permanece firme sob pressão.",
        "O custo da visão é real — mas o custo de ignorá-la é maior.",
        "Líderes que respondem ao chamado inesperado frequentemente criam os maiores impactos da história.",
    ],
    categorias: [
        {
            titulo: "Categoria 7 — Propósito, Visão, Legado e Impacto",
            cor: "#06b6d4",
            criterios: [
                {
                    label: "7.2 Visão como âncora e motor da liderança",
                    percent: 95,
                    descricao:
                        "A palestra é centrada no conceito de visão como âncora — e a A21 Campaign é o caso concreto de como uma visão recebida de forma inesperada pode transformar o mundo.",
                },
                {
                    label: "7.1 Clareza de propósito e chamado",
                    percent: 88,
                    descricao:
                        "Christine Caine exemplifica como o propósito pode ser identificado num momento de interrupção — quando a necessidade ao redor do líder exige resposta.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Resiliência sustentada pela visão",
                    percent: 85,
                    descricao:
                        "Caine demonstra que permanecer ancorado numa visão clara é o mecanismo de resiliência mais duradouro — mais forte do que força de vontade ou técnicas de bem-estar.",
                },
                {
                    label: "6.5 Coragem de sustentar a missão diante do custo pessoal",
                    percent: 80,
                    descricao:
                        "Fundar a A21 aos 40 anos, com um bebê recém-nascido e sem planejamento prévio, ilustra a resiliência que uma visão âncora pode sustentar.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em narrativa pessoal e impacto social transformador" },
        { label: "Estilo", value: "Storytelling autobiográfico + ensino com humor grego e profundidade profética" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam clareza de visão e sustentação do propósito em tempos difíceis" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional, espiritual e prática)" },
    ],
},

// Jon Acuff — À prova de procrastinação (GLS 2025–2026)
gls25_12: {
    speaker: "Jon Acuff",
    speakerPhoto: "/speakers/jon-acuff.png",
    title: "À Prova de Procrastinação",
    edition: "GLS 2025–2026",
    duration: "37:23",
    bio: "Jon Acuff é autor best-seller do New York Times com 10 livros publicados, traduzidos para mais de 20 idiomas, e um dos 100 principais palestrantes de liderança da INC. Já falou para centenas de milhares de pessoas em conferências, universidades e empresas pelo mundo, incluindo FedEx, Nissan, Microsoft, Lockheed Martin, Chick-fil-A, Nokia e Comedy Central. Em 2013 ele parou de procrastinar em seu próprio chamado — e desde então tem convencido líderes a transformar espera em ação.",
    temaCentral:
        "92% de todas as resoluções de Ano Novo falham — e a raiz do problema não é falta de disciplina, mas o padrão invisível de procrastinação que faz líderes esperarem condições perfeitas que nunca chegam. Líderes que param de esperar e começam a agir constroem vidas notáveis.",
    sinopse: [
        "Jon Acuff abre com uma confissão: a meta mais idiota que já tentou foi beber 3 litros de água por dia. O fracasso o levou a pesquisar por que 92% de todas as resoluções de Ano Novo falham — e o Strava, com 30 milhões de pontos de dados, revelou que a maior queda acontece na segunda sexta-feira de janeiro. Não em fevereiro, não em março — na segunda sexta-feira de janeiro.",
        "A partir dessa pesquisa, Acuff constrói uma análise precisa dos padrões de procrastinação: a espera pelas condições perfeitas, a auto-sabotagem que antecipa o fracasso, o perfeccionismo que paralisa antes do começo. Usando humor preciso e histórias pessoais, ele desmonta a crença de que alguns líderes são naturalmente disciplinados enquanto outros não — e demonstra que procrastinação é um comportamento aprendido que pode ser desconstruído.",
        "A palestra termina com um chamado direto: pare de esperar permissão para liderar. Líderes que transformam espera em tentar — e tentar em vencer — não constroem vidas perfeitas, constroem vidas notáveis. E a diferença entre os dois começa em uma decisão que pode ser tomada agora.",
    ],
    softSkills: [
        "Autodisciplina e superação da procrastinação",
        "Autoconhecimento sobre padrões de auto-sabotagem",
        "Tomada de decisão e ação imediata",
        "Resiliência diante do fracasso de metas",
        "Mentalidade de progresso sobre perfeição",
        "Coragem para começar sem condições perfeitas",
        "Persistência orientada a resultados",
    ],
    palavrasChave: [
        "procrastinação",
        "metas",
        "ação",
        "disciplina",
        "perfeccionismo",
        "auto-sabotagem",
        "hábitos",
        "liderança notável",
        "execução",
        "mudança de comportamento",
    ],
    takeaways: [
        "92% de todas as resoluções de Ano Novo falham — e a maior queda acontece na segunda sexta-feira de janeiro.",
        "Procrastinação é um comportamento aprendido que pode ser desconstruído com as ferramentas certas.",
        "Esperar pelas condições perfeitas é a forma mais sofisticada de procrastinação.",
        "Líderes que transformam espera em tentar — e tentar em vencer — constroem vidas notáveis.",
        "Dê a si mesmo permissão para liderar agora — não quando tiver mais tempo, mais recursos ou mais preparo.",
        "O fracasso numa meta não é um sinal de que você é incapaz — é um sinal de que a meta ou o sistema estava errado.",
        "A segunda sexta-feira de janeiro é quando a maioria desiste — seja o líder que escolhe continuar.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.3 Execução e superação de barreiras comportamentais",
                    percent: 92,
                    descricao:
                        "A palestra é focada exatamente na lacuna entre intenção e execução — e oferece diagnóstico preciso dos padrões que impedem líderes de agir.",
                },
                {
                    label: "4.2 Definição e acompanhamento de metas",
                    percent: 82,
                    descricao:
                        "Acuff usa dados reais do Strava e pesquisa sobre resoluções para mostrar onde e por que os sistemas de metas falham — e como corrigi-los.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.2 Disciplina, hábitos e autogestão",
                    percent: 88,
                    descricao:
                        "O tema central é a construção de disciplina para superar a procrastinação — autogestão como competência fundamental da liderança pessoal.",
                },
                {
                    label: "1.3 Coragem de começar sem permissão externa",
                    percent: 80,
                    descricao:
                        "O chamado 'dê a si mesmo permissão para liderar' desafia líderes a pararem de esperar validação para agir em seu chamado.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prática baseada em pesquisa comportamental e experiência pessoal" },
        { label: "Estilo", value: "Comédia + storytelling autobiográfico + dados de pesquisa + chamado à ação" },
        { label: "Aplicabilidade", value: "Alta para qualquer líder que luta com procrastinação, metas não cumpridas ou paralisia decisória" },
        { label: "Intensidade conceitual", value: "Média (altamente acessível e imediatamente aplicável)" },
    ],
},

// David Ashcraft — Mude a sua pergunta (GLS 2025–2026)
gls25_13: {
    speaker: "David Ashcraft",
    speakerPhoto: "/speakers/david-ashcraft.png",
    title: "Mude a Sua Pergunta",
    edition: "GLS 2025–2026",
    duration: "16:14",
    bio: "David Ashcraft é presidente e CEO da Global Leadership Network, organizadora do Global Leadership Summit. Ele é fundador e presidente da The Advantage, uma rede de colaboração em liderança que orienta e encoraja pastores em toda a Pensilvânia. Como pastor sênior da LCBC Church por 32 anos, ajudou a aumentar a frequência semanal de 150 pessoas para mais de 22.000 participantes — tornando-a a maior igreja do nordeste dos EUA. Também apresenta o Global Leadership Podcast.",
    temaCentral:
        "A pergunta que um líder faz determina o tipo de liderança que ele exerce — e mudar a pergunta, de 'o que preciso fazer?' para 'quem preciso colocar em movimento?', transforma líderes de executores em multiplicadores.",
    sinopse: [
        "David Ashcraft abre revelando o paradoxo de sua própria trajetória: liderou durante mais de 30 anos como participante das conferências que agora organiza, e esse ângulo lhe dá uma perspectiva única sobre o que realmente transforma líderes. Ele sabe exatamente o que os líderes na plateia estão sentindo — porque esteve lá por três décadas.",
        "O núcleo da palestra é um desafio epistemológico simples e poderoso: a maioria dos líderes faz as perguntas erradas. Líderes que perguntam 'o que eu preciso fazer?' naturalmente se tornam executores — centralizam, controlam, carregam o peso. Líderes que mudam a pergunta para 'quem eu preciso colocar em movimento?' naturalmente se tornam multiplicadores — desenvolvem, delegam, confiam.",
        "Ashcraft desenha o perfil do líder que coloca outros em movimento: alguém que não se contenta com sucessos passados, que busca impacto contínuo e que entende que a liderança verdadeira se mede não pelo que você realiza, mas por quantas pessoas você lançou. Mudar a pergunta muda o destino da liderança.",
    ],
    softSkills: [
        "Desenvolvimento e multiplicação de líderes",
        "Delegação intencional",
        "Pensamento sistêmico sobre liderança",
        "Humildade para passar o bastão",
        "Visão de impacto multiplicador",
        "Coaching e mentoria",
        "Foco no potencial dos outros",
    ],
    palavrasChave: [
        "pergunta certa",
        "multiplicação",
        "delegação",
        "liderança multiplicadora",
        "desenvolvimento de pessoas",
        "impacto",
        "movimento",
        "coaching",
        "visão",
        "legado",
    ],
    takeaways: [
        "A pergunta que você faz determina o tipo de líder que você se torna.",
        "Mudar de 'o que preciso fazer?' para 'quem preciso colocar em movimento?' transforma executores em multiplicadores.",
        "Líderes que não se contentam com sucessos passados buscam continuamente novas formas de impacto.",
        "A liderança verdadeira se mede não pelo que você realiza, mas por quantas pessoas você lançou.",
        "Colocar outros em movimento é a competência que escala o impacto de um líder além de suas próprias capacidades.",
        "Um líder que carrega tudo raramente libera o potencial da equipe — delegar é um ato de confiança e visão.",
        "Mudar a pergunta não é só uma técnica — é uma mudança de identidade do líder.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.2 Reinvenção do estilo de liderança",
                    percent: 85,
                    descricao:
                        "Mudar a pergunta central da liderança é um ato de reinvenção — de executor para multiplicador — que transforma toda a abordagem do líder.",
                },
                {
                    label: "5.4 Inovação através do desenvolvimento de pessoas",
                    percent: 78,
                    descricao:
                        "Ashcraft propõe que colocar as pessoas certas em movimento é a forma de inovação mais sustentável que uma organização pode praticar.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.5 Desenvolvimento e multiplicação de líderes",
                    percent: 90,
                    descricao:
                        "A essência da palestra é que líderes excelentes colocam outros em movimento — multiplicação como prática central da liderança pessoal.",
                },
                {
                    label: "1.4 Humildade para ceder espaço e confiar nos outros",
                    percent: 80,
                    descricao:
                        "A transição de 32 anos de pastor para CEO da GLN — sempre buscando colocar outros em movimento — exemplifica humildade e confiança como prática de liderança.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Prática-reflexiva baseada em décadas de liderança pastoral e organizacional" },
        { label: "Estilo", value: "Ensino direto com perspectiva de praticante experiente" },
        { label: "Aplicabilidade", value: "Alta para líderes que buscam multiplicar seu impacto desenvolvendo outros" },
        { label: "Intensidade conceitual", value: "Média (simples de entender, profundo de aplicar)" },
    ],
},

// David Ashcraft — Em qual atividade você está? (GLS 2025–2026)
gls25_14: {
    speaker: "David Ashcraft",
    speakerPhoto: "/speakers/david-ashcraft.png",
    title: "Em Qual Atividade Você Está?",
    edition: "GLS 2025–2026",
    duration: "48:07",
    bio: "David Ashcraft é presidente e CEO da Global Leadership Network, organizadora do Global Leadership Summit. Ele é fundador e presidente da The Advantage, uma rede de colaboração em liderança que orienta e encoraja pastores em toda a Pensilvânia. Como pastor sênior da LCBC Church por 32 anos, ajudou a aumentar a frequência semanal de 150 pessoas para mais de 22.000 participantes — tornando-a a maior igreja do nordeste dos EUA. É coautor de What Was I Thinking? — Um Guia para Melhores Decisões e uma Liderança Mais Corajosa.",
    temaCentral:
        "Toda atividade tem uma estação — e líderes que aprendem a identificar em qual atividade estão, e a ter coragem de deixar uma atividade terminar para que outra comece, são os que mantêm impacto e propósito ao longo de toda uma vida de liderança.",
    sinopse: [
        "David Ashcraft parte de sua própria história: depois de 32 anos liderando a LCBC Church e transformando-a na maior igreja do nordeste dos EUA, ele reconheceu que era hora de outros liderarem. A maioria dos líderes veria isso como um encerramento. Ashcraft viu como uma aceleração — e foi exatamente o que aconteceu quando ele assumiu a Global Leadership Network.",
        "A pergunta central da palestra — 'Em qual atividade você está?' — é um convite para que líderes desenvolvam discernimento sobre as estações de sua liderança. Há atividades de início, de construção, de consolidação e de transição. Cada uma exige habilidades diferentes, posturas diferentes e disposições diferentes. Líderes que não sabem em qual estão tendem a operar com as ferramentas erradas para a estação.",
        "Ashcraft desafia os líderes a terem clareza e coragem: clareza para reconhecer em qual atividade estão e coragem para não se agarrar a uma atividade que já cumpriu seu ciclo. Líderes que sabem quando começar, quando construir e quando passar o bastão multiplicam seu impacto ao longo do tempo — e descobrem, como Ashcraft descobriu, que os melhores capítulos frequentemente vêm depois dos que pareciam ser o clímax.",
    ],
    softSkills: [
        "Discernimento de estações de liderança",
        "Coragem para transições e enceramentos",
        "Humildade para reconhecer o momento certo",
        "Visão de longo prazo e legado",
        "Adaptabilidade entre fases de liderança",
        "Clareza decisória em momentos de mudança",
        "Confiança no processo de multiplicação",
    ],
    palavrasChave: [
        "atividade",
        "estações de liderança",
        "transição",
        "discernimento",
        "legado",
        "momento certo",
        "clareza",
        "coragem",
        "multiplicação",
        "próximo capítulo",
    ],
    takeaways: [
        "Toda atividade tem uma estação — e líderes sábios sabem quando cada uma termina.",
        "Reconhecer em qual atividade você está é o primeiro passo para liderar com as ferramentas certas.",
        "A coragem de encerrar uma atividade é tão importante quanto a coragem de iniciá-la.",
        "Os melhores capítulos de uma liderança frequentemente vêm depois dos que pareciam ser o clímax.",
        "Líderes que se agarram a atividades que já cumpriram seu ciclo impedem que o próximo ciclo comece.",
        "Discernimento de estações é uma competência espiritual e estratégica — e pode ser desenvolvida.",
        "A transição honesta de um líder é um dos maiores presentes que ele pode dar à sua organização.",
    ],
    categorias: [
        {
            titulo: "Categoria 4 — Estratégia, Decisões e Execução",
            cor: "#173DED",
            criterios: [
                {
                    label: "4.5 Discernimento estratégico e timing de decisões",
                    percent: 90,
                    descricao:
                        "A palestra é centrada no discernimento de timing — saber em qual atividade está e quando agir de acordo com cada estação.",
                },
                {
                    label: "4.1 Clareza de direção e alinhamento de prioridades",
                    percent: 82,
                    descricao:
                        "Ashcraft demonstra que clareza sobre a estação atual da liderança é o que permite tomar decisões alinhadas com o impacto de longo prazo.",
                },
            ],
        },
        {
            titulo: "Categoria 1 — Liderança Pessoal",
            cor: "#FF1493",
            criterios: [
                {
                    label: "1.4 Coragem e integridade em momentos de transição",
                    percent: 88,
                    descricao:
                        "A decisão de deixar a LCBC após 32 anos para um novo capítulo exemplifica coragem e integridade na transição de atividades.",
                },
                {
                    label: "1.6 Visão e propósito que transcendem uma única atividade",
                    percent: 85,
                    descricao:
                        "Ashcraft mostra que propósito maior que uma única organização ou papel é o que permite que líderes continuem impactando ao longo de toda uma vida.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Reflexiva-prática baseada em experiência pessoal e liderança de longo prazo" },
        { label: "Estilo", value: "Ensino narrativo com storytelling autobiográfico e perguntas reflexivas" },
        { label: "Aplicabilidade", value: "Alta para líderes em momentos de transição, renovação de missão ou planejamento de próxima fase" },
        { label: "Intensidade conceitual", value: "Média (profundidade prática, linguagem direta)" },
    ],
},

// Khalil Halaseh — Oportunidade acima do obstáculo (GLS 2025–2026)
gls25_15: {
    speaker: "Khalil Halaseh",
    speakerPhoto: "/speakers/khalil-halaseh.png",
    title: "Oportunidade Acima do Obstáculo",
    edition: "GLS 2025–2026",
    duration: "35:43",
    bio: "Khalil Halaseh é pastor, mentor e construtor de comunidades apaixonado por capacitar a nova geração no Oriente Médio. Sua vida foi transformada na juventude após um período atrás das grades, e desde 1995 lidera uma igreja que acolhe centenas de refugiados. Como Coordenador Estratégico da Igreja do Nazareno no Oriente Médio, dedica-se ao desenvolvimento de líderes em países de língua árabe — com mais de 400 alunos em 19 nações por meio de plataforma presencial e online.",
    temaCentral:
        "Líderes não esperam por permissão nem olham apenas para os obstáculos — eles caminham por portas de oportunidade que ninguém mais nota, porque entendem que obstáculos e oportunidades frequentemente ocupam o mesmo espaço.",
    sinopse: [
        "Khalil Halaseh carrega uma mensagem para três categorias de líderes: aqueles que querem começar mas ainda não começaram, aqueles que pararam no meio do caminho, e aqueles que já alcançaram sucesso em sua missão mas precisam de encorajamento para ir além. Ele próprio já viveu as três categorias — e começa revelando que seu próprio ponto de partida foi uma transformação radical após anos no caminho errado.",
        "Com 22 anos e uma história que incluía prisão e fracasso, Halaseh se tornou pastor e começou a construir uma igreja que um dia acolheria centenas de refugiados. Cada obstáculo no Oriente Médio — cultural, político, religioso — se revelou, com o tempo, uma porta que ninguém mais estava disposto a abrir. Sua mensagem central é que Deus frequentemente planta oportunidades dentro dos obstáculos — e que líderes que insistem em olhar apenas para as barreiras perdem as portas.",
        "A palestra é um chamado corajoso e urgente: não espere por permissão, não pare no meio do caminho, não descanse nos sucessos do passado. Líderes que caminham por portas que ninguém mais nota — especialmente em regiões marcadas por conflito, pobreza e marginalização — criam o tipo de impacto que transcende gerações.",
    ],
    softSkills: [
        "Coragem para agir sem permissão externa",
        "Perseverança diante de obstáculos persistentes",
        "Visão para enxergar oportunidade onde outros veem barreira",
        "Fé como motor de liderança em contextos adversos",
        "Resiliência forjada na adversidade pessoal",
        "Liderança de impacto em contextos de crise",
        "Mentorado e desenvolvimento da próxima geração",
    ],
    palavrasChave: [
        "oportunidade",
        "obstáculo",
        "coragem",
        "transformação",
        "Oriente Médio",
        "refugiados",
        "próxima geração",
        "perseverança",
        "portas abertas",
        "liderança em contexto adverso",
    ],
    takeaways: [
        "Líderes não esperam por permissão — eles caminham por portas que ninguém mais nota.",
        "Obstáculos e oportunidades frequentemente ocupam o mesmo espaço: a diferença está em quem escolhe ver o quê.",
        "A transformação pessoal do líder é frequentemente o maior capital que ele pode investir na transformação dos outros.",
        "Não importa em qual das três categorias você está — começar, meio ou sucesso — há um próximo passo a dar.",
        "Regiões marcadas por conflito e crise são exatamente onde líderes corajosos criam impacto que transcende gerações.",
        "Parar no meio do caminho não é fracasso — é o ponto de decisão onde o caráter de um líder é revelado.",
        "Líderes que caminham por portas que ninguém mais abre frequentemente chegam a lugares que ninguém mais alcança.",
    ],
    categorias: [
        {
            titulo: "Categoria 5 — Mudança, Inovação e Reinvenção",
            cor: "#22c55e",
            criterios: [
                {
                    label: "5.1 Transformação pessoal como motor de mudança externa",
                    percent: 90,
                    descricao:
                        "A história de Halaseh demonstra que a transformação mais profunda começa de dentro — e que líderes que foram transformados têm autoridade especial para transformar outros.",
                },
                {
                    label: "5.5 Liderança inovadora em contextos de alta adversidade",
                    percent: 85,
                    descricao:
                        "Construir uma igreja que acolhe centenas de refugiados no Oriente Médio é inovação social em um dos contextos mais desafiadores do mundo.",
                },
            ],
        },
        {
            titulo: "Categoria 6 — Resiliência, Saúde Emocional e Bem-estar",
            cor: "#eab308",
            criterios: [
                {
                    label: "6.2 Resiliência forjada na adversidade pessoal",
                    percent: 88,
                    descricao:
                        "A trajetória de Halaseh — de prisão a pastor a formador de centenas de líderes — é um dos casos mais poderosos de resiliência apresentados no Summit.",
                },
                {
                    label: "6.5 Perseverança em missões de alto custo",
                    percent: 82,
                    descricao:
                        "Trinta anos de liderança em um dos contextos mais difíceis do mundo, passando pelos altos e baixos da missão, demonstra perseverança de raiz profunda.",
                },
            ],
        },
    ],
    avaliacaoTecnica: [
        { label: "Tipo de palestra", value: "Inspiracional baseada em testemunho pessoal e missão em contexto de alta adversidade" },
        { label: "Estilo", value: "Narrativa autobiográfica + chamado profético + encorajamento pastoral" },
        { label: "Aplicabilidade", value: "Alta para líderes que enfrentam obstáculos persistentes ou atuam em contextos de missão desafiadores" },
        { label: "Intensidade conceitual", value: "Média (forte carga emocional, espiritual e motivacional)" },
    ],
},

}

export function getRichContent(id?: string | null): PalestraRichContent | undefined {
    if (!id) return undefined
    return RICH_CONTENT[id]
}
