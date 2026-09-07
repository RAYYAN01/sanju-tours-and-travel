import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

// Shared easing + timings for a consistent, premium feel across the site.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DURATION = 0.6;

/**
 * Fade + slight upward movement, triggered once when scrolled into view.
 * Wrap any section/element that should reveal on scroll.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  as?: 'div' | 'span';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 18,
  amount = 0.2
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: DURATION, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Parent for a group of children that should stagger in one after another
 * as the group scrolls into view. Pair with <StaggerItem>.
 */
interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}

export const staggerContainerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 }
  }
});

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className,
  stagger = 0.09,
  amount = 0.15
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainerVariants(stagger)}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

const itemVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } }
});

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className, y = 20 }) => (
  <motion.div className={className} variants={itemVariants(y)}>
    {children}
  </motion.div>
);
