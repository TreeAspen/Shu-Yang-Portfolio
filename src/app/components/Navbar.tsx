import svgPaths from "../../imports/svg-o2q1nma4r5";
import { useLanguage } from "../../LanguageContext"; 
import { translations } from "../../translations";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  isGalleryPage?: boolean; // 🌟 接收当前是否在画廊页的状态
}

export function Navbar({ darkMode, onToggleTheme, isGalleryPage }: NavbarProps) {
  // 🌟 获取当前语言和切换函数
  const { lang, toggleLanguage } = useLanguage();
  const tNav = translations[lang].navbar;

  // 🌟 升级版的跳转逻辑，兼容单页滚动和多页（Hash）切换
  const scrollTo = (id: string) => {
    // 1. 如果点击的是 Gallery
    if (id === "gallery") { 
      window.location.hash = "gallery";
      return;
    }

    // 2. 如果当前在 Gallery 页面，但点击了首页的模块 (比如 Home, Project)
    if (isGalleryPage) {
      window.location.hash = ""; // 清空 hash 回到首页
      // 延迟 100 毫秒，等首页组件全部挂载出来后再滚动到对应位置
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // 3. 如果已经在首页，直接平滑滚动
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🌟 使用字典动态替换 label
  const navItems = [
    { label: tNav.home, target: "home" },
    { label: tNav.gallery, target: "gallery" }, 
    { label: tNav.project, target: "projects" },
    { label: tNav.contact, target: "contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 md:gap-4 w-[90%] md:w-auto justify-center">
      
      {/* 居中的导航栏药丸 */}
      <div
        className="flex items-center justify-center gap-5 md:gap-10 px-6 md:px-12 py-2.5 rounded-full shadow-lg transition-all duration-500 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full"
        style={{
          backgroundColor: darkMode ? "rgba(255, 250, 116, 0.95)" : "rgba(80, 50, 130, 0.95)",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            // 🌟 核心修改：增加 whitespace-nowrap 和 flex-shrink-0 保证中英文字体宽度自适应且绝不换行
            className="whitespace-nowrap flex-shrink-0 font-['Outfit',sans-serif] font-medium tracking-wide text-base md:text-xl transition-all cursor-pointer hover:scale-105 hover:opacity-70"
            style={{ color: darkMode ? "#1a1a2e" : "#fffa74" }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 右侧功能区：语言切换 + 黑白模式切换 */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        {/* 🌟 语言切换按钮 */}
        <button
          onClick={toggleLanguage}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 font-['Outfit',sans-serif] font-bold text-sm md:text-lg flex-shrink-0"
          style={{ 
            color: darkMode ? "#fffa74" : "#503282",
            backgroundColor: darkMode ? "rgba(255, 250, 116, 0.1)" : "rgba(80, 50, 130, 0.1)",
            border: `1px solid ${darkMode ? "rgba(255, 250, 116, 0.3)" : "rgba(80, 50, 130, 0.3)"}`
          }}
          aria-label="Toggle Language"
        >
          {tNav.lang}
        </button>

        {/* Crescent moon toggle */}
        <button
          onClick={onToggleTheme}
          className="cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center flex-shrink-0 w-8 md:w-auto"
          aria-label="Toggle theme"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 54.1969 65.2373"
            fill="none"
            className="w-7 h-8 md:w-[30px] md:h-[36px]"
          >
            <path
              d={svgPaths.p20257800}
              fill={darkMode ? "#fffa74" : "#503282"}
              className="transition-colors duration-500"
            />
          </svg>
        </button>
      </div>

    </nav>
  );
}