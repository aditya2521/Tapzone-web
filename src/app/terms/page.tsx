import { CosmicBackground } from '@/components/CosmicBackground';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function TermsPage() {
  return (
    <CosmicBackground>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Terms of Service</h1>

        <div className="glass p-8 md:p-12 rounded-[32px] space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By downloading or using the TapZone application, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. License to Use</h2>
            <p>We grant you a personal, non-exclusive, non-transferable, limited license to use the TapZone application for your personal, non-commercial entertainment purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Modify, decompile, or reverse engineer the application.</li>
              <li>Use any cheats, bots, or hacks to manipulate game scores.</li>
              <li>Use the application for any illegal purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>All content, designs, graphics, and code within TapZone are the intellectual property of TapZone and its creators. You may not use our brand assets without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>The application is provided &quot;as is&quot; without any warranties of any kind. We do not guarantee that the application will always be available or error-free.</p>
          </section>
        </div>
      </main>
      <Footer />
    </CosmicBackground>
  );
}
