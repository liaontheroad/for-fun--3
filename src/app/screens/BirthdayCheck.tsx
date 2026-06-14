import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { FloatingBalloon, FloatingConfetti, SparkleIcon } from "../components/BirthdayDecoration";

interface BirthdayCheckProps {
  onSuccess: () => void;
}

export function BirthdayCheck({ onSuccess }: BirthdayCheckProps) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const handleSubmit = () => {
    const d = parseInt(day);
    const m = parseInt(month);
    if (d === 15 && m === 6) {
      setError(false);
      setSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#FFB6D9", "#A8D8FF", "#FFE5B4", "#E6E6FA", "#DDA0DD"],
      });
      setTimeout(() => onSuccess(), 1800);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 flex items-center justify-center px-4">
      {/* Floating deco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBalloon delay={0} x={5} />
        <FloatingBalloon delay={3} x={88} />
        <FloatingBalloon delay={1.5} x={50} />
        <FloatingConfetti delay={0} x={15} color="#FFB6D9" />
        <FloatingConfetti delay={1} x={35} color="#A8D8FF" />
        <FloatingConfetti delay={2} x={65} color="#FFE5B4" />
        <FloatingConfetti delay={0.5} x={85} color="#DDA0DD" />
        <div className="absolute top-8 left-8"><SparkleIcon delay={0} /></div>
        <div className="absolute top-12 right-12"><SparkleIcon delay={0.8} /></div>
        <div className="absolute bottom-16 left-16"><SparkleIcon delay={1.4} /></div>
        <div className="absolute bottom-20 right-10"><SparkleIcon delay={0.4} /></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-2xl border-2 border-pink-200 p-8 md:p-10 space-y-7">
          {/* Icon */}
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl"
            >
              🎂
            </motion.div>
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Before you enter...
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              Masukin tanggal lahirmu dulu ya 🎂
            </p>
          </div>

          {/* Date inputs */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-600 text-center">
              Pilih tanggal & bulan lahirmu
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Tanggal"
                min={1}
                max={31}
                value={day}
                onChange={(e) => { setDay(e.target.value); setError(false); }}
                className="flex-1 rounded-2xl border-2 border-pink-200 bg-pink-50/60 px-4 py-3 text-center text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all"
              />
              <select
                value={month}
                onChange={(e) => { setMonth(e.target.value); setError(false); }}
                className="flex-1 rounded-2xl border-2 border-pink-200 bg-pink-50/60 px-3 py-3 text-gray-700 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all appearance-none text-center"
              >
                <option value="">Bulan</option>
                {months.map((m, i) => (
                  <option key={m} value={i + 1}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Hint */}
          <p className="text-center text-xs text-gray-400 italic">
            Hint: tanggal spesial di bulan Juni ✨
          </p>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="rounded-2xl bg-red-50 border-2 border-red-200 p-4 text-center space-y-1"
              >
                <p className="text-red-500 font-semibold">Yah, tanggalnya belum benar 😢</p>
                <p className="text-red-400 text-sm">Coba lagi yaa, cuma orang spesial yang bisa buka ini 💌</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success */}
          <AnimatePresence>
            {success && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-green-50 border-2 border-green-200 p-4 text-center"
              >
                <p className="text-green-600 font-bold text-lg">Yeay, benar! 🎉</p>
                <p className="text-green-500 text-sm">Selamat datang, orang spesial ✨</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          {!success && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              🎁 Open the gift
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
