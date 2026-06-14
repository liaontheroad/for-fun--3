import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BirthdayCheck } from "./screens/BirthdayCheck";
import { GiftOpening } from "./screens/GiftOpening";
import { Letter } from "./screens/Letter";
import { MemoryGallery } from "./screens/MemoryGallery";
import { FinalWish } from "./screens/FinalWish";

type Screen = "check" | "gift" | "letter" | "gallery" | "final";

export default function App() {
  const [screen, setScreen] = useState<Screen>("check");

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="size-full">
      <AnimatePresence mode="wait">
        {screen === "check" && (
          <motion.div key="check" className="size-full" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <BirthdayCheck onSuccess={() => setScreen("gift")} />
          </motion.div>
        )}

        {screen === "gift" && (
          <motion.div key="gift" className="size-full" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <GiftOpening onNext={() => setScreen("letter")} />
          </motion.div>
        )}

        {screen === "letter" && (
          <motion.div key="letter" className="size-full" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <Letter onNext={() => setScreen("gallery")} />
          </motion.div>
        )}

        {screen === "gallery" && (
          <motion.div key="gallery" className="size-full" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <MemoryGallery onNext={() => setScreen("final")} />
          </motion.div>
        )}

        {screen === "final" && (
          <motion.div key="final" className="size-full" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <FinalWish
              onReplay={() => setScreen("gallery")}
              onReadLetter={() => setScreen("letter")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
