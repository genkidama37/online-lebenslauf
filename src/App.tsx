import React, { useState } from 'react';
import { Language } from './data/cvData';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ProfileAndStrengths } from './components/ProfileAndStrengths';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationAndTraining } from './components/EducationAndTraining';
import { ContactSection } from './components/ContactSection';
import { PrintView } from './components/PrintView';
import { OriginalPdfCvModal } from './components/OriginalPdfCvModal';
import { ArrowUp, Globe, Mail, Phone, FileText } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const handleOpenA4Modal = () => {
    setIsPrintModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      {/* Screen Interface (hidden in print) */}
      <div className="no-print pb-24 sm:pb-0">
        <TopBar
          lang={lang}
          onToggleLang={toggleLanguage}
          onOpenA4Modal={handleOpenA4Modal}
        />

        <main>
          {/* Hero Section with bio, vCard, online CV preview and contact triggers */}
          <HeroSection
            lang={lang}
            onOpenA4Modal={handleOpenA4Modal}
          />

          {/* Profile Statement & 4 Key Strengths & Core Values */}
          <ProfileAndStrengths
            lang={lang}
          />

          {/* Chronological Work Experience Timeline (8 stations) */}
          <ExperienceTimeline
            lang={lang}
          />

          {/* Education, MBSR, Clowning & Languages */}
          <EducationAndTraining
            lang={lang}
          />

          {/* Direct Contact, vCard export & Message Composer */}
          <ContactSection
            lang={lang}
            onOpenA4Modal={handleOpenA4Modal}
          />
        </main>

        {/* Clean, quiet footer for prospective employers */}
        <footer className="border-t border-slate-900 py-10 bg-slate-950/80 text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-400">Juan Carlos Sanchez Recio</span>
              <span>·</span>
              <span>{lang === 'de' ? 'Web- & Software-Entwickler' : 'Software Developer'}</span>
              <span>·</span>
              <span>Salzburg</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={handleOpenA4Modal}
                className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
                title={lang === 'de' ? 'Lebenslauf (A4) online ansehen' : 'View Resume (A4) online'}
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'de' ? 'Lebenslauf (A4)' : 'Resume (A4)'}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}</span>
              </button>

              <button
                onClick={scrollToTop}
                className="hover:text-slate-300 transition-colors flex items-center gap-1"
                title="Nach oben scrollen"
              >
                <span>{lang === 'de' ? 'Nach oben' : 'Back to top'}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>

        {/* Compact Mobile Quick Action Bar (Floating at bottom on small screens) */}
        <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-around text-xs">
          <a
            href="tel:+436603438244"
            className="flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-400 py-1 px-3"
          >
            <Phone className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'de' ? 'Anrufen' : 'Call'}</span>
          </a>

          <a
            href="mailto:jsanchezrecio@gmail.com"
            className="flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-400 py-1 px-3"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>E-Mail</span>
          </a>

          <button
            onClick={handleOpenA4Modal}
            className="flex flex-col items-center gap-1 text-slate-200 hover:text-indigo-400 py-1 px-3 font-medium"
            title="A4 Lebenslauf ansehen"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'de' ? 'Lebenslauf' : 'Resume'}</span>
          </button>

          <button
            onClick={toggleLanguage}
            className="flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-400 py-1 px-3"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'de' ? 'EN' : 'DE'}</span>
          </button>
        </div>
      </div>

      {/* Pristine Monochrome Print View (Visible only during printing) */}
      <PrintView lang={lang} />

      {/* A4 Resume Modal (Curriculum Vitae in DIN A4 format) */}
      <OriginalPdfCvModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        initialLang={lang}
      />
    </div>
  );
}
