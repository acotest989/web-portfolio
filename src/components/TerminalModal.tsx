import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CLI_COMMAND_HELP } from '../data/portfolioData';
import { Language } from '../types';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenContact: () => void;
}

interface HistoryItem {
  type: 'input' | 'output';
  content: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  lang,
  onOpenContact,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'output',
      content: (
        <div className="space-y-1 text-[#c5a059] font-mono text-xs">
          <p>Portfolio Interactive CLI v2.5.0 (x86_64-pc-linux-gnu)</p>
          <p>Type <span className="text-[#e5e5e5] font-bold">'help'</span> to see all available commands, or <span className="text-[#c5a059] font-bold">'sudo hire'</span> to initiate direct contact.</p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setPastInputs((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory: HistoryItem[] = [
      ...history,
      { type: 'input', content: trimmed },
    ];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs text-[#a3a3a3]">
              <p className="text-[#c5a059] font-semibold uppercase tracking-wider">Available Commands:</p>
              {CLI_COMMAND_HELP.map((c) => (
                <div key={c.cmd} className="grid grid-cols-12 gap-2">
                  <span className="col-span-3 text-[#c5a059] font-bold">{c.cmd}</span>
                  <span className="col-span-9 text-[#a3a3a3]">{c.desc}</span>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'summary':
        newHistory.push({
          type: 'output',
          content: (
            <div className="p-3 bg-[#111111] rounded border border-[#262626] text-xs font-mono text-[#e5e5e5] space-y-2">
              <p className="text-[#c5a059] font-bold uppercase tracking-wider">SUMMARY:</p>
              <p>{PERSONAL_INFO.summary[lang]}</p>
            </div>
          ),
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          content: (
            <div className="space-y-3 font-mono text-xs">
              <p className="text-[#c5a059] font-bold uppercase tracking-wider">PROFESSIONAL EXPERIENCE:</p>
              {EXPERIENCES.map((e) => (
                <div key={e.id} className="p-2.5 bg-[#111111] rounded border border-[#262626] text-[#e5e5e5]">
                  <p className="text-[#c5a059] font-semibold">{e.role[lang]} @ {e.company}</p>
                  <p className="text-[#a3a3a3] text-[11px]">{e.period} • {e.location}</p>
                  <ul className="mt-1 space-y-0.5 list-disc list-inside text-[11px] text-[#a3a3a3]">
                    {e.bullets[lang].map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: (
            <div className="space-y-2 font-mono text-xs">
              <p className="text-[#c5a059] font-bold uppercase tracking-wider">INDEPENDENT PROJECTS:</p>
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-2.5 bg-[#111111] rounded border border-[#262626] text-[#e5e5e5]">
                  <p className="text-[#c5a059] font-bold">{p.title} <span className="text-[#a3a3a3]">({p.role[lang]})</span></p>
                  <p className="text-[#a3a3a3] text-[11px]">{p.summary[lang]}</p>
                  <p className="text-[#c5a059] text-[10px] mt-1">Stack: {p.stack.join(', ')}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: (
            <div className="space-y-2 font-mono text-xs text-[#e5e5e5]">
              <p className="text-[#c5a059] font-bold uppercase tracking-wider">TECHNICAL STACK BREAKDOWN:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-[#111111] rounded border border-[#262626]">
                  <span className="text-[#c5a059] font-semibold">Frontend:</span> Alpine.js, React.js, Plain JS (ES6+), Tailwind, HTMX
                </div>
                <div className="p-2 bg-[#111111] rounded border border-[#262626]">
                  <span className="text-[#c5a059] font-semibold">Mobile:</span> Flutter, Dart, Play Store Publishing, Bubblewrap
                </div>
                <div className="p-2 bg-[#111111] rounded border border-[#262626]">
                  <span className="text-[#c5a059] font-semibold">Backend:</span> Pocketbase, Supabase, PostgreSQL, Go, Node.js/Express
                </div>
                <div className="p-2 bg-[#111111] rounded border border-[#262626]">
                  <span className="text-[#c5a059] font-semibold">Integrations & AI:</span> Stripe, REST APIs, Gemini API, Claude Skills, MCP
                </div>
              </div>
            </div>
          ),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: (
            <div className="p-3 bg-[#111111] rounded border border-[#262626] text-xs font-mono text-[#c5a059] space-y-1 break-all">
              <p><span className="text-[#a3a3a3]">Name:</span> {PERSONAL_INFO.name}</p>
              <p><span className="text-[#a3a3a3]">Email:</span> {PERSONAL_INFO.email}</p>
              <p><span className="text-[#a3a3a3]">Phone:</span> {PERSONAL_INFO.phone}</p>
              <p><span className="text-[#a3a3a3]">Location:</span> {PERSONAL_INFO.location}</p>
              <p>
                <span className="text-[#a3a3a3]">LinkedIn:</span>{' '}
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                  {PERSONAL_INFO.linkedinLabel}
                </a>
              </p>
              <p><span className="text-[#a3a3a3]">Status:</span> Open for Senior / Lead opportunities</p>
            </div>
          ),
        });
        break;

      case 'sudo hire':
      case 'hire':
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        newHistory.push({
          type: 'output',
          content: (
            <div className="p-3 bg-[#141414] rounded border border-[#c5a059]/50 text-xs font-mono text-[#c5a059] space-y-2">
              <p className="font-bold">🎉 ACCESS GRANTED: Senior Engineer Hire Request Initiated!</p>
              <p>Direct Email: <span className="underline">{PERSONAL_INFO.email}</span></p>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-3 py-1 bg-[#c5a059] text-[#0a0a0a] font-bold uppercase text-[10px] tracking-wider rounded cursor-pointer mt-1"
              >
                Open Hire Form →
              </button>
            </div>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs font-mono text-rose-400">
              Command not recognized: <span className="text-white">{trimmed}</span>. Type <span className="text-[#c5a059] font-bold">'help'</span> for list of commands.
            </div>
          ),
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastInputs.length > 0) {
        const nextIdx = historyIndex === -1 ? pastInputs.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(pastInputs[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= pastInputs.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(pastInputs[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
      <div
        className={`bg-[#0a0a0a] border border-[#262626] rounded-xl w-full flex flex-col shadow-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'h-full max-w-none' : 'max-w-4xl h-[80dvh]'
        }`}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#262626] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="w-2.5 h-2.5 rounded-full bg-[#333333] hover:bg-rose-500 transition-colors" />
              <button onClick={() => setIsFullscreen(!isFullscreen)} className="w-2.5 h-2.5 rounded-full bg-[#333333] hover:bg-[#c5a059] transition-colors" />
              <button className="w-2.5 h-2.5 rounded-full bg-[#333333] hover:bg-emerald-500 transition-colors" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#a3a3a3] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>/bin/portfolio-cli</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#a3a3a3]">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 hover:text-[#e5e5e5]"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button onClick={onClose} className="p-1 hover:text-[#e5e5e5]">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Area */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3 font-mono text-xs bg-[#0a0a0a] text-[#e5e5e5]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === 'input' ? (
                <div className="flex items-center gap-2 text-[#c5a059] font-semibold">
                  <span>engineer@portfolio:~$</span>
                  <span className="text-white">{item.content}</span>
                </div>
              ) : (
                <div>{item.content}</div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-[#c5a059] pt-1">
            <span>engineer@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
              placeholder="Type command ('help', 'experience', 'projects', 'sudo hire')..."
            />
            <CornerDownLeft className="w-3.5 h-3.5 text-[#333333]" />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestions Footer Bar */}
        <div className="px-4 py-2 bg-[#141414] border-t border-[#262626] flex items-center gap-2 overflow-x-auto text-[10px] font-mono shrink-0 scrollbar-none uppercase tracking-wider">
          <span className="text-[#a3a3a3] shrink-0">Suggestions:</span>
          {['help', 'summary', 'experience', 'projects', 'skills', 'contact', 'sudo hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#1f1f1f] hover:bg-[#262626] text-[#c5a059] transition-colors cursor-pointer shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
