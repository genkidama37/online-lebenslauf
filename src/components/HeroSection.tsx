import React, { useState } from 'react';
import { cvData, Language, generateVCardString } from '../data/cvData';
import { PROFILE_PHOTO_URL } from '../data/photoBase64';
import {
  MapPin,
  Calendar,
  Phone,
  Mail,
  Github,
  Download,
  Copy,
  Check,
  Terminal,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenA4Modal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenA4Modal,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDownloadVCard = () => {
    const vcardData = generateVCardString();
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Juan_Carlos_Sanchez_Recio.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const p = cvData.personal;

  return (
    <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-indigo-900/15 via-blue-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            {/* Top Eyebrow / Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-indigo-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-300">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                15+ {lang === 'de' ? 'Jahre IT-Erfahrung' : 'Years IT Experience'}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">{p.location[lang]}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">B.Sc. Wirtschaftsinformatik</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {p.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-sky-300 to-slate-200 bg-clip-text text-transparent">
                {p.title[lang]}
              </p>
            </div>

            {/* Profile Summary Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {p.profileText[lang]}
            </p>

            {/* Key Technology Chips (Unboxed text with separators) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-mono text-slate-400 pt-1">
              <span className="text-indigo-300 font-semibold">Angular</span>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-300 font-semibold">TypeScript</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-300 font-semibold">Node.js</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-300 font-semibold">Express</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">SQL-Datenbanken</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Clean Architecture</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Action: View Resume Online (A4) */}
              <button
                onClick={onOpenA4Modal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-950/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                title={lang === 'de' ? 'Lebenslauf im DIN-A4-Format online ansehen' : 'View Resume in DIN A4 format online'}
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'de' ? 'Lebenslauf ansehen (A4)' : 'View Resume (A4)'}</span>
              </button>

              {/* Action 2: vCard */}
              <button
                onClick={handleDownloadVCard}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all active:scale-95"
                title={lang === 'de' ? 'vCard Kontaktdaten speichern' : 'Save vCard contact'}
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>{lang === 'de' ? 'vCard Kontakt' : 'vCard Contact'}</span>
              </button>

              {/* Action 3: Direct Email */}
              <a
                href={`mailto:${p.email}?subject=Anfrage%20Web-%20und%20Software-Entwicklung`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-indigo-300 hover:bg-slate-900/60 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'de' ? 'E-Mail schreiben' : 'Send Email'}</span>
              </a>
            </div>

            {/* Copy Feedback Toast */}
            {copiedKey && (
              <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-lg w-fit">
                <Check className="w-3.5 h-3.5" />
                <span>
                  {lang === 'de' ? 'In Zwischenablage kopiert!' : 'Copied to clipboard!'}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Contact & Identity Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm relative space-y-5">
              {/* Card Header with Photo directly from assets */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-md shadow-indigo-950/50 flex-shrink-0">
                  <img
                    src={PROFILE_PHOTO_URL}
                    alt="Juan Carlos Sanchez Recio"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Juan Carlos Sanchez Recio</h3>
                  <p className="text-xs text-slate-400">B.Sc. Wirtschaftsinformatik</p>
                  <p className="text-xs text-indigo-400 font-medium">Salzburg, Österreich</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800/80 w-full" />

              {/* Contact Data Items with 1-click copy */}
              <div className="space-y-3 text-xs sm:text-sm">
                {/* Location */}
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{p.city}, {lang === 'de' ? 'Österreich' : 'Austria'}</p>
                    <p className="text-slate-400 text-xs">{p.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between gap-2 group">
                  <div className="flex items-center gap-3 text-slate-300 truncate">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <a
                      href={`mailto:${p.email}`}
                      className="hover:text-indigo-400 transition-colors truncate"
                    >
                      {p.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(p.email, 'email')}
                    className="p-1 text-slate-500 hover:text-slate-300 rounded transition-colors"
                    title={lang === 'de' ? 'E-Mail kopieren' : 'Copy Email'}
                  >
                    {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-2 group">
                  <div className="flex items-center gap-3 text-slate-300 truncate">
                    <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                    <a
                      href={`tel:${p.phone}`}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {p.phoneDisplay}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(p.phoneDisplay, 'phone')}
                    className="p-1 text-slate-500 hover:text-slate-300 rounded transition-colors"
                    title={lang === 'de' ? 'Telefon kopieren' : 'Copy Phone'}
                  >
                    {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between gap-2 group">
                  <div className="flex items-center gap-3 text-slate-300 truncate">
                    <Github className="w-4 h-4 text-indigo-400 shrink-0" />
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {p.github}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(p.githubUrl, 'github')}
                    className="p-1 text-slate-500 hover:text-slate-300 rounded transition-colors"
                    title={lang === 'de' ? 'GitHub Link kopieren' : 'Copy GitHub'}
                  >
                    {copiedKey === 'github' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Birth date */}
                <div className="flex items-center gap-3 text-slate-400 text-xs pt-1">
                  <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{p.birthDate[lang]}</span>
                </div>
              </div>

              {/* Status / Quick Notice */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 flex items-center justify-between">
                  <span>{lang === 'de' ? 'Verfügbarkeit' : 'Availability'}</span>
                  <span className="text-emerald-400 font-medium">{lang === 'de' ? 'Verfügbar in Salzburg / Remote' : 'Available in Salzburg / Remote'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
