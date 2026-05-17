// src/translations.tsx
import React from 'react';
import imgNewsCover from './assets/news-cover.png';
import imgNews1_2 from './assets/News1-2.png'; 
import imgPaper1 from './assets/paper1.png';
import imgNDRoPE from './assets/ae0b03b5208297094d2f66c7f922b970.jpg';
import imgNDRoPE2 from './assets/1041a52c058feef53b03b76611e8a40a.jpg';
import imgImage4 from './assets/image4.png';
import imgImage2 from './assets/image2.png';
import imgProject2_1 from './assets/project2-1.png'; 
import imgProject3_1 from './assets/project3-1.png';
import imgProject3_2 from './assets/project3-2.png'; 
import imgProject3_3 from './assets/project3-3.png'; 
import imgImage5 from './assets/image5.png';
import imgImage1 from './assets/image1.png';
import imgImage3 from './assets/image3.png';
import imgProject311_1 from './assets/project-311-1.png';
import imgProject311_2 from './assets/project-311-2.png';
import imgProject311_3 from './assets/project-311-3.png';
import imgVRGreenery1 from './assets/vr-greenery-1.png';
import imgVRGreenery2 from './assets/vr-greenery-2.png';
import imgProject1_1 from './assets/project1-1.png';
import imgProject1_2 from './assets/project1_2.png';
import vidSomniDemo from './assets/25cbda1f290c0707be8cb42abd5c9c4d.mp4';

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
      subtitle: "Designing with data, engineering with intent — NYU CUSP '26",
      academicBio: "Academic Bio",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      portfolio: "Portfolio",
      gallery: "Gallery",
      currentlyLabel: "Currently",
      currentlyItems: [
        "Shipping U.TOP Lab v2 — co-leading a 7-person ICML paper team",
        "Designing AAG-bound visuals for the VR Greenery × CUSP capstone",
        "Open to 2026 design × engineering roles",
      ],
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
      title: "Craft",
      list: [
        {
          title: "Design Craft",
          description: "From research-led UX to expressive visual systems — fluent in Figma and the Adobe suite, shaping interfaces with motion-led prototyping.",
        },
        {
          title: "Engineering Fluency",
          description: "Production-grade React + TypeScript on the front, Python and modern data stacks on the back. I design and ship the whole stack.",
        },
        {
          title: "Research & Strategy",
          description: "Mixed-methods user research, statistical modeling, and causal inference — turning behavior into evidence, evidence into product decisions.",
        },
      ]
    },
    timeline: {
      title: "Journey",
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
      liveLink: "View Live Prototype",
      aspenNote: "Aspen's note"
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
          aspenNote: "This project taught me that 'Design Engineer' isn't a label, it's a workflow — Figma to deployed React in 26 days, alone. The hardest call wasn't technical: it was choosing not to add a CMS so the maintenance cost stays at zero.",
        }
      },
      {
        id: 9,
        title: "VR Greenery & Urban Stress",
        description: "🏆 2026 CUSP Best Capstone Award. A controlled VR experiment with 25 participants, EEG/EDA biosensing, and AI-standardized greenery to study how urban context shapes restorative response.",
        categories: ["Data Science", "AI / ML", "UI/UX"],
        image: imgVRGreenery1,
        detail: {
          title: "VR Greenery Study: Physiological & Psychological Response to Urban Context",
          subtitle: "An Immersive Experiment Using Virtual Reality and Multi-Measurement Biosensing — 2026 NYU CUSP Best Capstone Award.",
          heroImage: imgVRGreenery1,
          category: "Capstone Research",
          background: (
            <span>
              <a href="https://utoplab.net/#/news/vr-urban-stress-study" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                Project Page: utoplab.net/#/news/vr-urban-stress-study
              </a>
              <br /><br />
              🏆 <strong>Awarded the 2026 Best Capstone Award at NYU CUSP.</strong> Results were also presented at the 2026 American Association of Geographers Annual Meeting (AAG), San Francisco, March 17–21, 2026.
              <br /><br />
              Co-authored with Ruolin Wu and Isaiah Garnett · Mentors: Anton Rozhkov, Zhaoxi Zhang, H. Shellae Versey · Sponsor: Prince Michael Amegbor.
              <br /><br />
              Rapid urbanization is increasing stress and mental-health burdens in cities. Prior research shows greenery can offer psychological restoration, but most studies measure only the quantity of greenery, or compare urban vs. suburban in broad strokes. Less is known about how specific urban contexts shape the stress-reducing effect of greenery.
            </span>
          ) as any,
          goal: "Investigate how urban greenery and surrounding spatial context jointly influence stress reduction — using VR-based simulation, physiological biosensing, and psychological scaling — to inform evidence-based urban design.",
          process: {
            description: "I co-led the full pipeline from literature review through data validation, owning the AI greenery standardization, the Meta Quest 3 stimulus pipeline, and the EEG / EDA / survey analysis. The study isolates context from raw greenery quantity by AI-equalizing GVI across all four scenes.",
            features: [
              { title: "AI-Standardized Greenery (GVI)", desc: "Used SegFormer-b2 with ADE20K parsing to measure GVI on raw 360° captures, then applied Google Veo 2.0 video generation to unify GVI to 24–34% across park, waterfront, residential, and roadway scenes — isolating context from greenery quantity." },
              { title: "VR + Biosensing Pipeline", desc: "Meta Quest 3 delivered randomized 360° clips while Emotiv Insight EEG (FAA, Beta/Alpha, PM.Stress) and Empatica E4 EDA (tonic SCL, phasic SCR) captured real-time physiological response, paired with PANAS-X, perceived realism, and PREQI psychological scales." },
              { title: "Mixed-Methods Analysis", desc: "RM-ANOVA across the four contexts on EEG, EDA, and survey data; Cochran's Q paired test confirmed participants could not reliably detect AI-modified greenery (p > 0.05) — validating the ecological soundness of the standardization." },
            ],
          },
          accomplishments: [
            "🏆 Won the 2026 NYU CUSP Best Capstone Award.",
            "Presented at the 2026 American Association of Geographers Annual Meeting in San Francisco.",
            "Significant context effect on Frontal Alpha Asymmetry (F(3,57)=3.35, p=0.0255*), with park and waterfront eliciting more positive valence than road and residential.",
            "Survey HighPositive & CalmPositive emotion ratings differed significantly by context (p < 0.05).",
            "Recruited 25 participants, retained 21 valid datasets after sensor-quality screening.",
          ],
          processImage: imgVRGreenery2,
          processImageCaption: "Research design — full pipeline from literature review through stimulus standardization, biosensing capture, and analysis.",
          takeaway: "Greenery benefits are not uniform — they depend on the surrounding urban setting. Park and waterfront environments showed the strongest restorative potential, while residential and roadway contexts blunted greenery's effect. This work pushed me to design experiments where AI is a measurement tool, not just an output — using SegFormer + Veo to control a confound that traditional field studies cannot.",
          tools: ["VR (Meta Quest 3)", "EEG (Emotiv Insight)", "EDA (Empatica E4)", "SegFormer-b2", "Google Veo 2.0", "PANAS-X", "Python", "RM-ANOVA"],
          prototypeLink: "https://utoplab.net/#/news/vr-urban-stress-study",
          aspenNote: "What surprised me wasn't the EEG numbers — it was that participants couldn't reliably tell our AI-modified scenes from raw 360° footage (p=0.753). Once that confound dissolved, the rest of the study could be honest about what 'greenery' actually means inside a city.",
        }
      },
      {
        id: 8,
        title: "NYC 311 Semantic Dashboard",
        description: "An AI-driven dashboard that turns natural-language prompts into spatial-temporal classifications across 5 sanitation buckets — with drag-and-drop, density mapping, and live analytics.",
        categories: ["UI/UX", "Data Science", "AI / ML", "GIS"],
        image: imgProject311_1,
        detail: {
          title: "NYC 311 Sanitation Dashboard: AI-Powered Semantic Analytics",
          subtitle: "Code4City Hackathon · Prototype design + full-stack engineering for natural-language NYC 311 exploration.",
          heroImage: imgProject311_1,
          category: "Civic Data UX",
          background: (
            <span>
              <a href="https://treeaspen.github.io/code4city-hackthon/" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                Live Prototype: treeaspen.github.io/code4city-hackthon
              </a>
              <br /><br />
              NYC's 311 system collects millions of citizen complaints per year, but the raw complaint-type taxonomy is noisy, overlapping, and inaccessible to non-technical city staff. Existing dashboards force analysts to memorize cryptic category strings and pre-baked filters — there is no way to ask "show me all trash and drainage issues causing flooding" in plain English.
            </span>
          ) as any,
          goal: "Design and build a working prototype that lets civic stakeholders explore 311 sanitation data through natural-language queries, semantic A–E bucket classifications, and interactive spatial-temporal filters — without writing a single SQL query.",
          process: {
            description: "I led both UI/UX design and full-stack engineering during a 48-hour hackathon, then iterated the prototype into a stable demo build. The system pairs an AI Extractor with a drag-and-drop semantic board so users can refine the model's classification on the fly.",
            features: [
              { title: "AI Query Extractor", desc: "Natural-language prompt bar parses user intent and routes complaint types into 5 semantic buckets (Trash, Sewer, Flooding, Hygiene, Blockage) with color-consistent visualization across all charts." },
              { title: "Drag-and-Drop Semantic Board", desc: "Users can override AI classifications by dragging sub-categories between A–E buckets, renaming columns, or excluding noise — turning the dashboard into a live human-in-the-loop labeling tool." },
              { title: "Spatial + Temporal Filters", desc: "Leaflet density map, community-board selector, and date-range slider all bound to a shared filtered dataset; right sidebar streams live monthly trends and bucket-share analytics." },
            ],
          },
          accomplishments: [
            "Shipped a complete working prototype in under 48 hours during the Code4City Hackathon.",
            "Designed a 5-bucket semantic taxonomy that collapsed 40+ raw NYC 311 complaint types into intuitive groupings.",
            "Engineered a reusable color/category system shared by the map, charts, and category board for visual consistency.",
            "Reduced bundle size by 90%+ by migrating from raw CSV to preprocessed JSON, enabling instant GitHub Pages deployment.",
          ],
          processImage: imgProject311_2,
          processImageCaption: "Reference research on NYC's 311 platform UX — informed the prompt-first interaction model.",
          takeaway: "This project pushed me to design for civic stakeholders who think in language, not schemas. The drag-and-drop board became the heart of the UX — letting humans correct the AI is more trustworthy than asking them to trust it blindly. It also validated my workflow as a Design Engineer: figma-to-React in days, not weeks.",
          tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Leaflet", "Recharts", "react-dnd", "Vite"],
          prototypeLink: "https://treeaspen.github.io/code4city-hackthon/",
          aspenNote: "48 hours of hackathon, then two weeks of polish. If I built this again I'd start with the drag-and-drop board, not the prompt bar — letting humans correct the AI is the trustworthy half. The prompt is just the on-ramp.",
        }
      },
      {
        id: 10,
        title: "nD-RoPE",
        description: "ICML 2026 paper. A decomposition-free generalization of Rotary Position Embedding to arbitrary dimensions, with a multi-scale regular simplex wave-vector design for isotropic positional encoding.",
        categories: ["AI / ML", "Data Science"],
        image: imgNDRoPE,
        detail: {
          title: "nD-RoPE: A Generalized RoPE for n-Dimensional Position Embedding",
          subtitle: "ICML 2026 (Poster) — A unified theoretical formulation extending Rotary Position Embedding to high-dimensional Transformer inputs.",
          heroImage: imgNDRoPE,
          category: "AI / ML · Foundations",
          background: "Rotary Position Embedding (RoPE) is widely adopted in modern Transformers, yet its extension to high-dimensional domains — images, video, point clouds — has lacked a unified theoretical formulation. Most existing approaches either apply rotations independently along each axis or mix frequencies empirically. Both moves limit cross-dimensional interaction and yield direction-dependent representations.\n\nCo-authored with Boyang Li, Yulin Wu, Sizhe Xu, Nuoxian Huang, Zhonghang Yuan, Shangyi Guo, and Takahiro Yabe.",
          goal: "Derive a decomposition-free generalization of rotary embeddings to arbitrary dimensions — grounded in a translation-invariant formulation over continuous Hilbert space — so that positions and frequencies can be treated as coupled n-dimensional vectors rather than axis-decomposed scalars.",
          process: {
            description: "From a translation-invariant formulation in continuous Hilbert space, we derive a spectral condition for isotropy. We instantiate this principle with a multi-scale regular simplex wave-vector design that provides uniform directional coverage with maximal symmetry.",
            features: [
              { title: "Spectral Isotropy Condition", desc: "A formal condition derived from a translation-invariant Hilbert-space formulation: positions and frequencies must be treated as coupled n-dimensional vectors to preserve isotropy across all directions." },
              { title: "Regular Simplex Wave Vectors", desc: "A multi-scale wave-vector design based on the regular simplex — provides uniform directional coverage with maximal symmetry, eliminating axis bias inherent to decomposed schemes." },
              { title: "Cross-Modal Validation", desc: "Evaluated on images, videos, and point clouds — consistent performance gains over axis-decomposed and frequency-mixed baselines, with improved generalization in high-dimensional settings." },
            ],
          },
          accomplishments: [
            "Accepted as a Poster at ICML 2026 — the leading international venue for machine-learning research.",
            "Closed a long-standing theoretical gap in extending RoPE beyond 1D sequence modeling to arbitrary n-dimensional inputs.",
            "Demonstrated consistent gains across three modalities (images, videos, point clouds), validating both the theoretical isotropy claim and its practical generalization.",
          ],
          finalImage: imgNDRoPE2,
          finalImageCaption: "Supplementary figure illustrating multi-scale, privacy-aware trajectory diffusion / reconstruction — an adjacent application thread.",
          takeaway: "This work tightened my conviction that the most defensible deep-learning contributions come from grounding empirical tricks in principled mathematical structure. Treating position encoding as a coupled n-dimensional spectral object — rather than an axis-decomposed convenience — turned out to also yield the cleanest empirical wins.",
          tools: ["Position Embeddings", "Transformer Architecture", "Hilbert-Space Theory", "PyTorch", "Scientific Visualization"],
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
        description: "Top 1% hackathon project · An AI-driven sleep assistant blending FHIR + RAG with a calming, clinically-informed UX to help users build trust and better habits.",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage4,
        detail: {
          title: "SomniBot: AI-Powered Personalized Sleep Assistant",
          subtitle: "A one-month hackathon project that achieved a Top 1% result. My role: UI/UX & prototype design.",
          heroImage: imgImage4,
          category: "AI · HealthTech UX",
          background: "Sleep is essential, yet 30–40% of adults struggle with insomnia. Our user research surfaced a sharp gap: roughly 80% of respondents wanted a private, trustworthy sleep companion, yet generic search and AI chatbots failed them — fragile privacy, unreliable advice, no continuity. That framed our core design challenge: how do we create a clinically-informed, personalized experience that users feel safe confiding in?",
          goal: "To design and prototype an AI-powered sleep assistant that delivers personalized, clinically informed recommendations using FHIR and RAG — answering the user's joint need for privacy, trust, and progressive personalization.",
          process: {
            description: "A one-size-fits-all flow was never going to work for insomnia. Our strategy centered on \"progressive personalization\" — meeting users where they are, then deepening insight only as they invite it. I mapped the journey from initial uncertainty to actionable insight, then designed three pillar features to carry it:",
            features: [
              { title: "Quick Self-Assessment", desc: "Five well-paced questions deliver immediate value and a personal baseline — without overwhelming a user who is already tired." },
              { title: "Symptom Tracking Portal", desc: "Lightweight daily logging surfaces patterns over time, so insights feel earned rather than guessed at." },
              { title: "Common Causes Selection", desc: "A structured, visual selector replaces free-text input, simplifying a complex medical conversation into an accessible UI." },
            ],
          },
          architecture: {
            userFlow: [
              { step: 1, title: "Start & Home", desc: "User begins the session and chooses Quick Self-Assessment as their entry point.", iconKey: "home" },
              { step: 2, title: "Questionnaire", desc: "User answers a curated set of five sleep-habit questions, paced for low cognitive load.", iconKey: "tasks" },
              { step: 3, title: "Result Summary", desc: "The app surfaces an initial result summary alongside calming, actionable suggestions.", iconKey: "magic" },
              { step: 4, title: "User Choice", desc: "User branches into Symptom Tracking or Common Causes — depth on demand.", iconKey: "branch" },
              { step: 5, title: "End Session", desc: "User returns home or closes the session with concrete next steps in hand.", iconKey: "door" },
            ],
            hierarchy: [
              { level: "Level 1 — Main Functions", items: ["Self-Assessment", "Symptom Tracking", "Common Causes"] },
              { level: "Level 2 — Module Actions", items: ["Q&A flow", "Data input & history", "Explore causes"] },
              { level: "Level 3 — Micro Interactions", items: ["Button states", "'Suggest' interactions", "Dynamic prompts"] },
            ],
          },
          accomplishments: [
            "Implemented Retrieval-Augmented Generation (RAG) so responses cite reputable sources — directly rebuilding user trust in a domain saturated with misinformation.",
            "Wove complex FHIR clinical data into a calming chatbot interface that hides the schema and surfaces only what helps the user act.",
            "Designed a self-assessment and EHR-driven analysis system that reframes a clinical process as an accessible, conversational experience.",
          ],
          ideationImage: imgProject1_1,
          ideationImageCaption: "Early ideation sketch for the 'Common Causes' feature — anchored on a simple, visual selection process.",
          finalImage: imgProject1_2,
          finalImageCaption: "Final UI: a clean, intuitive, calming interface guiding users through their sleep analysis journey.",
          video: vidSomniDemo,
          takeaway: "This project reaffirmed the critical role of UX/UI in translating complex medical data into a simple, calming, and effective experience — one that earns trust before it asks for compliance. The most defensible design move was restraint: choosing not to expose every clinical signal, and instead trusting the user with what mattered next.",
          tools: ["Figma", "UI/UX Design", "Prototyping", "FHIR", "RAG", "HealthTech", "Sleep Science"],
          prototypeLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled?node-id=102-2097&p=f&t=4VbOnIe0dRlbZ5lF-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A2006&starting-point-node-id=102%3A2078.",
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
      },
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
      subtitle: "以数据为笔，以工程为意 — 纽约大学 CUSP '26",
      academicBio: "学术主页",
      github: "GitHub",
      linkedin: "领英",
      resume: "个人简历",
      portfolio: "作品集",
      gallery: "视觉画廊",
      currentlyLabel: "当下",
      currentlyItems: [
        "正在迭代 U.TOP Lab v2，与 7 人团队联合署名 ICML 论文",
        "为 VR Greenery × CUSP 毕业设计制作 AAG 大会可视化",
        "正在寻找 2026 设计 × 工程方向岗位",
      ],
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
      title: "专业能力",
      list: [
        {
          title: "设计造诣",
          description: "从用户研究驱动的 UX 到富有表现力的视觉系统——熟练驾驭 Figma 与 Adobe 全家桶，以动效原型将设计意图精准落地。",
        },
        {
          title: "工程实力",
          description: "前端 React + TypeScript 直至生产级交付，后端 Python 与现代数据栈一并掌握。从架构到部署，独立完成全栈实现。",
        },
        {
          title: "研究与策略",
          description: "混合方法用户研究、统计建模与因果推断——把行为转化为证据，把证据转化为产品决策。",
        },
      ]
    },
    timeline: {
      title: "履历",
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
      liveLink: "查看在线演示",
      aspenNote: "杨树私语"
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
          aspenNote: "这个项目让我确信「设计工程师」不是一个标签，而是一种工作流——从 Figma 到部署上线的 React，独立完成，前后 26 天。最难的决策不是技术上的，而是「不要加 CMS」——让运维成本归零。",
        }
      },
      {
        id: 9,
        title: "VR 城市绿地与压力研究",
        description: "🏆 2026 纽约大学 CUSP 最佳毕业设计奖。一项基于 VR 的对照实验，结合 EEG/EDA 生物传感与 AI 标准化绿视率，研究城市情境如何调节绿地的减压效应。",
        categories: ["Data Science", "AI / ML", "UI/UX"],
        image: imgVRGreenery1,
        detail: {
          title: "VR 城市绿地研究：城市情境对生理与心理压力响应的影响",
          subtitle: "一项基于 VR 与多模态生物传感的沉浸式实验 · 荣获 2026 NYU CUSP 最佳毕业设计奖。",
          heroImage: imgVRGreenery1,
          category: "毕业设计研究 (Capstone)",
          background: (
            <span>
              <a href="https://utoplab.net/#/news/vr-urban-stress-study" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                项目主页：utoplab.net/#/news/vr-urban-stress-study
              </a>
              <br /><br />
              🏆 <strong>荣获 2026 NYU CUSP 最佳毕业设计奖（Best Capstone Award）。</strong>研究成果同时入选 2026 美国地理学家协会年会（AAG），于 2026 年 3 月 17–21 日在旧金山进行了学术报告。
              <br /><br />
              合作者：Ruolin Wu、Isaiah Garnett · 导师：Anton Rozhkov、Zhaoxi Zhang、H. Shellae Versey · 资助：Prince Michael Amegbor。
              <br /><br />
              城市化进程加剧了居民的精神压力。已有研究证明绿地能带来心理恢复，但大多数研究仅关注绿地"数量"，或在城市/郊区之间做粗粒度比较。我们对"特定城市情境如何调节绿地的减压效应"知之甚少。
            </span>
          ) as any,
          goal: "通过 VR 模拟、生理传感与心理量表的多模态测量，系统研究城市绿地与周边空间情境如何共同影响压力恢复，为循证导向的城市设计提供量化证据。",
          process: {
            description: "我与团队共同主导了从文献综述到数据分析的完整流程，独立负责 AI 绿视率标准化、Meta Quest 3 刺激素材构建，以及 EEG / EDA / 问卷数据的统计分析。研究通过 AI 标准化绿视率，将「情境效应」从「绿地数量」中分离出来。",
            features: [
              { title: "AI 标准化绿视率 (GVI)", desc: "采用 SegFormer-b2 (ADE20K) 对 360° 原始素材进行场景解析与 GVI 量化，再使用 Google Veo 2.0 视频生成模型将四种场景（公园、滨水、居民区、道路）的绿视率统一到 24–34%，剥离绿地数量这一混淆变量。" },
              { title: "VR + 生物传感采集流程", desc: "Meta Quest 3 以随机顺序播放四段 360° 城市视频，Emotiv Insight EEG（FAA、Beta/Alpha、PM.Stress）与 Empatica E4 EDA（tonic SCL、phasic SCR）实时采集生理响应，配合 PANAS-X、感知真实度与 PREQI 心理量表。" },
              { title: "混合方法统计分析", desc: "对 EEG、EDA、问卷分别运行 RM-ANOVA；Cochran's Q 配对检验证实参与者无法可靠识别 AI 修改后的绿地（p > 0.05），从而验证了 AI 标准化方法的生态有效性。" },
            ],
          },
          accomplishments: [
            "🏆 荣获 2026 年纽约大学 CUSP 最佳毕业设计奖（Best Capstone Award）。",
            "成果入选 2026 美国地理学家协会年会（AAG, San Francisco）并完成现场学术报告。",
            "EEG 前额 α 不对称（FAA）出现显著情境效应（F(3,57)=3.35, p=0.0255*），公园与滨水场景诱发更积极的情绪响应。",
            "问卷 HighPositive / CalmPositive 情绪维度在不同情境间差异显著（p < 0.05）。",
            "招募 25 名被试，经传感器质量筛选后保留 21 份有效数据。",
          ],
          processImage: imgVRGreenery2,
          processImageCaption: "研究设计——从文献综述、刺激素材标准化，到生物传感采集与统计分析的完整流程。",
          takeaway: "绿地的恢复效应并非「一刀切」——它高度依赖于所在的城市情境。公园与滨水场景展现出最强的恢复潜力，而居民区与道路情境则削弱了绿地的减压效应。这个项目让我学会把 AI 当作「测量工具」而非「输出工具」——用 SegFormer + Veo 控制了传统田野研究无法控制的混淆变量。",
          tools: ["VR (Meta Quest 3)", "EEG (Emotiv Insight)", "EDA (Empatica E4)", "SegFormer-b2", "Google Veo 2.0", "PANAS-X", "Python", "RM-ANOVA"],
          prototypeLink: "https://utoplab.net/#/news/vr-urban-stress-study",
          aspenNote: "真正让我意外的不是 EEG 数据——而是被试根本分不清 AI 修改过的场景和原始 360° 视频（p=0.753）。一旦这个混淆变量被消除，整项研究才能真正诚实地谈「绿地」在城市里到底意味着什么。",
        }
      },
      {
        id: 8,
        title: "NYC 311 语义数据看板",
        description: "AI 驱动的纽约 311 投诉数据看板：自然语言提问即可生成 A–E 五大类语义分类，支持拖拽重组、热力地图与实时分析。",
        categories: ["UI/UX", "Data Science", "AI / ML", "GIS"],
        image: imgProject311_1,
        detail: {
          title: "NYC 311 卫生投诉语义看板：AI 驱动的智能分析平台",
          subtitle: "Code4City 黑客松 · 独立完成原型设计与全栈开发的自然语言驱动型 311 数据探索工具。",
          heroImage: imgProject311_1,
          category: "公共数据 UX",
          background: (
            <span>
              <a href="https://treeaspen.github.io/code4city-hackthon/" target="_blank" rel="noopener noreferrer" className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold">
                在线原型：treeaspen.github.io/code4city-hackthon
              </a>
              <br /><br />
              纽约 311 平台每年接收数百万条市民投诉，但原始投诉分类标签繁杂、重叠、对非技术人员极不友好。现有看板强迫分析师记忆晦涩的类别字符串和预设过滤器——没有任何工具能让人用自然语言提问"展示所有导致积水的垃圾与排水问题"。
            </span>
          ) as any,
          goal: "在 48 小时黑客松内设计并构建一个可用的原型：让市政相关方通过自然语言提问、语义化 A–E 分类、空间-时间过滤器自由探索 311 数据——无需编写任何 SQL。",
          process: {
            description: "我同时主导了 UI/UX 设计与全栈工程，并在赛后将原型迭代为稳定的演示版本。系统将 AI 提取器 与 拖拽式语义看板 结合，让用户实时纠偏模型的分类结果。",
            features: [
              { title: "AI 自然语言提取器", desc: "顶部 Prompt 栏解析用户意图，将投诉类型路由到 5 个语义桶（垃圾、下水道、积水、卫生、阻塞），全图表共享一致配色。" },
              { title: "拖拽式语义看板", desc: "用户可将子类别在 A–E 桶之间拖动、重命名列、或剔除噪声项，把看板变成「人在回路」式的实时标注工具。" },
              { title: "时空双维过滤器", desc: "Leaflet 热力地图、社区委员会选择器、日期范围滑块统一绑定共享数据集；右侧栏实时呈现月度趋势与桶占比分析。" },
            ],
          },
          accomplishments: [
            "在 Code4City 黑客松 48 小时内完整交付了可用原型。",
            "设计了 5 桶语义分类法，将 40+ 种原始 311 投诉类型归并为直观可读的语义组。",
            "构建了可复用的颜色/类别系统，使地图、图表与看板视觉完全一致。",
            "通过原始 CSV 迁移至预处理 JSON，体积压缩 90%+，可即开即用部署到 GitHub Pages。",
          ],
          processImage: imgProject311_2,
          processImageCaption: "纽约 311 平台 UX 现状研究——指引了「提问优先」的交互模型设计。",
          takeaway: "这个项目让我学会了为「语言思维」而非「模式思维」的市政用户设计。拖拽式语义看板成了整个 UX 的核心——让人去纠正 AI 远比让人盲目相信 AI 更可信。同时它也验证了我作为设计工程师的工作流：从 Figma 到 React 只需几天。",
          tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Leaflet", "Recharts", "react-dnd", "Vite"],
          prototypeLink: "https://treeaspen.github.io/code4city-hackthon/",
          aspenNote: "48 小时极客松，加之后两周打磨。如果重做，我会从拖拽板开始而不是 Prompt 栏——「让人去纠正 AI」才是可信的那一半，Prompt 只是入口。",
        }
      },
      {
        id: 10,
        title: "nD-RoPE",
        description: "ICML 2026 论文。一种无需分解的旋转位置编码（RoPE）n 维推广方案，采用多尺度正则单纯形波矢设计，实现各方向同性的位置编码。",
        categories: ["AI / ML", "Data Science"],
        image: imgNDRoPE,
        detail: {
          title: "nD-RoPE：面向 n 维位置编码的广义 RoPE",
          subtitle: "ICML 2026（Poster）—— 将旋转位置编码（RoPE）系统性地推广到高维 Transformer 输入的统一理论框架。",
          heroImage: imgNDRoPE,
          category: "AI / ML · 理论基础",
          background: "旋转位置编码（RoPE）已在现代 Transformer 中被广泛采用，但其在高维场景——图像、视频、点云——的推广长期缺乏统一的理论形式。现有方法要么沿各轴独立旋转，要么经验性地混合频率，二者都限制了跨维度交互，并导致方向相关的表征。\n\n合作者：Boyang Li、Yulin Wu、Sizhe Xu、Nuoxian Huang、Zhonghang Yuan、Shangyi Guo、Takahiro Yabe。",
          goal: "从连续 Hilbert 空间中的平移不变形式出发，推导出一种无需轴向分解、面向任意维度的广义旋转位置编码——将位置与频率视为耦合的 n 维向量，而非分别处理的标量。",
          process: {
            description: "我们从连续 Hilbert 空间中的平移不变形式出发，推导出实现各向同性所需的频谱条件，并以多尺度正则单纯形波矢设计将其落地——以最大对称性实现方向上的均匀覆盖。",
            features: [
              { title: "频谱各向同性条件", desc: "源自平移不变 Hilbert 空间表述的严格条件：位置与频率必须被视为耦合的 n 维向量，才能在所有方向上保持各向同性。" },
              { title: "正则单纯形波矢", desc: "基于正则单纯形的多尺度波矢设计，以最大对称性提供均匀的方向覆盖，消除了「分轴分解」方案固有的轴向偏置。" },
              { title: "跨模态实验验证", desc: "在图像、视频、点云三类模态上进行评估——相比「分轴分解」与「频率混合」基线均取得稳定提升，并在高维场景下展现出更好的泛化能力。" },
            ],
          },
          accomplishments: [
            "被 ICML 2026 接收为 Poster——机器学习领域顶级国际会议。",
            "弥合了 RoPE 从 1D 序列建模推广到任意 n 维输入的长期理论空白。",
            "在三种模态（图像、视频、点云）上均取得一致性能提升，同时验证了理论上的各向同性主张与实际泛化能力。",
          ],
          finalImage: imgNDRoPE2,
          finalImageCaption: "补充示意图——多尺度、隐私感知的轨迹扩散与重建，作为相邻应用方向的延伸示例。",
          takeaway: "这项工作让我更确信：深度学习中最具防御性的贡献，往往来自把经验技巧建立在严谨的数学结构之上。把位置编码视为耦合的 n 维频谱对象，而非分轴分解的便利工具——既理论自洽，也带来了最干净的实证收益。",
          tools: ["位置编码", "Transformer 架构", "Hilbert 空间理论", "PyTorch", "科学可视化"],
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
        description: "Top 1% 极客松获奖项目 · 融合 FHIR + RAG 的 AI 睡眠助手，以舒缓、临床可信的体验帮助用户建立信任与睡眠习惯。",
        categories: ["AI / ML", "UI/UX"],
        image: imgImage4,
        detail: {
          title: "SomniBot：AI 个性化睡眠守护者",
          subtitle: "为期一个月的极客松项目，最终位列全球前 1%。我负责 UI/UX 与原型设计。",
          heroImage: imgImage4,
          category: "AI · 医疗科技 UX",
          background: "睡眠至关重要，但 30–40% 的成年人受失眠困扰。我们的前期用户调研揭示了一个鲜明的市场空白：约 80% 的受访者渴望一位「私密、可信任的睡眠伙伴」，而通用搜索引擎与现有 AI 聊天机器人由于隐私漏洞与信息可靠性不足，无法承担这一角色。这定义了我们的核心设计挑战——如何打造一个「具有临床可信度、可承载个性化、用户愿意倾诉」的体验？",
          goal: "设计并打造 AI 驱动的睡眠助手原型，基于 FHIR 与 RAG 提供具备临床依据的个性化建议，同时回应用户对「隐私、信任、渐进式个性化」的复合需求。",
          process: {
            description: "对于失眠这种复杂问题，「一套流程走到底」注定失败。我们的策略围绕「渐进式个性化」展开——先在用户感到舒适的层级介入，再随用户的主动深入逐步揭示洞察。我梳理了从「初始迷茫」到「可操作建议」的完整旅程，并设计了三个支柱功能来承接它：",
            features: [
              { title: "快速自测问卷", desc: "5 道节奏舒缓的问题，立即提供个性化基线——对一个本就疲惫的用户不再额外加压。" },
              { title: "症状追踪门户", desc: "轻量化的每日记录帮助用户察觉长期规律，让洞察「是赚来的」，而非「猜出来的」。" },
              { title: "常见诱因选择器", desc: "结构化的视觉选择器替代自由文本，将复杂的医学对话简化为可访问的 UI。" },
            ],
          },
          architecture: {
            userFlow: [
              { step: 1, title: "起始与首页", desc: "用户进入应用，并选择「快速自测」作为入口路径。", iconKey: "home" },
              { step: 2, title: "问卷调查", desc: "用户依次回答 5 道精心设计的睡眠习惯问题，节奏低认知负担。", iconKey: "tasks" },
              { step: 3, title: "结果摘要", desc: "应用呈现初步分析结果与舒缓、可操作的建议。", iconKey: "magic" },
              { step: 4, title: "路径分叉", desc: "用户可继续深入「症状追踪」或探索「常见诱因」——深度按需而来。", iconKey: "branch" },
              { step: 5, title: "结束会话", desc: "用户回到主页或带着具体的下一步行动结束会话。", iconKey: "door" },
            ],
            hierarchy: [
              { level: "层级 1 —— 主要功能", items: ["快速自测", "症状追踪", "常见诱因"] },
              { level: "层级 2 —— 模块行为", items: ["问答流程", "数据录入与历史", "诱因探索"] },
              { level: "层级 3 —— 微观交互", items: ["按钮状态", "「建议」式交互", "动态提示"] },
            ],
          },
          accomplishments: [
            "采用 RAG（检索增强生成）让模型回复可引用可信来源——在信息真伪难辨的领域，这是直接重建用户信任的关键一击。",
            "将复杂的 FHIR 临床数据无缝织入一个舒缓的聊天界面，隐藏数据结构，只把用户能用上的内容浮出水面。",
            "设计了一个自测 + EHR 智能分析系统，把一段临床过程重塑为「可访问、可对话」的体验。",
          ],
          ideationImage: imgProject1_1,
          ideationImageCaption: "「常见诱因」功能的早期构思草图——围绕一个「简洁、视觉化」的选择流程展开。",
          finalImage: imgProject1_2,
          finalImageCaption: "最终 UI：以简洁、直觉、舒缓的视觉语言引导用户走完整段睡眠分析旅程。",
          video: vidSomniDemo,
          takeaway: "这个项目让我再次确认 UX/UI 在医疗科技里的关键角色——把复杂的临床数据翻译为简洁、舒缓、有效的体验，先赢得用户的信任，再谈「用户配合」。最具防御性的设计决策是「克制」：不暴露每一个临床信号，而把判断权交还给用户去走出下一步。",
          tools: ["Figma", "UI/UX 设计", "原型开发", "FHIR", "RAG", "医疗科技", "睡眠科学"],
          prototypeLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled?node-id=102-2097&p=f&t=4VbOnIe0dRlbZ5lF-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A2006&starting-point-node-id=102%3A2078.",
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
      },
    ]
  }
};