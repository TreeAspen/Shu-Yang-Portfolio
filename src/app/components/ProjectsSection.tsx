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

  return (
    <div className="flex flex-col gap-0 font-['Outfit',sans-serif]">
      {/* 动态返回按钮 */}
      <motion.button onClick={onBack} className="inline-flex items-center gap-2 font-medium tracking-wide text-xl mb-6 hover:opacity-70 self-start" style={{ color: accentColor }}>
        <ArrowLeft size={20} /> {uiTexts.back}
      </motion.button>
      
      <motion.div>
        <h1 className="font-medium tracking-wide text-4xl md:text-5xl lg:text-6xl mb-3" style={{ color: headingColor }}>{project.title}</h1>
        <p className="text-lg mb-2" style={{ color: subtextColor }}>{project.subtitle}</p>
        {project.category && <span className="inline-block font-medium text-sm px-5 py-1.5 rounded-full border mb-6" style={{ backgroundColor: "rgba(80, 50, 130, 0.9)", borderColor: "#94c4f5", color: "#94c4f5" }}>{project.category}</span>}
      </motion.div>
      
      <motion.div className="w-full rounded-2xl overflow-hidden mb-10 mt-4 shadow-2xl">
        <ImageWithFallback src={project.heroImage} alt={project.title} className="w-full h-auto block object-cover" />
      </motion.div>

      {project.background && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.background}</h3>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>{project.background}</p>
        </div>
      )}
      {project.goal && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.goal}</h3>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>{project.goal}</p>
        </div>
      )}
      {project.process && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.process}</h3>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: textColor }}>{project.process.description}</p>
          {project.process.features && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.process.features.map((f: any, i: number) => (
                <div key={i} className="rounded-2xl p-5" style={glassStyle}>
                  <h4 className="font-medium text-xl mb-2" style={{ color: accentColor }}>{f.title}</h4>
                  <p className="text-sm" style={{ color: textColor }}>{f.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {project.accomplishments && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.accomplishments}</h3>
          <ul className="flex flex-col gap-3">
            {project.accomplishments.map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-3 text-base" style={{ color: textColor }}><span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }}/>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {project.takeaway && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.takeaway}</h3>
          <div className="rounded-2xl p-6" style={glassStyle}><p className="text-base md:text-lg italic" style={{ color: textColor }}>{project.takeaway}</p></div>
        </div>
      )}
      {project.tools && (
        <div className="mb-10">
          <h3 className="font-medium tracking-wide text-2xl md:text-3xl mb-4 pb-2" style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}>{uiTexts.tools}</h3>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool: any, idx: number) => (
              <span key={idx} className="px-4 py-2 rounded-xl text-sm font-semibold" style={glassStyle}><span style={{ color: accentColor }}>{tool}</span></span>
            ))}
          </div>
        </div>
      )}
      {project.prototypeLink && (
        <div className="mt-4 mb-8">
          <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xl transition-all hover:scale-105" style={{ ...glassStyle, color: accentColor }}>
            <ExternalLink size={20} /> {uiTexts.liveLink}
          </a>
        </div>
      )}
    </div>
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

          {/* Filter tabs */}
          <div className="flex gap-3 flex-wrap bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {internalCategories.map((cat) => (
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
                {cat === "All" ? tUI.all : cat} {/* 🌟 动态 All / 全部 */}
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
            {filteredProjects.map((project: any) => (
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