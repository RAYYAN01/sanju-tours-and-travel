import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Plus, Minus, LocateFixed } from 'lucide-react';

interface RouteTravelMapProps {
  originLabel: string;
  destinationLabel: string;
}

// A single stylized route path shared by every destination — this is an
// illustrative wayfinding graphic, not a literal geographic map, so the
// curve stays constant while the endpoint labels update per selection.
// Canvas is 640x480 (4:3) — the box below is locked to the same 4:3 ratio,
// so the map fills it edge-to-edge with zero cropping or letterbox bars.
const ROUTE_PATH = 'M 542 88 C 427 139, 353 240, 263 291 C 181 335, 123 360, 90 379';

// Decorative backdrop elements (place names + highway shields) that make the
// illustration read as a real terrain map rather than a plain line graphic.
// Purely presentational — static regardless of the selected destination.
const PLACE_LABELS = [
  { name: 'Dharwad', x: 430, y: 108 },
  { name: 'Gadag', x: 607, y: 114 },
  { name: 'Sankeshwar', x: 369, y: 120 },
  { name: 'Mundgod', x: 259, y: 69 },
  { name: 'Yellapur', x: 291, y: 164 },
  { name: 'Navalgund', x: 505, y: 265 },
  { name: 'Haveri', x: 574, y: 316 },
  { name: 'Ranebennur', x: 492, y: 379 },
  { name: 'Joida', x: 205, y: 246 },
  { name: 'Ankola', x: 127, y: 133 },
  { name: 'Karwar', x: 135, y: 310 }
];

const ROAD_SHIELDS = [
  { label: '740', x: 455, y: 38 },
  { label: '50', x: 587, y: 208 },
  { label: '2660', x: 427, y: 265 },
  { label: '69', x: 328, y: 379 },
  { label: '66', x: 213, y: 328 }
];

