import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../LanguageContext"; // 🌟
import { translations } from "../../translations";   // 🌟

interface ContactSectionProps {
  darkMode: boolean;
}

export function ContactSection({ darkMode }: ContactSectionProps) {
  // 🌟 读取动态翻译
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#3b1e68" : "#f5f0ff" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[180%] h-[70%] rounded-[50%] transition-colors duration-500"
        style={{ backgroundColor: darkMode ? "#fcf896" : "#ede4f7", zIndex: 0 }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <svg viewBox="0 0 60 60" fill="none" width={60} height={60}>
            <path
              d="M36.1592 22.4316L36.5576 23.4424L37.5684 23.8408L53.1865 30L37.5684 36.1592L36.5576 36.5576L36.1592 37.5684L30 53.1865L23.8408 37.5684L23.4424 36.5576L22.4316 36.1592L6.8125 30L22.4316 23.8408L23.4424 23.4424L23.8408 22.4316L30 6.8125L36.1592 22.4316Z"
              stroke={darkMode ? "#503282" : "#503282"}
              strokeWidth="4"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Jaro',sans-serif] text-7xl md:text-9xl mb-16 transition-colors duration-500"
          style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
        >
          {t.title}
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[40px] p-8 md:p-16 transition-colors duration-500 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: darkMode ? "rgba(80, 50, 130, 0.95)" : "rgba(80, 50, 130, 0.9)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-5 p-6 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3" style={{ backgroundColor: "rgba(255, 250, 116, 0.15)", border: "1px solid rgba(255, 250, 116, 0.3)" }}>
                <Mail size={36} color="#fffa74" />
              </div>
              <h3 className="font-['Jaro',sans-serif] text-3xl" style={{ color: "#fffa74" }}>{t.email}</h3>
              <a href="mailto:sy4234@nyu.edu" className="text-lg font-medium hover:text-white transition-colors" style={{ color: "#94c4f5" }}>sy4234@nyu.edu</a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-5 p-6 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3" style={{ backgroundColor: "rgba(255, 250, 116, 0.15)", border: "1px solid rgba(255, 250, 116, 0.3)" }}>
                <Phone size={36} color="#fffa74" />
              </div>
              <h3 className="font-['Jaro',sans-serif] text-3xl" style={{ color: "#fffa74" }}>{t.phone}</h3>
              <a href="tel:+19291234125" className="text-lg font-medium hover:text-white transition-colors" style={{ color: "#94c4f5" }}>(929) 619-4125</a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-5 p-6 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3" style={{ backgroundColor: "rgba(255, 250, 116, 0.15)", border: "1px solid rgba(255, 250, 116, 0.3)" }}>
                <Linkedin size={36} color="#fffa74" />
              </div>
              <h3 className="font-['Jaro',sans-serif] text-3xl" style={{ color: "#fffa74" }}>{t.linkedin}</h3>
              <a href="https://www.linkedin.com/in/aspen-yang-cusp" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-white transition-colors" style={{ color: "#94c4f5" }}>Aspen Yang</a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center mt-24 pb-8">
        <p className="font-['Jaro',sans-serif] text-lg opacity-60 tracking-wider" style={{ color: darkMode ? "#fffa74" : "#503282" }}>
          {t.footer}
        </p>
      </div>
    </section>
  );
}