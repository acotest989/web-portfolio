import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Tag, Sparkles, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Language } from '../types';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fullstack' | 'mobile'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('infomedia');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (selectedCategory === 'all') return true;
    return exp.category === selectedCategory || (selectedCategory === 'fullstack' && exp.category === 'web');
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-mono bg-[#141414] border border-[#c5a059]/40 text-[#c5a059]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Track Record' : 'Profesionalni Put'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#e5e5e5]">
              {lang === 'en' ? 'Professional Experience' : 'Radno Iskustvo'}
            </h2>
            <p className="text-[#a3a3a3] text-sm max-w-xl font-light">
              {lang === 'en'
                ? '9+ years of engineering scalable web systems, cross-platform mobile apps, and automated pipelines.'
                : '9+ godina rada na skalabilnim web sistemima, mobilnim aplikacijama i automatizovanim procesima.'}
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-md border border-[#262626] self-start md:self-auto text-[10px] font-mono uppercase tracking-wider">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold'
                  : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              {lang === 'en' ? 'All Roles' : 'Sve Pozicije'}
            </button>
            <button
              onClick={() => setSelectedCategory('fullstack')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                selectedCategory === 'fullstack'
                  ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold'
                  : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              {lang === 'en' ? 'Web & Full-Stack' : 'Web & Full-Stack'}
            </button>
            <button
              onClick={() => setSelectedCategory('mobile')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                selectedCategory === 'mobile'
                  ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold'
                  : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              {lang === 'en' ? 'Mobile & Android' : 'Mobile & Android'}
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#262626] ml-3 sm:ml-6 space-y-8">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-2 top-2 w-3.5 h-3.5 rounded-full transition-all ${
                    exp.isPresent
                      ? 'bg-[#c5a059] ring-4 ring-[#c5a059]/20'
                      : 'bg-[#141414] border border-[#262626] group-hover:border-[#c5a059]'
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-[#111111] border border-[#262626] hover:border-[#c5a059]/40 rounded-xl p-6 transition-all duration-200 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#262626]">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-serif font-bold text-[#e5e5e5] tracking-tight">
                          {exp.role[lang]}
                        </h3>
                        {exp.isPresent && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest font-bold uppercase bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30">
                            {lang === 'en' ? 'PRESENT' : 'TRENUTNO'}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#c5a059] mt-0.5">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-[#a3a3a3]">
                      <div className="flex items-center gap-1 bg-[#141414] px-2.5 py-1 rounded border border-[#262626]">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-[#141414] px-2.5 py-1 rounded border border-[#262626]">
                        <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets List */}
                  <div className="py-4 space-y-2.5">
                    {exp.bullets[lang].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#a3a3a3] leading-relaxed font-light">
                        <CheckCircle className="w-4 h-4 text-[#c5a059] mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-3 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#a3a3a3] mr-1" />
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-mono bg-[#141414] text-[#a3a3a3] border border-[#262626]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? (lang === 'en' ? 'Less info' : 'Manje') : (lang === 'en' ? 'More details' : 'Više detalja')}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Expanded Highlight Detail Box */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-dashed border-[#262626] bg-[#0d0d0d] rounded-md p-4 text-xs space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5 text-[#c5a059] font-bold font-mono text-[10px] uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-[#c5a059]" />
                        <span>{lang === 'en' ? 'Key Technical Takeaways & Impact' : 'Glavni tehnički rezultati i uticaj'}</span>
                      </div>
                      <p className="text-[#a3a3a3] leading-normal font-light">
                        {exp.id === 'infomedia' && (
                          lang === 'en'
                            ? 'Architected lightweight frontends with Alpine.js resulting in near-zero build steps, streamlined team onboarding, and optimized Stripe webhook security.'
                            : 'Arhitektura lakog frontenda uz Alpine.js što rezultira radom bez zastoja pri kompajliranju, lakim uvodi novih inženjera i sigurnom obradom Stripe webhook poruka.'
                        )}
                        {exp.id === 'vebotek' && (
                          lang === 'en'
                            ? 'Leveraged Go (Golang) for fast concurrency processing in data scraping pipelines, combined with Play Store release operations.'
                            : 'Korišćenje Go (Golang) jezika za brzu konkurentnu obradu podataka u skrejperima, uz vođenje aplikacija na Play Store-u.'
                        )}
                        {exp.id === 'mediabuy' && (
                          lang === 'en'
                            ? 'Built robust Flutter mobile apps with Google Play Billing integration for automated subscription monetization and OneSignal engagement funnels.'
                            : 'Izrada stabilnih Flutter aplikacija sa integracijom Google Play Billing pretplata i OneSignal retencionih lijevaka.'
                        )}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
