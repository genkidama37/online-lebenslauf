import { cvData, Language } from '../data/cvData';
import { PROFILE_PHOTO_BASE64, PROFILE_PHOTO_URL } from '../data/photoBase64';

export function generatePrintableHtml(lang: Language, photoUrl?: string | null): string {
  const p = cvData.personal;
  const isDe = lang === 'de';
  const effectivePhoto = photoUrl || PROFILE_PHOTO_BASE64 || PROFILE_PHOTO_URL;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>Juan Carlos Sanchez Recio - ${isDe ? 'Lebenslauf' : 'Curriculum Vitae'}</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 15mm 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      font-size: 8.5pt;
      line-height: 1.4;
      max-width: 210mm;
      margin: 0 auto;
      padding: 10px;
    }
    .page {
      position: relative;
      background: #ffffff;
      page-break-after: always;
      break-after: page;
      min-height: 270mm;
    }
    .page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }
    .header {
      margin-bottom: 12px;
    }
    .header h1 {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #111827;
      line-height: 1.1;
    }
    .header p {
      font-size: 9.5pt;
      font-style: italic;
      color: #4b5563;
      margin-top: 2px;
    }
    .divider-line {
      width: 100%;
      height: 1.5px;
      background: #111827;
      margin: 10px 0 14px 0;
    }
    .grid {
      display: flex;
      gap: 18px;
    }
    .sidebar {
      flex: 0 0 33%;
      background: #f3f4f6;
      padding: 12px;
      font-size: 8pt;
      color: #1f2937;
    }
    .main-col {
      flex: 1;
    }
    .photo-slot {
      width: 100%;
      max-width: 130px;
      height: 150px;
      margin: 0 auto 14px auto;
      background: #1e293b;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border: 1px solid #cbd5e1;
    }
    .photo-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #312e81;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 14pt;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .sidebar-section {
      margin-bottom: 14px;
    }
    .sidebar-title {
      font-size: 8.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 6px;
      color: #111827;
    }
    .main-section {
      margin-bottom: 12px;
    }
    .main-title {
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #111827;
      padding-bottom: 2px;
      margin-bottom: 6px;
      color: #111827;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      color: #111827;
      margin-bottom: 2px;
    }
    .period {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-weight: 400;
      font-size: 7.5pt;
      color: #4b5563;
    }
    ul {
      padding-left: 14px;
      margin: 3px 0;
    }
    li {
      margin-bottom: 2px;
      font-size: 8pt;
    }
    .competencies {
      font-size: 7.5pt;
      color: #4b5563;
      margin-top: 3px;
    }
    .page-footer-num {
      text-align: right;
      font-size: 7pt;
      color: #9ca3af;
      margin-top: 10px;
    }
    .btn-bar {
      position: fixed;
      top: 12px;
      right: 12px;
      background: #4f46e5;
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      border: none;
      box-shadow: 0 4px 14px rgba(0,0,0,0.25);
      font-size: 13px;
      z-index: 999;
    }
    @media print {
      .btn-bar {
        display: none !important;
      }
      body {
        padding: 0;
      }
      .page {
        min-height: auto;
      }
    }
  </style>
