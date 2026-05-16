import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Modal } from "./Modal";
import { ArrowLeft, ExternalLink, Home, ClipboardList, Sparkles, GitBranch, DoorOpen, ChevronRight } from "lucide-react";
import { SparkleStars } from "./SparkleStars";

import { useLanguage } from "../../LanguageContext"; // 🌟 引入双语控制器
import { translations } from "../../translations";   // 🌟 引入字典

interface ProjectsSectionProps {
  darkMode: boolean;
}

// User-flow step icon map (used by ProjectDetailView)
const flowIconMap: Record<string, any> = {
  home: Home,
  tasks: ClipboardList,
  magic: Sparkles,
  branch: GitBranch,
  door: DoorOpen,
};

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
      {/* In-Depth Architecture — user flow timeline + information hierarchy + ideation sketch */}
      {project.architecture && (
        <motion.div custom={5.5} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-6 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>
            {uiTexts.architecture}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Flow Timeline */}
            {project.architecture.userFlow && (
              <div>
                <h4 className="font-medium text-xl mb-4" style={{ color: accentColor }}>{uiTexts.userFlow}</h4>
                <div className="relative pl-12">
                  <div
                    className="absolute left-[15px] top-2 bottom-2 w-[2px]"
                    style={{ backgroundColor: dividerColor }}
                  />
                  <div className="flex flex-col gap-5">
                    {project.architecture.userFlow.map((s: any, i: number) => {
                      const Icon = flowIconMap[s.iconKey] || ChevronRight;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
                          className="relative"
                        >
                          <div
                            className="absolute -left-[39px] top-0 w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: accentColor,
                              color: darkMode ? "#503282" : "#fffa74",
                              boxShadow: `0 0 0 4px ${darkMode ? "rgba(255,250,116,0.18)" : "rgba(80,50,130,0.15)"}`,
                            }}
                          >
                            <Icon size={15} strokeWidth={2.2} />
                          </div>
                          <div className="rounded-xl px-5 py-3" style={glassStyle}>
                            <p className="font-medium text-base mb-0.5" style={{ color: accentColor }}>{s.title}</p>
                            <p className="text-sm leading-relaxed" style={{ color: textColor }}>{s.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Information Hierarchy Tree */}
            {project.architecture.hierarchy && (
              <div>
                <h4 className="font-medium text-xl mb-4" style={{ color: accentColor }}>{uiTexts.hierarchy}</h4>
                <div className="rounded-2xl p-5" style={glassStyle}>
                  {project.architecture.hierarchy.map((g: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={i === project.architecture.hierarchy.length - 1 ? "" : "mb-4"}
                    >
                      <p className="font-semibold text-sm mb-2 tracking-wide" style={{ color: accentColor }}>
                        {g.level}
                      </p>
                      <ul className="flex flex-col gap-1.5 pl-4 border-l" style={{ borderColor: dividerColor }}>
                        {g.items.map((item: string, j: number) => (
                          <li key={j} className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                            <ChevronRight size={13} style={{ color: accentColor, opacity: 0.7 }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ideation sketch — sits under the two-column block */}
          {project.ideationImage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
              className="mt-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback src={project.ideationImage} alt="Ideation sketch" className="w-full h-auto block object-cover" />
              </div>
              {project.ideationImageCaption && (
                <p className="text-sm text-center mt-3 italic opacity-75" style={{ color: subtextColor }}>
                  {project.ideationImageCaption}
                </p>
              )}
            </motion.div>
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

          {/* Final-UI image sitting beneath the accomplishments */}
          {project.finalImage && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as any }}
              className="mt-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback src={project.finalImage} alt="Final UI" className="w-full h-auto block object-cover" />
              </div>
              {project.finalImageCaption && (
                <p className="text-sm text-center mt-3 italic opacity-75" style={{ color: subtextColor }}>
                  {project.finalImageCaption}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {project.takeaway && (
        <motion.div custom={7} variants={sectionVariants} className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.takeaway}</h3>
          <div className="rounded-2xl p-6" style={glassStyle}><p className="text-base md:text-lg italic" style={{ color: textColor }}>{project.takeaway}</p></div>
        </motion.div>
      )}

      {/* Prototype video — autoplay, muted, loop */}
      {project.video && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as any }}
          className="mb-10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto block"
          />
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
      <SparkleStars darkMode={darkMode} count={20} intensity={darkMode ? 0.7 : 0.5} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-8">
          <h2
            className="font-display text-6xl md:text-7xl m-0 transition-colors duration-500 tracking-tight"
            style={{ color: darkMode ? "#fffa74" : "#503282" }}
          >
            {tUI.title}
          </h2>

          {/* Filter tabs — sliding active pill via layoutId */}
          <div className="flex gap-1.5 flex-wrap bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {internalCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="font-display px-5 md:px-6 py-2 rounded-full text-base md:text-lg cursor-pointer relative transition-colors duration-200"
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
                className="group corner-brackets relative rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-shadow duration-500 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundColor: darkMode ? "rgba(252, 248, 150, 0.96)" : "rgba(255, 255, 255, 0.95)",
                  border: `1px solid ${darkMode ? "rgba(252, 248, 150, 0.4)" : "rgba(80, 50, 130, 0.18)"}`,
                  color: "#503282",
                }}
                onClick={() => setSelectedProject(project)}
              >
                <span className="br-tl" />
                <span className="br-br" />

                <div className="relative overflow-hidden bg-[#050505]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ width: "100%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                  <div className="absolute top-3 left-3">
                    <span
                      className="font-mono-tech text-[10px] tracking-[0.25em] px-2 py-1 rounded backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.55)",
                        color: "#94c4f5",
                        border: "1px solid rgba(148, 196, 245, 0.4)",
                      }}
                    >
                      ID · {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {project.categories.slice(0, 2).map((cat: string, i: number) => (
                      <span
                        key={i}
                        className="font-mono-tech text-[10px] tracking-[0.18em] uppercase px-2 py-1 rounded backdrop-blur-md whitespace-nowrap"
                        style={{
                          backgroundColor: "rgba(80, 50, 130, 0.85)",
                          borderTop: "1px solid rgba(148, 196, 245, 0.6)",
                          color: "#94c4f5",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                    {project.categories.length > 2 && (
                      <span
                        className="font-mono-tech text-[10px] tracking-[0.18em] px-2 py-1 rounded backdrop-blur-md"
                        style={{
                          backgroundColor: "rgba(80, 50, 130, 0.85)",
                          borderTop: "1px solid rgba(148, 196, 245, 0.6)",
                          color: "#94c4f5",
                        }}
                      >
                        +{project.categories.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 md:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase opacity-60" style={{ color: "#503282" }}>
                        Project · {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(80,50,130,0.35), transparent)" }} />
                    </div>
                    <h3
                      className="font-display text-2xl md:text-[26px] leading-tight mb-3 tracking-tight"
                      style={{ color: "#1a1a2e" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[14px] mb-5 opacity-75 leading-relaxed line-clamp-3"
                      style={{ color: "#333" }}
                    >
                      {project.description}
                    </p>

                    {/* 🌟 工具 / 技术栈 Tags 区域 */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.detail.tools.slice(0, 5).map((tool: string, i: number) => (
                        <span
                          key={i}
                          className="font-mono-tech text-[10px] tracking-wide px-2 py-0.5"
                          style={{
                            border: "1px solid rgba(80, 50, 130, 0.22)",
                            color: "rgba(80, 50, 130, 0.78)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                      {project.detail.tools.length > 5 && (
                        <span className="font-mono-tech text-[10px] tracking-wide px-2 py-0.5 opacity-50" style={{ color: "#503282" }}>
                          +{project.detail.tools.length - 5}
                        </span>
                      )}
                    </div>

                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="group/cta inline-flex items-center gap-2 self-start font-mono-tech text-[11px] tracking-[0.3em] uppercase pb-1 mt-auto"
                    style={{ color: "#503282" }}
                  >
                    <span className="relative">
                      {tUI.viewDetails}
                      <span
                        className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-100 transition-transform duration-300 group-hover/cta:scale-x-0"
                        style={{ backgroundColor: "rgba(80, 50, 130, 0.45)" }}
                      />
                      <span
                        className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover/cta:scale-x-100"
                        style={{ backgroundColor: "#503282", transitionDelay: "0.05s" }}
                      />
                    </span>
                    <motion.span whileHover={{ x: 4 }} className="inline-flex">{"\u2192"}</motion.span>
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