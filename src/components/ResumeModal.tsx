import React, { useState } from 'react';
import { FileText, X, Printer, Copy, Check, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '../data/portfolioData';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyFormattedText = () => {
    const experienceText = EXPERIENCES.map(
      (exp) =>
        `${exp.role.en} | ${exp.company} (${exp.period})\n${exp.bullets.en.map((b) => `• ${b}`).join('\n')}`
    ).join('\n\n');

    const projectsText = PROJECTS.map(
      (proj) =>
        `${proj.title} | ${proj.role.en}\n• Stack: ${proj.stack.join(', ')}\n${proj.bullets.en
          .map((b) => `• ${b}`)
          .join('\n')}`
    ).join('\n\n');

    const text = `${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title.en}
${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
${PERSONAL_INFO.location}
${PERSONAL_INFO.linkedinLabel}

SUMMARY
${PERSONAL_INFO.summary.en}

PROFESSIONAL EXPERIENCE
${experienceText}

SELECTED INDEPENDENT PROJECTS
${projectsText}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div data-print-root className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl max-w-3xl w-full h-[90dvh] flex flex-col shadow-2xl overflow-hidden relative">

        {/* Header Bar */}
        <div data-print-hide className="px-4 sm:px-6 py-3 sm:py-4 bg-[#141414] border-b border-[#262626] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-5 h-5 text-[#c5a059] shrink-0" />
            <h3 className="font-serif font-bold text-[#e5e5e5] text-sm sm:text-base truncate">
              {lang === 'en' ? 'Official CV Summary & Documentation' : 'Zvanični CV Pregled'}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyFormattedText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#1f1f1f] hover:bg-[#262626] text-[#e5e5e5] border border-[#262626] cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Copied!' : 'Kopirano!') : (lang === 'en' ? 'Copy Text' : 'Kopiraj Tekst')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#1f1f1f] hover:bg-[#262626] text-[#e5e5e5] border border-[#262626] cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print' : 'Štampaj'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Aleksandar-Milosevic-CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-bold bg-[#c5a059] hover:opacity-90 text-[#0a0a0a] cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Download PDF' : 'Preuzmi PDF'}</span>
            </a>

            <button onClick={onClose} className="p-1.5 rounded-md text-[#a3a3a3] hover:text-[#e5e5e5]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Canvas */}
        <div className="p-8 flex-1 overflow-y-auto space-y-8 bg-[#0a0a0a] text-[#e5e5e5] font-sans print:bg-white print:text-black">
          
          {/* Header block */}
          <div className="border-b border-[#262626] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
              <div>
                <h1 className="text-2xl font-serif font-bold tracking-tight text-[#e5e5e5] print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs text-[#c5a059] font-mono font-medium uppercase tracking-wider print:text-amber-800">
                  {PERSONAL_INFO.title[lang]} • 9+ Years Experience
                </p>
              </div>
              <div className="sm:text-right text-xs font-mono text-[#a3a3a3] print:text-gray-600 space-y-0.5">
                <p>{PERSONAL_INFO.email}</p>
                <p>{PERSONAL_INFO.phone}</p>
                <p>{PERSONAL_INFO.location}</p>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a059] hover:underline print:text-gray-600"
                >
                  {PERSONAL_INFO.linkedinLabel}
                </a>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#c5a059] tracking-widest print:text-amber-700">
              SUMMARY
            </h2>
            <p className="text-xs text-[#a3a3a3] leading-relaxed bg-[#111111] p-4 rounded-md border border-[#262626] font-light print:bg-gray-100 print:text-black print:border-gray-300">
              {PERSONAL_INFO.summary[lang]}
            </p>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#c5a059] tracking-widest print:text-amber-700">
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5 bg-[#111111] p-4 rounded-md border border-[#262626] print:bg-white print:border-gray-300">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-serif font-bold text-[#e5e5e5] print:text-black">
                    {exp.role[lang]} <span className="text-[#c5a059] font-mono font-normal text-xs">| {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#a3a3a3] print:text-gray-600">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#a3a3a3] font-light print:text-gray-800 list-disc list-inside">
                  {exp.bullets[lang].map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SELECTED INDEPENDENT PROJECTS */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase font-bold text-[#c5a059] tracking-widest print:text-amber-700">
              SELECTED INDEPENDENT PROJECTS
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 bg-[#111111] p-4 rounded-md border border-[#262626] print:bg-white print:border-gray-300">
                <h3 className="text-sm font-serif font-bold text-[#e5e5e5] print:text-black">
                  {proj.title} <span className="text-[#c5a059] font-mono text-xs">| {proj.role[lang]}</span>
                </h3>
                {proj.stack.length > 0 && (
                  <p className="text-[10px] font-mono text-[#a3a3a3] uppercase tracking-wider print:text-gray-600">
                    Stack: {proj.stack.join(', ')}
                  </p>
                )}
                <ul className="space-y-1 text-xs text-[#a3a3a3] font-light print:text-gray-800 list-disc list-inside">
                  {proj.bullets[lang].map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
