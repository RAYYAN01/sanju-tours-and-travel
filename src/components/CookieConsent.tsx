import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'stt-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'stt:cookie-consent';

export type ConsentValue = 'accepted' | 'rejected';

/** Reads the stored choice; null when the visitor hasn't decided yet. */
export function readCookieConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'rejected' ? v : null;
  } catch {
    return null;
  }
}

/**
 * Bottom-anchored cookie notice with Accept / Reject. The choice is stored
 * in localStorage and the banner never shows again once a choice is made.
 * On decision it fires a window event so other features (e.g. the delayed
 * enquiry) can wait for the visitor to respond first.
 */
export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readCookieConsent()) return;
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const choose = (value: ConsentValue) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* private mode / storage blocked — banner still dismisses for this view */
    }
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-[76px] sm:bottom-4 z-[55] px-3 sm:px-4 animate-cookie-in"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-[#200f07]/15 bg-[#fff9eb] shadow-[0_18px_50px_-12px_rgba(32,15,7,0.32)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span className="w-9 h-9 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
            <Cookie className="w-4 h-4" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <p className="font-display font-bold text-sm text-[#200f07]">
              We use cookies
            </p>
            <p className="text-xs text-[#200f07]/70 leading-relaxed mt-0.5">
              Essential cookies keep this site working. Choose <span className="font-semibold text-[#200f07]">Accept</span> to
              also allow analytics that help us understand traffic, or <span className="font-semibold text-[#200f07]">Reject</span> to
              keep only what's necessary.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="btn-outline-dark text-xs py-2.5 px-5 tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-[#200f07]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="btn-accent text-xs py-2.5 px-5 tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-[#200f07]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
