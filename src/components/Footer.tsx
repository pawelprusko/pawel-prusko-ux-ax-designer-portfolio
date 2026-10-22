import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Copy, Check, FileText } from 'lucide-react';
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
      title: "Senior UX / Agent Experience Designer",
      target_roles: ["Senior UX / Agent Experience Designer", "Staff AX Designer", "Lead AI Product Designer"],
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
    <footer id="contact" className="bg-[#FFFFFF] border-t border-[#E4E4E7] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Contact Invitation Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#52525B]">
              <span>CONTACT</span>
              <span className="mx-2 text-[#E4E4E7]">/</span>
              <span>Inquiries &amp; Collaborations</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A0F]">
              Let's Architect the Future of Human-Agent Systems
            </h2>

            <p className="text-sm text-[#52525B] leading-relaxed max-w-xl">
              Currently available for Senior UX / Agent Experience Designer roles with pioneering AI labs, autonomous multi-agent platforms, and high-stakes enterprise software teams.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:pruskopawel@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#090A0F] rounded-md hover:bg-[#27272A] transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Paweł Prusko</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#090A0F] bg-[#FAFAFA] border border-[#E4E4E7] rounded-md hover:bg-[#F4F4F5] transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#090A0F]" /> : <Copy className="w-3.5 h-3.5 text-[#52525B]" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#090A0F] bg-[#FAFAFA] border border-[#E4E4E7] rounded-md hover:bg-[#F4F4F5] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Executive CV</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#E4E4E7] rounded-lg p-6 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#090A0F]">
              Direct Credentials
            </h3>

            <div className="space-y-3 text-xs text-[#52525B] font-mono">
              <div className="flex items-center justify-between">
                <span>Email:</span>
                <a href="mailto:pruskopawel@gmail.com" className="text-[#090A0F] hover:underline font-semibold">
                  pruskopawel@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className="text-[#090A0F]">
                  Warsaw, Poland (CET / UTC+1)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Links:</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/in/pawel-prusko" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#090A0F] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-[#E4E4E7]">·</span>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#090A0F] hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E4E4E7]">
              <button
                onClick={() => setShowAtsBlock(!showAtsBlock)}
                className="w-full flex items-center justify-between text-[11px] font-mono text-[#52525B] hover:text-[#090A0F] transition-colors"
              >
                <span>{showAtsBlock ? 'Hide ATS / AI-Agent Block' : 'Show ATS / AI-Agent Machine Readable Schema'}</span>
                <span>{showAtsBlock ? '▲' : '▼'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* ATS SUMMARY BLOCK */}
        {showAtsBlock && (
          <div className="border border-[#090A0F] rounded bg-[#090A0F] text-[#FAFAFA] p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] pb-2 border-b border-zinc-800">
              <span>Structured Metadata for ATS &amp; LLM Evaluators</span>
              <span>application/ld+json</span>
            </div>
            <pre className="text-[11px] font-mono text-[#E4E4E7] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(atsSummaryJson, null, 2)}
            </pre>
          </div>
        )}

        {/* Quiet Editorial Footer Bottom */}
        <div className="pt-8 border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
          <p>
            © {new Date().getFullYear()} Paweł Prusko. Senior UX / Agent Experience Designer.
          </p>
          <div className="flex items-center gap-4">
            <span>Pure Monochrome Edition</span>
            <span>·</span>
            <span>Zero Context Drift</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
