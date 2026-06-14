import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface WishItemProps {
  icon: LucideIcon;
  text: string;
  delay?: number;
}

export function WishItem({ icon: Icon, text, delay = 0 }: WishItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-sm"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center"
      >
        <Icon className="w-5 h-5 text-white" />
      </motion.div>
      <p className="text-gray-700 font-medium">{text}</p>
    </motion.div>
  );
}
