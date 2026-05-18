import { motion } from "motion/react";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";
import imgImage13 from "../../assets/timeline-img.png";
import { SparkleStars } from "./SparkleStars";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../translations";

interface TimelineSectionProps {
  darkMode: boolean;
}

const typeIconMap: Record<string, any> = {
  Academic: FlaskConical,
  Education: GraduationCap,
  Internship: Briefcase,
  Research: FlaskConical,
  学术科研: FlaskConical,
  学术经历: FlaskConical,
  教育背景: GraduationCap,
  实习经历: Briefcase,
};

const cardEase = [0.22, 1, 0.36, 1] as any;
const branchEase = [0.22, 1, 0.36, 1] as any; // smooth cubic-out, no bounce
const trunkEase = [0.4, 0, 0.6, 1] as any;    // gentle ease-in-out

// Shared viewport config — eager trigger as the section approaches.
const eagerViewport = { once: true, amount: 0, margin: "200px" } as any;

export function TimelineSection({ darkMode }: TimelineSectionProps) {
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

      <SparkleStars darkMode={darkMode} count={22} intensity={darkMode ? 0.65 : 0.4} />

      <div className="relative z-10">
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: cardEase }}
          className="font-display text-6xl md:text-7xl mb-16 md:mb-24 transition-colors duration-500 tracking-tight"
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
              {/* Trunk: rises from base in one continuous sweep (1.4s). Branches sprout as it passes. */}
              <clipPath id="trunk-grow">
                <motion.rect
                  initial={{ y: 1400, height: 0 }}
                  whileInView={{ y: -50, height: 1450 }}
                  viewport={eagerViewport}
                  transition={{ duration: 1.4, ease: trunkEase }}
                  x="-50"
                  width="300"
                />
              </clipPath>

              {/* Right-side branches — delays computed against trunk passing each branch y. */}
              <clipPath id="branch-r-1060">
                <motion.rect
                  initial={{ width: 0 }}
                  whileInView={{ width: 90 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 0.30, ease: branchEase }}
                  x="100" y="1040" height="160"
                />
              </clipPath>
              <clipPath id="branch-r-740">
                <motion.rect
                  initial={{ width: 0 }}
                  whileInView={{ width: 90 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 0.62, ease: branchEase }}
                  x="100" y="720" height="160"
                />
              </clipPath>
              <clipPath id="branch-r-420">
                <motion.rect
                  initial={{ width: 0 }}
                  whileInView={{ width: 90 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 0.92, ease: branchEase }}
                  x="100" y="400" height="160"
                />
              </clipPath>
              <clipPath id="branch-r-120">
                <motion.rect
                  initial={{ width: 0 }}
                  whileInView={{ width: 90 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 1.20, ease: branchEase }}
                  x="100" y="100" height="160"
                />
              </clipPath>

              {/* Left-side branches: sprout leftward — animate x from 100 down to 10 while width expands */}
              <clipPath id="branch-l-580">
                <motion.rect
                  initial={{ x: 100, width: 0 }}
                  whileInView={{ x: 10, width: 95 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 0.78, ease: branchEase }}
                  y="560" height="160"
                />
              </clipPath>
              <clipPath id="branch-l-1060">
                <motion.rect
                  initial={{ x: 100, width: 0 }}
                  whileInView={{ x: 10, width: 95 }}
                  viewport={eagerViewport}
                  transition={{ duration: 0.5, delay: 0.30, ease: branchEase }}
                  y="1040" height="160"
                />
              </clipPath>
            </defs>

            {/* Trunk — rises first, clipped by its own vertical mask */}
            <path d="M 100 0 Q 115 700 142 1400 L 58 1400 Q 85 700 100 0 Z" fill={trunkColor} clipPath="url(#trunk-grow)" />

            {/* Branches — each sprouts from the trunk outward, independently animated */}
            <path d="M 185 120 Q 140 180 100 200 L 100 240 Q 140 190 185 120 Z"   fill={trunkColor} clipPath="url(#branch-r-120)" />
            <path d="M 185 420 Q 140 480 100 500 L 100 540 Q 140 490 185 420 Z"   fill={trunkColor} clipPath="url(#branch-r-420)" />
            <path d="M 15 580 Q 60 640 100 660 L 100 700 Q 60 650 15 580 Z"        fill={trunkColor} clipPath="url(#branch-l-580)" />
            <path d="M 185 740 Q 140 800 100 820 L 100 860 Q 140 810 185 740 Z"   fill={trunkColor} clipPath="url(#branch-r-740)" />
            <path d="M 15 1060 Q 60 1120 100 1140 L 100 1180 Q 60 1130 15 1060 Z" fill={trunkColor} clipPath="url(#branch-l-1060)" />
            <path d="M 185 1060 Q 140 1120 100 1140 L 100 1180 Q 140 1130 185 1060 Z" fill={trunkColor} clipPath="url(#branch-r-1060)" />
          </svg>

          {/* Card entrance delays = branch sprout delay + ~0.3s so the card glides in just after its branch tip arrives */}
          <TimelineCard event={timelineEvents[0]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 40, right: 0, width: "38%" }} delay={1.50} fromX={60} />
          <TimelineCard event={timelineEvents[1]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 340, right: 0, width: "38%" }} delay={1.22} fromX={60} />
          <TimelineCard event={timelineEvents[2]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 660, right: 0, width: "38%" }} delay={0.92} fromX={60} />
          <TimelineCard event={timelineEvents[3]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 500, left: 0, width: "38%" }} delay={1.08} fromX={-60} />
          <TimelineCard event={timelineEvents[4]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 980, right: 0, width: "38%" }} delay={0.60} fromX={60} />
          <TimelineCard event={timelineEvents[5]} darkMode={darkMode} activeYellow={activeYellow} style={{ position: "absolute", top: 980, left: 0, width: "38%" }} delay={0.60} fromX={-60} />
        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden relative pl-[4.5rem] pb-12" style={{ minHeight: 700 }}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={eagerViewport}
            transition={{ duration: 0.9, ease: trunkEase }}
            className="absolute left-6 bottom-[-6rem] origin-bottom z-0"
            style={{ top: 0, width: "2rem", backgroundColor: trunkColor, clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
          />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => {
              // Bottom-most event sprouts first, in sync with the trunk rising upward.
              const mobileDelay = 0.15 + (5 - index) * 0.1;
              return (
                <div key={index} className="relative z-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={eagerViewport}
                    transition={{ duration: 0.35, delay: mobileDelay, ease: branchEase }}
                    className="absolute top-8 -left-[2.5rem] h-6 w-10 origin-left pointer-events-none"
                    style={{ backgroundColor: trunkColor, clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                  />
                  <TimelineCardMobile event={event} darkMode={darkMode} activeYellow={activeYellow} delay={mobileDelay + 0.18} />
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
  const TypeIcon = typeIconMap[event.type] || FlaskConical;

  return (
    <div style={style} className="z-10">
      <motion.div
        initial={{ opacity: 0, x: fromX, y: 16 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "200px" }}
        transition={{ duration: 0.55, delay, ease: cardEase }}
        whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group rounded-2xl p-6 lg:p-7 relative cursor-default flex flex-col h-full"
        style={{
          backgroundColor: cardBg,
          backdropFilter: "blur(14px) saturate(160%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Hover glow halo */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 0%, ${darkMode ? "rgba(255,250,116,0.12)" : "rgba(80,50,130,0.10)"}, transparent 70%)`,
          }}
        />

        <div className="relative flex flex-wrap gap-2 mb-3 items-center">
          <span
            className="inline-flex items-center gap-1.5 font-mono-tech text-[10px] md:text-[11px] px-2.5 py-1 tracking-[0.2em] uppercase"
            style={{
              backgroundColor: darkMode ? "rgba(252, 248, 150, 0.15)" : "rgba(80, 50, 130, 0.08)",
              color: darkMode ? "#fffa74" : "#503282",
              border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.3)" : "rgba(80, 50, 130, 0.18)"}`,
            }}
          >
            <TypeIcon size={11} strokeWidth={2.4} />
            {event.type}
          </span>
          <span
            className="font-mono-tech text-[10px] md:text-[11px] px-2.5 py-1 tracking-[0.15em]"
            style={{
              border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.35)" : "rgba(80, 50, 130, 0.28)"}`,
              color: darkMode ? "#fffa74" : "#503282",
            }}
          >
            {event.year}
          </span>
        </div>

        <p className="relative font-display text-3xl mb-1 leading-tight" style={{ color: darkMode ? "#fffa74" : "#503282" }}>
          {event.title}
        </p>
        <p className="relative text-[13px] md:text-sm font-semibold mb-3 tracking-wide opacity-90" style={{ color: activeYellow }}>
          {event.subtitle}
        </p>
        <p
          className="relative text-[15px] opacity-85 leading-relaxed font-medium mb-4 flex-grow"
          style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}
        >
          {event.description}
        </p>

        <div className="relative flex flex-wrap gap-2 mt-auto pt-2">
          {event.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide transition-colors duration-200 group-hover:border-current"
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
function TimelineCardMobile({ event, darkMode, activeYellow, delay }: any) {
  const TypeIcon = typeIconMap[event.type] || FlaskConical;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 8 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "200px" }}
      transition={{ duration: 0.5, delay, ease: cardEase }}
      whileHover={{ y: -4 }}
      className="rounded-2xl p-5 relative ml-2 flex flex-col"
      style={{
        backgroundColor: "rgba(72, 44, 121, 0.1)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex flex-wrap gap-2 mb-3 items-center">
        <span
          className="inline-flex items-center gap-1.5 font-display text-[12px] px-3 py-1 rounded-full tracking-wide"
          style={{
            backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)",
            color: darkMode ? "#fffa74" : "#503282",
          }}
        >
          <TypeIcon size={12} strokeWidth={2.4} />
          {event.type}
        </span>
        <span
          className="font-display text-[12px] px-3 py-1 rounded-full tracking-wide"
          style={{
            border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.3)"}`,
            color: darkMode ? "#fffa74" : "#503282",
          }}
        >
          {event.year}
        </span>
      </div>
      <p className="font-display text-2xl mb-1 leading-tight" style={{ color: darkMode ? "#fffa74" : "#503282" }}>{event.title}</p>
      <p className="text-[13px] font-semibold mb-3 tracking-wide" style={{ color: activeYellow }}>{event.subtitle}</p>
      <p className="text-[14px] opacity-85 leading-relaxed font-medium mb-4" style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}>{event.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {event.skills.map((skill: string, idx: number) => (
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
