import React, { useEffect, useRef, useId } from "react";
// ✅ 必须保留你原有的天际线动画组件导入
import { AnimatedSkyline } from "./AnimatedSkyline";

interface HeroSectionProps {
  darkMode: boolean;
}

// ==========================================
// A. 丝滑拖尾鼠标组件
// ==========================================
function SmoothLagCursor({ darkMode }: { darkMode: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circle = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input")) {
        circleRef.current?.classList.add("cursor-hovered");
      } else {
        circleRef.current?.classList.remove("cursor-hovered");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animationFrameId: number;
    const animateCursor = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.35;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.35;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(calc(${circle.current.x}px - 50%), calc(${circle.current.y}px - 50%), 0)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const cursorColor = darkMode ? "bg-white" : "bg-[#7b2cbf]";
  const circleNormalBorder = darkMode ? "border-white/50" : "border-[#7b2cbf]/50";

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        body { font-family: 'Outfit', sans-serif; }
        .cursor-circle {
          width: 40px;
          height: 40px;
          transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        .cursor-circle.cursor-hovered {
          width: 60px;
          height: 60px;
          background-color: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(123, 44, 191, 0.1)'};
          border-color: transparent !important;
        }
      `}</style>
      <div ref={dotRef} className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[10000] will-change-transform ${cursorColor}`} />
      <div ref={circleRef} className={`cursor-circle fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform border ${circleNormalBorder}`} />
    </>
  );
}

