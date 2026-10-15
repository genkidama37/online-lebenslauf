import React from 'react';
import { cvData, Language } from '../data/cvData';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const { experiences } = cvData;
  const isDe = lang === 'de';

  return (
    <section id="erfahrung" className="py-16 sm:py-24 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            {isDe ? 'Beruflicher Werdegang' : 'Career History'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            {isDe ? 'Berufserfahrung mit Kompetenzschwerpunkten' : 'Work Experience with Core Competencies'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {isDe
              ? 'Exakte Stationen und Kompetenzen gemäß Lebenslauf.'
              : 'Exact career stations and competencies as per official Curriculum Vitae.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-8 sm:space-y-10">
          {experiences.map((exp) => {
            const comps = exp.competencies[lang] || exp.competencies.de;
            const hasBullets = exp.highlights && exp.highlights[lang] && exp.highlights[lang].length > 0;
            const hasDescription = exp.description && exp.description[lang];

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Indicator Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 bg-slate-950 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-200" />

                {/* Station Card */}
                <div className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-5 sm:p-6 hover:border-slate-700/80 transition-all space-y-3">
                  {/* Header row: Role, Company & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role[lang]}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-mono text-indigo-300 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Optional Bullet Points (Frost Development GmbH) */}
                  {hasBullets && (
                    <ul className="space-y-1.5 text-sm text-slate-300 pt-1">
                      {exp.highlights![lang].map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="text-indigo-400 mt-1 select-none text-xs">▹</span>
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional Paragraph Description (Berufliche Neuorientierung) */}
                  {hasDescription && (
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {exp.description![lang]}
                    </p>
                  )}

                  {/* Competencies Ribbon */}
                  <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="text-slate-500 font-medium">
                      {isDe ? 'Kompetenzen:' : 'Competencies:'}
                    </span>
                    {comps.map((comp, cIdx) => (
                      <React.Fragment key={comp}>
                        <span className="text-slate-200 font-medium">{comp}</span>
                        {cIdx < comps.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
