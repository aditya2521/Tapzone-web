'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">TAPZONE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link href="/#games" className="hover:text-primary transition-colors">Games</Link>
          <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>

        </div>

        <div>
          <Link 
            href="/#download" 
            className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
};
