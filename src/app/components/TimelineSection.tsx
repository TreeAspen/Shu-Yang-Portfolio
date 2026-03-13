import { motion } from "motion/react";
import imgImage13 from "figma:asset/e548c4987b79553e8454d2b267cc1ff99c0b6a42.png";

interface TimelineSectionProps {
  darkMode: boolean;
}

const timelineEvents = [
  {
    year: "2024",
    title: "NYU CUSP",
    description: "Graduate Research Assistant, focusing on urban informatics and data-driven city solutions.",
    side: "left" as const,
  },
  {
    year: "2023",
    title: "UI/UX Intern",
    description: "Product design internship at a tech startup, redesigning core user flows and interfaces.",
    side: "right" as const,
  },
  {
    year: "2022",
    title: "NYU Tandon",
    description: "M.S. in Urban Informatics, specializing in geospatial data and human-computer interaction.",
    side: "left" as const,
  },
  {
    year: "2021",
    title: "Freelance Designer",
    description: "Independent UI/UX design projects for clients across education and technology sectors.",
    side: "right" as const,
  },
];

/* 4-point star sparkle SVG */
function Sparkle({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0L13.8 8.4L20.5 3.5L15.6 10.2L24 12L15.6 13.8L20.5 20.5L13.8 15.6L12 24L10.2 15.6L3.5 20.5L8.4 13.8L0 12L8.4 10.2L3.5 3.5L10.2 8.4L12 0Z"
        fill={color}
      />
    </svg>
  );
}

