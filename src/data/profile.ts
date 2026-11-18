import type { EducationEntry, Localized } from './types';

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
    en: 'I am currently pursuing a Ph.D. in Geoscience Information Engineering at the School of Computer Science, China University of Geosciences (Wuhan), under the supervision of Prof. Xuesong Yan. I received my bachelor’s degree in 2020 and my master’s degree in 2023, both from the School of Computer Science, China University of Geosciences (Wuhan).',
    zh: '我目前在中国地质大学（武汉）计算机学院攻读地学信息工程博士学位，师从颜雪松教授。2020年于中国地质大学（武汉）计算机学院获得学士学位，2023年于中国地质大学（武汉）计算机学院获得硕士学位。',
  },
  researchSummary: {
    en: 'My research focuses on the application of deep learning and intelligent optimization algorithms in complex physical settings, specifically groundwater contamination detection, source identification, and emergency response scheduling. By integrating observational data with physical principles, I explore methods for contamination assessment, source inversion, and multi-objective scheduling optimization.',
    zh: '我的研究方向是深度学习和智能优化算法在复杂物理场景下的应用，具体包括地下水污染检测、溯源与应急调度。研究中注重融合观测数据与物理规律，探索污染状态识别、污染源反演和多目标调度优化方法。',
  },
  cvUrl: '', // Set to /files/zhouchen-cv.pdf after adding the real PDF to public/files.
  // Publisher JIFs checked on 2026-11-18; use the two-year JIF, not CiteScore or five-year JIF.
  // Elsevier: https://shop.elsevier.com/journals/{journal-slug}/{issn}
  // Springer: https://link.springer.com/journal/13201
  // IEEE: https://ieeeaccess.ieee.org/about/bibliometrics/
  // Water: https://www.mdpi.com/journal/water
  // NCA has no current JIF on its publisher page; retain its historical 2023 JIF (4.5).
  reviewingJournals: [
    { name: 'Journal of Cleaner Production', abbreviation: 'J. Clean. Prod.', impactFactor: 10.7, impactFactorYear: 2025 },
    { name: 'Journal of Hazardous Materials', abbreviation: 'J. Hazard. Mater.', impactFactor: 10.6, impactFactorYear: 2025 },
    { name: 'Expert Systems with Applications', abbreviation: 'Expert Syst. Appl.', impactFactor: 9.4, impactFactorYear: 2025 },
    { name: 'Applied Soft Computing', abbreviation: 'Appl. Soft Comput.', impactFactor: 7.8, impactFactorYear: 2025 },
    { name: 'Journal of Hydrology', abbreviation: 'J. Hydrol.', impactFactor: 7.3, impactFactorYear: 2025 },
    { name: 'Information Sciences', abbreviation: 'Inf. Sci.', impactFactor: 6.0, impactFactorYear: 2025 },
    { name: 'Applied Water Science', abbreviation: 'Appl. Water Sci.', impactFactor: 5.7, impactFactorYear: 2025 },
    { name: 'Neural Computing and Applications', abbreviation: 'Neural Comput. Appl.', impactFactor: 4.5, impactFactorYear: 2023 },
    { name: 'IEEE Access', abbreviation: 'IEEE Access', impactFactor: 4.2, impactFactorYear: 2025 },
    { name: 'Water', abbreviation: 'Water', impactFactor: 3.5, impactFactorYear: 2025 },
  ].sort((a, b) => b.impactFactor - a.impactFactor),
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
