import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText,
  Download
} from 'lucide-react';
import { EXACT_PDF_CV_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const d = EXACT_PDF_CV_DATA;
    const markdown = `# ${d.name}
**${d.roleTitle}**
Tel.: ${d.phone} | E-mail: ${d.email} | Localization: ${d.localization}

## Executive Summary
${d.executiveSummary}

## Core Competencies & AX Toolkit
${d.competencyCategories.map(c => `• **${c.category}**: ${c.items}`).join('\n\n')}

## Professional Experience
${d.professionalExperience.map(exp => `### ${exp.role}\n**${exp.company}** ${exp.period ? `| ${exp.period}` : ''}\n${exp.bullets.map(b => `• **${b.label}**: ${b.desc}`).join('\n')}`).join('\n\n')}

## Additional Experience
${d.additionalExperience.map(a => `• **${a.role}** | ${a.company} | ${a.period}`).join('\n')}

## Selected Agentic & AI Projects
${d.selectedProjects.map(p => `• **${p.title}**: ${p.description}`).join('\n\n')}

## Education & Continuous Specialization
### Formal Education & Technical Foundation
${d.educationFormal.map(e => `• **${e.title}** | ${e.institution} | ${e.year}\n  ${e.details}`).join('\n')}

### Continuous Agent Experience (AX) & AI Specialization
${d.educationContinuous.map(c => `• **${c.title}**: ${c.details}`).join('\n')}

---
${d.rodoConsent}
`;
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cv = EXACT_PDF_CV_DATA;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 md:p-8"
      onClick={(e) => {
        // Exit when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Paweł Prusko CV"
    >
      {/* Floating high-visibility Close Button for immediate exit */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-60 p-2.5 rounded-full bg-[#090A0F] text-white hover:bg-zinc-800 transition-transform active:scale-95 shadow-lg flex items-center justify-center border border-zinc-700"
        aria-label="Zamknij podgląd CV"
        title="Zamknij (ESC lub kliknij w tło)"
      >
        <X className="w-5 h-5 text-white stroke-[2.5]" />
      </button>

      {/* Main Document Container - Never clipped at the top */}
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#E4E4E7] rounded-lg shadow-2xl overflow-hidden my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Action Toolbar inside the modal */}
        <div className="no-print sticky top-0 z-30 bg-[#FAFAFA] border-b border-[#E4E4E7] px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#090A0F]">
            <FileText className="w-4 h-4 text-[#090A0F]" />
            <span>Paweł Prusko — Exact CV Document</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#52525B] bg-white border border-[#E4E4E7] rounded hover:text-[#090A0F] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#090A0F]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-[#090A0F] rounded hover:bg-[#27272A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* In-toolbar explicit Close Button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-semibold text-[#090A0F] bg-white border border-[#090A0F] rounded hover:bg-[#090A0F] hover:text-white transition-colors"
              title="Close modal"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* EXACT PDF DOCUMENT REPRODUCTION */}
        <div className="p-6 sm:p-12 lg:p-16 space-y-8 bg-white text-[#090A0F] font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
          
          {/* Header Block matching PDF */}
          <div className="space-y-1.5 border-b border-[#E4E4E7] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#090A0F]">
              {cv.name} CV
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#52525B]">
              {cv.roleTitle}
            </p>
            <div className="pt-2 text-xs font-mono text-[#52525B] flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Tel.: <strong className="text-[#090A0F]">{cv.phone}</strong></span>
              <span>|</span>
              <span>E-mail: <a href={`mailto:${cv.email}`} className="text-[#090A0F] hover:underline font-semibold">{cv.email}</a></span>
              <span>|</span>
              <span>Localization: <strong className="text-[#090A0F]">{cv.localization}</strong></span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-[#090A0F] leading-relaxed">
              {cv.executiveSummary}
            </p>
          </div>

          {/* Core Competencies & AX Toolkit */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#090A0F] border-b border-[#090A0F] pb-1 font-mono">
              Core Competencies &amp; AX Toolkit
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#090A0F] leading-relaxed">
              {cv.competencyCategories.map((c, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[#090A0F] mt-0.5">•</span>
                  <p>
                    <strong className="font-semibold text-[#090A0F]">{c.category}:</strong>{' '}
                    <span className="text-[#52525B]">{c.items}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#090A0F] border-b border-[#090A0F] pb-1 font-mono">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {cv.professionalExperience.map((exp, idx) => (
                <div key={idx} className="space-y-2.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#090A0F]">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#52525B] font-mono">
                        {exp.company}
                      </p>
                    </div>

                    {exp.period && (
                      <span className="text-xs font-mono text-[#52525B] tabular-nums">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-[#090A0F] leading-relaxed pl-1">
                    {exp.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="font-mono text-[#090A0F] mt-0.5">•</span>
                        <p>
                          <strong className="font-semibold text-[#090A0F]">{b.label}:</strong>{' '}
                          <span className="text-[#52525B]">{b.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Experience */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs sm:text-sm font-bold text-[#090A0F] font-mono uppercase">
              Additional Experience
            </h3>

            <div className="space-y-1.5 text-xs sm:text-sm text-[#52525B] font-mono">
              {cv.additionalExperience.map((add, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#090A0F]">•</span>
                  <p>
                    <strong className="text-[#090A0F] font-semibold">{add.role}</strong> | {add.company} | {add.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Agentic & AI Projects */}
          <div className="space-y-4 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#090A0F] border-b border-[#090A0F] pb-1 font-mono">
              Selected Agentic &amp; AI Projects
            </h2>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              {cv.selectedProjects.map((p, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-[#090A0F] mt-0.5">•</span>
                  <p>
                    <strong className="font-semibold text-[#090A0F]">{p.title}:</strong>{' '}
                    <span className="text-[#52525B]">{p.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Continuous Specialization */}
          <div className="space-y-6 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#090A0F] border-b border-[#090A0F] pb-1 font-mono">
              Education &amp; Continuous Specialization
            </h2>

            {/* Formal Education & Technical Foundation */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-[#090A0F] font-mono">
                Formal Education &amp; Technical Foundation
              </h3>

              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                {cv.educationFormal.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#090A0F] mt-0.5">•</span>
                    <div>
                      <p className="font-mono">
                        <strong className="text-[#090A0F] font-semibold">{edu.title}</strong> | {edu.institution} | {edu.year}
                      </p>
                      <p className="text-[#52525B] mt-0.5">({edu.details})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Agent Experience (AX) & AI Specialization */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs sm:text-sm font-bold text-[#090A0F] font-mono">
                Continuous Agent Experience (AX) &amp; AI Specialization
              </h3>

              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                {cv.educationContinuous.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#090A0F] mt-0.5">•</span>
                    <p>
                      <strong className="text-[#090A0F] font-semibold">{c.title}:</strong>{' '}
                      <span className="text-[#52525B]">{c.details}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Legal RODO Consent Clause */}
          <div className="pt-4 text-[10px] text-[#71717A] leading-relaxed font-sans">
            <p>{cv.rodoConsent}</p>
          </div>

        </div>

      </div>
    </div>
  );
};
