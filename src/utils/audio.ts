/**
 * Web Audio API synthesized sounds & gentle ambient melody
 * Client-side only, zero external audio asset dependencies.
 */

class SoundController {
  private ctx: AudioContext | null = null;
  private isAmbientPlaying = false;
  private ambientInterval: number | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft sweet chime (e.g. button click or heart pop)
  playChime(pitch: number = 523.25) { // C5 default
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Play a cheerful double bell (for envelope opening / promises)
  playSparkle() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [659.25, 783.99, 1046.5].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.1, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.5);
      });
    } catch {}
  }

  // Play a realistic courtroom wooden gavel sound
  playGavel() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Two strikes "Bang - Bang!"
      [0, 0.22].forEach((offset) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Low frequency thud
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now + offset);
        osc.frequency.exponentialRampToValueAtTime(45, now + offset + 0.12);

        gain.gain.setValueAtTime(0.35, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + offset);
        osc.stop(now + offset + 0.22);
      });
    } catch {}
  }

  // Soft romantic lofi chord progression
  toggleAmbient(onStateChange?: (isPlaying: boolean) => void) {
    this.initCtx();
    if (this.isAmbientPlaying) {
      if (this.ambientInterval) {
        clearInterval(this.ambientInterval);
        this.ambientInterval = null;
      }
      this.isAmbientPlaying = false;
      onStateChange?.(false);
      return false;
    }

    this.isAmbientPlaying = true;
    onStateChange?.(true);

    // Warm chords in F major / D minor (dreamy and sweet)
    const chords = [
      [349.23, 440.00, 523.25, 659.25], // Fmaj7
      [329.63, 392.00, 493.88, 587.33], // Em7
      [293.66, 349.23, 440.00, 523.25], // Dm7
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isAmbientPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = chords[chordIdx % chords.length];
      chordIdx++;

      chord.forEach((freq, noteIdx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + noteIdx * 0.1);

        gain.gain.setValueAtTime(0.04, now + noteIdx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + noteIdx * 0.1 + 1.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + noteIdx * 0.1);
        osc.stop(now + noteIdx * 0.1 + 1.9);
      });
    };

    playChord();
    this.ambientInterval = window.setInterval(playChord, 2200);
    return true;
  }

  getIsAmbientPlaying() {
    return this.isAmbientPlaying;
  }
}

export const soundFx = new SoundController();
