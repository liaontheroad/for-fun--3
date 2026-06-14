import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { FloatingBalloon, FloatingConfetti, SparkleIcon } from "../components/BirthdayDecoration";

interface FinalWishProps {
  onReplay: () => void;
  onReadLetter: () => void;
}

export function FinalWish({ onReplay, onReadLetter }: FinalWishProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.4 },
        colors: ["#FFB6D9", "#A8D8FF", "#FFE5B4", "#E6E6FA", "#DDA0DD", "#FFD700"],
      });
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(135deg, #fff0f5 0%, #f5f0ff 40%, #f0f8ff 100%)" }}
    >
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBalloon delay={0} x={5} />
        <FloatingBalloon delay={2} x={88} />
        <FloatingBalloon delay={4} x={45} />
        <FloatingBalloon delay={1} x={70} />
        <FloatingConfetti delay={0} x={10} color="#FFB6D9" />
        <FloatingConfetti delay={1} x={30} color="#A8D8FF" />
        <FloatingConfetti delay={2} x={55} color="#FFE5B4" />
        <FloatingConfetti delay={0.5} x={75} color="#DDA0DD" />
        <FloatingConfetti delay={1.5} x={92} color="#FFD700" />
        <div className="absolute top-8 left-8"><SparkleIcon delay={0} /></div>
        <div className="absolute top-12 right-12"><SparkleIcon delay={0.5} /></div>
        <div className="absolute top-1/3 left-4"><SparkleIcon delay={1} /></div>
        <div className="absolute top-1/3 right-4"><SparkleIcon delay={1.5} /></div>
        <div className="absolute bottom-16 left-10"><SparkleIcon delay={0.8} /></div>
        <div className="absolute bottom-12 right-10"><SparkleIcon delay={0.3} /></div>
      </div>

      <div className="relative z-10 w-full max-w-xl text-center space-y-8">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-xl"
              style={{ margin: "-12px" }}
            />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl">🌷</div>
                <div className="text-2xl mt-1">✨</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent leading-tight">
            Wish you all the best 🌷
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            Semoga semua hal baik datang ke kamu, satu per satu.
          </p>
        </motion.div>

        {/* Closing message card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-pink-200 shadow-xl p-6 md:p-8"
        >
          <p className="text-gray-700 leading-relaxed text-base md:text-lg"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Terima kasih sudah tumbuh sejauh ini. Semoga langkahmu selalu dipenuhi bahagia, kesehatan, cinta, dan mimpi-mimpi yang pelan-pelan jadi nyata. Apapun yang terjadi ke depannya, semoga kamu selalu menemukan alasan untuk tersenyum. 🌸
          </p>
        </motion.div>

        {/* Floating hearts decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 text-2xl"
        >
          {["💕", "⭐", "🌸", "✨", "💫", "🌷", "💖"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onReplay}
            className="py-3 px-8 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all"
          >
            🔁 Replay memories
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onReadLetter}
            className="py-3 px-8 rounded-2xl bg-white border-2 border-purple-300 text-purple-600 font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            💌 Read the letter again
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
