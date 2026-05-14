import { motion } from "motion/react";
import { ChevronLeft, Info, TrendingUp, Activity, Clock } from "lucide-react";
import { Card, Button } from "./UI";
import { Navigation } from "./Navigation";

export const InsightsDashboard = ({ onNext, onBack, onNavigate }: { onNext: () => void; onBack: () => void; onNavigate?: (screen: string) => void }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-40 bg-[#071226]">
      <div className="px-8 pt-16">
        <header className="flex items-center justify-between mb-10">
          <button onClick={onBack} className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all transform active:scale-90 border-white/5">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Neural Analysis</h1>
          <button className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 border-white/5">
            <Info size={16} />
          </button>
        </header>

        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tight mb-3 text-glow">Sonic Journey</h2>
          <p className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase italic">Real-time spectral cognition insights.</p>
        </div>

        {/* Global Stats Grid - Refined */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="flex flex-col gap-4 border-none glass-premium bg-white/[0.02] p-6">
             <div className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center bg-white/5 shadow-inner">
                <Activity className="text-primary" size={18} />
             </div>
             <div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] block mb-1">Sync integrity</span>
                <span className="text-3xl font-black tracking-tighter text-glow">94.8<span className="text-xs font-light text-primary/40 ml-0.5">%</span></span>
             </div>
          </Card>
          <Card className="flex flex-col gap-4 border-none glass-premium bg-white/[0.02] p-6">
             <div className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center bg-white/5 shadow-inner">
                <Clock className="text-secondary" size={18} />
             </div>
             <div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] block mb-1">Flow duration</span>
                <span className="text-3xl font-black tracking-tighter text-glow">2:42<span className="text-xs font-light text-secondary/40 ml-0.5">HR</span></span>
             </div>
          </Card>
        </div>

        {/* Cinematic Graph Card - Refined Alignment */}
        <Card className="mb-8 p-8 relative overflow-hidden flex flex-col justify-between min-h-[260px] glass-premium bg-white/[0.01]">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50" />
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Mood Trajectory</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Spectral Consistency</h3>
           </div>
           
           <div className="relative z-10 flex items-end h-28 gap-2 mt-8 px-2">
              {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: (20 + Math.random() * 80) + '%' }}
                    transition={{ delay: i * 0.03, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 min-w-[4px] bg-white/10 rounded-full hover:bg-primary/40 transition-all cursor-crosshair group relative"
                  />
              ))}
           </div>
        </Card>

        {/* Narrative Insight - Refined */}
        <Card className="mb-12 border-none glass-premium bg-white/[0.04] p-8 relative group">
          <div className="absolute top-0 right-0 p-6">
             <div className="w-10 h-10 glass rounded-full flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
                <TrendingUp className="text-primary" size={20} />
             </div>
          </div>
          
          <div className="flex flex-col gap-4 relative z-10">
             <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-primary/20 rounded-full" />
                <h4 className="font-black tracking-tight text-xl uppercase italic">Shift Detected</h4>
             </div>
             <p className="text-white/40 text-[11px] font-medium leading-relaxed uppercase tracking-wider max-w-[85%]">
               Neural peaked during melodic techno. Engagement optimal between <span className="text-primary font-bold">Ambient</span> & <span className="text-secondary font-bold">Focus</span>.
             </p>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
           <Button onClick={onNext} className="w-full py-6 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)]">Evolve My Aura</Button>
           <button onClick={onBack} className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em] hover:text-white/30 transition-colors py-4">Return to Stream</button>
        </div>
      </div>
      <Navigation activeScreen="Insights" onNavigate={(s) => onNavigate?.(s)} />
    </div>
  );
};
