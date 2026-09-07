import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  /** Target numeric value to count up to. */
  value: number;
  /** Text placed after the number, e.g. "+", " Yrs". */
  suffix?: string;
  /** Text placed before the number, e.g. "₹". */
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a number counting up from 0 to `value` once it scrolls into view.
 * Runs only once — re-scrolling past it does not restart the count.
 */
export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.4,
  className
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};
