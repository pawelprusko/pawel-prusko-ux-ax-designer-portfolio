import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check, Terminal, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [showAtsBlock, setShowAtsBlock] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pruskopawel@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const atsSummaryJson = {
    candidate: {
      name: "Paweł Prusko",
      target_roles: ["Senior Agent Experience (AX) Designer", "Staff UX Designer", "Lead AI Product Designer"],
      experience_years: "7+",
      location: "Warsaw, Poland (EU Citizen, Open to Global Remote)",
      email: "pruskopawel@gmail.com",
      methodologies: ["Google PAIR Guidebook", "Microsoft HAX Standards", "Human-in-the-Loop (HITL)"],
      core_competencies: [
        "Multi-Agent Workflow Orchestration",
        "Generative UI Architecture",
        "RAG Citation & Grounding UX",
        "Explainable AI (XAI) & Attribution Models",
        "Algorithmic Trust Calibration",
        "Design Systems & Design Tokens",
        "Rapid Prototyping (Cursor, React 19, TypeScript, Tailwind CSS, Python)"
      ]
    }
  };

  return (
    <footer id="contact" className="bg-[#FFFFFF] border-t border-[#E2E8F0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Contact Invitation Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-700">
              <span>GET IN TOUCH</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-600 font-sans">Opportunities &amp; Collaborations</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
              Let's Architect the Future of Human-Agent Systems
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed max-w-xl">
              Currently open to Senior &amp; Staff AX / AI Product Design roles with pioneering AI labs, autonomous agent platforms, and high-stakes enterprise software teams.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:pruskopawel@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] rounded-md hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Paweł Prusko</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-700 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md hover:bg-slate-100 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Executive CV</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">
              Direct Contact &amp; Details
            </h3>

            <div className="space-y-3 text-xs text-[#475569]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Email:
                </span>
                <a href="mailto:pruskopawel@gmail.com" className="font-mono text-[#0F172A] hover:underline font-medium">
                  pruskopawel@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Location:
                </span>
                <span className="text-[#0F172A] font-medium">
                  Warsaw, Poland (CET / UTC+1)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" /> Professional:
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/in/pawel-prusko" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                  <span className="text-slate-300">·</span>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => setShowAtsBlock(!showAtsBlock)}
                className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500 hover:text-[#0F172A] transition-colors"
              >
                <span>{showAtsBlock ? 'Hide ATS / AI Recruiter Schema' : 'Show ATS / AI-Agent Machine Readable Block'}</span>
                <span>{showAtsBlock ? '▲' : '▼'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* ATS / AI-AGENT READABLE SUMMARY BLOCK */}
        {showAtsBlock && (
          <div className="border border-[#E2E8F0] rounded-lg bg-slate-900 text-slate-100 p-5 space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                Structured Metadata for ATS &amp; LLM Evaluators
              </span>
              <span>application/ld+json</span>
            </div>
            <pre className="text-[11px] font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(atsSummaryJson, null, 2)}
            </pre>
          </div>
        )}

        {/* Quiet Editorial Footer Bottom */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            © {new Date().getFullYear()} Paweł Prusko. Designed with Swiss typography principles &amp; React 19.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>WCAG 2.1 AA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Zero Context Drift Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
