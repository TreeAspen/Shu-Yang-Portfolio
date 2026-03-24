// src/translations.tsx
import React from 'react';
import imgNewsCover from './assets/news-cover.png';
import imgNews1_2 from './assets/News1-2.png'; 
import imgPaper1 from './assets/paper1.png';
import imgImage4 from './assets/image4.png';
import imgImage2 from './assets/image2.png';
import imgProject2_1 from './assets/project2-1.png'; 
import imgProject3_1 from './assets/project3-1.png';
import imgProject3_2 from './assets/project3-2.png'; 
import imgProject3_3 from './assets/project3-3.png'; 
import imgImage5 from './assets/image5.png';
import imgImage1 from './assets/image1.png';
import imgImage3 from './assets/image3.png';

export const translations = {
  en: {
    navbar: {
      home: "Home",
      gallery: "Gallery",
      project: "Project",
      contact: "Contact",
      lang: "中" 
    },
    hero: {
      name: "Shu Yang",
      subtitle: "Data Science x Visual Design | NYU CUSP",
      academicBio: "Academic Bio",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      portfolio: "Portfolio",
      gallery: "Gallery"
    },
    // 🌟 新增：News 组件特有的精简文案
    newsUI: {
      title: "Projects & News",
      visitLink: "Visit Link",
      viewMore: "View More"
    },
    newsOverview: [
      {
        projectId: 0, // 自动关联 U.TOP
        title: "U.TOP Lab Official Website",
        liveLink: "https://utoplab.net/",
        description: "A full-stack, end-to-end design and development of the U.TOP research lab website, featuring a cyberpunk aesthetic, immersive interactions, and modular data architecture."
      },
      {
        projectId: 2, // 自动关联 SomniBot
        title: "SomniBot: Personalized Sleep AI",
        liveLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled",
        description: "A Top 1% hackathon project delivering personalized, clinically informed sleep recommendations using FHIR and RAG."
      },
      {
        projectId: 1, // 自动关联 NeurIPS
        title: "NeurIPS 2025 Spotlight",
        liveLink: "https://arxiv.org/abs/2510.19980",
        description: "Abstain Mask Retain Core: Time Series Prediction by Adaptive Masking Loss. Highlighted in Top 3% of accepted papers."
      }
    ],
    skills: {
      title: "Skills",
      list: [
        {
          title: "Design Expertise",
          description: "UI/UX Design, Visual Design, Interaction Design, Prototyping with Figma & Adobe Suite",
        },
        {
          title: "Technical Proficiency",
          description: "React, TypeScript, Python, GIS Tools, Data Visualization, Web Development",
        },
        {
          title: "User Research & Analytics",
          description: "User Interviews, Usability Testing, A/B Testing, Data Analysis, Survey Design",
        },
      ]
    },
    timeline: {
      title: "Time Line",
      events: [
        {
          year: "2026.02 - Present",
          type: "Academic",
          title: "UTOP Lab (UF)",
          subtitle: "Research Assistant · Gainesville, FL",
          description: "Spearheaded zero-to-one design and full-stack development of the official lab platform, establishing a scalable architecture for urban tech research.",
          skills: ["Full-Stack Dev", "UI/UX Architecture", "System Design"],
          side: "right" as const,
        },
        {
          year: "2025.10 - Present",
          type: "Internship",
          title: "Municipal Art Society",
          subtitle: "Web Developer · New York, NY",
          description: "Led the end-to-end migration of the MAS platform from legacy WordPress to a modern React ecosystem, enhancing UI/UX and civic engagement.",
          skills: ["React", "CMS Migration", "Web Design"],
          side: "right" as const,
        },
        {
          year: "2025.09 - 2026.05",
          type: "Academic",
          title: "NYU CUSP",
          subtitle: "Teaching Assistant (GTA) · New York, NY",
          description: "Mentored graduate students in Python and statistical modeling. Actively debugged code and guided methodologies for spatial regression tasks.",
          skills: ["Python", "Statistical Modeling", "Mentorship"],
          side: "right" as const,
        },
        {
          year: "2024.09 - 2026.05",
          type: "Education",
          title: "New York University",
          subtitle: "M.S. in Urban Data Science · New York, NY",
          description: "Awarded 1st Prize in Public Data Challenge ($7,000). Specialized in causal inference and longitudinal spatial database construction.",
          skills: ["Machine Learning", "Causal Inference", "Spatial Analysis"],
          side: "left" as const,
        },
        {
          year: "2023.08 - 2024.01",
          type: "Internship",
          title: "Shenzhen Dauyan Tech",
          subtitle: "Data Science Intern · Shenzhen, China",
          description: "Built robust pipelines processing 200GB+ of user logs and fine-tuned Llama-2 LLMs to drive intelligent, domain-specific chatbot solutions.",
          skills: ["LLM Fine-tuning", "Data Pipelines", "SQL"],
          side: "right" as const,
        },
        {
          year: "2020.09 - 2024.06",
          type: "Education",
          title: "BIGC",
          subtitle: "B.A. in Graphic Design · Beijing, China",
          description: "Graduated in Top 5% (3.87 GPA). Focused on the unique intersection of aesthetic design principles and visual computation.",
          skills: ["Graphic Design", "Visual Computation", "D3.js"],
          side: "left" as const,
        },
      ]
    },
    contact: {
      title: "Get in Touch",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      footer: "© 2026 Shu Yang. All rights reserved."
    },
    projectsUI: {
      title: "Projects",
      all: "All",
      viewDetails: "View Details"
    },
    detailUI: {
      back: "Back",
      background: "Background",
      goal: "Goal",
      process: "Process & Design Strategy",
      architecture: "In-Depth Architecture",
      userFlow: "User Flow",
      hierarchy: "Information Hierarchy",
      accomplishments: "Accomplishments",
      takeaway: "Takeaway",
      tools: "Technologies & Tools",
      liveLink: "View Live Prototype"
    },
    projectsData: [
      {
        id: 0,
        title: "U.TOP Lab Official Website",
        description: "A full-stack, end-to-end design and development of the U.TOP research lab website, featuring a cyberpunk aesthetic, immersive interactions, and modular data architecture.",
        categories: ["UI/UX", "Data Science", "AI / ML"],
        image: imgNewsCover,
        detail: {
          title: "U.TOP Lab Website",
          subtitle: "Solely led the end-to-end process from conceptual UI/UX design to modern frontend engineering and deployment.",
          heroImage: imgNewsCover,
          category: "Design Engineering",
          background: (
            <span>
              <a href="https://utoplab.net/" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                Live Website: https://utoplab.net/
              </a>
              <br /><br />
              The U.TOP Lab, a cutting-edge research group focusing on Urban Intelligence, Sensing, and Human-Computer-Environment Interaction, needed a digital presence that breaks away from traditional, monotonous academic templates. They required a platform that not only showcases their interdisciplinary research but also visually communicates their 'geek' identity.
            </span>
          ) as any,
          goal: "To architect and build a high-performance, visually striking static website from scratch. The goal was to establish a unique 'cyberpunk/terminal' visual identity while ensuring robust code maintainability, responsive mobile experiences, and seamless interactive data visualizations.",
          process: {
            description: "Operating as a hybrid Design Engineer, I executed a unified workflow that bridged aesthetic exploration and rigorous technical implementation.",
            features: [
              { title: "Cyberpunk & Terminal Aesthetics", desc: "Developed a distinct design system utilizing high-contrast palettes and monospace fonts to simulate a retro-futuristic command terminal." },
              { title: "Modern Frontend Stack", desc: "Built with React, TypeScript, and Tailwind CSS. Implemented complex, fluid page transitions using Framer Motion." },
              { title: "Algorithmic Data De-duplication", desc: "Engineered a scalable, JSON/TS-based modular data architecture. Implemented intelligent algorithms to automatically extract and merge data." },
            ],
          },
          accomplishments: [
            "Single-handedly delivered the entire project in under one month.",
            "Achieved a 0-maintenance cost infrastructure by utilizing Vite static builds deployed via GitHub Pages.",
            "Designed an interactive HTML iframe module that scales flawlessly across mobile screens."
          ],
          processImage: imgNews1_2,
          processImageCaption: "Figma UI/UX design drafts showcasing the evolution of the cyberpunk components.",
          takeaway: "This project validated my capability to operate as a full-stack Creative Technologist. Moving beyond Figma mockups, I learned how to translate unconventional design concepts directly into production-ready React code.",
          tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          prototypeLink: "https://utoplab.net/",
        }
      },
      {
        id: 1,
        title: "Abstain Mask Retain Core",
        description: "NeurIPS 2025 Spotlight. Designed an interpretability framework to visualize manifold geometry and Stochastic Approximation.",
        categories: ["AI / ML", "Data Science"],
        image: imgPaper1,
        detail: {
          title: "Abstain Mask Retain Core: Time Series Prediction",
          subtitle: "NeurIPS 2025 Spotlight | Top 5% Accepted Papers in San Diego, CA",
          heroImage: imgPaper1,
          category: "AI / ML & Vis",
          background: "Time series forecasting plays a pivotal role in critical domains. Although deep learning-based approaches have achieved remarkable progress, the prevailing 'long-sequence information gain hypothesis' exhibits inherent limitations.",
          goal: "To propose an innovative solution termed Adaptive Masking Loss with Representation Consistency (AMRC), which features Dynamic Masking Loss and Representation Consistency Constraint.",
          takeaway: "Designed an interpretability framework to visualize manifold geometry and Stochastic Approximation. Conducted rigorous ablation studies across diverse datasets to validate robustness.",
          tools: ["Scientific Visualization", "Machine Learning", "PyTorch", "Python"],
          prototypeLink: "https://arxiv.org/abs/2510.19980",
        }
      },
      {
        id: 2,
        title: "SomniBot AI",
        description: "An AI-driven sleep assistant providing personalized, science-backed guidance using FHIR and RAG to improve sleep quality.",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage4,
        detail: {
          title: "SomniBot: AI-Powered Personalized Sleep Assistant",
          subtitle: "A Top 1% Hackathon Project combining AI, HealthTech, and UI/UX.",
          heroImage: imgImage4,
          category: "AI Product",
          background: "Sleep is essential, yet 30-40% of adults struggle with insomnia. Existing solutions failed to build trust due to privacy issues and unreliable information.",
          goal: "To design and prototype an AI-powered sleep assistant that delivers personalized, clinically informed recommendations using FHIR and RAG.",
          takeaway: "Features a self-assessment quiz and intelligent analysis based on EHR data to improve sleep quality while ensuring privacy.",
          tools: ["AI", "HealthTech", "Sleep Science", "FHIR", "RAG", "Figma"],
          prototypeLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled",
        }
      },
      {
        id: 3,
        title: "CLT Legal AI Assistant",
        description: "A 1st Place hackathon project: an AI-powered legal support tool with a multilingual chatbot and interactive data tables.",
        categories: ["AI / ML", "UI/UX", "Data Science"],
        image: imgImage2,
        detail: {
          title: "CLT Legal AI Assistant: Intelligent Chatbot & Platform",
          subtitle: "A one-day hackathon project that won 1st Place. My role was UI/UX and prototype design.",
          heroImage: imgImage2,
          category: "LegalTech UX",
          goal: "To design a clear and accessible interface for exploring Community Land Trust (CLT) laws across U.S. states.",
          accomplishments: [
            "Won 1st Place in the hackathon competition.",
            "Delivered a responsive Table View paired with a contextual chatbot."
          ],
          processImage: imgProject2_1,
          takeaway: "The project resulted in a modular system including a responsive Table View, a contextual chatbot, and a searchable state selector.",
          tools: ["Figma", "UI/UX Design", "Prototyping", "LegalTech"],
        }
      },
      {
        id: 4,
        title: "GPT IELTS Assistant",
        description: "Combining AI and English writing to help students study, conceptualize, write, and score their essays.",
        categories: ["UI/UX", "AI / ML"],
        image: imgProject3_1,
        detail: {
          title: "GPT-Powered IELTS Writing Assistant",
          subtitle: "A UI/UX design project for an AI-assisted learning platform.",
          heroImage: imgProject3_1,
          category: "EdTech UX",
          goal: "To design a clear, accessible, and motivating interface that leverages GPT to help students practice IELTS writing.",
          processImage: imgProject3_2,
          resultImage: imgProject3_3,
          takeaway: "Successfully translated complex AI functionalities into a simple, user-friendly interface.",
          tools: ["UI/UX Design", "Figma", "User Research"],
          prototypeLink: "https://ielts.dauyan.com/",
        }
      },
      {
        id: 5,
        title: "Houston's Healthcare Divide",
        description: "A GIS network analysis study examining healthcare accessibility and resource disparities in Houston.",
        categories: ["GIS", "Data Science"],
        image: imgImage5,
        detail: {
          title: "Houston's Healthcare Divide: Mapping Access and Inequality",
          subtitle: "Analyzing road networks and travel times to reveal resource distribution disparities.",
          heroImage: imgImage5,
          category: "Urban Analysis",
          goal: "To use GIS network analysis to examine healthcare accessibility.",
          takeaway: "Reveals disparities in resource distribution and its impact on residents.",
          tools: ["GIS", "Urban Science", "Healthcare", "Data Analysis"],
          prototypeLink: "https://arcg.is/1PnjPu0",
        }
      },
      {
        id: 6,
        title: "Economic Toll of Flooding",
        description: "Using GIS and machine learning to predict flood risk and economic losses in Florida.",
        categories: ["GIS", "AI / ML", "Data Science"],
        image: imgImage1,
        detail: {
          title: "Economic Toll of Flooding: Florida Case Study",
          subtitle: "Predicting vulnerability by integrating physical, demographic, and socioeconomic data.",
          heroImage: imgImage1,
          category: "Spatial ML",
          goal: "To model vulnerability and economic impact by integrating physical, demographic, and socioeconomic data.",
          takeaway: "Uses GIS and machine learning to predict flood risk and economic losses.",
          tools: ["GIS", "Machine Learning", "Climate Risk", "Economic Modeling"],
        }
      },
      {
        id: 7,
        title: "Facial Pixel Mosaic",
        description: "An interactive generative artwork using ml5.js FaceMesh to create dynamic portraits triggered by eye movement.",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage3,
        detail: {
          title: "Facial Pixel Mosaic: Real-time Generative Art",
          subtitle: "Creative coding combining computer vision and generative art.",
          heroImage: imgImage3,
          category: "Generative Art",
          goal: "To build a real-time interactive artwork that translates facial tracking data into a dynamic mosaic experience.",
          takeaway: "An interactive artwork using ml5.js FaceMesh to create dynamic mosaic portraits from live video.",
          tools: ["Creative Coding", "Generative Art", "Computer Vision", "ml5.js"],
          prototypeLink: "https://shuyang-dm-gy-6063-2024fall-b.github.io/HW09/HW09B/",
        }
      }
    ]
  },
  zh: {
    navbar: {
      home: "首页",
      gallery: "视觉画廊",
      project: "精选项目",
      contact: "联系方式",
      lang: "EN" 
    },
    hero: {
      name: "杨树",
      subtitle: "数据科学 x 视觉设计 | 纽约大学 CUSP",
      academicBio: "学术主页",
      github: "GitHub",
      linkedin: "领英",
      resume: "个人简历",
      portfolio: "作品集",
      gallery: "视觉画廊"
    },
    // 🌟 新增：News 模块特有的精简文案
    newsUI: {
      title: "最新动态",
      visitLink: "访问链接",
      viewMore: "查看详情"
    },
    newsOverview: [
      {
        projectId: 0,
        title: "U.TOP 实验室官方网站",
        liveLink: "https://utoplab.net/",
        description: "U.TOP 研究实验室网站的全栈端到端设计与开发，采用赛博朋克美学，提供沉浸式交互和模块化数据架构。"
      },
      {
        projectId: 2,
        title: "SomniBot: AI 个性化睡眠助手",
        liveLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled",
        description: "荣获极客松 Top 1% 的项目，利用 FHIR 与 RAG 技术提供具有临床依据的个性化睡眠建议。"
      },
      {
        projectId: 1,
        title: "NeurIPS 2025 Spotlight",
        liveLink: "https://arxiv.org/abs/2510.19980",
        description: "焦点论文：基于自适应掩码损失的时间序列预测。入选 NeurIPS 2025 全球前 3% 录用论文。"
      }
    ],
    skills: {
      title: "专业技能",
      list: [
        {
          title: "设计专长",
          description: "UI/UX 设计、视觉设计、交互设计、使用 Figma 与 Adobe 套件进行高保真原型制作",
        },
        {
          title: "技术栈能力",
          description: "React, TypeScript, Python, GIS 空间分析工具, 数据可视化, Web 前端全栈开发",
        },
        {
          title: "研究与数据分析",
          description: "用户访谈、可用性测试、A/B 测试、统计数据分析、定量/定性问卷设计",
        },
      ]
    },
    timeline: {
      title: "过往经历",
      events: [
        {
          year: "2026.02 - 至今",
          type: "学术科研",
          title: "UTOP 实验室 (佛罗里达大学)",
          subtitle: "研究助理 · 盖恩斯维尔，佛罗里达",
          description: "主导了实验室官方平台从 0 到 1 的设计与全栈开发，为城市科技研究建立了可扩展的基础架构。",
          skills: ["全栈开发", "UI/UX 架构", "系统设计"],
          side: "right" as const,
        },
        {
          year: "2025.10 - 至今",
          type: "实习经历",
          title: "市政艺术协会 (MAS)",
          subtitle: "Web 开发者 · 纽约",
          description: "主导了 MAS 平台从旧版 WordPress 到现代 React 生态的端到端迁移，提升了 UI/UX 体验与公众参与度。",
          skills: ["React", "CMS 迁移", "网页设计"],
          side: "right" as const,
        },
        {
          year: "2025.09 - 2026.05",
          type: "学术经历",
          title: "纽约大学 CUSP",
          subtitle: "研究生助教 (GTA) · 纽约",
          description: "辅导研究生的 Python 与统计建模课程，积极排查代码错误，并指导空间回归任务的分析方法。",
          skills: ["Python", "统计建模", "教学辅导"],
          side: "right" as const,
        },
        {
          year: "2024.09 - 2026.05",
          type: "教育背景",
          title: "纽约大学 (NYU)",
          subtitle: "城市数据科学 硕士 · 纽约",
          description: "荣获公共数据挑战赛一等奖（$7,000 奖金）。专攻因果推断与纵向空间数据库的构建。",
          skills: ["机器学习", "因果推断", "空间分析"],
          side: "left" as const,
        },
        {
          year: "2023.08 - 2024.01",
          type: "实习经历",
          title: "深圳大宇言科技",
          subtitle: "数据科学实习生 · 深圳，中国",
          description: "构建了处理 200GB+ 用户日志的强大数据管道，并微调 Llama-2 大语言模型以驱动智能的特定领域聊天机器人方案。",
          skills: ["大模型微调", "数据管道", "SQL"],
          side: "right" as const,
        },
        {
          year: "2020.09 - 2024.06",
          type: "教育背景",
          title: "北京印刷学院 (BIGC)",
          subtitle: "平面设计 学士 · 北京，中国",
          description: "以专业前 5% (GPA 3.87) 的优异成绩毕业。专注于美学设计原则与视觉计算的独特交叉领域。",
          skills: ["平面设计", "视觉计算", "D3.js"],
          side: "left" as const,
        },
      ]
    },
    contact: {
      title: "联系我",
      email: "电子邮件",
      phone: "联系电话",
      linkedin: "领英",
      footer: "© 2026 杨树. 保留所有权利."
    },
    projectsUI: {
      title: "精选项目",
      all: "全部",
      viewDetails: "查看详情"
    },
    detailUI: {
      back: "返回",
      background: "项目背景",
      goal: "核心目标",
      process: "研发与设计策略",
      architecture: "深度架构解析",
      userFlow: "用户行为流",
      hierarchy: "信息层级",
      accomplishments: "核心成果",
      takeaway: "项目总结",
      tools: "技术栈与工具",
      liveLink: "查看在线演示"
    },
    projectsData: [
      {
        id: 0,
        title: "U.TOP 实验室官方网站",
        description: "U.TOP 研究实验室网站的全栈端到端设计与开发，采用赛博朋克美学，提供沉浸式交互和模块化数据架构。",
        categories: ["UI/UX", "Data Science", "AI / ML"],
        image: imgNewsCover,
        detail: {
          title: "U.TOP 实验室网站重构",
          subtitle: "独立主导了从 UI/UX 概念设计到现代前端工程开发及部署的端到端全流程。",
          heroImage: imgNewsCover,
          category: "设计工程 (Design Engineering)",
          background: (
            <span>
              <a href="https://utoplab.net/" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                在线网站：https://utoplab.net/
              </a>
              <br /><br />
              U.TOP 实验室是一个专注于城市智能、传感和人机环境交互的前沿研究小组。他们需要一个打破传统、单调的学术模板的数字平台，不仅能展示跨学科研究成果，还要从视觉上传达其极客（Geek）身份。
            </span>
          ) as any,
          goal: "从零架构并构建一个高性能、极具视觉冲击力的静态网站。目标是确立独特的“赛博朋克/终端”视觉识别系统，同时确保高度的代码可维护性、移动端自适应响应以及流畅的交互式数据可视化。",
          process: {
            description: "作为跨界的设计工程师，我执行了一套统一的工作流，打破了美学探索和严谨技术实现之间的壁垒。",
            features: [
              { title: "赛博朋克与终端美学", desc: "开发了独特的系统，利用高对比度配色和等宽字体，模拟复古未来的命令行终端。" },
              { title: "现代前端技术栈", desc: "基于 React、TypeScript 和 Tailwind CSS 构建。利用 Framer Motion 实现了复杂的流体页面过渡。" },
              { title: "算法驱动的数据去重", desc: "设计了基于 JSON/TS 的可扩展模块化数据架构，编写算法自动提取并合并跨成员的嵌套论文数据。" },
            ],
          },
          accomplishments: [
            "在不到一个月的时间内独自完成了整个项目交付。",
            "利用通过 GitHub Pages 部署的 Vite 静态构建，实现了零运维成本的基础架构。",
            "设计了一个交互式的 HTML iframe 模块，在移动屏幕上可完美缩放，无横向溢出。"
          ],
          processImage: imgNews1_2,
          processImageCaption: "展示赛博朋克组件演变的 Figma UI/UX 设计草图。",
          takeaway: "该项目验证了我作为全栈创意技术专家的能力。超越了单纯的 Figma 模型，我学会了如何将颠覆常规的设计理念直接转化为生产级的 React 代码。",
          tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          prototypeLink: "https://utoplab.net/",
        }
      },
      {
        id: 1,
        title: "放弃掩码，保留核心 (AMRC)",
        description: "NeurIPS 2025 Spotlight 焦点论文。设计了一个可解释性框架，用于可视化流形几何与随机逼近。",
        categories: ["AI / ML", "Data Science"],
        image: imgPaper1,
        detail: {
          title: "AMRC：时间序列预测的新范式",
          subtitle: "NeurIPS 2025 Spotlight | 圣地亚哥，加州（全球排名前 5% 录用论文）",
          heroImage: imgPaper1,
          category: "AI 算法与可视化",
          background: "时间序列预测在能源管理和金融市场等关键领域起着关键作用。尽管深度学习取得了显著进展，但普遍的“长序列信息增益假设”表现出了固有的局限性。",
          goal: "提出一种名为带有表征一致性的自适应掩码损失 (AMRC) 的创新解决方案，其特点是动态掩码损失和表征一致性约束。",
          takeaway: "设计了一个可解释性框架来可视化流形几何。在多个不同数据集上进行了严格的消融实验，以验证自适应掩码损失的鲁棒性。",
          tools: ["科学可视化", "机器学习", "PyTorch", "Python"],
          prototypeLink: "https://arxiv.org/abs/2510.19980",
        }
      },
      {
        id: 2,
        title: "SomniBot AI 睡眠助手",
        description: "一款由 AI 驱动的睡眠助手，利用 FHIR 和 RAG 技术提供个性化、基于科学的指导，改善睡眠质量。",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage4,
        detail: {
          title: "SomniBot：AI 个性化睡眠守护者",
          subtitle: "结合 AI、健康科技和 UI/UX 的 Top 1% 极客松获胜项目。",
          heroImage: imgImage4,
          category: "AI 医疗产品",
          background: "睡眠至关重要，但 30-40% 的成年人受到失眠困扰。现有的通用搜索或 AI 聊天机器人由于隐私问题和不可靠的信息，难以建立用户信任。",
          goal: "设计并制作一个 AI 驱动的睡眠助手的原型，使用 FHIR 和 RAG 提供个性化且具有临床依据的建议，解决用户对隐私和信任的需求。",
          takeaway: "该助手包含自测问卷，并能基于 EHR（电子健康记录）数据进行智能分析，在确保隐私的同时改善睡眠质量。",
          tools: ["人工智能", "健康科技", "睡眠科学", "FHIR", "RAG", "Figma"],
        }
      },
      {
        id: 3,
        title: "CLT 法律 AI 助手",
        description: "获一等奖的极客松项目：一款由 AI 驱动的法律支持工具，配备多语言聊天机器人和交互式数据表。",
        categories: ["AI / ML", "UI/UX", "Data Science"],
        image: imgImage2,
        detail: {
          title: "CLT 法律 AI 助手：智能对话平台",
          subtitle: "赢得第一名的 24 小时极客松项目。我主要负责 UI/UX 和原型设计。",
          heroImage: imgImage2,
          category: "法律科技 UX",
          goal: "设计一个清晰、无障碍的界面，用于探索美国各州的社区土地信托 (CLT) 法律，将结构化数据表与对话式搜索相结合。",
          accomplishments: [
            "在极客松竞赛中获得第一名。",
            "交付了响应式数据表视图，并配备了上下文感知聊天机器人。"
          ],
          processImage: imgProject2_1,
          takeaway: "该项目产出了一个模块化系统，包含响应式表格、情景聊天机器人以及可简便浏览复杂住房立法的州选择器。",
          tools: ["Figma", "UI/UX 设计", "原型开发", "法律科技"],
        }
      },
      {
        id: 4,
        title: "GPT 雅思写作助手",
        description: "结合 AI 与英语写作，帮助学生构思、撰写并对论文进行多维评分的教育平台。",
        categories: ["UI/UX", "AI / ML"],
        image: imgProject3_1,
        detail: {
          title: "GPT 赋能的雅思写作陪练平台",
          subtitle: "AI 辅助学习平台的 UI/UX 设计项目。UI 协作者：Shuai Cui。",
          heroImage: imgProject3_1,
          category: "教育科技 UX",
          goal: "设计一个清晰、易用且能激发动力的界面，利用 GPT 帮助学生练习雅思写作。平台旨在协助构思、提供基于官方标准的结构化反馈，并逐步建立用户信心。",
          processImage: imgProject3_2,
          resultImage: imgProject3_3,
          takeaway: "成功将复杂的 AI 后台功能转化为简单、用户友好的前端界面。模块化系统极大简化了备考雅思写作的复杂流程。",
          tools: ["UI/UX 设计", "Figma", "用户调研"],
          prototypeLink: "https://ielts.dauyan.com/",
        }
      },
      {
        id: 5,
        title: "休斯顿医疗鸿沟分析",
        description: "一项探讨休斯顿医疗资源可及性和分布差异的 GIS 网络分析研究。",
        categories: ["GIS", "Data Science"],
        image: imgImage5,
        detail: {
          title: "休斯顿的医疗鸿沟：绘制无障碍与不平等地图",
          subtitle: "分析道路网络和出行时间，揭示资源分布的差距。",
          heroImage: imgImage5,
          category: "城市分析",
          goal: "利用 GIS 网络分析研究医疗资源的可达性，揭示资源分布上的空间差异。",
          takeaway: "通过分析路网和行驶时间，清晰地呈现了资源配置的不均衡及其对脆弱人群的影响。",
          tools: ["GIS", "城市科学", "医疗健康", "数据分析"],
          prototypeLink: "https://arcg.is/1PnjPu0",
        }
      },
      {
        id: 6,
        title: "佛州洪灾的经济代价",
        description: "利用 GIS 和机器学习预测佛罗里达州的洪灾风险及经济损失。",
        categories: ["GIS", "AI / ML", "Data Science"],
        image: imgImage1,
        detail: {
          title: "洪灾的经济损失评估：佛罗里达案例",
          subtitle: "通过整合自然、人口及社会经济数据预测脆弱性。",
          heroImage: imgImage1,
          category: "空间机器学习",
          goal: "将自然、人口和社会经济数据整合到一个预测框架中，构建脆弱性和经济影响模型。",
          takeaway: "本项目通过 GIS 和机器学习模型，实现了对自然灾害带来的潜在财务损失的精准预测分析。",
          tools: ["GIS", "机器学习", "气候风险", "经济建模"],
        }
      },
      {
        id: 7,
        title: "面部像素马赛克互动",
        description: "基于 ml5.js FaceMesh 的交互式生成艺术，创造由眼部运动触发的动态肖像。",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage3,
        detail: {
          title: "面部像素马赛克：实时生成艺术",
          subtitle: "结合计算机视觉与生成艺术的创意编程（Creative Coding）。",
          heroImage: imgImage3,
          category: "生成艺术",
          goal: "构建一个实时互动的艺术作品，将面部追踪数据转化为动态马赛克视觉体验。",
          takeaway: "展示了如何利用计算机视觉（ ml5.js FaceMesh ）结合创意代码，从实时视频流中生成由眼球触发重绘的动态数字肖像。",
          tools: ["创意编程", "生成艺术", "计算机视觉", "ml5.js"],
          prototypeLink: "https://shuyang-dm-gy-6063-2024fall-b.github.io/HW09/HW09B/",
        }
      }
    ]
  }
};