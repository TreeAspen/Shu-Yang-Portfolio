import { Palette, Code, Users } from "lucide-react";
import { motion } from "motion/react";

interface SkillsSectionProps {
  darkMode: boolean;
}

const skills = [
  {
    icon: Palette,
    title: "Design Expertise",
    description:
      "UI/UX Design, Visual Design, Interaction Design, Prototyping with Figma & Adobe Suite",
  },
  {
    icon: Code,
    title: "Technical Proficiency",
    description:
      "React, TypeScript, Python, GIS Tools, Data Visualization, Web Development",
  },
  {
    icon: Users,
    title: "User Research & Analytics",
    description:
      "User Interviews, Usability Testing, A/B Testing, Data Analysis, Survey Design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export function SkillsSection({ darkMode }: SkillsSectionProps) {
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
          className="font-['Jaro',sans-serif] text-7xl md:text-8xl mb-16 text-center transition-colors duration-500"
          style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
        >
          Skills
        </motion.h2>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {skills.map((skill) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              key={skill.title}
              className="rounded-3xl p-8 text-center transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
              style={{
                backgroundColor: "rgba(72, 44, 121, 0.1)",
                backdropFilter: "blur(12px) saturate(150%)",
                WebkitBackdropFilter: "blur(12px) saturate(150%)",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: darkMode ? "#503282" : "#503282",
                  }}
                >
                  <skill.icon size={40} color="#fffa74" />
                </motion.div>
              </div>
              <h3
                className="font-['Jaro',sans-serif] text-3xl mb-4"
                style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
              >
                {skill.title}
              </h3>
              <p
                className="text-base opacity-80 leading-relaxed font-medium"
                style={{ color: darkMode ? "#4b2e7d" : "#333" }}
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}