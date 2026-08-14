import { ExperienceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Aleksandar Milošević',
  initials: 'AM',
  yearsOfExperience: '9+',
  title: {
    en: 'Web & Mobile Engineer',
    sr: 'Web i Mobile Inženjer',
  },
  subtitle: {
    en: '9+ Years Experience in High-Performance Web Architecture, Flutter, Go & AI Integration',
    sr: '9+ godina iskustva u naprednoj web arhitekturi, Flutter-u, Go-u i AI integraciji',
  },
  summary: {
    en: 'Pragmatic and results-driven Senior Software Engineer with over 9 years of continuous experience in architecting high-performance digital products, complex data-heavy frontends, and scalable full-stack ecosystems. Expert in building fast, reliable user interfaces using Vanilla JavaScript and lightweight frameworks, ensuring maximum data precision and rendering speed. Strong track record of translating complex business requirements into intuitive UI/UX components, optimizing data pipelines, and deploying robust cloud backends.',
    sr: 'Pragmatičan Senior Software Engineer sa preko 9 godina neprekidnog iskustva u arhitekturi digitalnih proizvoda visokih performansi, složenih frontenda bogatih podacima i skalabilnih full-stack ekosistema. Ekspert za izradu brzih i pouzdanih korisničkih interfejsa u Vanilla JavaScript-u i lakim okvirima, uz maksimalnu preciznost podataka i brzinu renderovanja. Dokazan u prevođenju složenih poslovnih zahtjeva u intuitivne UI/UX komponente, optimizaciji data pipeline-a i postavljanju pouzdanih cloud backend-a.',
  },
  stats: [
    { label: { en: 'Years Experience', sr: 'Godina Iskustva' }, value: '9+' },
    { label: { en: 'Key Companies', sr: 'Kompanije' }, value: '3' },
    { label: { en: 'Core Tech Stack', sr: 'Tehnologije' }, value: '20+' },
    { label: { en: 'Independent Projects', sr: 'Samostalni Projekti' }, value: '3' },
  ],
  email: 'aleksandarmilosevic89@email.com',
  phone: '+387 65 411 531',
  location: 'Banja Luka, Bosnia and Herzegovina',
  linkedin: 'https://www.linkedin.com/in/aleksandar-milo%C5%A1evi%C4%87-095a7316b/',
  linkedinLabel: 'linkedin.com/in/aleksandar-milošević',
  playStore: 'https://play.google.com/store/apps/dev?id=5100853567203395801&hl=en',
  resumeFile: `${import.meta.env.BASE_URL}Aleksandar-Milosevic-CV.pdf`,
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infomedia',
    company: 'Infomedia DOO',
    companyUrl: 'https://www.linkedin.com/company/infomediabl/',
    role: {
      en: 'Senior Web & Mobile Engineer',
      sr: 'Senior Web i Mobile Inženjer',
    },
    location: 'Banja Luka, BiH',
    period: '04/2017 – Present',
    startDate: '2017-04',
    endDate: 'Present',
    isPresent: true,
    category: 'fullstack',
    tags: ['Alpine.js', 'Vanilla JS', 'Google Analytics', 'Meta Events', 'Stripe API', 'CMS', 'Data Migration'],
    bullets: {
      en: [
        'Data Architecture & Analytics: Engineered custom tracking mechanisms, complex data pipelines, and integrated Google Analytics, Google Ads, and Meta Events to optimize high-scale performance funnels.',
        'Frontend Performance & Optimization: Formulated and structured frontend ecosystems using lightweight, compilation-free libraries (Alpine.js, Vanilla JS). Delivered custom UI components and clean, semantic HTML5/CSS3, maximizing Core Web Vitals and interface reliability.',
        'Systems Engineering & Automation: Developed and centralized internal company systems and enterprise CMS platforms, automating production workflows and driving continuous deployment of high-impact features.',
        'Payment & API Integrations: Successfully implemented Stripe and localized payment gateways, securely managing complex API communications and multi-step checkout flows.',
        'Full-Stack Synchronization & Legacy Migration: Engineered full-stack synchronizations and structured data migrations from legacy architectures to modern, scalable cloud environments, ensuring zero data loss and minimal downtime.',
      ],
      sr: [
        'Arhitektura podataka i analitika: Izrada prilagođenih tracking mehanizama i složenih data pipeline-a, uz integraciju Google Analytics-a, Google Ads-a i Meta Events-a radi optimizacije performansi na velikoj skali.',
        'Frontend performanse i optimizacija: Formiranje i strukturiranje frontend ekosistema kroz lake biblioteke bez kompajliranja (Alpine.js, Vanilla JS). Izrada prilagođenih UI komponenti i čistog, semantičnog HTML5/CSS3 koda uz maksimiziranje Core Web Vitals-a i pouzdanosti interfejsa.',
        'Sistemski inženjering i automatizacija: Razvoj i centralizacija internih sistema kompanije i enterprise CMS platformi, automatizacija produkcionih tokova i kontinuirano isporučivanje funkcionalnosti.',
        'Plaćanja i API integracije: Implementacija Stripe-a i lokalizovanih payment gateway-a, uz bezbjedno upravljanje složenom API komunikacijom i višekoračnim checkout tokovima.',
        'Full-stack sinhronizacija i migracija: Inženjering full-stack sinhronizacija i strukturiranih migracija podataka sa zastarjelih arhitektura na moderna, skalabilna cloud okruženja, bez gubitka podataka i uz minimalan prekid rada.',
      ],
    },
  },
  {
    id: 'vebotek',
    company: 'Vebotek OÜ',
    companyUrl: 'https://play.google.com/store/apps/developer?id=Vebotek',
    role: {
      en: 'Mobile & Android Engineer',
      sr: 'Mobile i Android Inženjer',
    },
    location: 'Estonia / Remote',
    period: '05/2025 – 07/2026',
    startDate: '2025-05',
    endDate: '2026-07',
    category: 'mobile',
    tags: ['Go (Golang)', 'Google Play Store', 'Cross-Platform', 'Web Scraping', 'REST APIs'],
    bullets: {
      en: [
        'Engineered, tested, and successfully launched multiple custom cross-platform applications to the Google Play Store, managing the full product lifecycle from initial code to production.',
        'Built and deployed a custom high-performance web scraper to API converter using Go (Golang) for dynamic content delivery for mobile users.',
      ],
      sr: [
        'Izrada, testiranje i uspješno lansiranje više prilagođenih višeplatformskih aplikacija na Google Play Store, uz vođenje cijelog životnog ciklusa proizvoda od prvog koda do produkcije.',
        'Izrada i postavljanje prilagođenog web scraper-a sa konverzijom u API u Go (Golang) jeziku, za dinamičku isporuku sadržaja mobilnim korisnicima.',
      ],
    },
  },
  {
    id: 'mediabuy',
    company: 'Media Buy Services',
    companyUrl: 'https://www.linkedin.com/company/media-buy-services/',
    role: {
      en: 'Web and Mobile Developer',
      sr: 'Web i Mobile Developer',
    },
    location: 'Remote',
    period: '10/2019 – 07/2025',
    startDate: '2019-10',
    endDate: '2025-07',
    category: 'mobile',
    tags: ['Flutter / Dart', 'Google Play Billing', 'Firebase Auth', 'Pocketbase', 'OneSignal', 'Go (Golang)', 'Node.js'],
    bullets: {
      en: [
        'End-to-End Product Delivery: Engineered, tested, and successfully published native Android and cross-platform mobile applications from scratch utilizing Flutter and Dart.',
        'Monetization & Engagement: Implemented complex Google Play Billing systems for in-app purchases/subscriptions and managed advanced user engagement funnels using OneSignal for push notifications.',
        'Backend & Cloud Infrastructure: Handled secure user authentication via Firebase Auth, deployed Pocketbase for real-time data tracking, and designed automated web scrapers and REST APIs using Go (Golang) and Node.js.',
        'Release Management: Fully managed production rollout cycles and deployment logistics on the Google Play Store console.',
      ],
      sr: [
        'Isporuka proizvoda od početka do kraja: Izrada, testiranje i objavljivanje nativnih Android i višeplatformskih mobilnih aplikacija od nule, u Flutter-u i Dart-u.',
        'Monetizacija i angažman korisnika: Implementacija složenih Google Play Billing sistema za kupovine u aplikaciji i pretplate, uz vođenje naprednih funnel-a za angažman korisnika kroz OneSignal push notifikacije.',
        'Backend i cloud infrastruktura: Bezbjedna autentifikacija korisnika kroz Firebase Auth, postavljanje Pocketbase-a za praćenje podataka u realnom vremenu i izrada automatizovanih web scraper-a i REST API-ja u Go (Golang) i Node.js-u.',
        'Upravljanje izdanjima: Potpuno vođenje produkcionih rollout ciklusa i logistike objavljivanja kroz Google Play Store konzolu.',
      ],
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'conexa',
    title: 'Conexa',
    url: 'https://conexa.ba/',
    role: {
      en: 'Lead Product Engineer & UI/UX Designer',
      sr: 'Glavni Inženjer Proizvoda i UI/UX Dizajner',
    },
    summary: {
      en: 'A web presence concepted, designed, and developed end-to-end — pixel-perfect, highly responsive, and optimized.',
      sr: 'Web prisustvo osmišljeno, dizajnirano i razvijeno od početka do kraja — pixel-perfect, responzivno i optimizovano.',
    },
    bullets: {
      en: [
        'End-to-End Delivery: Independently concepted, designed, and fully developed the user experience and frontend layout.',
        'Created a pixel-perfect, highly responsive and optimized web presence from a blank page.',
      ],
      sr: [
        'Isporuka od početka do kraja: Samostalno osmišljen, dizajniran i u potpunosti razvijen korisnički doživljaj i frontend raspored.',
        'Izrađeno pixel-perfect, izrazito responzivno i optimizovano web prisustvo od prazne stranice.',
      ],
    },
    stack: ['UI/UX Design', 'Tailwind CSS', 'Responsive Layouts', 'HTML5/CSS3'],
    category: 'design',
    highlightMetric: 'Pixel-Perfect Responsive UI',
    colorGrad: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'nutriflow',
    title: 'NutriFlow',
    url: 'https://nutriflow-623241712044.europe-west1.run.app/',
    role: {
      en: 'Full-Stack Developer',
      sr: 'Full-Stack Developer',
    },
    summary: {
      en: 'An AI-driven full-stack PWA and mobile app with automated nutrition logging powered by LLM prompts.',
      sr: 'AI vođena full-stack PWA i mobilna aplikacija sa automatskim vođenjem dnevnika ishrane putem LLM upita.',
    },
    bullets: {
      en: [
        'Engineered a full-stack, cross-platform mobile application from frontend through backend and deployment.',
        'Integrated real-time database management and authentication via Supabase, and engineered AI-driven automated nutrition logging using advanced LLM prompts.',
      ],
      sr: [
        'Izrađena full-stack, višeplatformska mobilna aplikacija — od frontenda, preko backend-a, do objavljivanja.',
        'Integrisano upravljanje bazom u realnom vremenu i autentifikacija kroz Supabase, uz AI vođeno automatsko vođenje dnevnika ishrane putem naprednih LLM upita.',
      ],
    },
    stack: ['React/TypeScript', 'Vite', 'Tailwind CSS', 'Node.js/Express', 'Google GenAI SDK', 'Supabase', 'Bubblewrap CLI', 'Google Cloud'],
    category: 'ai',
    highlightMetric: 'AI-Driven Nutrition Logging',
    colorGrad: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'auto-parts',
    title: 'E-Commerce Auto Parts Shop',
    url: 'https://auto-parts-shop-alpha.vercel.app/',
    role: {
      en: 'Full-Stack Developer',
      sr: 'Full-Stack Developer',
    },
    summary: {
      en: 'A comprehensive, high-scale e-commerce system optimized for massive relational inventory queries.',
      sr: 'Sveobuhvatan e-commerce sistem velike razmjere, optimizovan za masovne relacione upite nad zalihama.',
    },
    bullets: {
      en: [
        'Architected a comprehensive, high-scale full-stack e-commerce system optimized for massive relational inventory queries.',
        'Paired a Fastify and Prisma backend over PostgreSQL with a fast Next.js frontend experience.',
      ],
      sr: [
        'Arhitektura sveobuhvatnog full-stack e-commerce sistema velike razmjere, optimizovanog za masovne relacione upite nad zalihama.',
        'Spojen Fastify i Prisma backend nad PostgreSQL-om sa brzim Next.js frontend doživljajem.',
      ],
    },
    stack: ['Next.js', 'Tailwind CSS', 'Axios', 'Node.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma'],
    category: 'fullstack',
    highlightMetric: 'High-Scale Relational Inventory',
    colorGrad: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend Architecture',
      sr: 'Frontend Arhitektura',
    },
    icon: 'Code2',
    description: {
      en: 'Fast, reliable interfaces — lightweight where a build step would only add weight, component-driven where it pays off.',
      sr: 'Brzi i pouzdani interfejsi — laki tamo gdje bi build korak samo dodao težinu, komponentni tamo gdje se to isplati.',
    },
    skills: [
      { name: 'Alpine.js & Plain JavaScript (ES6+)', level: 98, highlight: 'Zero compile overhead' },
      { name: 'HTML5, CSS3 & Tailwind CSS', level: 96, highlight: 'Clean semantic markup' },
      { name: 'React.js & TypeScript', level: 90, highlight: 'Components & state' },
      { name: 'HTMX', level: 85, highlight: 'Hypermedia-driven UI' },
      { name: 'SCSS, jQuery & Bootstrap', level: 88, highlight: 'Legacy maintenance' },
    ],
  },
  {
    id: 'mobile',
    title: {
      en: 'Mobile Development',
      sr: 'Mobilni Razvoj',
    },
    icon: 'Smartphone',
    description: {
      en: 'End-to-end mobile engineering from Flutter development to Play Store publishing.',
      sr: 'Mobilni razvoj od Flutter aplikacije do objavljivanja na Play Store-u.',
    },
    skills: [
      { name: 'Flutter & Dart', level: 94, highlight: 'Cross-platform & native Android' },
      { name: 'Google Play Store Publishing', level: 92, highlight: 'Full release lifecycle' },
      { name: 'Google Play Billing', level: 90, highlight: 'IAP & subscriptions' },
      { name: "Google's Bubblewrap (PWA/TWA)", level: 88, highlight: 'Web app to Play Store' },
      { name: 'OneSignal Push Funnels', level: 88, highlight: 'Engagement & retention' },
    ],
  },
  {
    id: 'backend',
    title: {
      en: 'Backend & Cloud',
      sr: 'Backend i Cloud',
    },
    icon: 'Database',
    description: {
      en: 'Data pipelines, real-time sync engines, and relational schema work.',
      sr: 'Data pipeline-i, sinhronizacija u realnom vremenu i rad sa relacionim šemama.',
    },
    skills: [
      { name: 'Node.js & Express', level: 92, highlight: 'REST APIs & middleware' },
      { name: 'Pocketbase & Supabase', level: 90, highlight: 'Real-time & auth' },
      { name: 'Go (Golang)', level: 88, highlight: 'Scrapers & API converters' },
      { name: 'PostgreSQL', level: 88, highlight: 'Complex relational queries' },
      { name: 'PHP / Laravel', level: 60, highlight: 'Working basics' },
    ],
  },
  {
    id: 'ai-integrations',
    title: {
      en: 'Integrations & AI',
      sr: 'Integracije i AI',
    },
    icon: 'Cpu',
    description: {
      en: 'Payment flows, REST integrations, and LLM tooling wired into real products.',
      sr: 'Platni tokovi, REST integracije i LLM alati ugrađeni u stvarne proizvode.',
    },
    skills: [
      { name: 'Stripe API & Payment Gateways', level: 94, highlight: 'Secure checkout flows' },
      { name: 'REST API Integrations', level: 92, highlight: 'Multi-service data flows' },
      { name: 'Gemini API Integrations', level: 90, highlight: 'LLM prompts in production' },
      { name: 'Claude Skills & MCP Servers', level: 88, highlight: 'Agent tooling' },
      { name: 'Firebase Auth', level: 90, highlight: 'Session & auth guard' },
    ],
  },
];

export const CLI_COMMAND_HELP = [
  { cmd: 'help', desc: 'List all available terminal commands' },
  { cmd: 'summary', desc: 'Print concise professional summary' },
  { cmd: 'experience', desc: 'Display work experience history' },
  { cmd: 'projects', desc: 'Display key engineering projects' },
  { cmd: 'skills', desc: 'Print technology stack & proficiency breakdown' },
  { cmd: 'contact', desc: 'Get direct email and contact details' },
  { cmd: 'clear', desc: 'Clear the terminal output' },
  { cmd: 'sudo hire', desc: 'Unlock instant contact option' },
];
