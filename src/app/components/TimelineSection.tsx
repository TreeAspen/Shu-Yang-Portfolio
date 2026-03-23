import { motion } from "motion/react";
import imgImage13 from "../../assets/timeline-img.png";

interface TimelineSectionProps {
  darkMode: boolean;
}

// 经历全面解构：
// type: 领域标签 - 右侧仅分 Internship / Academic
// title: 机构/学校名称
// subtitle: 具体岗位/专业 + 地点
// description: 最高级别 Action-driven 润色，极度精简
const timelineEvents = [
  {
    year: "2026.02 - Present",
    type: "Academic", // 重新划分为 Academic
    title: "UTOP Lab (UF)",
    subtitle: "Research Assistant · Gainesville, FL",
    description: "Spearheaded zero-to-one design and full-stack development of the official lab platform, establishing a scalable architecture for urban tech research.",
    skills: ["Full-Stack Dev", "UI/UX Architecture", "System Design"],
    side: "right" as const,
  },
  {
    year: "2025.10 - Present",
    type: "Internship", // 重新划分为 Academic (基于 CUSP 背景)
    title: "Municipal Art Society",
    subtitle: "Web Developer · New York, NY",
    description: "Led the end-to-end migration of the MAS platform from legacy WordPress to a modern React ecosystem, enhancing UI/UX and civic engagement.",
    skills: ["React", "CMS Migration", "Web Design"],
    side: "right" as const,
  },
  {
    year: "2025.09 - 2026.05",
    type: "Academic", // 重新划分为 Academic
    title: "NYU CUSP",
    subtitle: "Teaching Assistant (GTA) · New York, NY",
    description: "Mentored graduate students in Python and statistical modeling. Actively debugged code and guided methodologies for spatial regression tasks.",
    skills: ["Python", "Statistical Modeling", "Mentorship"],
    side: "right" as const,
  },
  {
    year: "2024.09 - 2026.05",
    type: "Education", // 左侧保持原样
    title: "New York University",
    subtitle: "M.S. in Urban Data Science · New York, NY",
    description: "Awarded 1st Prize in Public Data Challenge ($7,000). Specialized in causal inference and longitudinal spatial database construction.",
    skills: ["Machine Learning", "Causal Inference", "Spatial Analysis"],
    side: "left" as const,
  },
  {
    year: "2023.08 - 2024.01",
    type: "Internship", // 重新划分为 Internship
    title: "Shenzhen Dauyan Tech",
    subtitle: "Data Science Intern · Shenzhen, China",
    description: "Built robust pipelines processing 200GB+ of user logs and fine-tuned Llama-2 LLMs to drive intelligent, domain-specific chatbot solutions.",
    skills: ["LLM Fine-tuning", "Data Pipelines", "SQL"],
    side: "right" as const,
  },
  {
    year: "2020.09 - 2024.06",
    type: "Education", // 左侧保持原样
    title: "BIGC",
    subtitle: "B.A. in Graphic Design · Beijing, China",
    description: "Graduated in Top 5% (3.87 GPA). Focused on the unique intersection of aesthetic design principles and visual computation.",
    skills: ["Graphic Design", "Visual Computation", "D3.js"],
    side: "left" as const,
  },
];

