import React from 'react';
import { Language } from '../data/cvData';
import { PROFILE_PHOTO_BASE64, PROFILE_PHOTO_URL } from '../data/photoBase64';

interface A4DocumentPagesProps {
  lang: Language;
  photoUrl?: string | null;
  pageFilter?: 'both' | '1' | '2';
  idPrefix?: string;
}

export const A4DocumentPages: React.FC<A4DocumentPagesProps> = ({
  lang,
  photoUrl,
  pageFilter = 'both',
  idPrefix = 'a4',
}) => {
  const isDe = lang === 'de';
  // Use embedded base64 photo for zero CORS issues and pristine local rendering
  const photoSrc = photoUrl || PROFILE_PHOTO_BASE64 || PROFILE_PHOTO_URL;

  const showPage1 = pageFilter === 'both' || pageFilter === '1';
  const showPage2 = pageFilter === 'both' || pageFilter === '2';

  return (
    <div className="flex flex-col items-center gap-8">
      {/* ================= PAGE 1 (DIN A4: 210mm x 297mm) ================= */}
      {showPage1 && (
        <div
          id={`${idPrefix}-page-1`}
          className="w-full bg-white text-[#111827] shadow-xl p-8 sm:p-10 font-sans text-[8.5pt] sm:text-[9pt] leading-snug border border-slate-200 relative flex flex-col justify-between"
          style={{
            width: '210mm',
            minHeight: '297mm',
            maxHeight: '297mm',
            height: '297mm',
            boxSizing: 'border-box',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}
        >
          <div>
            {/* Document Header */}
            <div className="mb-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-none">
                Juan Carlos Sanchez Recio
              </h1>
              <p className="text-xs sm:text-sm italic text-slate-600 mt-1">
                Bachelor of Science
              </p>
              <div className="w-full h-[1.5px] bg-slate-900 mt-2.5 mb-4" />
            </div>

            {/* 2-Column Layout */}
            <div className="grid grid-cols-12 gap-5 items-start">
              {/* Left Column (Grey Background Box) */}
              <div className="col-span-4 bg-[#f3f4f6] p-3.5 sm:p-4 rounded-sm space-y-4 text-slate-800 text-[8pt]">
                {/* Photo Slot */}
                <div className="w-full aspect-[3/4] max-w-[130px] mx-auto rounded-sm overflow-hidden border border-slate-300 shadow-sm bg-slate-200">
                  <img
                    src={photoSrc}
                    alt="Juan Carlos Sanchez Recio"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>

                {/* KONTAKT / CONTACT */}
                <div>
                  <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                    {isDe ? 'KONTAKT' : 'CONTACT'}
                  </h2>
                  <div className="space-y-1 leading-snug">
                    <p>
                      {isDe ? 'Geboren am 21.10.1981 in' : 'Born on 21.10.1981 in'}<br />
                      <strong>Lérida (Spanien)</strong>
                    </p>
                    <p>
                      Wildenhoferstrasse 1, Top 11<br />
                      5020 Salzburg
                    </p>
                    <p className="font-semibold pt-0.5 text-slate-900">
                      0660 343 82 44
                    </p>
                    <p className="break-all font-mono text-[7pt] text-slate-700">
                      jsanchezrecio@gmail.com
                    </p>
                    <p className="break-all font-mono text-[7pt] text-slate-700">
                      github.com/genkidama37
                    </p>
                  </div>
                </div>

                {/* SPRACHEN / LANGUAGES */}
                <div>
                  <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                    {isDe ? 'SPRACHEN' : 'LANGUAGES'}
                  </h2>
                  <div className="space-y-1.5 leading-snug">
                    <div>
                      <p className="font-bold text-slate-900">
                        {isDe ? 'Spanisch und Katalanisch:' : 'Spanish and Catalan:'}
                      </p>
                      <p className="text-slate-600">{isDe ? 'Muttersprache.' : 'Native speaker.'}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        {isDe ? 'Deutsch: B2' : 'German: B2'}
                      </p>
                      <p className="text-slate-600">
                        {isDe
                          ? 'sicher im beruflichen und privaten Alltag, gute mündliche und schriftliche Kommunikationsfähigkeit.'
                          : 'fluent in professional and daily life, strong oral and written communication skills.'}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        {isDe ? 'Englisch: B2' : 'English: B2'}
                      </p>
                      <p className="text-slate-600">
                        {isDe
                          ? 'sicher im Umgang mit technischer Dokumentation, Fachliteratur und internationalen IT-Teams.'
                          : 'proficient with technical documentation, professional literature, and international dev teams.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* KERNKOMPETENZEN / CORE COMPETENCIES */}
                <div>
                  <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                    {isDe ? 'KERNKOMPETENZEN' : 'CORE COMPETENCIES'}
                  </h2>
                  <ul className="space-y-0.5 list-disc list-inside text-slate-700">
                    <li>{isDe ? 'Problemlösung' : 'Problem solving'}</li>
                    <li>{isDe ? 'Teamarbeit' : 'Teamwork'}</li>
                    <li>{isDe ? 'Anpassungsfähigkeit' : 'Adaptability'}</li>
                    <li>{isDe ? 'Zuverlässigkeit' : 'Reliability'}</li>
                    <li>{isDe ? 'Verantwortungsbewusstsein' : 'Sense of responsibility'}</li>
                  </ul>
                </div>
              </div>

              {/* Right Column (Profile, Strengths, Experience) */}
              <div className="col-span-8 space-y-3.5">
                {/* PROFIL / PROFILE */}
                <div>
                  <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                    {isDe ? 'PROFIL' : 'PROFILE'}
                  </h2>
                  <p className="text-justify text-slate-700 leading-relaxed text-[8pt] sm:text-[8.5pt]">
                    {isDe
                      ? 'Ich bin IT-Fachkraft mit langjähriger Erfahrung in der Software- und Webentwicklung sowie einem fundierten Hintergrund in Wirtschaftsinformatik. Durch meine berufliche Neuorientierung und kontinuierliche Weiterbildung habe ich gelernt, technische Kompetenz, Lernbereitschaft und einen wertschätzenden Umgang mit Menschen erfolgreich zu verbinden.'
                      : 'I am an IT professional with many years of experience in software and web development and a sound background in business informatics. Through my professional reorientation and continuous further training, I have learned to successfully combine technical competence, willingness to learn, and an appreciative approach to working with people.'}
                  </p>
                </div>

                {/* MEINE STÄRKEN / MY STRENGTHS */}
                <div>
                  <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                    {isDe ? 'MEINE STÄRKEN' : 'MY STRENGTHS'}
                  </h2>
                  <div className="space-y-1.5 text-[8pt]">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {isDe ? 'Webentwicklung & Softwareentwicklung' : 'Web Development & Software Development'}
                      </h3>
                      <p className="text-slate-700">
                        {isDe
                          ? 'Mehr als 15 Jahre Erfahrung in der Entwicklung, Wartung und Optimierung von Softwarelösungen. Praxis in Webtechnologien wie Angular, TypeScript, Node.js, Express und SQL-Datenbanken.'
                          : 'Over 15 years of experience in the development, maintenance, and optimization of software solutions. Hands-on practice in web technologies such as Angular, TypeScript, Node.js, Express, and SQL databases.'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {isDe ? 'Analyse- und Problemlösungskompetenz' : 'Analysis & Problem-Solving Competence'}
                      </h3>
                      <p className="text-slate-700">
                        {isDe
                          ? 'Erfahrung in der Fehleranalyse, Performanceoptimierung, Anforderungsaufnahme und Entwicklung bzw. Umsetzung technischer Lösungen. Strukturierte Arbeitsweise bei komplexen technischen Herausforderungen.'
                          : 'Experience in root cause analysis, performance optimization, requirements engineering, and technical solution delivery. Structured approach to complex technical challenges.'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {isDe ? 'Kunden- und Serviceorientierung' : 'Customer & Service Orientation'}
                      </h3>
                      <p className="text-slate-700">
                        {isDe
                          ? 'Tätigkeit im Support sowie Erfahrungen in Gastronomie und Pädagogik. Sicherer Umgang mit unterschiedlichen Menschen, hohe Kommunikationsfähigkeit und lösungsorientiertes Handeln.'
                          : 'Experience in support as well as practical background in gastronomy and pedagogy. Confident interpersonal engagement with diverse people, high communication ability, and solution-driven mindset.'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {isDe ? 'Lernbereitschaft & Weiterentwicklung' : 'Willingness to Learn & Further Development'}
                      </h3>
                      <p className="text-slate-700">
                        {isDe
                          ? 'Kontinuierliche fachliche Weiterbildung, unter anderem in Clean Architecture, Unit Testing, Kompetenzanalyse und KI-gestützten Arbeitsmethoden. Offen für neue Aufgabenfelder und Technologien.'
                          : 'Continuous professional training, including Clean Architecture, Unit Testing, competency analysis, and AI-assisted workflows. Receptive to new fields and emerging technologies.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* BERUFSERFAHRUNG MIT KOMPETENZSCHWERPUNKTEN / WORK EXPERIENCE */}
                <div>
                  <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                    {isDe ? 'BERUFSERFAHRUNG MIT KOMPETENZSCHWERPUNKTEN' : 'WORK EXPERIENCE WITH CORE COMPETENCIES'}
                  </h2>

                  <div className="space-y-2.5 text-[8pt]">
                    {/* Station 1: Frost Development GmbH */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {isDe ? 'Web-Entwickler | Frost Development GmbH, Salzburg' : 'Web Developer | Frost Development GmbH, Salzburg'}
                        </span>
                        <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                          09/2019 – 04/2025
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-slate-700 mt-0.5 space-y-0.5">
                        <li>{isDe ? 'Entwicklung und Wartung von Webanwendungen.' : 'Development and maintenance of web applications.'}</li>
                        <li>{isDe ? 'Anforderungsmanagement und Support.' : 'Requirements management and support.'}</li>
                        <li>{isDe ? 'Wissensmanagement und Dokumentation.' : 'Knowledge management and documentation.'}</li>
                      </ul>
                      <p className="text-[7pt] text-slate-600 mt-0.5">
                        <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Webentwicklung, Anforderungsanalyse, Problemlösung, Teamarbeit.' : 'Web development, Requirements analysis, Problem solving, Teamwork.'}
                      </p>
                    </div>

                    {/* Station 2: Berufliche Neuorientierung */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {isDe ? 'Berufliche Neuorientierung, Salzburg' : 'Professional Reorientation, Salzburg'}
                        </span>
                        <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                          07/2017 – 03/2019
                        </span>
                      </div>
                      <p className="text-slate-700 mt-0.5 leading-normal">
                        {isDe
                          ? 'Praktische Erfahrungen in den Bereichen Pädagogik und Gastronomie durch Tätigkeiten als Kindergartenhelfer, Praktikant in Kinderbetreuungseinrichtungen sowie im Servicebereich. Erweiterung sozialer, kommunikativer und organisatorischer Kompetenzen sowie bewusste Auseinandersetzung mit beruflichen Perspektiven und persönlicher Weiterentwicklung.'
                          : 'Practical experience in the fields of pedagogy and gastronomy through roles as a kindergarten assistant, intern in childcare facilities, and in the service sector. Expansion of social, communicative, and organizational competencies as well as conscious engagement with professional perspectives and personal development.'}
                      </p>
                      <p className="text-[7pt] text-slate-600 mt-0.5">
                        <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Lernbereitschaft, Anpassungsfähigkeit, Kommunikationsfähigkeit, Kundenorientierung, Sozialkompetenz, Verantwortungsbewusstsein.' : 'Willingness to learn, Adaptability, Communication skills, Customer orientation, Social competence, Sense of responsibility.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right text-[7pt] text-slate-400 pt-2 border-t border-slate-100">
            {isDe ? 'Seite 1 / 2' : 'Page 1 of 2'}
          </div>
        </div>
      )}

      {/* ================= PAGE 2 (DIN A4: 210mm x 297mm) ================= */}
      {showPage2 && (
        <div
          id={`${idPrefix}-page-2`}
          className="w-full bg-white text-[#111827] shadow-xl p-8 sm:p-10 font-sans text-[8.5pt] sm:text-[9pt] leading-snug border border-slate-200 relative flex flex-col justify-between"
          style={{
            width: '210mm',
            minHeight: '297mm',
            maxHeight: '297mm',
            height: '297mm',
            boxSizing: 'border-box',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}
        >
          <div>
            <div className="grid grid-cols-12 gap-5 items-start pt-1">
              {/* Left Column (Grey Background Box) */}
              <div className="col-span-4 bg-[#f3f4f6] p-3.5 sm:p-4 rounded-sm space-y-4 text-slate-800 text-[8pt]">
                {/* BESONDERE STÄRKEN / SPECIAL STRENGTHS */}
                <div>
                  <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                    {isDe ? 'BESONDERE STÄRKEN' : 'SPECIAL STRENGTHS'}
                  </h2>
                  <ul className="space-y-1 list-disc list-inside text-slate-700 leading-snug">
                    <li>{isDe ? 'Analytisches und strukturiertes Denken' : 'Analytical and structured thinking'}</li>
                    <li>{isDe ? 'Hohe Lern- und Weiterbildungsbereitschaft' : 'High willingness to learn and advance skills'}</li>
                    <li>{isDe ? 'Technisches Verständnis und digitale Kompetenz' : 'Technical comprehension and digital competence'}</li>
                    <li>{isDe ? 'Kunden- und lösungsorientierte Kommunikation' : 'Customer- and solution-driven communication'}</li>
                  </ul>
                </div>

                {/* PERSÖNLICHE WEITERBILDUNG / PERSONAL FURTHER TRAINING */}
                <div>
                  <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                    {isDe ? 'PERSÖNLICHE WEITERBILDUNG' : 'PERSONAL FURTHER TRAINING'}
                  </h2>
                  <div className="space-y-2 leading-snug text-slate-700">
                    <div>
                      <p className="font-bold text-slate-900">
                        {isDe ? '• Clownerie- und Improvisationstraining (2017–2019):' : '• Clowning and Improvisation Training (2017–2019):'}
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        {isDe
                          ? 'Förderung von Kommunikationsfähigkeit, Flexibilität, Kreativität und sicherem Auftreten.'
                          : 'Cultivation of communication agility, flexibility, creativity, and confident stage presence.'}
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        {isDe ? '• MBSR-Achtsamkeitstraining (2021):' : '• MBSR Mindfulness Training (2021):'}
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        {isDe
                          ? 'Stärkung von Konzentrationsfähigkeit, Selbstorganisation, Belastbarkeit und konstruktivem Umgang mit Stress.'
                          : 'Strengthening concentration, self-organization, mental resilience, and constructive stress management.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Remaining Career Stations & Education */}
              <div className="col-span-8 space-y-3 text-[8pt]">
                {/* Station 3: teampool */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Software-Entwickler | teampool Personal Service GmbH' : 'Software Developer | teampool Personal Service GmbH'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      04/2015 – 06/2017
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Datenbankentwicklung, Qualitätsbewusstsein, analytisches Denken.' : 'Database development, Quality awareness, Analytical thinking.'}
                  </p>
                </div>

                {/* Station 4: Porsche Informatik */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Junior Software-Entwickler | Porsche Informatik GmbH' : 'Junior Software Developer | Porsche Informatik GmbH'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      02/2012 – 01/2015
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Lösungsorientierung, Prozessverständnis, Systemintegration.' : 'Solution orientation, Process understanding, System integration.'}
                  </p>
                </div>

                {/* Station 5: Zistelalm */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Praktikant Kellner | Hotel-Restaurant Zistelalm' : 'Waitstaff Intern | Hotel-Restaurant Zistelalm'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      09/2010 – 01/2012
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Serviceorientierung, Teamarbeit, Deutschkenntnisse aufgebaut.' : 'Service orientation, Teamwork, German language acquisition.'}
                  </p>
                </div>

                {/* Station 6: Uni Lleida */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Data Management Technician | Universitat de Lleida, Spanien' : 'Data Management Technician | Universitat de Lleida, Spain'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      02/2008 – 02/2010
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Datenanalyse, Reporting, Business Intelligence.' : 'Data analysis, Reporting, Business intelligence.'}
                  </p>
                </div>

                {/* Station 7: Mobles Ros */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Junior Software-Entwickler | Fábrica de Mobles Ros S.A., Spanien' : 'Junior Software Developer | Fábrica de Mobles Ros S.A., Spain'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      05/2006 – 05/2007
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Softwareentwicklung, Datenmigration, Support, Flexibilität.' : 'Software development, Data migration, Support, Flexibility.'}
                  </p>
                </div>

                {/* Station 8: Churreria */}
                <div className="border-b border-slate-100 pb-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Mitarbeiter Familienbetrieb | Foodtruck Churreria La Noguera, Spanien' : 'Family Business Staff Member | Foodtruck Churreria La Noguera, Spain'}
                    </span>
                    <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                      1997 – 2009
                    </span>
                  </div>
                  <p className="text-[7pt] text-slate-600 mt-0.5">
                    <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Kundenkontakt, Verantwortungsbewusstsein, Zuverlässigkeit.' : 'Customer relations, Sense of responsibility, Reliability.'}
                  </p>
                </div>

                {/* AUSBILDUNG / EDUCATION */}
                <div className="pt-1">
                  <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                    {isDe ? 'AUSBILDUNG' : 'EDUCATION'}
                  </h2>
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {isDe
                            ? 'Bachelor of Science in Wirtschaftsinformatik, Universitat de Lleida, Spanien'
                            : 'Bachelor of Science in Business Informatics, Universitat de Lleida, Spain'}
                        </span>
                        <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                          2000 – 2008
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {isDe
                            ? 'Berufsbildende Schule für Wirtschaftsinformatik, IFP Almatà (Spanien)'
                            : 'Vocational School for Business Informatics, IFP Almatà (Spain)'}
                        </span>
                        <span className="font-mono text-[7.5pt] text-slate-600 font-normal">
                          1995 – 2000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right text-[7pt] text-slate-400 pt-2 border-t border-slate-100">
            {isDe ? 'Seite 2 / 2' : 'Page 2 of 2'}
          </div>
        </div>
      )}
    </div>
  );
};
