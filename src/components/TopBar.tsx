import React, { useState, useEffect } from 'react';
import { Language } from '../data/cvData';
import { Globe, Menu, X, Mail, Github, Phone, FileText } from 'lucide-react';

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenA4Modal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onToggleLang,
  onOpenA4Modal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#profil', label: lang === 'de' ? 'Profil' : 'Profile' },
    { href: '#staerken', label: lang === 'de' ? 'Stärken & Tech' : 'Strengths & Tech' },
    { href: '#erfahrung', label: lang === 'de' ? 'Berufserfahrung' : 'Experience' },
    { href: '#ausbildung', label: lang === 'de' ? 'Ausbildung' : 'Education' },
    { href: '#kontakt', label: lang === 'de' ? 'Kontakt' : 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-100 hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-sm group-hover:bg-indigo-600/30 transition-colors">
              JC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Juan Carlos Sanchez Recio
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {lang === 'de' ? 'Web- & Software-Entwickler' : 'Software Developer'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-indigo-400 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language switch + A4 Preview Modal + Contact CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-indigo-500/60 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
              aria-label="Sprache wechseln"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span className="tracking-wide">
                <span className={lang === 'de' ? 'text-indigo-400 font-bold' : 'text-slate-400'}>DE</span>
                <span className="text-slate-600 mx-0.5">/</span>
                <span className={lang === 'en' ? 'text-indigo-400 font-bold' : 'text-slate-400'}>EN</span>
              </span>
            </button>

            {/* A4 Resume Online Preview Trigger */}
            <button
              onClick={onOpenA4Modal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm active:scale-95"
              title={lang === 'de' ? 'Lebenslauf (A4) online ansehen' : 'View Resume (A4) online'}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'de' ? 'Lebenslauf (A4)' : 'Resume (A4)'}</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang === 'de' ? 'Kontakt' : 'Contact'}</span>
            </a>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-slate-950/95 backdrop-blur-xl lg:hidden p-6 border-b border-slate-800 flex flex-col justify-between overflow-y-auto no-print animate-in fade-in duration-200">
          <div className="space-y-4 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {lang === 'de' ? 'Navigation' : 'Navigation'}
            </p>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-600">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onToggleLang();
                  setMobileMenuOpen(false);
                }}
                className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-700/80 text-sm font-medium text-slate-200 flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'de' ? 'English (EN)' : 'Deutsch (DE)'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(onOpenA4Modal, 200);
                }}
                className="py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'de' ? 'A4 Lebenslauf' : 'A4 Resume'}</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
              <a href="tel:+436603438244" className="flex items-center gap-1 hover:text-indigo-400">
                <Phone className="w-3.5 h-3.5" /> 0660 343 82 44
              </a>
              <span>·</span>
              <a href="https://github.com/genkidama37" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-400">
                <Github className="w-3.5 h-3.5" /> genkidama37
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
