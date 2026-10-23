import React, { useState } from 'react';
import { 
  Check, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudyEnterpriseCopilot: React.FC = () => {
  const caseData = CASE_STUDIES[2];

  // Interactive State
  const [confidenceMode, setConfidenceMode] = useState<'high_98' | 'low_62'>('low_62');
  const [humanJustification, setHumanJustification] = useState<string>('');
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [attemptedWithoutRationale, setAttemptedWithoutRationale] = useState<boolean>(false);

  const handleToggleMode = (mode: 'high_98' | 'low_62') => {
    setConfidenceMode(mode);
    setIsApproved(false);
    setAttemptedWithoutRationale(false);
  };

  const handleApproveAction = () => {
    if (confidenceMode === 'low_62' && humanJustification.trim().length < 10) {
      setAttemptedWithoutRationale(true);
      return;
    }
    setIsApproved(true);
    setAttemptedWithoutRationale(false);
  };

  return (
    <article className="border border-[#E4E4E7] rounded-lg bg-[#FAFAFA] p-6 sm:p-10 lg:p-12 space-y-8">
      
      {/* Editorial Header Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#52525B]">
            <span>CASE STUDY {caseData.number}</span>
            <span className="mx-2 text-[#E4E4E7]">/</span>
            <span>{caseData.category}</span>
          </div>

          <div className="flex items-center gap-1 bg-white border border-[#E4E4E7] p-1 rounded text-xs font-mono">
            <button
              onClick={() => handleToggleMode('high_98')}
              className={`px-3 py-1 rounded transition-colors ${
                confidenceMode === 'high_98'
                  ? 'bg-[#090A0F] text-white font-semibold'
                  : 'text-[#52525B] hover:text-[#090A0F]'
              }`}
            >
              Simulate: 98% High Confidence
            </button>
            <button
              onClick={() => handleToggleMode('low_62')}
              className={`px-3 py-1 rounded transition-colors ${
                confidenceMode === 'low_62'
                  ? 'bg-[#090A0F] text-white font-semibold'
                  : 'text-[#52525B] hover:text-[#090A0F]'
              }`}
            >
              Simulate: 62% Low Confidence (XAI)
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
          {caseData.title}
        </h2>

        <p className="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-4xl pt-1">
          {caseData.overview}
        </p>
      </div>

      {/* 3-Column Deep-Dive Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-6 border-y border-[#E4E4E7]">
        <div className="space-y-2 p-4 rounded bg-white border border-[#E4E4E7]">
          <div className="text-[11px] font-mono font-bold text-[#090A0F] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
            01. Discovery &amp; Cognitive Risk
          </div>
          <p className="text-xs text-[#52525B] leading-relaxed">
            {caseData.discoveryRisk}
          </p>
        </div>

        <div className="space-y-2 p-4 rounded bg-white border border-[#E4E4E7]">
          <div className="text-[11px] font-mono font-bold text-[#090A0F] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
            02. System Flow &amp; Interaction Spec
          </div>
          <p className="text-xs text-[#52525B] leading-relaxed">
            {caseData.interactionSpec}
          </p>
        </div>

        <div className="space-y-2 p-4 rounded bg-white border border-[#E4E4E7]">
          <div className="text-[11px] font-mono font-bold text-[#090A0F] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
            03. Logic Validation &amp; Vibe Prototyping
          </div>
          <p className="text-xs text-[#52525B] leading-relaxed">
            {caseData.validationPrototyping}
          </p>
        </div>
      </div>

      {/* 04. ARCHITECTURAL SOLUTION & LIVE SIMULATOR */}
      <div className="space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="font-semibold text-[#090A0F] uppercase">
            04. Architectural Solution &amp; Live Simulator
          </span>
          <span className="text-[#52525B]">
            Commercial Credit Underwriting ($4.85M)
          </span>
        </div>

        <div className="border border-[#E4E4E7] rounded-lg bg-white overflow-hidden">
          
          {/* Top Bar */}
          <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
            <div>
              <span className="text-[#090A0F] font-semibold">Entity:</span> Global Logistics Corp · Facility: $4,850,000
            </div>

            <div className="flex items-center gap-2">
              <span>Confidence:</span>
              <strong className="text-[#090A0F] px-2 py-0.5 border border-[#090A0F] rounded">
                {confidenceMode === 'high_98' ? '98.4% (Clear Trajectory)' : '62.1% (High Variance)'}
              </strong>
            </div>
          </div>

          <div className="p-6 space-y-6">
            
            {/* 98% HIGH CONFIDENCE SCENARIO */}
            {confidenceMode === 'high_98' && (
              <div className="space-y-5">
                <div className="bg-[#FAFAFA] border border-[#090A0F] p-4 rounded space-y-1">
                  <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">
                    Automated Pre-Approval Invariants Satisfied (Zero Deviation)
                  </h4>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    All 18 compliance heuristics validated without policy exception. Low friction enables high-throughput batch verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-[#FAFAFA] p-3.5 rounded border border-[#E4E4E7]">
                    <span className="text-[#52525B]">Debt Service Ratio</span>
                    <p className="text-base font-bold text-[#090A0F] mt-0.5">2.41x (&gt;1.35x)</p>
                    <span className="text-[11px] text-[#090A0F]">✓ Passed Tier 1</span>
                  </div>

                  <div className="bg-[#FAFAFA] p-3.5 rounded border border-[#E4E4E7]">
                    <span className="text-[#52525B]">Repayment Score</span>
                    <p className="text-base font-bold text-[#090A0F] mt-0.5">99.8% On-Time</p>
                    <span className="text-[11px] text-[#090A0F]">✓ 48 Consecutive Months</span>
                  </div>

                  <div className="bg-[#FAFAFA] p-3.5 rounded border border-[#E4E4E7]">
                    <span className="text-[#52525B]">Audit Hash</span>
                    <p className="text-base font-bold text-[#090A0F] mt-0.5">0x7F2A...18C</p>
                    <span className="text-[11px] text-[#52525B]">Immutable</span>
                  </div>
                </div>

                <div className="p-4 rounded border border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#52525B]">
                    <span className="font-semibold text-[#090A0F]">1-Click Verification:</span>
                    <p className="text-[11px]">System recommends approval. No manual exception rationale required.</p>
                  </div>

                  {!isApproved ? (
                    <button
                      onClick={handleApproveAction}
                      className="px-5 py-2 text-xs font-semibold text-white bg-[#090A0F] hover:bg-[#27272A] rounded transition-colors"
                    >
                      Authorize Facility ($4.85M)
                    </button>
                  ) : (
                    <div className="text-xs font-mono font-semibold text-[#090A0F]">
                      ✓ Authorized with Clean Audit Ledger
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 62% LOW CONFIDENCE SCENARIO */}
            {confidenceMode === 'low_62' && (
              <div className="space-y-5">
                
                {/* Warning Card */}
                <div className="bg-[#FAFAFA] border border-[#090A0F] p-4 rounded space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">
                      Automation Bias Safeguard Triggered · Confidence 62.1%
                    </h4>
                    <span className="text-[10px] font-mono text-[#090A0F] border border-[#090A0F] px-1 rounded">
                      Mandatory Review
                    </span>
                  </div>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    Parameter divergence detected. Quick-approval is disabled to prevent operator complacency. Review explainability factor weights below.
                  </p>
                </div>

                {/* XAI Attribution */}
                <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-[#E4E4E7] pb-2">
                    <span className="font-semibold text-[#090A0F]">
                      Explainable AI (XAI): Attribution Factor Weights (SHAP Values)
                    </span>
                    <span className="text-[#52525B]">Risk Influence</span>
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    
                    {/* Factor 1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#090A0F]">Historical Cash-Flow Volatility in Q2</span>
                        <span className="font-bold text-[#090A0F]">-42% Weight</span>
                      </div>
                      <div className="w-full h-2 bg-[#E4E4E7] rounded-xs overflow-hidden">
                        <div className="bg-[#090A0F] h-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>

                    {/* Factor 2 */}
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#090A0F]">Cross-Border Collateral Liquidity Variance</span>
                        <span className="font-bold text-[#090A0F]">-24% Weight</span>
                      </div>
                      <div className="w-full h-2 bg-[#E4E4E7] rounded-xs overflow-hidden">
                        <div className="bg-[#52525B] h-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>

                    {/* Factor 3 */}
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#090A0F]">Tier 1 Bank Guarantee on Inventory</span>
                        <span className="font-bold text-[#090A0F]">+38% Mitigating</span>
                      </div>
                      <div className="w-full h-2 bg-[#E4E4E7] rounded-xs overflow-hidden">
                        <div className="bg-[#090A0F] h-full" style={{ width: '38%' }}></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mandatory Justification */}
                <div className="bg-white border border-[#090A0F] rounded p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <label className="font-bold text-[#090A0F] uppercase flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      Mandatory Supervisor Risk Justification
                    </label>
                    <span className="text-[#52525B]">Logged to Compliance Audit</span>
                  </div>

                  <textarea
                    rows={2}
                    value={humanJustification}
                    onChange={(e) => {
                      setHumanJustification(e.target.value);
                      if (attemptedWithoutRationale) setAttemptedWithoutRationale(false);
                    }}
                    placeholder="Document human reasoning: e.g. 'Verified irrevocable standby letter of credit with depository bank directly.'"
                    className="w-full p-2.5 text-xs bg-[#FAFAFA] border border-[#E4E4E7] rounded focus:bg-white focus:outline-hidden focus:border-[#090A0F] font-mono text-[#090A0F]"
                  />

                  {attemptedWithoutRationale && (
                    <p className="text-xs font-mono text-[#090A0F] underline">
                      Guardrail Active: Please document supervisor rationale before authorization.
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-[11px] font-mono text-[#52525B]">
                      Signer: Senior Underwriter (Operator #402)
                    </p>

                    {!isApproved ? (
                      <button
                        onClick={handleApproveAction}
                        className="px-5 py-2 text-xs font-semibold text-white bg-[#090A0F] hover:bg-[#27272A] rounded transition-colors shadow-xs"
                      >
                        Sign Justification &amp; Authorize Exception
                      </button>
                    ) : (
                      <div className="text-xs font-mono font-semibold text-[#090A0F]">
                        ✓ Exception Authorized with Signed Audit Record
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* 05. MEASURABLE IMPACT */}
      <div className="space-y-4 pt-2">
        <div className="p-4 rounded-lg border border-[#090A0F] bg-white text-xs font-mono">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-[#090A0F] uppercase">
              05. Measurable Impact
            </span>
            <span className="text-[#52525B]">/ Verified Outcomes</span>
          </div>
          <p className="text-[#090A0F] font-semibold text-xs sm:text-sm">
            {caseData.measurableImpact}
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {caseData.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded border border-[#E4E4E7] bg-white">
              <p className="font-mono text-xl font-bold text-[#090A0F] tabular-nums">{m.value}</p>
              <p className="text-xs text-[#52525B] mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
};
