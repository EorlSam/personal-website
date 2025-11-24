import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Contact from './components/Contact';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

import mysticSymbol from './assets/mystic-symbol.png';

function App() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  const baseVelocity = useMotionValue(0);
  const rotation = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    let moveBy = smoothVelocity.get() * (delta / 1000);

    // Add a small constant rotation
    if (moveBy === 0) {
      moveBy = 0.5 * (delta / 1000);
    } else {
      // Add inertia/momentum effect
      moveBy += (moveBy > 0 ? 1 : -1) * 0.5 * (delta / 1000);
    }

    rotation.set(rotation.get() + moveBy * 0.2); // Adjust 0.2 to control sensitivity
  });

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Rotating Mystic Symbol Background */}
      <motion.img
        src={mysticSymbol}
        alt=""
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '80vw',
          maxWidth: '800px',
          zIndex: -1,
          opacity: 0.05,
          pointerEvents: 'none',
          x: '-50%',
          y: '-50%',
          rotate: rotation
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Interests />
        <Contact />
      </div>
    </main>
  );
}

export default App;