export function TimelineSection({ darkMode }: TimelineSectionProps) {
  const trunkColor = darkMode ? "#fcf896" : "#503282";

  // 定义黄色 (Subtitle用)
  // 暗色模式用亮黄 #fffa74，亮色模式为了可读性用深金黄 #b58c00
  const activeYellow = darkMode ? "#fffa74" : "#b58c00";

  // 移除了星星坐标逻辑

  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "#503282" : "#ede4f7",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={imgImage13}
          alt=""
          className="absolute right-0 bottom-0 w-full h-full object-cover"
          style={{
            opacity: darkMode ? 0.15 : 0.08,
            mixBlendMode: darkMode ? "lighten" : "multiply",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-['Jaro',sans-serif] text-7xl md:text-8xl mb-16 md:mb-24 transition-colors duration-500"
          style={{ color: darkMode ? "#fffa74" : "#503282", paddingLeft: "5%" }}
        >
          Time Line
        </motion.h2>

        {/* ================= DESKTOP LAYOUT (Extended Height: 1400px) ================= */}
        <div className="hidden md:block max-w-5xl mx-auto relative" style={{ minHeight: 1400 }}>
          
          <svg
            className="absolute z-0 pointer-events-none"
            style={{
              left: "50%",
              bottom: "-6rem", 
              transform: "translateX(-50%)",
              width: 200,
              height: "calc(100% + 6rem)", 
            }}
            viewBox="0 0 200 1400"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <clipPath id="fast-grow-mask">
                <motion.rect
                  initial={{ y: 1400, height: 0 }} 
                  whileInView={{ y: -50, height: 1450 }} 
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  x="-50"
                  width="300"
                />
              </clipPath>
              {/* 移除了星星模型定义 */}
            </defs>

            <g clipPath="url(#fast-grow-mask)">
              {/* 拉长后的加粗主干 */}
              <path
                d="M 100 0 Q 115 700 142 1400 L 58 1400 Q 85 700 100 0 Z"
                fill={trunkColor}
              />
              {/* R1 (UTOP): 枝干仍保留，但取消星星锚点 */}
              <path d="M 185 120 Q 140 180 100 200 L 100 240 Q 140 190 185 120 Z" fill={trunkColor} />
              {/* R2 (NYC MAS) */}
              <path d="M 185 420 Q 140 480 100 500 L 100 540 Q 140 490 185 420 Z" fill={trunkColor} />
              {/* L1 (NYU Edu) */}
              <path d="M 15 580 Q 60 640 100 660 L 100 700 Q 60 650 15 580 Z" fill={trunkColor} />
              {/* R3 (NYU GTA) */}
              <path d="M 185 740 Q 140 800 100 820 L 100 860 Q 140 810 185 740 Z" fill={trunkColor} />
              {/* L2 (BIGC Edu) */}
              <path d="M 15 1060 Q 60 1120 100 1140 L 100 1180 Q 60 1130 15 1060 Z" fill={trunkColor} />
              {/* R4 (Dauyan) */}
              <path d="M 185 1060 Q 140 1120 100 1140 L 100 1180 Q 140 1130 185 1060 Z" fill={trunkColor} />
            </g>

            {/* 移除了所有星星映射渲染代码 */}
          </svg>

          {/* ====== 卡片队列 (保持间距，卡片内subtitle变黄) ====== */}
          <TimelineCard event={timelineEvents[0]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 40, right: 0, width: "38%" }} delay={1.42} fromX={60} />
          <TimelineCard event={timelineEvents[1]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 340, right: 0, width: "38%" }} delay={1.11} fromX={60} />
          <TimelineCard event={timelineEvents[2]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 660, right: 0, width: "38%" }} delay={0.78} fromX={60} />
          <TimelineCard event={timelineEvents[3]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 500, left: 0, width: "38%" }} delay={0.95} fromX={-60} />
          <TimelineCard event={timelineEvents[4]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 980, right: 0, width: "38%" }} delay={0.45} fromX={60} />
          <TimelineCard event={timelineEvents[5]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 980, left: 0, width: "38%" }} delay={0.45} fromX={-60} />
        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden relative pl-[4.5rem] pb-12" style={{ minHeight: 700 }}>
          
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="absolute left-6 bottom-[-6rem] origin-bottom z-0"
            style={{
              top: 0,
              width: "2rem",
              backgroundColor: trunkColor,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)", 
            }}
          />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => {
              const mobileDelay = 0.2 + (5 - index) * 0.15; 
              
              return (
                <div key={index} className="relative z-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: mobileDelay, ease: "linear" }} 
                    className="absolute top-8 -left-[2.5rem] h-6 w-10 origin-left pointer-events-none"
                    style={{ 
                      backgroundColor: trunkColor,
                      clipPath: "polygon(0 0, 100% 50%, 0 100%)" 
                    }}
                  />
                  
                  {/* 移除了移动端星星逻辑 */}

                  <TimelineCardMobile event={event} darkMode={darkMode} activeYellow={activeYellow} delay={mobileDelay + 0.1} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= DESKTOP CARD =================
function TimelineCard({
  event,
  darkMode,
  activeYellow, // 接收黄色定义
  style,
  delay,
  fromX,
}: {
  event: typeof timelineEvents[0];
  darkMode: boolean;
  activeYellow: string;
  style: React.CSSProperties;
  delay: number;
  fromX: number;
}) {
  // 定义左侧卡片的特定中性紫色调（更浅更灰）背景
  const leftCardBg = darkMode
    ? "rgba(175, 165, 195, 0.15)" // 暗色模式下更柔和、更灰的紫色
    : "rgba(160, 150, 180, 0.08)"; // 亮色模式下非常浅、带有灰色调的中性淡紫灰

  // 根据 event.side 动态选择背景色
  const cardBg = event.side === "left"
    ? leftCardBg
    : "rgba(72, 44, 121, 0.1)"; // 右侧卡片保持原有的具有透明度的深靛紫色

  return (
    <div style={style} className="z-10">
      <motion.div
        initial={{ opacity: 0, x: fromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="rounded-2xl p-6 lg:p-7 relative cursor-default transition-all duration-300 flex flex-col h-full"
        style={{
          // 应用动态背景色
          backgroundColor: cardBg,
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className="font-['Jaro',sans-serif] text-xs md:text-sm px-3 py-1 rounded-full tracking-wide"
            style={{
              backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)",
              color: darkMode ? "#fffa74" : "#503282",
            }}
          >
            {event.type}
          </span>
          <span
            className="font-['Jaro',sans-serif] text-xs md:text-sm px-3 py-1 rounded-full tracking-wide"
            style={{
              border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.3)"}`,
              color: darkMode ? "#fffa74" : "#503282",
            }}
          >
            {event.year}
          </span>
        </div>

        {/* 机构名称 */}
        <p className="font-['Jaro',sans-serif] text-3xl mb-1" style={{ color: darkMode ? "#fffa74" : "#503282" }}>
          {event.title}
        </p>
        
        {/* 新增的副标题 (岗位/专业 · 地点) -> 修改颜色为动态黄色 */}
        <p className="text-[13px] md:text-sm font-semibold mb-3 tracking-wide opacity-90" style={{ color: activeYellow }}>
          {event.subtitle}
        </p>
        
        <p className="text-[15px] opacity-85 leading-relaxed font-medium mb-4 flex-grow" style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}>
          {event.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {event.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide"
              style={{
                backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"}`,
                color: darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.7)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ================= MOBILE CARD =================
function TimelineCardMobile({ event, darkMode, activeYellow, delay }: { event: typeof timelineEvents[0], darkMode: boolean, activeYellow: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl p-5 relative ml-2 flex flex-col"
      style={{
        backgroundColor: "rgba(72, 44, 121, 0.1)",
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <span
          className="font-['Jaro',sans-serif] text-[12px] px-3 py-1 rounded-full tracking-wide"
          style={{
            backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)",
            color: darkMode ? "#fffa74" : "#503282",
          }}
        >
          {event.type}
        </span>
        <span
          className="font-['Jaro',sans-serif] text-[12px] px-3 py-1 rounded-full tracking-wide"
          style={{
            border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.3)"}`,
            color: darkMode ? "#fffa74" : "#503282",
          }}
        >
          {event.year}
        </span>
      </div>
      
      <p className="font-['Jaro',sans-serif] text-2xl mb-1" style={{ color: darkMode ? "#fffa74" : "#503282" }}>
        {event.title}
      </p>

      {/* 移动端同样追加副标题 -> 修改颜色为动态黄色 */}
      <p className="text-[13px] font-semibold mb-3 tracking-wide" style={{ color: activeYellow }}>
        {event.subtitle}
      </p>
      
      <p className="text-[14px] opacity-85 leading-relaxed font-medium mb-4" style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}>
        {event.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {event.skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-[11px] px-2 py-1 rounded-md font-semibold tracking-wide"
            style={{
              backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
              border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"}`,
              color: darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.7)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}