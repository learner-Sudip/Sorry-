import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Heart, Sparkles, ChevronRight, Smile } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface Props {
  onNext: () => void;
}

export default function Scene5FlirtyMoment({ onNext }: Props) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    soundFx.playChime(740);
    setRevealed(true);
  };

  return (
    <section id="scene-flirt" className="relative py-16 sm:py-20 px-4 max-w-3xl mx-auto">
      <div className="romantic-glass rounded-3xl p-6 sm:p-10 shadow-xl shadow-rose-200/50 border border-rose-200 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60 mb-4">
          <Eye className="w-3.5 h-3.5 text-rose-500" />
          A Little Honest Truth
        </span>

        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-rose-950 mb-6">
          One Last Thing... 👀
        </h2>

        {/* Flirty message card */}
        <div className="max-w-xl mx-auto bg-gradient-to-b from-white/90 to-rose-50/70 p-6 sm:p-8 rounded-2xl border border-rose-200/80 shadow-sm mb-8">
          <p className="text-base sm:text-lg text-rose-950 font-normal leading-relaxed mb-4">
            "Honestly, <span className="font-semibold text-rose-600">Punyabrita</span>, I wasn't prepared for your call this morning..."
          </p>

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-rose-600 bg-rose-100 hover:bg-rose-200 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Tap to reveal the second half... 🙈</span>
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-2 pt-4 border-t border-rose-200"
            >
              <p className="font-serif-title text-lg sm:text-2xl font-bold text-rose-600 leading-snug">
                "But I don't think I'll ever be fully prepared for how effortlessly you manage to distract me. 😂❤️"
              </p>
              <p className="text-xs text-rose-700/70 mt-3 font-medium">
                (Factually checked by independent forensic morning scientists.)
              </p>
            </motion.div>
          )}
        </div>

        {/* Next to courtroom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              soundFx.playChime(659.25);
              onNext();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 transition-all shadow-md shadow-rose-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Present Defense to Judge Punyabrita ⚖️</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
