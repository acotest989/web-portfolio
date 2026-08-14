import React, { useState } from 'react';
import { Cpu, Code2, Smartphone, Database, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Language } from '../types';

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#c5a059]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#c5a059]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#c5a059]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#c5a059]" />;
      default:
        return <Zap className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-mono bg-[#141414] border border-[#c5a059]/40 text-[#c5a059]">
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Core Competencies' : 'Tehnološke Vještine'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#e5e5e5]">
              {lang === 'en' ? 'Technical Stack & Expertise' : 'Tehnološki Stog i Stručnost'}
            </h2>
            <p className="text-[#a3a3a3] text-sm max-w-xl font-light">
              {lang === 'en'
                ? 'Mastery in lightweight web architectures, cross-platform mobile delivery, Go backend services, and AI systems.'
                : 'Stručnost u lakoj web arhitekturi, mobilnim aplikacijama, Go backend servisima i AI sistemima.'}
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#141414] p-1 rounded-md border border-[#262626] text-[10px] font-mono uppercase tracking-wider">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold'
                    : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
                }`}
              >
                {cat.title[lang].split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <div
                key={cat.id}
                className={`rounded-xl p-6 border transition-all duration-200 flex flex-col justify-between space-y-6 ${
                  isActive
                    ? 'bg-[#111111] border-[#c5a059]/50 shadow-xl'
                    : 'bg-[#111111] border-[#262626] hover:border-[#333333]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-md bg-[#141414] border border-[#262626]">
                        {getIcon(cat.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-[#e5e5e5]">
                          {cat.title[lang]}
                        </h3>
                        <p className="text-xs text-[#a3a3a3] mt-0.5 font-light">
                          {cat.description[lang]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Progress List */}
                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-[#e5e5e5]">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[#c5a059] bg-[#141414] px-2 py-0.5 rounded border border-[#c5a059]/30">
                              {skill.highlight}
                            </span>
                          )}
                        </div>

                        {/* Progress Meter Bar */}
                        <div className="w-full h-1.5 rounded-full bg-[#141414] border border-[#262626] overflow-hidden">
                          <div
                            className="h-full bg-[#c5a059] rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="pt-4 border-t border-[#262626] flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#a3a3a3]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'Production Validated across 9+ years of real-world deployment'
                      : 'Verifikovano u praksi kroz 9+ godina rada u produkciji'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* DX & Architecture Philosophy Card */}
        <div className="mt-12 rounded-xl bg-[#111111] p-6 sm:p-8 border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#c5a059]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#141414] text-[#c5a059] border border-[#c5a059]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{lang === 'en' ? 'Core Philosophy' : 'Filozofija Rasta i Performansi'}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#e5e5e5]">
              {lang === 'en'
                ? 'Performance First, Tooling Chosen Per Layer'
                : 'Performanse na Prvom Mjestu, Alat Biran po Sloju'}
            </h3>
            <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed font-light">
              {lang === 'en'
                ? 'Alpine.js and Vanilla JS where a build pipeline would only add weight, React and TypeScript where component architecture earns its keep. Paired with compiled Go services and Flutter apps, projects stay fast, simple to onboard onto, and focused on Core Web Vitals.'
                : 'Alpine.js i Vanilla JS tamo gdje bi build pipeline samo dodao težinu, React i TypeScript tamo gdje se komponentna arhitektura isplati. Uz Go servise i Flutter aplikacije, projekti ostaju brzi, laki za uvođenje novih članova tima i fokusirani na Core Web Vitals.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <div className="px-4 py-3 rounded-md bg-[#0a0a0a] border border-[#262626] text-center font-mono">
              <div className="text-lg font-serif font-bold text-[#c5a059]">0</div>
              <div className="text-[9px] text-[#a3a3a3] uppercase tracking-widest">Build Steps</div>
            </div>
            <div className="px-4 py-3 rounded-md bg-[#0a0a0a] border border-[#262626] text-center font-mono">
              <div className="text-lg font-serif font-bold text-[#e5e5e5]">9+</div>
              <div className="text-[9px] text-[#a3a3a3] uppercase tracking-widest">Years in Production</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
