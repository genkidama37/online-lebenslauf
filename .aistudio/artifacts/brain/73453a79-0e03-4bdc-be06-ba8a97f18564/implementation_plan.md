# Juan Carlos Sanchez Recio — Web- & Software-Entwickler (CV Portfolio)

Ein moderner, zweisprachiger (DE/EN) und vollständig responsiver Online-Lebenslauf für Juan Carlos Sanchez Recio (Bachelor of Science in Wirtschaftsinformatik, 15+ Jahre Web- und Softwareentwicklung). Die Webseite ist von Grund auf für alle Bildschirmgrößen – vom Smartphone über Tablets bis zum Desktop – optimiert und präsentiert das Profil als **Web- und Software-Entwickler** (bewusst nicht als "Software Engineer").

## User Review & Critical Decisions

> [!IMPORTANT]
> Berücksichtigte Rückmeldungen und Anpassungen aus der Überarbeitung:

- **Berufsbezeichnung angepasst**: Konsequente Verwendung von **Web- & Software-Entwickler** (Deutsch) bzw. **Software Developer** (Englisch) anstelle von "Software Engineer", passend zu Ihrer genauen beruflichen Identität und Ihrem CV.
- **Vollständige Mobile- & Tablet-Responsivität**:
  - **Mobile Touch-Navigation**: Barrierearme, touch-optimierte Navigation mit mind. 44px Touch-Zielen, kompaktem Hamburger-Menü und Schnellzugriff auf Sprachwechsel (DE/EN) sowie Kontaktmöglichkeiten.
  - **Flüssige Typografie & Spacing**: Lesbare Schriftgrößen auf Smartphones ohne horizontales Scrollen oder Textumbrüche, `clamp()`-Skalierung für Überschriften.
  - **Adaptive Timeline**: Auf Smartphones einspaltige, vertikal geführte Meilenstein-Karten; auf Tablets und Desktops eine übersichtliche, rhythmische Chronologie.
- **Kompakte One-Page-Struktur**: Direkte Erreichbarkeit aller Stationen (Profil, Stärken, Timeline, Ausbildung, Kontakt, Drucken/vCard) ohne überladene Filter.

---

## 1. Overview & Core Concept

- **Was die Webseite bietet**:
  - **Hero-Bereich mit Fokus**: Juan Carlos Sanchez Recio, *Web- und Software-Entwickler | B.Sc. Wirtschaftsinformatik*, Standort Salzburg, Direktkontakt (E-Mail, GitHub, Telefon) und Direktdownload (vCard & Druckansicht).
  - **Profil & Stärken**: Betont 15+ Jahre Praxiserfahrung in Webtechnologien (Angular, TypeScript, Node.js, Express, SQL) kombiniert mit analytischem Denken, hoher Lernbereitschaft und sozialer Kompetenz.
  - **Chronologischer Werdegang**:
    - *Frost Development GmbH* (09/2019 – 04/2025): Web-Entwickler
    - *Berufliche Neuorientierung, Salzburg* (07/2017 – 03/2019): Kindergartenhelfer & Servicebereich
    - *teampool Personal Service GmbH* (04/2015 – 06/2017): Software-Entwickler
    - *Porsche Informatik GmbH* (02/2012 – 01/2015): Junior Software-Entwickler
    - *Hotel-Restaurant Zistelalm* (09/2010 – 01/2012): Praktikant Kellner
    - *Universitat de Lleida* (02/2008 – 02/2010): Data Management Technician
    - *Fábrica de Mobles Ros S.A.* (05/2006 – 05/2007): Junior Software-Entwickler
    - *Churreria La Noguera* (1997 – 2009): Mitarbeiter Familienbetrieb
  - **Ausbildung & Persönliche Weiterbildung**:
    - Bachelor of Science in Wirtschaftsinformatik (Universitat de Lleida)
    - Berufsbildende Schule für Wirtschaftsinformatik (Institut de Formació Professional Almatà)
    - Clownerie- und Improvisationstraining (2017–2019)
    - MBSR-Achtsamkeitstraining (2021)
  - **Sprachen**: Spanisch & Katalanisch (Muttersprachen), Deutsch (B2, beruflich sicher), Englisch (B2, Fachliteratur & internationale Teams).

