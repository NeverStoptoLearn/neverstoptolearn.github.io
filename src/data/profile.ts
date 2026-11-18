import type { EducationEntry, Localized, ResearchArea } from './types';

const institution = {
  en: 'School of Computer Science, China University of Geosciences (Wuhan)',
  zh: '中国地质大学（武汉）计算机学院',
};
const advisor = { en: 'Prof. Xuesong Yan', zh: '颜雪松教授' };

export const profile = {
  name: 'Zhouchen',
  publicationNames: ['Zhengchen Zhou', '周正琛'],
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
    en: 'My research focuses on applying deep learning and intelligent optimization algorithms to complex physical systems, with applications in groundwater contamination detection, source identification, and emergency response scheduling.',
    zh: '我的研究聚焦于深度学习和智能优化算法在复杂物理场景下的应用，具体包括地下水污染检测、污染源溯源和应急调度。',
  },
  cvUrl: '', // Set to /files/zhouchen-cv.pdf after adding the real PDF to public/files.
  researchAreas: [
    { title: { en: 'Deep Learning and Intelligent Optimization for Complex Physical Systems', zh: '复杂物理场景下的深度学习与智能优化算法' } },
    { title: { en: 'Groundwater Contamination Detection and Source Identification', zh: '地下水污染检测与溯源' } },
    { title: { en: 'Groundwater Contamination Emergency Response Scheduling', zh: '地下水污染应急调度' } },
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
  awards: [
    {
      date: '2026-05',
      title: {
        en: 'First Prize, Outstanding Paper Award, 9th Academic Conference on Intelligent Optimization and Scheduling',
        zh: '第九届智能优化与调度学术会议优秀论文一等奖',
      },
    },
    {
      date: '2021-12',
      title: {
        en: 'National Scholarship for Master’s Students, China University of Geosciences',
        zh: '硕士研究生国家奖学金，中国地质大学',
      },
    },
    {
      date: '2019-05',
      title: {
        en: 'Second Prize, 12th Hubei “Challenge Cup” Extracurricular Academic Science and Technology Competition',
        zh: '湖北省第十二届“挑战杯”课外学术科技作品竞赛二等奖',
      },
    },
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
