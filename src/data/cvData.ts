export type Language = 'de' | 'en';

export interface PersonalInfo {
  name: string;
  degree: string;
  title: Record<Language, string>;
  birthDate: Record<Language, string>;
  location: Record<Language, string>;
  address: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  github: string;
  githubUrl: string;
  profileText: Record<Language, string>;
}

export interface StrengthItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface WorkExperience {
  id: string;
  role: Record<Language, string>;
  company: string;
  location?: string;
  period: string;
  category: 'dev' | 'transition' | 'student';
  highlights?: Record<Language, string[]>;
  description?: Record<Language, string>;
  competencies: Record<Language, string[]>;
}

export interface EducationItem {
  id: string;
  degree: Record<Language, string>;
  institution: string;
  location: string;
  period: string;
}

export interface FurtherTrainingItem {
  id: string;
  title: Record<Language, string>;
  period: string;
  focus: Record<Language, string>;
}

export interface LanguageSkill {
  id: string;
  name: Record<Language, string>;
  level: Record<Language, string>;
  description: Record<Language, string>;
  badge: string;
}

export const cvData: {
  personal: PersonalInfo;
  coreCompetencies: Record<Language, string[]>;
  specialStrengths: Record<Language, string[]>;
  strengths: StrengthItem[];
  experiences: WorkExperience[];
  education: EducationItem[];
  trainings: FurtherTrainingItem[];
  languages: LanguageSkill[];
} = {
  personal: {
    name: 'Juan Carlos Sanchez Recio',
    degree: 'Bachelor of Science in Wirtschaftsinformatik',
    title: {
      de: 'Web- & Software-Entwickler',
      en: 'Web & Software Developer',
    },
    birthDate: {
      de: 'Geboren am 21.10.1981 in Lérida (Spanien)',
      en: 'Born on 21.10.1981 in Lleida (Spain)',
    },
    location: {
      de: '5020 Salzburg, Österreich',
      en: '5020 Salzburg, Austria',
    },
    address: 'Wildenhoferstrasse 1, Top 11',
    city: '5020 Salzburg',
    phone: '+436603438244',
    phoneDisplay: '0660 343 82 44',
    email: 'jsanchezrecio@gmail.com',
    github: 'github.com/genkidama37',
    githubUrl: 'https://github.com/genkidama37',
    profileText: {
      de: 'Ich bin IT-Fachkraft mit langjähriger Erfahrung in der Software- und Webentwicklung sowie einem fundierten Hintergrund in Wirtschaftsinformatik. Durch meine berufliche Neuorientierung und kontinuierliche Weiterbildung habe ich gelernt, technische Kompetenz, Lernbereitschaft und einen wertschätzenden Umgang mit Menschen erfolgreich zu verbinden.',
      en: 'I am an IT professional with many years of experience in software and web development and a sound background in business informatics. Through my professional reorientation and continuous further training, I have learned to successfully combine technical competence, willingness to learn, and an appreciative approach to working with people.',
    },
  },

  coreCompetencies: {
    de: [
      'Problemlösung',
      'Teamarbeit',
      'Anpassungsfähigkeit',
      'Zuverlässigkeit',
      'Verantwortungsbewusstsein',
    ],
    en: [
      'Problem Solving',
      'Teamwork',
      'Adaptability',
      'Reliability',
      'Sense of Responsibility',
    ],
  },

  specialStrengths: {
    de: [
      'Analytisches und strukturiertes Denken',
      'Hohe Lern- und Weiterbildungsbereitschaft',
      'Technisches Verständnis und digitale Kompetenz',
      'Kunden- und lösungsorientierte Kommunikation',
    ],
    en: [
      'Analytical and structured thinking',
      'High willingness to learn and advance skills',
      'Technical comprehension and digital competence',
      'Customer- and solution-driven communication',
    ],
  },

  strengths: [
    {
      id: 'web-dev',
      title: {
        de: 'Webentwicklung & Softwareentwicklung',
        en: 'Web Development & Software Development',
      },
      description: {
        de: 'Mehr als 15 Jahre Erfahrung in der Entwicklung, Wartung und Optimierung von Softwarelösungen. Praxis in Webtechnologien wie Angular, TypeScript, Node.js, Express und SQL-Datenbanken.',
        en: 'Over 15 years of experience in the development, maintenance, and optimization of software solutions. Hands-on practice in web technologies such as Angular, TypeScript, Node.js, Express, and SQL databases.',
      },
    },
    {
      id: 'problem-solving',
      title: {
        de: 'Analyse- und Problemlösungskompetenz',
        en: 'Analysis & Problem-Solving Competence',
      },
      description: {
        de: 'Erfahrung in der Fehleranalyse, Performanceoptimierung, Anforderungsaufnahme und Entwicklung bzw. Umsetzung technischer Lösungen. Strukturierte Arbeitsweise bei komplexen technischen Herausforderungen.',
        en: 'Experience in root cause analysis, performance optimization, requirements gathering, and technical solution delivery. Structured approach to complex technical challenges.',
      },
    },
    {
      id: 'customer-service',
      title: {
        de: 'Kunden- und Serviceorientierung',
        en: 'Customer & Service Orientation',
      },
      description: {
        de: 'Tätigkeit im Support sowie Erfahrungen in Gastronomie und Pädagogik. Sicherer Umgang mit unterschiedlichen Menschen, hohe Kommunikationsfähigkeit und lösungsorientiertes Handeln.',
        en: 'Support experience as well as background in gastronomy and pedagogy. Confident interpersonal engagement with diverse people, high communication ability, and solution-driven mindset.',
      },
    },
    {
      id: 'learning',
      title: {
        de: 'Lernbereitschaft & Weiterentwicklung',
        en: 'Willingness to Learn & Further Development',
      },
      description: {
        de: 'Kontinuierliche fachliche Weiterbildung, unter anderem in Clean Architecture, Unit Testing, Kompetenzanalyse und KI-gestützten Arbeitsmethoden. Offen für neue Aufgabenfelder und Technologien.',
        en: 'Continuous professional training, including Clean Architecture, Unit Testing, competency analysis, and AI-assisted workflows. Receptive to new fields and emerging technologies.',
      },
    },
  ],

  experiences: [
    {
      id: 'frost-dev',
      role: {
        de: 'Web-Entwickler',
        en: 'Web Developer',
      },
      company: 'Frost Development GmbH, Salzburg',
      period: '09/2019 – 04/2025',
      category: 'dev',
      highlights: {
        de: [
          'Entwicklung und Wartung von Webanwendungen.',
          'Anforderungsmanagement und Support.',
          'Wissensmanagement und Dokumentation.',
        ],
        en: [
          'Development and maintenance of web applications.',
          'Requirements management and support.',
          'Knowledge management and documentation.',
        ],
      },
      competencies: {
        de: ['Webentwicklung', 'Anforderungsanalyse', 'Problemlösung', 'Teamarbeit'],
        en: ['Web Development', 'Requirements Analysis', 'Problem Solving', 'Teamwork'],
      },
    },
    {
      id: 'reorientation',
      role: {
        de: 'Berufliche Neuorientierung',
        en: 'Professional Reorientation',
      },
      company: 'Salzburg',
      period: '07/2017 – 03/2019',
      category: 'transition',
      description: {
        de: 'Praktische Erfahrungen in den Bereichen Pädagogik und Gastronomie durch Tätigkeiten als Kindergartenhelfer, Praktikant in Kinderbetreuungseinrichtungen sowie im Servicebereich. Erweiterung sozialer, kommunikativer und organisatorischer Kompetenzen sowie bewusste Auseinandersetzung mit beruflichen Perspektiven und persönlicher Weiterentwicklung.',
        en: 'Practical experience in the fields of pedagogy and gastronomy through roles as a kindergarten assistant, intern in childcare facilities, and in the service sector. Expansion of social, communicative, and organizational competencies as well as conscious engagement with professional perspectives and personal development.',
      },
      competencies: {
        de: [
          'Lernbereitschaft',
          'Anpassungsfähigkeit',
          'Kommunikationsfähigkeit',
          'Kundenorientierung',
          'Sozialkompetenz',
          'Verantwortungsbewusstsein',
        ],
        en: [
          'Willingness to learn',
          'Adaptability',
          'Communication skills',
          'Customer orientation',
          'Social competence',
          'Sense of responsibility',
        ],
      },
    },
    {
      id: 'teampool',
      role: {
        de: 'Software-Entwickler',
        en: 'Software Developer',
      },
      company: 'teampool Personal Service GmbH',
      period: '04/2015 – 06/2017',
      category: 'dev',
      competencies: {
        de: ['Datenbankentwicklung', 'Qualitätsbewusstsein', 'analytisches Denken'],
        en: ['Database Development', 'Quality Awareness', 'Analytical Thinking'],
      },
    },
    {
      id: 'porsche-inf',
      role: {
        de: 'Junior Software-Entwickler',
        en: 'Junior Software Developer',
      },
      company: 'Porsche Informatik GmbH',
      period: '02/2012 – 01/2015',
      category: 'dev',
      competencies: {
        de: ['Lösungsorientierung', 'Prozessverständnis', 'Systemintegration'],
        en: ['Solution Orientation', 'Process Understanding', 'System Integration'],
      },
    },
    {
      id: 'zistelalm',
      role: {
        de: 'Praktikant Kellner',
        en: 'Waitstaff Intern',
      },
      company: 'Hotel-Restaurant Zistelalm',
      period: '09/2010 – 01/2012',
      category: 'transition',
      competencies: {
        de: ['Serviceorientierung', 'Teamarbeit', 'Deutschkenntnisse aufgebaut'],
        en: ['Service Orientation', 'Teamwork', 'German Language Acquisition'],
      },
    },
    {
      id: 'uni-lleida',
      role: {
        de: 'Data Management Technician',
        en: 'Data Management Technician',
      },
      company: 'Universitat de Lleida, Spanien',
      period: '02/2008 – 02/2010',
      category: 'dev',
      competencies: {
        de: ['Datenanalyse', 'Reporting', 'Business Intelligence'],
        en: ['Data Analysis', 'Reporting', 'Business Intelligence'],
      },
    },
    {
      id: 'mobles-ros',
      role: {
        de: 'Junior Software-Entwickler',
        en: 'Junior Software Developer',
      },
      company: 'Fábrica de Mobles Ros S.A., Spanien',
      period: '05/2006 – 05/2007',
      category: 'dev',
      competencies: {
        de: ['Softwareentwicklung', 'Datenmigration', 'Support', 'Flexibilität'],
        en: ['Software Development', 'Data Migration', 'Support', 'Flexibility'],
      },
    },
    {
      id: 'churreria',
      role: {
        de: 'Mitarbeiter Familienbetrieb',
        en: 'Family Business Staff Member',
      },
      company: 'Foodtruck Churreria La Noguera, Spanien',
      period: '1997 – 2009',
      category: 'student',
      competencies: {
        de: ['Kundenkontakt', 'Verantwortungsbewusstsein', 'Zuverlässigkeit'],
        en: ['Customer Contact', 'Sense of Responsibility', 'Reliability'],
      },
    },
  ],

  education: [
    {
      id: 'bsc',
      degree: {
        de: 'Bachelor of Science in Wirtschaftsinformatik',
        en: 'Bachelor of Science in Business Informatics',
      },
      institution: 'Universitat de Lleida',
      location: 'Spanien',
      period: '2000 – 2008',
    },
    {
      id: 'berufsbildend',
      degree: {
        de: 'Berufsbildende Schule für Wirtschaftsinformatik',
        en: 'Vocational School for Business Informatics',
      },
      institution: 'Institut de Formació Professional Almatà',
      location: 'Spanien',
      period: '1995 – 2000',
    },
  ],

  trainings: [
    {
      id: 'clownerie',
      title: {
        de: 'Clownerie- und Improvisationstraining',
        en: 'Clowning and Improvisation Training',
      },
      period: '2017 – 2019',
      focus: {
        de: 'Förderung von Kommunikationsfähigkeit, Flexibilität, Kreativität und sicherem Auftreten.',
        en: 'Cultivation of communication agility, flexibility, creativity, and confident stage presence.',
      },
    },
    {
      id: 'mbsr',
      title: {
        de: 'MBSR-Achtsamkeitstraining',
        en: 'MBSR Mindfulness Training',
      },
      period: '2021',
      focus: {
        de: 'Stärkung von Konzentrationsfähigkeit, Selbstorganisation, Belastbarkeit und konstruktivem Umgang mit Stress.',
        en: 'Strengthening concentration, self-organization, mental resilience, and constructive stress management.',
      },
    },
  ],

  languages: [
    {
      id: 'es-ca',
      name: {
        de: 'Spanisch und Katalanisch',
        en: 'Spanish and Catalan',
      },
      level: {
        de: 'Muttersprache',
        en: 'Native language',
      },
      description: {
        de: 'Muttersprache.',
        en: 'Native speaker.',
      },
      badge: 'Muttersprache',
    },
    {
      id: 'de',
      name: {
        de: 'Deutsch',
        en: 'German',
      },
      level: {
        de: 'B2',
        en: 'B2',
      },
      description: {
        de: 'sicher im beruflichen und privaten Alltag, gute mündliche und schriftliche Kommunikationsfähigkeit.',
        en: 'confident in professional and personal daily life, strong oral and written communication skills.',
      },
      badge: 'B2',
    },
    {
      id: 'en',
      name: {
        de: 'Englisch',
        en: 'English',
      },
      level: {
        de: 'B2',
        en: 'B2',
      },
      description: {
        de: 'sicher im Umgang mit technischer Dokumentation, Fachliteratur und internationalen IT-Teams.',
        en: 'confident with technical documentation, professional literature and international IT teams.',
      },
      badge: 'B2',
    },
  ],
};

/**
 * Generates a standard vCard (.vcf) formatted string for Juan Carlos Sanchez Recio
 */
export function generateVCardString(): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Sanchez Recio;Juan Carlos;;;',
    'FN:Juan Carlos Sanchez Recio',
    'TITLE:Web- & Software-Entwickler',
    'ORG:Frost Development GmbH',
    'EMAIL;type=INTERNET;type=HOME;type=pref:jsanchezrecio@gmail.com',
    'TEL;type=CELL;type=VOICE;type=pref:+436603438244',
    'ADR;type=HOME:;;Wildenhoferstrasse 1\\, Top 11;Salzburg;;5020;Austria',
    'URL:https://github.com/genkidama37',
    'NOTE:Bachelor of Science in Wirtschaftsinformatik. Web- und Softwareentwicklung.',
    'END:VCARD',
  ].join('\r\n');
}
