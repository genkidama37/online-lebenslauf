import React from 'react';
import { cvData, Language } from '../data/cvData';
import { GraduationCap, Heart, Globe2 } from 'lucide-react';

interface EducationAndTrainingProps {
  lang: Language;
}

export const EducationAndTraining: React.FC<EducationAndTrainingProps> = ({ lang }) => {
  const { education, trainings, languages } = cvData;
  const isDe = lang === 'de';

  return (
    <section id="ausbildung" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Education & Personal Development Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            {isDe ? 'Ausbildung & Weiterbildung' : 'Education & Training'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            {isDe ? 'Ausbildung, Persönliche Weiterbildung & Sprachen' : 'Education, Personal Further Training & Languages'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {isDe
              ? 'Fundierte Ausbildung in Wirtschaftsinformatik, gezielte persönliche Weiterbildung und Sprachkompetenzen.'
              : 'Academic education in business informatics, personal further training, and language skills.'}
          </p>
        </div>

        {/* 2-Column Grid: Education on left, Further Training on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Academic Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3>{isDe ? 'Ausbildung' : 'Education'}</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {edu.degree[lang]}
                      </h4>
                      <p className="text-sm text-indigo-300 font-medium mt-0.5">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-300 shrink-0 px-2.5 py-1 rounded-md bg-slate-800/80">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Personal Development & Further Training */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Heart className="w-5 h-5 text-emerald-400" />
              <h3>{isDe ? 'Persönliche Weiterbildung' : 'Personal Further Training'}</h3>
            </div>

            <div className="space-y-4">
              {trainings.map((trn) => (
                <div
                  key={trn.id}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base font-bold text-white">
                      {trn.title[lang]}
                    </h4>
                    <span className="text-xs font-mono text-indigo-300 shrink-0 px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-900/50">
                      {trn.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {trn.focus[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2.5 text-white font-bold text-lg">
            <Globe2 className="w-5 h-5 text-sky-400" />
            <h3>{isDe ? 'Sprachen' : 'Languages'}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((l) => (
              <div
                key={l.id}
                className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-base">
                      {l.name[lang]}
                    </h4>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800 text-indigo-300">
                      {l.badge}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-indigo-400">
                    {l.level[lang]}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                  {l.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
