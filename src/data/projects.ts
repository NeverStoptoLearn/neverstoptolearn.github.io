import type { ResearchProject } from './types';

// Research projects are maintained independently of publications and page markup.
export const projects: ResearchProject[] = [
  {
    id: 'urban-water-geoscience-big-data',
    title: {
      en: 'Spatiotemporal Characterization and Intelligent Management of Urban Water Resources and Environmental Systems Using Geoscience Big Data',
      zh: '基于地学大数据的城市水资源环境系统时空透视与智能管控',
    },
    period: '2020.01–2023.12',
    funding: {
      en: 'NSFC–Guangdong Big Data Science Research Center · Key Support Project',
      zh: '国家自然科学基金联合基金重点支持项目（NSFC–广东大数据科学研究中心）',
    },
    summary: {
      en: 'This project aims to integrate multi-source monitoring data, geoscience big data analytics, and numerical simulation for dynamic modeling, intelligent management, and early warning of urban water resources and environmental systems, with Shenzhen as the demonstration area.',
      zh: '项目旨在融合多源监测数据、地学大数据分析与数值模拟，研究城市水资源与水环境的动态模拟、智能管控和预警，并以深圳市为示范区建设综合决策支持平台。',
    },
    topics: [],
    selected: true,
  },
];
