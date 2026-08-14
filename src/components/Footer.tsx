import React from 'react';
import { Terminal, Mail, Code2, Linkedin, Phone, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenTerminal, onOpenContact }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626] py-12 text-[#a3a3a3] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#e5e5e5] font-serif font-bold text-base">
              <Code2 className="w-4 h-4 text-[#c5a059]" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[#a3a3a3] font-mono text-[10px] uppercase tracking-wider">
              9+ YOE • {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#e5e5e5] border border-[#262626] font-mono text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Press ⌘K for CLI</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#e5e5e5] border border-[#262626] text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#e5e5e5] border border-[#262626] text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{lang === 'en' ? 'Play Store Apps' : 'Play Store Aplikacije'}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#e5e5e5] border border-[#262626] font-mono text-[10px] tracking-wider cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#141414] hover:bg-[#1a1a1a] text-[#c5a059] border border-[#262626] text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#a3a3a3] font-mono uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {lang === 'en' ? 'All rights reserved.' : 'Sva prava zadržana.'}
          </div>

          <div className="flex items-center gap-2">
            <span>Alpine.js • Flutter • Go • Node.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
