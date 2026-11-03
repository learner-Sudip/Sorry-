/**
 * Operation: Sorry, Punyabrita! 💗
 * A personalized romantic apology experience.
 */

import TopNav from './components/TopNav';
import FloatingParticles from './components/FloatingParticles';
import Scene1HeroEnvelope from './components/Scene1HeroEnvelope';
import Scene2IncidentReport from './components/Scene2IncidentReport';
import Scene3ApologyLetter from './components/Scene3ApologyLetter';
import Scene4Promises from './components/Scene4Promises';
import Scene5FlirtyMoment from './components/Scene5FlirtyMoment';
import Scene6Courtroom from './components/Scene6Courtroom';
import Scene7FinalCelebration from './components/Scene7FinalCelebration';

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FAF5FF] to-[#FFF0F5] text-rose-950 font-sans selection:bg-rose-200 selection:text-rose-900 relative"
    >
      {/* Floating Petals, Hearts, and Tap FX */}
      <FloatingParticles />

      {/* Top Bar Contract Navigation */}
      <TopNav />

      {/* Main Story Container */}
      <main className="relative z-20 space-y-8 sm:space-y-12">
        {/* Scene 1: Welcome Envelope Surprise */}
        <Scene1HeroEnvelope onOpenSurprise={() => scrollTo('scene-incident')} />

        {/* Scene 2: The Morning Incident Investigation Report */}
        <Scene2IncidentReport onNext={() => scrollTo('scene-letter')} />

        {/* Scene 3: The Official Apology Letter */}
        <Scene3ApologyLetter onNext={() => scrollTo('scene-promises')} />

        {/* Scene 4: The Three Little Promises */}
        <Scene4Promises onNext={() => scrollTo('scene-flirt')} />

        {/* Scene 5: A Little Flirting Moment */}
        <Scene5FlirtyMoment onNext={() => scrollTo('scene-court')} />

        {/* Scene 6: The Forgiveness Court (Lawyer theme) */}
        <Scene6Courtroom onForgiven={() => scrollTo('scene-final')} />

        {/* Scene 7: Final Screen & Send a Little Smile */}
        <Scene7FinalCelebration />
      </main>
    </div>
  );
}
