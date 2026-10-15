import React from 'react';
import { cvData, Language } from '../data/cvData';
import { PROFILE_PHOTO_BASE64, PROFILE_PHOTO_URL } from '../data/photoBase64';

interface PrintViewProps {
  lang: Language;
  photoUrl?: string | null;
}

export const PrintView: React.FC<PrintViewProps> = ({ lang, photoUrl }) => {
  const isDe = lang === 'de';
  const photoSrc = photoUrl || PROFILE_PHOTO_BASE64 || PROFILE_PHOTO_URL;

  return (
    <div className="hidden print:block text-[#111827] bg-white text-[8.5pt] leading-tight font-sans max-w-[210mm] mx-auto">
      {/* ================= PAGE 1 ================= */}
      <div className="min-h-[265mm] page-break-after-always pb-6" style={{ pageBreakAfter: 'always', breakAfter: 'page' }}>
        {/* Document Header */}
        <div className="mb-3">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-none">
            Juan Carlos Sanchez Recio
          </h1>
          <p className="text-xs italic text-slate-600 mt-1">
            Bachelor of Science
          </p>
          <div className="w-full h-[1.5px] bg-slate-900 mt-2 mb-4" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left Column (Grey Background Box) */}
          <div className="col-span-4 bg-[#f3f4f6] p-3.5 space-y-5 text-[7.5pt] leading-snug text-slate-800">
            {/* Photo slot */}
            <div className="w-24 h-32 mx-auto bg-slate-800 text-white flex flex-col items-center justify-center p-0 overflow-hidden text-center border border-slate-300">
              <img
                src={photoSrc}
                alt="Juan Carlos Sanchez Recio"
                className="w-full h-full object-cover object-top block"
              />
            </div>

            {/* KONTAKT */}
            <div>
              <h2 className="text-[8pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                {isDe ? 'KONTAKT' : 'CONTACT'}
              </h2>
              <div className="space-y-1">
                <p>
                  {isDe ? 'Geboren am 21.10.1981 in' : 'Born on 21.10.1981 in'}<br />
                  <strong>Lérida (Spanien)</strong>
                </p>
                <p>
                  Wildenhoferstrasse 1, Top 11<br />
                  5020 Salzburg
                </p>
                <p className="font-semibold pt-0.5">
                  0660 343 82 44
                </p>
                <p className="font-mono text-[7pt]">
                  jsanchezrecio@gmail.com
                </p>
                <p className="font-mono text-[7pt]">
                  github.com/genkidama37
                </p>
              </div>
            </div>

            {/* SPRACHEN */}
            <div>
              <h2 className="text-[8pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                {isDe ? 'SPRACHEN' : 'LANGUAGES'}
              </h2>
              <div className="space-y-2">
                <div>
                  <p className="font-bold text-slate-900">
                    {isDe ? 'Spanisch und Katalanisch:' : 'Spanish and Catalan:'}
                  </p>
                  <p className="text-slate-600">{isDe ? 'Muttersprache.' : 'Native speaker.'}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {isDe ? 'Deutsch: B2,' : 'German: B2,'}
                  </p>
                  <p className="text-slate-600">
                    {isDe
                      ? 'sicher im beruflichen und privaten Alltag, gute mündliche und schriftliche Kommunikationsfähigkeit.'
                      : 'confident in professional and daily life, strong oral and written communication skills.'}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {isDe ? 'Englisch: B2,' : 'English: B2,'}
                  </p>
                  <p className="text-slate-600">
                    {isDe
                      ? 'sicher im Umgang mit technischer Dokumentation, Fachliteratur und internationalen IT-Teams.'
                      : 'confident with technical documentation, professional literature and international IT teams.'}
                  </p>
                </div>
              </div>
            </div>

            {/* KERNKOMPETENZEN */}
            <div>
              <h2 className="text-[8pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                {isDe ? 'KERNKOMPETENZEN' : 'CORE VALUES'}
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

          {/* Right Column */}
          <div className="col-span-8 space-y-4">
            {/* PROFIL */}
            <div>
              <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                {isDe ? 'PROFIL' : 'PROFILE'}
              </h2>
              <p className="text-justify text-slate-700 text-[8pt] leading-normal">
                {isDe
                  ? 'Ich bin IT-Fachkraft mit langjähriger Erfahrung in der Software- und Webentwicklung sowie einem fundierten Hintergrund in Wirtschaftsinformatik. Durch meine berufliche Neuorientierung und kontinuierliche Weiterbildung habe ich gelernt, technische Kompetenz, Lernbereitschaft und einen wertschätzenden Umgang mit Menschen erfolgreich zu verbinden.'
                  : 'I am an IT professional with many years of experience in software and web development and a sound background in business informatics. Through my professional reorientation and continuous further training, I have learned to successfully combine technical competence, willingness to learn, and an appreciative approach to working with people.'}
              </p>
            </div>

            {/* MEINE STÄRKEN */}
            <div>
              <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                {isDe ? 'MEINE STÄRKEN' : 'MY STRENGTHS'}
              </h2>
              <div className="space-y-2 text-[7.5pt] leading-normal">
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
                      : 'Experience in root cause analysis, performance optimization, requirements gathering, and technical solution delivery. Structured approach to complex technical challenges.'}
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

            {/* BERUFSERFAHRUNG MIT KOMPETENZSCHWERPUNKTEN */}
            <div>
              <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                {isDe ? 'BERUFSERFAHRUNG MIT KOMPETENZSCHWERPUNKTEN' : 'WORK EXPERIENCE WITH CORE COMPETENCIES'}
              </h2>

              <div className="space-y-3 text-[7.5pt]">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Web-Entwickler | Frost Development GmbH, Salzburg' : 'Web Developer | Frost Development GmbH, Salzburg'}
                    </span>
                    <span className="font-mono text-[7pt] text-slate-600 font-normal">
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

                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe ? 'Berufliche Neuorientierung, Salzburg' : 'Professional Reorientation, Salzburg'}
                    </span>
                    <span className="font-mono text-[7pt] text-slate-600 font-normal">
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

      {/* ================= PAGE 2 ================= */}
      <div className="min-h-[265mm] pt-4" style={{ pageBreakBefore: 'always', breakBefore: 'page' }}>
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left Column */}
          <div className="col-span-4 bg-[#f3f4f6] p-3.5 space-y-5 text-[7.5pt] leading-snug text-slate-800">
            <div>
              <h2 className="text-[8pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                {isDe ? 'BESONDERE STÄRKEN' : 'SPECIAL STRENGTHS'}
              </h2>
              <ul className="space-y-1 list-disc list-inside text-slate-700">
                <li>{isDe ? 'Analytisches und strukturiertes Denken' : 'Analytical and structured thinking'}</li>
                <li>{isDe ? 'Hohe Lern- und Weiterbildungsbereitschaft' : 'High willingness to learn and advance skills'}</li>
                <li>{isDe ? 'Technisches Verständnis und digitale Kompetenz' : 'Technical comprehension and digital competence'}</li>
                <li>{isDe ? 'Kunden- und lösungsorientierte Kommunikation' : 'Customer- and solution-driven communication'}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[8pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                {isDe ? 'PERSÖNLICHE WEITERBILDUNG' : 'PERSONAL FURTHER TRAINING'}
              </h2>
              <div className="space-y-2.5">
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

          {/* Right Column */}
          <div className="col-span-8 space-y-3.5 text-[7.5pt]">
            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Software-Entwickler | teampool Personal Service GmbH' : 'Software Developer | teampool Personal Service GmbH'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  04/2015 – 06/2017
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Datenbankentwicklung, Qualitätsbewusstsein, analytisches Denken.' : 'Database development, Quality awareness, Analytical thinking.'}
              </p>
            </div>

            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Junior Software-Entwickler | Porsche Informatik GmbH' : 'Junior Software Developer | Porsche Informatik GmbH'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  02/2012 – 01/2015
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Lösungsorientierung, Prozessverständnis, Systemintegration.' : 'Solution orientation, Process understanding, System integration.'}
              </p>
            </div>

            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Praktikant Kellner | Hotel-Restaurant Zistelalm' : 'Waitstaff Intern | Hotel-Restaurant Zistelalm'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  09/2010 – 01/2012
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Serviceorientierung, Teamarbeit, Deutschkenntnisse aufgebaut.' : 'Service orientation, Teamwork, German language acquisition.'}
              </p>
            </div>

            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Data Management Technician | Universitat de Lleida, Spanien' : 'Data Management Technician | Universitat de Lleida, Spain'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  02/2008 – 02/2010
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Datenanalyse, Reporting, Business Intelligence.' : 'Data analysis, Reporting, Business intelligence.'}
              </p>
            </div>

            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Junior Software-Entwickler | Fábrica de Mobles Ros S.A., Spanien' : 'Junior Software Developer | Fábrica de Mobles Ros S.A., Spain'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  05/2006 – 05/2007
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Softwareentwicklung, Datenmigration, Support, Flexibilität.' : 'Software development, Data migration, Support, Flexibility.'}
              </p>
            </div>

            <div className="border-b border-slate-200 pb-2">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>
                  {isDe ? 'Mitarbeiter Familienbetrieb | Foodtruck Churreria La Noguera, Spanien' : 'Family Business Staff Member | Foodtruck Churreria La Noguera, Spain'}
                </span>
                <span className="font-mono text-[7pt] text-slate-600 font-normal">
                  1997 – 2009
                </span>
              </div>
              <p className="text-[7pt] text-slate-600 mt-0.5">
                <strong>{isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> {isDe ? 'Kundenkontakt, Verantwortungsbewusstsein, Zuverlässigkeit.' : 'Customer relations, Sense of responsibility, Reliability.'}
              </p>
            </div>

            {/* AUSBILDUNG */}
            <div className="pt-2">
              <h2 className="text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 mb-1.5">
                {isDe ? 'AUSBILDUNG' : 'EDUCATION'}
              </h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe
                        ? 'Bachelor of Science in Wirtschaftsinformatik, Universitat de Lleida, Spanien'
                        : 'Bachelor of Science in Business Informatics, Universitat de Lleida, Spain'}
                    </span>
                    <span className="font-mono text-[7pt] text-slate-600 font-normal">
                      2000 – 2008
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      {isDe
                        ? 'Berufsbildende Schule für Wirtschaftsinformatik, Institut de Formació Professional Almatà (Spanien)'
                        : 'Vocational School for Business Informatics, Institut de Formació Professional Almatà (Spain)'}
                    </span>
                    <span className="font-mono text-[7pt] text-slate-600 font-normal">
                      1995 – 2000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
