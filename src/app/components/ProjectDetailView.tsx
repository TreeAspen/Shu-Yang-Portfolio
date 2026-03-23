import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Home, ClipboardList, Sparkles, GitBranch, DoorOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ProjectDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  background?: string;
  goal?: string;
  process?: {
    description: string;
    features?: { title: string; desc: string }[];
  };
  userFlow?: { step: string; desc: string }[];
  infoHierarchy?: { level: string; items: string[] }[];
  accomplishments?: string[];
  processImage?: string;
  processImageCaption?: string;
  resultImage?: string;
  resultImageCaption?: string;
  takeaway?: string;
  prototypeLink?: string;
  tools?: string[];
  category?: string;
}

interface ProjectDetailViewProps {
  project: ProjectDetail;
  darkMode: boolean;
  onBack: () => void;
}

const flowIcons = [Home, ClipboardList, Sparkles, GitBranch, DoorOpen];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProjectDetailView({ project, darkMode, onBack }: ProjectDetailViewProps) {
  const headingColor = darkMode ? "#fffa74" : "#503282";
  const textColor = darkMode ? "rgba(255, 255, 255, 0.85)" : "#333";
  const subtextColor = darkMode ? "rgba(255, 255, 255, 0.6)" : "#666";
  const accentColor = darkMode ? "#fffa74" : "#503282";
  const dividerColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(80, 50, 130, 0.15)";

  const glassStyle = {
    backgroundColor: "rgba(72, 44, 121, 0.1)",
    backdropFilter: "blur(12px) saturate(150%)",
    WebkitBackdropFilter: "blur(12px) saturate(150%)",
    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onBack}
        className="inline-flex items-center gap-2 font-['Jaro',sans-serif] text-xl mb-6 cursor-pointer hover:opacity-70 transition-opacity self-start"
        style={{ color: accentColor }}
      >
        <ArrowLeft size={20} />
        Back
      </motion.button>

      {/* Title + Subtitle */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <h1
          className="font-['Jaro',sans-serif] text-4xl md:text-5xl lg:text-6xl mb-3"
          style={{ color: headingColor }}
        >
          {project.title}
        </h1>
        <p className="text-lg mb-2" style={{ color: subtextColor }}>
          {project.subtitle}
        </p>
        {project.category && (
          <span
            className="inline-block font-['Jaro',sans-serif] text-sm px-5 py-1.5 rounded-full border backdrop-blur-md mb-6"
            style={{
              backgroundColor: "rgba(80, 50, 130, 0.9)",
              borderColor: "#94c4f5",
              color: "#94c4f5",
            }}
          >
            {project.category}
          </span>
        )}
      </motion.div>

      {/* Hero Image */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="w-full rounded-2xl overflow-hidden mb-10 mt-4 shadow-2xl"
      >
        <ImageWithFallback
          src={project.heroImage}
          alt={project.title}
          className="w-full h-auto block object-cover"
        />
      </motion.div>

      {/* Background */}
      {project.background && (
        <SectionBlock title="Background" headingColor={headingColor} dividerColor={dividerColor} delay={0.15}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>
            {project.background}
          </p>
        </SectionBlock>
      )}

      {/* Goal */}
      {project.goal && (
        <SectionBlock title="Goal" headingColor={headingColor} dividerColor={dividerColor} delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: textColor }}>
            {project.goal}
          </p>
        </SectionBlock>
      )}

      {/* Process & Design Strategy */}
      {project.process && (
        <SectionBlock title="Process & Design Strategy" headingColor={headingColor} dividerColor={dividerColor} delay={0.25}>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: textColor }}>
            {project.process.description}
          </p>
          {project.process.features && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.process.features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="rounded-2xl p-5"
                  style={glassStyle}
                >
                  <h4 className="font-['Jaro',sans-serif] text-xl mb-2" style={{ color: accentColor }}>
                    {f.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: textColor }}>
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </SectionBlock>
      )}

      {/* Process Image */}
      {project.processImage && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-3">
            <ImageWithFallback
              src={project.processImage}
              alt="Process illustration"
              className="w-full h-auto block object-cover"
            />
          </div>
          {project.processImageCaption && (
            <p className="text-center text-sm mt-3 opacity-60" style={{ color: textColor }}>
              {project.processImageCaption}
            </p>
          )}
        </motion.div>
      )}

      {/* 🌟 修改点：如果有 userFlow 或者 infoHierarchy，才渲染这个 Architecture 模块 */}
      {(project.userFlow || project.infoHierarchy) && (
        <SectionBlock title="In-Depth Architecture" headingColor={headingColor} dividerColor={dividerColor} delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* User Flow 只有在有数据时才渲染 */}
            {project.userFlow && (
              <div>
                <h4 className="font-['Jaro',sans-serif] text-2xl mb-6" style={{ color: accentColor }}>
                  User Flow
                </h4>
                <div className="relative pl-10">
                  <div
                    className="absolute left-[14px] top-2 bottom-2 w-[2px]"
                    style={{ backgroundColor: dividerColor }}
                  />
                  <div className="flex flex-col gap-6">
                    {project.userFlow.map((step, i) => {
                      const Icon = flowIcons[i % flowIcons.length];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="relative"
                        >
                          <div
                            className="absolute -left-10 top-0 w-7 h-7 rounded-full flex items-center justify-center z-10"
                            style={{ backgroundColor: accentColor }}
                          >
                            <Icon size={14} color={darkMode ? "#1a1a2e" : "#fff"} />
                          </div>
                          <div className="rounded-xl p-4" style={glassStyle}>
                            <h5 className="font-['Jaro',sans-serif] text-lg mb-1" style={{ color: headingColor }}>
                              {step.step}
                            </h5>
                            <p className="text-sm" style={{ color: textColor }}>
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Information Hierarchy 只有在有数据时才渲染 */}
            {project.infoHierarchy && (
              <div>
                <h4 className="font-['Jaro',sans-serif] text-2xl mb-6" style={{ color: accentColor }}>
                  Information Hierarchy
                </h4>
                <div className="flex flex-col gap-4">
                  {project.infoHierarchy.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl p-4"
                      style={glassStyle}
                    >
                      <h5 className="font-['Jaro',sans-serif] text-lg mb-3" style={{ color: accentColor }}>
                        {level.level}
                      </h5>
                      <div className="flex flex-col gap-1 pl-4" style={{ borderLeft: `2px solid ${dividerColor}` }}>
                        {level.items.map((item, j) => (
                          <span key={j} className="text-sm py-0.5" style={{ color: textColor }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionBlock>
      )}

      {/* Accomplishments */}
      {project.accomplishments && (
        <SectionBlock title="Accomplishments" headingColor={headingColor} dividerColor={dividerColor} delay={0.35}>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {project.accomplishments.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-base leading-relaxed"
                style={{ color: textColor }}
              >
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </SectionBlock>
      )}

      {/* Result Image */}
      {project.resultImage && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-3">
            <ImageWithFallback
              src={project.resultImage}
              alt="Result"
              className="w-full h-auto block object-cover"
            />
          </div>
          {project.resultImageCaption && (
            <p className="text-center text-sm mt-3 opacity-60" style={{ color: textColor }}>
              {project.resultImageCaption}
            </p>
          )}
        </motion.div>
      )}

      {/* Takeaway */}
      {project.takeaway && (
        <SectionBlock title="Takeaway" headingColor={headingColor} dividerColor={dividerColor} delay={0.4}>
          <div className="rounded-2xl p-6" style={glassStyle}>
            <p className="text-base md:text-lg leading-relaxed italic" style={{ color: textColor }}>
              {project.takeaway}
            </p>
          </div>
        </SectionBlock>
      )}

      {/* Tools & Technologies */}
      {project.tools && (
        <SectionBlock title="Technologies & Tools" headingColor={headingColor} dividerColor={dividerColor} delay={0.45}>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-semibold"
                style={glassStyle}
              >
                <span style={{ color: accentColor }}>{tool}</span>
              </span>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* Prototype Link */}
      {project.prototypeLink && (
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 mb-8"
        >
          <a
            href={project.prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-['Jaro',sans-serif] text-xl transition-all hover:scale-105 cursor-pointer no-underline"
            style={{
              ...glassStyle,
              color: accentColor,
            }}
          >
            <ExternalLink size={20} />
            View Detail / Prototype
          </a>
        </motion.div>
      )}
    </div>
  );
}

function SectionBlock({
  title,
  headingColor,
  dividerColor,
  delay = 0,
  children,
}: {
  title: string;
  headingColor: string;
  dividerColor: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-10"
    >
      <h3
        className="font-['Jaro',sans-serif] text-2xl md:text-3xl mb-4 pb-2"
        style={{ color: headingColor, borderBottom: `1px solid ${dividerColor}` }}
      >
        {title}
      </h3>
      {children}
    </motion.div>
  );
}