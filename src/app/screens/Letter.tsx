import { motion } from "motion/react";
import { SparkleIcon } from "../components/BirthdayDecoration";

interface LetterProps {
  onNext: () => void;
}

const paragraphs = [
  "Selamat ulang tahun yaa 🎂 Hari ini bukan cuma nambah umur, tapi juga jadi pengingat kalau kehadiran kamu itu berarti banget. Buat banyak orang, tanpa kamu sadari, kamu sudah jadi bagian dari cerita yang nggak terlupakan.",
  "Terima kasih karena sudah bertahan sejauh ini. Sudah melewati banyak hal — hari-hari yang berat, pilihan-pilihan yang susah, momen-momen yang bikin lelah — dan tetap jadi diri kamu yang berharga. Itu bukan hal kecil. Itu sesuatu yang patut dirayakan.",
  "Semoga di umur yang baru ini kamu selalu dikelilingi hal-hal baik: hati yang tenang di tengah kesibukan, tawa yang tulus meski di hari-hari biasa, dan orang-orang yang sayang sama kamu dengan cara yang tulus juga.",
  "Kalau belakangan ini kamu capek, semoga pelan-pelan semuanya membaik. Kalau lagi takut sama masa depan, semoga selalu ada alasan buat tetap percaya. Dan kalau hari-hari terasa berat banget, semoga kamu selalu ingat kalau kamu nggak pernah benar-benar sendiri.",
  "Kamu pantas buat bahagia. Pantas dicintai. Pantas mendapatkan hal-hal baik — bukan karena kamu sempurna, tapi karena kamu kamu, dan itu sudah lebih dari cukup.",
  "Semoga di tahun ini kamu makin kenal diri sendiri, makin berani mimpi, dan makin percaya bahwa hal-hal indah itu nggak cuma milik orang lain. Itu juga milik kamu.",
  "Selamat ulang tahun sekali lagi ya. Dengan sepenuh hati, semoga kamu selalu baik-baik saja. 🌸",
];

export function Letter({ onNext }: LetterProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cream-50 via-yellow-50 to-pink-50 py-12 px-4 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #fffbf5 0%, #fff5f8 50%, #f5f0ff 100%)" }}
    >
      {/* Subtle sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-8"><SparkleIcon delay={0} /></div>
        <div className="absolute top-16 right-12"><SparkleIcon delay={1} /></div>
        <div className="absolute bottom-12 left-12"><SparkleIcon delay={0.5} /></div>
        <div className="absolute bottom-8 right-8"><SparkleIcon delay={1.5} /></div>
        <div className="absolute top-1/3 left-4"><SparkleIcon delay={2} /></div>
        <div className="absolute top-2/3 right-4"><SparkleIcon delay={0.7} /></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Paper envelope top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <span className="text-5xl">💌</span>
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 rounded-[2rem] shadow-2xl border-2 border-pink-100 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255,182,217,0.08) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        >
          {/* Top ribbon */}
          <div className="h-3 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />

          <div className="p-8 md:p-12 space-y-6">
            {/* Title */}
            <div className="text-center space-y-2 pb-4 border-b-2 border-dashed border-pink-200">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                A little letter for you 💌
              </h1>
              <p className="text-gray-400 text-sm">— ditulis dengan sepenuh hati —</p>
            </div>

            {/* Letter body */}
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="text-gray-700 leading-relaxed text-base md:text-lg"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-right pt-4 border-t-2 border-dashed border-pink-200"
            >
              <p className="text-pink-400 italic text-lg">Dengan cinta, 💕</p>
              <p className="text-gray-500 text-sm mt-1">seseorang yang peduli padamu</p>
            </motion.div>
          </div>

          {/* Bottom ribbon */}
          <div className="h-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300" />
        </motion.div>

        {/* Next button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            className="py-4 px-10 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Next memory → 🖼️
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
