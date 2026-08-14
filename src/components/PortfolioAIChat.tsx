import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, User, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface PortfolioAIChatProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

const PRESET_QUESTIONS = [
  {
    en: 'What is his experience with Flutter and mobile apps?',
    sr: 'Kakvo je njegovo iskustvo sa Flutter-om i mobilnim aplikacijama?',
  },
  {
    en: 'Why does he specialize in Alpine.js & Vanilla JS?',
    sr: 'Zašto je specijalizovan za Alpine.js i Vanilla JS?',
  },
  {
    en: 'What backend and database tech does he use?',
    sr: 'Koje backend i bazne tehnologije koristi?',
  },
  {
    en: 'How does he integrate AI / LLM models?',
    sr: 'Kako integriše AI / LLM modele?',
  },
];

export const PortfolioAIChat: React.FC<PortfolioAIChatProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text:
        lang === 'en'
          ? `Hello! I am the assistant for ${PERSONAL_INFO.name}, a Web & Mobile Engineer with 9+ years of experience. Ask me about his technical stack, Flutter apps, Alpine.js architecture, or Go backend services!`
          : `Zdravo! Ja sam asistent za ${PERSONAL_INFO.name}, Web i Mobile inženjera sa preko 9 godina iskustva. Pitajte me o njegovom tehnološkom stogu, Flutter aplikacijama, Alpine.js arhitekturi ili Go backend servisima!`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const generateAnswer = (question: string) => {
    const qLower = question.toLowerCase();

    if (qLower.includes('flutter') || qLower.includes('mobile') || qLower.includes('play store')) {
      return lang === 'en'
        ? "At Media Buy Services he engineered, tested, and published native Android and cross-platform mobile apps from scratch in Flutter and Dart, including complex Google Play Billing for in-app purchases and subscriptions, Firebase Auth, Pocketbase real-time tracking, and OneSignal engagement funnels. At Vebotek OÜ he launched multiple cross-platform apps to the Play Store and managed the full release lifecycle."
        : "U Media Buy Services-u je izradio, testirao i objavio nativne Android i višeplatformske aplikacije od nule, u Flutter-u i Dart-u — uključujući složen Google Play Billing za kupovine u aplikaciji i pretplate, Firebase Auth, Pocketbase praćenje u realnom vremenu i OneSignal funnel-e. U Vebotek OÜ je lansirao više višeplatformskih aplikacija na Play Store i vodio cijeli ciklus izdavanja.";
    }

    if (qLower.includes('alpine') || qLower.includes('vanilla') || qLower.includes('frontend') || qLower.includes('dx')) {
      return lang === 'en'
        ? "He structures frontend ecosystems with lightweight, compilation-free libraries — Alpine.js and plain JavaScript (ES6+) — alongside React.js, Tailwind CSS, and HTMX. The focus is custom UI components, clean semantic HTML5/CSS3, and maximizing Core Web Vitals and interface reliability, without a heavy build pipeline."
        : "Frontend ekosisteme gradi lakim bibliotekama bez kompajliranja — Alpine.js i čist JavaScript (ES6+) — uz React.js, Tailwind CSS i HTMX. Fokus je na prilagođenim UI komponentama, čistom semantičnom HTML5/CSS3 kodu i maksimiziranju Core Web Vitals-a i pouzdanosti interfejsa, bez teškog build pipeline-a.";
    }

    if (qLower.includes('backend') || qLower.includes('database') || qLower.includes('go') || qLower.includes('sql') || qLower.includes('postgres')) {
      return lang === 'en'
        ? "His backend work spans Go (Golang) for web scrapers and API converters, Node.js with Express and Fastify, Pocketbase and Supabase for real-time data and auth, and PostgreSQL with Prisma. He also handled full-stack synchronizations and structured data migrations from legacy architectures to scalable cloud environments."
        : "Backend rad obuhvata Go (Golang) za web scraper-e i API konvertere, Node.js uz Express i Fastify, Pocketbase i Supabase za podatke u realnom vremenu i autentifikaciju, te PostgreSQL uz Prismu. Radio je i full-stack sinhronizacije i strukturirane migracije podataka sa zastarjelih arhitektura na skalabilna cloud okruženja.";
    }

    if (qLower.includes('ai') || qLower.includes('llm') || qLower.includes('genai') || qLower.includes('nutriflow') || qLower.includes('mcp') || qLower.includes('claude')) {
      return lang === 'en'
        ? "He built NutriFlow, an AI-driven full-stack PWA and mobile app using the Google GenAI SDK with a Node.js/Express backend and Supabase, delivering automated nutrition logging through LLM prompts. His integration work also covers Gemini API integrations, Claude Skills, and MCP servers."
        : "Izradio je NutriFlow — AI vođenu full-stack PWA i mobilnu aplikaciju sa Google GenAI SDK-om, Node.js/Express backend-om i Supabase-om, sa automatskim vođenjem dnevnika ishrane putem LLM upita. Iskustvo u integracijama obuhvata i Gemini API, Claude Skills i MCP servere.";
    }

    if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('hire') || qLower.includes('kontakt')) {
      return lang === 'en'
        ? `You can reach him directly at ${PERSONAL_INFO.email} or ${PERSONAL_INFO.phone}. He is based in ${PERSONAL_INFO.location} and open to senior and lead roles.`
        : `Možete ga kontaktirati direktno na ${PERSONAL_INFO.email} ili ${PERSONAL_INFO.phone}. Baziran je u Banjoj Luci i otvoren za senior i lead pozicije.`;
    }

    return lang === 'en'
      ? `${PERSONAL_INFO.name} is a Web & Mobile Engineer with 9+ years of continuous experience across Infomedia DOO, Vebotek OÜ, and Media Buy Services. He specializes in lightweight, high-performance web architectures, Flutter mobile delivery, Go data pipelines, and payment and AI integrations.`
      : `${PERSONAL_INFO.name} je Web i Mobile inženjer sa preko 9 godina neprekidnog iskustva kroz Infomedia DOO, Vebotek OÜ i Media Buy Services. Specijalizovan je za lake web arhitekture visokih performansi, Flutter mobilne aplikacije, Go data pipeline-e te platne i AI integracije.`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(query);
      setMessages((prev) => [...prev, { sender: 'ai', text: answer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl max-w-lg w-full h-[85dvh] max-h-162.5 flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#262626] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-[#1f1f1f] border border-[#c5a059]/40 text-[#c5a059]">
              <Sparkles className="w-4 h-4 animate-pulse text-[#c5a059]" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-bold text-[#e5e5e5] flex items-center gap-1">
                Candidate AI Recruiter Assistant
              </h3>
              <p className="text-[10px] text-[#a3a3a3] font-mono uppercase tracking-wider">
                Ask about 9+ YOE, Flutter, Alpine.js, Go, or GenAI
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-[#a3a3a3] hover:text-[#e5e5e5]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs font-light">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-md flex items-center justify-center text-xs shrink-0 ${
                  m.sender === 'user'
                    ? 'bg-[#c5a059] text-[#0a0a0a] font-bold'
                    : 'bg-[#141414] text-[#c5a059] border border-[#262626]'
                }`}
              >
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3 rounded-lg max-w-[80%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#c5a059] text-[#0a0a0a] font-medium rounded-tr-none'
                    : 'bg-[#111111] border border-[#262626] text-[#e5e5e5] rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-[#a3a3a3] text-xs font-mono uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#c5a059]" />
              <span>Analyzing engineering background...</span>
            </div>
          )}
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="p-2 bg-[#141414] border-t border-[#262626] space-y-1.5 shrink-0">
          <p className="text-[9px] text-[#a3a3a3] font-mono uppercase tracking-wider px-2">Suggested Questions:</p>
          <div className="flex flex-wrap gap-1.5">
            {PRESET_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q[lang])}
                className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#111111] hover:bg-[#1a1a1a] text-[#a3a3a3] hover:text-[#e5e5e5] border border-[#262626] text-left transition-colors cursor-pointer"
              >
                {q[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0a0a0a] border-t border-[#262626] flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'en' ? "Ask about experience or tech stack..." : "Pitaj o iskustvu ili tehnologijama..."}
            className="flex-1 bg-[#111111] border border-[#262626] rounded-md px-3 py-2 text-xs text-[#e5e5e5] focus:outline-none focus:border-[#c5a059]"
          />
          <button
            onClick={() => handleSend()}
            className="p-2 rounded-md bg-[#c5a059] text-[#0a0a0a] font-bold cursor-pointer hover:opacity-90"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
