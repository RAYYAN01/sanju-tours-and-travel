import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * A very thin, subtle progress indicator pinned to the top edge of the
 * viewport, filling left-to-right as the user scrolls the page.
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#200f07] z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
};
