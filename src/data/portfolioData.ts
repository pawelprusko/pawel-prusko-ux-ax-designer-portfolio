import { CaseStudy, RagSource, GenerativeWidgetData } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'multi-agent-orchestrator',
    number: '01',
    title: 'Autonomous Multi-Agent Platform',
    category: 'Multi-Agent Orchestration · HITL · Chain-of-Thought',
    impactMetric: 'Zero Context Drift',
    impactDescription: 'Complete auditability across concurrent agent execution pipelines',
    overview: 'Architected the AX and interaction chain for an orchestrated multi-agent system where specialized personas (Validator, Architect) execute parallel enterprise tasks with verified context boundaries.',
    problem: 'When multiple autonomous agents communicate asynchronously, traditional UI patterns fail: operators lose visibility into sub-agent states, hallucinated edge cases cascade silently, and opaque outputs degrade automation trust.',
    solution: 'Designed a hierarchical state streamer decomposing high-level user directives into structured agent contracts, featuring explicit visual handshakes, inspected reasoning steps, and mandatory HITL approval gates for high-blast-radius operations.',
    keyInnovations: [
      'Visualized Chain-of-Thought with progressive disclosure to minimize cognitive load',
      'Context-lock checkpoints guaranteeing state integrity across parallel execution threads',
      'Configurable blast-radius triggers pausing execution for human sign-off before write actions',
      'Deterministic rollback interface restoring agents to the last verified safe state in one click'
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
    category: 'Generative UI · NLP Intent · RAG Data Grounding',
    impactMetric: 'Sub-Second Intent Resolution',
    impactDescription: 'Replaced static dashboards with dynamic, on-the-fly analytical components',
    overview: 'Replaced static enterprise dashboards with dynamic, on-the-fly UI components generated from natural language prompts, backed by strict data grounding and verifiable RAG citations.',
    problem: 'Enterprise operators were constrained by rigid dashboards requiring complex filter manipulation, while generic LLM chatbot text lacked tabular structure, quantitative rigor, and verifiable audit trails.',
    solution: 'Pioneered an intent-to-component pipeline pairing natural language understanding with a strict design token grammar. The system synthesizes interactive charts, cohort tables, and metric strips on demand with inspectable source citations.',
    keyInnovations: [
      'Generative Component Grammar ensuring AI-composed widgets strictly adhere to accessibility and design tokens',
      'Interactive source citations linking UI numbers directly to verified database queries and vector embeddings',
      'Dynamic intent disambiguation cards when user prompts contain multiple plausible interpretations',
      'Inline pivot controls allowing operators to slice generated views without re-prompting'
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
    category: 'High-Stakes Systems · Explainable AI · Risk Governance',
    impactMetric: 'Automation Bias Mitigation',
    impactDescription: 'Granular control workflows protecting high-value transaction volume',
    overview: 'Engineered Human-in-the-Loop approval workflows for high-risk financial processes, balancing automation throughput with human cognitive oversight.',
    problem: 'In high-stakes approvals, operators suffered from automation complacency (uncritically accepting AI advice) or extreme skepticism (ignoring helpful insights), leading to costly oversights.',
    solution: 'Implemented an adaptive confidence-scoring UX model where high-confidence predictions (>95%) follow streamlined verification, whereas low-confidence or high-variance cases trigger mandatory Explainable AI (XAI) feature attribution panels and structured override rationales.',
    keyInnovations: [
      'Adaptive confidence thresholds dynamically scaling friction based on transaction blast radius',
      'Explainable AI (XAI) feature attribution visualization illustrating positive and negative risk factors',
      'Cognitive verification challenges preventing mindless confirmation button clicks',
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
    headline: 'Q3 Enterprise Expansion & Churn Trajectory',
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

export const EXACT_PDF_CV_DATA = {
  name: 'Paweł Prusko',
  documentTitle: 'Paweł Prusko CV',
  roleTitle: 'Senior UX & Agent Experience Designer',
  phone: '693 600 920',
  email: 'pruskopawel@gmail.com',
  localization: 'Warsaw',
  portfolioLink: 'https://pawelprusko.design',
  executiveSummary: 'Senior UX and Agent Experience (AX) Designer with 7+ years of expertise architecting complex digital products and AI-native ecosystems. Specialized in Agentic Workflows, Human-in-the-Loop (HITL) interactions, and Generative UI (GenUI). Leveraging a deep background in Data Experience and complex systems, I bridge the gap between abstract Large Language Models (LLMs) and end-user cognition. I focus on algorithmic transparency, latency masking, and strict UI guardrails that prevent context drift and ensure trust in autonomous multi-agent systems.',
  
  competencyCategories: [
    {
      category: 'Agent Experience & AI-Native UX',
      items: 'Human-Agent Interaction (HAI), Multi-Agent Orchestration, Human-in-the-Loop, Generative UI, System Transparency, Latency UX.'
    },
    {
      category: 'Explainable AI (XAI) & Algorithmic Trust',
      items: 'RAG (Retrieval-Augmented Generation) Data Grounding, Hallucination Mitigation, Confidence Scoring UI, Intent-to-Action Logic.'
    },
    {
      category: 'Rapid Prototyping & Feasibility',
      items: 'Vibe-Coding, AI-Assisted Prototyping (Cursor, Figma Make, Claude), React/Tailwind Logic, Prompt Architecture as a UX tool.'
    },
    {
      category: 'Core Product Design',
      items: 'Complex Systems Architecture, Information Architecture (IA), Cognitive Load Reduction, Figma Expert, WCAG 2.1+.'
    }
  ],

  professionalExperience: [
    {
      role: 'Senior Data Product Designer & AI Specialist',
      company: 'STX Next',
      period: 'September 2025 – Present',
      bullets: [
        {
          label: 'Agentic UX & Generative UI',
          desc: 'Led the architectural shift from static analytics dashboards to dynamic, AI-generated interfaces. Designed conversational logic where agents autonomously generate specific UI components based on NLP intent.'
        },
        {
          label: 'Multi-Agent Tooling',
          desc: 'Architected modular system prompts and internal AI \'Gems\' that automate UX research synthesis and validate complex data logic prior to frontend development.'
        },
        {
          label: 'Rapid AX Prototyping',
          desc: 'Designed functional Proof of Concepts (POCs) by bridging Figma layouts with code-based prototypes (using Cursor and v0), significantly reducing time-to-market for AI-intensive features.'
        }
      ]
    },
    {
      role: 'Founder & Principal AX Architect',
      company: 'kcherry (Freelance/Consulting)',
      period: '',
      bullets: [
        {
          label: 'Multi-Persona Agent Architecture',
          desc: 'Engineered the UX and logic chain for a multi-agent system that dynamically adopts specialized personas to audit inputs, complete with strict guardrails to prevent context drift.'
        },
        {
          label: 'RAG UX & System Transparency',
          desc: 'Conducted IA audits for enterprise C-suite clients to optimize raw data structures for LLM context windows, designing interfaces that prioritize data grounding and source explainability.'
        },
        {
          label: 'Pre-Engineering Logic Validation',
          desc: 'Validated autonomous agent behaviors in sandbox environments before committing to backend engineering, protecting enterprise R&D budgets.'
        }
      ]
    },
    {
      role: 'Senior UX Designer (Complex Systems & Data Pipelines)',
      company: 'Astek',
      period: 'February 2022 – August 2025',
      bullets: [
        {
          label: 'Human-in-the-Loop Workflows',
          desc: 'Designed critical approval flows for complex algorithmic systems, ensuring users maintained meaningful control over automated data processing and predictive models.'
        },
        {
          label: 'Algorithmic UI Architecture',
          desc: 'Collaborated closely with Data Scientists and Backend Engineers to translate raw machine learning outputs into intuitive, WCAG-compliant interface structures with clear error handling.'
        },
        {
          label: 'Enterprise Design Systems',
          desc: 'Established global, cross-functional guidelines and scalable UX components for corporate environments, standardizing the handoff between designers and data engineers.'
        }
      ]
    }
  ],

  additionalExperience: [
    { role: 'Senior UX Designer', company: 'COI', period: 'October 2020 – January 2022' },
    { role: 'UX & UI Designer', company: 'Reckitt Benckiser', period: 'February 2019 – September 2020' },
    { role: 'Web Designer', company: 'Groupon', period: 'August 2016 – December 2018' }
  ],

  selectedProjects: [
    {
      title: 'Autonomous Multi-Agent Platform (Data AI Advocate)',
      description: 'Architected the AX and interaction chain for an orchestrated multi-agent system where specialized personas (Validator, Architect) execute parallel tasks. Designed real-time \'chain-of-thought\' visual states, context drift guardrails, and HITL approval nodes to ensure complete trust in automated advice.'
    },
    {
      title: 'Generative UI Analytics Engine',
      description: 'Designed the interaction model for a prompt-driven enterprise platform that translates natural language (NLP) into dynamic, on-the-fly GenUI components. Replaced static dashboards with real-time, LLM-generated widgets backed by strict RAG data grounding and citation UX.'
    },
    {
      title: 'Enterprise Co-Pilot & HITL Decision System',
      description: 'Engineered Human-in-the-Loop approval workflows for high-risk algorithmic processes. Created transparent confidence-scoring UI, source-explainability drawers (XAI), and fallback states that allow human operators to audit, override, or approve autonomous AI recommendations.'
    }
  ],

  educationFormal: [
    {
      title: 'Digital UX Designer (320h)',
      institution: 'Coders Lab',
      year: '2019',
      details: 'User-centric design, cognitive load reduction, information architecture, behavioral psychology, complex system workflows.'
    },
    {
      title: 'Javascript & React Developer (400h)',
      institution: 'Coders Lab',
      year: '2018',
      details: 'Programming logic, component architecture, state management, API integration, code-based rapid prototyping.'
    },
    {
      title: 'M.Sc. in Chemistry & Biology',
      institution: 'University of Gdansk',
      year: '2009 – 2015',
      details: 'Scientific research methodology, analytical data thinking, complex system modeling, logic validation.'
    }
  ],

  educationContinuous: [
    {
      title: 'Agentic Workflows & Multi-Agent Orchestration',
      details: 'Deep research into Human-Agent Interaction patterns, multi-role agent persona frameworking, logic chain mapping, and Human-in-the-Loop approval nodes.'
    },
    {
      title: 'Generative UI & Intent-to-UI Architecture',
      details: 'Dynamic on-the-fly component rendering, NLP intent mapping, prompt-driven data exploration, and automated interactive widget synthesis.'
    },
    {
      title: 'Explainable AI (XAI) & System Transparency',
      details: 'RAG data grounding UI patterns, citation UX, confidence scoring visualization, latency masking (\'thinking\' visual states), and context drift mitigation mechanics.'
    },
    {
      title: 'AI-Assisted Rapid Prototyping & Prompt Architecture',
      details: 'Advanced system prompt engineering, artifact elimination, guardrail mechanics, and vibe-coding prototyping across Cursor, v0, Claude, and Google AI Studio.'
    }
  ],

  rodoConsent: 'I agree to the processing of personal data provided in this document for realizing the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).'
};

export const RESUME_DATA = EXACT_PDF_CV_DATA;
