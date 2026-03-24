import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Modal } from "./Modal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../../LanguageContext"; // 🌟
import { translations } from "../../translations";   // 🌟

interface NewsSectionProps {
  darkMode: boolean;
}

// ==========================================
// 详情页内部组件 (处理双语的弹窗内容)
// ==========================================
function ProjectDetailViewMerged({ project, darkMode, onBack, uiTexts }: any) {
  const headingColor = darkMode ? "#fffa74" : "#503282";
  const textColor = darkMode ? "rgba(255, 255, 255, 0.85)" : "#333";
  const subtextColor = darkMode ? "rgba(255, 255, 255, 0.6)" : "#666";
  const accentColor = darkMode ? "#fffa74" : "#503282";
  const dividerColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(80, 50, 130, 0.15)";
  const glassStyle = { backgroundColor: "rgba(72, 44, 121, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)" };

  return (
    <div className="flex flex-col gap-0 font-['Outfit',sans-serif]">
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
// News 轮播主组件
// ==========================================
export function NewsSection({ darkMode }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState<any | null>(null);

  // 🌟 读取当前语言对应的文案
  const { lang } = useLanguage();
  const tUI = translations[lang].newsUI;
  const tDetail = translations[lang].detailUI;
  
  // 🌟 神奇的数据合并：用 newsOverview 里的 projectId 去项目中找对应的图片和详情数据
  const newsItems = translations[lang].newsOverview.map((overview) => {
    const matchedProject = translations[lang].projectsData.find((p) => p.id === overview.projectId);
    return {
      ...overview,
      image: matchedProject?.image,   // 自动继承项目主图
      detail: matchedProject?.detail, // 自动继承项目详情
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [newsItems.length]); // 确保长度变化时重置

  // 防止初次渲染数据为空崩溃
  if (!newsItems.length) return null;

  return (
    <section
      id="news"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: darkMode ? "#fcf896" : "#f5f0ff" }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-['Jaro',sans-serif] text-7xl md:text-8xl mb-12 text-center transition-colors duration-500"
        style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
      >
        {tUI.title}
      </motion.h2>

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
            <div className="flex flex-col">
              
              <div 
                className="relative w-full bg-[#050505] flex justify-center items-center overflow-hidden group cursor-pointer" 
                onClick={() => setSelectedNews(newsItems[currentIndex])}
              >
                <ImageWithFallback
                  src={newsItems[currentIndex].image as string}
                  alt={newsItems[currentIndex].title}
                  className="w-full h-auto max-h-[450px] md:max-h-[550px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
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
                      {tUI.visitLink}
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
                    {tUI.viewMore} 
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
          <path d="M48.7415 0L58.7146 26.9521L85.6668 36.9253L58.7146 46.8985L48.7415 73.8507L38.7683 46.8985L11.8161 36.9253L38.7683 26.9521L48.7415 0Z" fill={darkMode ? "#765CA0" : "#c4a8e8"} />
        </svg>
      </motion.div>

      <Modal
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        title={selectedNews?.title || ""}
        darkMode={darkMode}
      >
        {selectedNews && (
          <ProjectDetailViewMerged
            project={selectedNews.detail}
            darkMode={darkMode}
            onBack={() => setSelectedNews(null)}
            uiTexts={tDetail}
          />
        )}
      </Modal>
    </section>
  );
}