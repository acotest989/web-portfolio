import { ReactNode } from 'react';

export type Language = 'en' | 'sr';

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isPresent?: boolean;
  bullets: Record<Language, string[]>;
  tags: string[];
  category: 'web' | 'mobile' | 'fullstack';
}

export interface ProjectItem {
  id: string;
  title: string;
  url?: string;
  role: Record<Language, string>;
  summary: Record<Language, string>;
  bullets: Record<Language, string[]>;
  stack: string[];
  category: 'ai' | 'fullstack' | 'design' | 'mobile';
  highlightMetric?: string;
  colorGrad: string;
}

export interface SkillCategory {
  id: string;
  title: Record<Language, string>;
  icon: string;
  description: Record<Language, string>;
  skills: {
    name: string;
    level: number; // 0-100
    highlight?: string;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: () => string | ReactNode;
}
