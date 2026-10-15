import React from 'react';
import { cvData, Language } from '../data/cvData';
import {
  Code,
  Search,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ProfileAndStrengthsProps {
  lang: Language;
}

export const ProfileAndStrengths: React.FC<ProfileAndStrengthsProps> = ({ lang }) => {
  const { strengths, specialStrengths, coreCompetencies } = cvData;
  const isDe = lang === 'de';

  const strengthIcons = [
    <Code className="w-5 h-5 text-indigo-400" key="code" />,
    <Search className="w-5 h-5 text-sky-400" key="search" />,
    <Users className="w-5 h-5 text-emerald-400" key="users" />,
    <Compass className="w-5 h-5 text-amber-400" key="compass" />,
  ];

  return (
    <section id="staerken" className="py-16 sm:py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            {isDe ? 'Fachprofil & Kompetenzen' : 'Professional Profile & Competencies'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            {isDe ? 'Meine Stärken' : 'My Strengths'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {isDe
              ? 'Auszug aus dem Lebenslauf: Technische Erfahrung und arbeitsrelevante Kompetenzen.'
              : 'Direct from the CV: Technical expertise and work-relevant competencies.'}
          </p>
        </div>

        {/* 4 Key Strengths Cards (Grid 1 / 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700/80 transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {strengthIcons[idx % strengthIcons.length]}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title[lang]}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Ribbon & Special Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Core Competencies Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-indigo-950/40 to-slate-900/80 border border-indigo-900/40 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>{isDe ? 'Kernkompetenzen' : 'Core Competencies'}</span>
            </h3>
            <div className="space-y-2.5 pt-1">
              {coreCompetencies[lang].map((comp) => (
                <div
                  key={comp}
                  className="flex items-center gap-2.5 text-sm text-slate-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Besondere Stärken (Special Strengths) */}
          <div className="lg:col-span-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>{isDe ? 'Besondere Stärken' : 'Special Strengths'}</span>
            </h3>
            <div className="space-y-2.5 pt-1">
              {specialStrengths[lang].map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-2.5 text-sm text-slate-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
