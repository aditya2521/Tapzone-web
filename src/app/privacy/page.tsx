'use client';

import { CosmicBackground } from '@/components/CosmicBackground';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Shield, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <CosmicBackground>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center">
        {/* Summary Card Container */}
        <div className="w-full max-w-lg flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass w-full p-10 rounded-[48px] border border-white/10 flex flex-col items-center text-center space-y-8 relative overflow-hidden"
          >
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]" />

            {/* Icon Group */}
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative mb-2 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
              <Shield className="w-12 h-12 text-primary relative z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Lock className="w-5 h-5 text-white/90" />
              </div>
            </div>

            {/* Header Text */}
            <div className="space-y-4 relative z-10">
              <h1 className="text-3xl font-bold text-white tracking-tight">Welcome to TapZone</h1>
              <p className="text-muted text-sm leading-relaxed max-w-[300px] mx-auto">
                Before you start exploring the cosmic arcade, please take a moment to review our Terms and Privacy Policy.
              </p>
            </div>

            {/* Features List */}
            <div className="w-full space-y-6 relative z-10">
              <div className="text-center">
                <span className="text-muted">We are committed to a </span>
                <span className="text-primary font-bold">Privacy-First</span>
                <p className="text-muted">experience:</p>
              </div>

              <ul className="space-y-4 text-sm inline-block text-left mx-auto">
                 <li className="flex items-center gap-3 text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                   <span>Your scores and progress are stored locally.</span>
                 </li>
                 <li className="flex items-center gap-3 text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                   <span>AdMob is used to serve personalized ads.</span>
                 </li>
                 <li className="flex items-center gap-3 text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                   <span>You control your ad tracking preferences.</span>
                 </li>
              </ul>
            </div>

            {/* Footer & Actions */}
            <div className="space-y-6 w-full pt-4 relative z-10">
              <p className="text-[12px] text-muted leading-tight max-w-[300px] mx-auto">
                By clicking "Accept", you agree to our Terms of Use and acknowledge our Privacy Policy.
              </p>
              
              <Link 
                href="#full-policy" 
                className="block text-sm text-white hover:text-primary transition-colors hover:underline underline-offset-4"
              >
                Read Full Policies
              </Link>

              <Link 
                href="/"
                className="block w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-3xl transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(139,92,246,0.3)] uppercase tracking-[0.1em] text-lg"
              >
                Accept & Play
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Full Legal Text Section */}
        <motion.section 
          id="full-policy" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl w-full"
        >
          <div className="glass p-8 md:p-12 rounded-[32px] space-y-8 text-muted leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Full Privacy Policy</h2>
              <p>Welcome to TapZone. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you use our application.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Data We Collect</h3>
              <p>For a better experience while using our Service, we use third-party services that may collect information used to identify you, specifically for the delivery of advertisements:</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>High scores and game progress</strong> (stored locally on your device).</li>
                <li><strong>App analytics and crash reports</strong> to help us improve the game experience.</li>
                <li><strong>Advertising Identifiers</strong> (such as Apple's IDFA or Android Ad ID) via Google AdMob to serve personalized ads based on your interests.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Third-Party Advertising</h3>
              <p>We use <strong>Google AdMob</strong> to display ads within the app. By using this app, you acknowledge and agree that these third-party services may collect data about your device and app usage.</p>
              <p className="mt-4">You can learn more about how Google handles your data by visiting their privacy policies:</p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-sm">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
                <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AdMob Privacy Overview</a></li>
              </ul>
              <p className="mt-4">You can opt-out of personalized advertising by going to your iOS device settings (<strong>Settings &gt; Privacy &amp; Security &gt; Tracking</strong>).</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at aditya159121@gmail.com.</p>
            </section>
          </div>
        </motion.section>
      </main>
      <Footer />
    </CosmicBackground>
  );
}
