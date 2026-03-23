import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// 🌟 导入资产
import imgImage10 from '../../assets/news-cover.png';
import imgNews1_2 from '../../assets/News1-2.png'; 
import imgImage4 from '../../assets/image4.png';
import imgProject1_1 from '../../assets/project1-1.png';
import imgProject1_2 from '../../assets/project1_2.png';
import imgPaper1 from '../../assets/paper1.png';
import imgPaper2 from '../../assets/paper2.png';
import imgPaper3 from '../../assets/paper3.png';

import { Modal } from "./Modal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetailView, type ProjectDetail } from "./ProjectDetailView";

interface NewsSectionProps {
  darkMode: boolean;
}

const newsItems = [
  {
    id: 0,
    title: "U.TOP Lab Official Website",
    liveLink: "https://utoplab.net/", 
    description: "A full-stack, end-to-end design and development of the U.TOP research lab website, featuring a cyberpunk aesthetic, immersive interactions, and modular data architecture.",
    // 🌟 将第一个 news 的外层头图改回 news-cover.png
    image: imgImage10, 
    detail: {
      title: "U.TOP Lab Website",
      subtitle: "Solely led the end-to-end process from conceptual UI/UX design to modern frontend engineering and deployment.",
      heroImage: imgImage10, 
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
    title: "SomniBot: Personalized Sleep AI",
    liveLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled", 
    description: "A Top 1% hackathon project delivering personalized, clinically informed sleep recommendations using FHIR and RAG.",
    image: imgImage4,
    detail: {
      title: "SomniBot: AI-Powered Personalized Sleep Assistant",
      subtitle: "A one-month hackathon project that achieved a Top 1% result. My role was UI/UX and prototype design.",
      heroImage: imgImage4,
      category: "UI/UX & AI Product",
      background: "Sleep is essential, yet 30-40% of adults struggle with insomnia. Our initial research revealed a significant gap in the market: 80% of users desired a private, trustworthy sleep companion. Existing solutions like generic searches or AI chatbots failed to build this trust due to privacy issues and unreliable information. This defined our core design challenge: How can we create a clinically-informed, personalized experience that users feel safe confiding in?",
      goal: "To design and prototype an AI-powered sleep assistant that delivers personalized, clinically informed recommendations using FHIR and RAG, addressing the user's need for privacy, trustworthiness, and personalization.",
      process: {
        description: "Recognizing that a 'one-size-fits-all' solution would fail for a complex issue like insomnia, our design strategy centered on 'progressive personalization.' We mapped a user journey from initial uncertainty to actionable insights. My design process focused on three core features:",
        features: [
          { title: "Quick Self-Assessment", desc: "To provide immediate value and establish a baseline without overwhelming the user." },
          { title: "Symptom Tracking Portal", desc: "To empower users to see patterns in their habits for more accurate insights." },
          { title: "Common Causes Selection", desc: "To simplify a complex input process through a structured, visual interface." },
        ],
      },
      userFlow: [
        { step: "Step 1: Start & Home", desc: "User begins their journey and selects 'Quick Self-Assessment'." },
        { step: "Step 2: Questionnaire", desc: "User answers a series of 5 questions about their sleep habits." },
        { step: "Step 3: Result Summary", desc: "The app shows an initial result summary and actionable suggestions." },
        { step: "Step 4: User Choice", desc: "User can choose to track symptoms or explore common causes visually." },
        { step: "Step 5: End Session", desc: "User returns to home or ends their session with actionable, clinically-backed insights." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Main Functions", items: ["Self-Assessment", "Symptom Tracking", "Common Causes"] },
        { level: "Level 2 — Module Actions", items: ["Q&A flow", "Data input & history", "Explore causes"] },
        { level: "Level 3 — Micro Interactions", items: ["Button states", "Suggest interactions", "Dynamic prompts"] },
      ],
      accomplishments: [
        "Successfully integrating complex FHIR data into a user-friendly, calming chatbot interface that I designed.",
        "Implementing RAG to improve response accuracy, which directly builds user trust in our product.",
        "Designing an intuitive self-assessment and EHR-driven analysis system that simplifies a complex medical process into an accessible experience.",
        "Achieved Top 1% ranking in the hackathon out of numerous competing projects."
      ],
      processImage: imgProject1_1,
      processImageCaption: "Early ideation sketch for the 'Common Causes' feature, focusing on a simple, visual selection process.",
      resultImage: imgProject1_2,
      resultImageCaption: "The final UI focused on a clean, intuitive, and calming interface to guide users through their sleep analysis journey.",
      takeaway: "From a design perspective, this project reinforced the critical role of UX/UI in translating complex medical data into a simple, calming, and effective user experience that guides users toward better sleep habits.",
      tools: ["Figma", "UI/UX Design", "FHIR", "RAG Pipeline", "Prototyping"],
      prototypeLink: "https://www.figma.com/proto/rqvhuZzsZ8DjRvbcVhdsw4/Untitled?node-id=102-2097&p=f&t=4VbOnIe0dRlbZ5lF-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A2006&starting-point-node-id=102%3A2078",
    } as ProjectDetail,
  },
  {
    id: 2,
    title: "NeurIPS 2025 Spotlight",
    liveLink: "https://arxiv.org/abs/2510.19980",
    description: "Abstain Mask Retain Core: Time Series Prediction by Adaptive Masking Loss. Highlighted in Top 3% of accepted papers.",
    image: imgPaper1,
    detail: {
      title: "Abstain Mask Retain Core: Time Series Prediction by Adaptive Masking Loss",
      subtitle: "NeurIPS 2025 Spotlight Presentation. My role involved Scientific Visualization and Empirical Validation.",
      heroImage: imgPaper1,
      category: "Machine Learning & Visualization",
      background: (
        <span>
          <a 
            href="https://arxiv.org/abs/2510.19980" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E2F16B] underline underline-offset-4 hover:text-[#FF7A00] transition-colors font-mono font-bold"
          >
            Read Full Paper: arXiv:2510.19980
          </a>
          <br /><br />
          Time series forecasting plays a pivotal role in critical domains such as energy management and financial markets. Although deep learning-based approaches (e.g., MLP, RNN, Transformer) have achieved remarkable progress, the prevailing 'long-sequence information gain hypothesis' exhibits inherent limitations. Through systematic experimentation, this study reveals a counterintuitive phenomenon: appropriately truncating historical data can paradoxically enhance prediction accuracy.
        </span>
      ) as any,
      goal: "To propose an innovative solution termed Adaptive Masking Loss with Representation Consistency (AMRC) to suppress redundant feature learning and stabilize the mapping relationships among inputs, labels, and predictions.",
      process: {
        description: "Building upon information bottleneck theory, our team developed the AMRC framework. As the primary contributor for Scientific Visualization and Empirical Validation, my focus was on proving the model's robustness and illustrating complex spatial manifolds.",
        features: [
          { title: "Dynamic Masking Loss", desc: "Adaptively identifies highly discriminative temporal segments to guide gradient descent during model training." },
          { title: "Representation Consistency", desc: "Stabilizes the mapping relationships among inputs, labels, and predictions to prevent representation collapse." },
          { title: "Interpretability Framework", desc: "Designed visualization pipelines to translate high-dimensional manifold geometry into understandable visual proofs." },
        ],
      },
      accomplishments: [
        "Designed an interpretability framework to visualize high-dimensional manifold geometry.",
        "Illustrated the Stochastic Approximation process to verify the effectiveness of the Embedding Similarity Penalty.",
        "Conducted rigorous ablation studies across diverse datasets to prove the robustness of the model.",
        "The paper was selected for a Spotlight Presentation at NeurIPS 2025 (Top 3% of accepted papers)."
      ],
      processImage: imgPaper2,
      processImageCaption: "Figure 1: Methodology Framework. Illustrating the core architecture of the Adaptive Masking Loss mechanism.",
      resultImage: imgPaper3,
      resultImageCaption: "Figure 2: Manifold Geometry & Representation Analysis. Verifying that the Embedding Similarity Penalty prevents representation collapse.",
      takeaway: "Experimental results demonstrate that AMRC effectively suppresses redundant feature learning while significantly improving model performance. This work not only challenges conventional assumptions in temporal modeling but also provides novel theoretical insights and methodological breakthroughs for developing efficient forecasting models.",
      tools: ["Python", "PyTorch", "Scientific Visualization", "Data Analysis", "Machine Learning"],
      prototypeLink: "https://arxiv.org/abs/2510.19980",
    } as ProjectDetail,
  },
];

export function NewsSection({ darkMode }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="news"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#fcf896" : "#f5f0ff",
      }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-['Jaro',sans-serif] text-7xl md:text-8xl mb-12 text-center transition-colors duration-500"
        style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
      >
        Projects & News
      </motion.h2>

      {/* 🌟 修改：移除高度限制，允许内部流式布局自适应图片原始比例 */}
      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-[40px] overflow-hidden shadow-2xl transition-colors duration-500 w-full border border-white/10"
            style={{ backgroundColor: darkMode ? "#4b2e7d" : "#503282" }}
          >
            {/* 这里的容器采用标准的流式布局 */}
            <div className="flex flex-col">
              
              {/* 🌟 核心视觉区：完全自适应原始比例 */}
              <div 
                className="relative w-full bg-[#050505] flex justify-center items-center overflow-hidden group cursor-pointer" 
                onClick={() => setSelectedNews(newsItems[currentIndex])}
              >
                <ImageWithFallback
                  src={newsItems[currentIndex].image}
                  alt={newsItems[currentIndex].title}
                  // w-full + h-auto 完美适配图片原生比例，max-h 防止竖图过长
                  className="w-full h-auto max-h-[450px] md:max-h-[550px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              {/* 文本内容区 */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-['Jaro',sans-serif] text-4xl md:text-5xl mb-4"
                    style={{ color: "#fcf896" }}
                  >
                    {newsItems[currentIndex].title}
                  </h3>
                  
                  {newsItems[currentIndex].liveLink && (
                    <a 
                      href={newsItems[currentIndex].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-3 font-mono text-[16px] md:text-[18px] text-[#fcf896] hover:text-white underline underline-offset-4 transition-colors"
                      onClick={(e) => e.stopPropagation()} 
                    >
                      Visit Link
                    </a>
                  )}

                  <p
                    className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed max-w-3xl"
                    style={{ color: "rgba(252, 248, 150, 0.9)" }}
                  >
                    {newsItems[currentIndex].description}
                  </p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex gap-4">
                    {newsItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(i);
                        }}
                        className="w-4 h-4 rounded-full border-2 transition-all cursor-pointer hover:scale-125"
                        style={{
                          borderColor: "#fcf896",
                          backgroundColor: i === currentIndex ? "#fcf896" : "transparent",
                          opacity: i === currentIndex ? 1 : 0.5
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedNews(newsItems[currentIndex])}
                    className="font-['Jaro',sans-serif] text-xl md:text-2xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
                    style={{ color: "#fcf896" }}
                  >
                    View More 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >{"\u2192"}</motion.span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-16 hidden md:block"
      >
        <svg width="74" height="74" viewBox="0 0 97.4829 97.4829" fill="none">
          <path
            d="M48.7415 0L58.7146 26.9521L85.6668 36.9253L58.7146 46.8985L48.7415 73.8507L38.7683 46.8985L11.8161 36.9253L38.7683 26.9521L48.7415 0Z"
            fill={darkMode ? "#765CA0" : "#c4a8e8"}
          />
        </svg>
      </motion.div>

      <Modal
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        title={selectedNews?.title || ""}
        darkMode={darkMode}
      >
        {selectedNews && (
          <ProjectDetailView
            project={selectedNews.detail}
            darkMode={darkMode}
            onBack={() => setSelectedNews(null)}
          />
        )}
      </Modal>
    </section>
  );
}