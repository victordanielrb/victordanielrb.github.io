export type Language = 'en' | 'pt'

export interface Project {
  title: string
  description: string
  contributions: string[]
  challenges?: string[]
  tags: string[]
  link: string
  image: string
  personal?: boolean
}

export interface TechItem {
  name: string
  icon: string
  description?: string
}

export interface SocialLink {
  label: string
  icon: string
  href: string
  download?: boolean
  filename?: string
}

export interface Translations {
  nav: {
    about: string
    projects: string
    technologies: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    bio: string[]
  }
  projects: {
    title: string
    personalBadge: string
    challenges: string
    viewProject: string
  }
  projectList: Project[]
  technologies: {
    title: string
    showMore: string
    showLess: string
  }
  mainTech: TechItem[]
  extraTech: TechItem[]
  social: SocialLink[]
}

const mainTech: TechItem[] = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Reactive component-based interfaces' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Cross-platform mobile apps' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'JS with static typing' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Server-side JavaScript' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'Document-oriented NoSQL' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', description: 'In-memory cache and store' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational databases' },
  { name: 'AI Agents', icon: 'fas fa-robot', description: 'Autonomous intelligent agents' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Application containerization' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Enterprise Java framework' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'Full-stack React framework' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first CSS framework' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Distributed version control' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', description: 'Python microframework' },
  { name: 'REST APIs', icon: 'fas fa-plug', description: 'Web service integration' },
]

const extraTech: TechItem[] = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', description: 'Cloud infrastructure' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', description: 'Google Cloud Platform' },
  { name: 'Agile', icon: 'fas fa-arrows-rotate', description: 'Scrum and Kanban' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Enterprise and robust language' },
]

