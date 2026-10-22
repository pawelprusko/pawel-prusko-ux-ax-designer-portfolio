import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Sliders, 
  CheckCircle, 
  AlertTriangle, 
  FileCheck2, 
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Lock,
  Unlock,
  Info
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
    <article className="border border-[#E2E8F0] rounded-xl bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
      
      {/* Editorial Header Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-700">
            <span>CASE STUDY {caseData.number}</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-600 font-sans">{caseData.category}</span>
          </div>

          {/* Confidence State Mode Switcher (Zero-pill, clean segmented buttons) */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md text-xs font-medium">
            <button
              onClick={() => handleToggleMode('high_98')}
              className={`px-3 py-1 rounded transition-colors ${
                confidenceMode === 'high_98'
                  ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Simulate: 98% High Confidence State
            </button>
            <button
              onClick={() => handleToggleMode('low_62')}
              className={`px-3 py-1 rounded transition-colors ${
                confidenceMode === 'low_62'
                  ? 'bg-white text-amber-800 shadow-xs font-semibold'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Simulate: 62% Low Confidence State
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
          {caseData.title}
        </h2>

        {/* Impact Subheading */}
        <p className="text-sm font-semibold text-emerald-800">
          Impact: {caseData.impactMetric} · <span className="font-normal text-[#475569]">{caseData.impactDescription}</span>
        </p>

        <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-4xl pt-1">
          {caseData.overview}
        </p>
      </div>

      {/* Narrative Problem & Solution Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-2 border-y border-[#E2E8F0]">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">The AX Challenge</h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {caseData.problem}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-700">The Interaction Solution</h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {caseData.solution}
          </p>
        </div>
      </div>

      {/* INTERACTIVE UI COMPONENT MOCKUP */}
      <div className="space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-[#0F172A] uppercase tracking-wider">
            Live Adaptive Confidence-Scoring Interface
          </span>
          <span className="text-slate-500 font-mono text-[11px]">
            Target Domain: Commercial Credit Underwriting ($4.8M Facility)
          </span>
        </div>

        <div className="border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] overflow-hidden">
          
          {/* Top Bar of Simulated Enterprise System */}
          <div className="bg-white px-5 py-3 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#0F172A]">Entity: Global Logistics Corp</span>
              <span className="text-slate-400 font-mono text-[11px]">· Facility Request: $4,850,000</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-500">Model Confidence:</span>
              <span className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${
                confidenceMode === 'high_98'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {confidenceMode === 'high_98' ? '98.4% (Clear Trajectory)' : '62.1% (High Variance)'}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            
            {/* SCENARIO A: 98% HIGH CONFIDENCE STATE */}
            {confidenceMode === 'high_98' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-lg flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-emerald-900">
                      Automated Pre-Approval Invariants Satisfied (Zero Deviation)
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      All 18 compliance heuristics validated without policy exception. Operator friction is minimized to enable high-throughput batch signing.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-3.5 rounded border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-medium">Debt Service Ratio</span>
                    <p className="text-base font-bold font-mono text-[#0F172A] mt-0.5">2.41x (Target &gt; 1.35x)</p>
                    <span className="text-[10px] text-emerald-700 font-medium">✓ Passed Tier 1</span>
                  </div>

                  <div className="bg-white p-3.5 rounded border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-medium">Historical Repayment Score</span>
                    <p className="text-base font-bold font-mono text-[#0F172A] mt-0.5">99.8% On-Time</p>
                    <span className="text-[10px] text-emerald-700 font-medium">✓ 48 Consecutive Months</span>
                  </div>

                  <div className="bg-white p-3.5 rounded border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-medium">Audit Trail Hash</span>
                    <p className="text-base font-bold font-mono text-[#0F172A] mt-0.5">0x7F2A...18C</p>
                    <span className="text-[10px] text-slate-400 font-mono">Immutable</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-[#0F172A]">Streamlined 1-Click Verification:</span>
                    <p className="text-[11px] text-slate-500">Autonomous co-pilot recommend approval. No manual exception rationale required.</p>
                  </div>

                  {!isApproved ? (
                    <button
                      onClick={handleApproveAction}
                      className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-xs"
                    >
                      Batch Sign &amp; Authorize Credit ($4.85M)
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                      <CheckCircle className="w-4 h-4" />
                      <span>Authorized with Zero Friction</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SCENARIO B: 62% LOW CONFIDENCE STATE (XAI & HITL FORCED REVIEW) */}
            {confidenceMode === 'low_62' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                
                {/* Automation Bias Mitigation Alert in Amber */}
                <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-amber-900">
                        Automation Bias Safeguard Triggered (Confidence 62.1%)
                      </h4>
                      <span className="text-[10px] font-mono text-amber-900 bg-amber-200/60 px-1.5 py-0.5 rounded">
                        Mandatory XAI Review
                      </span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      High parameter divergence detected. Quick-approval is disabled to prevent operator complacency. Review explainability factor weights below.
                    </p>
                  </div>
                </div>

                {/* Explainable AI (XAI) Feature Attribution Breakdown */}
                <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                    <span className="font-semibold text-[#0F172A]">
                      Explainable AI (XAI): Attribution Factor Weights (SHAP Values)
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">Influence on Risk Prediction</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    
                    {/* Negative Factor 1 */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-rose-800 font-medium flex items-center gap-1.5">
                          <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                          Historical Cash-Flow Volatility in Q2
                        </span>
                        <span className="font-mono text-rose-700 font-bold">-42% Risk Weight</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-xs overflow-hidden">
                        <div className="bg-rose-500 h-full rounded-xs" style={{ width: '42%' }}></div>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Working capital dipped below covenant threshold for 14 days in May 2026.
                      </p>
                    </div>

                    {/* Negative Factor 2 */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-rose-800 font-medium flex items-center gap-1.5">
                          <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                          Cross-Border Collateral Liquidity Variance
                        </span>
                        <span className="font-mono text-rose-700 font-bold">-24% Risk Weight</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-xs overflow-hidden">
                        <div className="bg-rose-400 h-full rounded-xs" style={{ width: '24%' }}></div>
                      </div>
                    </div>

                    {/* Positive Factor 1 */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-800 font-medium flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          Tier 1 Bank Guarantee on Inventory
                        </span>
                        <span className="font-mono text-emerald-700 font-bold">+38% Mitigating Weight</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-xs overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-xs" style={{ width: '38%' }}></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* MANDATORY HUMAN JUSTIFICATION INPUT (Granular Control Workflow) */}
                <div className="bg-white border-2 border-slate-300 rounded-lg p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-600" />
                      Mandatory Operator Risk Justification (Minimum 10 characters)
                    </label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Logged to Immutable Compliance Audit Ledger
                    </span>
                  </div>

                  <textarea
                    rows={2}
                    value={humanJustification}
                    onChange={(e) => {
                      setHumanJustification(e.target.value);
                      if (attemptedWithoutRationale) setAttemptedWithoutRationale(false);
                    }}
                    placeholder="Document human reasoning to override automated caution: e.g. 'Verified irrevocable standby letter of credit with Deutsche Bank directly via SWIFT MT760.'"
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 font-sans"
                  />

                  {attemptedWithoutRationale && (
                    <p className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Cognitive Guardrail Active: You cannot rubber-stamp low-confidence cases without documenting reasoning.
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-[11px] text-slate-500">
                      Signer: <strong className="text-[#0F172A]">Senior Underwriter (Operator #402)</strong>
                    </p>

                    {!isApproved ? (
                      <button
                        onClick={handleApproveAction}
                        className="px-5 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors shadow-xs"
                      >
                        Sign Justification &amp; Authorize Exception
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                        <FileCheck2 className="w-4 h-4 text-emerald-600" />
                        <span>Override Authorized with Signed Audit Trail</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Measurable Deliverables Grid */}
      <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {caseData.metrics.map((m, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
            <p className="font-mono text-xl font-bold text-[#0F172A] tabular-nums">{m.value}</p>
            <p className="text-xs text-[#475569] mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

    </article>
  );
};
