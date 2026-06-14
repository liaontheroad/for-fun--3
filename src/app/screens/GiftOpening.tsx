import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { FloatingBalloon, FloatingConfetti, SparkleIcon } from "../components/BirthdayDecoration";

interface GiftOpeningProps {
  onNext: () => void;
}

export function GiftOpening({ onNext }: GiftOpeningProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.55 },
      colors: ["#FFB6D9", "#A8D8FF", "#FFE5B4", "#E6E6FA", "#DDA0DD", "#FFD700"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.6 },
        colors: ["#FFB6D9", "#FFE5B4", "#DDA0DD"],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.6 },
        colors: ["#A8D8FF", "#E6E6FA", "#FFD700"],
      });
    }, 400);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBalloon delay={0} x={8} />
        <FloatingBalloon delay={2} x={82} />
        <FloatingBalloon delay={4} x={45} />
        <FloatingConfetti delay={0} x={20} color="#FFB6D9" />
        <FloatingConfetti delay={1.5} x={55} color="#FFE5B4" />
        <FloatingConfetti delay={0.8} x={75} color="#A8D8FF" />
        <div className="absolute top-10 left-10"><SparkleIcon delay={0} /></div>
        <div className="absolute top-16 right-16"><SparkleIcon delay={0.6} /></div>
        <div className="absolute bottom-20 right-8"><SparkleIcon delay={1.2} /></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-lg text-center space-y-8"
      >
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            You got it right! 🎁
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-lg"
          >
            Ada sesuatu yang spesial buat kamu...
          </motion.p>
        </div>

        {/* Gift illustration */}
        <motion.div
          className="flex justify-center"
          animate={opened ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.div key="closed" exit={{ scale: 0, rotate: 20, opacity: 0 }} transition={{ duration: 0.4 }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  {/* Box body */}
                  <rect x="40" y="90" width="120" height="90" rx="8" fill="#FFB6D9" />
                  <rect x="40" y="75" width="120" height="22" rx="5" fill="#FF8DC7" />
                  {/* Ribbon vertical */}
                  <rect x="93" y="75" width="14" height="105" fill="#FF69B4" />
                  {/* Ribbon horizontal */}
                  <rect x="40" y="118" width="120" height="14" fill="#FF69B4" />
                  {/* Bow left */}
                  <ellipse cx="78" cy="62" rx="20" ry="14" fill="#FF1493" transform="rotate(-20 78 62)" />
                  {/* Bow right */}
                  <ellipse cx="122" cy="62" rx="20" ry="14" fill="#FF1493" transform="rotate(20 122 62)" />
                  <circle cx="100" cy="65" r="10" fill="#FFB6D9" />
                  <circle cx="100" cy="65" r="5" fill="#FF69B4" />
                  {/* Stars */}
                  <text x="55" y="115" fontSize="14" fill="white" opacity="0.7">✦</text>
                  <text x="130" y="155" fontSize="12" fill="white" opacity="0.6">✦</text>
                  <text x="60" y="155" fontSize="10" fill="white" opacity="0.5">✦</text>
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.5, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  {/* Box bottom open */}
                  <rect x="40" y="120" width="120" height="60" rx="8" fill="#FFB6D9" />
                  <rect x="93" y="120" width="14" height="60" fill="#FF69B4" />
                  <rect x="40" y="140" width="120" height="14" fill="#FF69B4" />
                  {/* Lid open / tilted */}
                  <rect x="35" y="90" width="130" height="28" rx="6" fill="#FF8DC7" transform="rotate(-25 35 90)" />
                  {/* Hearts flying out */}
                  <text x="90" y="75" fontSize="24">💖</text>
                  <text x="55" y="55" fontSize="18">✨</text>
                  <text x="130" y="60" fontSize="20">🌸</text>
                  <text x="70" y="40" fontSize="16">⭐</text>
                  <text x="115" y="35" fontSize="18">💫</text>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <div className="space-y-4">
          {!opened ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOpen}
              className="w-full max-w-xs mx-auto block py-4 px-8 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              🎀 Buka kadonya
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-pink-200 p-5 shadow-lg">
                <p className="text-gray-700 text-base leading-relaxed">
                  ✨ Di dalam kado ini ada sesuatu yang lebih berharga dari apapun — sebuah surat kecil yang ditulis dengan sepenuh hati, khusus untuk kamu 💌
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onNext}
                className="w-full max-w-xs mx-auto block py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Buka suratnya 💌
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
