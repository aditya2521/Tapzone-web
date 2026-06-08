import React from 'react';
import Link from 'next/link';
import { Gamepad2, GitBranch, X, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-black/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="p-2 bg-primary rounded-lg">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">TAPZONE</span>
          </Link>
          <p className="text-muted max-w-sm mb-8 leading-relaxed">
            The ultimate mobile neon arcade. Compete for high scores and master your reflexes in a cosmic environment.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors"><X size={20} /></a>
            <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors"><GitBranch size={20} /></a>
            <a href="#" className="p-2 rounded-full glass hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Product</h4>
          <ul className="flex flex-col gap-4 text-muted text-sm font-medium">
            <li><Link href="/#games" className="hover:text-primary transition-colors">Games</Link></li>
            <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/#download" className="hover:text-primary transition-colors">Download</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal</h4>
          <ul className="flex flex-col gap-4 text-muted text-sm font-medium">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>

          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-xs font-bold uppercase tracking-widest">
        <span>© 2026 TAPZONE NEON ARCADE. All rights reserved.</span>
        <span>Crafted for the future.</span>
      </div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] -z-10 rounded-full" />
    </footer>
  );
};
