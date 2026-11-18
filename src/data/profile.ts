import type { EducationEntry, Localized, ResearchArea } from './types';

const institution = {
  en: 'School of Computer Science, China University of Geosciences (Wuhan)',
  zh: '中国地质大学（武汉）计算机学院',
};
const advisor = { en: 'Prof. Xuesong Yan', zh: '颜雪松教授' };

export const profile = {
  name: 'Zhouchen',
  github: 'https://github.com/NeverStoptoLearn',
  email: 'chenzz_14@outlook.com',
  orcid: '0009-0005-0160-1988',
  googleScholar: 'https://scholar.google.com/citations?user=OSbLeCEAAAAJ',
  role: { en: 'Ph.D. Student in Geoscience Information Engineering', zh: '地学信息工程博士在读' },
  affiliation: institution,
  biography: {
    en: 'I am pursuing a Ph.D. in Geoscience Information Engineering at China University of Geosciences (Wuhan) under the supervision of Prof. Xuesong Yan. I previously completed my undergraduate and master’s studies in Computer Science and Technology at the same university.',
    zh: '我目前在中国地质大学（武汉）计算机学院攻读地学信息工程博士学位，师从颜雪松教授。本科和硕士阶段均在该校计算机学院学习计算机科学与技术。',
  },
  researchSummary: {
    en: 'My research interests include deep learning for source identification, physics-informed machine learning, and intelligent optimization algorithms. I combine monitoring data with physical constraints to identify groundwater contaminant sources and apply intelligent optimization to monitoring well placement and emergency response scheduling.',
    zh: '我的研究方向包括深度学习溯源、物理信息机器学习和智能优化算法，重点探索结合监测数据与物理约束识别地下水污染源，并利用智能优化算法优化监测井布设和污染应急调度。',
  },
  cvUrl: '', // Set to /files/zhouchen-cv.pdf after adding the real PDF to public/files.
  researchAreas: [
    { title: { en: 'Deep Learning for Source Identification', zh: '深度学习溯源' } },
    { title: { en: 'Physics-Informed Machine Learning', zh: '物理信息机器学习' } },
    { title: { en: 'Intelligent Optimization Algorithms', zh: '智能优化算法' } },
  ] as ResearchArea[],
  reviewingJournals: [
    { name: 'Neural Computing and Applications', abbreviation: 'Neural Comput. Appl.' },
    { name: 'Water', abbreviation: 'Water' },
    { name: 'IEEE Access', abbreviation: 'IEEE Access' },
    { name: 'Information Sciences', abbreviation: 'Inf. Sci.' },
    { name: 'Journal of Cleaner Production', abbreviation: 'J. Clean. Prod.' },
    { name: 'Journal of Hazardous Materials', abbreviation: 'J. Hazard. Mater.' },
    { name: 'Applied Water Science', abbreviation: 'Appl. Water Sci.' },
    { name: 'Journal of Hydrology', abbreviation: 'J. Hydrol.' },
    { name: 'Applied Soft Computing', abbreviation: 'Appl. Soft Comput.' },
    { name: 'Expert Systems with Applications', abbreviation: 'Expert Syst. Appl.' },
  ],
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
