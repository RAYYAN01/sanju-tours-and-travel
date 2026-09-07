import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion, Variants } from 'framer-motion';
import { useBookingModal } from '../context/BookingModalContext';
import { BUSINESS_PHONE_DISPLAY } from '../utils/whatsapp';

// Shared easing for a smooth, cinematic feel — matches the site's Reveal component.
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Hero: React.FC = () => {
  const { openModal } = useBookingModal();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Very subtle parallax: the video slowly zooms in as the hero scrolls past,
  // and the text gently fades/lifts upward — both GPU-friendly (transform/opacity only).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -36]);

  // Fade + upward reveal, each child staggering slightly after the last.
  const fadeUp = (delay: number, duration = 0.7): Variants => ({
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE_OUT } }
  });

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#200f07]">

      {/* 1. FULL-SCREEN BACKGROUND VIDEO — untouched: starts immediately, no crop/slowdown,
          only a very subtle scroll-linked zoom (transform only, GPU-friendly). */}
      <motion.video
        src="/lp.mp4"
        poster="./landing_poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        style={{ scale: prefersReducedMotion ? 1 : videoScale }}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. CINEMATIC GRADIENT OVERLAYS FOR HIGH CONTRAST */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#200f07]/85 via-[#200f07]/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/60 via-transparent to-[#200f07]/80 z-10" />

      {/* 3. HERO CONTENT — fades/lifts subtly on scroll (never disappears abruptly) */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: contentOpacity, y: contentY }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28 w-full flex justify-start"
      >
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6 sm:space-y-7">

          {/* Eyebrow — fades in first, slightly before the heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0, 0.5)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-[11px] font-display font-bold uppercase tracking-widest text-[#fff9eb] shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#c5e384] animate-pulse"></span>
            <span>Every Journey Has a Story</span>
          </motion.div>

          {/* Main Headline — revealed line by line with a subtle letter-spacing settle */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] drop-shadow-xl">
            <motion.span
              initial={{ opacity: 0, y: 18, letterSpacing: '0.04em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '-0.01em' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
              className="block"
            >
              Let Yours
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18, letterSpacing: '0.04em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '-0.01em' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
              className="block"
            >
              Begin on the <span className="text-[#c5e384]">Road.</span>
            </motion.span>
          </h1>

          {/* Accent Line */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.55, 0.6)}
            className="font-accent italic text-xl sm:text-2xl lg:text-3xl text-[#fff9eb]/95 drop-shadow-md"
          >
            Where comfort meets the freedom to explore.
          </motion.p>

          {/* Supporting Description */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.7, 0.6)}
            className="text-base sm:text-lg lg:text-xl text-[#fff9eb]/90 font-sans leading-relaxed drop-shadow-md max-w-xl"
          >
            From spontaneous getaways to carefully planned journeys, Sanju Tours &amp; Travels gets you there with reliable rides, professional service and comfort you can count on.
          </motion.p>

          {/* Primary & Secondary Call To Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <motion.button
              type="button"
              onClick={() => openModal('Hero Section Enquiry')}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE_OUT }}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-accent text-xs py-4 px-8 tracking-wider shadow-xl text-center flex items-center justify-center gap-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.95, ease: EASE_OUT }}
            >
              <Link
                to="/fleet"
                className="group py-3.5 px-7 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-[#c5e384] text-white font-display font-bold text-xs uppercase tracking-wider transition-[background-color,border-color] duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Our Fleet</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

        </div>
      </motion.div>


      {/* 4. BOTTOM ARCHITECTURAL METADATA LEDGER */}
      <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 bg-black/50 backdrop-blur-md hidden md:block py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono text-[#fff9eb]/80">
          <div className="flex items-center gap-6">
            <span className="text-[#c5e384] font-bold">15.3647° N, 75.1240° E</span>
            <span>HUBBALLI CENTRAL BASE</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-[#c5e384] font-semibold">ALL VEHICLE CLASSES READY</span>
          </div>
          <div className="flex items-center gap-4 text-[#fff9eb]/70">
            <span>INSTANT DISPATCH: {BUSINESS_PHONE_DISPLAY}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
