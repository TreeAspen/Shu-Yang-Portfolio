import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { SparkleStars } from "./SparkleStars";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../translations";

interface ContactSectionProps {
  darkMode: boolean;
}

export function ContactSection({ darkMode }: ContactSectionProps) {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  // Same purple as the Timeline section above — eliminates the jarring band transition
  const sectionBg = darkMode ? "#503282" : "#ede4f7";
  const headingColor = darkMode ? "#fffa74" : "#503282";
  const labelColor = darkMode ? "#fffa74" : "#503282";
  const accentColor = darkMode ? "#fffa74" : "#503282";
  const valueColor = darkMode ? "#94c4f5" : "rgba(80, 50, 130, 0.75)";
  const dividerColor = darkMode ? "rgba(255, 250, 116, 0.18)" : "rgba(80, 50, 130, 0.18)";
  const footerColor = darkMode ? "#fffa74" : "#503282";

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: sectionBg }}
    >
      <SparkleStars darkMode={darkMode} count={20} intensity={darkMode ? 0.7 : 0.45} />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-6xl md:text-8xl mb-16 transition-colors duration-500 tracking-tight"
          style={{ color: headingColor }}
        >
          {t.title}
        </motion.h2>

        {/* Bare contact items — no card chrome, sitting directly on the section background */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6 relative"
        >
          {/* Hairline dividers — md+ only */}
          <span className="hidden md:block absolute left-1/3 top-4 bottom-4 w-px" style={{ backgroundColor: dividerColor }} />
          <span className="hidden md:block absolute left-2/3 top-4 bottom-4 w-px" style={{ backgroundColor: dividerColor }} />

          <motion.a
            href="mailto:sy4254@nyu.edu"
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 px-4 py-2"
          >
            <Mail size={28} strokeWidth={1.6} color={accentColor} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="block h-px w-8 mt-1" style={{ backgroundColor: dividerColor }} />
            <h3 className="font-display text-xl tracking-tight mt-1" style={{ color: labelColor }}>{t.email}</h3>
            <span className="font-mono-tech text-[13px] tracking-wide transition-colors group-hover:opacity-100" style={{ color: valueColor }}>sy4254@nyu.edu</span>
          </motion.a>

          <motion.a
            href="tel:+19296164129"
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 px-4 py-2"
          >
            <Phone size={28} strokeWidth={1.6} color={accentColor} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="block h-px w-8 mt-1" style={{ backgroundColor: dividerColor }} />
            <h3 className="font-display text-xl tracking-tight mt-1" style={{ color: labelColor }}>{t.phone}</h3>
            <span className="font-mono-tech text-[13px] tracking-wide transition-colors group-hover:opacity-100" style={{ color: valueColor }}>(929) 616-4129</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/aspen-yang-cusp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 px-4 py-2"
          >
            <Linkedin size={28} strokeWidth={1.6} color={accentColor} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="block h-px w-8 mt-1" style={{ backgroundColor: dividerColor }} />
            <h3 className="font-display text-xl tracking-tight mt-1" style={{ color: labelColor }}>{t.linkedin}</h3>
            <span className="font-mono-tech text-[13px] tracking-wide transition-colors group-hover:opacity-100" style={{ color: valueColor }}>Aspen Yang</span>
          </motion.a>
        </motion.div>
      </div>

      <div className="relative z-10 text-center mt-24 pb-8">
        <p className="font-mono-tech text-[11px] tracking-[0.3em] uppercase opacity-50" style={{ color: footerColor }}>
          {t.footer}
        </p>
      </div>
    </section>
  );
}
