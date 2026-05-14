import { motion } from "motion/react";
import { ChevronLeft, Sparkles, MapPin, Activity } from "lucide-react";
import { Card, Button } from "./UI";
import { Navigation } from "./Navigation";

export const SongMatchMemory = ({ onBack, onComplete, onNavigate }: { onBack: () => void; onComplete: () => void; onNavigate?: (screen: string) => void }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-40 bg-[#071226] relative">
      <div className="px-8 pt-16">
        <header className="flex items-center justify-between mb-10">
          <button onClick={onBack} className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all transform active:scale-90 border-white/5">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Neural Precision</h1>
          <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-white/5 shadow-inner">
             <Sparkles size={18} className="text-secondary animate-pulse" />
          </div>
        </header>

        {/* Hero Album Art with Cinematic Aura */}
        <div className="relative mb-14 group">
            <motion.div 
               animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
               transition={{ duration: 10, repeat: Infinity }}
               className="absolute inset-x-0 -top-20 bottom-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"
            />
            
            <div className="perspective-1000">
               <motion.div
                  whileHover={{ rotateY: 8, rotateX: -8, scale: 1.02 }}
                  className="relative aspect-square rounded-[48px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] glass-premium border-none"
               >
                  <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=800&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-[#071226]/10 to-transparent" />
                  
                  {/* Holographic Scan Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.05)_2px,transparent_2px)] bg-[length:100%_8px] pointer-events-none opacity-20" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                     <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl font-black tracking-tighter mb-3 text-glow"
                     >
                       Midnight Monolith
                     </motion.h2>
                     <p className="text-primary/40 text-[9px] font-black tracking-[0.3em] uppercase italic">Aura Sculptors — Spectral Core</p>
                  </div>
               </motion.div>
            </div>
            
            {/* Floating Context Chips - Improved Alignment */}
            <div className="flex gap-2.5 mt-4 justify-center">
               {['Atmospheric', 'Cognitive Sync'].map(tag => (
                  <span key={tag} className="text-[8px] font-bold glass px-4 py-2 rounded-xl uppercase tracking-[0.2em] text-primary/80 bg-white/5 border-white/5 whitespace-nowrap">
                    {tag}
                  </span>
               ))}
            </div>
        </div>

        <div className="space-y-8 mb-14">
           <div className="grid grid-cols-2 gap-4">
              <Card className="glass-premium border-none bg-white/[0.02] p-6 flex flex-col gap-4 hover:bg-white/[0.05] transition-all">
                 <div className="w-10 h-10 glass rounded-xl flex items-center justify-center bg-white/5">
                    <MapPin size={18} className="text-primary" />
                 </div>
                 <div>
                    <h4 className="font-black tracking-[0.2em] text-[8px] mb-1.5 uppercase text-white/40">Home sessions</h4>
                    <p className="text-white/30 text-[10px] font-medium leading-relaxed uppercase tracking-wider">Matches peak focus state at <span className="text-primary">20:00</span>.</p>
                 </div>
              </Card>
              <Card className="glass-premium border-none bg-white/[0.02] p-6 flex flex-col gap-4 hover:bg-white/[0.05] transition-all">
                 <div className="w-10 h-10 glass rounded-xl flex items-center justify-center bg-white/5">
                    <Activity size={18} className="text-secondary" />
                 </div>
                 <div>
                    <h4 className="font-black tracking-[0.2em] text-[8px] mb-1.5 uppercase text-white/40">Neural Vibe</h4>
                    <p className="text-white/30 text-[10px] font-medium leading-relaxed uppercase tracking-wider">Synced to <span className="text-secondary">68 BPM</span> heart state.</p>
                 </div>
              </Card>
           </div>

           <Card className="glass-premium border-none bg-primary/5 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex gap-4 items-start relative z-10">
                 <div className="w-1 h-12 bg-primary/30 rounded-full" />
                 <p className="text-sm italic text-white/60 font-medium leading-relaxed tracking-wide uppercase">
                   "The spectral density of this track complements your focused neural patterns, easing transition to deep recovery."
                 </p>
              </div>
           </Card>
        </div>

        <div className="flex flex-col gap-4">
           <Button onClick={onComplete} className="w-full py-6 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)]">Evolve Experience</Button>
           <button onClick={onBack} className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em] hover:text-white/30 transition-colors py-4">Discard Result</button>
        </div>
      </div>
      <Navigation activeScreen="Memory" onNavigate={(s) => onNavigate?.(s)} />
    </div>
  );
};
