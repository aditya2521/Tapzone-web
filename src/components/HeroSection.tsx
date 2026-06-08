'use client';

import { motion } from 'framer-motion';
import { AppStoreIcon, PlayStoreIcon } from './StoreIcons';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Neon Arcade Experience
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic uppercase">
          <span className="text-white">TAP</span>
          <span className="text-primary hover:text-secondary duration-500 cursor-default">ZONE</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted mb-10 max-w-2xl mx-auto font-medium">
          Dozens of high-speed mini-games designed for focus, reflexes, and pure cosmic fun. Right in your pocket.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
            <AppStoreIcon className="w-6 h-6" />
            Download for iOS
          </button>
          <button className="flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-3 rounded-2xl font-bold hover:bg-white/10 hover:border-white/40 transition-all">
            <PlayStoreIcon className="w-6 h-6" />
            Get it on Android
          </button>
        </div>
      </motion.div>

      {/* Decorative neon pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] -z-10 rounded-full animate-pulse" />
    </section>
  );
};
