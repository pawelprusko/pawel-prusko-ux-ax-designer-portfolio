import React from 'react';
import { 
  Compass, 
  Shield, 
  Code2, 
  Layers
} from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="framework" className="py-20 lg:py-24 border-b border-[#E4E4E7] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#52525B]">
            <span>METHODOLOGY &amp; TECHNICAL TOOLKIT</span>
            <span className="mx-2 text-[#E4E4E7]">/</span>
            <span>Cognitive AI Alignment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
            Human-Agent Alignment &amp; Interaction Frameworks
          </h2>

          <p className="text-sm sm:text-base text-[#52525B] max-w-3xl leading-relaxed">
            Leading the paradigm shift from static graphical user interfaces (GUI) to non-deterministic Agent Experiences (AX). All design solutions are grounded in established human-AI interaction frameworks.
          </p>
        </div>

        {/* Framework Alignment Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Google PAIR Guidebook Card */}
          <div className="border border-[#E4E4E7] rounded-lg p-6 sm:p-8 bg-[#FAFAFA] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7]">
              <h3 className="text-sm font-bold text-[#090A0F] font-mono uppercase">
                Google PAIR Guidebook Alignment
              </h3>
              <span className="text-xs font-mono text-[#52525B]">People + AI Research</span>
            </div>

            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Applying PAIR guidelines to bridge user expectations and statistical model outputs:
            </p>

            <ul className="space-y-3 text-xs text-[#090A0F]">
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>Calibrated Mental Models:</strong> Explicitly communicating model boundaries, latency expectations, and non-deterministic variations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>Supervised Co-Creation:</strong> Presenting agent proposals as editable drafts rather than irrevocable decrees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>Graceful Failure Handling:</strong> Providing deterministic rollback UI and structured escalation paths when models hallucinate.</span>
              </li>
            </ul>
          </div>

          {/* Microsoft HAX Toolkit Card */}
          <div className="border border-[#E4E4E7] rounded-lg p-6 sm:p-8 bg-[#FAFAFA] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7]">
              <h3 className="text-sm font-bold text-[#090A0F] font-mono uppercase">
                Microsoft HAX Toolkit Standards
              </h3>
              <span className="text-xs font-mono text-[#52525B]">18 Human-AI Heuristics</span>
            </div>

            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Integrating HAX principles across all four interaction stages:
            </p>

            <ul className="space-y-3 text-xs text-[#090A0F]">
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>G1 · Make Clear What the System Can Do:</strong> Context-aware action recommendations anchored strictly to verified tool capacities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>G9 · Support Efficient Correction:</strong> In-line parameter fine-tuning without forcing the operator to restart workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[#52525B] mt-0.5">•</span>
                <span><strong>G11 · Make Clear Why the System Did What It Did:</strong> Explainable AI (XAI) feature attribution breakdown with factor weighting.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Core Competencies Grid matching CV */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#090A0F] font-mono uppercase">
              Core Competencies &amp; Technical Capabilities
            </h3>
            <span className="text-xs text-[#52525B] font-mono">Senior UX / Agent Experience Designer</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Competency 1 */}
            <div className="p-5 rounded border border-[#E4E4E7] bg-white space-y-2">
              <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">1. Agent Experience (AX)</h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Autonomous agent workflows, parallel state visualization, persona orchestration, and progressive disclosure interfaces.
              </p>
            </div>

            {/* Competency 2 */}
            <div className="p-5 rounded border border-[#E4E4E7] bg-white space-y-2">
              <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">2. Algorithmic Trust &amp; HITL</h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Human-in-the-Loop (HITL) decision gates, Automation Bias mitigation, Explainable AI (XAI) feature attribution, and audit trails.
              </p>
            </div>

            {/* Competency 3 */}
            <div className="p-5 rounded border border-[#E4E4E7] bg-white space-y-2">
              <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">3. Rapid Prototyping &amp; Code</h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Engineering functional prototypes with Cursor, Claude, React 19, TypeScript, Tailwind CSS, and Python to validate interactions with live models.
              </p>
            </div>

            {/* Competency 4 */}
            <div className="p-5 rounded border border-[#E4E4E7] bg-white space-y-2">
              <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">4. Core Enterprise Design</h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Complex enterprise SaaS architecture, design system tokenization, high-stakes domain user research (financial risk, compliance).
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
