import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Sparkles, Copy, Check, MessageCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function Scene7FinalCelebration() {
  const [selectedReply, setSelectedReply] = useState<string>('Okay fine, you are forgiven! ❤️');
  const [copied, setCopied] = useState(false);
  const [sentSmile, setSentSmile] = useState(false);

  const replyOptions = [
    'Okay fine, you are forgiven! ❤️',
    'Case dismissed, but penalty chocolate is due! 🍫😂',
    'Next time answer in 2 rings, sleepyhead! 📞✨',
    'Deal accepted! Full attention next morning! 🤝💗',
  ];

  const handleSendSmile = () => {
    soundFx.playSparkle();
    setSentSmile(true);

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#F43F5E', '#EC4899', '#F472B6', '#FBBF24'],
    });
  };

  const copyToClipboard = () => {
    soundFx.playChime(659.25);
    const message = `Punyabrita's Verdict: "${selectedReply}" ⚖️❤️\n(Reply to Operation: Sorry, Punyabrita!)`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hey! I reviewed your apology website. My official verdict: "${selectedReply}" ⚖️❤️`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <section id="scene-final" className="relative py-20 px-4 max-w-4xl mx-auto text-center">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/40 via-purple-200/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="romantic-glass rounded-3xl p-8 sm:p-12 shadow-2xl shadow-rose-200/70 border border-rose-200/80 relative z-10 overflow-hidden">
        {/* Animated Heart Centerpiece */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-400 via-pink-500 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-300/80 mb-6 cursor-pointer"
          onClick={() => {
            soundFx.playChime(700);
            confetti({ particleCount: 25, spread: 50, origin: { y: 0.6 } });
          }}
        >
          <Heart className="w-10 h-10 fill-white drop-shadow-sm" />
        </motion.div>

        {/* Closing Title */}
        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-4 leading-tight">
          Thank you for hearing my case, Punyabrita! 🌸
        </h2>

        <p className="text-base sm:text-lg text-rose-900/80 font-normal max-w-xl mx-auto mb-2">
          One little apology from me, and a promise to do better next time.
        </p>

        <p className="text-sm sm:text-base text-rose-700/80 font-light max-w-md mx-auto mb-8">
          Stay happy, keep smiling, and please don't give this poor boy a lifetime sentence! 😂❤️
        </p>

        {/* The Golden Final Line */}
        <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-rose-100/90 via-pink-50/90 to-purple-100/90 border border-rose-200 shadow-inner mb-10 text-left sm:text-center">
          <p className="font-serif-title text-lg sm:text-xl font-bold text-rose-950 leading-relaxed">
            "Subah main ready nahi tha tumhari call ke liye... lekin agli baar meri taraf se koi excuse nahi hoga. Bas tumhara call aur meri poori attention. Deal, Your Honour? 😂❤️"
          </p>
        </div>

        {/* Send a Little Smile Interactive Card */}
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-200 text-left shadow-sm">
          <h3 className="font-serif-title text-lg font-bold text-rose-950 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>Send Him Your Verdict & A Little Smile 💗</span>
          </h3>
          <p className="text-xs text-rose-700/80 mb-4">
            Pick what response you want to send back to the accused:
          </p>

          {/* Quick choices */}
          <div className="space-y-2 mb-6">
            {replyOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  soundFx.playChime(600);
                  setSelectedReply(opt);
                }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between border ${
                  selectedReply === opt
                    ? 'bg-rose-50 border-rose-400 text-rose-950 font-semibold shadow-xs ring-1 ring-rose-300'
                    : 'bg-white border-rose-100 text-rose-800 hover:bg-rose-50/50'
                }`}
              >
                <span>{opt}</span>
                {selectedReply === opt && <Check className="w-4 h-4 text-rose-600 shrink-0" />}
              </button>
            ))}
          </div>

          {/* Main Action: Send A Little Smile button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleSendSmile}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-95 transition-all shadow-md shadow-rose-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Send a Little Smile 💗</span>
            </button>

            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              title="Copy reply text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Reply'}</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
              title="Send reply on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <AnimatePresence>
            {sentSmile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-3 border-t border-rose-100 text-center"
              >
                <p className="text-xs font-semibold text-rose-600">
                  ✨ A sweet smile was registered! Somewhere, a boy just sighed with immense relief. 🥰
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quiet Romantic Footer */}
        <div className="mt-12 pt-6 border-t border-rose-200/60 text-xs text-rose-600/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>A small mistake, a genuine apology, and a little extra affection.</span>
          <span className="font-handwriting text-lg text-rose-800">Made with 💖 for Punyabrita</span>
        </div>
      </div>
    </section>
  );
}
