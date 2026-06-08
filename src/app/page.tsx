import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { GameGrid } from '@/components/GameGrid';
import { Footer } from '@/components/Footer';
import { Zap, Shield, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <CosmicBackground>
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Play</h3>
              <p className="text-muted">No loading screens. Jump straight into the action with optimized arcade mechanics.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 border border-accent/30">
                <Trophy className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Records</h3>
              <p className="text-muted">Take control of your progress. We record all your high scores locally on your device for instant, offline access.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Masterful Design</h3>
              <p className="text-muted">High-performance arcade mechanics designed to test your reflexes to the limit in a sleek cosmic environment.</p>
            </div>
          </div>
        </section>

        <GameGrid />

        {/* Call to Action Section */}
        <section id="download" className="py-32 px-6">
          <div className="max-w-4xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Ready to enter the ZONE?</h2>
              <p className="text-xl text-muted mb-12 max-w-xl mx-auto">Join thousands of players in the most immersive neon arcade experience on mobile.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">Download App</button>
                <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.6)]">See All Games</button>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </section>
      </main>

      <Footer />
    </CosmicBackground>
  );
}
