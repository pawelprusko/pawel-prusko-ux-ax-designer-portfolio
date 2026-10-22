import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudyOrchestration } from './components/CaseStudyOrchestration';
import { CaseStudyGenerativeUI } from './components/CaseStudyGenerativeUI';
import { CaseStudyEnterpriseCopilot } from './components/CaseStudyEnterpriseCopilot';
import { Playground } from './components/Playground';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const handleOpenPlayground = () => {
    const el = document.getElementById('playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#090A0F] flex flex-col font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
      {/* Top Bar Navigation */}
      <Header onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onOpenPlayground={handleOpenPlayground} 
        onOpenResume={() => setIsResumeModalOpen(true)} 
      />

      {/* Featured Case Studies Section */}
      <section id="case-studies" className="py-20 lg:py-24 border-b border-[#E4E4E7] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Section Lead */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#52525B]">
              <span>FEATURED WORK</span>
              <span className="mx-2 text-[#E4E4E7]">/</span>
              <span>Interactive AX Case Studies</span>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
                  Autonomous Workflows, Generative UI &amp; High-Stakes HITL
                </h2>
                <p className="text-sm sm:text-base text-[#52525B] mt-1 max-w-3xl leading-relaxed">
                  Three deep-dive case studies showcasing how interaction design tames stochastic model outputs into auditable, high-trust enterprise software.
                </p>
              </div>

              <div className="text-xs font-mono text-[#52525B] hidden lg:block">
                All 3 prototypes feature live interactive mockups
              </div>
            </div>
          </div>

          {/* Case Study 1: Multi-Agent Platform */}
          <CaseStudyOrchestration />

          {/* Case Study 2: Generative UI Analytics Engine */}
          <CaseStudyGenerativeUI />

          {/* Case Study 3: Enterprise Co-Pilot & HITL Decision System */}
          <CaseStudyEnterpriseCopilot />

        </div>
      </section>

      {/* Interactive AX Mechanics Playground */}
      <Playground />

      {/* Methodology & Technical Toolkit */}
      <Methodology />

      {/* Executive Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Executive CV / Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
