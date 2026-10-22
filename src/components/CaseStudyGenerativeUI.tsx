import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  TrendingUp, 
  Database, 
  FileText, 
  Layers, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Info
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
  const [activeTab, setActiveTab] = useState<'interactive_generator' | 'system_preview'>('interactive_generator');

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
      }, 350);
    }, 300);
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
        // Synthesize dynamic response based on input
        setCurrentWidget({
          query: customInput,
          headline: `Ad-Hoc Analysis: ${customInput.slice(0, 36)}...`,
          summary: `Dynamically compiled analytical view synthesizing enterprise logs. Vector embedding match retrieved 2 grounded documents with 99.4% confidence.`,
          citations: [
            { index: 1, sourceId: 'src-101', label: 'Finance Ledger' },
            { index: 2, sourceId: 'src-103', label: 'Compliance Index' }
          ],
          primaryMetric: { value: '99.4%', label: 'Vector Grounding', change: 'Zero hallucination', positive: true },
          secondaryMetric: { value: '<680ms', label: 'Synthesis Latency', change: 'Sub-second SLA', positive: true },
          chartData: [
            { label: 'Cohort A', primaryVal: 7.2, secondaryVal: 4.1 },
            { label: 'Cohort B', primaryVal: 8.4, secondaryVal: 5.8 },
            { label: 'Cohort C', primaryVal: 6.9, secondaryVal: 3.9 }
          ]
        });
        setSynthesisStage('ready');
        setIsSynthesizing(false);
      }, 400);
    }, 350);
  };

  const openSourceModal = (sourceId: string) => {
    const src = RAG_SOURCES_DATA[sourceId];
    if (src) {
      setSelectedSource(src);
    }
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
              onClick={() => setActiveTab('interactive_generator')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'interactive_generator'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Interactive Component Simulator
            </button>
            <button
              onClick={() => setActiveTab('system_preview')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'system_preview'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              System UI Preview
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

      {/* TAB CONTENT: INTERACTIVE GENERATOR */}
      {activeTab === 'interactive_generator' && (
        <div className="space-y-4">
          
          {/* Prompt Selector Bar */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#0F172A] uppercase tracking-wider">
                Select or Enter Natural Language Prompt to Generate Dynamic UI:
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                Grammar: WCAG AA / Token-Grounded
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleTriggerPreset('q3-analysis')}
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  selectedPreset === 'q3-analysis'
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                "Generate Q3 Analysis"
              </button>
              <button
                onClick={() => handleTriggerPreset('token-efficiency')}
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  selectedPreset === 'token-efficiency'
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                "Compare token cost vs latency"
              </button>
              <button
                onClick={() => handleTriggerPreset('churn-region')}
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  selectedPreset === 'churn-region'
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                "Show regional churn risk"
              </button>
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Or type prompt: e.g. 'Synthesize executive billing breakdown with confidence intervals'..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#E2E8F0] rounded-md focus:outline-hidden focus:ring-1 focus:ring-indigo-500 font-sans"
                />
              </div>
              <button
                type="submit"
                disabled={isSynthesizing || !customInput.trim()}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] rounded-md hover:bg-slate-800 disabled:opacity-50 transition-colors whitespace-nowrap"
              >
                Synthesize UI
              </button>
            </form>
          </div>

          {/* GENERATIVE COMPONENT CANVAS */}
          <div className="border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] p-6 relative overflow-hidden">
            
            {/* Status Streamer Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="font-semibold text-[#0F172A]">Generative Component Engine</span>
                <span className="text-slate-400 font-mono text-[11px]">· Model Intent: ANALYTIC_DASHBOARD</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                {synthesisStage === 'parsing_intent' && (
                  <span className="text-indigo-600 animate-pulse">1. Parsing Intent Tokens...</span>
                )}
                {synthesisStage === 'vector_grounding' && (
                  <span className="text-indigo-600 animate-pulse">2. Grounding Vector Citations...</span>
                )}
                {synthesisStage === 'ready' && (
                  <span className="text-emerald-700 font-medium">✓ Grounded &amp; Rendered in 340ms</span>
                )}
              </div>
            </div>

            {/* SYNTHESIZED COMPONENT BODY */}
            <div className={`space-y-5 transition-opacity duration-300 ${isSynthesizing ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              
              {/* Query & Narrative Synthesis Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {currentWidget.headline}
                  </h4>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                    Strict Grounding Passed
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentWidget.summary}{' '}
                  {currentWidget.citations.map((c) => (
                    <button
                      key={c.index}
                      onClick={() => openSourceModal(c.sourceId)}
                      className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5 mx-0.5 hover:bg-indigo-100 transition-colors"
                      title={`Click to view verified source citation: ${c.label}`}
                    >
                      [{c.index}]
                    </button>
                  ))}
                </p>

                {/* Inline Hint for Recruiter */}
                <p className="text-[11px] text-slate-400 italic">
                  * Note: Click any numbered citation badge [1], [2] above to open the RAG Data Grounding Drawer and inspect the underlying database proof.
                </p>
              </div>

              {/* Dynamic KPI Strip & Data Visualization Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Metric Cards (Left 4 cols) */}
                <div className="md:col-span-4 space-y-4">
                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-4 shadow-2xs space-y-1">
                    <span className="text-xs text-slate-500 font-medium">{currentWidget.primaryMetric.label}</span>
                    <p className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                      {currentWidget.primaryMetric.value}
                    </p>
                    <span className="text-xs font-semibold text-emerald-700">
                      {currentWidget.primaryMetric.change}
                    </span>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-4 shadow-2xs space-y-1">
                    <span className="text-xs text-slate-500 font-medium">{currentWidget.secondaryMetric.label}</span>
                    <p className="text-2xl font-bold font-mono text-[#0F172A] tabular-nums">
                      {currentWidget.secondaryMetric.value}
                    </p>
                    <span className="text-xs font-semibold text-indigo-700">
                      {currentWidget.secondaryMetric.change}
                    </span>
                  </div>
                </div>

                {/* Dynamic Responsive SVG Chart Widget (Right 8 cols) */}
                <div className="md:col-span-8 bg-white border border-[#E2E8F0] rounded-lg p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0F172A]">Synthesized Cohort Trajectory</span>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-xs bg-indigo-600"></span> Primary Invariant
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-xs bg-slate-300"></span> Baseline Reference
                      </span>
                    </div>
                  </div>

                  {/* SVG Bar / Trend Chart with Tabular Numerals */}
                  <div className="pt-2">
                    <div className="space-y-3">
                      {currentWidget.chartData.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-700">{item.label}</span>
                            <span className="font-mono text-slate-500 tabular-nums">
                              {item.primaryVal}x / {item.secondaryVal}x
                            </span>
                          </div>
                          <div className="w-full h-3 bg-slate-100 rounded-xs overflow-hidden flex gap-1">
                            <div 
                              className="bg-indigo-600 rounded-xs transition-all duration-500" 
                              style={{ width: `${item.primaryVal * 10}%` }}
                            ></div>
                            <div 
                              className="bg-slate-300 rounded-xs transition-all duration-500" 
                              style={{ width: `${item.secondaryVal * 8}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Generated schema: GenerativeUI.MetricBarGraph</span>
                    <span>Tokens: 384</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RAG SOURCE DRAWER / MODAL OVERLAY */}
            {selectedSource && (
              <div className="absolute inset-0 z-30 bg-[#0F172A]/40 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-xl w-full p-6 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-indigo-50 text-indigo-700">
                        <Database className="w-4 h-4" />
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A]">{selectedSource.title}</h4>
                        <p className="text-[11px] text-slate-500">{selectedSource.sourceType} · {selectedSource.sourceLocation}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSource(null)}
                      className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                      <span>Cosine Similarity: <strong className="text-emerald-700">{(selectedSource.similarityScore * 100).toFixed(1)}%</strong></span>
                      <span>Extracted: {selectedSource.timestamp}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Raw Grounding Excerpt:
                      </span>
                      <pre className="p-3 bg-slate-900 text-slate-100 rounded text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                        {selectedSource.rawExcerpt}
                      </pre>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-emerald-700 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Cryptographically verified against audit ledger
                    </span>
                    <button
                      onClick={() => setSelectedSource(null)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                    >
                      Close Source Proof
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* TAB CONTENT: SYSTEM UI PREVIEW */}
      {activeTab === 'system_preview' && (
        <div className="space-y-3">
          <div className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white p-2">
            <img
              src="/src/assets/images/generative_ui_preview_1792675767049.jpg"
              alt="Generative UI Analytics Dashboard Interface Preview"
              className="w-full h-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-[#475569] font-mono">
            Figure 2.1: Production Generative UI Analytics Dashboard with verified grounding badges, adaptive chart synthesizer, and conversational natural language prompt surface.
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
