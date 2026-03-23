import React, { useState } from "react";

// ✅ 修改了这里：用 ../../ 退回两级目录到 src，再进入 assets
import img0172 from "../../assets/gallery/IMG_0172.JPG";
import img0173 from "../../assets/gallery/IMG_0173.JPG";
import img0174 from "../../assets/gallery/IMG_0174.JPG";
import img0175 from "../../assets/gallery/IMG_0175.JPG";
import img0176 from "../../assets/gallery/IMG_0176.JPG";
import img0177 from "../../assets/gallery/IMG_0177.JPG";
import img0178 from "../../assets/gallery/IMG_0178.JPG";
import img0180 from "../../assets/gallery/IMG_0180.JPG";
import img0181 from "../../assets/gallery/IMG_0181.JPG";
import img0182 from "../../assets/gallery/IMG_0182.JPG";

interface GalleryProps {
  darkMode: boolean;
}

export function Gallery({ darkMode }: GalleryProps) {
  // 将导入的图片放进数组中便于循环渲染
  const images = [
    { id: "0172", src: img0172, alt: "Gallery Image 1" },
    { id: "0173", src: img0173, alt: "Gallery Image 2" },
    { id: "0174", src: img0174, alt: "Gallery Image 3" },
    { id: "0175", src: img0175, alt: "Gallery Image 4" },
    { id: "0176", src: img0176, alt: "Gallery Image 5" },
    { id: "0177", src: img0177, alt: "Gallery Image 6" },
    { id: "0178", src: img0178, alt: "Gallery Image 7" },
    { id: "0180", src: img0180, alt: "Gallery Image 8" },
    { id: "0181", src: img0181, alt: "Gallery Image 9" },
    { id: "0182", src: img0182, alt: "Gallery Image 10" },
  ];

  const textColor = darkMode ? "text-[#fffa74]" : "text-[#4A2B6A]";
  const subTextColor = darkMode ? "text-white/70" : "text-gray-600";

  return (
    <section 
      id="gallery" 
      className="min-h-screen py-24 px-8 md:px-16 lg:px-24 transition-colors duration-700 font-['Outfit',sans-serif]"
      style={{ backgroundColor: darkMode ? "#1a0b30" : "#f5f0ff" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 头部标题区 */}
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-light tracking-wide mb-4 ${textColor}`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
            Visual Diary
          </h2>
          <p className={`text-lg font-light tracking-wide ${subTextColor}`}>
            A collection of moments and inspirations.
          </p>
        </div>

        {/* 响应式图片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((img) => (
            <div 
              key={img.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-[24px] cursor-pointer"
              style={{
                boxShadow: darkMode 
                  ? "0 10px 30px -10px rgba(0,0,0,0.5)" 
                  : "0 10px 30px -10px rgba(0,0,0,0.1)",
              }}
            >
              {/* 玻璃态遮罩 (Hover时显现) */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: darkMode 
                       ? "linear-gradient(to top, rgba(26, 11, 48, 0.8) 0%, transparent 50%)" 
                       : "linear-gradient(to top, rgba(74, 43, 106, 0.6) 0%, transparent 50%)"
                   }}
              />
              
              {/* 图片本体：带有平滑的悬浮放大效果 */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}