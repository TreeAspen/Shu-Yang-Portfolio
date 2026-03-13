import svgPaths from "../../imports/svg-o2q1nma4r5";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Gallery", target: "news" },
    { label: "Project", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <div
        className="flex items-center gap-10 px-12 py-2.5 rounded-full shadow-lg transition-colors duration-500"
        style={{
          backgroundColor: darkMode ? "#fffa74" : "#503282",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.target)}
            className="font-['Jaro',sans-serif] text-xl transition-colors cursor-pointer"
            style={{ color: darkMode ? "#1a1a2e" : "#fffa74" }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Crescent moon toggle */}
      <button
        onClick={onToggleTheme}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        <svg
          width="30"
          height="36"
          viewBox="0 0 54.1969 65.2373"
          fill="none"
        >
          <path
            d={svgPaths.p20257800}
            fill={darkMode ? "#fffa74" : "#503282"}
            className="transition-colors duration-500"
          />
        </svg>
      </button>
    </nav>
  );
}
