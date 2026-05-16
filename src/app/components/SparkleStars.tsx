import { useMemo } from "react";
import { motion } from "motion/react";

interface SparkleStarsProps {
  darkMode: boolean;
  count?: number;
  /** Optional color override; defaults to soft yellow in dark mode, lavender in light */
  color?: string;
  /** Lower → less prominent */
  intensity?: number;
}

// Deterministic pseudo-random based on index — so stars don't reshuffle on re-render
const seeded = (i: number, mul: number, off: number) => {
  const x = Math.sin((i + 1) * mul + off) * 10000;
  return x - Math.floor(x);
};

export function SparkleStars({ darkMode, count = 18, color, intensity = 1 }: SparkleStarsProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 6 + seeded(i, 12.9898, 0) * 14;   // 6 – 20 px
        return {
          left: seeded(i, 78.233, 1) * 100,
          top: seeded(i, 43.758, 2) * 100,
          size,
          delay: seeded(i, 27.135, 3) * 6,             // 0 – 6 s
          duration: 3 + seeded(i, 91.345, 4) * 4,      // 3 – 7 s
          rotateDuration: 14 + seeded(i, 51.731, 5) * 22, // 14 – 36 s
          rotateDirection: i % 2 === 0 ? 1 : -1,
        };
      }),
    [count]
  );

  const fill = color ?? (darkMode ? "#fffa74" : "#c4a8e8");

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            marginLeft: -s.size / 2,
            marginTop: -s.size / 2,
          }}
          animate={{ rotate: 360 * s.rotateDirection }}
          transition={{ duration: s.rotateDuration, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ opacity: [0, intensity * 0.85, 0], scale: [0.6, 1, 0.6] }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* 4-pointed cross-star */}
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill={fill}>
              <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
