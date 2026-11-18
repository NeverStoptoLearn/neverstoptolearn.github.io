import type { EducationEntry, Localized, ResearchArea } from './types';

const institution = {
  en: 'School of Computer Science, China University of Geosciences (Wuhan)',
  zh: '中国地质大学（武汉）计算机学院',
};
const advisor = { en: 'Prof. Xuesong Yan', zh: '颜雪松教授' };

export const profile = {
  name: 'Zhouchen',
  github: 'https://github.com/NeverStoptoLearn',
  email: '',
  role: { en: 'Ph.D. Student in Geoscience Information Engineering', zh: '地学信息工程博士在读' },
  affiliation: institution,
  biography: {
    en: 'I am pursuing a Ph.D. in Geoscience Information Engineering at China University of Geosciences (Wuhan) under the supervision of Prof. Xuesong Yan. I previously completed my undergraduate and master’s studies in Computer Science and Technology at the same university.',
    zh: '我目前在中国地质大学（武汉）计算机学院攻读地学信息工程博士学位，师从颜雪松教授。本科和硕士阶段均在该校计算机学院学习计算机科学与技术。',
  },
  cvUrl: '', // Set to /files/zhouchen-cv.pdf after adding the real PDF to public/files.
  researchAreas: [] as ResearchArea[],
  education: [
    {
      period: '2023–2027',
      title: { en: 'Doctoral studies in Geoscience Information Engineering', zh: '博士 · 地学信息工程' },
      institution,
      advisor,
      expected: true,
    },
    {
      period: '2020–2023',
      title: { en: 'Master’s in Computer Science and Technology', zh: '硕士 · 计算机科学与技术' },
      institution,
      advisor,
    },
    {
      period: '2016–2020',
      title: { en: 'Bachelor’s in Computer Science and Technology', zh: '本科 · 计算机科学与技术' },
      institution,
    },
  ] satisfies EducationEntry[],
  experience: [] as { period: string; title: Localized; institution: Localized }[],
};
