import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Modal } from "./Modal";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { useLanguage } from "../../LanguageContext"; // 🌟 引入双语控制器
import { translations } from "../../translations";   // 🌟 引入字典

interface ProjectsSectionProps {
  darkMode: boolean;
}

// ==========================================
// 详情页内部组件 (处理双语的弹窗内容)
// ==========================================
function ProjectDetailView({ project, darkMode, onBack, uiTexts }: any) {
  const headingColor = darkMode ? "#fffa74" : "#503282";
  const textColor = darkMode ? "rgba(255, 255, 255, 0.85)" : "#333";
  const subtextColor = darkMode ? "rgba(255, 255, 255, 0.6)" : "#666";
  const accentColor = darkMode ? "#fffa74" : "#503282";
  const dividerColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(80, 50, 130, 0.15)";
  const glassStyle = { backgroundColor: "rgba(72, 44, 121, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)" };

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
    }),
  };

  return (
    <motion.div
      className="flex flex-col gap-0 font-['Outfit',sans-serif]"
      initial="hidden"
      animate="visible"
    >
      {/* 动态返回按钮 */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.97 }}
        custom={0}
        variants={sectionVariants}
        className="inline-flex items-center gap-2 font-medium tracking-wide text-xl mb-6 hover:opacity-80 self-start"
        style={{ color: accentColor }}
      >
        <ArrowLeft size={20} /> {uiTexts.back}
      </motion.button>

      <motion.div custom={1} variants={sectionVariants}>
        <h1 className="font-medium tracking-wide text-4xl md:text-5xl lg:text-6xl mb-3" style={{ color: headingColor }}>{project.title}</h1>
        <p className="text-lg mb-2" style={{ color: subtextColor }}>{project.subtitle}</p>
        {project.category && <span className="inline-block font-medium text-sm px-5 py-1.5 rounded-full border mb-6" style={{ backgroundColor: "rgba(80, 50, 130, 0.9)", borderColor: "#94c4f5", color: "#94c4f5" }}>{project.category}</span>}
      </motion.div>

      <motion.div
        custom={2}
        variants={sectionVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="w-full rounded-2xl overflow-hidden mb-10 mt-4 shadow-2xl"
      >
        <ImageWithFallback src={project.heroImage} alt={project.title} className="w-full h-auto block object-cover" />
      </motion.div>

      {project.background && (
        <motion.div custom={3} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.background}</h3>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>{project.background}</p>
        </motion.div>
      )}
      {project.goal && (
        <motion.div custom={4} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.goal}</h3>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>{project.goal}</p>
        </motion.div>
      )}
      {project.process && (
        <motion.div custom={5} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.process}</h3>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: textColor }}>{project.process.description}</p>
          {project.process.features && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.process.features.map((f: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-5"
                  style={glassStyle}
                >
                  <h4 className="font-medium text-xl mb-2" style={{ color: accentColor }}>{f.title}</h4>
                  <p className="text-sm" style={{ color: textColor }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
      {project.accomplishments && (
        <motion.div custom={6} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.accomplishments}</h3>
          <ul className="flex flex-col gap-3">
            {project.accomplishments.map((item: any, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.35 }}
                className="flex items-start gap-3 text-base"
                style={{ color: textColor }}
              >
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }}/>{item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      {project.takeaway && (
        <motion.div custom={7} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.takeaway}</h3>
          <div className="rounded-2xl p-6" style={glassStyle}><p className="text-base md:text-lg italic" style={{ color: textColor }}>{project.takeaway}</p></div>
        </motion.div>
      )}
      {project.tools && (
        <motion.div custom={8} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.tools}</h3>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool: any, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + idx * 0.04, duration: 0.3 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 rounded-xl text-sm font-semibold cursor-default"
                style={glassStyle}
              >
                <span style={{ color: accentColor }}>{tool}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
      {project.prototypeLink && (
        <div className="mt-4 mb-8">
          <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xl transition-all hover:scale-105" style={{ ...glassStyle, color: accentColor }}>
            <ExternalLink size={20} /> {uiTexts.liveLink}
          </a>
        </div>
      )}
    </motion.div>
  );
}

// ==========================================
// 项目列表主组件
// ==========================================
const internalCategories = ["All", "AI / ML", "UI/UX", "GIS", "Data Science"];

export function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  // 🌟 从上下文读取当前语言，并提取对应文案和数据
  const { lang } = useLanguage();
  const tUI = translations[lang].projectsUI;
  const tDetail = translations[lang].detailUI;
  const projectList = translations[lang].projectsData;

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectList
      : projectList.filter((p: any) => p.categories.includes(activeCategory));

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden font-['Outfit',sans-serif]"
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
            {tUI.title} {/* 🌟 动态标题 */}
          </h2>

          {/* Filter tabs — sliding active pill via layoutId */}
          <div className="flex gap-1.5 flex-wrap bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {internalCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="font-['Jaro',sans-serif] px-5 md:px-6 py-2 rounded-full text-base md:text-lg cursor-pointer relative transition-colors duration-200"
                  style={{
                    color: isActive
                      ? darkMode ? "#503282" : "#503282"
                      : darkMode ? "#d1e6fa" : "#7a5cb0",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: darkMode ? "#fffa74" : "rgba(255, 250, 116, 0.85)",
                        boxShadow: "0 4px 14px rgba(255, 250, 116, 0.35)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat === "All" ? tUI.all : cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, idx: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1] as any,
                  layout: { duration: 0.4 },
                }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                key={project.id}
                className="group rounded-[32px] overflow-hidden hover:shadow-2xl flex flex-col cursor-pointer border border-white/10 backdrop-blur-sm"
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
                    {project.categories.map((cat: string, idx: number) => (
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

                    {/* 🌟 工具 / 技术栈 Tags 区域 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.detail.tools.map((tool: string, idx: number) => (
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
                    {tUI.viewDetails} {/* 🌟 动态 View Details / 查看详情 */}
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
            uiTexts={tDetail} // 🌟 将翻译后的 UI 字段传给详情视图
          />
        )}
      </Modal>
    </section>
  );
}