import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Terminal, 
  Check, 
  X,
  Edit3
} from 'lucide-react';
import { RAG_SOURCES_DATA } from '../data/portfolioData';
import { RagSource } from '../types';

export const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latency_thinking' | 'hitl_gate' | 'rag_citations'>('latency_thinking');

  // TAB 1: Latency & Thinking State
  const [latencyMode, setLatencyMode] = useState<'fast' | 'deep_reasoning'>('deep_reasoning');
  const [streamSpeed, setStreamSpeed] = useState<number>(30); // ms per token
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [revealedChars, setRevealedChars] = useState<number>(0);
  const [isThoughtExpanded, setIsThoughtExpanded] = useState<boolean>(true);

  const fullThoughtText = `1. Analyzing user constraint: "Verify GDPR compliance for EU customers in database shard eu-west-03".
2. Scanning schema for unmasked email, phone, and IP columns.
3. Checking pseudonymization table mapping against cryptographic hash salts.
4. Synthesizing risk assessment: 0 exposed plaintext columns identified. Ready for sign-off.`;

  const fullOutputText = `Based on multi-layer static analysis across shard eu-west-03, all 42 user entities comply with GDPR Article 32 (Security of Processing). Pseudonymization hashes match SHA-256 invariants with zero unmasked PII leakage detected.`;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStreaming) {
      if (revealedChars < fullOutputText.length) {
        interval = setInterval(() => {
          setRevealedChars(prev => prev + 2);
        }, latencyMode === 'fast' ? 15 : streamSpeed);
      } else {
        setIsStreaming(false);
      }
    }
    return () => clearInterval(interval);
  }, [isStreaming, revealedChars, latencyMode, streamSpeed, fullOutputText.length]);

  const handleStartStream = () => {
    setRevealedChars(0);
    setIsStreaming(true);
  };

  // TAB 2: HITL Gate State
  const [hitlActionState, setHitlActionState] = useState<'pending' | 'approved' | 'modified' | 'overridden'>('pending');
  const [batchSize, setBatchSize] = useState<number>(14200);
  const [rolloutPercentage, setRolloutPercentage] = useState<number>(15);
  const [gracePeriodHours, setGracePeriodHours] = useState<number>(4);
  const [isEditingParams, setIsEditingParams] = useState<boolean>(false);
  const [overrideReason, setOverrideReason] = useState<string>('');
  const [showOverridePrompt, setShowOverridePrompt] = useState<boolean>(false);

  // TAB 3: RAG Citations State
  const [activeCitationSource, setActiveCitationSource] = useState<RagSource | null>(null);

  return (
    <section id="playground" className="py-16 border-b border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-700">
            <span>AX MECHANICS PLAYGROUND</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-600 font-sans">Live Interaction Sandbox</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
            Live AX Patterns Sandbox
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-3xl leading-relaxed">
            Test and interact directly with core Agent Experience mechanics. These interactive patterns simulate progressive disclosure, algorithmic governance, and high-trust citation architecture.
          </p>
        </div>

        {/* Sandbox Navigation Tabs (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] pb-3">
          <button
            onClick={() => setActiveTab('latency_thinking')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'latency_thinking'
                ? 'bg-[#0F172A] text-white shadow-xs'
                : 'bg-[#F8FAFC] text-[#475569] hover:bg-slate-100 border border-[#E2E8F0]'
            }`}
          >
            Pattern 1: Latency &amp; Thinking UX
          </button>

          <button
            onClick={() => setActiveTab('hitl_gate')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'hitl_gate'
                ? 'bg-[#0F172A] text-white shadow-xs'
                : 'bg-[#F8FAFC] text-[#475569] hover:bg-slate-100 border border-[#E2E8F0]'
            }`}
          >
            Pattern 2: HITL Approval Gate
          </button>

          <button
            onClick={() => setActiveTab('rag_citations')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'rag_citations'
                ? 'bg-[#0F172A] text-white shadow-xs'
                : 'bg-[#F8FAFC] text-[#475569] hover:bg-slate-100 border border-[#E2E8F0]'
            }`}
          >
            Pattern 3: Source Citation (RAG)
          </button>
        </div>

        {/* TAB 1: LATENCY & THINKING UX */}
        {activeTab === 'latency_thinking' && (
          <div className="border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Progressive Disclosure &amp; Chain-of-Thought Streamer
                </h3>
                <p className="text-xs text-[#475569] mt-0.5">
                  Simulates how intelligent interfaces maintain user attention during high-latency cognitive model passes.
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white p-1 rounded border border-slate-200 text-xs">
                  <button
                    onClick={() => setLatencyMode('fast')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      latencyMode === 'fast' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    Instant (0.2s)
                  </button>
                  <button
                    onClick={() => setLatencyMode('deep_reasoning')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      latencyMode === 'deep_reasoning' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    Deep Reasoning (2.5s)
                  </button>
                </div>

                <button
                  onClick={handleStartStream}
                  disabled={isStreaming}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F172A] rounded hover:bg-slate-800 disabled:opacity-50 transition-colors"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Simulate Stream</span>
                </button>
              </div>
            </div>

            {/* Simulated AI Container */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-4">
              
              {/* Expandable Thinking Process Accordion */}
              <div className="border border-slate-200 rounded-md bg-slate-50/70 overflow-hidden">
                <button
                  onClick={() => setIsThoughtExpanded(!isThoughtExpanded)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-[#0F172A] hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                    <span>Reasoning Process (4 cognitive hops)</span>
                    <span className="text-[11px] text-slate-400 font-mono">· Model: Reasoning-AX-v1</span>
                  </div>
                  {isThoughtExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isThoughtExpanded && (
                  <div className="px-4 py-3 border-t border-slate-200 bg-white font-mono text-xs text-slate-600 whitespace-pre-wrap leading-relaxed">
                    {fullThoughtText}
                  </div>
                )}
              </div>

              {/* Streaming Content Display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Synthesized Answer</span>
                  <span>{revealedChars}/{fullOutputText.length} characters</span>
                </div>

                <div className="min-h-20 p-4 rounded-md bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                  {revealedChars > 0 ? (
                    <span>
                      {fullOutputText.slice(0, revealedChars)}
                      {isStreaming && (
                        <span className="inline-block w-1.5 h-4 bg-indigo-600 ml-1 translate-y-0.5 animate-pulse"></span>
                      )}
                    </span>
                  ) : (
                    <span className="text-slate-400 italic">
                      Click "Simulate Stream" above to observe the progressive token synthesis and thinking reveal.
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: HITL GATE */}
        {activeTab === 'hitl_gate' && (
          <div className="border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Human-in-the-Loop (HITL) Action Card with In-Line Parameter Modification
                </h3>
                <p className="text-xs text-[#475569] mt-0.5">
                  Simulates granular supervisory control where humans can modify, constrain, or veto agent proposals before execution.
                </p>
              </div>

              <button
                onClick={() => {
                  setHitlActionState('pending');
                  setIsEditingParams(false);
                  setShowOverridePrompt(false);
                }}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Gate</span>
              </button>
            </div>

            {/* HITL Card Container */}
            <div className="bg-white border-2 border-amber-300 rounded-lg p-6 space-y-5 shadow-xs">
              
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      Blast Radius: HIGH
                    </span>
                    <span className="text-xs font-mono text-slate-400">Proposal #PRP-902</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Automated Webhook Re-Routing &amp; API Key Deprecation
                  </h4>
                  <p className="text-xs text-slate-600">
                    Agent proposes decommissioning legacy TLS 1.0 cipher suites and moving traffic to v2 endpoint.
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-slate-500">Target Accounts:</span>
                  <p className="font-mono font-bold text-base text-[#0F172A] tabular-nums">{batchSize.toLocaleString()}</p>
                </div>
              </div>

              {/* In-Line Parameters Grid */}
              <div className="p-4 rounded-md bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
                    Execution Constraints (Click "Modify" to adjust parameters):
                  </span>
                  <button
                    onClick={() => setIsEditingParams(!isEditingParams)}
                    className="inline-flex items-center gap-1 text-xs text-indigo-700 font-medium hover:underline"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{isEditingParams ? 'Lock Parameters' : 'Modify Parameters'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-slate-500 block">Initial Canary Rollout:</label>
                    {isEditingParams ? (
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={rolloutPercentage}
                        onChange={(e) => setRolloutPercentage(Number(e.target.value))}
                        className="w-full p-1.5 border border-indigo-300 rounded font-mono text-xs"
                      />
                    ) : (
                      <span className="font-mono font-bold text-indigo-700">{rolloutPercentage}% of traffic</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-500 block">Customer Grace Period:</label>
                    {isEditingParams ? (
                      <input
                        type="number"
                        min="1"
                        max="48"
                        value={gracePeriodHours}
                        onChange={(e) => setGracePeriodHours(Number(e.target.value))}
                        className="w-full p-1.5 border border-indigo-300 rounded font-mono text-xs"
                      />
                    ) : (
                      <span className="font-mono font-bold text-indigo-700">{gracePeriodHours} hours</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-500 block">Rollback Trigger Threshold:</label>
                    <span className="font-mono font-bold text-slate-800">&gt;0.05% Error Rate</span>
                  </div>
                </div>
              </div>

              {/* Override prompt */}
              {showOverridePrompt && (
                <div className="space-y-1 bg-rose-50 border border-rose-200 p-3 rounded">
                  <label className="text-xs font-semibold text-rose-900 block">
                    Veto / Rejection Reason (Mandatory Audit Requirement):
                  </label>
                  <input
                    type="text"
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    placeholder="e.g. Black Friday freeze window active until Monday 00:00 UTC."
                    className="w-full p-1.5 text-xs border border-rose-300 rounded font-mono"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setHitlActionState(isEditingParams ? 'modified' : 'approved')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isEditingParams ? 'Approve with Modified Parameters' : 'Approve Proposal'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (!showOverridePrompt) {
                        setShowOverridePrompt(true);
                        return;
                      }
                      setHitlActionState('overridden');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{showOverridePrompt ? 'Confirm Veto' : 'Veto / Override Agent'}</span>
                  </button>
                </div>

                <span className="text-[11px] font-mono text-slate-400">
                  Status: <strong className="text-[#0F172A]">{hitlActionState.toUpperCase()}</strong>
                </span>
              </div>

              {/* Feedback Banner */}
              {hitlActionState !== 'pending' && (
                <div className={`p-3 rounded text-xs flex items-center justify-between ${
                  hitlActionState === 'approved' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : hitlActionState === 'modified'
                    ? 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  <span>
                    Action recorded: <strong>{hitlActionState.toUpperCase()}</strong>. Transaction committed with cryptographically signed supervisory approval.
                  </span>
                </div>
              )}

            </div>

          </div>
        )}

        {/* TAB 3: SOURCE CITATION (RAG) */}
        {activeTab === 'rag_citations' && (
          <div className="border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  Verifiable RAG Citation Footnotes &amp; Source Inspection Drawer
                </h3>
                <p className="text-xs text-[#475569] mt-0.5">
                  Click any numbered footnote tag [1], [2], [3] in the synthesized response to inspect the exact ground-truth database record and similarity score.
                </p>
              </div>

              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                ✓ 3 Sources Grounded
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: AI Synthesis Card */}
              <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0F172A]">AI Synthesis Output</span>
                  <span className="text-[11px] font-mono text-slate-400">Strict Retrieval Pass</span>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
                  <p>
                    Enterprise quarterly billing reconciliations confirm that overall annualized recurring revenue (ARR) reached $18.42M across all operational territories{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-101'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5 hover:bg-indigo-100"
                    >
                      [1: Billing SQL]
                    </button>
                    .
                  </p>

                  <p>
                    Furthermore, qualitative customer exit research shows a 3.4% reduction in account churn following the deployment of autonomous workflow orchestration in EMEA{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-102'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5 hover:bg-indigo-100"
                    >
                      [2: Churn Doc]
                    </button>
                    , meeting the strict SLA compliance invariant for sub-second P99 decision loops{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-103'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5 hover:bg-indigo-100"
                    >
                      [3: SLA Vector]
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Right Column: Source Inspection Card */}
              <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0F172A]">Ground-Truth Inspection Pane</span>
                  <span className="text-[11px] font-mono text-indigo-600">
                    {activeCitationSource ? 'Source Loaded' : 'Select Citation'}
                  </span>
                </div>

                {activeCitationSource ? (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-[#0F172A]">{activeCitationSource.title}</h4>
                      <p className="text-[11px] text-slate-500 font-mono">{activeCitationSource.sourceLocation}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono bg-slate-50 p-2 rounded border border-slate-200">
                      <span>Cosine Match: <strong className="text-emerald-700">{(activeCitationSource.similarityScore * 100).toFixed(1)}%</strong></span>
                      <span className="text-slate-400">{activeCitationSource.sourceType}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Underlying Record:</span>
                      <pre className="p-3 bg-slate-900 text-slate-100 rounded text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                        {activeCitationSource.rawExcerpt}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-2">
                    <Database className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="text-xs text-slate-500">
                      Click any citation badge [1], [2], [3] in the left panel to load its ground-truth source.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
