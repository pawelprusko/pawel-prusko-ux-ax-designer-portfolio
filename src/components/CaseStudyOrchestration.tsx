import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Cpu, 
  GitBranch, 
  Eye, 
  Check, 
  XCircle,
  FileCode,
  Layers
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudyOrchestration: React.FC = () => {
  const caseData = CASE_STUDIES[0];
  
  // Interactive Simulation State
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'hitl_gate' | 'approved' | 'rejected'>('hitl_gate');
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Idle, 1: Agent 1, 2: Agent 2, 3: HITL Gate, 4: Done
  const [activeTab, setActiveTab] = useState<'interactive_mock' | 'architectural_schema'>('interactive_mock');
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [showOverrideInput, setShowOverrideInput] = useState<boolean>(false);
  const [elapsedMs, setElapsedMs] = useState<number>(412);
  const [tokensProcessed, setTokensProcessed] = useState<number>(1420);

  // Simulation runner effect
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
        }, 800);
      }, 700);
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
    <article className="border border-[#E2E8F0] rounded-xl bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
      
      {/* Editorial Header Block */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-700">
            <span>CASE STUDY {caseData.number}</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-600 font-sans">{caseData.category}</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md text-xs font-medium">
            <button
              onClick={() => setActiveTab('interactive_mock')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'interactive_mock'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Interactive State Streamer
            </button>
            <button
              onClick={() => setActiveTab('architectural_schema')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'architectural_schema'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Architectural Schema
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

      {/* TAB CONTENT 1: INTERACTIVE COMPONENT MOCKUP */}
      {activeTab === 'interactive_mock' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
                Live Prototype Simulator: Parallel Agent Stream &amp; HITL Gate
              </span>
              <span className="text-[11px] font-mono text-slate-400">· Task #ORCH-882</span>
            </div>

            <div className="flex items-center gap-2">
              {pipelineState !== 'running' ? (
                <button
                  onClick={handleStartSimulation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors shadow-xs active:translate-y-0.5"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Re-Run Simulation</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                  Orchestrating Agents...
                </span>
              )}

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                title="Reset Simulation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* SIMULATION BOARD CONTAINER */}
          <div className="border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] overflow-hidden">
            
            {/* Simulation Header Bar */}
            <div className="bg-white px-5 py-3 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold text-[#0F172A]">Directives:</span>
                <span className="text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded font-mono">
                  MIGRATE_DB_SCHEMA(users_v2.sql, target: prod-cluster)
                </span>
              </div>
              <div className="flex items-center gap-4 text-slate-500 font-mono">
                <span>Latency: <strong className="text-[#0F172A]">{elapsedMs}ms</strong></span>
                <span>Tokens: <strong className="text-[#0F172A]">{tokensProcessed}</strong></span>
                <span>Blast Radius: <strong className="text-amber-700">High (Prod Write)</strong></span>
              </div>
            </div>

            {/* Visual Streamer Grid */}
            <div className="p-5 space-y-4">
              
              {/* Agent Node 1: Schema Validator */}
              <div className={`p-4 rounded-md border transition-all duration-300 ${
                activeStep >= 1 
                  ? 'bg-white border-slate-300 shadow-xs' 
                  : 'bg-slate-100/60 border-slate-200 opacity-60'
              }`}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-indigo-50 text-indigo-700">
                      <FileCode className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-bold text-[#0F172A]">Agent 1: Schema Contract Validator</span>
                    <span className="text-[11px] text-slate-400 font-mono">· subagent-schema-04</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    {activeStep > 1 ? (
                      <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                        <Check className="w-3.5 h-3.5" /> Invariants Passed (100%)
                      </span>
                    ) : activeStep === 1 ? (
                      <span className="text-indigo-600 font-semibold animate-pulse">
                        Analyzing Foreign Keys...
                      </span>
                    ) : (
                      <span className="text-slate-400">Queued</span>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded p-2.5 text-xs font-mono text-slate-700 space-y-1">
                  <p className="text-slate-500">// Chain of Thought Log</p>
                  <p className="text-[#0F172A]">
                    {activeStep >= 1 ? (
                      `> Parsing DDL for table 'auth_tokens_v2': 4 indexes verified. Non-null constraints compliant with ACID rules. Zero circular dependencies identified.`
                    ) : (
                      `> Awaiting input stream...`
                    )}
                  </p>
                </div>
              </div>

              {/* Agent Node 2: Security & Guardrail Auditor */}
              <div className={`p-4 rounded-md border transition-all duration-300 ${
                activeStep >= 2 
                  ? 'bg-white border-slate-300 shadow-xs' 
                  : 'bg-slate-100/60 border-slate-200 opacity-60'
              }`}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-emerald-50 text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-bold text-[#0F172A]">Agent 2: Security &amp; Data Guardrail Agent</span>
                    <span className="text-[11px] text-slate-400 font-mono">· subagent-guard-09</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    {activeStep > 2 ? (
                      <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                        <Check className="w-3.5 h-3.5" /> Zero Data Leakage Detected
                      </span>
                    ) : activeStep === 2 ? (
                      <span className="text-indigo-600 font-semibold animate-pulse">
                        Probing PII Exposure Vectors...
                      </span>
                    ) : (
                      <span className="text-slate-400">Queued</span>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded p-2.5 text-xs font-mono text-slate-700 space-y-1">
                  <p className="text-slate-500">// Security Audit Trace</p>
                  <p className="text-[#0F172A]">
                    {activeStep >= 2 ? (
                      `> Scanned column 'hashed_refresh_token': Salt entropy 256-bit confirmed. Guardrail Rule G-402 passed. High-blast radius flag triggered -> Escalated to HITL Approval Gateway.`
                    ) : (
                      `> Awaiting validation from Agent 1...`
                    )}
                  </p>
                </div>
              </div>

              {/* HITL APPROVAL NODE (The Human-in-the-Loop Gate) */}
              <div className={`p-5 rounded-md border-2 transition-all duration-300 ${
                pipelineState === 'hitl_gate'
                  ? 'bg-white border-amber-400 shadow-sm'
                  : pipelineState === 'approved'
                  ? 'bg-emerald-50/50 border-emerald-400'
                  : pipelineState === 'rejected'
                  ? 'bg-rose-50/50 border-rose-400'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`p-1.5 rounded ${
                      pipelineState === 'hitl_gate'
                        ? 'bg-amber-100 text-amber-900'
                        : pipelineState === 'approved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
                        <span>HITL Approval Node: High-Blast-Radius Gate</span>
                        <span className="font-normal text-[11px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                          Mandatory Human Sign-off
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-500">Policy: Production write changes require senior operator confirmation.</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-[#0F172A]">
                      State: {pipelineState.toUpperCase()}
                    </span>
                  </div>
                </div>

                {pipelineState === 'hitl_gate' && (
                  <div className="space-y-3 pt-2 border-t border-slate-200">
                    <div className="text-xs text-slate-700 bg-amber-50/60 p-3 rounded border border-amber-200/80">
                      <p className="font-medium text-amber-900">
                        Agents 1 &amp; 2 reached 99.1% consensus. However, this deployment touches <strong>14,200 active enterprise user sessions</strong>.
                      </p>
                      <p className="text-[11px] text-amber-800 mt-1">
                        Please review the proposed migration payload before authorizing deployment to cluster <code>prod-eu-west-01</code>.
                      </p>
                    </div>

                    {showOverrideInput && (
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-rose-900">
                          Re-evaluation Instruction / Rejection Reason:
                        </label>
                        <input
                          type="text"
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                          placeholder="e.g. Add backward-compatible fallback for legacy v1 API tokens"
                          className="w-full text-xs font-mono p-2 border border-rose-300 rounded focus:outline-hidden focus:ring-1 focus:ring-rose-500"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        onClick={handleApprove}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-xs active:translate-y-0.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Authorize &amp; Deploy to Production</span>
                      </button>

                      <button
                        onClick={handleReject}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded transition-colors active:translate-y-0.5"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>{showOverrideInput ? 'Confirm Re-evaluation' : 'Request Re-evaluation'}</span>
                      </button>

                      <span className="text-[11px] text-slate-400 font-mono ml-auto">
                        Audit-trail hash: 0x8F9B...31E
                      </span>
                    </div>
                  </div>
                )}

                {pipelineState === 'approved' && (
                  <div className="pt-2 text-xs text-emerald-800 flex items-center justify-between">
                    <span className="font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Deployment authorized by Operator. Migrated successfully with zero downtime.
                    </span>
                    <button
                      onClick={handleStartSimulation}
                      className="text-xs font-medium text-emerald-700 underline underline-offset-2"
                    >
                      Run again
                    </button>
                  </div>
                )}

                {pipelineState === 'rejected' && (
                  <div className="pt-2 text-xs text-rose-800 flex items-center justify-between">
                    <span className="font-semibold flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      Deployment halted by Operator. Agent context rolled back safely.
                    </span>
                    <button
                      onClick={handleStartSimulation}
                      className="text-xs font-medium text-rose-700 underline underline-offset-2"
                    >
                      Retry flow
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      )}

      {/* TAB CONTENT 2: ARCHITECTURAL SCHEMATIC */}
      {activeTab === 'architectural_schema' && (
        <div className="space-y-3">
          <div className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white p-2">
            <img
              src="/src/assets/images/ax_orchestration_diagram_1792675751167.jpg"
              alt="Multi-Agent System Architectural Schematic"
              className="w-full h-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-[#475569] font-mono">
            Figure 1.1: Multi-Agent Parallel Orchestration Pipeline. Shows Dispatcher, Validator Agent, Results Aggregator, and the Human-in-the-Loop verification gateway.
          </p>
        </div>
      )}

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
