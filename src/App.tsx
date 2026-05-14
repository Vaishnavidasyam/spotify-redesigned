import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { HomeDiscovery } from "./components/HomeDiscovery";
import { ListeningScreen } from "./components/ListeningScreen";
import { AdvancedPlayer } from "./components/AdvancedPlayer";
import { InsightsDashboard } from "./components/InsightsDashboard";
import { MoodFlowGenerator } from "./components/MoodFlowGenerator";
import { SongMatchMemory } from "./components/SongMatchMemory";
import { BackgroundAura } from "./components/BackgroundAura";

enum Screen {
  Splash,
  Home,
  Listening,
  Player,
  Insights,
  Generator,
  Memory
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);

  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const handleNavigation = useCallback((screenStr: string) => {
    const mapping: Record<string, Screen> = {
      'Home': Screen.Home,
      'Listening': Screen.Listening,
      'Memory': Screen.Memory,
      'Insights': Screen.Insights,
      'Generator': Screen.Generator,
      'Player': Screen.Player
    };
    if (mapping[screenStr] !== undefined) {
      navigateTo(mapping[screenStr]);
    }
  }, [navigateTo]);

  return (
    <div className="relative w-full max-w-md mx-auto h-screen bg-surface overflow-hidden shadow-2xl border-x border-white/5">
      <BackgroundAura />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          {currentScreen === Screen.Splash && (
            <SplashScreen 
              onNext={() => navigateTo(Screen.Home)} 
              onNavigate={handleNavigation}
            />
          )}
          
          {currentScreen === Screen.Home && (
            <HomeDiscovery 
              onTryNow={() => navigateTo(Screen.Listening)} 
              onNavigate={handleNavigation}
            />
          )}
          
          {currentScreen === Screen.Listening && (
            <ListeningScreen 
              onComplete={() => navigateTo(Screen.Player)} 
              onCancel={() => navigateTo(Screen.Home)} 
            />
          )}

          {currentScreen === Screen.Player && (
            <AdvancedPlayer 
              onShowInsights={() => navigateTo(Screen.Insights)} 
              onBack={() => navigateTo(Screen.Home)}
            />
          )}

          {currentScreen === Screen.Insights && (
            <InsightsDashboard 
              onNext={() => navigateTo(Screen.Generator)} 
              onBack={() => navigateTo(Screen.Player)} 
              onNavigate={handleNavigation}
            />
          )}

          {currentScreen === Screen.Generator && (
            <MoodFlowGenerator 
              onNext={() => navigateTo(Screen.Memory)} 
              onBack={() => navigateTo(Screen.Insights)} 
              onNavigate={handleNavigation}
            />
          )}

          {currentScreen === Screen.Memory && (
            <SongMatchMemory 
              onComplete={() => navigateTo(Screen.Player)} 
              onBack={() => navigateTo(Screen.Generator)} 
              onNavigate={handleNavigation}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lighting overlay for premium feel */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/20" />
    </div>
  );
}


