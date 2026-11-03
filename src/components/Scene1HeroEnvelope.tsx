import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart, ArrowDown, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

// Generated image asset
import envelopeImg from '../assets/images/envelope_letter_surprise_1793691185580.jpg';

interface Props {
  onOpenSurprise: () => void;
}

export default function Scene1HeroEnvelope({ onOpenSurprise }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) {
      onOpenSurprise();
      return;
    }
    setIsOpen(true);
    soundFx.playSparkle();

    // Trigger soft romantic confetti with pink and gold tones
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#F472B6', '#FBCFE8', '#FDE047', '#FDA4AF', '#E9D5FF'],
    });

    setTimeout(() => {
      onOpenSurprise();
    }, 1100);
  };

  return (
    <section
      id="scene-surprise"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden"
    >
      {/* Decorative radial romantic ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto text-center relative z-20">
        {/* Soft greeting label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50/90 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
          <span>Special Delivery for Someone Amazing</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </motion.div>

        {/* Main Name & Headline with beautiful typography */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-rose-950 mb-4 leading-tight text-balance"
        >
          Hey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600">Punyabrita</span>! 🌷
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-rose-900/80 max-w-xl mx-auto font-light mb-2 leading-relaxed"
        >
          I've got a little confession...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xs sm:text-sm text-rose-700/70 font-medium mb-10 max-w-md mx-auto"
        >
          An unexpected call, an unprepared boy, and one very special apology.
        </motion.p>

        {/* The Interactive Envelope Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-md mx-auto group"
        >
          <div className="romantic-glass rounded-3xl p-4 sm:p-6 shadow-xl shadow-rose-200/50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-300/40">
            {/* Visual Envelope Photo Asset */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 bg-rose-50">
              <img
                src={envelopeImg}
                alt="Romantic wax sealed love letter envelope for Punyabrita"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isOpen ? 'scale-105 filter brightness-105' : 'group-hover:scale-102'
                }`}
              />

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Handwritten note tag */}
              <div className="absolute bottom-3 left-3 right-3 text-left bg-white/90 backdrop-blur-md rounded-xl p-2.5 px-3 border border-rose-200/80 shadow-md">
                <p className="font-handwriting text-rose-900 text-lg leading-snug">
                  "Someone has a very important apology to make to you..."
                </p>
                <div className="flex items-center justify-between text-[11px] text-rose-500 font-medium mt-0.5">
                  <span>From: The sleepy boy</span>
                  <span>To: Punyabrita 💖</span>
                </div>
              </div>
            </div>

            {/* Interactive Open Button */}
            <div className="space-y-3">
              <button
                onClick={handleOpen}
                className="w-full py-3.5 px-6 rounded-2xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 active:scale-[0.98] transition-all shadow-md shadow-rose-300/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{isOpen ? 'Opening Surprise...' : 'Open Your Surprise 💌'}</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>

              <p className="text-[11px] text-rose-700/60 text-center font-normal">
                {isOpen
                  ? '✨ Unsealing the dossier of events...'
                  : 'Click to break the wax seal & reveal the story'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Little scroll-down prompt */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-12 flex flex-col items-center gap-1 text-rose-600/70 cursor-pointer"
          onClick={() => {
            soundFx.playChime(523.25);
            onOpenSurprise();
          }}
        >
          <span className="text-xs font-medium tracking-wide">Scroll to investigate the incident</span>
          <ArrowDown className="w-4 h-4 text-rose-400" />
        </motion.div>
      </div>
    </section>
  );
}
