import { CaseStudy, RagSource, GenerativeWidgetData } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'multi-agent-orchestrator',
    number: '01',
    title: 'Autonomous Multi-Agent Platform',
    category: 'Multi-Agent Orchestration / HITL / Chain-of-Thought',
    impactMetric: 'Zero Context Drift',
    impactDescription: '100% auditability across 12 concurrent agent execution pipelines',
    overview: 'Architected the interaction logic for an orchestrated multi-agent system where specialized personas (Validator, Architect, Security Auditor) execute parallel enterprise tasks with zero context drift.',
    problem: 'When multiple autonomous agents communicate asynchronously, traditional UI patterns fail: users lose visibility into sub-agent states, hallucinated edge cases cascade silently, and opaque outputs breed automation distrust.',
    solution: 'Designed a hierarchical state streamer decomposing high-level user directives into structured agent contracts, featuring explicit visual handshakes, inspected reasoning steps, and mandatory HITL approval gates for high-blast-radius operations.',
    keyInnovations: [
      'Visualized Chain-of-Thought with progressive disclosure to avoid cognitive overload',
      'Context-lock checkpoints guaranteeing zero drift across parallel execution threads',
      'Configurable blast-radius triggers pausing execution for human sign-off before write actions',
      'Deterministic rollback UI restoring agents to the last verified safe state in 1 click'
    ],
    metrics: [
      { label: 'Context Drift', value: '0.0%' },
      { label: 'Audit Compliance', value: '100%' },
      { label: 'Resolution Speed', value: '4.2x' },
      { label: 'Operator Trust Score', value: '94.8%' }
    ]
  },
  {
    id: 'generative-ui-analytics',
    number: '02',
    title: 'Generative UI Analytics Engine',
    category: 'Generative UI / NLP Intent / RAG Data Grounding',
    impactMetric: 'Sub-Second Intent Resolution',
    impactDescription: 'Replaced 42 static dashboards with adaptive, on-the-fly generative components',
    overview: 'Replaced static enterprise dashboards with dynamic, on-the-fly UI components generated from natural language prompts, backed by strict data grounding and verifiable RAG citations.',
    problem: 'Enterprise users were drowning in rigid dashboards that required 6+ filter adjustments to extract simple cross-functional insights, while generic LLM chatbot responses lacked tabular rigor, visual structure, and audit trails.',
    solution: 'Pioneered an intent-to-component pipeline that pairs natural language understanding with a strict design token grammar. The system synthesizes interactive charts, cohort tables, and metric strips on demand, accompanied by inspectable source citations.',
    keyInnovations: [
      'Generative Component Grammar ensuring AI-composed widgets strictly adhere to WCAG AA and design system tokens',
      'Interactive source citations linking UI numbers directly to verified database queries and vector embeddings',
      'Dynamic intent disambiguation cards when user prompts contain multiple plausible interpretations',
      'Inline pivot controls allowing operators to slice generated charts without re-prompting'
    ],
    metrics: [
      { label: 'Time-to-Insight', value: '-78%' },
      { label: 'Data Grounding', value: '99.8%' },
      { label: 'Widget Latency', value: '<850ms' },
      { label: 'Ad-hoc Reports', value: '+310%' }
    ]
  },
  {
    id: 'enterprise-copilot-hitl',
    number: '03',
    title: 'Enterprise Co-Pilot & HITL Decision System',
    category: 'High-Stakes Domain / XAI / Risk Management',
    impactMetric: 'Automation Bias Mitigation',
    impactDescription: 'Granular control workflows protecting $40M+ in daily transaction volume',
    overview: 'Engineered Human-in-the-Loop approval workflows for high-risk financial processes, balancing automation throughput with human cognitive oversight.',
    problem: 'In high-stakes financial approvals, operators either suffered from automation complacency (rubber-stamping AI advice) or extreme skepticism (ignoring helpful machine insights), resulting in costly false negatives.',
    solution: 'Implemented an adaptive confidence-scoring UX model where high-confidence predictions (>95%) follow streamlined one-click verification, whereas low-confidence or high-variance cases trigger mandatory Explainable AI (XAI) feature attribution panels and structured override rationales.',
    keyInnovations: [
      'Adaptive confidence thresholds dynamically scaling friction based on transaction blast radius',
      'Explainable AI (XAI) feature attribution visualization illustrating positive and negative risk factors',
      'Forced cognitive verification challenges preventing mindless confirmation button clicks',
      'Cryptographically signed human audit trail for regulatory and compliance readiness'
    ],
    metrics: [
      { label: 'False Approvals', value: '-89%' },
      { label: 'Review Velocity', value: '+64%' },
      { label: 'Blast Radius Risk', value: 'Zero Breach' },
      { label: 'Regulatory Pass', value: '100%' }
    ]
  }
];

