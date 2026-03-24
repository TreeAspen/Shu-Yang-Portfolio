import { motion } from "motion/react";
import imgImage13 from "../../assets/timeline-img.png";
import { useLanguage } from "../../LanguageContext"; // 🌟
import { translations } from "../../translations";   // 🌟

interface TimelineSectionProps {
  darkMode: boolean;
}

export function TimelineSection({ darkMode }: TimelineSectionProps) {
  // 🌟 读取动态翻译
  const { lang } = useLanguage();
  const t = translations[lang].timeline;
  const timelineEvents = t.events;

  const trunkColor = darkMode ? "#fcf896" : "#503282";
  const activeYellow = darkMode ? "#fffa74" : "#b58c00";

  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#503282" : "#ede4f7" }}
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
          {t.title}
        </motion.h2>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden md:block max-w-5xl mx-auto relative" style={{ minHeight: 1400 }}>
          <svg
            className="absolute z-0 pointer-events-none"
            style={{ left: "50%", bottom: "-6rem", transform: "translateX(-50%)", width: 200, height: "calc(100% + 6rem)" }}
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
            </defs>

            <g clipPath="url(#fast-grow-mask)">
              <path d="M 100 0 Q 115 700 142 1400 L 58 1400 Q 85 700 100 0 Z" fill={trunkColor} />
              <path d="M 185 120 Q 140 180 100 200 L 100 240 Q 140 190 185 120 Z" fill={trunkColor} />
              <path d="M 185 420 Q 140 480 100 500 L 100 540 Q 140 490 185 420 Z" fill={trunkColor} />
              <path d="M 15 580 Q 60 640 100 660 L 100 700 Q 60 650 15 580 Z" fill={trunkColor} />
              <path d="M 185 740 Q 140 800 100 820 L 100 860 Q 140 810 185 740 Z" fill={trunkColor} />
              <path d="M 15 1060 Q 60 1120 100 1140 L 100 1180 Q 60 1130 15 1060 Z" fill={trunkColor} />
              <path d="M 185 1060 Q 140 1120 100 1140 L 100 1180 Q 140 1130 185 1060 Z" fill={trunkColor} />
            </g>
          </svg>

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
            style={{ top: 0, width: "2rem", backgroundColor: trunkColor, clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
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
                    style={{ backgroundColor: trunkColor, clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                  />
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
function TimelineCard({ event, darkMode, activeYellow, style, delay, fromX }: any) {
  const leftCardBg = darkMode ? "rgba(175, 165, 195, 0.15)" : "rgba(160, 150, 180, 0.08)";
  const cardBg = event.side === "left" ? leftCardBg : "rgba(72, 44, 121, 0.1)";

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
          backgroundColor: cardBg,
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-['Jaro',sans-serif] text-xs md:text-sm px-3 py-1 rounded-full tracking-wide" style={{ backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)", color: darkMode ? "#fffa74" : "#503282" }}>
            {event.type}
          </span>
          <span className="font-['Jaro',sans-serif] text-xs md:text-sm px-3 py-1 rounded-full tracking-wide" style={{ border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.3)"}`, color: darkMode ? "#fffa74" : "#503282" }}>
            {event.year}
          </span>
        </div>

        <p className="font-['Jaro',sans-serif] text-3xl mb-1" style={{ color: darkMode ? "#fffa74" : "#503282" }}>{event.title}</p>
        <p className="text-[13px] md:text-sm font-semibold mb-3 tracking-wide opacity-90" style={{ color: activeYellow }}>{event.subtitle}</p>
        <p className="text-[15px] opacity-85 leading-relaxed font-medium mb-4 flex-grow" style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}>{event.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {event.skills.map((skill: string, idx: number) => (
            <span key={idx} className="text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide" style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)", border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"}`, color: darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.7)" }}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ================= MOBILE CARD =================
function TimelineCardMobile({ event, darkMode, activeYellow, delay }: any) {
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
        <span className="font-['Jaro',sans-serif] text-[12px] px-3 py-1 rounded-full tracking-wide" style={{ backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)", color: darkMode ? "#fffa74" : "#503282" }}>{event.type}</span>
        <span className="font-['Jaro',sans-serif] text-[12px] px-3 py-1 rounded-full tracking-wide" style={{ border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.3)"}`, color: darkMode ? "#fffa74" : "#503282" }}>{event.year}</span>
      </div>
      <p className="font-['Jaro',sans-serif] text-2xl mb-1" style={{ color: darkMode ? "#fffa74" : "#503282" }}>{event.title}</p>
      <p className="text-[13px] font-semibold mb-3 tracking-wide" style={{ color: activeYellow }}>{event.subtitle}</p>
      <p className="text-[14px] opacity-85 leading-relaxed font-medium mb-4" style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}>{event.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {event.skills.map((skill: string, idx: number) => (
          <span key={idx} className="text-[11px] px-2 py-1 rounded-md font-semibold tracking-wide" style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)", border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"}`, color: darkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.7)" }}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}