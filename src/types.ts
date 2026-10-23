export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  impactMetric: string;
  impactDescription: string;
  overview: string;
  discoveryRisk: string;
  interactionSpec: string;
  validationPrototyping: string;
  measurableImpact: string;
  metrics: { label: string; value: string }[];
  problem?: string;
  solution?: string;
  keyInnovations?: string[];
}

export interface AgentTaskNode {
  id: string;
  agentName: string;
  agentRole: string;
  status: 'pending' | 'active' | 'completed' | 'paused';
  thoughtSnippet: string;
  confidence: number;
  tokensProcessed: number;
  executionMs: number;
}

export interface RagSource {
  id: string;
  title: string;
  sourceType: 'SQL Query' | 'Document PDF' | 'Vector Embedding' | 'Audit Log';
  sourceLocation: string;
  similarityScore: number;
  timestamp: string;
  rawExcerpt: string;
}

export interface GenerativeWidgetData {
  query: string;
  headline: string;
  summary: string;
  citations: { index: number; sourceId: string; label: string }[];
  chartData: { label: string; primaryVal: number; secondaryVal: number }[];
  primaryMetric: { value: string; label: string; change: string; positive: boolean };
  secondaryMetric: { value: string; label: string; change: string; positive: boolean };
}
