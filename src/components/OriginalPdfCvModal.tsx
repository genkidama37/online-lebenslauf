import React, { useState, useEffect } from 'react';
import { Language } from '../data/cvData';
import { generatePrintableHtml } from '../utils/generatePrintableHtml';
import { A4DocumentPages } from './A4DocumentPages';
import { PROFILE_PHOTO_BASE64 } from '../data/photoBase64';
import {
  Printer,
  ExternalLink,
  X,
  FileText
} from 'lucide-react';

interface OriginalPdfCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLang: Language;
}

export const OriginalPdfCvModal: React.FC<OriginalPdfCvModalProps> = ({
  isOpen,
  onClose,
  initialLang,
}) => {
  const [modalLang, setModalLang] = useState<Language>(initialLang);
  const [activePage, setActivePage] = useState<'both' | '1' | '2'>('both');

  // Sync initial language when modal opens
  useEffect(() => {
    setModalLang(initialLang);
  }, [initialLang, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isDe = modalLang === 'de';

  const handleNativePrint = () => {
    window.print();
  };

  const handleOpenInNewTab = () => {
    const htmlContent = generatePrintableHtml(modalLang, PROFILE_PHOTO_BASE64);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[94vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Title & Document Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold">
              <FileText className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm sm:text-base leading-tight">
                {isDe ? 'Lebenslauf · Juan Carlos Sanchez Recio' : 'Curriculum Vitae · Juan Carlos Sanchez Recio'}
              </h2>
              <p className="text-slate-400 text-xs">
                {isDe ? 'Format: DIN A4 · 2 Seiten' : 'Format: DIN A4 · 2 Pages'}
              </p>
            </div>
          </div>

          {/* Central Toggles: Language & Page view */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setModalLang('de')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  isDe
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Deutsch (DE)
              </button>
              <button
                onClick={() => setModalLang('en')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  !isDe
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                English (EN)
              </button>
            </div>

            {/* Page View Filter */}
            <div className="hidden md:flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActivePage('both')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePage === 'both' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isDe ? 'Beide Seiten' : 'Both Pages'}
              </button>
              <button
                onClick={() => setActivePage('1')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePage === '1' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isDe ? 'Seite 1' : 'Page 1'}
              </button>
              <button
                onClick={() => setActivePage('2')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePage === '2' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isDe ? 'Seite 2' : 'Page 2'}
              </button>
            </div>
          </div>

          {/* Action Buttons & Close */}
          <div className="flex items-center gap-2">
           
            {/* Open in new tab */}
            <button
              onClick={handleOpenInNewTab}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              title={isDe ? 'In neuem Tab öffnen' : 'Open in new tab'}
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">{isDe ? 'Im Tab' : 'In Tab'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Canvas with A4 Documents */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950 flex flex-col items-center">
          <A4DocumentPages
            lang={modalLang}
            pageFilter={activePage}
            idPrefix="a4"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              {isDe
                ? 'Juan Carlos Sanchez Recio · Web- & Software-Entwickler · Salzburg'
                : 'Juan Carlos Sanchez Recio · Software Developer · Salzburg'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            {isDe ? 'Schließen' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
