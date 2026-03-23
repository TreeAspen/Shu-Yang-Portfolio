import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { TimelineSection } from "./components/TimelineSection";
// ✅ 引入刚刚写好的 Gallery 组件
import { Gallery } from "./components/Gallery"; 
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      // ✅ 加上这行 CSS 可以让所有的锚点跳转 (比如点击 Gallery 按钮) 变得丝滑平缓
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
      <HeroSection darkMode={darkMode} />
      <NewsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <TimelineSection darkMode={darkMode} />
      
      {/* ✅ 照片墙放在这里，紧贴着联系方式之前 */}
      <Gallery darkMode={darkMode} />
      
      <ContactSection darkMode={darkMode} />
    </div>
  );
}