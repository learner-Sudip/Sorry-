import { useState } from 'react';
import { Volume2, VolumeX, HeartHandshake } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function TopNav() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    soundFx.toggleAmbient((active) => setIsPlaying(active));
    soundFx.playChime(659.25);
  };

  const scrollTo = (id: string) => {
    soundFx.playChime(587.33);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-rose-100 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('top');
          }}
          className="font-serif-title text-base sm:text-lg font-bold tracking-tight text-rose-950 hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
        >
          A Little Sorry, Punyabrita 💗
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-rose-900/70">
          <button
            onClick={() => scrollTo('scene-surprise')}
            className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Surprise
          </button>
          <button
            onClick={() => scrollTo('scene-incident')}
            className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Incident
          </button>
          <button
            onClick={() => scrollTo('scene-letter')}
            className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Letter
          </button>
          <button
            onClick={() => scrollTo('scene-promises')}
            className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Promises
          </button>
          <button
            onClick={() => scrollTo('scene-court')}
            className="hover:text-rose-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            The Court
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Mute gentle romantic music" : "Play soft romantic acoustic chimes"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isPlaying
                ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-300'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            } whitespace-nowrap shrink-0`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">Music Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          <button
            onClick={() => scrollTo('scene-court')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 active:scale-95 transition-all rounded-full shadow-sm shadow-rose-200 whitespace-nowrap shrink-0"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Hear Case</span>
          </button>
        </div>
      </div>
    </header>
  );
}
