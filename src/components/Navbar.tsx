import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, ChevronDown, Sparkles, HelpCircle, Star, ShieldCheck } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { MobileMenu } from './MobileMenu';
import { useBookingModal } from '../context/BookingModalContext';
import { BUSINESS_PHONE_DISPLAY, PHONE_TEL_HREF, CALL_ARIA_LABEL } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openModal } = useBookingModal();
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // One-time entrance animation on initial page load
  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  // Close home dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const homeSections = [
    { label: 'Overview / Hero', hash: '#home', icon: Sparkles, desc: 'Top of page & quick intro' },
    { label: 'Why Choose Us', hash: '#why-us', icon: ShieldCheck, desc: 'Fleet safety & 24/7 reliability' },
    { label: 'Traveler Reviews', hash: '#testimonials', icon: Star, desc: '4.9/5 rating & customer feedback' },
    { label: 'FAQs', hash: '#faqs', icon: HelpCircle, desc: 'Common travel questions answered' },
  ];

  const mainNavLinks = [
    { to: '/about', label: 'About' },
    { to: '/fleet', label: 'Fleet' },
    { to: '/services', label: 'Services' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/packages', label: 'Packages' },
  ];

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/' && !location.hash) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSectionClick = (hash: string) => {
    setHomeDropdownOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        if (lenis) {
          lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  const isHomeActive = location.pathname === '/';
  // Pages with a full-bleed hero image/video behind the navbar get the
  // transparent-until-scrolled treatment, same as the Home landing page.
  const TRANSPARENT_HERO_ROUTES = ['/', '/contact', '/about', '/services', '/destinations', '/packages', '/fleet'];
  const hasTransparentHero = TRANSPARENT_HERO_ROUTES.includes(location.pathname);
  const isTransparent = hasTransparentHero && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow,border-color,padding,opacity,transform] duration-300 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
        } ${
          isTransparent
            ? 'bg-transparent border-b border-transparent py-4 sm:py-5'
            : 'bg-[#fff9eb]/95 backdrop-blur-md shadow-subtle border-b border-[#200f07]/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Brand Logo */}
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center gap-3 group focus:outline-none shrink-0" 
              aria-label="Sanju Tours & Travels Home"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-extrabold text-sm tracking-tighter transition-all group-hover:scale-105 shadow-sm ${
                  isTransparent
                    ? 'bg-white/15 text-white border border-white/30 backdrop-blur-md'
                    : 'bg-[#200f07] text-[#fff9eb] border border-[#200f07]/40'
                }`}
              >
                ST
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display font-extrabold text-base sm:text-lg tracking-tight uppercase leading-none transition-colors ${
                    isTransparent ? 'text-white drop-shadow-sm' : 'text-[#200f07]'
                  }`}
                >
                  Sanju Tours
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold mt-1 leading-none transition-colors ${
                    isTransparent ? 'text-[#fff9eb] drop-shadow-sm' : 'text-[#200f07]'
                  }`}
                >
                  &amp; Travels
                </span>
              </div>
            </Link>

            {/* CENTER: Navigation Links (Visible on desktop/laptops >= lg) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              
              {/* HOME SECTION WITH DROPDOWN */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <div className="flex items-center gap-0.5">
                  <Link
                    to="/"
                    onClick={handleHomeClick}
                    className={`relative text-xs font-display font-semibold uppercase tracking-wider transition-colors py-1 flex items-center gap-1 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:transition-transform after:duration-300 after:ease-out ${
                      isTransparent
                        ? (isHomeActive ? 'text-white after:bg-white after:scale-x-100' : 'text-white/85 hover:text-white after:bg-white after:scale-x-0 hover:after:scale-x-100')
                        : (isHomeActive ? 'text-[#200f07] after:bg-[#200f07] after:scale-x-100' : 'text-[#200f07]/85 hover:text-[#200f07] after:bg-[#200f07] after:scale-x-0 hover:after:scale-x-100')
                    }`}
                  >
                    Home
                  </Link>
                  <button
                    type="button"
                    onClick={() => setHomeDropdownOpen(prev => !prev)}
                    className={`p-1 text-xs transition-colors rounded-md ${
                      isTransparent
                        ? 'text-white/80 hover:text-white'
                        : (isHomeActive ? 'text-[#200f07]' : 'text-[#200f07]/60 hover:text-[#200f07]')
                    }`}
                    aria-label="Toggle Home Sections Menu"
                    aria-expanded={homeDropdownOpen}
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${homeDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Home Sections Dropdown Menu */}
                {homeDropdownOpen && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 border ${
                      isTransparent
                        ? 'bg-[#200f07]/95 backdrop-blur-xl border-white/20 text-white'
                        : 'bg-[#fff9eb] border-[#200f07]/15 text-[#200f07]'
                    }`}
                  >
                    <div className={`px-3.5 py-1.5 border-b mb-1 ${isTransparent ? 'border-white/15' : 'border-[#200f07]/10'}`}>
                      <p className={`text-[10px] font-display font-bold uppercase tracking-wider ${isTransparent ? 'text-[#fff9eb]' : 'text-[#200f07]'}`}>
                        Home Page Sections
                      </p>
                    </div>
                    {homeSections.map((sec) => {
                      const Icon = sec.icon;
                      return (
                        <button
                          key={sec.hash}
                          type="button"
                          onClick={() => handleSectionClick(sec.hash)}
                          className={`w-full text-left px-3.5 py-2 transition-colors flex items-start gap-2.5 group ${
                            isTransparent ? 'hover:bg-white/10' : 'hover:bg-[#200f07]/8'
                          }`}
                        >
                          <Icon className={`w-4 h-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform ${
                            isTransparent ? 'text-[#fff9eb]' : 'text-[#200f07]'
                          }`} />
                          <div>
                            <span className={`text-xs font-semibold transition-colors block ${
                              isTransparent ? 'text-white group-hover:text-[#fff9eb]' : 'text-[#200f07] group-hover:text-[#200f07]'
                            }`}>
                              {sec.label}
                            </span>
                            <span className={`text-[10px] leading-tight block ${
                              isTransparent ? 'text-white/70' : 'text-[#200f07]/70'
                            }`}>
                              {sec.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* OTHER MAIN PAGES */}
              {mainNavLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative text-xs font-display font-semibold uppercase tracking-wider transition-colors py-1 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:transition-transform after:duration-300 after:ease-out ${
                      isTransparent
                        ? (isActive ? 'text-white after:bg-white after:scale-x-100' : 'text-white/85 hover:text-white after:bg-white after:scale-x-0 hover:after:scale-x-100')
                        : (isActive ? 'text-[#200f07] after:bg-[#200f07] after:scale-x-100' : 'text-[#200f07]/85 hover:text-[#200f07] after:bg-[#200f07] after:scale-x-0 hover:after:scale-x-100')
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className={`relative text-xs font-display font-semibold uppercase tracking-wider transition-colors py-1 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:transition-transform after:duration-300 after:ease-out ${
                  isTransparent
                    ? (location.pathname === '/contact' ? 'text-white after:bg-white after:scale-x-100' : 'text-white/85 hover:text-white after:bg-white after:scale-x-0 hover:after:scale-x-100')
                    : (location.pathname === '/contact' ? 'text-[#200f07] after:bg-[#200f07] after:scale-x-100' : 'text-[#200f07]/85 hover:text-[#200f07] after:bg-[#200f07] after:scale-x-0 hover:after:scale-x-100')
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* RIGHT: Phone & Enquire Now */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={PHONE_TEL_HREF}
                aria-label={CALL_ARIA_LABEL}
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold transition-colors py-1.5 px-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] ${
                  isTransparent
                    ? 'bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md'
                    : 'bg-[#200f07]/5 text-[#200f07] hover:text-[#200f07]'
                }`}
                title="Call Sanju Tours & Travels dispatch"
              >
                <Phone className={`w-3.5 h-3.5 ${isTransparent ? 'text-white' : 'text-[#200f07]'}`} />
                <span className="tracking-tight">{BUSINESS_PHONE_DISPLAY}</span>
              </a>

              <button
                type="button"
                onClick={() => openModal('Navbar Quick Enquiry')}
                className="btn-accent text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md"
              >
                Enquire Now
              </button>

              {/* Mobile Menu Toggle Button (Visible when desktop nav is hidden: < lg) */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  isTransparent ? 'text-white hover:bg-white/20' : 'text-[#200f07] hover:bg-[#200f07]/8'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

