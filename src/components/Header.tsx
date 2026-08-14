import React, { useState } from 'react';
import { Terminal, FileText, Globe, Mail, Menu, X, Sparkles, Linkedin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenAIChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenTerminal,
  onOpenResume,
  onOpenContact,
  onOpenAIChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'O Meni' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Iskustvo' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Projekti' },
    { href: '#skills', label: lang === 'en' ? 'Skills' : 'Vještine' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-t-4 border-t-[#c5a059] border-b border-b-[#262626] text-[#e5e5e5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-[#111111] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-base shadow-sm group-hover:border-[#c5a059] transition-all">
            {PERSONAL_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-bold text-sm tracking-tight text-[#e5e5e5] group-hover:text-[#c5a059] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#c5a059]/80 font-mono">
              9+ YOE • Web & Mobile
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#a3a3a3] hover:text-[#c5a059] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* AI Helper trigger */}
          <button
            onClick={onOpenAIChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-semibold bg-[#141414] text-[#c5a059] border border-[#c5a059]/30 hover:bg-[#1a1a1a] hover:border-[#c5a059]/60 transition-all cursor-pointer"
            title="Ask AI Assistant about candidate"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059] animate-pulse" />
            <span>AI Assistant</span>
          </button>

          {/* Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] border border-[#262626] hover:border-[#c5a059]/40 transition-all cursor-pointer group"
            title="Open Interactive CLI Terminal (Cmd+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span>CLI</span>
            <span className="text-[9px] bg-[#222222] text-[#a3a3a3] px-1 py-0.2 rounded border border-[#333333]">
              ⌘K
            </span>
          </button>

          {/* Printable Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-medium bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] border border-[#262626] hover:border-[#c5a059]/40 transition-all cursor-pointer"
            title="View Formatted Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Resume</span>
          </button>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-medium bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] border border-[#262626] hover:border-[#c5a059]/40 transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>LinkedIn</span>
          </a>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'sr' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-mono tracking-wider bg-[#141414] hover:bg-[#1f1f1f] text-[#e5e5e5] border border-[#262626] transition-all cursor-pointer uppercase"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="font-bold">{lang}</span>
          </button>

          {/* Hire / Contact */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[10px] uppercase tracking-widest font-bold bg-[#c5a059] hover:bg-[#d4b068] text-[#0a0a0a] shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Contact' : 'Kontakt'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === 'en' ? 'sr' : 'en')}
            className="p-1.5 rounded-md text-xs font-mono bg-[#141414] text-[#e5e5e5] border border-[#262626] uppercase"
          >
            {lang}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#a3a3a3] hover:text-[#e5e5e5] bg-[#141414] border border-[#262626]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#262626] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#a3a3a3] hover:text-[#c5a059] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#262626] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-1.5 p-2 rounded-md text-[10px] font-mono uppercase bg-[#141414] text-[#e5e5e5] border border-[#262626]"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>CLI Terminal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-1.5 p-2 rounded-md text-[10px] font-medium uppercase bg-[#141414] text-[#e5e5e5] border border-[#262626]"
            >
              <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 p-2 rounded-md text-[10px] font-medium uppercase bg-[#141414] text-[#e5e5e5] border border-[#262626]"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Aleksandar-Milosevic-CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 p-2 rounded-md text-[10px] font-medium uppercase bg-[#141414] text-[#e5e5e5] border border-[#262626]"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>CV PDF</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIChat();
              }}
              className="col-span-2 flex items-center justify-center gap-1.5 p-2 rounded-md text-[10px] font-semibold uppercase bg-[#141414] text-[#c5a059] border border-[#c5a059]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>AI Assistant</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="col-span-2 flex items-center justify-center gap-1.5 p-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#c5a059] text-[#0a0a0a]"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'en' ? 'Get In Touch' : 'Kontaktirajte me'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
