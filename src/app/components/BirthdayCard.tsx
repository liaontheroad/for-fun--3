import { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Gift, Heart, Sparkles, Smile, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { WishItem } from "./WishItem";
import { 
  BirthdayCake, 
  GiftBox, 
  FloatingBalloon, 
  FloatingConfetti,
  SparkleIcon 
} from "./BirthdayDecoration";

export function BirthdayCard() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
    
    // Confetti effect
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFB6D9', '#A8D8FF', '#FFE5B4', '#E6E6FA', '#DDA0DD']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFB6D9', '#A8D8FF', '#FFE5B4', '#E6E6FA', '#DDA0DD']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBalloon delay={0} x={10} />
        <FloatingBalloon delay={2} x={80} />
        <FloatingBalloon delay={4} x={30} />
        <FloatingBalloon delay={6} x={70} />
        
        <FloatingConfetti delay={0} x={20} color="#FFB6D9" />
        <FloatingConfetti delay={1} x={40} color="#A8D8FF" />
        <FloatingConfetti delay={2} x={60} color="#FFE5B4" />
        <FloatingConfetti delay={0.5} x={80} color="#E6E6FA" />
        <FloatingConfetti delay={1.5} x={50} color="#DDA0DD" />
        <FloatingConfetti delay={2.5} x={90} color="#FFD700" />
        
        <div className="absolute top-10 left-10">
          <SparkleIcon delay={0} />
        </div>
        <div className="absolute top-20 right-20">
          <SparkleIcon delay={0.5} />
        </div>
        <div className="absolute bottom-32 left-20">
          <SparkleIcon delay={1} />
        </div>
        <div className="absolute top-40 right-40">
          <SparkleIcon delay={1.5} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left column - Text and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Hero text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight"
              >
                Happy Birthday!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-700 leading-relaxed"
              >
                Hari ini spesial banget, karena kamu lahir ke dunia ini 🎂
              </motion.p>
            </div>

            {/* Greeting card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 lg:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-pink-200 shadow-lg">
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Semoga hari ulang tahunmu penuh tawa, kejutan manis, dan kebahagiaan kecil yang bikin senyum seharian.
                </p>
              </Card>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleSurprise}
                size="lg"
                className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Gift className="w-5 h-5 mr-2" />
                Buka Kejutan 🎁
              </Button>
              
              <Button
                onClick={handleMessage}
                size="lg"
                variant="outline"
                className="flex-1 rounded-2xl border-2 border-pink-300 bg-white/80 hover:bg-pink-50 text-pink-600 font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-all"
              >
                <Heart className="w-5 h-5 mr-2" />
                Baca Pesan Manis
              </Button>
            </motion.div>

            {/* Sweet message (conditional) */}
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 rounded-3xl bg-gradient-to-br from-yellow-50 to-pink-50 border-2 border-yellow-200 shadow-md">
                  <p className="text-gray-700 leading-relaxed italic">
                    💌 "Kamu adalah hadiah terbaik untuk dunia ini. Teruslah bersinar dan bahagia seperti sekarang!"
                  </p>
                </Card>
              </motion.div>
            )}

            {/* Wishes section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-3"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Doa Spesial Buat Kamu ✨
              </h3>
              
              <WishItem icon={Smile} text="Banyak bahagia" delay={0} />
              <WishItem icon={Sparkles} text="Sehat selalu" delay={0.2} />
              <WishItem icon={TrendingUp} text="Makin bersinar" delay={0.4} />
            </motion.div>

            {/* Surprise message */}
            {showSurprise && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-lg">
                  <p className="text-xl font-bold text-center text-purple-700">
                    🎉 KEJUTAAAAN! Kamu luar biasa! 🎉
                  </p>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Right column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-8 order-1 lg:order-2"
          >
            <BirthdayCake />
            <div className="flex gap-8 items-center">
              <GiftBox />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-6xl">🎈</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
