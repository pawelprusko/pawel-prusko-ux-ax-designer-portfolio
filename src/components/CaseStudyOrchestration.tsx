import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Check, 
  X,
  FileCode,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudyOrchestration: React.FC = () => {
  const caseData = CASE_STUDIES[0];
  
  // Interactive Simulation State
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'hitl_gate' | 'approved' | 'rejected'>('hitl_gate');
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Idle, 1: Agent 1, 2: Agent 2, 3: HITL Gate, 4: Done
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [showOverrideInput, setShowOverrideInput] = useState<boolean>(false);
  const [elapsedMs, setElapsedMs] = useState<number>(412);
  const [tokensProcessed, setTokensProcessed] = useState<number>(1420);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pipelineState === 'running') {
      setActiveStep(1);
      setElapsedMs(94);
      setTokensProcessed(380);

      timer = setTimeout(() => {
        setActiveStep(2);
        setElapsedMs(265);
        setTokensProcessed(890);

        timer = setTimeout(() => {
          setActiveStep(3);
          setPipelineState('hitl_gate');
          setElapsedMs(412);
          setTokensProcessed(1420);
        }, 750);
      }, 650);
    }
    return () => clearTimeout(timer);
  }, [pipelineState]);

  const handleStartSimulation = () => {
    setPipelineState('running');
    setActiveStep(0);
    setShowOverrideInput(false);
  };

  const handleReset = () => {
    setPipelineState('idle');
    setActiveStep(0);
    setShowOverrideInput(false);
    setRejectionReason('');
  };

  const handleApprove = () => {
    setPipelineState('approved');
    setActiveStep(4);
  };

  const handleReject = () => {
    if (!showOverrideInput) {
      setShowOverrideInput(true);
      return;
    }
    setPipelineState('rejected');
    setActiveStep(4);
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

          <div className="text-xs font-mono text-[#090A0F]">
            Impact: {caseData.impactMetric}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
          {caseData.title}
        </h2>

        <p className="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-4xl pt-1">
          {caseData.overview}
        </p>
      </div>

      {/* Narrative Problem & Solution Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4 border-y border-[#E4E4E7]">
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#090A0F]">
            01. The Interaction Challenge
          </h3>
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
            {caseData.problem}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#090A0F]">
            02. The Architectural Solution
          </h3>
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
            {caseData.solution}
          </p>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT MOCKUP */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono font-semibold text-[#090A0F] uppercase tracking-wider">
            Live Streamer Simulation: Multi-Agent Parallel State &amp; HITL Gate
          </div>

          <div className="flex items-center gap-2">
            {pipelineState !== 'running' ? (
              <button
                onClick={handleStartSimulation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#090A0F] rounded hover:bg-[#27272A] transition-colors shadow-xs"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Simulate Pipeline</span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#090A0F] bg-white border border-[#E4E4E7] rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F] animate-pulse"></span>
                Orchestrating...
              </span>
            )}

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#52525B] bg-white hover:text-[#090A0F] border border-[#E4E4E7] rounded transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Simulation Canvas */}
        <div className="border border-[#E4E4E7] rounded-lg bg-white overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
            <div>
              <span className="text-[#090A0F] font-semibold">Directive:</span> MIGRATE_DB_SCHEMA(users_v2.sql)
            </div>
            <div className="flex items-center gap-4">
              <span>Latency: <strong className="text-[#090A0F]">{elapsedMs}ms</strong></span>
              <span>Tokens: <strong className="text-[#090A0F]">{tokensProcessed}</strong></span>
              <span>Gate: <strong className="text-[#090A0F]">Active</strong></span>
            </div>
          </div>

          {/* Stepper Streamer Body */}
          <div className="p-6 space-y-4">
            
            {/* Agent 1 */}
            <div className={`p-4 rounded border transition-all ${
              activeStep >= 1 ? 'border-[#090A0F] bg-white' : 'border-[#E4E4E7] bg-[#FAFAFA] opacity-50'
            }`}>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#090A0F] font-mono">Agent 01: Schema Contract Validator</span>
                <span className="font-mono text-[11px] text-[#52525B]">
                  {activeStep > 1 ? '✓ Complete (100% Invariants)' : activeStep === 1 ? 'Running...' : 'Queued'}
                </span>
              </div>
              <p className="font-mono text-xs text-[#52525B] leading-relaxed">
                {activeStep >= 1 ? (
                  `> DDL analysis on 'auth_tokens_v2': 4 indexes verified. Non-null constraints compliant with ACID rules. Zero circular foreign keys.`
                ) : (
                  `> Waiting for execution trigger...`
                )}
              </p>
            </div>

            {/* Agent 2 */}
            <div className={`p-4 rounded border transition-all ${
              activeStep >= 2 ? 'border-[#090A0F] bg-white' : 'border-[#E4E4E7] bg-[#FAFAFA] opacity-50'
            }`}>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#090A0F] font-mono">Agent 02: Security Guardrail Auditor</span>
                <span className="font-mono text-[11px] text-[#52525B]">
                  {activeStep > 2 ? '✓ Complete (Zero PII Leakage)' : activeStep === 2 ? 'Running...' : 'Queued'}
                </span>
              </div>
              <p className="font-mono text-xs text-[#52525B] leading-relaxed">
                {activeStep >= 2 ? (
                  `> Token entropy verified (256-bit). Security policy rule G-402 passed. High blast-radius flag engaged -> Routing to HITL approval gate.`
                ) : (
                  `> Waiting for Agent 01 output handshake...`
                )}
              </p>
            </div>

            {/* HITL Node */}
            <div className={`p-5 rounded border transition-all ${
              pipelineState === 'hitl_gate' 
                ? 'border-[#090A0F] bg-[#FAFAFA]' 
                : 'border-[#E4E4E7] bg-white'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">
                    Human-in-the-Loop Gateway · Production Gate #402
                  </h4>
                  <p className="text-xs text-[#52525B]">
                    Supervisory gate required before deploying migration affecting 14,200 active sessions.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#090A0F]">
                  STATE: {pipelineState.toUpperCase()}
                </span>
              </div>

              {pipelineState === 'hitl_gate' && (
                <div className="space-y-3 pt-3 border-t border-[#E4E4E7]">
                  {showOverrideInput && (
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#090A0F]">Re-evaluation Constraint Note:</label>
                      <input
                        type="text"
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        placeholder="e.g. Ensure backward compatibility with v1 OAuth tokens"
                        className="w-full text-xs font-mono p-2 border border-[#090A0F] rounded bg-white text-[#090A0F] focus:outline-hidden"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={handleApprove}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#090A0F] hover:bg-[#27272A] rounded transition-colors"
                    >
                      Authorize &amp; Deploy to Production
                    </button>

                    <button
                      onClick={handleReject}
                      className="px-4 py-2 text-xs font-semibold text-[#090A0F] bg-white border border-[#E4E4E7] hover:border-[#090A0F] rounded transition-colors"
                    >
                      {showOverrideInput ? 'Submit Re-evaluation' : 'Request Re-evaluation'}
                    </button>

                    <span className="text-[11px] font-mono text-[#52525B] ml-auto">
                      Audit Hash: 0x8F9B...31E
                    </span>
                  </div>
                </div>
              )}

              {pipelineState === 'approved' && (
                <div className="pt-2 text-xs text-[#090A0F] flex items-center justify-between font-mono">
                  <span>✓ Authorization signed by supervisor. Migration deployed with zero downtime.</span>
                  <button onClick={handleStartSimulation} className="underline underline-offset-4">Run again</button>
                </div>
              )}

              {pipelineState === 'rejected' && (
                <div className="pt-2 text-xs text-[#090A0F] flex items-center justify-between font-mono">
                  <span>✕ Deployment halted. Agent context rolled back safely.</span>
                  <button onClick={handleStartSimulation} className="underline underline-offset-4">Retry</button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Metrics Row */}
      <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {caseData.metrics.map((m, idx) => (
          <div key={idx} className="p-4 rounded border border-[#E4E4E7] bg-white">
            <p className="font-mono text-xl font-bold text-[#090A0F] tabular-nums">{m.value}</p>
            <p className="text-xs text-[#52525B] mt-1">{m.label}</p>
          </div>
        ))}
      </div>

    </article>
  );
};