</head>
<body>
  <button class="btn-bar" onclick="window.print()">${isDe ? 'Drucken / Als PDF speichern' : 'Print / Save as PDF'}</button>

  <!-- ================= PAGE 1 ================= -->
  <div class="page">
    <div class="header">
      <h1>Juan Carlos Sanchez Recio</h1>
      <p>Bachelor of Science</p>
      <div class="divider-line"></div>
    </div>

    <div class="grid">
      <!-- Left Column -->
      <div class="sidebar">
        <div class="photo-slot" style="overflow: hidden; border-radius: 2px;">
          <img src="${effectivePhoto}" style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;" alt="Juan Carlos Sanchez Recio" />
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isDe ? 'KONTAKT' : 'CONTACT'}</div>
          <p>${isDe ? 'Geboren am 21.10.1981 in' : 'Born on 21.10.1981 in'}<br><strong>Lérida (Spanien)</strong></p>
          <p style="margin-top: 4px;">Wildenhoferstrasse 1, Top 11<br>5020 Salzburg</p>
          <p style="margin-top: 4px; font-weight: 700;">0660 343 82 44</p>
          <p style="font-family: monospace; font-size: 7.5pt;">jsanchezrecio@gmail.com</p>
          <p style="font-family: monospace; font-size: 7.5pt;">github.com/genkidama37</p>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isDe ? 'SPRACHEN' : 'LANGUAGES'}</div>
          <p><strong>${isDe ? 'Spanisch und Katalanisch:' : 'Spanish and Catalan:'}</strong><br>${isDe ? 'Muttersprache.' : 'Native speaker.'}</p>
          <p style="margin-top: 5px;"><strong>${isDe ? 'Deutsch: B2,' : 'German: B2,'}</strong> ${isDe ? 'sicher im beruflichen und privaten Alltag, gute mündliche und schriftliche Kommunikationsfähigkeit.' : 'confident in professional and daily life, strong oral and written communication skills.'}</p>
          <p style="margin-top: 5px;"><strong>${isDe ? 'Englisch: B2,' : 'English: B2,'}</strong> ${isDe ? 'sicher im Umgang mit technischer Dokumentation, Fachliteratur und internationalen IT-Teams.' : 'confident with technical documentation, professional literature and international IT teams.'}</p>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isDe ? 'KERNKOMPETENZEN' : 'CORE COMPETENCIES'}</div>
          <ul>
            <li>${isDe ? 'Problemlösung' : 'Problem solving'}</li>
            <li>${isDe ? 'Teamarbeit' : 'Teamwork'}</li>
            <li>${isDe ? 'Anpassungsfähigkeit' : 'Adaptability'}</li>
            <li>${isDe ? 'Zuverlässigkeit' : 'Reliability'}</li>
            <li>${isDe ? 'Verantwortungsbewusstsein' : 'Sense of responsibility'}</li>
          </ul>
        </div>
      </div>

      <!-- Main Column -->
      <div class="main-col">
        <div class="main-section">
          <div class="main-title">${isDe ? 'PROFIL' : 'PROFILE'}</div>
          <p style="text-align: justify; font-size: 8.5pt;">
            ${isDe
              ? 'Ich bin IT-Fachkraft mit langjähriger Erfahrung in der Software- und Webentwicklung sowie einem fundierten Hintergrund in Wirtschaftsinformatik. Durch meine berufliche Neuorientierung und kontinuierliche Weiterbildung habe ich gelernt, technische Kompetenz, Lernbereitschaft und einen wertschätzenden Umgang mit Menschen erfolgreich zu verbinden.'
              : 'I am an IT professional with many years of experience in software and web development and a sound background in business informatics. Through my professional reorientation and continuous further training, I have learned to successfully combine technical competence, willingness to learn, and an appreciative approach to working with people.'}
          </p>
        </div>

        <div class="main-section">
          <div class="main-title">${isDe ? 'MEINE STÄRKEN' : 'MY STRENGTHS'}</div>
          <div style="margin-bottom: 6px;">
            <strong>${isDe ? 'Webentwicklung & Softwareentwicklung' : 'Web Development & Software Development'}</strong>
            <p>${isDe
              ? 'Mehr als 15 Jahre Erfahrung in der Entwicklung, Wartung und Optimierung von Softwarelösungen. Praxis in Webtechnologien wie Angular, TypeScript, Node.js, Express und SQL-Datenbanken.'
              : 'Over 15 years of experience in the development, maintenance, and optimization of software solutions. Hands-on practice in web technologies such as Angular, TypeScript, Node.js, Express, and SQL databases.'}</p>
          </div>
          <div style="margin-bottom: 6px;">
            <strong>${isDe ? 'Analyse- und Problemlösungskompetenz' : 'Analysis & Problem-Solving Competence'}</strong>
            <p>${isDe
              ? 'Erfahrung in der Fehleranalyse, Performanceoptimierung, Anforderungsaufnahme und Entwicklung bzw. Umsetzung technischer Lösungen. Strukturierte Arbeitsweise bei komplexen technischen Herausforderungen.'
              : 'Experience in root cause analysis, performance optimization, requirements gathering, and technical solution delivery. Structured approach to complex technical challenges.'}</p>
          </div>
          <div style="margin-bottom: 6px;">
            <strong>${isDe ? 'Kunden- und Serviceorientierung' : 'Customer & Service Orientation'}</strong>
            <p>${isDe
              ? 'Tätigkeit im Support sowie Erfahrungen in Gastronomie und Pädagogik. Sicherer Umgang mit unterschiedlichen Menschen, hohe Kommunikationsfähigkeit und lösungsorientiertes Handeln.'
              : 'Support experience as well as background in gastronomy and pedagogy. Confident interpersonal engagement with diverse people, high communication ability, and solution-driven mindset.'}</p>
          </div>
          <div style="margin-bottom: 6px;">
            <strong>${isDe ? 'Lernbereitschaft & Weiterentwicklung' : 'Willingness to Learn & Further Development'}</strong>
            <p>${isDe
              ? 'Kontinuierliche fachliche Weiterbildung, unter anderem in Clean Architecture, Unit Testing, Kompetenzanalyse und KI-gestützten Arbeitsmethoden. Offen für neue Aufgabenfelder und Technologien.'
              : 'Continuous professional training, including Clean Architecture, Unit Testing, competency analysis, and AI-assisted workflows. Receptive to new fields and emerging technologies.'}</p>
          </div>
        </div>

        <div class="main-section">
          <div class="main-title">${isDe ? 'BERUFSERFAHRUNG MIT KOMPETENZSCHWERPUNKTEN' : 'WORK EXPERIENCE WITH CORE COMPETENCIES'}</div>

          <div style="margin-bottom: 10px;">
            <div class="item-header">
              <span>${isDe ? 'Web-Entwickler | Frost Development GmbH, Salzburg' : 'Web Developer | Frost Development GmbH, Salzburg'}</span>
              <span class="period">09/2019 – 04/2025</span>
            </div>
            <ul>
              <li>${isDe ? 'Entwicklung und Wartung von Webanwendungen.' : 'Development and maintenance of web applications.'}</li>
              <li>${isDe ? 'Anforderungsmanagement und Support.' : 'Requirements management and support.'}</li>
              <li>${isDe ? 'Wissensmanagement und Dokumentation.' : 'Knowledge management and documentation.'}</li>
            </ul>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Webentwicklung, Anforderungsanalyse, Problemlösung, Teamarbeit.' : 'Web development, Requirements analysis, Problem solving, Teamwork.'}
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <div class="item-header">
              <span>${isDe ? 'Berufliche Neuorientierung, Salzburg' : 'Professional Reorientation, Salzburg'}</span>
              <span class="period">07/2017 – 03/2019</span>
            </div>
            <p style="font-size: 8pt; margin-top: 2px;">
              ${isDe
                ? 'Praktische Erfahrungen in den Bereichen Pädagogik und Gastronomie durch Tätigkeiten als Kindergartenhelfer, Praktikant in Kinderbetreuungseinrichtungen sowie im Servicebereich. Erweiterung sozialer, kommunikativer und organisatorischer Kompetenzen sowie bewusste Auseinandersetzung mit beruflichen Perspektiven und persönlicher Weiterentwicklung.'
                : 'Practical experience in the fields of pedagogy and gastronomy through roles as a kindergarten assistant, intern in childcare facilities, and in the service sector. Expansion of social, communicative, and organizational competencies as well as conscious engagement with professional perspectives and personal development.'}
            </p>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Lernbereitschaft, Anpassungsfähigkeit, Kommunikationsfähigkeit, Kundenorientierung, Sozialkompetenz, Verantwortungsbewusstsein.' : 'Willingness to learn, Adaptability, Communication skills, Customer orientation, Social competence, Sense of responsibility.'}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer-num">${isDe ? 'Seite 1 / 2' : 'Page 1 of 2'}</div>
  </div>

  <!-- ================= PAGE 2 ================= -->
  <div class="page" style="padding-top: 15px;">
    <div class="grid">
      <!-- Left Column -->
      <div class="sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">${isDe ? 'BESONDERE STÄRKEN' : 'SPECIAL STRENGTHS'}</div>
          <ul>
            <li>${isDe ? 'Analytisches und strukturiertes Denken' : 'Analytical and structured thinking'}</li>
            <li>${isDe ? 'Hohe Lern- und Weiterbildungsbereitschaft' : 'High willingness to learn and advance skills'}</li>
            <li>${isDe ? 'Technisches Verständnis und digitale Kompetenz' : 'Technical comprehension and digital competence'}</li>
            <li>${isDe ? 'Kunden- und lösungsorientierte Kommunikation' : 'Customer- and solution-driven communication'}</li>
          </ul>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isDe ? 'PERSÖNLICHE WEITERBILDUNG' : 'PERSONAL FURTHER TRAINING'}</div>
          <div style="margin-bottom: 8px;">
            <p><strong>• ${isDe ? 'Clownerie- und Improvisationstraining (2017–2019):' : 'Clowning and Improvisation Training (2017–2019):'}</strong></p>
            <p style="font-size: 7.5pt; color: #4b5563; margin-top: 2px;">
              ${isDe ? 'Förderung von Kommunikationsfähigkeit, Flexibilität, Kreativität und sicherem Auftreten.' : 'Cultivation of communication agility, flexibility, creativity, and confident stage presence.'}
            </p>
          </div>
          <div>
            <p><strong>• ${isDe ? 'MBSR-Achtsamkeitstraining (2021):' : 'MBSR Mindfulness Training (2021):'}</strong></p>
            <p style="font-size: 7.5pt; color: #4b5563; margin-top: 2px;">
              ${isDe ? 'Stärkung von Konzentrationsfähigkeit, Selbstorganisation, Belastbarkeit und konstruktivem Umgang mit Stress.' : 'Strengthening concentration, self-organization, mental resilience, and constructive stress management.'}
            </p>
          </div>
        </div>
      </div>

      <!-- Main Column -->
      <div class="main-col">
        <div class="main-section">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Software-Entwickler | teampool Personal Service GmbH' : 'Software Developer | teampool Personal Service GmbH'}</span>
              <span class="period">04/2015 – 06/2017</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Datenbankentwicklung, Qualitätsbewusstsein, analytisches Denken.' : 'Database development, Quality awareness, Analytical thinking.'}
            </div>
          </div>

          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Junior Software-Entwickler | Porsche Informatik GmbH' : 'Junior Software Developer | Porsche Informatik GmbH'}</span>
              <span class="period">02/2012 – 01/2015</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Lösungsorientierung, Prozessverständnis, Systemintegration.' : 'Solution orientation, Process understanding, System integration.'}
            </div>
          </div>

          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Praktikant Kellner | Hotel-Restaurant Zistelalm' : 'Waitstaff Intern | Hotel-Restaurant Zistelalm'}</span>
              <span class="period">09/2010 – 01/2012</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Serviceorientierung, Teamarbeit, Deutschkenntnisse aufgebaut.' : 'Service orientation, Teamwork, German language acquisition.'}
            </div>
          </div>

          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Data Management Technician | Universitat de Lleida, Spanien' : 'Data Management Technician | Universitat de Lleida, Spain'}</span>
              <span class="period">02/2008 – 02/2010</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Datenanalyse, Reporting, Business Intelligence.' : 'Data analysis, Reporting, Business intelligence.'}
            </div>
          </div>

          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Junior Software-Entwickler | Fábrica de Mobles Ros S.A., Spanien' : 'Junior Software Developer | Fábrica de Mobles Ros S.A., Spain'}</span>
              <span class="period">05/2006 – 05/2007</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Softwareentwicklung, Datenmigration, Support, Flexibilität.' : 'Software development, Data migration, Support, Flexibility.'}
            </div>
          </div>

          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-bottom: 6px;">
            <div class="item-header">
              <span>${isDe ? 'Mitarbeiter Familienbetrieb | Foodtruck Churreria La Noguera, Spanien' : 'Family Business Staff Member | Foodtruck Churreria La Noguera, Spain'}</span>
              <span class="period">1997 – 2009</span>
            </div>
            <div class="competencies">
              <strong>${isDe ? 'Kompetenzen:' : 'Competencies:'}</strong> ${isDe ? 'Kundenkontakt, Verantwortungsbewusstsein, Zuverlässigkeit.' : 'Customer relations, Sense of responsibility, Reliability.'}
            </div>
          </div>
        </div>

        <div class="main-section" style="margin-top: 14px;">
          <div class="main-title">${isDe ? 'AUSBILDUNG' : 'EDUCATION'}</div>
          <div style="margin-bottom: 8px;">
            <div class="item-header">
              <span>${isDe ? 'Bachelor of Science in Wirtschaftsinformatik, Universitat de Lleida, Spanien' : 'Bachelor of Science in Business Informatics, Universitat de Lleida, Spain'}</span>
              <span class="period">2000 – 2008</span>
            </div>
          </div>
          <div>
            <div class="item-header">
              <span>${isDe ? 'Berufsbildende Schule für Wirtschaftsinformatik, Institut de Formació Professional Almatà (Spanien)' : 'Vocational School for Business Informatics, Institut de Formació Professional Almatà (Spain)'}</span>
              <span class="period">1995 – 2000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer-num">${isDe ? 'Seite 2 / 2' : 'Page 2 of 2'}</div>
  </div>
</body>
</html>`;
}
