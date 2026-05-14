import { motion } from "motion/react";

export const BackgroundAura = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#071226]">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
          rotate: [0, 90, 0],
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '10%', '-5%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-20%] w-full h-full rounded-full bg-primary/20 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.03, 0.1, 0.03],
          rotate: [0, -90, 0],
          x: ['5%', '-5%', '5%'],
          y: ['10%', '-5%', '10%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-20%] w-full h-full rounded-full bg-secondary/15 blur-[150px]"
      />
    </div>
  );
};
