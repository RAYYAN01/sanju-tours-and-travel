import React, { useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import { BookingModalProvider } from './context/BookingModalContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgressBar } from './components/motion/ScrollProgressBar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Fleet } from './pages/Fleet';
import { Services } from './pages/Services';
import { Destinations } from './pages/Destinations';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';

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

const TRANSPARENT_HERO_ROUTES = ['/', '/contact', '/about', '/services', '/destinations', '/packages', '/fleet'];

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
        <ScrollToTop />
        <ScrollProgressBar />
        <div className="flex flex-col min-h-[100dvh] bg-[#fff9eb] text-[#200f07]">
          <Navbar />
          <div className={`flex-grow ${TRANSPARENT_HERO_ROUTES.includes(location.pathname) ? '' : 'pt-[68px] sm:pt-[76px]'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
          <BookingModal />
          <FloatingActions />
        </div>
      </BookingModalProvider>
    </ReactLenis>
  );
};

export default App;
