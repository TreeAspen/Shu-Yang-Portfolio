import React, { useEffect, useRef, useState, useId } from "react";
// ✅ 必须保留你原有的天际线动画组件导入
import { AnimatedSkyline } from "./AnimatedSkyline";

interface HeroSectionProps {
  // ✅ 保留你原有的 darkMode 属性
  darkMode: boolean;
}

// ==========================================
// A. 丝滑拖尾鼠标组件 (支持日夜间颜色切换，外圈归位更快)
// ==========================================
function SmoothLagCursor({ darkMode }: { darkMode: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circle = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;
    const animateCursor = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.35;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.35;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(calc(${circle.current.x}px - 50%), calc(${circle.current.y}px - 50%))`;
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
  const circleHoverBg = darkMode ? "bg-white/10" : "bg-[#7b2cbf]/10";

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <div 
        ref={dotRef} 
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[10000] will-change-transform ${cursorColor}`} 
      />
      
      <div 
        ref={circleRef} 
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform transition-all duration-300 ${
          isHovered 
            ? `w-[60px] h-[60px] border-transparent ${circleHoverBg}` 
            : `w-[40px] h-[40px] border ${circleNormalBorder}`
        }`} 
      />
    </>
  );
}

// ==========================================
// B. HeroSection 主体组件 (全面优化负荷版)
// ==========================================
export function HeroSection({ darkMode }: HeroSectionProps) {
  // 生成唯一的噪声滤镜 ID
  const noiseFilterId = useId();

  // ✅ 动态定义两套光圈颜色
  const blobColors = {
    blob1: darkMode ? "#162f81" : "#ff9a9e", 
    blob2: darkMode ? "#35327d" : "#a18cd1", 
    blob3: darkMode ? "#613f93" : "#fbc2eb", 
    blob4: darkMode ? "#2b555c" : "#8fd3f4", 
  };

  // ✅ 原有的水晶玻璃材质参数定义 (这里只应用在文字盒子上，不卡顿)
  const getCrystalGlassStyle = (isDark: boolean) => ({
    backdropFilter: "blur(3px) saturate(130%)",
    WebkitBackdropFilter: "blur(3px) saturate(130%)",
    background: isDark
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.01) 20%, rgba(255, 255, 255, 0) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.02) 25%, rgba(255, 255, 255, 0) 100%)",
    borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid rgba(255, 255, 255, 0.9)",
    borderLeft: isDark ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.6)",
    borderRight: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(255, 255, 255, 0.1)",
    borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: isDark
      ? `inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.4), inset 2px 0 4px rgba(255, 100, 100, 0.03), inset -2px 0 4px rgba(100, 100, 255, 0.03), 0 32px 64px -16px rgba(0, 0, 0, 0.4)`
      : `inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8), inset 2px 0 4px rgba(255, 100, 100, 0.05), inset -2px 0 4px rgba(100, 100, 255, 0.05), 0 32px 64px -16px rgba(0, 0, 0, 0.15)`,
  });

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden transition-colors duration-700 font-['Inter',sans-serif]"
      // 底色基础
      style={{ backgroundColor: darkMode ? "#1a0b30" : "#f5f0ff" }}
    >
      {/* 1. 传入 darkMode 控制鼠标颜色 */}
      <SmoothLagCursor darkMode={darkMode} />

      {/* 2. 注入动画 CSS (保留 animation 提升流畅感) */}
      <style>{`
        @keyframes fastFloat {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(8vw, 6vh) rotate(180deg) scale(1.1); }
          100% { transform: translate(-5vw, 8vh) rotate(360deg) scale(1); }
        }
        .blob-anim-fast { 
          animation: fastFloat 12s infinite ease-in-out alternate; 
          will-change: transform; 
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
      `}</style>

      {/* 3. 🔥 核心优化：优化 SVG 噪点滤镜定义 */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={noiseFilterId}>
            {/* 🔥 将 numOctaves 从 10 降低到 2。这将性能直接提升数倍！ */}
            {/* 噪点颗粒感依然存在，但计算量极小。 */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.5" /* 保持噪点密度 */
              numOctaves="2" 
              stitchTiles="stitch" 
            />
          </filter>
        </defs>
      </svg>

      {/* 4. 🔥 核心优化：重新调整后的光圈色块层 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700">
        
        {/* 🔥 核心动作：将模糊从 60px 降低到 40px，并将 z-index 设为 -1， */}
        {/* 让它们不那么弥散，并确保在噪点层之下，节省绘制成本。 */}
        
        <div 
          className="absolute w-[25vw] h-[25vw] blur-[40px] opacity-80 top-[15%] left-[20%] blob-anim-fast transition-colors duration-700 -z-1" 
          style={{ backgroundColor: blobColors.blob1, animationDelay: "-3s" }} 
        />
        <div 
          className="absolute w-[30vw] h-[30vw] blur-[40px] opacity-80 bottom-[10%] left-[40%] blob-anim-fast transition-colors duration-700 -z-1" 
          style={{ backgroundColor: blobColors.blob2, animationDuration: "15s" }} 
        />
        <div 
          className="absolute w-[28vw] h-[28vw] blur-[40px] opacity-80 top-[40%] right-[10%] blob-anim-fast transition-colors duration-700 -z-1" 
          style={{ backgroundColor: blobColors.blob3, animationDuration: "14s", animationDelay: "-7s" }} 
        />
        <div 
          className="absolute w-[22vw] h-[22vw] blur-[40px] opacity-80 top-[60%] left-[10%] blob-anim-fast transition-colors duration-700 -z-1" 
          style={{ backgroundColor: blobColors.blob4, animationDuration: "18s" }} 
        />
      </div>

      {/* 5. 真实噪点渲染层 */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{ filter: `url(#${noiseFilterId})`, mixBlendMode: "soft-light" }}
      />

      {/* 6. 🔥 核心优化：彻底删除全屏毛玻璃遮罩层 (Layer 6) */}
      {/* 这个删除将带来巨大的性能飞跃。不再模糊文字、塔尖和月亮。 */}

      {/* 7. ✅ 你的大月亮 (已将尺寸缩小一半) */}
      <div
        className="absolute rounded-full transition-all duration-700 z-1" 
        style={{
          width: "min(240px, 20vw)",
          height: "min(240px, 20vw)",
          top: "15%",
          // right: "-2%", // 旧位置：靠右外侧
          right: "10%",    // 🔥 新位置：向左靠拢一点
          backgroundColor: darkMode ? "#fffa74" : "#ffcc00",
          boxShadow: darkMode
            ? "0 0 100px rgba(255, 250, 116, 0.3)"
            : "0 0 100px rgba(255, 204, 0, 0.4)",
        }}
      />

      {/* 8. ✅ 你的天际线组件 (放在噪点和遮罩之上的 z-2) */}
      <div className="absolute inset-0 z-2 pointer-events-none">
         <AnimatedSkyline darkMode={darkMode} />
      </div>

      {/* 9. ✅ 你的前景文字内容 */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16 pointer-events-none">
        
        {/* ✅ 文字盒子继续保持水晶玻璃质感 */}
        <div
          className="rounded-[32px] px-10 md:px-16 py-6 md:py-8 mb-5 inline-block self-start transition-all duration-500 overflow-hidden pointer-events-auto"
          style={getCrystalGlassStyle(darkMode)}
        >
          <h1
            className="font-['Jaro',sans-serif] text-6xl md:text-8xl lg:text-[110px] whitespace-nowrap transition-colors duration-500"
            style={{
              color: darkMode ? "#fffa74" : "#4A2B6A",
              lineHeight: 1.1,
              opacity: 0.9,
              /* 🔥 新增：在强噪点和非全屏模糊背景下，增加投影增强文字清晰度 */
              textShadow: "0 4px 12px rgba(0,0,0,0.5)"
            }}
          >
            Shu Yang
          </h1>
        </div>

        <div
          className="rounded-[32px] px-8 md:px-12 py-3 md:py-4 inline-block self-start transition-all duration-500 overflow-hidden pointer-events-auto"
          style={{
            ...getCrystalGlassStyle(darkMode),
            borderRightColor: "transparent", 
            WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            width: "max-content",
          }}
        >
          <p
            className="font-['Jaro',sans-serif] text-2xl md:text-3xl lg:text-4xl whitespace-nowrap transition-colors duration-500"
            style={{
              color: darkMode ? "#fffa74" : "#4A2B6A",
              paddingRight: "6rem",
              opacity: 0.9,
              /* 🔥 新增：副标题增加投影增强清晰度 */
              textShadow: "0 2px 8px rgba(0,0,0,0.4)"
            }}
          >
            Data Science x Visual Design | NYU CUSP
          </p>
        </div>
      </div>
    </section>
  );
}