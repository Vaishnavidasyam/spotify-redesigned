import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Mic, X } from "lucide-react";
import { Button } from "./UI";

export const ListeningScreen = ({ onComplete, onCancel }: { onComplete: () => void; onCancel: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeoutId: any;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          timeoutId = setTimeout(onComplete, 1500);
          return 100;
        }
        return prev + 1;
      });
    }, 45);
    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-between py-16 px-8 relative bg-[#071226] overflow-hidden">
      {/* Background Ambient Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 300 - 150, 
            y: Math.random() * 600 - 300,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -150],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4 + Math.random() * 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}

      <div className="text-center relative z-10 pt-4">
         <span className="text-[9px] font-black tracking-[0.4em] text-primary/30 uppercase mb-3 block">Neural Engine V5.0</span>
         <h1 className="text-3xl font-light tracking-tighter text-white">Listening...</h1>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center">
         {/* Multiple Glowing Pulse Rings */}
         {[1, 2, 3].map((i) => (
            <motion.div
               key={i}
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ 
                  scale: [0.8, 1.3 + (i * 0.1)],
                  opacity: [0.4, 0],
               }}
               transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
               }}
               className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(125,211,252,0.1)]"
            />
         ))}
         
         <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full animate-breathing" />
         
         {/* Central Holographic Core */}
         <div className="relative w-44 h-44 rounded-full flex items-center justify-center gap-1 px-8 glass-premium border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
            
            {Array.from({ length: 12 }).map((_, i) => (
               <motion.div
                  key={i}
                  animate={{
                     height: [15, 60, 20, 80, 10, 50, 25][(i + Math.floor(progress/5)) % 7] + "%",
                     opacity: [0.2, 0.8, 0.4][i % 3]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-1 bg-primary rounded-full min-w-[3px] shadow-[0_0_8px_#7dd3fc]"
               />
            ))}
         </div>
      </div>

      <div className="w-full relative z-10 max-w-sm pb-8">
         <div className="mb-10 text-center">
            <h2 className="text-xl font-light tracking-tight mb-2 text-white/90 italic">Identifying Spectral Signature...</h2>
            <div className="flex justify-center items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
               <p className="text-[9px] font-black text-primary/40 uppercase tracking-[0.3em]">Optimizing Sync</p>
            </div>
         </div>
         
         <div className="mb-4 flex justify-between items-end px-2">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Engine Fidelity</span>
            <span className="text-lg font-bold text-primary tracking-tighter">{progress}%</span>
         </div>
         
         <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-12">
            <motion.div 
               className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_#7dd3fc]"
               style={{ width: `${progress}%` }}
               transition={{ type: "spring", stiffness: 50 }}
            />
         </div>

         <Button onClick={onCancel} variant="secondary" className="w-full py-5 group backdrop-blur-2xl">
            <X size={16} className="text-white/40 group-hover:text-white transition-colors mr-2" />
            <span className="text-[9px] font-black tracking-[0.3em] uppercase">Terminate Session</span>
         </Button>
      </div>

      <div className="mt-8 flex items-center gap-4 opacity-20">
         <div className="flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary" />)}
         </div>
         <span className="text-[9px] font-black tracking-[0.4em] uppercase">Fidelity Optimized for Lossless Aura</span>
      </div>
    </div>
  );
};
