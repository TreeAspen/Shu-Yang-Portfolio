import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Modal } from "./Modal";
import { ProjectDetailView, type ProjectDetail } from "./ProjectDetailView";

// 🌟 导入所有的项目图片资源
import imgNewsCover from '../../assets/news-cover.png';
import imgNews1_2 from '../../assets/News1-2.png'; 
import imgPaper1 from '../../assets/paper1.png';
import imgImage4 from '../../assets/image4.png';
import imgImage2 from '../../assets/image2.png';
import imgProject2_1 from '../../assets/project2-1.png'; 
import imgProject3_1 from '../../assets/project3-1.png';
import imgProject3_2 from '../../assets/project3-2.png'; 
import imgProject3_3 from '../../assets/project3-3.png'; 
import imgImage5 from '../../assets/image5.png';
import imgImage1 from '../../assets/image1.png';
import imgImage3 from '../../assets/image3.png';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const projects = [
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
          <a 
            href="https://utoplab.net/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold"
          >
            Live Website: https://utoplab.net/
          </a>
          <br /><br />
          The U.TOP Lab, a cutting-edge research group focusing on Urban Intelligence, Sensing, and Human-Computer-Environment Interaction, needed a digital presence that breaks away from traditional, monotonous academic templates. They required a platform that not only showcases their interdisciplinary research but also visually communicates their 'geek' identity—a blend of urban science, spatial computing, and artificial intelligence.
        </span>
      ) as any,
      goal: "To architect and build a high-performance, visually striking static website from scratch. The goal was to establish a unique 'cyberpunk/terminal' visual identity while ensuring robust code maintainability, responsive mobile experiences, and seamless interactive data visualizations.",
      process: {
        description: "Operating as a hybrid Design Engineer, I executed a unified workflow that bridged aesthetic exploration and rigorous technical implementation. The project was structured around three core engineering and design pillars:",
        features: [
          { title: "Cyberpunk & Terminal Aesthetics", desc: "Developed a distinct design system utilizing high-contrast palettes (Deep Black, Neon Orange, Acid Yellow), pixel-art typography (VT323), and monospace fonts to simulate a retro-futuristic command terminal." },
          { title: "Modern Frontend Stack", desc: "Built with React, TypeScript, and Tailwind CSS. Implemented complex, fluid page transitions, scroll-triggered animations, and rolling numbers using Framer Motion to create an immersive narrative flow." },
          { title: "Algorithmic Data De-duplication", desc: "Engineered a scalable, JSON/TS-based modular data architecture. Implemented intelligent Set-based algorithms to automatically extract, merge, and de-duplicate nested publication and conference data across multiple team members." },
        ],
      },
      userFlow: [
        { step: "Step 1: Immersive Landing", desc: "Users are greeted by an inverted-color hero section with dynamic hover effects, immediately establishing the lab's avant-garde identity." },
        { step: "Step 2: Interactive Research Flow", desc: "Users explore a responsive, HTML-embedded SVG workflow (Urban Sensor Interactive Module) that explains complex methodologies through interactive visual nodes." },
        { step: "Step 3: Dynamic Team Roster", desc: "Visitors can browse team profiles featuring glowing UI elements, custom 'terminal-style' category tags, and distinct CTAs for personal portfolios." },
        { step: "Step 4: Smart Highlights", desc: "The platform dynamically renders cross-linked publications and active projects, preventing data redundancy while showcasing the lab's academic output." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Brand Identity", items: ["Custom Retro-SciFi UI", "Framer Motion Animations", "Responsive Grid Layouts"] },
        { level: "Level 2 — Engineering Architecture", items: ["React + Vite SPA", "TypeScript Strict Typing", "Tailwind Utility Classes"] },
        { level: "Level 3 — Data Management", items: ["Centralized TS Data Models", "Algorithmic Stat Counters", "Automated GitHub Pages Deployment"] },
      ],
      accomplishments: [
        "Single-handedly delivered the entire project in under one month, saving the lab thousands of dollars in external agency fees.",
        "Achieved a 0-maintenance cost infrastructure by utilizing Vite static builds deployed via GitHub Pages.",
        "Created an inherently scalable codebase where researchers can update their profiles or add new publications merely by editing a localized JSON/TS file.",
        "Designed an interactive HTML iframe module that scales flawlessly across mobile screens without horizontal overflow.",
      ],
      processImage: imgNews1_2,
      processImageCaption: "Figma UI/UX design drafts showcasing the evolution of the cyberpunk and terminal-inspired components.",
      takeaway: "This project validated my capability to operate as a full-stack Creative Technologist. Moving beyond Figma mockups, I learned how to translate unconventional design concepts directly into production-ready React code. The biggest takeaway was understanding how rigorous TypeScript data structures and algorithms (like Set-based de-duplication) can dramatically simplify UI state management.",
      tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      prototypeLink: "https://utoplab.net/",
    } as ProjectDetail,
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
      background: "Time series forecasting plays a pivotal role in critical domains such as energy management and financial markets. Although deep learning-based approaches have achieved remarkable progress, the prevailing 'long-sequence information gain hypothesis' exhibits inherent limitations. Through systematic experimentation, this study reveals a counterintuitive phenomenon: appropriately truncating historical data can paradoxically enhance prediction accuracy.",
      goal: "To propose an innovative solution termed Adaptive Masking Loss with Representation Consistency (AMRC), which features Dynamic Masking Loss and Representation Consistency Constraint.",
      takeaway: "Designed an interpretability framework to visualize manifold geometry and Stochastic Approximation, verifying how the Embedding Similarity Penalty prevents representation collapse. Conducted rigorous ablation studies across diverse datasets to validate the robustness of Adaptive Masking Loss.",
      tools: ["Scientific Visualization", "Machine Learning", "PyTorch", "Python"],
      prototypeLink: "https://arxiv.org/abs/2510.19980",
    } as ProjectDetail,
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
      background: "Sleep is essential, yet 30-40% of adults struggle with insomnia. Existing solutions like generic searches or AI chatbots failed to build trust due to privacy issues and unreliable information.",
      goal: "To design and prototype an AI-powered sleep assistant that delivers personalized, clinically informed recommendations using FHIR and RAG, addressing the user's need for privacy, trustworthiness, and personalization.",
      takeaway: "An AI-driven sleep assistant providing personalized, science-backed guidance using FHIR and RAG. It features a self-assessment quiz and intelligent analysis based on EHR data to improve sleep quality while ensuring privacy.",
      tools: ["AI", "HealthTech", "Sleep Science", "FHIR", "RAG", "Figma"],
      prototypeLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled?node-id=102-2097&p=f&t=4VbOnIe0dRlbZ5lF-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A2006&starting-point-node-id=102%3A2078"
    } as ProjectDetail,
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
      background: "Community Land Trusts (CLTs) often lack immediate access to complex legal information and resources needed to support their communities efficiently.",
      goal: "To design a clear and accessible interface for exploring Community Land Trust (CLT) laws across U.S. states, combining structured data tables with conversational search.",
      process: {
        description: "The design focused on presenting dense legal data in an intuitive format while balancing a data-driven table view with natural-language chatbot interaction.",
        features: [
          { title: "Dense Data Simplification", desc: "Presenting dense legal data in an intuitive, easily digestible format." },
          { title: "Conversational Search", desc: "Balancing a data-driven table view with natural-language chatbot interaction." },
          { title: "Visual Hierarchy", desc: "Maintaining visual hierarchy and readability across multiple dense informational modules." }
        ]
      },
      accomplishments: [
        "Won 1st Place in the hackathon competition.",
        "Delivered a responsive Table View paired with a contextual chatbot.",
        "Created a searchable state selector that simplifies navigation through complex housing legislation."
      ],
      processImage: imgProject2_1,
      processImageCaption: "Responsive Table View and State Selector Interface from the prototype.",
      takeaway: "The project resulted in a modular system including a responsive Table View, a contextual chatbot, and a searchable state selector that simplifies navigation through complex housing legislation.",
      tools: ["Figma", "UI/UX Design", "Prototyping", "LegalTech"],
      prototypeLink: "https://www.figma.com/proto/PHTbG7lzxQpsGFRIoHWmli/Challenge?node-id=120-1222&p=f&t=GHCZUEhet65Om7He-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=99%3A703",
    } as ProjectDetail,
  },
  {
    id: 4,
    title: "GPT IELTS Assistant",
    description: "Combining AI and English writing to help students study, conceptualize, write, and score their essays.",
    categories: ["UI/UX", "AI / ML"],
    image: imgProject3_1,
    detail: {
      title: "GPT-Powered IELTS Writing Assistant",
      subtitle: "A UI/UX design project for an AI-assisted learning platform. UI Cooperator: Shuai Cui.",
      heroImage: imgProject3_1,
      category: "EdTech UX",
      background: (
        <span>
          <a 
            href="https://ielts.dauyan.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold"
          >
            Live Platform: ielts.dauyan.com
          </a>
          <br /><br />
          The IELTS exam is a critical gateway for students, yet many struggle with the writing section. Our user analysis of self-studying students in Beijing revealed significant challenges: a staggering 77% lack motivation, and 43% have no structured study plan. They often feel anxious, are unfamiliar with grading criteria, and have difficulty generating ideas. This pointed to a clear need for a tool that not only provides writing practice but also offers structured guidance, personalized feedback, and motivational support.
        </span>
      ) as any,
      goal: "To design a clear, accessible, and motivating interface that leverages GPT to help students practice IELTS writing. The platform aims to assist with idea generation, provide structured feedback based on official criteria, and build user confidence through a guided learning journey.",
      process: {
        description: "Our design strategy focused on transforming the solitary, often frustrating, process of self-study into an interactive and supportive experience. We designed a user flow that mirrors a student's natural workflow while integrating AI assistance at each critical step. The key functionalities I designed include:",
        features: [
          { title: "Idea & Outline Generation", desc: "Directly tackles the user's primary pain point of generating ideas by providing AI-powered suggestions and structured outlines." },
          { title: "AI-Assisted Writing", desc: "Offers real-time assistance like translation and sentence continuation to overcome writer's block and improve composition flow." },
          { title: "Multi-Dimensional Scoring", desc: "Provides instant feedback based on the four official IELTS dimensions, helping users understand their weaknesses." },
          { title: "Mock Test Simulation", desc: "Simulates both computer and paper-based test environments to reduce exam-day anxiety and build familiarity." }
        ],
      },
      processImage: imgProject3_2,
      processImageCaption: "User Journey Map detailing the student's emotional and task-based progression.",
      resultImage: imgProject3_3,
      resultImageCaption: "Outcome UI detail: Contextual AI tools and a clear feedback dashboard.",
      takeaway: "The result is a cohesive and intuitive platform available live. My design work, in collaboration with Shuai Cui, successfully translated complex AI functionalities into a simple, user-friendly interface. The modular system, which includes a responsive writing area, contextual AI tools, and a clear feedback dashboard, simplifies the complex process of preparing for the IELTS writing test.",
      tools: ["UI/UX Design", "Figma", "User Research", "Journey Mapping"],
      prototypeLink: "https://ielts.dauyan.com/",
    } as ProjectDetail,
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
      background: "Healthcare accessibility is often unevenly distributed in major metropolitan areas like Houston, impacting the well-being of vulnerable populations.",
      goal: "To use GIS network analysis to examine healthcare accessibility, analyzing road networks and travel times to reveal disparities in resource distribution.",
      takeaway: "This study uses GIS network analysis to examine healthcare accessibility in Houston. By analyzing road networks and travel times, it reveals disparities in resource distribution and its impact on residents.",
      tools: ["GIS", "Urban Science", "Healthcare", "Data Analysis"],
      prototypeLink: "https://arcg.is/1PnjPu0",
    } as ProjectDetail,
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
      background: "Florida faces significant economic and structural threats from flooding, requiring precise models to predict vulnerability and financial impact.",
      goal: "To model vulnerability and economic impact by integrating physical, demographic, and socioeconomic data into a predictive framework.",
      takeaway: "This project uses GIS and machine learning to predict flood risk and economic losses in Florida. It models vulnerability and economic impact by integrating physical, demographic, and socioeconomic data.",
      tools: ["GIS", "Machine Learning", "Climate Risk", "Economic Modeling"],
      prototypeLink: "https://arcg.is/1nrHCf1",
    } as ProjectDetail,
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
      background: "Exploring the intersection of human interaction and computer vision through digital art.",
      goal: "To build a real-time interactive artwork that translates facial tracking data into a dynamic mosaic experience.",
      takeaway: "An interactive artwork using ml5.js FaceMesh to create dynamic mosaic portraits from live video. It features eye-triggered regeneration and demonstrates creative coding with computer vision.",
      tools: ["Creative Coding", "Generative Art", "Computer Vision", "ml5.js", "JavaScript"],
      prototypeLink: "https://shuyang-dm-gy-6063-2024fall-b.github.io/HW09/HW09B/",
    } as ProjectDetail,
  },
];

