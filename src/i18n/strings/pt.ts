/**
 * STREBEN ACADEMY — strings em português do Brasil (pt-BR).
 * Derivado de es.ts. NÃO modificar a estrutura de keys.
 */

import type { Dictionary } from './es';

export const pt = {
  // ===========================================================================
  // META & NAV
  // ===========================================================================
  meta: {
    siteName: 'STREBEN ACADEMY',
    tagline: 'Aulas de inglês britânico online ao vivo',
    defaultDescription:
      'Academia de inglês britânico online ao vivo para todo o México. Crianças, adolescentes e adultos. Bolsas acessíveis, abordagem personalizada.',
    motto: 'Strive, Dream and Achieve',
    yearFrom: 2025,
  },
  nav: {
    home: 'Início',
    about: 'Sobre nós',
    courses: 'Cursos',
    scholarships: 'Bolsas',
    testimonials: 'Depoimentos',
    gallery: 'Galeria',
    students: 'Alunos',
    contact: 'Contato',
    requestInfo: 'Solicitar informações',
    menu: 'Menu',
    closeMenu: 'Fechar menu',
    languageMenu: 'Trocar idioma',
    themeMenu: 'Trocar tema',
  },
  themes: {
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
  },

  // ===========================================================================
  // SHARED COMPONENTS
  // ===========================================================================
  whatsapp: {
    fabLabel: 'Fale conosco pelo WhatsApp',
    fabText: 'Escreva-nos',
    prefilled: 'Olá STREBEN ACADEMY, gostaria de receber informações sobre os cursos.',
  },
  cta: {
    primary: 'Solicitar informações',
    secondary: 'Ver cursos',
    enroll: 'Pré-inscrever-me',
    placementTest: 'Teste de nivelamento gratuito',
    requestScholarship: 'Solicitar bolsa',
    bookSession: 'Agendar assessoria',
    seeAll: 'Ver todos',
    learnMore: 'Saiba mais',
    downloadSyllabus: 'Baixar plano de estudos',
  },

  // ===========================================================================
  // HOME
  // ===========================================================================
  home: {
    hero: {
      eyebrow: 'British English · 100% online ao vivo · México',
      titleLine1: 'O inglês que',
      titleAccent: 'transforma',
      titleLine2: 'sua vida.',
      subtitle:
        'Aulas ao vivo com metodologia britânica, turmas reduzidas e acompanhamento que se adapta ao seu ritmo. Início das aulas: 10 de agosto de 2026.',
      ctaPrimary: 'Solicitar informações pelo WhatsApp',
      ctaSecondary: 'Ver programas',
      stat1: { value: '9', label: 'níveis de A1 a C1' },
      stat2: { value: '7 anos', label: 'de experiência docente' },
      stat3: { value: '100%', label: 'online ao vivo' },
      stat4: { value: 'MX', label: 'todo o México' },
    },
    marquee: {
      words: ['Strive', 'Dream', 'Achieve', 'British English', 'Online', 'Ao vivo'],
    },
    intro: {
      eyebrow: '01 — O que nos diferencia',
      title: 'Uma academia com',
      titleAccent: 'foco humano',
      titleEnd: ', metodologia britânica e bolsas que abrem caminhos.',
      body: 'Na STREBEN ACADEMY trabalhamos com disciplina, responsabilidade e paixão para que nenhuma habilidade seja uma barreira, mas sim uma oportunidade de crescimento. Cada aula é pensada para que você vivencie o idioma, não apenas o estude.',
    },
    benefits: {
      eyebrow: '02 — Benefícios',
      title: 'O que você vai encontrar',
      titleAccent: 'aqui dentro',
      items: [
        {
          title: 'British English de verdade',
          body: 'Pronúncia, expressões e diferenças em relação ao inglês americano. Para se destacar em um exame, uma entrevista ou uma viagem.',
        },
        {
          title: 'Aulas dinâmicas',
          body: 'Situações reais, role plays e materiais atuais. Você aprende falando, não memorizando.',
        },
        {
          title: 'Acompanhamento próximo',
          body: 'Turmas reduzidas e atenção personalizada. Seu progresso é medido e celebrado.',
        },
        {
          title: 'Bolsas acessíveis',
          body: 'Quatro modalidades de desconto para que o custo não seja o motivo pelo qual você para de aprender.',
        },
      ],
    },
    programs: {
      eyebrow: '03 — Programas',
      title: 'Um programa para',
      titleAccent: 'cada idade',
      subtitle: 'Três trilhas com três níveis cada uma. Duração por nível: 1 ano e 3 meses.',
      kiddos: {
        name: 'Kiddos',
        ages: '7 — 11 anos',
        description: 'Aprendem brincando com Kids Box New Generation. Bases sólidas desde cedo.',
        levels: 'Basics · Beginner · High Beginner',
      },
      teens: {
        name: 'Teens',
        ages: '12 — 17 anos',
        description: 'De A1 a C1 com temas do interesse deles: cultura, redes sociais, exame oficial.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      adults: {
        name: 'Adults',
        ages: '18+ anos',
        description: 'Inglês para trabalho, viagens e certificações. Horários que respeitam sua agenda.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      tutoring: {
        name: 'Assessorias',
        ages: 'Todas as idades',
        description: 'Inglês, matemática, física, química, biologia e tópicos de engenharia civil.',
        levels: '$120 MXN por hora',
      },
    },
    scholarships: {
      eyebrow: '04 — Bolsas',
      title: 'O preço não deveria',
      titleAccent: 'ser um obstáculo',
      subtitle: 'Quatro bolsas não acumuláveis. Pergunte-nos qual é a melhor para você.',
      cta: 'Solicitar minha bolsa',
    },
    testimonials: {
      eyebrow: '05 — O que os alunos dizem',
      title: 'Histórias reais,',
      titleAccent: 'resultados reais',
      empty: 'Em breve adicionamos depoimentos dos nossos primeiros alunos.',
    },
    finalCta: {
      eyebrow: '06 — Dê o primeiro passo',
      title: 'Comece um',
      titleAccent: 'novo idioma',
      titleEnd: ' nesta geração.',
      subtitle:
        'Pré-inscrições abertas de 1º de junho a 27 de julho de 2026. As aulas começam em 10 de agosto.',
      ctaPrimary: 'Falar pelo WhatsApp',
      ctaSecondary: 'Teste de nivelamento gratuito',
    },
  },

  // ===========================================================================
  // COURSES
  // ===========================================================================
  courses: {
    list: {
      title: 'Nossos cursos',
      titleAccent: 'e programas',
      subtitle:
        'Três trilhas em inglês — Kiddos, Teens e Adults — mais assessorias de inglês e outras matérias.',
      kiddosSectionTitle: 'English for Kiddos',
      kiddosSubtitle: 'Crianças de 7 a 11 anos. Material: Kids Box New Generation.',
      teensSectionTitle: 'English for Teens',
      teensSubtitle: 'Adolescentes de 12 a 17 anos. De A1 a C1.',
      adultsSectionTitle: 'English for Adults',
      adultsSubtitle: 'Maiores de 18 anos. Inglês para trabalho, viagens e certificações.',
      tutoringSectionTitle: 'Assessorias por hora',
      tutoringSubtitle: '$120 MXN/hr. Inglês e outras matérias por nível.',
    },
    detail: {
      programLabel: 'Programa',
      levelLabel: 'Nível',
      cefrLabel: 'Quadro europeu',
      agesLabel: 'Idades',
      durationLabel: 'Duração',
      modalityLabel: 'Modalidade',
      modality: '100% online ao vivo',
      whatYoullLearn: 'O que você vai aprender?',
      materials: 'Material didático',
      next: 'Próximo nível',
      prev: 'Nível anterior',
      ctaTitle: 'Pronto para começar?',
      ctaSubtitle:
        'Solicite informações pelo WhatsApp ou agende seu teste de nivelamento gratuito para encontrar o nível ideal.',
    },
    placeholder: 'Em breve publicamos os detalhes deste curso.',
  },

  // ===========================================================================
  // SCHOLARSHIPS
  // ===========================================================================
  scholarshipsPage: {
    eyebrow: 'Bolsas',
    title: 'Quatro caminhos',
    titleAccent: 'para obter sua bolsa',
    subtitle:
      'Não são acumuláveis: você escolhe a que mais lhe convém. Aplicam durante a pré-inscrição e valem por toda a geração.',
    items: [
      {
        name: 'Bolsa Aproveitamento',
        discount: '15%',
        requirement: 'Média acadêmica acumulada igual ou superior a 85/100.',
        howTo:
          'Envie-nos pelo WhatsApp seu boletim ou comprovante oficial. Aplica para alunos matriculados em escola ativa.',
      },
      {
        name: 'Bolsa Familiar',
        discount: '15%',
        requirement: '2 ou mais familiares diretos matriculados ao mesmo tempo.',
        howTo:
          'Inscreva-se em grupo: a bolsa se aplica a todos os integrantes registrados na mesma geração.',
      },
      {
        name: 'Bolsa Indicação',
        discount: '10%',
        requirement: 'Um indicado não familiar se matricula seguindo sua recomendação.',
        howTo:
          'Seu indicado deve mencionar seu nome completo ao fazer a pré-inscrição. Seu desconto é aplicado na próxima mensalidade.',
      },
      {
        name: 'Bolsa Full Learning',
        discount: '15%',
        requirement: 'Matrícula simultânea em 2 ou mais cursos.',
        howTo:
          'Aplica se você faz, por exemplo, inglês + assessorias ou dois níveis diferentes em paralelo.',
      },
    ],
    rules: {
      title: 'Regras em uma linha',
      items: [
        'As bolsas não são acumuláveis: você escolhe apenas uma.',
        'Aplicam sobre a mensalidade, não sobre matrícula nem material.',
        'São mantidas enquanto o aluno conservar frequência e aproveitamento.',
        'Qualquer dúvida, pergunte-nos pelo WhatsApp antes de se matricular.',
      ],
    },
    cta: {
      title: 'Tem interesse em uma bolsa?',
      subtitle: 'Conte-nos seu caso e diremos qual é a mais vantajosa para você.',
      primary: 'Solicitar minha bolsa',
      secondary: 'Solicitar informações gerais',
    },
  },

  // ===========================================================================
  // ABOUT
  // ===========================================================================
  about: {
    eyebrow: 'Sobre nós',
    title: 'Uma academia que nasce para',
    titleAccent: 'inspirar o esforço',
    subtitle:
      '"Streben" em alemão significa aspirar, esforçar-se, lutar para alcançar metas. Esse é o espírito com o qual abrimos esta academia.',
    history: {
      title: 'Nossa história',
      body: [
        'A STREBEN ACADEMY surge após sete anos de experiência direta em assessorias personalizadas. O que começou como acompanhamento individual se consolidou em 2025 como uma academia com visão própria: ensino centrado na pessoa, métodos britânicos e bolsas acessíveis.',
        'As primeiras turmas começam em janeiro de 2026. Apostamos em grupos reduzidos, avaliação qualitativa do avanço e um acompanhamento próximo que se percebe desde a primeira aula.',
      ],
    },
    founder: {
      eyebrow: 'Fundadora',
      name: 'Arantza Molina',
      title: 'Fundadora · Coordenadora acadêmica',
      bio: [
        'Engenheira civil de formação. Faixa preta 2º dan em taekwondo. Passou pela IACES e ANEIC em sua etapa universitária, onde aprendeu a coordenar equipes e projetos educacionais.',
        'Desde 2018 oferece assessorias personalizadas em inglês e disciplinas de ciências exatas. Em 2025 reúne essa experiência em uma academia com identidade própria: STREBEN.',
      ],
    },
    values: {
      title: 'Strive, Dream and Achieve',
      items: [
        { word: 'Strive', meaning: 'Esforce-se. A constância abre portas que o talento apenas entreabre.' },
        { word: 'Dream', meaning: 'Sonhe. Cada meta começa sendo uma ideia, então mire alto.' },
        { word: 'Achieve', meaning: 'Conquiste. Acompanhamos o processo para que o resultado seja seu.' },
      ],
    },
    mission: {
      title: 'Missão',
      body: 'Impulsionar cada aluno a alcançar seu máximo potencial mediante um ensino personalizado e focado em resultados, onde seus objetivos, ideias e aspirações são o centro do aprendizado.',
    },
    vision: {
      title: 'Visão',
      body: 'Tornar-nos uma academia líder que transforme a educação por meio de uma abordagem personalizada e dinâmica, formando pessoas capazes de se adaptar a um mundo em constante mudança.',
    },
  },

  // ===========================================================================
  // TESTIMONIALS
  // ===========================================================================
  testimonialsPage: {
    eyebrow: 'Depoimentos',
    title: 'Histórias de quem',
    titleAccent: 'já está no caminho',
    subtitle:
      'As primeiras turmas começam em janeiro de 2026. Em breve traremos as vozes dos alunos. Por enquanto, compartilhamos o espírito com o qual ensinamos.',
    placeholderTitle: 'Sua história poderia estar aqui',
    placeholderBody:
      'Matricule-se e faça parte da primeira turma. Compartilharemos seu progresso com muito orgulho.',
    cta: 'Solicitar informações',
  },

  // ===========================================================================
  // CONTACT
  // ===========================================================================
  contactPage: {
    eyebrow: 'Contato',
    title: 'Vamos conversar.',
    titleAccent: 'É gratuito e rápido.',
    subtitle:
      'Conte-nos para quem é o curso (você, seu filho, seu filho adolescente) e de qual nível você parte. Respondemos em horário comercial.',
    form: {
      name: 'Seu nome',
      namePlaceholder: 'Como gosta de ser chamado(a)',
      email: 'E-mail',
      emailPlaceholder: 'você@email.com',
      phone: 'WhatsApp',
      phonePlaceholder: '+52 ...',
      program: 'Qual programa te interessa?',
      programOptions: ['Inglês para crianças', 'Inglês para adolescentes', 'Inglês para adultos', 'Assessorias por hora', 'Não tenho certeza'],
      message: 'Conte-nos mais',
      messagePlaceholder: 'Idade, nível atual, horários disponíveis, dúvidas...',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada! Entraremos em contato em breve.',
      error: 'Ocorreu um erro. Tente novamente ou escreva-nos pelo WhatsApp.',
      consent:
        'Ao enviar, você concorda que entremos em contato para responder sua consulta. Não compartilhamos seus dados.',
    },
    direct: {
      title: 'Ou escreva-nos diretamente',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Telefone',
      emailLabel: 'E-mail',
      socialLabel: 'Redes sociais',
    },
    hours: {
      title: 'Horários de atendimento',
      body: 'Segunda a sexta · 9h às 19h (horário do centro do México).',
    },
  },

  // ===========================================================================
  // GALLERY & STUDENTS
  // ===========================================================================
  gallery: {
    eyebrow: 'Galeria',
    title: 'Momentos na',
    titleAccent: 'STREBEN',
    subtitle:
      'Em breve compartilharemos fotos e vídeos de aulas, eventos e reconhecimentos. Siga nossas redes para não perder nada.',
    placeholder: 'Estamos preparando esta seção. As primeiras aulas começam em 10 de agosto de 2026.',
  },
  students: {
    eyebrow: 'Alunos',
    title: 'Avisos e',
    titleAccent: 'recursos',
    subtitle:
      'Informações rápidas para quem já faz parte da academia: calendário, horários e links úteis.',
    calendar: {
      title: 'Calendário 2026',
      items: [
        { label: 'Pré-inscrições', value: 'De 1º de junho a 27 de julho' },
        { label: 'Teste de nivelamento', value: 'A coordenar individualmente' },
        { label: 'Início das aulas', value: '10 de agosto de 2026' },
      ],
    },
    schedules: {
      title: 'Horários',
      body: 'Os horários são publicados após o encerramento das pré-inscrições. Pergunte-nos sobre as turmas disponíveis para o seu nível.',
    },
    contact: {
      title: 'Precisa de ajuda?',
      body: 'Escreva-nos pelo WhatsApp ou pelo e-mail da academia. Respondemos em horário comercial.',
    },
  },

  // ===========================================================================
  // LEGAL
  // ===========================================================================
  legal: {
    privacy: {
      title: 'Política de privacidade',
      lastUpdate: 'Última atualização: junho de 2026.',
      body: [
        'Na STREBEN ACADEMY respeitamos sua privacidade. Esta página explica quais dados coletamos, para que os usamos e quais são seus direitos.',
        'Coletamos apenas os dados que você nos compartilha voluntariamente ao enviar o formulário de contato ou solicitar informações pelo WhatsApp: nome, e-mail, telefone e a mensagem que você escrever.',
        'Usamos esses dados para entrar em contato e responder sua consulta. Não os compartilhamos com terceiros externos à operação da academia nem os utilizamos para fins publicitários.',
        'Você pode solicitar a qualquer momento a exclusão dos seus dados escrevendo para streben.academy@gmail.com.',
        'Este site pode usar cookies técnicos para lembrar suas preferências (idioma, tema escuro). Não usamos cookies publicitários por padrão. Se no futuro forem ativadas ferramentas de análise, este aviso será atualizado.',
      ],
    },
    terms: {
      title: 'Aviso legal',
      lastUpdate: 'Última atualização: junho de 2026.',
      body: [
        'O site strebenacademy.com é propriedade da STREBEN ACADEMY. As imagens, textos, logotipos e conteúdos publicados são propriedade da academia ou de seus licenciantes, e estão protegidos pelas leis de propriedade intelectual.',
        'As informações publicadas têm caráter informativo. As condições de matrícula, preços e bolsas podem ser atualizadas; no momento da matrícula, as condições definitivas são entregues por escrito.',
        'Qualquer dúvida sobre o uso do site ou o conteúdo publicado pode ser direcionada a streben.academy@gmail.com.',
      ],
    },
  },

  // ===========================================================================
  // FOOTER
  // ===========================================================================
  footer: {
    tagline: 'Strive, Dream and Achieve.',
    description:
      'Academia de inglês britânico online ao vivo. Cobertura: todo o México.',
    navTitle: 'Navegação',
    coursesTitle: 'Cursos',
    legalTitle: 'Legal',
    contactTitle: 'Contato',
    rightsReserved: 'Todos os direitos reservados.',
    builtWith: 'Site projetado e desenvolvido com carinho.',
  },

  // ===========================================================================
  // ERRORS
  // ===========================================================================
  errors: {
    notFoundTitle: 'Página não encontrada',
    notFoundBody:
      'Não encontramos o que você procurava. Talvez tenha sido movido ou o link esteja incorreto. Aqui estão alguns atalhos.',
    backHome: 'Voltar ao início',
  },
} satisfies Dictionary;
