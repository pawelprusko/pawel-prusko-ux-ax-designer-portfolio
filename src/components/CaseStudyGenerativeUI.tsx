import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Database,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES, GENERATIVE_WIDGET_PRESETS, RAG_SOURCES_DATA } from '../data/portfolioData';
import { GenerativeWidgetData, RagSource } from '../types';

export const CaseStudyGenerativeUI: React.FC = () => {
  const caseData = CASE_STUDIES[1];

  // Generator State
  const [selectedPreset, setSelectedPreset] = useState<string>('q3-analysis');
  const [customInput, setCustomInput] = useState<string>('');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [synthesisStage, setSynthesisStage] = useState<'idle' | 'parsing_intent' | 'vector_grounding' | 'ready'>('ready');
  const [currentWidget, setCurrentWidget] = useState<GenerativeWidgetData>(GENERATIVE_WIDGET_PRESETS['q3-analysis']);
  const [selectedSource, setSelectedSource] = useState<RagSource | null>(null);

  const handleTriggerPreset = (presetKey: string) => {
    setSelectedPreset(presetKey);
    setIsSynthesizing(true);
    setSynthesisStage('parsing_intent');
    setSelectedSource(null);

    setTimeout(() => {
      setSynthesisStage('vector_grounding');
      setTimeout(() => {
        setCurrentWidget(GENERATIVE_WIDGET_PRESETS[presetKey]);
        setSynthesisStage('ready');
        setIsSynthesizing(false);
      }, 300);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    
    setIsSynthesizing(true);
    setSynthesisStage('parsing_intent');
    setSelectedSource(null);

    setTimeout(() => {
      setSynthesisStage('vector_grounding');
      setTimeout(() => {
        setCurrentWidget({
          query: customInput,
          headline: `Ad-Hoc View: ${customInput.slice(0, 32)}...`,
          summary: `Dynamically compiled analytical component synthesizing enterprise telemetry. Vector retrieval identified 2 grounded invariant documents with verified accuracy.`,
          citations: [
            { index: 1, sourceId: 'src-101', label: 'Financial Ledger' },
            { index: 2, sourceId: 'src-103', label: 'Compliance Index' }
          ],
          primaryMetric: { value: '99.8%', label: 'Vector Grounding', change: 'Zero hallucination', positive: true },
          secondaryMetric: { value: '<680ms', label: 'Synthesis Latency', change: 'Sub-second SLA', positive: true },
          chartData: [
            { label: 'Segment Alpha', primaryVal: 7.2, secondaryVal: 4.1 },
            { label: 'Segment Beta', primaryVal: 8.4, secondaryVal: 5.8 },
            { label: 'Segment Gamma', primaryVal: 6.9, secondaryVal: 3.9 }
          ]
        });
        setSynthesisStage('ready');
        setIsSynthesizing(false);
      }, 350);
    }, 300);
  };

  const openSourceModal = (sourceId: string) => {
    const src = RAG_SOURCES_DATA[sourceId];
    if (src) setSelectedSource(src);
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
        
        {/* Prompt Selector Bar */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-[#090A0F] font-semibold uppercase">
              04. Architectural Solution &amp; Live Simulator
            </span>
            <span className="text-[#52525B]">WCAG AA / Design Token Compliant</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleTriggerPreset('q3-analysis')}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                selectedPreset === 'q3-analysis'
                  ? 'bg-[#090A0F] text-white border-[#090A0F]'
                  : 'bg-white text-[#52525B] border-[#E4E4E7] hover:text-[#090A0F]'
              }`}
            >
              "Generate Q3 Analysis"
            </button>
            <button
              onClick={() => handleTriggerPreset('token-efficiency')}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                selectedPreset === 'token-efficiency'
                  ? 'bg-[#090A0F] text-white border-[#090A0F]'
                  : 'bg-white text-[#52525B] border-[#E4E4E7] hover:text-[#090A0F]'
              }`}
            >
              "Compare token cost vs latency"
            </button>
            <button
              onClick={() => handleTriggerPreset('churn-region')}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                selectedPreset === 'churn-region'
                  ? 'bg-[#090A0F] text-white border-[#090A0F]'
                  : 'bg-white text-[#52525B] border-[#E4E4E7] hover:text-[#090A0F]'
              }`}
            >
              "Show regional churn risk"
            </button>
          </div>

          {/* Custom Input */}
          <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-[#52525B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Or type prompt: e.g. 'Synthesize executive billing breakdown with confidence intervals'..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#E4E4E7] rounded focus:outline-hidden focus:border-[#090A0F] font-mono text-[#090A0F]"
              />
            </div>
            <button
              type="submit"
              disabled={isSynthesizing || !customInput.trim()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#090A0F] rounded hover:bg-[#27272A] disabled:opacity-40 transition-colors whitespace-nowrap"
            >
              Synthesize UI
            </button>
          </form>
        </div>

        {/* Dynamic Canvas Container */}
        <div className="border border-[#E4E4E7] rounded-lg bg-white p-6 relative overflow-hidden">
          
          {/* Header Status */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4E4E7] text-xs font-mono text-[#52525B]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]"></span>
              <span className="font-semibold text-[#090A0F]">Generative Component Engine</span>
            </div>
            
            <div>
              {synthesisStage === 'parsing_intent' && <span>Parsing Intent Tokens...</span>}
              {synthesisStage === 'vector_grounding' && <span>Retrieving RAG Citations...</span>}
              {synthesisStage === 'ready' && <span className="text-[#090A0F]">✓ Synthesized in 340ms</span>}
            </div>
          </div>

          {/* Component Body */}
          <div className={`space-y-6 transition-opacity ${isSynthesizing ? 'opacity-30' : 'opacity-100'}`}>
            
            {/* Narrative Card */}
            <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded p-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-bold text-[#090A0F]">
                  {currentWidget.headline}
                </h4>
                <span className="text-xs font-mono text-[#52525B]">
                  Grounding: 100% Verified
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                {currentWidget.summary}{' '}
                {currentWidget.citations.map((c) => (
                  <button
                    key={c.index}
                    onClick={() => openSourceModal(c.sourceId)}
                    className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-[#090A0F] bg-white border border-[#090A0F] rounded px-1.5 py-0.5 mx-0.5 hover:bg-[#090A0F] hover:text-white transition-colors"
                    title={`Click to view verified source proof: ${c.label}`}
                  >
                    [{c.index}]
                  </button>
                ))}
              </p>

              <p className="text-[11px] text-[#52525B] font-mono pt-1">
                * Click footnote citation [1], [2] to inspect raw database record.
              </p>
            </div>

            {/* Metrics + Chart Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              
              {/* Metrics */}
              <div className="md:col-span-4 space-y-4">
                <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded p-4 space-y-1">
                  <span className="text-xs text-[#52525B] font-mono">{currentWidget.primaryMetric.label}</span>
                  <p className="text-2xl font-bold font-mono text-[#090A0F] tabular-nums">
                    {currentWidget.primaryMetric.value}
                  </p>
                  <span className="text-xs font-mono text-[#090A0F]">
                    {currentWidget.primaryMetric.change}
                  </span>
                </div>

                <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded p-4 space-y-1">
                  <span className="text-xs text-[#52525B] font-mono">{currentWidget.secondaryMetric.label}</span>
                  <p className="text-2xl font-bold font-mono text-[#090A0F] tabular-nums">
                    {currentWidget.secondaryMetric.value}
                  </p>
                  <span className="text-xs font-mono text-[#090A0F]">
                    {currentWidget.secondaryMetric.change}
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="md:col-span-8 bg-[#FAFAFA] border border-[#E4E4E7] rounded p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-[#090A0F]">Synthesized Trajectory</span>
                  <span className="text-[#52525B]">Relative Index</span>
                </div>

                <div className="space-y-3 pt-1">
                  {currentWidget.chartData.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#090A0F]">{item.label}</span>
                        <span className="text-[#52525B] tabular-nums">{item.primaryVal}x</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#E4E4E7] rounded-xs overflow-hidden">
                        <div 
                          className="bg-[#090A0F] h-full transition-all duration-300"
                          style={{ width: `${item.primaryVal * 11}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#E4E4E7] flex justify-between text-[11px] font-mono text-[#52525B]">
                  <span>Component: GenerativeUI.BarGraph</span>
                  <span>Tokens: 384</span>
                </div>
              </div>

            </div>

          </div>

          {/* RAG SOURCE DRAWER / MODAL OVERLAY */}
          {selectedSource && (
            <div className="absolute inset-0 z-30 bg-[#090A0F]/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border border-[#E4E4E7] rounded-lg max-w-xl w-full p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#090A0F] font-mono uppercase">{selectedSource.title}</h4>
                    <p className="text-[11px] text-[#52525B] font-mono">{selectedSource.sourceLocation}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSource(null)}
                    className="p-1 rounded text-[#52525B] hover:text-[#090A0F]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#52525B] bg-[#FAFAFA] p-2 rounded border border-[#E4E4E7]">
                    <span>Similarity: <strong className="text-[#090A0F]">{(selectedSource.similarityScore * 100).toFixed(1)}%</strong></span>
                    <span>Date: {selectedSource.timestamp}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold text-[#52525B] uppercase">Raw Grounding Excerpt:</span>
                    <pre className="p-3 bg-[#090A0F] text-[#FAFAFA] rounded text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                      {selectedSource.rawExcerpt}
                    </pre>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-mono">
                  <span className="text-[#090A0F]">✓ Verified against primary source ledger</span>
                  <button
                    onClick={() => setSelectedSource(null)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#090A0F] bg-[#FAFAFA] border border-[#E4E4E7] hover:border-[#090A0F] rounded"
                  >
                    Close Source Proof
                  </button>
                </div>
              </div>
            </div>
          )}

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