const categories = ["All", "AI / ML", "UI/UX", "GIS", "Data Science"];

export function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#503282" : "#ede4f7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <h2
            className="font-['Jaro',sans-serif] text-7xl md:text-8xl m-0 transition-colors duration-500"
            style={{ color: darkMode ? "#fffa74" : "#503282" }}
          >
            Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex gap-3 flex-wrap bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-['Jaro',sans-serif] px-6 py-2 rounded-full border-2 text-base md:text-lg transition-all cursor-pointer relative overflow-hidden group"
                style={{
                  borderColor:
                    activeCategory === cat
                      ? "#fffa74"
                      : "transparent",
                  backgroundColor:
                    activeCategory === cat
                      ? "rgba(255, 250, 116, 0.2)"
                      : "transparent",
                  color:
                    activeCategory === cat
                      ? darkMode
                        ? "#fcf896"
                        : "#503282"
                      : darkMode
                      ? "#d1e6fa"
                      : "#7a5cb0",
                }}
              >
                {cat}
                {activeCategory !== cat && (
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="rounded-[32px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col cursor-pointer border border-white/10 backdrop-blur-sm"
                style={{
                  backgroundColor: darkMode ? "rgba(252, 248, 150, 0.95)" : "rgba(255, 255, 255, 0.9)",
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden group bg-[#050505]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ width: "100%", borderRadius: "32px 32px 0 0" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* 右上角类别标签 */}
                  <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 max-w-[85%]">
                    {project.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="font-['Jaro',sans-serif] text-xs px-3 py-1 rounded-full border shadow-lg backdrop-blur-md"
                        style={{
                          backgroundColor: "rgba(80, 50, 130, 0.9)",
                          borderColor: "#94c4f5",
                          color: "#94c4f5",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-['Jaro',sans-serif] text-3xl mb-3"
                      style={{ color: darkMode ? "#1a1a2e" : "#503282" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-base mb-4 opacity-75 font-medium leading-relaxed line-clamp-3"
                      style={{ color: darkMode ? "#1a1a2e" : "#333" }}
                    >
                      {project.description}
                    </p>

                    {/* 🌟 新增：工具 / 技术栈 Tags 区域 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.detail.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="font-['Outfit',sans-serif] text-[11px] px-2.5 py-1 rounded-md border font-medium transition-colors"
                          style={{
                            backgroundColor: darkMode ? "rgba(80, 50, 130, 0.08)" : "rgba(80, 50, 130, 0.05)",
                            borderColor: darkMode ? "rgba(80, 50, 130, 0.2)" : "rgba(80, 50, 130, 0.15)",
                            color: "#503282",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="font-['Jaro',sans-serif] text-xl hover:opacity-80 transition-opacity flex items-center gap-2 mt-auto"
                    style={{ color: darkMode ? "#503282" : "#503282" }}
                  >
                    View Details 
                    <motion.span
                      whileHover={{ x: 5 }}
                    >{"\u2192"}</motion.span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Modal for View More - Full Detail Page */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        darkMode={darkMode}
      >
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject.detail}
            darkMode={darkMode}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </Modal>
    </section>
  );
}