// ==========================================
// B. HeroSection 主体组件
// ==========================================
export function HeroSection({ darkMode }: HeroSectionProps) {
  const noiseFilterId = useId();

  const blobColors = {
    blob1: darkMode ? "#162f81" : "#ff9a9e", 
    blob2: darkMode ? "#35327d" : "#a18cd1", 
    blob3: darkMode ? "#613f93" : "#fbc2eb", 
    blob4: darkMode ? "#2b555c" : "#8fd3f4", 
  };

  const getCrystalGlassStyle = (isDark: boolean) => ({
    backdropFilter: "blur(12px) saturate(130%)",
    WebkitBackdropFilter: "blur(12px) saturate(130%)",
    background: isDark
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 20%, rgba(255, 255, 255, 0) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0) 100%)",
    borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.8)",
    borderLeft: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.5)",
    borderRight: "1px solid transparent",
    borderBottom: "1px solid transparent",
    boxShadow: isDark
      ? `0 32px 64px -16px rgba(0, 0, 0, 0.6)`
      : `0 32px 64px -16px rgba(0, 0, 0, 0.15)`,
  });

  const textColor = darkMode ? "#fffa74" : "#4A2B6A";

  // ✅ 预定义 SVG 图标数据 (无外部依赖)
  const linksData = [
    { 
      name: "Academic Bio", 
      link: "https://utoplab.net/#/team/shu-aspen-yang",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/><path d="M4 21h16"/><path d="M12 3l8 4-8 4-8-4 8-4z"/><path d="M4 10.5v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6"/></svg>
    },
    { 
      name: "GitHub", 
      link: "https://github.com/TreeAspen",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    },
    { 
      name: "LinkedIn", 
      link: "https://www.linkedin.com/in/aspen-yang-cusp",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    },
    { 
      name: "Resume", 
      link: "https://docs.google.com/document/d/1i8S2MxwOtFBbK6ppSoIzBwBYljCYqNYn/edit?usp=sharing&ouid=112784057135088651858&rtpof=true&sd=true",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    },
    { 
      name: "Portfolio", 
      link: "https://drive.google.com/file/d/1DAONVxsh2Mp3mTr3vFtZjYLp2HMoIk28/view?usp=drivesdk",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    },
    { 
      name: "Gallery", 
      link: "#gallery", // ✅ 已经修改为内部锚点跳转
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden transition-colors duration-700 font-['Outfit',sans-serif] pb-24 md:pb-0 flex items-center"
      style={{ backgroundColor: darkMode ? "#1a0b30" : "#f5f0ff" }}
    >
      <SmoothLagCursor darkMode={darkMode} />

      <style>{`
        @keyframes fastFloat {
          0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(8vw, 6vh, 0) rotate(180deg) scale(1.1); }
          100% { transform: translate3d(-5vw, 8vh, 0) rotate(360deg) scale(1); }
        }
        .blob-anim-fast { 
          animation: fastFloat 12s infinite ease-in-out alternate; 
          will-change: transform; 
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        .glass-btn {
          transition: all 0.3s ease;
        }
        .glass-btn:hover {
          transform: translateY(-3px) scale(1.02);
          background: ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.9)'} !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* SVG 噪点滤镜 */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={noiseFilterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          </filter>
        </defs>
      </svg>

      {/* 背景光圈层 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700">
        <div className="absolute w-[25vw] h-[25vw] blur-[40px] opacity-80 top-[15%] left-[20%] blob-anim-fast -z-1" style={{ backgroundColor: blobColors.blob1, animationDelay: "-3s" }} />
        <div className="absolute w-[30vw] h-[30vw] blur-[40px] opacity-80 bottom-[10%] left-[40%] blob-anim-fast -z-1" style={{ backgroundColor: blobColors.blob2, animationDuration: "15s" }} />
        <div className="absolute w-[28vw] h-[28vw] blur-[40px] opacity-80 top-[40%] right-[10%] blob-anim-fast -z-1" style={{ backgroundColor: blobColors.blob3, animationDuration: "14s", animationDelay: "-7s" }} />
        <div className="absolute w-[22vw] h-[22vw] blur-[40px] opacity-80 top-[60%] left-[10%] blob-anim-fast -z-1" style={{ backgroundColor: blobColors.blob4, animationDuration: "18s" }} />
      </div>

      {/* 噪点覆盖层 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ filter: `url(#${noiseFilterId})`, mixBlendMode: "soft-light" }} />

      {/* 靠左的小月亮 */}
      <div className="absolute rounded-full transition-all duration-700 z-1" 
        style={{
          width: "min(240px, 20vw)", height: "min(240px, 20vw)",
          top: "15%", right: "10%",
          backgroundColor: darkMode ? "#fffa74" : "#ffcc00",
          boxShadow: darkMode ? "0 0 100px rgba(255, 250, 116, 0.3)" : "0 0 100px rgba(255, 204, 0, 0.4)",
        }}
      />

      {/* 天际线 */}
      <div className="absolute inset-0 z-2 pointer-events-none">
         <AnimatedSkyline darkMode={darkMode} />
      </div>

      {/* 前景文字与按钮内容 */}
      <div className="relative z-10 flex flex-col justify-center w-full max-w-7xl px-8 md:px-16 lg:px-24 pointer-events-none">
        
        {/* 气泡 1: 名字 */}
        <div
          className="rounded-[32px] px-10 md:px-16 py-4 md:py-6 mb-4 inline-block self-start transition-all duration-500 overflow-hidden pointer-events-auto"
          style={getCrystalGlassStyle(darkMode)}
        >
          <h1
            className="font-['Outfit',sans-serif] font-light tracking-wide text-5xl md:text-7xl lg:text-[90px] whitespace-nowrap transition-colors duration-500"
            style={{
              color: textColor,
              lineHeight: 1.1,
              opacity: 0.9,
              textShadow: "0 4px 12px rgba(0,0,0,0.5)"
            }}
          >
            Shu Yang
          </h1>
        </div>

        {/* 气泡 2: 头衔 */}
        <div
          className="rounded-[32px] px-8 md:px-12 py-3 md:py-4 mb-8 inline-block self-start transition-all duration-500 overflow-hidden pointer-events-auto"
          style={{
            ...getCrystalGlassStyle(darkMode),
            borderRightColor: "transparent", 
            WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            width: "max-content",
            maxWidth: "90vw"
          }}
        >
          <p
            className="font-['Outfit',sans-serif] font-light tracking-wide text-xl md:text-2xl lg:text-3xl whitespace-nowrap transition-colors duration-500"
            style={{
              color: textColor,
              paddingRight: "6rem",
              opacity: 0.9,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)"
            }}
          >
            Data Science x Visual Design | NYU CUSP
          </p>
        </div>

        {/* 按钮群 (Links) */}
        <div className="flex flex-wrap gap-4 pointer-events-auto self-start z-20 relative mt-2">
          {linksData.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target={item.link.startsWith("#") ? "_self" : "_blank"} // 如果是锚点则在当前页跳转
              rel="noreferrer"
              className="glass-btn flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-medium tracking-wide backdrop-blur-md"
              style={{
                background: darkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.5)",
                border: darkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.8)",
                color: textColor,
              }}
            >
              <span className="opacity-90 flex items-center justify-center">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}