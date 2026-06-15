import { Palette, Code2, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../translations";

interface SkillsSectionProps {
  darkMode: boolean;
}

const cardEase = [0.22, 1, 0.36, 1] as any;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: cardEase } },
};

export function SkillsSection({ darkMode }: SkillsSectionProps) {
  // 🌟 读取当前语言的动态翻译
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  // 🌟 将固定的图标与字典里的文字数据动态合并
  const icons = [Palette, Code2, BarChart3];
  const skillsData = t.list.map((item, idx) => ({
    ...item,
    icon: icons[idx],
  }));

  return (
    <section
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#fcf896" : "#f5f0ff",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-display text-6xl md:text-7xl mb-14 transition-colors duration-500 tracking-tight"
          style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
        >
          {t.title}
        </motion.h2>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {skillsData.map((skill, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              key={idx}
              className="group corner-brackets relative rounded-2xl p-8 text-center cursor-default overflow-hidden"
              style={{
                color: darkMode ? "#4b2e7d" : "#503282",
                backgroundColor: "rgba(72, 44, 121, 0.08)",
                backdropFilter: "blur(14px) saturate(160%)",
                WebkitBackdropFilter: "blur(14px) saturate(160%)",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(80, 50, 130, 0.18)",
                transition: "box-shadow 0.4s ease, border-color 0.4s ease",
              }}
            >
              <span className="br-tl" />
              <span className="br-br" />
              <div className="font-mono-tech text-[10px] tracking-[0.3em] uppercase opacity-60 mb-3" style={{ color: darkMode ? "#503282" : "#503282" }}>
                · {String(idx + 1).padStart(2, "0")} /
              </div>
              {/* Soft radial halo on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${darkMode ? "rgba(80,50,130,0.18)" : "rgba(80,50,130,0.12)"}, transparent 70%)`,
                }}
              />

              <div className="relative flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 16 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: "#503282",
                    boxShadow: `0 12px 32px -8px ${darkMode ? "rgba(80,50,130,0.55)" : "rgba(80,50,130,0.4)"}`,
                  }}
                >
                  <skill.icon size={36} color="#fffa74" strokeWidth={1.8} />
                </motion.div>
              </div>
              <h3
                className="relative font-display text-3xl mb-4 tracking-tight"
                style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
              >
                {skill.title}
              </h3>
              <div className="relative flex flex-wrap justify-center gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-[13px] font-medium"
                    style={{
                      color: darkMode ? "#4b2e7d" : "#503282",
                      backgroundColor: "rgba(80, 50, 130, 0.1)",
                      border: "1px solid rgba(80, 50, 130, 0.2)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}