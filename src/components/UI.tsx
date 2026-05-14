import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const Button = ({ children, onClick, variant = "primary", className = "" }: ButtonProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-[#071226] font-extrabold shadow-[0_15px_30px_-10px_rgba(125,211,252,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(125,211,252,0.6)]",
    secondary: "glass border border-white/10 text-white font-bold hover:bg-white/10 backdrop-blur-xl",
    ghost: "text-white/30 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] font-bold hover:tracking-[0.4em]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e: any) => onClick?.(e)}
      className={`px-12 py-5 rounded-full transition-all duration-500 flex items-center justify-center gap-3 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={(e: any) => onClick?.(e)}
      className={`glass-card p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};