export const RAG_SOURCES_DATA: Record<string, RagSource> = {
  'src-101': {
    id: 'src-101',
    title: 'Enterprise Billing & Revenue Ledger Q3',
    sourceType: 'SQL Query',
    sourceLocation: 'warehouse.finance.fact_transactions_q3',
    similarityScore: 0.984,
    timestamp: '2026-10-18 14:22:04 UTC',
    rawExcerpt: `SELECT region, SUM(mrr_amount) AS revenue, COUNT(account_id) AS active_cohort
FROM fact_subscription_lifecycle
WHERE fiscal_quarter = '2026-Q3' AND transaction_status = 'SETTLED'
GROUP BY region ORDER BY revenue DESC;`
  },
  'src-102': {
    id: 'src-102',
    title: 'Customer Churn & Exit Interview Synthesis v4',
    sourceType: 'Document PDF',
    sourceLocation: 's3://enterprise-corpus/research/churn_q3_summary.pdf (Page 14)',
    similarityScore: 0.942,
    timestamp: '2026-10-19 09:15:33 UTC',
    rawExcerpt: `Quantitative cohort analysis indicates a 3.4% reduction in churn among accounts using the autonomous API orchestration layer, while standard manual workflow accounts experienced an 8.1% churn rate in the EMEA territory.`
  },
  'src-103': {
    id: 'src-103',
    title: 'Vector Knowledge Base: Service SLA Invariants',
    sourceType: 'Vector Embedding',
    sourceLocation: 'pinecone-cluster-prod-01 / namespace: enterprise-compliance-2026',
    similarityScore: 0.918,
    timestamp: '2026-10-21 18:40:11 UTC',
    rawExcerpt: `SLA Tier 1 requires sub-second P99 response for all autonomous decision nodes. Multi-agent reconciliation must conclude in under 1200ms before triggering the fallback escalation queue.`
  }
};

export const GENERATIVE_WIDGET_PRESETS: Record<string, GenerativeWidgetData> = {
  'q3-analysis': {
    query: 'Generate Q3 Performance & Cohort Retention Analysis',
    headline: 'Q3 Enterprise Expansion & Churn Velocity',
    summary: 'Cross-analyzing billing logs and telemetry shows net revenue retention increased to 118.4% driven by multi-agent feature adoption. EMEA churn dropped to 3.4% while overall gross margin expanded.',
    citations: [
      { index: 1, sourceId: 'src-101', label: 'Billing Ledger Q3' },
      { index: 2, sourceId: 'src-102', label: 'Churn Synthesis Doc' }
    ],
    primaryMetric: { value: '$18.42M', label: 'Q3 Realized ARR', change: '+24.6% QoQ', positive: true },
    secondaryMetric: { value: '3.4%', label: 'Net Churn Rate', change: '-4.7% vs Q2', positive: true },
    chartData: [
      { label: 'July', primaryVal: 5.4, secondaryVal: 4.8 },
      { label: 'August', primaryVal: 6.2, secondaryVal: 5.1 },
      { label: 'September', primaryVal: 6.8, secondaryVal: 5.4 },
      { label: 'October (P)', primaryVal: 7.3, secondaryVal: 5.7 }
    ]
  },
  'token-efficiency': {
    query: 'Compare API token cost vs cognitive throughput',
    headline: 'Agent Token Economics & Inference Efficiency',
    summary: 'Selective context compression and caching lowered average token consumption per workflow by 41.2% while reasoning accuracy remained above 99.1%.',
    citations: [
      { index: 1, sourceId: 'src-103', label: 'SLA Invariants Base' },
      { index: 2, sourceId: 'src-101', label: 'Billing Ledger Q3' }
    ],
    primaryMetric: { value: '412ms', label: 'Avg Inference P95', change: '-38% latency', positive: true },
    secondaryMetric: { value: '$0.0034', label: 'Cost Per Orchestration', change: '-41.2% cost', positive: true },
    chartData: [
      { label: 'Base LLM', primaryVal: 8.8, secondaryVal: 7.2 },
      { label: 'CoT Layer', primaryVal: 6.4, secondaryVal: 5.9 },
      { label: 'Compressed RAG', primaryVal: 4.2, secondaryVal: 3.8 },
      { label: 'Multi-Agent AX', primaryVal: 2.6, secondaryVal: 2.1 }
    ]
  },
  'churn-region': {
    query: 'Show regional churn risk by enterprise tier',
    headline: 'Regional Churn Mitigation & Account Risk Score',
    summary: 'High-touch accounts in North America exhibit 98.2% retention. In EMEA, human-in-the-loop escalation reduced high-risk flags by 62% in the last 30 days.',
    citations: [
      { index: 1, sourceId: 'src-102', label: 'Churn Synthesis Doc' }
    ],
    primaryMetric: { value: '98.2%', label: 'NA Account Retention', change: '+3.1% YoY', positive: true },
    secondaryMetric: { value: '14 Accounts', label: 'Active HITL Escalations', change: '8 resolved today', positive: true },
    chartData: [
      { label: 'North America', primaryVal: 8.2, secondaryVal: 1.8 },
      { label: 'EMEA', primaryVal: 6.9, secondaryVal: 3.1 },
      { label: 'APAC', primaryVal: 5.4, secondaryVal: 2.4 },
      { label: 'LATAM', primaryVal: 3.8, secondaryVal: 1.6 }
    ]
  }
};