export const RouteTravelMap: React.FC<RouteTravelMapProps> = ({ originLabel, destinationLabel }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  const zoomIn = () => setZoom(z => Math.min(z + 0.15, 1.4));
  const zoomOut = () => setZoom(z => Math.max(z - 0.15, 1));
  const resetZoom = () => setZoom(1);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-card-lg overflow-hidden border border-[#200f07]/15 shadow-lifted bg-[#fff9eb]"
    >
      {/* Screen-reader summary (the graphic itself is decorative — markers below carry the visible text) */}
      <p className="sr-only">
        Illustrated route map from {originLabel} to {destinationLabel}.
      </p>

      {/* Map Controls */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1.5 z-20">
        <button
          type="button"
          onClick={zoomIn}
          aria-label="Zoom in on route map"
          className="w-8 h-8 rounded-lg bg-[#fff9eb]/90 backdrop-blur-sm border border-[#200f07]/15 text-[#200f07] flex items-center justify-center shadow-subtle hover:bg-[#fff9eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#200f07] transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={zoomOut}
          aria-label="Zoom out on route map"
          className="w-8 h-8 rounded-lg bg-[#fff9eb]/90 backdrop-blur-sm border border-[#200f07]/15 text-[#200f07] flex items-center justify-center shadow-subtle hover:bg-[#fff9eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#200f07] transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={resetZoom}
          aria-label="Reset route map view"
          className="w-8 h-8 rounded-lg bg-[#fff9eb]/90 backdrop-blur-sm border border-[#200f07]/15 text-[#200f07] flex items-center justify-center shadow-subtle hover:bg-[#fff9eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#200f07] transition-colors"
        >
          <LocateFixed className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-[#fff9eb]/90 backdrop-blur-sm border border-[#200f07]/12 rounded-lg px-3 py-2 text-[10px] sm:text-[11px] text-[#200f07]/70 font-medium space-y-1 shadow-subtle">
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-0.5 rounded-full bg-[#200f07]" />
          <span>Recommended Route</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#200f07]" />
          <span>Major Places</span>
        </div>
      </div>

      {/* Route Illustration */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoom})` }}
      >
        <svg
          viewBox="0 0 640 480"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="terrain-fill" x1="0%" y1="0%" x2="100%" y2="60%">
              <stop offset="0%" stopColor="#c5e384" stopOpacity="0.35" />
              <stop offset="55%" stopColor="#c5e384" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fff9eb" />
            </linearGradient>
            {/* Single tileable pattern instead of hundreds of individual dot nodes */}
            <pattern id="terrain-dots" width="20" height="16" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="1" fill="rgba(32,15,7,0.12)" />
            </pattern>
          </defs>

          {/* Landmass */}
          <rect x="0" y="0" width="640" height="480" fill="url(#terrain-fill)" />

          {/* Coastline (Arabian Sea, west edge) */}
          <path
            d="M 0 0 L 156 0 C 135 114, 168 215, 144 303 C 123 379, 140 436, 107 480 L 0 480 Z"
            fill="#200f07"
            opacity="0.1"
          />

          {/* Faint decorative highway lines */}
          <g stroke="#200f07" strokeOpacity="0.09" strokeWidth="2" fill="none">
            <path d="M 33 51 L 624 164" />
            <path d="M 99 480 L 394 76" />
            <path d="M 246 0 L 509 480" />
            <path d="M 0 316 L 640 379" />
          </g>

          {/* Soft dot-grid texture over the terrain */}
          <rect x="0" y="0" width="640" height="480" fill="url(#terrain-dots)" />

          {/* Place name labels */}
          <g className="font-sans" fill="#200f07" fontSize="11" fontWeight={600} opacity="0.55">
            {PLACE_LABELS.map(place => (
              <text key={place.name} x={place.x} y={place.y} textAnchor="middle">
                {place.name}
              </text>
            ))}
          </g>

          {/* Highway shield badges */}
          {ROAD_SHIELDS.map(shield => (
            <g key={shield.label} transform={`translate(${shield.x}, ${shield.y})`}>
              <rect x={-14} y={-10} width="28" height="18" rx="4" fill="#c5e384" stroke="#200f07" strokeOpacity="0.15" />
              <text x="0" y="3.5" textAnchor="middle" fontSize="9.5" fontWeight={700} fill="#200f07">
                {shield.label}
              </text>
            </g>
          ))}

          <path
            id="route-path"
            d={ROUTE_PATH}
            fill="none"
            stroke="#200f07"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={100}
            style={{
              strokeDasharray: 100,
              strokeDashoffset: inView ? 0 : 100,
              transition: 'stroke-dashoffset 1600ms ease-out'
            }}
          />

          {/* Vehicle: animated along the exact same path coordinates as the visible line.
              Rendered as a top-down directional arrow (not a side-profile car glyph) —
              rotate="auto" turns this marker to match the road's heading at every point
              along the curve, and a side-view icon would look tipped over/broken when
              rotated like that. A symmetric arrow reads correctly at any angle. */}
          {inView && (
            <g>
              <circle r="15" fill="#200f07" />
              <polygon points="7,0 -5,-5 -2,0 -5,5" fill="#fff9eb" />
              {!reducedMotion && (
                <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#route-path" />
                </animateMotion>
              )}
            </g>
          )}
        </svg>

        {/* Origin Marker */}
        <div className="absolute" style={{ left: '84.6%', top: '18.4%', transform: 'translate(-50%, -100%)' }}>
          <div className="flex flex-col items-center gap-1">
            <span className="px-2.5 py-1 rounded-md bg-[#200f07] text-white text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
              {originLabel}
            </span>
            <MapPin className="w-5 h-5 text-[#200f07] fill-[#fff9eb]" />
          </div>
        </div>

        {/* Destination Marker */}
        <div className="absolute" style={{ left: '14.1%', top: '79%', transform: 'translate(-50%, -100%)' }}>
          <div className="flex flex-col items-center gap-1">
            <span className="px-2.5 py-1 rounded-md bg-[#200f07] text-white text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
              {destinationLabel}
            </span>
            <MapPin className="w-5 h-5 text-[#200f07] fill-[#fff9eb]" />
          </div>
        </div>
      </div>
    </div>
  );
};
