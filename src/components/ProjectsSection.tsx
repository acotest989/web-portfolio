import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, ShieldCheck, X, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem, Language } from '../types';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'design'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-mono bg-[#141414] border border-[#c5a059]/40 text-[#c5a059]">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Portfolio Showcase' : 'Nezavisni Projekti'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#e5e5e5]">
              {lang === 'en' ? 'Selected Independent Projects' : 'Odabrani Samostalni Projekti'}
            </h2>
            <p className="text-[#a3a3a3] text-sm max-w-xl font-light">
              {lang === 'en'
                ? 'Architected end-to-end: from UI/UX design and AI integration to high-concurrency database queries.'
                : 'Arhitektura od početka do kraja: od UI/UX dizajna i AI integracije do baznih upita velikih performansi.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#141414] p-1 rounded-md border border-[#262626] text-[10px] font-mono uppercase tracking-wider">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold' : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              {lang === 'en' ? 'All' : 'Svi'}
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === 'ai' ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold' : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              AI & GenAI
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === 'fullstack' ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold' : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === 'design' ? 'bg-[#222222] text-[#c5a059] border border-[#c5a059]/40 font-bold' : 'text-[#a3a3a3] hover:text-[#e5e5e5]'
              }`}
            >
              UI/UX & Web
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#111111] rounded-xl border border-[#262626] hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Top Banner Accent */}
              <div className="h-24 bg-[#141414] border-b border-[#262626] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a059]/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-widest bg-[#0a0a0a] border border-[#262626] text-[#c5a059]">
                    {project.category === 'ai' ? 'AI / LLM' : project.category === 'fullstack' ? 'High-Scale SQL' : 'Product & UI/UX'}
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={lang === 'en' ? 'Open live site' : 'Otvori sajt'}
                      className="w-7 h-7 rounded bg-[#0a0a0a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#c5a059] hover:border-[#c5a059]/40 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {project.highlightMetric && (
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold text-[#c5a059] bg-[#0a0a0a] px-2.5 py-0.5 rounded border border-[#c5a059]/30 w-fit relative z-10">
                    <Sparkles className="w-3 h-3 text-[#c5a059] animate-pulse" />
                    <span>{project.highlightMetric}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#e5e5e5] group-hover:text-[#c5a059] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#c5a059] font-semibold uppercase tracking-wider">
                    {project.role[lang]}
                  </p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed font-light">
                    {project.summary[lang]}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-[#262626]">
                  {project.bullets[lang].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#a3a3a3] font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="pt-3 border-t border-[#262626] flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[10px] uppercase font-mono bg-[#141414] text-[#a3a3a3] border border-[#262626]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom bar indicator */}
              <div className="px-6 py-2.5 bg-[#0d0d0d] border-t border-[#262626] text-[10px] uppercase font-mono tracking-widest text-[#a3a3a3] flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                <span>{lang === 'en' ? 'Click for architecture details' : 'Klikni za arhitekturu'}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Architecture Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#262626] pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#c5a059] font-bold uppercase tracking-wider">
                  {activeModalProject.role[lang]}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#e5e5e5] mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-md bg-[#141414] text-[#a3a3a3] hover:text-[#e5e5e5] border border-[#262626]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Overview */}
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3] font-semibold mb-2">
                  {lang === 'en' ? 'Core Engineering Overview' : 'Pregled Inženjerske Arhitekture'}
                </h4>
                <p className="text-sm text-[#a3a3a3] leading-relaxed bg-[#111111] p-4 rounded-md border border-[#262626] font-light">
                  {activeModalProject.summary[lang]}
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3] font-semibold">
                  {lang === 'en' ? 'Implementation Highlights' : 'Ključne Implementacije'}
                </h4>
                <div className="space-y-2">
                  {activeModalProject.bullets[lang].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#e5e5e5] bg-[#111111] p-3 rounded-md border border-[#262626] font-light">
                      <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3] font-semibold mb-2">
                  {lang === 'en' ? 'Technologies & Frameworks' : 'Tehnologije i Okviri'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-[#141414] text-[#c5a059] border border-[#c5a059]/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
              {activeModalProject.url ? (
                <a
                  href={activeModalProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#c5a059] hover:bg-[#d4b068] text-[#0a0a0a] cursor-pointer transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Visit Live Site' : 'Otvori Sajt'}</span>
                </a>
              ) : (
                <span className="text-[10px] font-mono text-[#a3a3a3]">
                  {lang === 'en' ? 'Production Verification: Ready' : 'Verifikacija produkcije: Spremno'}
                </span>
              )}
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] border border-[#262626] cursor-pointer"
              >
                {lang === 'en' ? 'Close Window' : 'Zatvori'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
