import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb trail — the on-page counterpart to the BreadcrumbList
 * JSON-LD each page already emits (src/components/Seo.tsx). Last item has
 * no href and renders as the current page.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => (
  <nav aria-label="Breadcrumb" className={`bg-[#fff9eb] ${className}`}>
    <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium flex-wrap">
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3 text-[#200f07]/30 shrink-0" aria-hidden="true" />}
          {item.href ? (
            <Link to={item.href} className="text-[#200f07]/60 hover:text-[#200f07] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#200f07] font-semibold" aria-current="page">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
