import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSent(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#262626] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#141414] text-[#c5a059] border border-[#c5a059]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{lang === 'en' ? 'Get In Touch' : 'Stupimo u Kontakt'}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#e5e5e5]">
              {lang === 'en' ? 'Let’s Build Something Exceptional' : 'Hajde da Napravimo Nešto Izuzetno'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-md text-[#a3a3a3] hover:text-[#e5e5e5]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Email Box */}
        <div className="p-4 rounded-lg bg-[#111111] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-md bg-[#141414] text-[#c5a059] border border-[#262626] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-mono uppercase tracking-wider text-[#a3a3a3]">
                {lang === 'en' ? 'Direct Email' : 'Direktan Email'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#e5e5e5] font-mono break-all">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-md text-[10px] uppercase font-mono tracking-wider font-bold bg-[#c5a059] hover:opacity-90 text-[#0a0a0a] transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === 'en' ? 'Copied!' : 'Kopirano!') : (lang === 'en' ? 'Copy' : 'Kopiraj')}</span>
          </button>
        </div>

        {/* Contact Form */}
        {sent ? (
          <div className="p-6 rounded-lg bg-[#141414] border border-[#c5a059]/40 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#c5a059] mx-auto" />
            <h4 className="text-base font-serif font-bold text-[#e5e5e5]">
              {lang === 'en' ? 'Message Sent Successfully!' : 'Poruka je Uspješno Poslata!'}
            </h4>
            <p className="text-xs text-[#a3a3a3] font-light">
              {lang === 'en'
                ? 'Thank you for reaching out. I will respond to your inquiry shortly.'
                : 'Hvala na javljanju. Odgovoriću na vaš upit u najkraćem roku.'}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md text-xs font-mono uppercase font-bold tracking-wider bg-[#c5a059] text-[#0a0a0a] cursor-pointer"
            >
              {lang === 'en' ? 'Done' : 'U redu'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-[#a3a3a3]">
                {lang === 'en' ? 'Your Name' : 'Vaše Ime'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === 'en' ? 'John Doe' : 'Marko Marković'}
                className="w-full bg-[#111111] border border-[#262626] rounded-md px-3 py-2 text-xs text-[#e5e5e5] focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-[#a3a3a3]">
                {lang === 'en' ? 'Your Email' : 'Vaš Email'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@company.com"
                className="w-full bg-[#111111] border border-[#262626] rounded-md px-3 py-2 text-xs text-[#e5e5e5] focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-[#a3a3a3]">
                {lang === 'en' ? 'Message / Project Inquiry' : 'Poruka / Upit za Projekat'}
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'en' ? 'Describe your project or role opportunities...' : 'Opišite projekat ili poziciju...'}
                className="w-full bg-[#111111] border border-[#262626] rounded-md px-3 py-2 text-xs text-[#e5e5e5] focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-md bg-[#c5a059] hover:opacity-90 text-[#0a0a0a] font-mono uppercase tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'en' ? 'Send Direct Inquiry' : 'Pošalji Upit'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
