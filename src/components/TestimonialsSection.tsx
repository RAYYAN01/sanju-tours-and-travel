import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-tight bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-5 h-px bg-[#200f07]/40" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
              Verified Travelers
            </span>
            <span className="w-5 h-px bg-[#200f07]/40" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
            What <span className="font-accent italic font-bold text-[#8fae52]">Travellers</span> Say
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-full bg-[#200f07]/10 border border-[#200f07]/20 text-xs font-semibold text-[#200f07]/70">
            <div className="flex items-center text-[#200f07]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#200f07] text-[#200f07]" />
              ))}
            </div>
            <span className="font-bold text-[#200f07]">4.9 out of 5</span>
            <span className="text-[#200f07]/30">·</span>
            <span>210+ verified reviews</span>
          </div>
        </Reveal>

      </div>

      {/* Testimonials Carousel — horizontal snap-scroll with an edge peek of
          the next card, like a physical stack you can nudge through. Pure CSS
          scroll-snap: no JS carousel library, so it stays GPU-cheap and never
          jitters. Bleeds full-width past the max-w-7xl container so the peek
          reads at both edges of the viewport on mobile. */}
      <StaggerGroup
        className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8"
        stagger={0.09}
      >
        {TESTIMONIALS.map(item => (
          <StaggerItem key={item.id} className="shrink-0 snap-start w-[80%] sm:w-[46%] lg:w-[29%]">
            <figure className="card-editorial p-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center text-[#200f07]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#200f07] text-[#200f07]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#200f07]/30" />
                </div>
                <blockquote className="text-xs sm:text-[13px] text-[#200f07] leading-relaxed italic">
                  "{item.comment}"
                </blockquote>
              </div>

              <figcaption className="mt-4 pt-3 border-t border-[#200f07]/8 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#200f07] text-[#c5e384] font-display font-bold text-xs flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div className="overflow-hidden">
                  <p className="font-display font-bold text-xs text-[#200f07] truncate">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-[#200f07]/70 truncate">
                    {item.trip}
                  </p>
                </div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
        {/* Trailing spacer so the last card can snap fully into view rather
            than being clipped by the container's right padding. */}
        <div className="shrink-0 w-px" aria-hidden="true" />
      </StaggerGroup>

    </section>
  );
};
