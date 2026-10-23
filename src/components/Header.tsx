import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E4E4E7] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with editorial descriptor */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="group flex items-baseline gap-2.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#090A0F]">
              Paweł Prusko
            </span>
            <span className="text-xs text-[#52525B] font-normal hidden sm:inline">
              Senior UX / Agent Experience Designer
            </span>
          </a>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-[#52525B]">
          <a 
            href="#process" 
            className="hover:text-[#090A0F] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Process
          </a>
          <a 
            href="#case-studies" 
            className="hover:text-[#090A0F] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Case Studies
          </a>
          <a 
            href="#framework" 
            className="hover:text-[#090A0F] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            AX Framework
          </a>
          <a 
            href="#playground" 
            className="hover:text-[#090A0F] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Playground
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#090A0F] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + subtle monochrome availability text */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#52525B] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
            Available ASAP
          </span>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#090A0F] rounded-md hover:bg-[#27272A] transition-colors shadow-xs whitespace-nowrap shrink-0"
            aria-label="View and Download Executive CV PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV [PDF]</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </button>
        </div>

      </div>
    </header>
  );
};
