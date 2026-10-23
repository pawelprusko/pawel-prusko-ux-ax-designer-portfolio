import React from 'react';
import { ArrowDown, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenPlayground: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlayground, onOpenResume }) => {
  return (
    <section className="relative py-20 lg:py-24 border-b border-[#E4E4E7] bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Category Tag (Clean Monochrome Text) */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#52525B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F] inline-block"></span>
          <span>EXECUTIVE PORTFOLIO — 2026 EDITION</span>
        </div>

        {/* Large Main Display Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#090A0F] leading-[1.14] [text-wrap:balance]">
          Architecting Trust &amp; Human-Agent Interaction for Complex AI Systems
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-3xl">
          Senior UX and Agent Experience (AX) Designer with 7+ years of experience bridging abstract Large Language Models (LLMs) and end-user cognition. Specializing in Multi-Agent Workflows, Generative UI (GenUI), and Human-in-the-Loop (HITL) systems.
        </p>

        {/* The Two Main CTA Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#090A0F] rounded-md hover:bg-[#27272A] transition-colors shadow-xs active:translate-y-0.5"
          >
            <span>Explore Case Studies</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenPlayground}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#090A0F] bg-[#FAFAFA] border border-[#E4E4E7] rounded-md hover:bg-[#F4F4F5] transition-colors active:translate-y-0.5"
          >
            <Terminal className="w-3.5 h-3.5 text-[#090A0F]" />
            <span>Launch AX Patterns Sandbox</span>
          </button>

          <button
            onClick={onOpenResume}
            className="text-xs font-medium text-[#52525B] hover:text-[#090A0F] transition-colors hover:underline underline-offset-4 px-2 py-2"
          >
            View Career Bio &amp; CV &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
