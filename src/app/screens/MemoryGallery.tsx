import { motion } from "motion/react";
import { SparkleIcon } from "../components/BirthdayDecoration";

interface MemoryGalleryProps {
  onNext: () => void;
}

const memories = [
  {
    era: "Masa SD",
    emoji: "🎒",
    caption: "dari kecil udah lucu banget",
    bg: "from-yellow-100 to-orange-100",
    border: "border-yellow-300",
    rotate: "-3deg",
    tape: "#FFD700",
    color: "#f59e0b",
    icon: "✏️",
  },
  {
    era: "Masa SMP",
    emoji: "📚",
    caption: "mulai tumbuh jadi versi diri yang unik",
    bg: "from-pink-100 to-rose-100",
    border: "border-pink-300",
    rotate: "2deg",
    tape: "#FFB6D9",
    color: "#ec4899",
    icon: "🎵",
  },
  {
    era: "Masa SMA",
    emoji: "🏫",
    caption: "banyak cerita, banyak kenangan",
    bg: "from-blue-100 to-cyan-100",
    border: "border-blue-300",
    rotate: "-2deg",
    tape: "#A8D8FF",
    color: "#3b82f6",
    icon: "🌸",
  },
  {
    era: "Masa Kuliah",
    emoji: "🎓",
    caption: "makin kuat, makin hebat, makin cantik",
    bg: "from-purple-100 to-violet-100",
    border: "border-purple-300",
    rotate: "3deg",
    tape: "#E6E6FA",
    color: "#8b5cf6",
    icon: "⭐",
  },
];

function PolaroidCard({ memory, index }: { memory: typeof memories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: memory.rotate }}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
      whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 10 }}
      className="relative cursor-pointer"
      style={{ transformOrigin: "center" }}
    >
      {/* Tape strip */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded-sm opacity-80 z-20 shadow-sm"
        style={{ backgroundColor: memory.tape }}
      />

      {/* Polaroid */}
      <div className={`bg-white rounded-lg shadow-xl border-2 ${memory.border} overflow-hidden`}>
        {/* Photo area */}
        <div className={`bg-gradient-to-br ${memory.bg} p-1`}>
          <div className="w-full aspect-square rounded-md overflow-hidden relative flex items-center justify-center"
            style={{ minHeight: "180px", background: `linear-gradient(135deg, ${memory.tape}33, ${memory.tape}66)` }}
          >
            {/* Decorative placeholder */}
            <div className="text-center space-y-2">
              <div className="text-6xl">{memory.emoji}</div>
              <div className="text-5xl opacity-30">{memory.icon}</div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 text-lg opacity-40">{memory.icon}</div>
            <div className="absolute top-2 right-2 text-lg opacity-40">{memory.icon}</div>
            <div className="absolute bottom-2 left-2 text-lg opacity-40">{memory.icon}</div>
            <div className="absolute bottom-2 right-2 text-lg opacity-40">{memory.icon}</div>
          </div>
        </div>

        {/* Label area (polaroid bottom) */}
        <div className="bg-white px-4 py-3 space-y-1">
          <p className="font-bold text-gray-700 text-center" style={{ color: memory.color }}>
            {memory.era}
          </p>
          <p className="text-gray-500 text-xs text-center italic leading-snug">
            "{memory.caption}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function MemoryGallery({ onNext }: MemoryGalleryProps) {
  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4"
      style={{ background: "linear-gradient(135deg, #fff5f8 0%, #f0f4ff 50%, #fff8f0 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10"><SparkleIcon delay={0} /></div>
        <div className="absolute top-16 right-16"><SparkleIcon delay={0.8} /></div>
        <div className="absolute bottom-20 left-14"><SparkleIcon delay={1.4} /></div>
        <div className="absolute bottom-16 right-12"><SparkleIcon delay={0.4} /></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="text-5xl">📸</div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Memory Lane 🌸
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Setiap fase kamu itu indah, dan semua itu membentuk kamu yang sekarang ✨
          </p>
        </motion.div>

        {/* Scrapbook background card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-[2rem] border-2 border-pink-100 shadow-xl p-6 md:p-10">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {memories.map((memory, i) => (
              <PolaroidCard key={memory.era} memory={memory} index={i} />
            ))}
          </div>

          {/* Decorative stickers */}
          <div className="flex justify-center gap-4 mt-8 text-2xl opacity-60">
            <motion.span animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🌟</motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>💕</motion.span>
            <motion.span animate={{ rotate: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🎀</motion.span>
            <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.8, repeat: Infinity }}>✨</motion.span>
            <motion.span animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>🌸</motion.span>
          </div>
        </div>

        {/* Next button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            className="py-4 px-10 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Satu hal lagi... →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