---

## 2. User Experience & Visual Design (Responsive Architecture)

### Breakpoint-Strategie
- **Mobile (< 640px / Smartphones)**:
  - Header mit maximal 56px Höhe (unter 15% Viewport-Höhe).
  - Ausklappbares Navigationsmenü mit großen Touch-Zielen (mind. 44px).
  - Einspaltige Karten für Timeline und Kompetenzen, optimierte Zeilenabstände (`leading-relaxed`) und 16px Grundtext.
  - Floating Quick-Actions (Sprachwechsel `DE/EN`, Anrufen, E-Mail schreiben, Drucken).
- **Tablet (640px – 1024px)**:
  - 2-spaltige Anordnung für Ausbildung & Weiterbildung sowie Stärken.
  - Erweiterte Timeline mit Firmenlogo-Indikatoren und Kompetenz-Tags.
- **Desktop (>= 1024px)**:
  - Vollständiger 3-Zonen Top Bar Contract (Wordmark — Navigation — Sprache & Kontakt).
  - Maximale Containerbreite von 1140px mit zentrierter, augenfreundlicher Ausrichtung.

### Visuelles Farbsystem (60-30-10)
- **60% Neutral Canvas**: Dunkles Schiefergrau (`#090d16` / `slate-950`) für modernen Tech-Look mit sanftem Light-Mode-Support (`#f8fafc`).
- **30% Strukturelle Flächen**: Edle Hairline-Rahmen (`border-slate-800/80`), dezent abgesetzte Kartenoberflächen (`bg-slate-900/60`).
- **10% Akzentfarben**: Technisches Indigo (`#6366F1`) und Cyan (`#06B6D4`) für Timeline-Knoten, aktive Navigation und Schaltflächen.
- **Zero-Pill-Disziplin**: Metadaten (Zeiträume, Standorte, Rollen) als unboxter Text mit typografischen Trennern (`·` oder `/`).

---

## 3. Key Product Decisions & Trade-Offs

- **Berufsbezeichnung**: Einheitlich "Web- und Software-Entwickler" (DE) / "Software Developer" (EN), exakt entsprechend Ihrem Wunsch.
- **Zweisprachige Reaktivität**: Vollständiges Sprachwörterbuch (DE/EN) im State, sodass der Wechsel ohne Seiten-Reload instantan erfolgt.
- **Druck- & PDF-Unterstützung**: Spezielles `@media print`-Stylesheet, das Navigation und interaktive Buttons ausblendet und den Lebenslauf in ein elegantes, druckfertiges 2-Seiten-Format bringt.
- **vCard-Export**: Funktionierender `.vcf`-Downloadbutton, mit dem Personalverantwortliche sofort alle Kontaktdaten abspeichern können.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│   (Sprach-State DE/EN, Responsive Navigation State)    │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
┌───────────▼───────────┐        ┌───────────▼───────────┐
│     TopBar.tsx        │        │      HeroSection      │
│ (Brand, Desktop Nav,  │        │ (Developer Bio, Badges│
│  Mobile Drawer, Lang) │        │  vCard, Quick Links)  │
└───────────────────────┘        └───────────────────────┘
            │                                │
┌───────────▼───────────┐        ┌───────────▼───────────┐
│   StrengthsSection    │        │   ExperienceTimeline  │
│(Webentwicklung, Soft- │        │(Chronologische Karten │
│ skills, Analyse, Tech)│        │ 1-spaltig/2-spaltig)  │
└───────────────────────┘        └───────────────────────┘
            │                                │
┌───────────▼───────────┐        ┌───────────▼───────────┐
│   EducationSection    │        │     ContactSection    │
│(B.Sc., Weiterbildung, │        │(Kontaktform/Direktlink│
│ MBSR, Clownerie, Lang)│        │ vCard-Download, Print)│
└───────────────────────┘        └───────────────────────┘
```
