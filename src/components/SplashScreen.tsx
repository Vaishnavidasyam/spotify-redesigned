import { motion } from "motion/react";
import { Button } from "./UI";

export const SplashScreen = ({ onNext, onNavigate }: { onNext: () => void; onNavigate?: (screen: string) => void }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between py-12 px-12 text-center relative overflow-hidden bg-[#071226]">
      {/* Immersive Deep Gradient Background Layering */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-primary/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] bg-tertiary/10 blur-[150px] rounded-full opacity-50" />
      </div>

      {/* AI Active Indicator - Positioned Top Right */}
      <div className="absolute top-10 right-10 flex items-center gap-2 opacity-60 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_#7dd3fc]" />
        <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase opacity-80">AI Active</span>
      </div>

      <div className="flex flex-col items-center z-10 w-full mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="w-40 h-40 glass-premium rounded-full flex items-center justify-center mb-12 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* Animated Aura Ring */}
          <motion.div 
            animate={{ 
               scale: [1, 1.1, 1],
               opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-15%] rounded-full border border-primary/20 blur-[2px]" 
          />
          
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_#7dd3fc]">
            {[0, 1, 2].map((i) => (
              <motion.path
                key={i}
                d={`M4 ${8 + i * 4}C4 ${8 + i * 4} 6 ${6 + i * 4} 12 ${8 + i * 4}C18 ${10 + i * 4} 20 ${8 + i * 4} 20 ${8 + i * 4}`}
                stroke="url(#waveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{
                  d: [
                    `M4 ${8 + i * 4}C4 ${8 + i * 4} 6 ${6 + i * 4} 12 ${8 + i * 4}C18 ${10 + i * 4} 20 ${8 + i * 4} 20 ${8 + i * 4}`,
                    `M4 ${8 + i * 4}C4 ${8 + i * 4} 6 ${10 + i * 4} 12 ${8 + i * 4}C18 ${6 + i * 4} 20 ${8 + i * 4} 20 ${8 + i * 4}`,
                    `M4 ${8 + i * 4}C4 ${8 + i * 4} 6 ${6 + i * 4} 12 ${8 + i * 4}C18 ${10 + i * 4} 20 ${8 + i * 4} 20 ${8 + i * 4}`,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
            <defs>
              <linearGradient id="waveGradient" x1="4" y1="8" x2="20" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#c8a0f0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-white text-4xl font-bold tracking-tight mb-4 text-glow"
        >
          Spotify
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-white/80 font-medium tracking-tight text-xl mb-6 max-w-[280px] leading-snug mx-auto"
        >
          Hear it. Save it. Vibe it. Live it.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="flex flex-col gap-4 w-full max-w-[300px] z-10 pb-6"
      >
        <button 
          onClick={onNext}
          className="w-full py-4 rounded-full border-2 border-primary/40 bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(125,211,252,0.2)] hover:shadow-[0_4px_32px_rgba(125,211,252,0.4)] transition-all active:scale-[0.98] group"
        >
           <span className="text-xl font-bold text-white/90 tracking-tight">Dive In</span>
        </button>
        
        <button 
           className="w-full py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all active:scale-[0.98]"
        >
           <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">Create Account</span>
        </button>
      </motion.div>

      {/* Floating Design Accents */}
      <div className="absolute bottom-10 flex gap-1 opacity-20">
         {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white" />)}
      </div>
    </div>
  );
};
