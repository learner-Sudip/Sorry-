import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Heart, Sparkles, AlertTriangle, Coffee, Gift, ChevronRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

import gavelImg from '../assets/images/courtroom_cute_gavel_1793691186699.jpg';

interface Props {
  onForgiven: () => void;
}

export default function Scene6Courtroom({ onForgiven }: Props) {
  const [verdict, setVerdict] = useState<'pending' | 'forgiven' | 'objected'>('pending');
  const [appealCount, setAppealCount] = useState(0);
  const [bribes, setBribes] = useState<string[]>([]);

  const handleForgive = () => {
    soundFx.playGavel();
    setVerdict('forgiven');

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F43F5E', '#EC4899', '#A855F7', '#FBBF24'],
    });

    onForgiven();
  };

  const handleObject = () => {
    soundFx.playChime(420);
    setVerdict('objected');
    const newCount = appealCount + 1;
    setAppealCount(newCount);

    const bribeCatalog = [
      '🍫 1x Virtual Dairy Milk Silk (Unlimited Hazelnuts)',
      '☕ 1x Premium Handcrafted Iced Coffee / Boba Treat',
      '⏰ Mandatory 15-Minute Alarm Set Before All Calls',
      '💌 Lifetime immunity from being left on seen',
      '🍪 1x Box of Freshly Baked Warm Cookies',
    ];

    if (newCount <= bribeCatalog.length) {
      setBribes((prev) => [...prev, bribeCatalog[newCount - 1]]);
    }
  };

  return (
    <section id="scene-court" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      {/* Courtroom Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200/60 mb-3">
          <Scale className="w-3.5 h-3.5 text-rose-500" />
          The High Court of Punyabrita
        </span>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-rose-950 mb-3">
          Your Honour, May I Please Be Forgiven? 🥺
        </h2>
        <p className="text-sm sm:text-base text-rose-800/70">
          The courtroom is in session. The accused stands before Chief Justice Punyabrita.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Courtroom visual illustration */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="romantic-glass rounded-3xl p-5 shadow-xl shadow-rose-100 flex-1 flex flex-col justify-between border border-rose-200">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-rose-100 mb-4">
              <img
                src={gavelImg}
                alt="Cute courtroom gavel and scales of justice for Punyabrita"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-mono uppercase bg-rose-600/90 px-2 py-0.5 rounded tracking-wider">
                  Presiding Officer
                </span>
                <p className="font-serif-title text-base font-semibold mt-1">
                  Justice Punyabrita, Legal Scholar & Judge
                </p>
              </div>
            </div>

            <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200 text-xs text-rose-900 space-y-2">
              <div className="flex justify-between font-medium">
                <span>Charge:</span>
                <span className="text-rose-600 font-semibold">Morning Unpreparedness</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Plea:</span>
                <span className="text-rose-700 font-semibold">Guilty with Remorse 🙇‍♂️</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Maximum Sentence:</span>
                <span className="text-rose-600 font-semibold">Cold silence / No smiles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Verdict Bench */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="romantic-glass rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100 relative flex-1 flex flex-col justify-between border border-rose-200">
            <div>
              <div className="text-center py-4 mb-4">
                <p className="font-serif-title text-2xl sm:text-3xl font-bold text-rose-950 mb-2">
                  "Ab maaf bhi kar do, Your Honour? 🥺"
                </p>
                <p className="text-xs sm:text-sm text-rose-700/80 font-normal">
                  The defense rests. The verdict is entirely in your capable hands!
                </p>
              </div>

              {/* Court interactive responses */}
              <AnimatePresence mode="wait">
                {verdict === 'forgiven' && (
                  <motion.div
                    key="forgiven"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center mb-6 shadow-sm"
                  >
                    <div className="inline-flex p-2.5 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-title text-xl font-bold text-emerald-950 mb-1">
                      VERDICT: CASE CLOSED — FORGIVEN! 🎉
                    </h3>
                    <p className="text-sm text-emerald-800 font-medium">
                      "Justice has been served! Thank you, Your Honour. I promise to improve my morning performance. 😂❤️"
                    </p>
                    <p className="text-xs text-emerald-700/70 mt-2">
                      Order of the Court: The accused is granted full clemency and smiles!
                    </p>
                  </motion.div>
                )}

                {verdict === 'objected' && (
                  <motion.div
                    key="objected"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-center mb-6 shadow-sm"
                  >
                    <div className="inline-flex p-2 rounded-full bg-amber-100 text-amber-700 mb-2">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-title text-lg font-bold text-amber-950 mb-1">
                      Objection Overruled By The Heart! 😂
                    </h3>
                    <p className="text-sm text-amber-900 font-medium leading-relaxed">
                      "Arey madam, itni badi saza? Appeal karne ka mauka toh dijiye! The accused requests one final chance to prove himself! 😂❤️"
                    </p>

                    {/* Offered Bribes List */}
                    {bribes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-amber-200 text-left">
                        <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Gift className="w-3.5 h-3.5 text-amber-600" />
                          Emergency Settlement Offers on Table:
                        </p>
                        <ul className="space-y-1.5 text-xs text-amber-900 font-medium">
                          {bribes.map((b, idx) => (
                            <li key={idx} className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-lg border border-amber-100">
                              <span>✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4 border-t border-rose-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Button 1: Forgive */}
                <button
                  onClick={handleForgive}
                  className="py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 active:scale-95 transition-all shadow-md shadow-rose-300/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Case Closed — Forgiven ❤️</span>
                </button>

                {/* Button 2: Demand more apology / Thoda aur sorry */}
                <button
                  onClick={handleObject}
                  className="py-3.5 px-5 rounded-2xl font-bold text-sm text-rose-800 bg-rose-100/90 hover:bg-rose-200 active:scale-95 transition-all border border-rose-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Thoda aur sorry bolo! 😂</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-rose-700/60 font-medium">
                (Clicking 'Thoda aur sorry' will trigger increasingly desperate defense appeals!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
