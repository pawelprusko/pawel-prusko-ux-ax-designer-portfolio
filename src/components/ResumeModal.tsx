import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  ExternalLink, 
  FileText,
  Download
} from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${RESUME_DATA.name}
**${RESUME_DATA.title}**
Location: ${RESUME_DATA.location} | Email: ${RESUME_DATA.email} | Web: ${RESUME_DATA.website}

## Executive Summary
${RESUME_DATA.summary}

## Core Competencies
${RESUME_DATA.coreSkills.map(s => `- ${s}`).join('\n')}

## Professional Experience
${RESUME_DATA.experience.map(e => `### ${e.role} — ${e.company} (${e.period})\n${e.highlights.map(h => `- ${h}`).join('\n')}`).join('\n\n')}

## Education
${RESUME_DATA.education.map(ed => `- ${ed.degree}, ${ed.institution} (${ed.year})`).join('\n')}
`;
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0F172A]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Executive Curriculum Vitae"
    >
      <div className="relative w-full max-w-4xl bg-white border border-[#E2E8F0] rounded-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Control Bar (Non-print) */}
        <div className="no-print bg-[#F8FAFC] px-6 py-3 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>Executive Curriculum Vitae · Swiss Editorial Format</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown' : 'Copy ATS Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F172A] rounded hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE RESUME DOCUMENT CANVAS */}
        <div className="p-8 sm:p-12 lg:p-16 space-y-10 bg-white text-[#0F172A]">
          
          {/* Header Block */}
          <div className="space-y-4 border-b border-[#0F172A] pb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                  {RESUME_DATA.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-indigo-700 mt-1">
                  {RESUME_DATA.title}
                </p>
              </div>

              <div className="text-right text-xs text-[#475569] space-y-1 font-mono">
                <p className="flex items-center justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-[#0F172A] hover:underline">
                    {RESUME_DATA.email}
                  </a>
                </p>
                <p className="flex items-center justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{RESUME_DATA.location} (Remote EU/US)</span>
                </p>
                <p className="flex items-center justify-end gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>LinkedIn / Portfolio Verified</span>
                </p>
              </div>
            </div>

            {/* Executive Summary */}
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Core Competencies Grid (Unboxed Swiss Layout) */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] border-b border-slate-200 pb-1">
              Core Competencies &amp; Architectural Focus
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-4 text-xs font-medium text-[#475569]">
              {RESUME_DATA.coreSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-600"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] border-b border-slate-200 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-indigo-700 font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-xs font-mono text-slate-500 tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#475569] list-disc list-outside ml-4 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] pb-1">
              Education &amp; Credentials
            </h2>

            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex flex-wrap items-baseline justify-between text-xs text-[#475569]">
                <div>
                  <strong className="text-[#0F172A]">{edu.degree}</strong>
                  <p>{edu.institution}</p>
                </div>
                <span className="font-mono text-slate-500">{edu.year}</span>
              </div>
            ))}
          </div>

          {/* Document Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Paweł Prusko · Senior UX &amp; AX Designer</span>
            <span>Warsaw, Poland · pruskopawel@gmail.com</span>
          </div>

        </div>

      </div>
    </div>
  );
};