export const RESUME_DATA = {
  name: 'Paweł Prusko',
  title: 'Senior UX & Agent Experience (AX) Designer',
  email: 'pruskopawel@gmail.com',
  location: 'Warsaw, Poland',
  website: 'https://pawelprusko.design',
  linkedin: 'https://linkedin.com/in/pawel-prusko',
  summary: 'Senior UX & Agent Experience (AX) Designer with 7+ years of experience engineering human-agent interaction frameworks, generative interfaces, and high-trust AI systems. Pioneer in translating non-deterministic LLM behaviors into deterministic, audit-compliant user experiences aligned with Google PAIR and Microsoft HAX principles.',
  coreSkills: [
    'Agent Experience (AX) Architecture',
    'Multi-Agent Workflow Orchestration',
    'Generative UI & Intent Disambiguation',
    'Human-in-the-Loop (HITL) Gateways',
    'Explainable AI (XAI) & Attribution Models',
    'RAG Citation & Grounding UX',
    'Design Systems & Design Tokens',
    'Rapid Prototyping (Cursor, React 19, TypeScript, Tailwind CSS)'
  ],
  experience: [
    {
      period: '2023 — Present',
      role: 'Staff / Lead Agent Experience (AX) Designer',
      company: 'Autonomous Data AI Systems',
      highlights: [
        'Spearheaded the UX architecture for an enterprise autonomous multi-agent platform, achieving zero context drift and 100% audit compliance across 12 parallel agent threads.',
        'Developed Generative UI engine converting unstructured analytical prompts into interactive, token-grounded charts with inline RAG citations.',
        'Engineered adaptive confidence-scoring approval gateways, reducing operator false-positive approval rates by 89% in high-stakes financial operations.'
      ]
    },
    {
      period: '2020 — 2023',
      role: 'Senior Product & UX Architect',
      company: 'Enterprise Cloud Intelligence',
      highlights: [
        'Designed human-in-the-loop decision workflows for distributed systems handling $40M+ in transaction volume with strict regulatory compliance.',
        'Architected comprehensive enterprise design system adopted across 8 cross-functional engineering teams, accelerating feature velocity by 3.4x.',
        'Conducted generative and evaluative research with 60+ enterprise risk officers, machine learning engineers, and platform operators.'
      ]
    },
    {
      period: '2018 — 2020',
      role: 'Product Designer & UX Researcher',
      company: 'Fintech & Algorithmic Products',
      highlights: [
        'Created interactive predictive dashboards, data visualizer widgets, and algorithmic transparency interfaces for institutional traders.',
        'Led usability testing on automated trade recommendation alerts, uncovering critical automation bias friction points.'
      ]
    }
  ],
  education: [
    {
      degree: 'Master of Science in Human-Computer Interaction & Cognitive Systems',
      institution: 'Warsaw University of Technology',
      year: 'Graduated with Honors'
    }
  ]
};
