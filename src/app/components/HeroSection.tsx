import imgSkyline from "figma:asset/69581e308bd4521aa33991dfdf312478dc085c8e.png";

interface HeroSectionProps {
  darkMode: boolean;
}

export function HeroSection({ darkMode }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "#503282" : "#f5f0ff",
      }}
    >
      {/* NYC skyline background - covers entire section */}
      <img
        alt="NYC skyline"
        src={imgSkyline}
        className="absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-500"
        style={{
          height: "75%",
          objectFit: "cover",
          objectPosition: "center bottom",
          opacity: darkMode ? 1 : 0.15,
        }}
      />

      {/* Large yellow moon circle - right side */}
      <div
        className="absolute rounded-full transition-all duration-500"
        style={{
          width: "min(480px, 40vw)",
          height: "min(480px, 40vw)",
          top: "15%",
          right: "-2%",
          backgroundColor: darkMode ? "#fffa74" : "#ffcc00",
          boxShadow: darkMode
            ? "0 0 100px rgba(255, 250, 116, 0.3)"
            : "0 0 100px rgba(255, 204, 0, 0.4)",
        }}
      />

      {/* Main content - left aligned */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">
        {/* "Shu Yang" in rounded rectangle */}
        <div
          className="rounded-[32px] px-10 md:px-16 py-6 md:py-8 mb-5 inline-block self-start transition-colors duration-500"
          style={{
            backgroundColor: "rgba(72, 44, 121, 0.1)",
            backdropFilter: "blur(12px) saturate(150%)",
            WebkitBackdropFilter: "blur(12px) saturate(150%)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h1
            className="font-['Jaro',sans-serif] text-6xl md:text-8xl lg:text-[110px] whitespace-nowrap transition-colors duration-500"
            style={{
              color: darkMode ? "#fffa74" : "#503282",
              lineHeight: 1.1,
            }}
          >
            Shu Yang
          </h1>
        </div>

        {/* "UI/UI | NYU CUSP |" in rounded rectangle */}
        <div
          className="rounded-[32px] px-8 md:px-12 py-3 md:py-4 inline-block self-start transition-colors duration-500"
          style={{
            backgroundColor: "rgba(72, 44, 121, 0.1)",
            backdropFilter: "blur(12px) saturate(150%)",
            WebkitBackdropFilter: "blur(12px) saturate(150%)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p
            className="font-['Jaro',sans-serif] text-2xl md:text-3xl lg:text-4xl whitespace-nowrap transition-colors duration-500"
            style={{
              color: darkMode ? "#fffa74" : "#503282",
            }}
          >
            UI/UI | NYU CUSP |
          </p>
        </div>
      </div>
    </section>
  );
}