import { motion } from "motion/react";
import { Bell, Search, Music2 } from "lucide-react";
import { Card, Button } from "./UI";
import { Navigation } from "./Navigation";

const MOODS = [
  { id: 'euphoric', icon: '😊', label: 'Euphoric' },
  { id: 'melancholic', icon: '🌙', label: 'Melancholic' },
  { id: 'electrified', icon: '⚡', label: 'Electrified' },
  { id: 'centered', icon: '🧘', label: 'Centered' },
];

export const HomeDiscovery = ({ onTryNow, onNavigate }: { onTryNow: () => void; onNavigate?: (screen: string) => void }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-40">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full animate-breathing" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-secondary/10 blur-[120px] rounded-full animate-breathing" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="px-8 pt-16 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-white/5 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden')] bg-cover relative p-0.5 shadow-[0_0_20px_rgba(125,211,252,0.1)]">
               <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary border-2 border-surface rounded-full shadow-[0_0_10px_#7dd3fc]" />
            </div>
            <div className="flex flex-col">
               <span className="text-[8px] font-black tracking-[0.4em] text-primary/50 uppercase mb-0.5">Aether AI</span>
               <span className="text-white text-[10px] font-bold tracking-tight">Welcome, Aiden</span>
            </div>
          </div>
          <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110 active:scale-90 border-white/10">
            <Bell size={18} />
          </button>
        </header>

        <h2 className="text-3xl font-black tracking-tight mb-8 text-glow">Good evening</h2>

        <div className="flex gap-3 mb-10 overflow-x-auto no-scrollbar pb-2 -mx-8 px-8">
          {['All', 'Atmospheric', 'Focus', 'Wrapped'].map((cat, i) => (
            <button key={cat} className={`px-6 py-2.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase transition-all whitespace-nowrap ${i === 0 ? 'bg-primary text-[#071226] shadow-[0_10px_20px_rgba(125,211,252,0.2)]' : 'glass text-white/30 hover:text-white/60 hover:bg-white/5'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Hero Card - Improved Proportion */}
        <Card className="mb-12 p-0 bg-transparent border-none overflow-visible group cursor-pointer" onClick={onTryNow}>
           <div className="relative h-[340px] rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center px-8">
              {/* Internal Media */}
              <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&h=1200&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 glass-premium rounded-full flex items-center justify-center mb-8 bg-white/5 group-hover:shadow-[0_0_40px_rgba(125,211,252,0.2)] transition-shadow">
                  <div className="flex items-center gap-1">
                    {[1, 2.5, 1.5, 2, 1.2].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: h * 6 + 'px' }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                        className="w-1 bg-primary rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[9px] font-black tracking-[0.4em] text-primary mb-3 uppercase drop-shadow-[0_0_10px_#7dd3fc]">Neural Discovery</span>
                <p className="text-2xl font-light mb-8 max-w-[280px] leading-tight tracking-tight text-white/90">Curating the perfect soundtrack for your <span className="font-bold text-white italic">unspoken vibe.</span></p>
                <Button onClick={(e) => { e.stopPropagation(); onTryNow(); }} className="px-12 py-5 shadow-2xl">Adapt My Flow</Button>
              </div>
           </div>
        </Card>

        {/* Adaptive AI Playlists - Tightened and Aligned */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="text-xl font-bold tracking-tight">Adaptive Flows</h3>
            <button className="text-white/20 text-[8px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors">Explorer</button>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-8 px-8 py-2">
            {[
              { title: 'Subsurface Drift', artist: 'Aether Protocol', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop', color: 'primary' },
              { title: 'Neon Sanctuary', artist: 'Holo Systems', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?w=400&h=400&fit=crop', color: 'secondary' },
              { title: 'Spectral Echo', artist: 'Neural Core', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop', color: 'primary' },
              { title: 'Cosmic Flow', artist: 'Nova Collective', img: 'https://images.unsplash.com/photo-1534732806146-b3bf32171b48?w=400&h=400&fit=crop', color: 'secondary' },
              { title: 'Pulse State', artist: 'Vector One', img: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400&h=400&fit=crop', color: 'primary' },
            ].map((item) => (
              <motion.div key={item.title} className="min-w-[170px] group cursor-pointer" whileHover={{ y: -6 }}>
                 <div className="relative aspect-square rounded-[32px] overflow-hidden mb-4 shadow-xl">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 border border-white/5 rounded-[32px]" />
                    <div className={`absolute bottom-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-${item.color}`}>
                       <Music2 size={16} />
                    </div>
                 </div>
                 <div className="px-1">
                    <h4 className="font-bold text-sm mb-0.5 tracking-tight group-hover:text-primary transition-colors line-clamp-1">{item.title}</h4>
                    <p className="text-white/20 text-[7px] uppercase tracking-[0.2em] font-black">{item.artist}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mood Continuation - Tightened and Aligned */}
        <div className="mb-14">
          <h3 className="text-xl font-bold tracking-tight mb-6 px-1">Neural Tuning</h3>
          <div className="flex flex-col gap-5">
            {[
              { title: 'Focus Momentum', sub: 'Beta-wave reinforced beats for complex cognition.', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=400&fit=crop', tag: 'High Sync' },
              { title: 'Midnight Recovery', sub: 'Low-frequency restoration for post-deadline cooling.', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?w=800&h=400&fit=crop', tag: 'Deep Rest' },
            ].map((item) => (
              <Card key={item.title} className="p-0 overflow-hidden relative h-36 flex items-end group cursor-pointer border-none shadow-none bg-transparent" onClick={onTryNow}>
                 <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-[2s] group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
                 <div className="absolute inset-0 border border-white/5 rounded-[24px] group-hover:border-primary/20 transition-colors" />
                 <div className="relative p-6 w-full">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[7px] font-black glass-premium px-2.5 py-1 rounded-full text-primary uppercase tracking-[0.3em]">{item.tag}</span>
                       <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    </div>
                    <h4 className="text-base font-bold tracking-tight mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                    <p className="text-white/30 text-[8px] font-medium tracking-wide uppercase leading-relaxed max-w-[240px] line-clamp-1">{item.sub}</p>
                 </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Mapper - Tightened */}
        <div className="mb-8">
           <h3 className="text-xl font-bold tracking-tight mb-6">Current Aura</h3>
           <div className="grid grid-cols-2 gap-4">
              {MOODS.map(mood => (
                 <Card key={mood.id} className="flex flex-col items-center justify-center py-8 gap-3 glass-premium border-none hover:bg-white/[0.04] transition-all cursor-pointer group active:scale-95" onClick={onTryNow}>
                    <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/5">
                       <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{mood.icon}</span>
                    </div>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">{mood.label}</span>
                 </Card>
              ))}
           </div>
        </div>
      </div>

      {/* Neural Bottom Navigation */}
      <Navigation activeScreen="Home" onNavigate={(s) => onNavigate?.(s)} />
    </div>
  );
};
