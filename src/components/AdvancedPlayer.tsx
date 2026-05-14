import { motion } from "motion/react";
import { Heart, SkipBack, SkipForward, Play, Pause, ListMusic, ChevronDown, ChevronRight, Activity } from "lucide-react";
import { useState } from "react";
import { Card } from "./UI";

export const AdvancedPlayer = ({ onShowInsights, onBack }: { onShowInsights: () => void; onBack: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [vibeMode, setVibeMode] = useState(true);

  return (
    <div className="h-screen flex flex-col no-scrollbar overflow-y-auto bg-[#071226] relative">
      {/* Background Ambient Glow Based on Track Color */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
           animate={{ 
             opacity: vibeMode ? [0.1, 0.2, 0.1] : 0.05,
             scale: [1, 1.2, 1]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" 
        />
        <motion.div 
           animate={{ 
             opacity: vibeMode ? [0.05, 0.15, 0.05] : 0.03,
             scale: [1.2, 1, 1.2]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[150px] rounded-full" 
        />
      </div>

      <div className="px-8 pt-20 flex-1 flex flex-col relative z-10">
         <header className="flex items-center justify-between mb-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/30 hover:text-white transition-all transform active:scale-90 border-white/5">
            <ChevronDown size={20} />
          </button>
          <div className="flex flex-col items-center">
             <span className="text-[10px] font-black tracking-[0.5em] text-primary/40 uppercase mb-0.5">Now Playing</span>
             <h1 className="text-xs font-black tracking-widest uppercase text-white/80">Neural Stream</h1>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-[url('https://images.unsplash.com/photo-1550745679-56221107fcae?w=100&h=100&fit=crop')] bg-cover shadow-[0_0_20px_rgba(125,211,252,0.15)] ring-4 ring-primary/5" />
        </header>

        <Card 
          onClick={onShowInsights}
          className="flex items-center justify-between py-4 px-6 mb-16 gap-4 glass-premium border-none cursor-pointer hover:bg-white/[0.05] transition-all group active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
           <div className="flex items-center gap-5">
              <div className="w-10 h-10 glass rounded-2xl flex items-center justify-center bg-white/5 group-hover:shadow-[0_0_15px_#7dd3fc33] transition-shadow">
                 <Activity size={18} className="text-primary animate-pulse" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-primary/60 tracking-[0.3em] uppercase mb-1">Aura Analytics</span>
                 <span className="text-sm font-bold text-white tracking-tight">Syncing to <span className="text-secondary italic">Deep Chill</span></span>
              </div>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_#7dd3fc]" />
              <ChevronRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
           </div>
        </Card>
        
        {/* Album Art with Immersive Layering */}
        <div className="relative mb-20 px-4 group">
           <motion.div
              animate={{ 
                 opacity: vibeMode ? [0.2, 0.4, 0.2] : 0,
                 scale: vibeMode ? [1, 1.15, 1] : 0.95
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110 pointer-events-none"
           />
           
           <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-[56px] overflow-hidden glass-premium border-none shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] perspective-1000"
           >
              <img 
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop" 
                 className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                 alt="Aether Protocol"
              />
              
              {/* Holographic Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.05)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none opacity-20" />
              
              {/* Dynamic Waveform Visualization */}
              <div className="absolute inset-x-0 bottom-0 py-12 px-10 flex items-end gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity">
                 {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                       key={i}
                       animate={{
                          height: isPlaying ? [10, 45, 15, 70, 20, 50, 25][i % 7] + "px" : "4px",
                       }}
                       transition={{
                          duration: 0.8 + (i % 3) * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                       }}
                       className="flex-1 bg-white rounded-full min-w-[2.5px] shadow-[0_0_5px_rgba(255,255,255,0.3)]"
                    />
                 ))}
              </div>
           </motion.div>
        </div>

        {/* Track Metadata */}
        <div className="text-center mb-10">
           <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black tracking-tighter mb-3 text-glow"
           >
             Subsurface Drift
           </motion.h2>
           <p className="text-primary/50 text-xl font-light tracking-[0.2em] uppercase italic">Aether Protocol — Neural Mix</p>
        </div>

        {/* Progress System - Improved Alignment */}
        <div className="mb-14 px-8">
           <div className="relative h-[2px] w-full bg-white/5 rounded-full mb-4">
              <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-secondary w-[62%] rounded-full shadow-[0_0_20px_rgba(125,211,252,0.3)]">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute -right-2 -top-2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white] border-4 border-[#071226]" 
                 />
              </div>
           </div>
           <div className="flex justify-between text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] font-mono">
              <span className="text-white/40">2:45</span>
              <span>4:12</span>
           </div>
        </div>

        {/* Cinematic Control Cluster - Balanced Spacing */}
        <div className="flex items-center justify-between px-6 mb-20">
           <button className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all transform active:scale-90 border-white/5">
              <Heart size={20} className="hover:fill-primary hover:text-primary transition-colors" />
           </button>
           <div className="flex items-center gap-8">
              <button className="text-white/30 hover:text-primary transition-all transform active:scale-75">
                 <SkipBack size={28} fill="currentColor" stroke="none" />
              </button>
              <button 
                 onClick={() => setIsPlaying(!isPlaying)}
                 className="w-20 h-20 bg-white text-[#071226] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 {isPlaying ? <Pause size={32} fill="currentColor" stroke="none" /> : <Play size={32} className="ml-1" fill="currentColor" stroke="none" />}
              </button>
              <button className="text-white/30 hover:text-primary transition-all transform active:scale-75">
                 <SkipForward size={28} fill="currentColor" stroke="none" />
              </button>
           </div>
           <button className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all transform active:scale-90 border-white/5">
              <ListMusic size={20} />
           </button>
        </div>

        {/* Vibe Mode Signature - Added Padding Bottom */}
        <div className="flex flex-col items-center gap-6 mb-24 pb-12">
           <motion.button 
              onClick={() => setVibeMode(!vibeMode)}
              className={`w-20 h-10 rounded-full p-1.5 transition-all duration-1000 relative flex items-center shadow-[0_0_40px_rgba(0,0,0,0.5)] ${vibeMode ? 'ai-glow' : 'glass border-white/5'}`}
           >
              <motion.div 
                 animate={{ 
                    x: vibeMode ? 40 : 0,
                    scale: vibeMode ? 1.1 : 1
                 }}
                 className="w-7 h-7 rounded-full bg-white shadow-2xl relative z-10" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[10px] animate-pulse opacity-50" />
           </motion.button>
           <div className="text-center">
              <span className="text-[11px] font-black text-primary tracking-[0.5em] uppercase block mb-2 drop-shadow-[0_0_8px_#7dd3fc]">Neural Vibe Active</span>
              <p className="text-[10px] font-medium text-white/10 uppercase tracking-[0.2em] italic">Learning temporal behavior patterns</p>
           </div>
        </div>
      </div>
    </div>
  );
};
;
