import React, { useState } from 'react';
import { cvData, Language, generateVCardString } from '../data/cvData';
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Download,
  Printer,
  Copy,
  Check,
  Send,
  MessageSquare,
  ExternalLink,
  RotateCcw,
  Sparkles,
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  onOpenA4Modal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  onOpenA4Modal,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: '',
  });
  const [isPrepared, setIsPrepared] = useState(false);

  const p = cvData.personal;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
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

  const subjectText = formData.subject.trim() || (lang === 'de' ? 'Anfrage Web- & Software-Entwicklung' : 'Web & Software Development Inquiry');
  const bodyText = `Hallo Herr Sanchez Recio,\n\n${formData.message}\n\nViele Grüße,\n${formData.name}${formData.senderEmail ? ` (${formData.senderEmail})` : ''}`;

  const mailtoUrl = `mailto:${p.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(p.email)}&subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  const office365Url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(p.email)}&subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPrepared(true);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            {lang === 'de' ? 'Austausch & Zusammenarbeit' : 'Get in Touch'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            {lang === 'de' ? 'Kontakt aufnehmen' : 'Contact & Collaboration'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {lang === 'de'
              ? 'Haben Sie ein interessantes Projekt oder eine passende Position in der Web- oder Softwareentwicklung in Salzburg oder remote?'
              : 'Looking for an experienced web and software developer for a position or project in Salzburg or remote? Let’s connect.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <h3 className="font-bold text-white text-base">
                {lang === 'de' ? 'Direkte Kontaktdaten' : 'Direct Contact Details'}
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-xs text-slate-500 font-medium">E-Mail</p>
                      <a
                        href={`mailto:${p.email}`}
                        className="text-slate-200 hover:text-indigo-400 truncate font-mono text-xs sm:text-sm"
                      >
                        {p.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(p.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white rounded transition-colors shrink-0"
                    title={lang === 'de' ? 'Kopieren' : 'Copy'}
                  >
                    {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3 truncate">
                    <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-xs text-slate-500 font-medium">Telefon</p>
                      <a
                        href={`tel:${p.phone}`}
                        className="text-slate-200 hover:text-indigo-400 truncate font-mono text-xs sm:text-sm"
                      >
                        {p.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(p.phoneDisplay, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white rounded transition-colors shrink-0"
                    title={lang === 'de' ? 'Kopieren' : 'Copy'}
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{lang === 'de' ? 'Wohnort' : 'Location'}</p>
                    <p className="text-xs sm:text-sm font-medium">{p.address}</p>
                    <p className="text-xs text-slate-400">{p.city}, {lang === 'de' ? 'Österreich' : 'Austria'}</p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3 truncate">
                    <Github className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-xs text-slate-500 font-medium">GitHub</p>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-indigo-400 truncate font-mono text-xs sm:text-sm"
                      >
                        {p.github}
                      </a>
                    </div>
                  </div>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:underline px-2 py-1"
                  >
                    {lang === 'de' ? 'Öffnen ↗' : 'Visit ↗'}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadVCard}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>vCard (.vcf)</span>
                </button>

                <button
                  onClick={onOpenA4Modal}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all active:scale-95"
                  title={lang === 'de' ? 'Lebenslauf (A4) online ansehen' : 'View Resume (A4) online'}
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>{lang === 'de' ? 'Lebenslauf (A4)' : 'Resume (A4)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form or Prepared Sender Panel */}
          <div className="lg:col-span-7">
            {!isPrepared ? (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                    <span>{lang === 'de' ? 'Nachricht verfassen' : 'Compose Message'}</span>
                  </h3>
                  <span className="text-xs text-slate-500">
                    {lang === 'de' ? 'An jsanchezrecio@gmail.com' : 'To jsanchezrecio@gmail.com'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      {lang === 'de' ? 'Ihr Name' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'de' ? 'z. B. Max Mustermann' : 'e.g. John Doe'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      {lang === 'de' ? 'Ihre E-Mail-Adresse' : 'Your Email'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      placeholder="email@beispiel.at"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {lang === 'de' ? 'Betreff' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={
                      lang === 'de'
                        ? 'Projektanfrage / Kennenlernen'
                        : 'Project inquiry / Introduction'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {lang === 'de' ? 'Nachricht' : 'Message'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'de'
                        ? 'Beschreiben Sie Ihr Anliegen oder Details zur Vakanz...'
                        : 'Describe your inquiry or details about the opportunity...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-slate-500">
                    {lang === 'de'
                      ? 'Bereitet die E-Mail zur Übergabe an Ihr Wunschprogramm vor'
                      : 'Prepares the email for your preferred email application'}
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/50 transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'de' ? 'Nachricht vorbereiten' : 'Prepare Email'}</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Prepared message card with safe external launch options */
              <div className="bg-slate-900/70 border border-indigo-900/60 rounded-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-medium mb-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {lang === 'de' ? 'Bereit zum Absenden' : 'Ready to Send'}
                    </span>
                    <h3 className="font-bold text-white text-lg">
                      {lang === 'de' ? 'Wählen Sie Ihren E-Mail-Dienst' : 'Choose your email application'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {lang === 'de'
                        ? 'Wählen Sie, wie Sie die vorbereitete Nachricht absenden möchten:'
                        : 'Select how you would like to open and send your message:'}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPrepared(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'de' ? 'Bearbeiten' : 'Edit'}</span>
                  </button>
                </div>

                {/* Message preview snippet */}
                <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-xs font-mono space-y-1.5 text-slate-300">
                  <p><span className="text-slate-500">An:</span> {p.email}</p>
                  <p><span className="text-slate-500">Betreff:</span> {subjectText}</p>
                  <p className="pt-2 text-slate-400 line-clamp-3 whitespace-pre-line border-t border-slate-800/60 font-sans text-xs">
                    {bodyText}
                  </p>
                </div>

                {/* Safe external launch options */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {lang === 'de' ? 'Optionen zum Öffnen:' : 'Send options:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Native default client */}
                    <a
                      href={mailtoUrl}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{lang === 'de' ? 'Standard-Mailprogramm' : 'Default Mail Client'}</span>
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Webmail: Gmail */}
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-red-400 font-bold">M</span>
                        <span>{lang === 'de' ? 'In Gmail öffnen' : 'Open in Gmail'}</span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Webmail: Outlook.com */}
                    <a
                      href={outlookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sky-400 font-bold">O</span>
                        <span>{lang === 'de' ? 'In Outlook Web öffnen' : 'Open in Outlook Web'}</span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Webmail: Office 365 */}
                    <a
                      href={office365Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold">365</span>
                        <span>{lang === 'de' ? 'Office 365 Outlook' : 'Office 365 Outlook'}</span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Copy message text button */}
                  <div className="pt-2">
                    <button
                      onClick={() => copyToClipboard(`An: ${p.email}\nBetreff: ${subjectText}\n\n${bodyText}`, 'fullMessage')}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {copiedKey === 'fullMessage' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">
                            {lang === 'de' ? 'Text & E-Mail-Adresse kopiert!' : 'Text & Email copied!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400" />
                          <span>
                            {lang === 'de'
                              ? 'Vollständigen Text & Empfänger in die Zwischenablage kopieren'
                              : 'Copy full text & recipient to clipboard'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
