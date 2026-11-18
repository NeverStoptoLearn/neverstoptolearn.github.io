export type Locale = 'en' | 'zh';
export type Localized = Record<Locale, string>;
export interface EducationEntry {
  period: string;
  title: Localized;
  institution: Localized;
  advisor?: Localized;
  expected?: boolean;
}
export interface Publication {
  id: string;
  title: Localized;
  authors: string[];
  year: number;
  venue: string;
  citation?: string;
  yearLabel?: Localized;
  kind: 'journal' | 'conference' | 'preprint';
  abstract?: Localized;
  doi?: string;
  paperUrl?: string;
  referenceUrl?: string;
  codeUrl?: string;
  bibtex?: string;
}
export interface ResearchProject {
  id: string;
  title: Localized;
  summary: Localized;
  status: 'ongoing' | 'completed';
  topics: string[];
  selected: boolean;
  url?: string;
  codeUrl?: string;
}
export interface ResearchArea {
  title: Localized;
  description?: Localized;
}
