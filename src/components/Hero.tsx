import React, { useState } from 'react';
import { ArrowDown, Sparkles, Terminal, ShieldCheck, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenPlayground: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlayground, onOpenResume }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-12 pb-16 border-b border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-700">
              <span className="w-2 h-0.5 bg-indigo-600 inline-block"></span>
              <span>Executive AX Portfolio · 2026 Edition</span>
            </div>

            {/* Hero Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] [text-wrap:balance]">
              Architecting Trust &amp; Human-Agent Interaction for Complex AI Systems
            </h1>

            {/* Subheadline with deep cognitive positioning */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
              Senior UX &amp; AX Designer with 7+ years of experience bridging abstract Large Language Models (LLMs) and end-user cognition. Specializing in Multi-Agent Workflows, Generative UI, and Human-in-the-Loop (HITL) systems.
            </p>

            {/* Core Focus Tags: Clean unboxed text with typographic separators (Zero-Pill Discipline) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-[#475569]">
              <span className="text-[#0F172A] font-semibold">Core Focus:</span>
              <span className="text-indigo-700">Multi-Agent Orchestration</span>
              <span className="text-[#94A3B8]" aria-hidden="true">·</span>
              <span className="text-indigo-700">Generative UI</span>
              <span className="text-[#94A3B8]" aria-hidden="true">·</span>
              <span className="text-indigo-700">RAG Data Grounding</span>
              <span className="text-[#94A3B8]" aria-hidden="true">·</span>
              <span className="text-[#D97706] font-semibold">Human-in-the-Loop (HITL)</span>
              <span className="text-[#94A3B8]" aria-hidden="true">·</span>
              <span className="text-[#059669] font-semibold">Explainable AI (XAI)</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-md hover:bg-slate-800 transition-colors shadow-sm active:translate-y-0.5"
              >
                <span>Explore Featured Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenPlayground}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md hover:bg-slate-100 transition-colors active:translate-y-0.5"
              >
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>Launch AX Patterns Sandbox</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors hover:underline underline-offset-4 px-2 py-2"
              >
                <span>Read Full Career Bio &amp; CV</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait & Identity Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 shadow-xs">
              <div className="aspect-square w-full rounded-lg overflow-hidden bg-slate-100 relative">
                {!imgError ? (
                  <img
                    src="/src/assets/images/pawel_prusko_portrait_1792675736853.jpg"
                    alt="Paweł Prusko - Senior UX & AX Designer"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-50 text-slate-600">
                    <Cpu className="w-10 h-10 text-indigo-600 mb-2 stroke-[1.5]" />
                    <span className="font-semibold text-sm text-[#0F172A]">Paweł Prusko</span>
                    <span className="text-xs text-slate-500 mt-1">Senior UX &amp; AX Designer</span>
                  </div>
                )}
              </div>
              
              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#0F172A]">Paweł Prusko</p>
                  <p className="text-[#475569]">Warsaw, Poland · Remote EU/US</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                    7+ Yrs Exp
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Adjacency Proof Metrics Strip: Full-Width 4-Column Bar */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="font-mono text-2xl font-bold tracking-tight text-[#0F172A] tabular-nums">7+ Years</p>
            <p className="text-xs text-[#475569] font-medium">UX &amp; AX Product Leadership</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl font-bold tracking-tight text-[#0F172A] tabular-nums">3 Systems</p>
            <p className="text-xs text-[#475569] font-medium">Enterprise Multi-Agent Platforms</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl font-bold tracking-tight text-indigo-600 tabular-nums">0.0% Drift</p>
            <p className="text-xs text-[#475569] font-medium">Context Drift in Parallel Threads</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl font-bold tracking-tight text-emerald-600 tabular-nums">99.4%</p>
            <p className="text-xs text-[#475569] font-medium">HITL Governance Compliance</p>
          </div>
        </div>

      </div>
    </section>
  );
};
