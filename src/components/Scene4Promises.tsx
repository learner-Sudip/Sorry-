import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, SunMedium, BellRing, Sparkles, Check, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

interface Props {
  onNext: () => void;
}

export default function Scene4Promises({ onNext }: Props) {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
  });

  const [sealed, setSealed] = useState(false);

  const toggleCheck = (id: number) => {
    soundFx.playChime(600 + id * 100);
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSeal = () => {
    soundFx.playSparkle();
    setSealed(true);
    setChecked({ 1: true, 2: true, 3: true });

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F472B6', '#C084FC', '#FDE047', '#FDA4AF'],
    });
  };

  const promises = [
    {
      id: 1,
      title: 'Promise #1: No Unprepared Surprises',
      desc: 'No more unprepared morning surprises. Morning mode will be strictly turned off before anything else!',
      icon: SunMedium,
      color: 'from-amber-400 to-rose-400',
    },
    {
      id: 2,
      title: 'Promise #2: Immediate Readiness',
      desc: "I'll always try to be properly fresh and ready whenever you call. Your calls take top priority.",
      icon: BellRing,
      color: 'from-rose-400 to-pink-500',
    },
    {
      id: 3,
      title: 'Promise #3: Pinky Promise',
      desc: 'No more sleepy excuses. Bas tumhara call aur meri poori attention. 100% genuine pinky promise! 🤙',
      icon: ShieldCheck,
      color: 'from-purple-400 to-indigo-500',
    },
  ];

  return (
    <section id="scene-promises" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          Scene 4 · The Formal Commitment
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-rose-950 mb-3">
          Three Little Promises 🤝
        </h2>
        <p className="text-sm sm:text-base text-rose-800/70">
          Action speaks louder than words, but here are the three golden rules I promise to follow:
        </p>
      </div>

      {/* The 3 Promise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {promises.map((p) => {
          const Icon = p.icon;
          const isChecked = checked[p.id];

          return (
            <motion.div
              key={p.id}
              whileHover={{ y: -4 }}
              onClick={() => toggleCheck(p.id)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative border ${
                isChecked
                  ? 'romantic-glass border-rose-300 shadow-lg shadow-rose-100 ring-2 ring-rose-200/50'
                  : 'bg-white/50 border-gray-200 opacity-60'
              }`}
            >
              {/* Checkmark bubble */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${p.color} text-white shadow-md shadow-rose-200`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                    isChecked
                      ? 'bg-rose-500 border-rose-500 text-white shadow-sm'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-4 h-4" />}
                </div>
              </div>

              <h3 className="font-serif-title text-lg font-bold text-rose-950 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-rose-900/80 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-center justify-between text-[11px] text-rose-600 font-medium">
                <span>{isChecked ? 'Accepted & Signed' : 'Click to accept'}</span>
                <span>{isChecked ? '✓ Active' : 'Pending'}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Treaty Seal Box */}
      <div className="romantic-glass rounded-2xl p-6 text-center max-w-xl mx-auto border border-rose-200/80 shadow-md">
        <h4 className="font-serif-title text-base sm:text-lg font-bold text-rose-950 mb-1">
          {sealed ? '🎉 Treaty Officially Ratified!' : 'Seal the Treaty with Punyabrita'}
        </h4>
        <p className="text-xs text-rose-700/80 mb-4">
          {sealed
            ? 'Both parties have entered this irrevocable agreement of morning preparedness.'
            : 'Click below to stamp and lock all three promises forever.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleSeal}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              sealed
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-200'
            }`}
          >
            {sealed ? '✓ Treaty Sealed with Honor 🤙' : 'Pinky Promise & Seal 🤙'}
          </button>

          <button
            onClick={() => {
              soundFx.playChime(659.25);
              onNext();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-rose-700 bg-rose-100/80 hover:bg-rose-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>One Last Thing... 👀</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