export function TimelineSection({ darkMode }: TimelineSectionProps) {
  const trunkColor = darkMode ? "#fcf896" : "#503282";
  const trunkColorFaded = darkMode ? "rgba(252, 248, 150, 0.6)" : "rgba(80, 50, 130, 0.6)";
  const sparkleColor = darkMode ? "#fcf896" : "#503282";

  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "#503282" : "#ede4f7",
      }}
    >
      {/* Background earth image */}
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

        {/* Desktop Tree Layout */}
        <div className="hidden md:block max-w-5xl mx-auto relative" style={{ minHeight: 900 }}>
          {/* Organic Tree Trunk - SVG */}
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute z-0 pointer-events-none"
            style={{
              left: "50%",
              bottom: 0,
              transform: "translateX(-50%)",
              width: 200,
              height: "100%",
            }}
            viewBox="0 0 200 900"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Main trunk - organic tapered shape */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M100 900 C100 900, 85 750, 80 650 C75 550, 70 500, 75 420 C80 340, 90 280, 95 200 C98 150, 100 100, 100 40"
              stroke={trunkColor}
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
            {/* Slightly offset second stroke for organic thickness */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
              d="M100 900 C100 900, 115 760, 120 660 C125 560, 120 490, 115 410 C110 330, 105 270, 103 190 C101 140, 100 100, 100 40"
              stroke={trunkColor}
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            {/* Fill between the two strokes */}
            <path
              d="M100 900 C100 900, 85 750, 80 650 C75 550, 70 500, 75 420 C80 340, 90 280, 95 200 C98 150, 100 100, 100 40
                 L100 40 C100 100, 101 140, 103 190 C105 270, 110 330, 115 410 C120 490, 125 560, 120 660 C115 760, 100 900, 100 900Z"
              fill={trunkColor}
              opacity={0.7}
            />

            {/* Left branch 1 (top - event 0) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              d="M95 130 C80 115, 50 95, 10 80"
              stroke={trunkColor}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right branch 1 (event 1) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              d="M108 270 C125 250, 155 235, 195 225"
              stroke={trunkColor}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            {/* Left branch 2 (event 2) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              d="M80 430 C65 415, 40 400, 5 390"
              stroke={trunkColor}
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right branch 2 (event 3) */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              d="M118 570 C135 555, 160 545, 195 540"
              stroke={trunkColor}
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </motion.svg>

          {/* Event cards positioned around tree */}
          {/* Event 0 - Top Left */}
          <TimelineCard
            event={timelineEvents[0]}
            darkMode={darkMode}
            style={{ position: "absolute", top: 0, left: 0, width: "38%" }}
            sparkleStyle={{ position: "absolute", top: 65, right: -35 }}
            sparkleColor={sparkleColor}
            delay={0.8}
            fromX={-60}
          />
          {/* Event 1 - Right, below */}
          <TimelineCard
            event={timelineEvents[1]}
            darkMode={darkMode}
            style={{ position: "absolute", top: 180, right: 0, width: "38%" }}
            sparkleStyle={{ position: "absolute", top: 30, left: -35 }}
            sparkleColor={sparkleColor}
            delay={1.0}
            fromX={60}
          />
          {/* Event 2 - Left, middle */}
          <TimelineCard
            event={timelineEvents[2]}
            darkMode={darkMode}
            style={{ position: "absolute", top: 370, left: 0, width: "38%" }}
            sparkleStyle={{ position: "absolute", top: 20, right: -35 }}
            sparkleColor={sparkleColor}
            delay={1.2}
            fromX={-60}
          />
          {/* Event 3 - Right, lower */}
          <TimelineCard
            event={timelineEvents[3]}
            darkMode={darkMode}
            style={{ position: "absolute", top: 510, right: 0, width: "38%" }}
            sparkleStyle={{ position: "absolute", top: 20, left: -35 }}
            sparkleColor={sparkleColor}
            delay={1.4}
            fromX={60}
          />
        </div>

        {/* Mobile Tree Layout */}
        <div className="md:hidden relative pl-14" style={{ minHeight: 500 }}>
          {/* Mobile trunk */}
          <div
            className="absolute left-5 top-0 bottom-0 w-2 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${trunkColor}, ${trunkColorFaded})`,
            }}
          />
          <div className="flex flex-col gap-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Branch line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 28 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute top-6 -left-8 h-[3px] rounded-full"
                  style={{ backgroundColor: trunkColor }}
                />
                {/* Sparkle at junction */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -left-11 top-2"
                >
                  <Sparkle color={sparkleColor} size={16} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl p-5 relative"
                  style={{
                    backgroundColor: "rgba(72, 44, 121, 0.1)",
                    backdropFilter: "blur(12px) saturate(150%)",
                    WebkitBackdropFilter: "blur(12px) saturate(150%)",
                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span
                    className="font-['Jaro',sans-serif] text-sm px-3 py-1 rounded-full mb-2 inline-block"
                    style={{
                      backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)",
                      color: darkMode ? "#fffa74" : "#503282",
                    }}
                  >
                    {event.year}
                  </span>
                  <p
                    className="font-['Jaro',sans-serif] text-2xl mb-2"
                    style={{ color: darkMode ? "#fffa74" : "#503282" }}
                  >
                    {event.title}
                  </p>
                  <p
                    className="text-sm opacity-80 leading-relaxed"
                    style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}
                  >
                    {event.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  event,
  darkMode,
  style,
  sparkleStyle,
  sparkleColor,
  delay,
  fromX,
}: {
  event: typeof timelineEvents[0];
  darkMode: boolean;
  style: React.CSSProperties;
  sparkleStyle: React.CSSProperties;
  sparkleColor: string;
  delay: number;
  fromX: number;
}) {
  return (
    <div style={style} className="z-10">
      <motion.div
        initial={{ opacity: 0, x: fromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, type: "spring", stiffness: 80 }}
        whileHover={{ scale: 1.05, y: -4 }}
        className="rounded-2xl p-6 lg:p-7 relative cursor-default transition-all duration-300"
        style={{
          backgroundColor: "rgba(72, 44, 121, 0.1)",
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Sparkle at branch tip */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          style={sparkleStyle}
          className="z-20"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkle color={sparkleColor} size={28} />
          </motion.div>
        </motion.div>

        <span
          className="font-['Jaro',sans-serif] text-sm px-3 py-1 rounded-full mb-3 inline-block"
          style={{
            backgroundColor: darkMode ? "rgba(252, 248, 150, 0.2)" : "rgba(80, 50, 130, 0.1)",
            color: darkMode ? "#fffa74" : "#503282",
          }}
        >
          {event.year}
        </span>
        <p
          className="font-['Jaro',sans-serif] text-3xl mb-2"
          style={{ color: darkMode ? "#fffa74" : "#503282" }}
        >
          {event.title}
        </p>
        <p
          className="text-base opacity-80 leading-relaxed font-medium"
          style={{ color: darkMode ? "rgba(255, 255, 255, 0.9)" : "#333" }}
        >
          {event.description}
        </p>
      </motion.div>
    </div>
  );
}
