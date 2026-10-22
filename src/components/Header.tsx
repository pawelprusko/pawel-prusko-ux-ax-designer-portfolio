import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with editorial subtitle */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="group flex items-baseline gap-2.5">
            <span className="text-lg font-bold tracking-tight text-[#0F172A] group-hover:text-indigo-600 transition-colors">
              Paweł Prusko
            </span>
            <span className="text-xs text-[#475569] font-medium hidden sm:inline">
              Senior UX &amp; Agent Experience (AX) Designer
            </span>
          </a>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
          <a 
            href="#case-studies" 
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-1 underline-offset-4"
          >
            Case Studies
          </a>
          <a 
            href="#framework" 
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-1 underline-offset-4"
          >
            AX Framework
          </a>
          <a 
            href="#playground" 
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-1 underline-offset-4"
          >
            Playground
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-1 underline-offset-4"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + subtle availability signal */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#059669] font-medium bg-emerald-50/60 border border-emerald-200/60 px-2.5 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            Available for Senior AX Roles
          </span>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-md hover:bg-slate-800 transition-colors shadow-sm active:translate-y-0.5 whitespace-nowrap shrink-0"
            aria-label="View and Download Executive CV PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV [PDF]</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </button>
        </div>

      </div>
    </header>
  );
};
