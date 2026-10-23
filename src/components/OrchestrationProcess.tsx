import React from 'react';
import { Compass, GitMerge, Terminal, ShieldCheck } from 'lucide-react';

export const OrchestrationProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Cognitive Discovery & AI Feasibility',
      icon: Compass,
      description: 'Mapping operator mental models, prompt boundary limits, and latency tolerances to determine deterministic vs. non-deterministic agent boundaries.',
      deliverables: ['Operator Mental Model Canvas', 'Prompt Limit & Latency Budget', 'Cognitive Failure Mode Analysis']
    },
    {
      number: '02',
      title: 'Interaction Architecture & Flow Specifications',
      icon: GitMerge,
      description: 'Defining multi-agent handshakes, system contracts, confidence thresholds, and fail-safe fallback nodes before writing production code.',
      deliverables: ['Agent Contract State Machine', 'Confidence Routing Thresholds', 'Fallback & Rollback Wireflows']
    },
    {
      number: '03',
      title: 'Vibe Prototyping & Sandbox Validation',
      icon: Terminal,
      description: 'Building code-based functional Proof of Concepts (POCs) using Cursor, Claude, v0, and React to stress-test real agent behavior pre-engineering.',
      deliverables: ['Live Code Sandbox Mockups', 'Hallucination Stress-Tests', 'Operator Usability Benchmarks']
    },
    {
      number: '04',
      title: 'System Guardrails & Evaluation',
      icon: ShieldCheck,
      description: 'Deploying Explainable AI (XAI) drawers, Retrieval-Augmented Generation (RAG) citation layers, and Human-in-the-Loop (HITL) approval gates.',
      deliverables: ['XAI Attribution Visualizers', 'Verifiable RAG Citation UX', 'Supervisory HITL Approval Gates']
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-24 border-b border-[#E4E4E7] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#52525B]">
            <span>AX DISCOVERY &amp; ORCHESTRATION PROCESS</span>
            <span className="mx-2 text-[#E4E4E7]">/</span>
            <span>Bridging Human Cognition &amp; Model Logic</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
                How I Design Non-Deterministic AI &amp; Agent Systems
              </h2>
              <p className="text-sm sm:text-base text-[#52525B] mt-1 max-w-3xl leading-relaxed">
                A 4-step engineering and design methodology transforming stochastic Large Language Models (LLMs) into auditable, high-trust Agent Experiences (AX) before committing enterprise engineering resources.
              </p>
            </div>
            <div className="text-xs font-mono text-[#52525B] hidden lg:block">
              Pre-Engineering Validation Pipeline
            </div>
          </div>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="p-6 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] flex flex-col justify-between space-y-5 hover:border-[#090A0F] transition-colors"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7]">
                    <span className="text-xs font-mono font-bold text-[#090A0F]">
                      STEP {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#090A0F]" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-[#090A0F] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables / Output Tags */}
                <div className="pt-3 border-t border-[#E4E4E7] space-y-1.5">
                  <span className="text-[10px] font-mono text-[#52525B] uppercase block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="text-[11px] font-mono text-[#090A0F] flex items-start gap-1.5">
                        <span className="text-[#52525B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
