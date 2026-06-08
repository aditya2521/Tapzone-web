'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export const GameCard = ({ title, description, iconName, color }: GameCardProps) => {
  // Map my lucide icons
  const LucideIcon = (Icons as Record<string, any>)[iconName] || Icons.Gamepad;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="glass p-6 rounded-3xl flex flex-col gap-4 cursor-pointer group transition-all"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_var(--glow)]"
        style={{ 
          backgroundColor: `${color}20`,
          border: `1px solid ${color}40`,
          '--glow': `${color}60`
        } as React.CSSProperties & { [key: string]: string }}
      >
        <LucideIcon size={32} style={{ color }} />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
      
      <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color }}>
        Play Now
        <Icons.ChevronRight size={14} />
      </div>
    </motion.div>
  );
};
