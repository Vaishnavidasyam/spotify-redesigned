import { motion } from "motion/react";
import { ChevronLeft, Sliders, Zap, Wind, Moon } from "lucide-react";
import { Card, Button } from "./UI";
import { Navigation } from "./Navigation";

export const MoodFlowGenerator = ({ onNext, onBack, onNavigate }: { onNext: () => void; onBack: () => void; onNavigate?: (screen: string) => void }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-40 bg-[#071226] relative">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
           animate={{ opacity: [0.05, 0.1, 0.05] }}
           transition={{ duration: 8, repeat: Infinity }}
           className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" 
        />
      </div>

      <div className="px-8 pt-16 relative z-10">
        <header className="flex items-center justify-between mb-10">
          <button onClick={onBack} className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all transform active:scale-90 border-white/5">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Vibe Modulation</h1>
          <button className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 border-white/5">
            <Sliders size={18} />
          </button>
        </header>

        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tight mb-3 text-glow">Neural Tuning</h2>
          <p className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase italic leading-loose">Calibrating spectral density for next session.</p>
        </div>

        {/* Cinematic Mood Graph Visual - Optimized Proportion */}
        <Card className="mb-10 p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px] glass-premium bg-white/[0.01]">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/5 opacity-40 shadow-inner" />
           
           <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-[0.03]">
              {Array.from({ length: 60 }).map((_, i) => (
                 <div key={i} className="flex-1 h-16 border-l border-white" />
              ))}
           </div>
           
           <svg className="w-full h-full p-2 overflow-visible relative z-10" viewBox="0 0 400 200">
              <defs>
                 <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="100%" stopColor="#c8a0f0" />
                 </linearGradient>
              </defs>
              
              <motion.path
                 d="M0 160 Q 60 20, 150 140 T 300 60 T 400 180"
                 fill="none"
                 stroke="url(#curveGradient)"
                 strokeWidth="3"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              
              {/* Dynamic Pulse Markers */}
              {[
                 { x: 60, y: 35, label: 'Apex' },
                 { x: 150, y: 140, label: 'Sync' },
                 { x: 300, y: 60, label: 'Focus' }
              ].map((point, i) => (
                 <motion.g 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                 >
                    <circle cx={point.x} cy={point.y} r="3" fill="white" />
                    <text x={point.x} y={point.y - 10} textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="7" className="font-black tracking-[0.2em] uppercase">{point.label}</text>
                 </motion.g>
              ))}
           </svg>
        </Card>

        {/* Advanced Precision Modulators - Tightened */}
        <div className="space-y-8 mb-16 px-2">
           {[
              { label: 'Neural Sync Range', icon: Zap, value: 72, color: 'text-primary' },
              { label: 'Atmospheric Density', icon: Wind, value: 45, color: 'text-secondary' },
              { label: 'Spectral Depth', icon: Moon, value: 88, color: 'text-tertiary' },
           ].map(item => (
              <div key={item.label} className="group cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                       <item.icon size={16} className={`${item.color} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all`} />
                       <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                       <span className="text-lg font-bold text-white tracking-tighter">{item.value}</span>
                       <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.1em]">ms</span>
                    </div>
                 </div>
                 <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: item.value + '%' }}
                       transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                       className={`h-full bg-current shadow-[0_0_12px_currentColor] ${item.color.replace('text-', 'bg-')}`}
                    />
                 </div>
              </div>
           ))}
        </div>

        <div className="flex flex-col gap-4">
           <Button onClick={onNext} className="w-full py-6 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)]">Initialize Session</Button>
           <button className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em] hover:text-white/30 transition-colors py-4">Purge Buffer Settings</button>
        </div>
      </div>
      <Navigation activeScreen="Generator" onNavigate={(s) => onNavigate?.(s)} />
    </div>
  );
};
