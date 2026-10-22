import React from 'react';
import { 
  Compass, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  BrainCircuit, 
  BookOpen, 
  ShieldCheck, 
  FileCheck,
  Cpu
} from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="framework" className="py-16 border-b border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-700">
            <span>METHODOLOGY &amp; TECHNICAL TOOLKIT</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-600 font-sans">Cognitive AI Alignment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
            Human-Agent Alignment &amp; Interaction Frameworks
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-3xl leading-relaxed">
            Pioneering the transition from static graphical user interfaces (GUI) to non-deterministic Agent Experiences (AX). All design solutions are grounded in industry-standard human-AI interaction frameworks.
          </p>
        </div>

        {/* Framework Alignment Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Google PAIR Guidebook Card */}
          <div className="border border-[#E2E8F0] rounded-xl p-6 sm:p-8 bg-[#F8FAFC] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-indigo-100 text-indigo-800">
                  <Compass className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-[#0F172A]">Google PAIR Guidebook Alignment</h3>
              </div>
              <span className="text-xs font-mono text-indigo-700">People + AI Research</span>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Applying PAIR guidelines to bridge user expectations and statistical outputs:
            </p>

            <ul className="space-y-2.5 text-xs text-[#0F172A]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Calibrated Mental Models:</strong> Explicitly communicating model boundaries, latency expectations, and non-deterministic variations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Supervised Co-Creation:</strong> Presenting agent proposals as editable drafts rather than irrevocable decrees.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Graceful Failure Handling:</strong> Providing deterministic rollback UI and structured escalation paths when models hallucinate.</span>
              </li>
            </ul>
          </div>

          {/* Microsoft HAX Toolkit Card */}
          <div className="border border-[#E2E8F0] rounded-xl p-6 sm:p-8 bg-[#F8FAFC] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-[#0F172A]">Microsoft HAX Toolkit Standards</h3>
              </div>
              <span className="text-xs font-mono text-emerald-700">18 Human-AI Heuristics</span>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Integrating HAX principles across all four interaction stages:
            </p>

            <ul className="space-y-2.5 text-xs text-[#0F172A]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>G1 · Make Clear What the System Can Do:</strong> Context-aware suggestion chips anchored to known API capacities.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>G9 · Support Efficient Correction:</strong> In-line parameter fine-tuning without forcing the user to regenerate prompts from scratch.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>G11 · Make Clear Why the System Did What It Did:</strong> Explainable AI (XAI) feature attribution breakdown with factor weighting.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Core Competencies Grid matching CV */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#0F172A]">Core Competencies &amp; Technical Capabilities</h3>
            <span className="text-xs text-slate-500 font-mono">Senior Product / Lead AX</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Competency 1 */}
            <div className="p-5 rounded-lg border border-[#E2E8F0] bg-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-indigo-50 text-indigo-700">
                  <BrainCircuit className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-bold text-[#0F172A]">1. Agent Experience (AX)</h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Autonomous agent workflows, parallel state visualization, persona orchestration, thinking progress streamers, and ambient co-pilot interfaces.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                Multi-Agent · CoT · Orchestration
              </div>
            </div>

            {/* Competency 2 */}
            <div className="p-5 rounded-lg border border-[#E2E8F0] bg-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-amber-50 text-amber-800">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-bold text-[#0F172A]">2. Algorithmic Trust &amp; HITL</h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Human-in-the-Loop decision gates, Automation Bias mitigation, Explainable AI (XAI) feature attribution, and cryptographically verifiable audit trails.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                HITL · SHAP · Blast Radius
              </div>
            </div>

            {/* Competency 3 */}
            <div className="p-5 rounded-lg border border-[#E2E8F0] bg-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-emerald-50 text-emerald-700">
                  <Code2 className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-bold text-[#0F172A]">3. Rapid Prototyping &amp; Code</h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Engineering functional prototypes with Cursor, Claude, v0, React 19, TypeScript, Tailwind CSS, LangChain, and Python to validate interactions with live models.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                React 19 · TS · Cursor · Python
              </div>
            </div>

            {/* Competency 4 */}
            <div className="p-5 rounded-lg border border-[#E2E8F0] bg-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-slate-100 text-slate-800">
                  <Layers className="w-4 h-4" />
                </span>
                <h4 className="text-xs font-bold text-[#0F172A]">4. Core Enterprise Design</h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Complex enterprise SaaS architecture, design system tokenization, high-stakes domain user research (financial risk, compliance, distributed telemetry).
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                Design Systems · IA · Research
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
