import { motion } from "motion/react";

export function FloatingBalloon({ delay = 0, x = 0 }: { delay?: number; x?: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: "100%" }}
      animate={{
        y: [0, -800],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
        <ellipse cx="20" cy="20" rx="18" ry="22" fill="#FFB6D9" />
        <path d="M20 42 L20 48" stroke="#FF69B4" strokeWidth="1.5" />
        <ellipse cx="20" cy="16" rx="8" ry="10" fill="#FFC9E3" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

export function FloatingConfetti({ delay = 0, x = 0, color = "#FFD700" }: { delay?: number; x?: number; color?: string }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: "-20px" }}
      animate={{
        y: [0, 1000],
        rotate: [0, 360],
        x: [0, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className="w-3 h-3 rounded-sm"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export function SparkleIcon({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
          fill="#FFD700"
        />
      </svg>
    </motion.div>
  );
}

export function BirthdayCake() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
        {/* Candle flame */}
        <motion.ellipse
          cx="75"
          cy="30"
          rx="4"
          ry="6"
          fill="#FFD700"
          animate={{
            opacity: [1, 0.7, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
        />
        {/* Candle */}
        <rect x="72" y="35" width="6" height="15" rx="1" fill="#FFB6D9" />
        
        {/* Top cake layer */}
        <ellipse cx="75" cy="50" rx="35" ry="8" fill="#FFB6D9" />
        <rect x="40" y="50" width="70" height="25" fill="#FF8DC7" />
        <ellipse cx="75" cy="75" rx="35" ry="8" fill="#FF8DC7" />
        
        {/* Frosting decorations */}
        <circle cx="55" cy="62" r="3" fill="#FFF" />
        <circle cx="75" cy="62" r="3" fill="#FFF" />
        <circle cx="95" cy="62" r="3" fill="#FFF" />
        
        {/* Bottom cake layer */}
        <ellipse cx="75" cy="75" rx="45" ry="10" fill="#A8D8FF" />
        <rect x="30" y="75" width="90" height="30" fill="#87CEEB" />
        <ellipse cx="75" cy="105" rx="45" ry="10" fill="#87CEEB" />
        
        {/* Bottom decorations */}
        <circle cx="45" cy="90" r="4" fill="#FFE5B4" />
        <circle cx="75" cy="90" r="4" fill="#FFE5B4" />
        <circle cx="105" cy="90" r="4" fill="#FFE5B4" />
        
        {/* Plate */}
        <ellipse cx="75" cy="105" rx="50" ry="6" fill="#E6E6FA" />
      </svg>
    </motion.div>
  );
}

export function GiftBox() {
  return (
    <motion.div
      animate={{
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Box */}
        <rect x="25" y="35" width="50" height="45" fill="#FFB6D9" rx="3" />
        <rect x="25" y="30" width="50" height="10" fill="#FF8DC7" rx="2" />
        
        {/* Ribbon vertical */}
        <rect x="47" y="30" width="6" height="50" fill="#FF69B4" />
        
        {/* Ribbon horizontal */}
        <rect x="25" y="52" width="50" height="6" fill="#FF69B4" />
        
        {/* Bow */}
        <ellipse cx="42" cy="25" rx="8" ry="6" fill="#FF1493" />
        <ellipse cx="58" cy="25" rx="8" ry="6" fill="#FF1493" />
        <circle cx="50" cy="25" r="4" fill="#FF69B4" />
        
        {/* Decorative dots */}
        <circle cx="40" cy="55" r="2" fill="#FFF" opacity="0.7" />
        <circle cx="60" cy="60" r="2" fill="#FFF" opacity="0.7" />
        <circle cx="50" cy="65" r="2" fill="#FFF" opacity="0.7" />
      </svg>
    </motion.div>
  );
}
