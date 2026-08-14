import React, { useState } from 'react';
import { ArrowRight, Terminal, Sparkles, Zap, CheckCircle2, Copy, Check, Shield, Cpu, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenTerminal: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

const CODE_EXAMPLES = {
  alpine: {
    label: 'Alpine.js Lightweight DX',
    lang: 'html',
    code: `<div x-data="{ open: false, items: [] }" 
     x-init="items = await (await fetch('/api/data')).json()" 
     class="p-4 rounded-xl border border-zinc-800 bg-zinc-950">
  <button @click="open = !open" class="text-xs font-semibold text-emerald-400">
    ⚡ Toggle Zero-Build State
  </button>
  <template x-if="open">
    <div class="mt-2 text-xs text-zinc-400">
      Loaded <span x-text="items.length"></span> high-speed items with 0 compile overhead!
    </div>
  </template>
</div>`,
  },
  golang: {
    label: 'Go High-Perf Pipeline',
    lang: 'go',
    code: `package main

import (
	"fmt"
	"net/http"
)

// High-concurrency scraper to API converter
func HandleScrape(w http.ResponseWriter, r *http.Request) {
	ch := make(chan string, 10)
	go func() {
		ch <- "Scraped payload converted to JSON"
	}()
	fmt.Fprintf(w, "OK: %s", <-ch)
}`,
  },
  flutter: {
    label: 'Flutter & Play Store',
    lang: 'dart',
    code: `class AppEntry extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(useMaterial3: true),
      home: SubscriptionGuard(
        billing: PlayStoreBillingService(),
        child: MobileDashboard(),
      ),
    );
  }
}`,
  },
  aiPrompt: {
    label: 'GenAI LLM Engine',
    lang: 'typescript',
    code: `import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'Extract structured nutrition logs from user prompt...',
});`,
  },
};

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenTerminal,
  onOpenContact,
  onOpenResume,
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<keyof typeof CODE_EXAMPLES>('alpine');
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-12 pb-16 md:py-24 overflow-hidden border-b border-[#262626]">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-125 h-62.5 bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-mono bg-[#141414] border border-[#c5a059]/40 text-[#c5a059]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
              </span>
              <span>
                {lang === 'en' ? 'Available for Senior Lead & Architect Roles' : 'Dostupan za Senior / Lead Pozicije'}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-mono uppercase tracking-[0.3em] text-[#c5a059]">
                  {PERSONAL_INFO.name}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a3a3a3]">
                  {PERSONAL_INFO.title[lang]} • {PERSONAL_INFO.location}
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-[#e5e5e5] leading-[1.1]">
                {lang === 'en' ? (
                  <>
                    Engineering <span className="italic font-normal text-[#c5a059]">High-Performance</span> Web & Mobile Systems
                  </>
                ) : (
                  <>
                    Inženjering <span className="italic font-normal text-[#c5a059]">Brzih Web & Mobilnih</span> Proizvoda
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-[#a3a3a3] max-w-2xl leading-relaxed font-light">
                {PERSONAL_INFO.summary[lang]}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-[10px] uppercase tracking-wider font-mono text-[#a3a3a3]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111111] border border-[#262626]">
                <Zap className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Alpine.js & Vanilla JS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111111] border border-[#262626]">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Flutter / Mobile Billing</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111111] border border-[#262626]">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Go & Supabase Backends</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111111] border border-[#262626]">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>GenAI & LLM Integration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#c5a059] hover:bg-[#d4b068] text-[#0a0a0a] font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>{lang === 'en' ? 'Explore Projects' : 'Pogledaj Projekte'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#e5e5e5] border border-[#262626] font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer group"
              >
                <Terminal className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'en' ? 'Launch CLI Terminal' : 'Pokreni CLI Terminal'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#a3a3a3] hover:text-[#e5e5e5] border border-[#262626] text-[10px] uppercase tracking-wider font-medium transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Quick CV Summary' : 'Kratak CV pregled'}</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-[#262626] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl font-serif font-bold text-[#c5a059] tracking-tight flex items-center gap-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#a3a3a3] font-medium">
                    {stat.label[lang]}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Code Showcase / Architecture Window */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#262626] bg-[#111111] shadow-2xl overflow-hidden">
              
              {/* Window Bar */}
              <div className="px-4 py-3 bg-[#141414] border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[#a3a3a3] flex items-center gap-1.5">
                    <Code className="w-3 h-3 text-[#c5a059]" />
                    architecture_demo.{activeCodeTab === 'alpine' ? 'html' : activeCodeTab === 'golang' ? 'go' : activeCodeTab === 'flutter' ? 'dart' : 'ts'}
                  </span>
                </div>

                <button
                  onClick={copySnippet}
                  className="p-1.5 rounded hover:bg-[#222222] text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors"
                  title="Copy Code Snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Tab Selection */}
              <div className="px-2 py-2 bg-[#0d0d0d] border-b border-[#262626] flex items-center gap-1 overflow-x-auto text-[10px] font-mono scrollbar-none">
                {(Object.keys(CODE_EXAMPLES) as Array<keyof typeof CODE_EXAMPLES>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveCodeTab(key)}
                    className={`px-2.5 py-1 rounded transition-all cursor-pointer whitespace-nowrap tracking-wider uppercase ${
                      activeCodeTab === key
                        ? 'bg-[#1c1c1c] text-[#c5a059] border border-[#c5a059]/40 font-bold'
                        : 'text-[#a3a3a3] hover:text-[#e5e5e5] hover:bg-[#141414]'
                    }`}
                  >
                    {CODE_EXAMPLES[key].label}
                  </button>
                ))}
              </div>

              {/* Snippet Content */}
              <div className="p-4 bg-[#0a0a0a] font-mono text-[11px] overflow-x-auto text-[#e5e5e5] leading-relaxed min-h-55">
                <pre>
                  <code>{CODE_EXAMPLES[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Interactive DX Philosophy Highlight */}
              <div className="p-3.5 bg-[#141414] border-t border-[#262626] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#a3a3a3]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider">
                    {lang === 'en'
                      ? 'Zero compile overhead • High-speed DX • Production Ready'
                      : 'Bez zastoja pri kompajliranju • Vrhunske performanse • Spremno za produkciju'}
                  </span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="text-[10px] uppercase tracking-widest font-mono text-[#c5a059] hover:underline cursor-pointer"
                >
                  {lang === 'en' ? 'Hire Engineer →' : 'Angažuj Inženjera →'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
