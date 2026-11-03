import { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, AlertCircle, Clock, User, Coffee, Smile, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

import sleepyBoyImg from '../assets/images/sleepy_boy_morning_call_1793691188575.jpg';

interface Props {
  onNext: () => void;
}

export default function Scene2IncidentReport({ onNext }: Props) {
  const [remorseLevel, setRemorseLevel] = useState(100);
  const [showDossierDetails, setShowDossierDetails] = useState(false);

  const toggleDetails = () => {
    soundFx.playChime(659.25);
    setShowDossierDetails(!showDossierDetails);
  };

  return (
    <section id="scene-incident" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60 mb-3">
          Exhibit A · Case #PB-CALL-0845
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-rose-950 mb-3">
          A Very Serious Morning Investigation! 😂
        </h2>
        <p className="text-sm sm:text-base text-rose-800/70">
          The forensic breakdown of why things didn't go quite as planned when your call came through.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Visual Illustration with Evidence Badge */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="romantic-glass rounded-3xl p-4 sm:p-5 shadow-lg shadow-rose-100 flex-1 flex flex-col justify-between relative overflow-hidden group">
            {/* Stamp */}
            <div className="absolute top-6 right-6 z-10 rotate-12 pointer-events-none">
              <span className="border-2 border-dashed border-rose-500 bg-rose-500/10 text-rose-600 font-bold text-xs uppercase px-2.5 py-1 rounded tracking-wider backdrop-blur-sm">
                CRITICAL FAILURE ⚠️
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-rose-100/50 mb-4">
              <img
                src={sleepyBoyImg}
                alt="Sleepy boy waking up to an unexpected call from Punyabrita"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-xs font-medium opacity-90">Suspect captured on surveillance</p>
                <p className="text-sm font-semibold">"Wait... is Punyabrita actually calling?!"</p>
              </div>
            </div>

            {/* Interactive Sleepy vs Regret slider */}
            <div className="bg-rose-50/70 rounded-2xl p-4 border border-rose-200/60">
              <div className="flex justify-between items-center text-xs font-semibold text-rose-900 mb-1.5">
                <span className="flex items-center gap-1">
                  <Coffee className="w-3.5 h-3.5 text-rose-500" />
                  Regret & Apology Level:
                </span>
                <span className="text-rose-600 font-bold">{remorseLevel}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={remorseLevel}
                onChange={(e) => {
                  setRemorseLevel(Number(e.target.value));
                  soundFx.playChime(400 + Number(e.target.value) * 3);
                }}
                className="w-full accent-rose-500 cursor-pointer h-2 bg-rose-200 rounded-lg"
              />
              <p className="text-[11px] text-rose-600/75 mt-1.5 text-center italic">
                {remorseLevel === 100
                  ? 'Maximum repentance! Ready to submit all coffee apologies.'
                  : 'Still hopelessly trying to wake up and look decent!'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Official Incident Report Document */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="romantic-glass rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100 relative flex-1 flex flex-col justify-between border border-rose-200">
            {/* Header of the report */}
            <div>
              <div className="flex items-center justify-between border-b border-rose-200/80 pb-4 mb-6">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-rose-950 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-500" />
                    <span>Official Morning Incident Dossier</span>
                  </h3>
                  <p className="text-xs text-rose-700/70 mt-0.5">
                    Department of Morning Readiness & Romantic Protocol
                  </p>
                </div>
                <span className="text-xs font-mono bg-rose-100/80 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
                  STATUS: GUILTY 🥺
                </span>
              </div>

              {/* Data fields */}
              <div className="space-y-3.5 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/70 border border-rose-100 gap-1">
                  <span className="text-rose-800/70 text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    Incident Time
                  </span>
                  <span className="font-semibold text-rose-950">This Morning ☀️ (Unexpectedly Sweet)</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/70 border border-rose-100 gap-1">
                  <span className="text-rose-800/70 text-xs font-medium flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-rose-500" />
                    Caller on Record
                  </span>
                  <span className="font-semibold text-rose-600 flex items-center gap-1">
                    <span>Punyabrita</span>
                    <span className="text-xs text-rose-400">(The VIP Who Deserved Full Attention)</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/70 border border-rose-100 gap-1">
                  <span className="text-rose-800/70 text-xs font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-rose-500" />
                    The Suspect
                  </span>
                  <span className="font-semibold text-rose-950">One completely unprepared boy 🥱</span>
                </div>

                <div className="p-3 rounded-xl bg-white/70 border border-rose-100">
                  <div className="text-rose-800/70 text-xs font-medium mb-1">Suspect Condition at Timestamp:</div>
                  <div className="text-rose-950 text-xs sm:text-sm font-medium leading-relaxed">
                    Not properly fresh, 0% hair brushed, still trapped in morning sleepy mode, and definitely not camera/call ready!
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 border border-rose-100">
                  <div className="text-rose-800/70 text-xs font-medium mb-1">True Root Cause:</div>
                  <div className="text-rose-950 text-xs sm:text-sm font-medium leading-relaxed">
                    Completely caught off guard by such a lovely call — brain had not finished booting up! 🧠⚡
                  </div>
                </div>
              </div>

              {/* The funny quote */}
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-rose-100/80 to-purple-100/80 border border-rose-200">
                <p className="text-xs sm:text-sm text-rose-900 font-medium italic text-center">
                  "Apparently, my morning preparation department failed its very first inspection!" 😂💔
                </p>
              </div>
            </div>

            {/* Bottom action to proceed to the letter */}
            <div className="mt-6 pt-4 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-rose-700/70">
                Now entering evidence item #2: The Official Letter
              </span>
              <button
                onClick={() => {
                  soundFx.playChime(659.25);
                  onNext();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-rose-500 hover:bg-rose-600 transition-all flex items-center justify-center gap-2 shadow-sm shadow-rose-200 cursor-pointer"
              >
                <span>Read Official Apology</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
