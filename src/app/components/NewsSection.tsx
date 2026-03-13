import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgImage10 from "figma:asset/05d8edf434f108b9ff5c764b03d362fcd4b1597d.png";
import { Modal } from "./Modal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetailView, type ProjectDetail } from "./ProjectDetailView";

interface NewsSectionProps {
  darkMode: boolean;
}

const newsItems = [
  {
    id: 0,
    title: "Lab Website Design",
    description: "A comprehensive redesign of the NYU CUSP research lab website, focusing on accessibility, modern aesthetics, and user experience.",
    image: imgImage10,
    detail: {
      title: "Lab Website Design",
      subtitle: "Led the complete redesign of the NYU CUSP research lab website. My role was UI/UX Design and Frontend Development.",
      heroImage: imgImage10,
      category: "UI/UX",
      background: "The NYU Center for Urban Science and Progress (CUSP) needed a modern, accessible website to showcase ongoing research and attract prospective students. The existing site had poor navigation, outdated visual design, and failed WCAG accessibility standards. Initial user interviews with 15 academic staff and 20 prospective students revealed that 78% found the current site difficult to navigate, and critical research publications were buried under layers of menus.",
      goal: "To redesign the CUSP lab website with a focus on accessibility, intuitive navigation, and modern aesthetics — creating a digital experience that effectively communicates the lab's research impact and attracts top-tier graduate talent.",
      process: {
        description: "Our design strategy centered on a \"content-first\" approach. We conducted extensive card-sorting sessions and tree-testing with faculty and students to restructure the information architecture. The design process focused on three core pillars:",
        features: [
          { title: "Information Architecture", desc: "Restructured the sitemap from 47 pages to 23 through card-sorting sessions, reducing average navigation depth from 4 clicks to 2." },
          { title: "Accessible Design System", desc: "Created a comprehensive design system with WCAG AA-compliant color contrast ratios, scalable typography, and keyboard-navigable components." },
          { title: "Research Showcase", desc: "Designed an interactive research portal with filtering by topic, researcher, and publication year, making publications 3x easier to discover." },
        ],
      },
      userFlow: [
        { step: "Step 1: Landing & Discovery", desc: "Users arrive at an engaging hero section that immediately communicates the lab's mission and latest highlights." },
        { step: "Step 2: Research Exploration", desc: "Users browse research projects through an interactive grid with category filters and search functionality." },
        { step: "Step 3: Deep Dive", desc: "Users access detailed research pages with publications, team members, and related datasets." },
        { step: "Step 4: Connect", desc: "Prospective students and collaborators reach out through streamlined contact and application forms." },
        { step: "Step 5: Stay Updated", desc: "Users subscribe to newsletters and follow specific research areas for ongoing updates." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Primary Navigation", items: ["Research Areas", "People", "Publications", "News & Events"] },
        { level: "Level 2 — Content Pages", items: ["Project details", "Researcher profiles", "Publication library", "Event calendar"] },
        { level: "Level 3 — Interactions", items: ["Search & filter", "Contact forms", "Newsletter signup", "Download resources"] },
      ],
      accomplishments: [
        "Improved accessibility scores from 62% to 98% (WCAG AA compliance), making the site usable for all visitors including those with visual impairments.",
        "Reduced average bounce rate by 35% through improved content hierarchy and engaging visual storytelling.",
        "Decreased average navigation time to find research publications by 60% through the redesigned information architecture.",
        "Delivered a modular design system with 40+ reusable components that the lab can maintain independently.",
      ],
      processImage: "https://images.unsplash.com/photo-1637575475022-a0b2630d2480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBkZXNpZ24lMjBza2V0Y2glMjBwcm90b3R5cGV8ZW58MXx8fHwxNzczNDMyNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      processImageCaption: "Early wireframe iterations exploring the research showcase layout and navigation patterns.",
      takeaway: "This project reinforced the importance of data-driven design decisions. By grounding every visual and structural choice in user research data, we created a website that not only looks modern but genuinely serves its users. The biggest lesson was that accessibility is not a constraint — it's a design catalyst that improves the experience for everyone.",
      tools: ["Figma", "React", "TypeScript", "WCAG Auditing", "User Research", "Prototyping"],
      prototypeLink: "https://www.figma.com",
    } as ProjectDetail,
  },
  {
    id: 1,
    title: "Urban Data Visualization",
    description: "An interactive web platform mapping out environmental sensor data across the five boroughs of New York City.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzM0MTAyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detail: {
      title: "Urban Data Visualization",
      subtitle: "Developed an interactive dashboard for visualizing real-time environmental sensor data across NYC. My role was Data Visualization & UI Design.",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzM0MTAyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "GIS",
      background: "New York City operates a vast network of environmental sensors collecting data on air quality (PM2.5, ozone), noise pollution (decibels), and temperature across all five boroughs. However, this data existed in fragmented CSV files and inaccessible APIs, making it nearly impossible for policymakers and community advocates to extract actionable insights. The gap between raw data availability and public understanding of environmental conditions in their neighborhoods was widening.",
      goal: "To create an interactive, web-based visualization platform that transforms complex environmental sensor data into intuitive, explorable maps and charts — empowering both policymakers and citizens to understand and act on urban environmental conditions.",
      process: {
        description: "We adopted a human-centered data visualization approach, starting with interviews of 8 city planners and 12 community organizers to understand what environmental questions they needed answers to. The design process focused on three core visualization strategies:",
        features: [
          { title: "Spatial Heatmaps", desc: "Interactive choropleth maps layered with real-time sensor data, allowing users to see pollution hotspots at the neighborhood level with temporal scrubbing." },
          { title: "Time-Series Explorer", desc: "Multi-axis line charts with brushable date ranges that reveal seasonal patterns, anomalies, and correlations between different environmental metrics." },
          { title: "Comparative Dashboard", desc: "Side-by-side borough comparison tool that normalizes data for population density and area, enabling fair cross-neighborhood analysis." },
        ],
      },
      userFlow: [
        { step: "Step 1: Map Overview", desc: "Users land on an interactive NYC map showing aggregated environmental health scores by neighborhood." },
        { step: "Step 2: Drill Down", desc: "Clicking a neighborhood reveals detailed sensor readings with the time-series explorer for granular analysis." },
        { step: "Step 3: Compare", desc: "Users select multiple areas to compare side-by-side, revealing disparities in environmental conditions." },
        { step: "Step 4: Generate Reports", desc: "Users export custom reports with visualizations for community meetings or policy proposals." },
        { step: "Step 5: Set Alerts", desc: "Users configure threshold-based alerts for specific pollutants in their area of interest." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Map Interface", items: ["Borough overview", "Sensor layers", "Time controls", "Data filters"] },
        { level: "Level 2 — Analysis Tools", items: ["Neighborhood detail", "Time-series charts", "Comparison panels", "Correlation analysis"] },
        { level: "Level 3 — Output Actions", items: ["Report generation", "Alert configuration", "Data export", "Share links"] },
      ],
      accomplishments: [
        "Aggregated and normalized data from 2,400+ environmental sensors across NYC into a unified, real-time visualization platform.",
        "Reduced average data analysis time for community organizers from 3 hours to 15 minutes through intuitive visual tools.",
        "Platform was adopted by 3 NYC community boards for quarterly environmental reporting to constituents.",
        "Achieved sub-second rendering performance for complex heatmaps through WebGL-accelerated tile rendering.",
      ],
      processImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRhdGElMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczNDMyNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      processImageCaption: "Interactive dashboard prototype showing air quality heatmap and temporal analysis tools.",
      takeaway: "This project taught me that the most powerful data visualization is not the most complex one — it's the one that tells a clear story. By starting with the questions users actually ask, rather than the data we had available, we built a tool that bridged the gap between data science and community action.",
      tools: ["D3.js", "Mapbox GL JS", "React", "Python", "PostGIS", "WebGL"],
    } as ProjectDetail,
  },
  {
    id: 2,
    title: "Public Transit UX Study",
    description: "A comprehensive UX research study on improving digital ticketing interfaces for older adults in the subway system.",
    image: "https://images.unsplash.com/photo-1541893121528-77c8e6dfd8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ3YXklMjB0aWNrZXR8ZW58MXx8fHwxNzczNDEwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    detail: {
      title: "Public Transit UX Study",
      subtitle: "Conducted extensive field research and usability testing to improve digital ticketing for older adults. My role was UX Research Lead & Interface Redesign.",
      heroImage: "https://images.unsplash.com/photo-1736774341582-a6bda01fa840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2l0JTIwc3Vid2F5JTIwa2lvc2slMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczNDMyNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "UI/UX",
      background: "As NYC transitions from MetroCards to OMNY digital payment, a growing segment of riders — adults aged 65 and older — face significant barriers with the new ticketing kiosks. Our preliminary observations at 6 subway stations revealed that 43% of older adults required assistance to complete a basic fare purchase, with average task completion times 3.5x longer than younger demographics. The existing interface design prioritized modern aesthetics over usability for users with varying levels of digital literacy.",
      goal: "To conduct a comprehensive usability study of the OMNY digital ticketing kiosks, identify critical pain points for older adults (65+), and deliver evidence-based interface redesign recommendations that reduce task completion time by at least 40% without sacrificing functionality.",
      process: {
        description: "Our research methodology combined ethnographic field observations with structured usability testing, following a \"observe first, design second\" principle. We spent two weeks embedded in subway stations before touching any design tools. The study focused on three research streams:",
        features: [
          { title: "Field Ethnography", desc: "40+ hours of contextual observation at 6 stations, documenting real usage patterns, common errors, and help-seeking behaviors among older riders." },
          { title: "Usability Testing", desc: "Structured task-based testing with 24 participants aged 65-82, measuring completion rates, error frequency, and time-on-task across 5 core ticket purchasing scenarios." },
          { title: "Inclusive Redesign", desc: "Evidence-based interface concepts featuring 200% larger touch targets, high-contrast mode, step-by-step guidance, and a simplified 3-step purchase flow." },
        ],
      },
      userFlow: [
        { step: "Step 1: Approach & Orient", desc: "Rider approaches the kiosk and identifies the correct screen/action to begin their purchase." },
        { step: "Step 2: Select Fare Type", desc: "Rider chooses between single ride, daily, weekly, or monthly passes with clear visual pricing." },
        { step: "Step 3: Payment", desc: "Rider completes payment via tap card, chip insert, or cash with guided visual feedback at each step." },
        { step: "Step 4: Confirmation", desc: "Clear confirmation screen with large text, audio feedback, and printed receipt option." },
        { step: "Step 5: Assisted Recovery", desc: "If an error occurs, the system provides plain-language guidance and an easy 'start over' option." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Primary Actions", items: ["Buy a ride", "Add funds", "Check balance", "Get help"] },
        { level: "Level 2 — Selection Steps", items: ["Fare type selection", "Payment method", "Confirmation review"] },
        { level: "Level 3 — Accessibility Features", items: ["High contrast toggle", "Audio guidance", "Language selection", "Font size control"] },
      ],
      accomplishments: [
        "Identified 12 critical usability issues through field observations and structured testing, 8 of which were previously undocumented.",
        "Redesigned concepts reduced average task completion time by 52% in follow-up testing with the same participant cohort.",
        "Error rate dropped from 67% to 12% with the simplified 3-step flow and larger touch targets.",
        "Delivered a 60-page research report with implementation roadmap that was presented to the transit authority's UX team.",
      ],
      resultImage: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHJlc2VhcmNoJTIwdXNhYmlsaXR5JTIwdGVzdGluZ3xlbnwxfHx8fDE3NzM0MzI3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      resultImageCaption: "Usability testing session with an older adult participant navigating the redesigned interface prototype.",
      takeaway: "This project profoundly shaped my design philosophy: true accessibility goes beyond WCAG checklists. It requires empathy-driven field research, understanding the physical and cognitive context in which interfaces are used, and designing for the most constrained user first. The improvements we made for older adults simultaneously made the kiosk faster and easier for all riders.",
      tools: ["User Research", "Figma", "Protopie", "Journey Mapping", "Usability Testing", "Inclusive Design"],
    } as ProjectDetail,
  },
];

export function NewsSection({ darkMode }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  // Auto-rotate logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="news"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#fcf896" : "#f5f0ff",
      }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-['Jaro',sans-serif] text-7xl md:text-8xl mb-12 text-center transition-colors duration-500"
        style={{ color: darkMode ? "#4b2e7d" : "#503282" }}
      >
        News
      </motion.h2>

      {/* Featured project card carousel */}
      <div className="relative max-w-5xl mx-auto min-h-[500px] md:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-[40px] overflow-hidden shadow-2xl transition-colors duration-500 absolute inset-0 w-full h-full border border-white/10"
            style={{ backgroundColor: darkMode ? "#4b2e7d" : "#503282" }}
          >
            <div className="flex flex-col h-full">
              <div className="relative h-[60%] w-full overflow-hidden group cursor-pointer" onClick={() => setSelectedNews(newsItems[currentIndex])}>
                <ImageWithFallback
                  src={newsItems[currentIndex].image}
                  alt={newsItems[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    className="font-['Jaro',sans-serif] text-4xl md:text-5xl mb-4"
                    style={{ color: "#fcf896" }}
                  >
                    {newsItems[currentIndex].title}
                  </h3>
                  <p
                    className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed max-w-3xl"
                    style={{ color: "rgba(252, 248, 150, 0.9)" }}
                  >
                    {newsItems[currentIndex].description}
                  </p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  {/* Pagination dots inside card for better layout */}
                  <div className="flex gap-4">
                    {newsItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(i);
                        }}
                        className="w-4 h-4 rounded-full border-2 transition-all cursor-pointer hover:scale-125"
                        style={{
                          borderColor: "#fcf896",
                          backgroundColor: i === currentIndex ? "#fcf896" : "transparent",
                          opacity: i === currentIndex ? 1 : 0.5
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedNews(newsItems[currentIndex])}
                    className="font-['Jaro',sans-serif] text-xl md:text-2xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
                    style={{ color: "#fcf896" }}
                  >
                    View More 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >{"\u2192"}</motion.span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative star */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-16 hidden md:block"
      >
        <svg width="74" height="74" viewBox="0 0 97.4829 97.4829" fill="none">
          <path
            d="M48.7415 0L58.7146 26.9521L85.6668 36.9253L58.7146 46.8985L48.7415 73.8507L38.7683 46.8985L11.8161 36.9253L38.7683 26.9521L48.7415 0Z"
            fill={darkMode ? "#765CA0" : "#c4a8e8"}
          />
        </svg>
      </motion.div>

      {/* Modal for View More - Full Detail Page */}
      <Modal
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        title={selectedNews?.title || ""}
        darkMode={darkMode}
      >
        {selectedNews && (
          <ProjectDetailView
            project={selectedNews.detail}
            darkMode={darkMode}
            onBack={() => setSelectedNews(null)}
          />
        )}
      </Modal>
    </section>
  );
}