const projectsEn: Project[] = [
  {
    title: 'Taggify',
    description:
      "NFC digital business-card platform — tap a physical NFC card or tag and it opens the person's profile page, no app install. Full product spanning a public Next.js profile and marketing site and a standalone admin panel to manage client cards and QR redirect codes.",
    contributions: [
      'Built the public app (Next.js App Router, Server Components) — marketing landing page, per-user profile pages, and stable /c/<code> redirect codes that can be reassigned without reprinting physical cards',
      'Data-driven theming engine: 13 background themes, 21 button styles, and per-link accent overrides driven by CSS variables, with relative-luminance contrast logic that auto-picks readable text colors',
      'Designed a standalone admin panel (taggify-admin) — HMAC-SHA256 session auth, pre-signed Cloudflare R2 uploads with a client-side image pipeline (WebP compression, GIF passthrough), and zod validation at every route boundary',
      'Offline-first QR workflow: codes are pre-generated and printed before a client exists, then lazily assigned via PATCH — the printed QR never changes; QRs render client-side at 1024px print resolution',
      'MongoDB Atlas persistence with a hardened connection lifecycle (dev hot-reload-safe client, DNS override for restricted resolvers) and a read-only DB user for the public app',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'Cloudflare R2', 'NFC', 'Docker'],
    link: 'https://github.com/victordanielrb/taggify',
    image: '/img/taggify.png',
    personal: true,
  },
  {
    title: 'Vibez',
    description:
      'Matches the visual vibe of an image with the sonic vibe of a YouTube playlist. Uses Gemini embeddings + cosine similarity to find the song that best fits the photo. Personal project spanning full architecture design to implementation.',
    contributions: [
      'Full system architecture design from scratch — monorepo Bun with separate Vite + React frontend and FastAPI Python API workspaces',
      'AI pipeline: image description → genre extraction → dual vector embedding → cosine search → multimodal LLM reranker',
      'Evolved the search architecture through 3 iterations: direct cross-modal embedding, text-bridge approach, and final two-stage retrieval + reranking',
      'Built ADK agents (image_describer, genre_extractor, track_reranker) for structured multimodal reasoning',
      'Integrated Gemini multimodal embeddings, Essentia DSP, EffNet-Discogs (TensorFlow), yt-dlp, ffmpeg, and sqlite-vec',
    ],
    tags: ['React', 'FastAPI', 'Python', 'Gemini AI', 'AI Agents', 'Bun'],
    link: 'https://github.com/victordanielrb/vibez',
    image: '/img/vibez.png',
    personal: true,
  },
  {
    title: 'Themis',
    description:
      'Intelligent cloud-based legal analysis platform that uses ML and NLP to analyze petitions and identify relevant judicial precedents. Built for judges, lawyers, and court officials at FATEC São José dos Campos.',
    contributions: [
      'Acted as Product Owner — defined requirements, backlog, and sprint scope across 3 sprints',
      'Connected client needs to user flows and features, bridging legal domain requirements with engineering decisions',
      'Designed and implemented judge-facing screens: PDF petition upload and structured precedent results view with similarity percentages and applicability classification',
    ],
    tags: ['Flutter', 'FastAPI', 'Python', 'MongoDB', 'Docker', 'NLP', 'Product Owner'],
    link: 'https://github.com/Equipe-Skyfall/themis',
    image: '/img/themis.png',
  },
  {
    title: 'TrackerFi',
    description:
      'A platform for cryptocurrency portfolio control and analysis, integrating real-time quotes and offering tools for monitoring multiple wallets simultaneously. Personal project spanning backend, frontend, and database.',
    contributions: [
      'Complete backend development using TypeScript with Node.js',
      'Full frontend styling with React Native and CSS',
      'MongoDB and Redis database implementation for external API integration',
      'Microservices architecture',
      'Alert and notification system',
      'Cryptocurrency wallet tracking features',
      'Educational section for beginner investors',
    ],
    tags: ['React Native', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Microservices'],
    link: 'https://github.com/victordanielrb/trackerfi',
    image: '/img/tracker_fi.jpg',
    personal: true,
  },
  {
    title: 'Skytrack',
    description:
      'Real-time meteorological data collection system focused on risk prevention and natural disasters. Platform that centralizes and analyzes rainfall data and meteorological indices captured by a low-cost sensor network.',
    contributions: [
      'Frontend development for dashboard screens and modals',
      'AWS deployment across multiple instances',
      'Docker implementation in the deployment process',
    ],
    tags: ['React', 'Tailwind', 'TypeScript', 'AWS', 'Docker'],
    link: 'https://github.com/Equipe-Skyfall/skytrack',
    image: '/img/skytrack.jpg',
  },
  {
    title: 'NectoPoint',
    description:
      'Electronic time tracking management system for organizations. Automates time registration, controls overtime, vacations and days off, generates reports and sends alerts, ensuring labor compliance.',
    contributions: [
      'Acted as Scrum Master, planning the project structure and sprints with the PO',
      'Frontend page and component development using React.js',
      'Team coordination to meet client expectations',
      'Implementation of real-time time tracking features',
    ],
    tags: ['React.js', 'Scrum Master', 'Agile', 'Front-end'],
    link: 'https://github.com/Equipe-Skyfall/nectopoint',
    image: '/img/nectopoint.jpg',
  },
]

const projectsPt: Project[] = [
  {
    title: 'Taggify',
    description:
      'Plataforma de cartões de visita digitais NFC — encoste um cartão ou tag NFC no celular e o perfil da pessoa abre, sem instalar app. Produto completo que abrange um site público Next.js (página de perfil e marketing) e um painel administrativo independente para gerenciar os cartões dos clientes e os códigos de redirecionamento QR.',
    contributions: [
      'Construí o app público (Next.js App Router, Server Components) — landing page de marketing, páginas de perfil por usuário e códigos de redirecionamento estáveis em /c/<code> que podem ser reatribuídos sem reimprimir os cartões físicos',
      'Motor de temas dirigido por dados: 13 temas de fundo, 21 estilos de botão e sobreposições de cor de acento por link via variáveis CSS, com lógica de contraste por luminância relativa que escolhe automaticamente cores de texto legíveis',
      'Projetei um painel administrativo independente (taggify-admin) — autenticação de sessão HMAC-SHA256, uploads pré-assinados para Cloudflare R2 com pipeline de imagem no cliente (compressão WebP, passagem de GIF) e validação zod em todas as rotas',
      'Fluxo de QR offline-first: os códigos são pré-gerados e impressos antes de existir um cliente e depois atribuídos via PATCH — o QR impresso nunca muda; QRs renderizados no cliente a 1024px de resolução de impressão',
      'Persistência em MongoDB Atlas com ciclo de vida de conexão reforçado (cliente seguro para hot-reload, override de DNS para resolvedores restritos) e usuário read-only no banco para o app público',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'Cloudflare R2', 'NFC', 'Docker'],
    link: 'https://github.com/victordanielrb/taggify',
    image: '/img/taggify.png',
    personal: true,
  },
  {
    title: 'Vibez',
    description:
      'Cruza o vibe visual de uma imagem com o vibe sonoro de uma playlist do YouTube. Usa embeddings do Gemini + similaridade de cosseno para encontrar a música que mais combina com a foto. Projeto pessoal com design completo de arquitetura até a implementação.',
    contributions: [
      'Design completo da arquitetura do zero — monorepo Bun com workspaces separados: frontend Vite + React e API Python com FastAPI',
      'Pipeline de IA: descrição de imagem → extração de gênero → embedding dual vetorial → busca cosseno → reranker LLM multimodal',
      'Evolução da arquitetura de busca em 3 iterações: embedding cross-modal direto, ponte textual e recuperação em dois estágios com reranking',
      'Construção de agentes ADK (image_describer, genre_extractor, track_reranker) para raciocínio multimodal estruturado',
      'Integração de embeddings multimodais Gemini, Essentia DSP, EffNet-Discogs (TensorFlow), yt-dlp, ffmpeg e sqlite-vec',
    ],
    tags: ['React', 'FastAPI', 'Python', 'Gemini AI', 'AI Agents', 'Bun'],
    link: 'https://github.com/victordanielrb/vibez',
    image: '/img/vibez.png',
    personal: true,
  },
  {
    title: 'Themis',
    description:
      'Plataforma inteligente de análise jurídica na nuvem que utiliza ML e PLN para analisar petições e identificar precedentes judiciais relevantes. Desenvolvida para juízes, advogados e servidores judiciários na FATEC São José dos Campos.',
    contributions: [
      'Atuei como Product Owner — definição de requisitos, backlog e escopo de sprints ao longo de 3 ciclos',
      'Conexão das demandas do cliente com fluxos de usuário e funcionalidades, traduzindo requisitos do domínio jurídico em decisões de engenharia',
      'Design e implementação das telas do juiz: upload de petições em PDF e visualização de precedentes com percentuais de similaridade e classificação de aplicabilidade',
    ],
    tags: ['Flutter', 'FastAPI', 'Python', 'MongoDB', 'Docker', 'NLP', 'Product Owner'],
    link: 'https://github.com/Equipe-Skyfall/themis',
    image: '/img/themis.png',
  },
  {
    title: 'TrackerFi',
    description:
      'Plataforma de controle e análise de portfólio de criptomoedas, integrando cotações em tempo real e oferecendo ferramentas para monitoramento de múltiplas carteiras simultaneamente. Projeto pessoal com desenvolvimento de backend, frontend e banco de dados.',
    contributions: [
      'Desenvolvimento completo do backend em TypeScript com Node.js',
      'Estilização completa do frontend com React Native e CSS',
      'Implementação de MongoDB e Redis para integração com APIs externas',
      'Arquitetura de microsserviços',
      'Sistema de alertas e notificações',
      'Funcionalidades de rastreamento de carteiras de criptomoedas',
      'Seção educacional para investidores iniciantes',
    ],
    tags: ['React Native', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Microservices'],
    link: 'https://github.com/victordanielrb/trackerfi',
    image: '/img/tracker_fi.jpg',
    personal: true,
  },
  {
    title: 'Skytrack',
    description:
      'Sistema de coleta de dados meteorológicos em tempo real focado em prevenção de riscos e desastres naturais. Plataforma que centraliza e analisa índices pluviométricos e dados meteorológicos capturados por uma rede de sensores de baixo custo.',
    contributions: [
      'Desenvolvimento frontend para telas de dashboard e modais',
      'Deploy na AWS em múltiplas instâncias',
      'Implementação de Docker no processo de implantação',
    ],
    tags: ['React', 'Tailwind', 'TypeScript', 'AWS', 'Docker'],
    link: 'https://github.com/Equipe-Skyfall/skytrack',
    image: '/img/skytrack.jpg',
  },
  {
    title: 'NectoPoint',
    description:
      'Sistema eletrônico de gestão de ponto para organizações. Automatiza o registro de jornada, controla horas extras, férias e folgas, gera relatórios e envia alertas, garantindo conformidade trabalhista.',
    contributions: [
      'Atuei como Scrum Master, planejando a estrutura do projeto e as sprints com o PO',
      'Desenvolvimento de páginas e componentes frontend com React.js',
      'Coordenação da equipe para atender às expectativas do cliente',
      'Implementação de funcionalidades de registro de ponto em tempo real',
    ],
    tags: ['React.js', 'Scrum Master', 'Agile', 'Front-end'],
    link: 'https://github.com/Equipe-Skyfall/nectopoint',
    image: '/img/nectopoint.jpg',
  },
]

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      technologies: 'Technologies',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Victor Daniel',
      role: 'Fullstack Developer',
      bio: [
        'Fullstack developer building robust, scalable web apps — from efficient APIs and database schemas to responsive, accessible frontends. I care about code quality and shipping products that actually work.',
      ],
    },
    projects: {
      title: 'Projects',
      personalBadge: 'Personal',
      challenges: 'Challenges',
      viewProject: 'View Project',
    },
    projectList: projectsEn,
    technologies: {
      title: 'Technologies',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    mainTech,
    extraTech,
    social: [
      {
        label: 'GitHub',
        icon: 'fab fa-github',
        href: 'https://github.com/victordanielrb',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/in/victor-daniel-ramos-bessa-1436a3215/',
      },
      {
        label: 'Email',
        icon: 'fas fa-envelope',
        href: 'mailto:victordanielramosb@gmail.com',
      },
      {
        label: 'Download CV',
        icon: 'fas fa-file-arrow-down',
        href: '/Victor_Daniel_Ramos_Bessa_EN_CV.pdf',
        download: true,
        filename: 'Victor_Daniel_Ramos_Bessa_EN_CV.pdf',
      },
    ],
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      technologies: 'Tecnologias',
    },
    hero: {
      greeting: 'Olá, sou',
      name: 'Victor Daniel',
      role: 'Desenvolvedor Fullstack',
      bio: [
        'Desenvolvedor fullstack construindo aplicações web robustas e escaláveis — de APIs eficientes e schemas de banco de dados a frontends responsivos e acessíveis. Me importo com qualidade de código e produtos que realmente funcionam.',
      ],
    },
    projects: {
      title: 'Projetos',
      personalBadge: 'Pessoal',
      challenges: 'Desafios',
      viewProject: 'Ver Projeto',
    },
    projectList: projectsPt,
    technologies: {
      title: 'Tecnologias',
      showMore: 'Mostrar mais',
      showLess: 'Mostrar menos',
    },
    mainTech,
    extraTech,
    social: [
      {
        label: 'GitHub',
        icon: 'fab fa-github',
        href: 'https://github.com/victordanielrb',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/in/victor-daniel-ramos-bessa-1436a3215/',
      },
      {
        label: 'Email',
        icon: 'fas fa-envelope',
        href: 'mailto:victordanielramosb@gmail.com',
      },
      {
        label: 'Baixar CV',
        icon: 'fas fa-file-arrow-down',
        href: '/Victor_Daniel_Ramos_Bessa_CV.pdf',
        download: true,
        filename: 'Victor_Daniel_Ramos_Bessa_CV.pdf',
      },
    ],
  },
}
