import { useState, useEffect } from "react";
// 🌟 关键：因为 App 在 src 下，要去 app/components 里面找组件
import { Navbar } from "./app/components/Navbar";
import { HeroSection } from "./app/components/HeroSection";
import { NewsSection } from "./app/components/NewsSection";
import { ProjectsSection } from "./app/components/ProjectsSection";
import { SkillsSection } from "./app/components/SkillsSection";
import { TimelineSection } from "./app/components/TimelineSection";
import { Gallery } from "./app/components/Gallery"; 
import { ContactSection } from "./app/components/ContactSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  // 使用 hash 状态来判断当前在哪个页面
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    // 监听 URL hash 变化
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      // 切换页面时自动回到顶部
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    };
    
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // 判断当前是否在画廊页面
  const isGalleryPage = currentPath === "#gallery";

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar 
        darkMode={darkMode} 
        onToggleTheme={() => setDarkMode(!darkMode)} 
        isGalleryPage={isGalleryPage} 
      />
      
      {isGalleryPage ? (
        /* 📸 如果 URL 是 #gallery，只渲染画廊组件 */
        <div className="pt-24 min-h-screen">
          <Gallery darkMode={darkMode} />
        </div>
      ) : (
        /* 🏠 否则，渲染首页的所有内容 */
        <>
          <HeroSection darkMode={darkMode} />
          <NewsSection darkMode={darkMode} />
          <ProjectsSection darkMode={darkMode} />
          <SkillsSection darkMode={darkMode} />
          <TimelineSection darkMode={darkMode} />
          <ContactSection darkMode={darkMode} />
        </>
      )}
    </div>
  );
}