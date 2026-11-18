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
    category: 'funded-research',
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
  {
    id: 'moe-student-affairs-information-system',
    title: {
      en: 'Ministry of Education Student Affairs Department Commissioned Project — Student Affairs Electronic Information Management System',
      zh: '教育部高校学生司委托课题—学生司电子信息管理系统',
    },
    period: '2019.08–2020.03',
    category: 'contract-development',
    summary: {
      en: 'Electronic information management system development for the Ministry of Education Student Affairs Department, focusing on student affairs information and related administrative workflows.',
      zh: '面向教育部高校学生司的电子信息管理需求，开展学生事务信息与相关管理流程的信息系统开发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'advanced-intelligent-optimization-platform',
    title: {
      en: 'Advanced Intelligent Optimization Software Platform',
      zh: '先进智能优化技术软件平台项目',
    },
    period: '2021.02–2021.12',
    category: 'contract-development',
    summary: {
      en: 'Software platform development for intelligent optimization methods, focusing on algorithm implementation and optimization problem solving.',
      zh: '面向智能优化方法的软件化应用，开展算法实现与优化问题求解平台开发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'csic-709-task-planning-software',
    title: {
      en: 'Task Planning Software Design for CSIC No. 709 Research Institute',
      zh: '中船重工709研究所任务规划软件设计',
    },
    period: '2023.05–2024.06',
    category: 'contract-development',
    summary: {
      en: 'Task planning software design for CSIC No. 709 Research Institute, focusing on the software representation of planning requirements and scheduling constraints.',
      zh: '面向中船重工709研究所的任务规划需求，开展规划需求与调度约束的软件设计。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'western-organization-system-development',
    title: {
      en: 'System Development for an Organization in Western China',
      zh: '西部某单位系统研发',
    },
    period: { en: '2024.12–Present', zh: '2024.12–至今' },
    category: 'contract-development',
    summary: {
      en: 'System research and development tailored to the requirements of an organization in western China.',
      zh: '面向西部某单位的业务需求，开展定制化系统研发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'energy-china-data-governance',
    title: {
      en: 'Research on Data Governance and Value Creation Frameworks for Energy China',
      zh: '中国能建数据治理与价值化体系研究',
    },
    period: '2026.06–2026.10',
    category: 'contract-development',
    summary: {
      en: 'Research on enterprise data governance and data value creation for Energy China, focusing on a framework for data management and use.',
      zh: '围绕中国能建的企业数据治理与价值化需求，研究数据管理和应用的体系框架。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'explorer-mineral-evaluation-system',
    title: {
      en: 'Explorer Mineral Exploration and Development Evaluation Software System',
      zh: '勘探者矿产勘查与开发评价软件系统',
    },
    period: '2022.11–2025.01',
    category: 'contract-development',
    summary: {
      en: 'Software system development for mineral exploration and development evaluation, supporting exploration information management and evaluation workflows.',
      zh: '面向矿产勘查与开发评价，开展勘探信息管理与评价流程的软件系统开发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'pincheng-weichuang-apparel-system',
    title: {
      en: 'Pincheng Weichuang Apparel Management System',
      zh: '品诚唯创服装管理系统',
    },
    period: '2021.03–2022.01',
    category: 'contract-development',
    summary: {
      en: 'Apparel management system development for Pincheng Weichuang, focusing on apparel business information and management workflows.',
      zh: '面向品诚唯创的服装业务管理需求，开展业务信息与管理流程的软件系统开发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'huangbai-river-reservoir-operation',
    title: {
      en: 'Integrated Reservoir Operation System for the Huangbai River Basin',
      zh: '黄柏河流域水库综合调度系统',
    },
    category: 'contract-development',
    summary: {
      en: 'Integrated reservoir operation system development for the Huangbai River Basin, focusing on coordinated reservoir scheduling and decision support.',
      zh: '面向黄柏河流域水库综合调度，开展水库协同调度与辅助决策系统开发。',
    },
    topics: [],
    selected: true,
  },
  {
    id: 'yuanan-integrated-water-supply',
    title: {
      en: 'Planning and Design of an Integrated Urban–Rural Safe Drinking Water Management System in Yuan’an County',
      zh: '远安县城乡供水一体化安全饮水管理系统规划设计',
    },
    period: '2023.04–2023.09',
    category: 'contract-development',
    summary: {
      en: 'Planning and design of a safe drinking water management system for integrated urban–rural water supply in Yuan’an County, focusing on water supply safety and management needs.',
      zh: '围绕远安县城乡供水一体化需求，开展安全饮水管理系统规划设计，服务供水安全与管理。',
    },
    topics: [],
    selected: true,
  },
];
