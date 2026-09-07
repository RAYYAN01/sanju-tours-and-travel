import React, { useEffect, useMemo, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import { BookingModalProvider } from './context/BookingModalContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgressBar } from './components/motion/ScrollProgressBar';
import { Seo } from './components/Seo';
import { StructuredData } from './components/StructuredData';
import { CookieConsent } from './components/CookieConsent';
import { AutoEnquiry } from './components/AutoEnquiry';
import { TRANSPARENT_HERO_ROUTES } from './data/site';

// Home is eager (landing page for most traffic + first paint); the rest
// are split into their own chunks so a cold visit only downloads the
// route it actually lands on.
import { Home } from './pages/Home';
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Fleet = lazy(() => import('./pages/Fleet').then(m => ({ default: m.Fleet })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const Packages = lazy(() => import('./pages/Packages').then(m => ({ default: m.Packages })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));

const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
    <span className="w-6 h-6 rounded-full border-2 border-[#200f07]/20 border-t-[#200f07] animate-spin" />
  </div>
);

// Helper to scroll to top on route navigation if no hash — routed through
// Lenis so it doesn't fight the smooth-scroll instance's own scroll state.
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, lenis]);

  return null;
};

export const App: React.FC = () => {
  const location = useLocation();

  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: !prefersReducedMotion,
        // Reduced-motion: effectively disable smoothing (1 = no lerp/lag) so
        // scrolling stays instant/native rather than animated.
        lerp: prefersReducedMotion ? 1 : 0.1
      }}
    >
      <BookingModalProvider>
        <Seo />
        <StructuredData />
        <ScrollToTop />
        <ScrollProgressBar />
        {/* pb on mobile clears the fixed FloatingActions bar so it never
            covers the footer's last row; no bar on sm+ so no padding there. */}
        <div className="flex flex-col min-h-[100dvh] bg-[#fff9eb] text-[#200f07] pb-[calc(4rem+env(safe-area-inset-bottom))] sm:pb-0">
          <Navbar />
          <div className={`flex-grow ${TRANSPARENT_HERO_ROUTES.includes(location.pathname) ? '' : 'pt-[68px] sm:pt-[76px]'}`}>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/services" element={<Services />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <BookingModal />
          <FloatingActions />
          <CookieConsent />
          <AutoEnquiry />
        </div>
      </BookingModalProvider>
    </ReactLenis>
  );
};

export default App;
