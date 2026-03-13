import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
      <HeroSection darkMode={darkMode} />
      <NewsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <TimelineSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </div>
  );
}
