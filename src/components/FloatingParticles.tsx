import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'petal' | 'sparkle';
  color: string;
}

interface ClickHeart {
  id: number;
  x: number;
  y: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);

  useEffect(() => {
    // Generate gentle background floating particles
    const items: Particle[] = [];
    const colors = ['#F472B6', '#FBCFE8', '#E9D5FF', '#C084FC', '#FDA4AF', '#F43F5E'];
    const types: ('heart' | 'petal' | 'sparkle')[] = ['heart', 'petal', 'sparkle'];

    for (let i = 0; i < 22; i++) {
      items.push({
        id: i,
        x: Math.random() * 95,
        y: Math.random() * 100,
        size: Math.floor(Math.random() * 14) + 12,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 5,
        type: types[i % types.length],
        color: colors[i % colors.length],
      });
    }
    setParticles(items);

    // Global click handler to spawn a burst of cute hearts on screen tap
    const handleGlobalClick = (e: MouseEvent) => {
      // Avoid spamming if clicking input
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const newId = Date.now() + Math.random();
      setClickHearts((prev) => [
        ...prev.slice(-8), // Keep max 8 active
        { id: newId, x: e.clientX, y: e.clientY },
      ]);

      setTimeout(() => {
        setClickHearts((prev) => prev.filter((h) => h.id !== newId));
      }, 1000);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Ambient background floating elements */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none opacity-40 hover:opacity-80 transition-opacity"
          style={{
            left: `${p.x}vw`,
            bottom: `-20px`,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [`${p.x}vw`, `${p.x + (Math.sin(p.id) * 6)}vw`],
            rotate: [0, p.id % 2 === 0 ? 360 : -360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.type === 'heart' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={p.color}
              className="drop-shadow-sm"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === 'petal' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke={p.color}
              strokeWidth="1.5"
            >
              <path
                d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z"
                fill={`${p.color}88`}
              />
            </svg>
          )}

          {p.type === 'sparkle' && (
            <span
              style={{ fontSize: `${p.size * 0.9}px`, color: p.color }}
              className="inline-block"
            >
              ✨
            </span>
          )}
        </motion.div>
      ))}

      {/* Interactive tap-spawned hearts */}
      <AnimatePresence>
        {clickHearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 1, scale: 0.4, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, y: -45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ left: h.x - 14, top: h.y - 14 }}
            className="absolute text-xl pointer-events-none select-none text-rose-500"
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
