import { motion } from "motion/react";
import { Home, Search, Library, Activity, Sparkles } from "lucide-react";

interface NavItem {
  icon: any;
  label: string;
  screen: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: Home, label: 'Home', screen: 'Home' },
  { icon: Search, label: 'Aura', screen: 'Listening' },
  { icon: Library, label: 'Vault', screen: 'Memory' },
  { icon: Activity, label: 'Pulse', screen: 'Insights' },
  { icon: Sparkles, label: 'Core', screen: 'Generator' },
];

export const Navigation = ({ activeScreen, onNavigate }: { activeScreen: string; onNavigate: (screen: string) => void }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[340px] px-6">
      <div className="glass-premium rounded-[28px] h-16 flex items-center justify-around px-2 border-white/5 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-[30px]">
        {NAV_ITEMS.map((item) => {
          const isActive = activeScreen === item.screen;
          return (
            <button 
              key={item.screen} 
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center justify-center transition-all relative px-3 py-1.5 rounded-2xl ${isActive ? 'text-primary' : 'text-white/20 hover:text-white/40'}`}
            >
              <item.icon size={isActive ? 20 : 18} className={`transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_10px_#7dd3fc]' : ''}`} />
              <span className={`text-[7px] font-bold uppercase tracking-widest mt-1.5 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 scale-90'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="nav-glow-active"
                  className="absolute inset-0 bg-primary/5 rounded-2xl blur-[4px] -z-10" 
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
