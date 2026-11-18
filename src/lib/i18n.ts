import type { Locale } from '../data/types';

export const sections = ['about', 'research', 'publications', 'projects', 'cv', 'contact'] as const;
export type Section = typeof sections[number];
export type Page = 'home' | Section;
export const labels: Record<Locale, Record<Page, string>> = {
  en: { home: 'Home', about: 'About', research: 'Research', publications: 'Publications', projects: 'Projects', cv: 'CV', contact: 'Contact' },
  zh: { home: '首页', about: '关于我', research: '研究方向', publications: '学术论文', projects: '科研项目', cv: '简历', contact: '联系' },
};
export function href(locale: Locale, page: Page = 'home') {
  return `${locale === 'zh' ? '/zh/' : '/'}${page === 'home' ? '' : `${page}/`}`;
}
export const descriptions: Record<Locale, Record<Page, string>> = {
  en: {
    home: 'The academic home of Zhouchen. Explore research, publications, projects, and more.',
    about: 'Background, interests, and the person behind the work.',
    research: 'Questions, ideas, and directions for future exploration.',
    publications: 'A record of scholarly work, with papers, code, and citations.',
    projects: 'Research in practice: ongoing work and completed projects.',
    cv: 'Education, experience, and an academic curriculum vitae.',
    contact: 'Find Zhouchen online and get in touch.',
  },
  zh: {
    home: 'Zhouchen 的学术个人主页。了解研究方向、学术论文与科研项目。',
    about: '了解我的背景、兴趣与学术经历。',
    research: '值得探索的问题、想法与研究方向。',
    publications: '学术成果记录，以及论文、代码与引用信息。',
    projects: '研究与实践：进行中的工作和已完成的项目。',
    cv: '教育背景、工作经历与学术简历。',
    contact: '通过以下公开渠道与 Zhouchen 联系。',
  },
};
