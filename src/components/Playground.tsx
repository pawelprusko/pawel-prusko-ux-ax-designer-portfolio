import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Edit3,
  X
} from 'lucide-react';
import { RAG_SOURCES_DATA } from '../data/portfolioData';
import { RagSource } from '../types';

export const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latency_thinking' | 'hitl_gate' | 'rag_citations'>('latency_thinking');

  // TAB 1: Latency & Thinking State
  const [latencyMode, setLatencyMode] = useState<'fast' | 'deep_reasoning'>('deep_reasoning');
  const [streamSpeed] = useState<number>(25);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [revealedChars, setRevealedChars] = useState<number>(0);
  const [isThoughtExpanded, setIsThoughtExpanded] = useState<boolean>(true);

  const fullThoughtText = `1. Parsing directive constraint: "Verify GDPR compliance for EU customers in shard eu-west-03".
2. Inspecting column definitions for unmasked email, phone, and IP addresses.
3. Checking pseudonymization table mapping against cryptographic hash salts.
4. Risk assessment: 0 exposed plaintext columns identified. Ready for output synthesis.`;

  const fullOutputText = `Based on multi-layer static analysis across shard eu-west-03, all 42 user entities comply with GDPR Article 32 (Security of Processing). Pseudonymization hashes match SHA-256 invariants with zero unmasked PII leakage detected.`;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStreaming) {
      if (revealedChars < fullOutputText.length) {
        interval = setInterval(() => {
          setRevealedChars(prev => prev + 2);
        }, latencyMode === 'fast' ? 12 : streamSpeed);
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
  const [batchSize] = useState<number>(14200);
  const [rolloutPercentage, setRolloutPercentage] = useState<number>(15);
  const [gracePeriodHours, setGracePeriodHours] = useState<number>(4);
  const [isEditingParams, setIsEditingParams] = useState<boolean>(false);
  const [overrideReason, setOverrideReason] = useState<string>('');
  const [showOverridePrompt, setShowOverridePrompt] = useState<boolean>(false);

  // TAB 3: RAG Citations State
  const [activeCitationSource, setActiveCitationSource] = useState<RagSource | null>(null);

  return (
    <section id="playground" className="py-20 lg:py-24 border-b border-[#E4E4E7] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#52525B]">
            <span>AX MECHANICS PLAYGROUND</span>
            <span className="mx-2 text-[#E4E4E7]">/</span>
            <span>Live Patterns Sandbox</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
            Live AX Patterns Sandbox
          </h2>

          <p className="text-sm sm:text-base text-[#52525B] max-w-3xl leading-relaxed">
            Test and interact directly with core Agent Experience mechanics. These patterns demonstrate progressive disclosure, supervisory governance, and high-trust citation architecture in pure monochrome.
          </p>
        </div>

        {/* Sandbox Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E4E4E7] pb-4">
          <button
            onClick={() => setActiveTab('latency_thinking')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'latency_thinking'
                ? 'bg-[#090A0F] text-white font-semibold'
                : 'bg-[#FAFAFA] text-[#52525B] hover:text-[#090A0F] border border-[#E4E4E7]'
            }`}
          >
            01. Latency &amp; Thinking UX
          </button>

          <button
            onClick={() => setActiveTab('hitl_gate')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'hitl_gate'
                ? 'bg-[#090A0F] text-white font-semibold'
                : 'bg-[#FAFAFA] text-[#52525B] hover:text-[#090A0F] border border-[#E4E4E7]'
            }`}
          >
            02. HITL Approval Gate
          </button>

          <button
            onClick={() => setActiveTab('rag_citations')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'rag_citations'
                ? 'bg-[#090A0F] text-white font-semibold'
                : 'bg-[#FAFAFA] text-[#52525B] hover:text-[#090A0F] border border-[#E4E4E7]'
            }`}
          >
            03. Source Citation (RAG)
          </button>
        </div>

        {/* TAB 1: LATENCY & THINKING */}
        {activeTab === 'latency_thinking' && (
          <div className="border border-[#E4E4E7] rounded-lg bg-[#FAFAFA] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#090A0F] font-mono uppercase">
                  Progressive Disclosure &amp; Chain-of-Thought Streamer
                </h3>
                <p className="text-xs text-[#52525B] mt-0.5">
                  Demonstrates how intelligent interfaces maintain operator attention during high-latency reasoning passes.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white p-1 rounded border border-[#E4E4E7] text-xs font-mono">
                  <button
                    onClick={() => setLatencyMode('fast')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      latencyMode === 'fast' ? 'bg-[#090A0F] text-white' : 'text-[#52525B]'
                    }`}
                  >
                    Instant (0.2s)
                  </button>
                  <button
                    onClick={() => setLatencyMode('deep_reasoning')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      latencyMode === 'deep_reasoning' ? 'bg-[#090A0F] text-white' : 'text-[#52525B]'
                    }`}
                  >
                    Deep (2.5s)
                  </button>
                </div>

                <button
                  onClick={handleStartStream}
                  disabled={isStreaming}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#090A0F] rounded hover:bg-[#27272A] disabled:opacity-40 transition-colors"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Simulate Stream</span>
                </button>
              </div>
            </div>

            {/* Container */}
            <div className="bg-white border border-[#E4E4E7] rounded p-5 space-y-4">
              
              {/* Accordion */}
              <div className="border border-[#E4E4E7] rounded bg-[#FAFAFA] overflow-hidden">
                <button
                  onClick={() => setIsThoughtExpanded(!isThoughtExpanded)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono font-semibold text-[#090A0F] hover:bg-[#F4F4F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
                    <span>Reasoning Process (4 cognitive hops)</span>
                  </div>
                  {isThoughtExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isThoughtExpanded && (
                  <div className="px-4 py-3 border-t border-[#E4E4E7] bg-white font-mono text-xs text-[#52525B] whitespace-pre-wrap leading-relaxed">
                    {fullThoughtText}
                  </div>
                )}
              </div>

              {/* Streaming Output */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#52525B] font-mono">
                  <span>Synthesized Response</span>
                  <span>{revealedChars}/{fullOutputText.length} chars</span>
                </div>

                <div className="min-h-20 p-4 rounded bg-[#FAFAFA] border border-[#E4E4E7] text-xs sm:text-sm text-[#090A0F] font-mono leading-relaxed">
                  {revealedChars > 0 ? (
                    <span>
                      {fullOutputText.slice(0, revealedChars)}
                      {isStreaming && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#090A0F] ml-1 translate-y-0.5 animate-pulse"></span>
                      )}
                    </span>
                  ) : (
                    <span className="text-[#52525B] italic font-sans">
                      Click "Simulate Stream" above to observe the progressive token reveal.
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: HITL GATE */}
        {activeTab === 'hitl_gate' && (
          <div className="border border-[#E4E4E7] rounded-lg bg-[#FAFAFA] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#090A0F] font-mono uppercase">
                  HITL Action Card with In-Line Parameter Modification
                </h3>
                <p className="text-xs text-[#52525B] mt-0.5">
                  Simulates granular supervisory control where humans can modify constraints before execution.
                </p>
              </div>

              <button
                onClick={() => {
                  setHitlActionState('pending');
                  setIsEditingParams(false);
                  setShowOverridePrompt(false);
                }}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono text-[#52525B] bg-white border border-[#E4E4E7] rounded hover:text-[#090A0F]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Gate</span>
              </button>
            </div>

            {/* HITL Card Container */}
            <div className="bg-white border border-[#090A0F] rounded p-6 space-y-5">
              
              <div className="flex flex-wrap items-start justify-between gap-4 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 border border-[#090A0F] rounded text-[11px] font-bold text-[#090A0F]">
                      BLAST RADIUS: HIGH
                    </span>
                    <span className="text-[#52525B]">Proposal #PRP-902</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#090A0F] font-sans">
                    Automated Webhook Re-Routing &amp; Key Deprecation
                  </h4>
                  <p className="text-xs text-[#52525B] font-sans">
                    Agent proposes decommissioning legacy TLS 1.0 cipher suites and moving traffic to v2 endpoint.
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[#52525B]">Target Accounts:</span>
                  <p className="font-bold text-base text-[#090A0F] tabular-nums">{batchSize.toLocaleString()}</p>
                </div>
              </div>

              {/* In-Line Parameters Grid */}
              <div className="p-4 rounded bg-[#FAFAFA] border border-[#E4E4E7] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#090A0F] uppercase">
                    Execution Constraints:
                  </span>
                  <button
                    onClick={() => setIsEditingParams(!isEditingParams)}
                    className="inline-flex items-center gap-1 text-[#090A0F] underline underline-offset-4"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{isEditingParams ? 'Lock Parameters' : 'Modify Parameters'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#52525B] block">Initial Canary Rollout:</label>
                    {isEditingParams ? (
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={rolloutPercentage}
                        onChange={(e) => setRolloutPercentage(Number(e.target.value))}
                        className="w-full p-1 border border-[#090A0F] rounded font-mono text-xs bg-white"
                      />
                    ) : (
                      <span className="font-bold text-[#090A0F]">{rolloutPercentage}% of traffic</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#52525B] block">Grace Period:</label>
                    {isEditingParams ? (
                      <input
                        type="number"
                        min="1"
                        max="48"
                        value={gracePeriodHours}
                        onChange={(e) => setGracePeriodHours(Number(e.target.value))}
                        className="w-full p-1 border border-[#090A0F] rounded font-mono text-xs bg-white"
                      />
                    ) : (
                      <span className="font-bold text-[#090A0F]">{gracePeriodHours} hours</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#52525B] block">Rollback Threshold:</label>
                    <span className="font-bold text-[#090A0F]">&gt;0.05% Error Rate</span>
                  </div>
                </div>
              </div>

              {showOverridePrompt && (
                <div className="space-y-1 bg-[#FAFAFA] border border-[#090A0F] p-3 rounded font-mono text-xs">
                  <label className="font-semibold text-[#090A0F] block">
                    Veto / Rejection Reason (Audit Requirement):
                  </label>
                  <input
                    type="text"
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    placeholder="e.g. Black Friday freeze window active until Monday 00:00 UTC."
                    className="w-full p-1.5 text-xs border border-[#E4E4E7] rounded font-mono bg-white text-[#090A0F]"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E4E7]">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setHitlActionState(isEditingParams ? 'modified' : 'approved')}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#090A0F] hover:bg-[#27272A] rounded transition-colors"
                  >
                    {isEditingParams ? 'Approve with Modified Parameters' : 'Approve Proposal'}
                  </button>

                  <button
                    onClick={() => {
                      if (!showOverridePrompt) {
                        setShowOverridePrompt(true);
                        return;
                      }
                      setHitlActionState('overridden');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#090A0F] bg-white border border-[#E4E4E7] hover:border-[#090A0F] rounded transition-colors"
                  >
                    {showOverridePrompt ? 'Confirm Veto' : 'Veto / Override Agent'}
                  </button>
                </div>

                <span className="text-[11px] font-mono text-[#52525B]">
                  STATUS: <strong className="text-[#090A0F]">{hitlActionState.toUpperCase()}</strong>
                </span>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: SOURCE CITATION */}
        {activeTab === 'rag_citations' && (
          <div className="border border-[#E4E4E7] rounded-lg bg-[#FAFAFA] p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#090A0F] font-mono uppercase">
                  Verifiable RAG Citation Footnotes &amp; Source Inspection Pane
                </h3>
                <p className="text-xs text-[#52525B] mt-0.5">
                  Click any numbered footnote tag [1], [2], [3] in the synthesized response to inspect the exact ground-truth database record.
                </p>
              </div>

              <span className="text-xs font-mono text-[#090A0F] border border-[#090A0F] px-2 py-0.5 rounded">
                ✓ 3 Sources Grounded
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: AI Synthesis Card */}
              <div className="lg:col-span-7 bg-white border border-[#E4E4E7] rounded p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7] text-xs font-mono">
                  <span className="font-bold text-[#090A0F]">AI Synthesis Output</span>
                  <span className="text-[#52525B]">Strict Grounding Pass</span>
                </div>

                <div className="text-xs sm:text-sm text-[#52525B] space-y-3 leading-relaxed">
                  <p>
                    Enterprise quarterly billing reconciliations confirm that overall annualized recurring revenue (ARR) reached $18.42M across all operational territories{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-101'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-[#090A0F] border border-[#090A0F] rounded px-1.5 py-0.5 hover:bg-[#090A0F] hover:text-white transition-colors"
                    >
                      [1: Billing SQL]
                    </button>
                    .
                  </p>

                  <p>
                    Furthermore, qualitative customer exit research shows a 3.4% reduction in account churn following the deployment of autonomous workflow orchestration in EMEA{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-102'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-[#090A0F] border border-[#090A0F] rounded px-1.5 py-0.5 hover:bg-[#090A0F] hover:text-white transition-colors"
                    >
                      [2: Churn Doc]
                    </button>
                    , meeting the strict SLA compliance invariant for sub-second P99 decision loops{' '}
                    <button
                      onClick={() => setActiveCitationSource(RAG_SOURCES_DATA['src-103'])}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-[#090A0F] border border-[#090A0F] rounded px-1.5 py-0.5 hover:bg-[#090A0F] hover:text-white transition-colors"
                    >
                      [3: SLA Vector]
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Right Column: Source Inspection Card */}
              <div className="lg:col-span-5 bg-white border border-[#E4E4E7] rounded p-5 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7] text-xs font-mono">
                  <span className="font-bold text-[#090A0F]">Ground-Truth Inspection Pane</span>
                  <span className="text-[#52525B]">
                    {activeCitationSource ? 'Source Loaded' : 'Select Citation'}
                  </span>
                </div>

                {activeCitationSource ? (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#090A0F]">{activeCitationSource.title}</h4>
                      <p className="text-[11px] text-[#52525B]">{activeCitationSource.sourceLocation}</p>
                    </div>

                    <div className="flex items-center justify-between bg-[#FAFAFA] p-2 rounded border border-[#E4E4E7]">
                      <span>Match: <strong className="text-[#090A0F]">{(activeCitationSource.similarityScore * 100).toFixed(1)}%</strong></span>
                      <span className="text-[#52525B]">{activeCitationSource.sourceType}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-[#52525B] uppercase">Underlying Record:</span>
                      <pre className="p-3 bg-[#090A0F] text-[#FAFAFA] rounded text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                        {activeCitationSource.rawExcerpt}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-xs text-[#52525B] font-mono">
                    Click any citation badge [1], [2], [3] in the left panel to load its ground-truth source.
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
