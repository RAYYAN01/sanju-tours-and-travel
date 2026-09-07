import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useBookingModal } from '../context/BookingModalContext';
import { readCookieConsent, COOKIE_CONSENT_EVENT } from './CookieConsent';

const SHOWN_KEY = 'stt-auto-enquiry-shown';
const DELAY_MS = 2000;

/**
 * Opens the enquiry form automatically 2s after the visitor lands on the
 * home page — once per browser session, and only after the cookie notice
 * has been answered so the two overlays don't fight for attention.
 */
export const AutoEnquiry: React.FC = () => {
  const { pathname } = useLocation();
  const { openModal } = useBookingModal();
  const openRef = useRef(openModal);
  openRef.current = openModal;

  useEffect(() => {
    if (pathname !== '/') return;

    try {
      if (sessionStorage.getItem(SHOWN_KEY) === '1') return;
    } catch {
      /* storage blocked — fall through and show once for this view */
    }

    let timer: number | undefined;

    const start = () => {
      timer = window.setTimeout(() => {
        try {
          sessionStorage.setItem(SHOWN_KEY, '1');
        } catch {
          /* ignore */
        }
        openRef.current('A Quick Enquiry — Get Your Best Quote');
      }, DELAY_MS);
    };

    if (readCookieConsent()) {
      start();
      return () => window.clearTimeout(timer);
    }

    const onConsent = () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
      start();
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
};
