import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, CheckCircle2, ChevronRight, Sparkles, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

import letterImg from '../assets/images/apology_scroll_letter_1793691187044.jpg';

interface Props {
  onNext: () => void;
}

export default function Scene3ApologyLetter({ onNext }: Props) {
  const [acknowledged, setAcknowledged] = useState(false);
  const [stampCount, setStampCount] = useState(0);

  const handleStamp = () => {
    soundFx.playChime(783.99);
    setAcknowledged(true);
    setStampCount((c) => c + 1);

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FB7185', '#F472B6', '#FDE047'],
    });
  };

  return (
    <section id="scene-letter" className="relative py-16 sm:py-24 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60 mb-3">
          <Feather className="w-3.5 h-3.5 text-rose-500" />
          Scene 3 · Straight From The Heart
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-rose-950 mb-3">
          The Official Apology Letter 💌
        </h2>
        <p className="text-sm sm:text-base text-rose-800/70">
          No funny excuses here. Just genuine honesty written down especially for you.
        </p>
      </div>

      {/* The Letter Card */}
      <div className="relative romantic-glass rounded-3xl p-6 sm:p-10 shadow-2xl shadow-rose-200/60 border border-rose-200/80 overflow-hidden">
        {/* Subtle decorative background watermark ribbon */}
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
          <img src={letterImg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Top ribbon bar */}
        <div className="flex items-center justify-between border-b border-rose-200/60 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="text-xs uppercase font-serif-title font-semibold tracking-widest text-rose-800">
              Personal Apology Dispatch
            </span>
          </div>
          <span className="text-xs text-rose-600 font-medium">To: Punyabrita 🌷</span>
        </div>

        {/* Letter Body */}
        <div className="space-y-6 text-rose-950 text-base sm:text-lg leading-relaxed font-normal">
          <p className="font-serif-title text-xl sm:text-2xl font-bold text-rose-900">
            Dear Punyabrita,
          </p>

          <p>
            I'm <strong className="font-semibold text-rose-600">genuinely sorry</strong> about this morning. You called me, but I wasn't properly fresh or ready at that moment.
          </p>

          <p className="bg-rose-50/60 p-4 rounded-2xl border border-rose-100 text-rose-900 italic text-sm sm:text-base">
            "Please don't think I was ignoring you. It was just a badly timed morning situation, and honestly, I should have handled it better."
          </p>

          <p>
            Next time, I'll make sure I'm ready before your call arrives. Because a call from you deserves so much more than a sleepy, unprepared version of me.
          </p>

          <p className="font-semibold text-rose-600 text-lg sm:text-xl">
            Sorry, Punyabrita! ❤️
          </p>
        </div>

        {/* Handwritten signoff */}
        <div className="mt-8 pt-6 border-t border-rose-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-rose-600 uppercase tracking-wider font-medium">Delivered with sincere regret:</p>
            <p className="font-handwriting text-2xl sm:text-3xl text-rose-900 mt-1">
              The Sleepy Boy ✍️
            </p>
          </div>

          {/* Interactive "Stamp as Read" button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleStamp}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                acknowledged
                  ? 'bg-rose-100 text-rose-800 border border-rose-300'
                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm'
              }`}
            >
              <Heart className={`w-4 h-4 ${acknowledged ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>
                {acknowledged ? `Stamped with Forgiveness (${stampCount})` : 'Stamp This Letter 💖'}
              </span>
            </button>
          </div>
        </div>

        {/* Proceed prompt */}
        <div className="mt-8 pt-4 flex justify-end">
          <button
            onClick={() => {
              soundFx.playChime(659.25);
              onNext();
            }}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-xl border border-rose-200 transition-colors cursor-pointer"
          >
            <span>Proceed to My 3 Solemn Promises</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
