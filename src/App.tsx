import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { PortfolioAIChat } from './components/PortfolioAIChat';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  // Keyboard shortcut listener for Cmd+K or Ctrl+K to toggle CLI Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased">
      
      {/* Sticky Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAIChat={() => setIsAIChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* Selected Independent Projects */}
        <ProjectsSection lang={lang} />

        {/* Technical Skills & DX Philosophy */}
        <SkillsMatrix lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        lang={lang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <PortfolioAIChat
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        lang={lang}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

    </div>
  );
}
