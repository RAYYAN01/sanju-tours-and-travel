import React, { useMemo, useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(FAQS.map(f => f.category)))],
    []
  );

  const visibleFaqs = useMemo(
    () => (activeCategory === 'All' ? FAQS : FAQS.filter(f => f.category === activeCategory)),
    [activeCategory]
  );

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section-tight bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-5 h-px bg-[#200f07]/40" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
              Help &amp; Clarifications
            </span>
            <span className="w-5 h-px bg-[#200f07]/40" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
            Frequently <span className="font-accent italic font-bold text-[#8fae52]">Asked</span> Questions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#200f07]/70">
            Clear answers regarding reservations, transparent pricing, vehicle capacities, and payment terms.
          </p>
        </Reveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(category => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => { setActiveCategory(category); setOpenIdx(null); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider border transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#200f07] text-[#fff9eb] border-[#200f07]'
                    : 'bg-[#fff9eb] text-[#200f07]/70 border-[#200f07]/15 hover:border-[#200f07]/40 hover:text-[#200f07]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <StaggerGroup className="space-y-2.5" stagger={0.07}>
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerItem key={idx} y={14}>
                <div className="card-editorial overflow-hidden hover:!translate-y-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#200f07]/5"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-[#200f07] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-[background-color,color,transform] duration-300 ${
                      isOpen ? 'bg-[#200f07] text-white rotate-180' : 'bg-[#fff9eb] text-[#200f07]'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {/* Smooth grid-rows expand/collapse (no plugin needed) */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        id={`faq-answer-${idx}`}
                        className="px-4 sm:px-5 pb-4 pt-2.5 text-xs sm:text-sm text-[#200f07]/70 leading-relaxed border-t border-[#200f07]/8 mt-1"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* WhatsApp Fallback — every dead-end in the site routes back to a
            real conversation instead of a form. */}
        <p className="text-center text-xs sm:text-sm text-[#200f07]/70 mt-6">
          Have a question not listed here?{' '}
          <button
            type="button"
            onClick={() => openWhatsAppEnquiry({ requirements: 'General question not covered in the FAQ section' })}
            className="inline-flex items-center gap-1.5 font-display font-bold text-[#200f07] underline decoration-[#200f07]/30 underline-offset-4 hover:decoration-[#200f07] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Chat directly with our team on WhatsApp
          </button>
        </p>

      </div>
    </section>
  );
};
