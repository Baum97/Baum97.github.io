import { Lang } from '../core/i18n/translations';
import { GithubOverview } from '../shared/models/github.model';
import { PortfolioContent } from '../shared/models/portfolio-content.model';

export const PORTFOLIO_CONTENT_EN: PortfolioContent = {
  person: {
    name: 'Achim Baumgaertner',
    role: 'Software Engineer',
    intro: 'I build practical high quality software products with Angular, TypeScript, Java, Python, C# and clean architecture, with a focus on maintainability and measurable delivery impact.',
    location: 'Stuttgart Region, Germany • Open to relocation',
    availability: 'Open to software engineering opportunities',
    avatarPath: 'assets/img/Untitled.png',
    skills: ['React', 'JavaScript', 'Angular', 'TypeScript', 'Java', 'Python', 'C#', 'Spring Boot', 'REST APIs', 'CI/CD', 'Machine Learning', 'Deep Learning', 'Agentic Development'],
    hobbies: ['Strength training', 'Cycling', 'Bouldering', 'Gaming', 'Programming', 'Coffee'],
    facts: [
      'M.Sc. Applied Computer Science (2025-2026)',
      'B.Eng. & B.Sc. Software Engineering (2020-2024)',
      'German C2',
      'English C2',
      'Experience: Automotive, Research, Web, Desktop, FullStack, Data Science',
      'Passionate about software craftsmanship, a happy and productive team, and product-focused development'
    ]
  },
  projects: [
    {
      title: 'Traffic Flow Forecasting with Machine Learning',
      summary: 'WORK IN PROGRESS: Developing a machine learning model to predict individual traffic flow, utilizing Python for data processing and model training, and GitHub Actions for CI/CD automation.',
      tags: ['Machine Learning', 'Deep Learning', 'Python', 'GitHub Actions', 'Data Science', 'Data Engineering', 'CI/CD', 'Software Design', 'Scientific Research', 'Simulation'],
      repoUrl: 'https://github.com/Baum97/Forecasting_of_individual_traffic'
    },
    {
      title: 'Charging Station Distribution Simulation',
      summary: 'Built a traffic-aware simulation concept for charging station placement using SUMO, Python, XML, and machine learning methods.',
      tags: ['Python', 'Machine Learning', 'SUMO', 'XML', 'Data Analysis', 'Data Science', 'Simulation', 'Software Design', 'GitHub Actions', 'Scientific Research'],
      repoUrl: 'https://github.com/Baum97/Bidirectional-Charging-Stations'
    },
    {
      title: 'E-Vehicle Charging Station WebApp ',
      summary: 'Designed, delegated and developed a web application for locating and managing electric vehicle charging stations, featuring interactive maps and user-friendly interfaces. Lead a team of 4, coordinated development efforts, and implemented core features using Java, Spring Boot, TypeScript and Angular.',
      tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'GitHub Pages', 'Web Development', 'Software Design'],
      repoUrl: ''
    },
    {
      title: 'Role-Based Time Tracking System',
      summary: 'Implemented an electronic time tracking solution with role and permission management plus database integration.',
      tags: ['Java', 'JavaFX', 'MySQL', 'Software Design', 'FullStack', 'Desktop Application'],
      repoUrl: 'https://github.com/Baum97/timeMgmt'
    },
    {
      title: 'Library Management System',
      summary: 'Designed and implemented a library management system with user authentication, book inventory management, borrowing features and publication/removal functionality.',
      tags: ['Java', 'JavaFX', 'PostgreSQL', 'FullStack', 'Desktop Application']
    }
  ],
  experience: [
    {
      period: '06/2025 - 02/2026',
      title: 'Working Student - Software Engineer',
      company: 'Mercedes-Benz AG (Boeblingen)',
      description: 'Designed features for a full-stack application for digital vehicle testing, containerized application components, and automated build pipelines.',
      stack: ['React', 'TypeScript', 'JavaScript', 'Docker', 'CI/CD', 'GitHub Actions']
    },
    {
      period: '10/2024 - 04/2025',
      title: 'Software Engineer',
      company: 'Bosch (Bietigheim-Bissingen)',
      description: 'Designed and implemented a data management system, improved project efficiency, and refactored legacy Angular and database architecture.',
      stack: ['Angular', 'TypeScript', 'Database', 'Agile']
    },
    {
      period: '05/2023 - 04/2024',
      title: 'Intern - Software Engineer',
      company: 'Bosch (Stuttgart)',
      description: 'Built software for process standardization and material accounting, including user notifications and reporting workflows.',
      stack: ['C#', 'WPF', 'Power BI', 'Software Design']
    },
    {
      period: '01/2021 - 09/2022',
      title: 'Working Student - Software Engineer',
      company: 'Esslingen University of Applied Sciences',
      description: 'Prepared course material for programming lectures and supported research and development on CI/CD and framework evaluation.',
      stack: ['CI/CD', 'Software Architecture', 'Research']
    }
  ],
  contact: {
    email: 'baumgaertner997@gmx.de',
    githubUrl: 'https://github.com/Baum97',
    linkedinUrl: 'https://www.linkedin.com/in/achim-baumgärtner-087968240/',
    xingUrl: 'https://www.xing.com/profile/Achim_Baumgaertner2/',
    note: 'Open to software engineering collaboration and product-focused development opportunities.'
  }
};

export const PORTFOLIO_CONTENT_DE: PortfolioContent = {
  person: {
    name: 'Achim Baumgärtner',
    role: 'Software Engineer',
    intro: 'Entwicklung von praxistauglichen, hochwertigen Softwareprodukten mit Angular, TypeScript, Java, Python, C# und sauberer Architektur — mit Fokus auf Wartbarkeit und messbarem Lieferwert.',
    location: 'Region Stuttgart, Deutschland • Umzugsbereit',
    availability: 'Offen für Software-Engineering-Möglichkeiten',
    avatarPath: 'assets/img/Untitled.png',
    skills: ['React', 'JavaScript', 'Angular', 'TypeScript', 'Java', 'Python', 'C#', 'Spring Boot', 'REST APIs', 'CI/CD', 'Machine Learning', 'Deep Learning', 'Agentic Development'],
    hobbies: ['Krafttraining', 'Radfahren', 'Bouldern', 'Gaming', 'Programmieren', 'Kaffee'],
    facts: [
      'M.Sc. Angewandte Informatik (2025-2026)',
      'B.Eng. & B.Sc. Softwaretechnik (2020-2024)',
      'Deutsch C2',
      'Englisch C2',
      'Erfahrung: Automotive, Forschung, Web, Desktop, FullStack, Data Science',
      'Begeistert von Software-Handwerkskunst, einem zufriedenen und produktiven Team und produktorientierter Entwicklung'
    ]
  },
  projects: [
    {
      title: 'Verkehrsfluss-Prognose mit Machine Learning',
      summary: 'IN ARBEIT: Entwicklung eines Machine-Learning-Modells zur Prognose des individuellen Verkehrsflusses — Python für Datenverarbeitung und Modelltraining, GitHub Actions für CI/CD-Automatisierung.',
      tags: ['Machine Learning', 'Deep Learning', 'Python', 'GitHub Actions', 'Data Science', 'Data Engineering', 'CI/CD', 'Software-Design', 'Wissenschaftliche Forschung', 'Simulation'],
      repoUrl: 'https://github.com/Baum97/Forecasting_of_individual_traffic'
    },
    {
      title: 'Simulation zur Verteilung von Ladestationen',
      summary: 'Verkehrsbewusstes Simulationskonzept für die Platzierung von Ladestationen mit SUMO, Python, XML und Machine-Learning-Methoden.',
      tags: ['Python', 'Machine Learning', 'SUMO', 'XML', 'Datenanalyse', 'Data Science', 'Simulation', 'Software-Design', 'GitHub Actions', 'Wissenschaftliche Forschung'],
      repoUrl: 'https://github.com/Baum97/Bidirectional-Charging-Stations'
    },
    {
      title: 'E-Fahrzeug-Ladestationen WebApp',
      summary: 'Konzipiert, delegiert und entwickelt: eine Webanwendung zum Finden und Verwalten von E-Auto-Ladestationen mit interaktiven Karten und nutzerfreundlicher Oberfläche. Leitung eines 4er-Teams, Koordination der Entwicklung und Umsetzung der Kernfunktionen mit Java, Spring Boot, TypeScript und Angular.',
      tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'GitHub Pages', 'Webentwicklung', 'Software-Design'],
      repoUrl: ''
    },
    {
      title: 'Rollenbasiertes Zeiterfassungssystem',
      summary: 'Umsetzung einer elektronischen Zeiterfassung mit Rollen- und Berechtigungsverwaltung sowie Datenbankanbindung.',
      tags: ['Java', 'JavaFX', 'MySQL', 'Software-Design', 'FullStack', 'Desktop-Anwendung'],
      repoUrl: 'https://github.com/Baum97/timeMgmt'
    },
    {
      title: 'Bibliotheksverwaltungssystem',
      summary: 'Konzeption und Umsetzung eines Bibliotheksverwaltungssystems mit Benutzerauthentifizierung, Buchbestandsverwaltung, Ausleih- sowie Veröffentlichungs-/Entfernungsfunktionen.',
      tags: ['Java', 'JavaFX', 'PostgreSQL', 'FullStack', 'Desktop-Anwendung']
    }
  ],
  experience: [
    {
      period: '06/2025 - 02/2026',
      title: 'Werkstudent - Software Engineer',
      company: 'Mercedes-Benz AG (Böblingen)',
      description: 'Features für eine Full-Stack-Anwendung zur digitalen Fahrzeugerprobung konzipiert, Anwendungskomponenten containerisiert und Build-Pipelines automatisiert.',
      stack: ['React', 'TypeScript', 'JavaScript', 'Docker', 'CI/CD', 'GitHub Actions']
    },
    {
      period: '10/2024 - 04/2025',
      title: 'Software Engineer',
      company: 'Bosch (Bietigheim-Bissingen)',
      description: 'Datenverwaltungssystem konzipiert und umgesetzt, Projekteffizienz verbessert und Legacy-Angular- sowie Datenbankarchitektur refaktoriert.',
      stack: ['Angular', 'TypeScript', 'Datenbank', 'Agile']
    },
    {
      period: '05/2023 - 04/2024',
      title: 'Praktikant - Software Engineer',
      company: 'Bosch (Stuttgart)',
      description: 'Software für Prozessstandardisierung und Materialbuchhaltung entwickelt, inklusive Benutzerbenachrichtigungen und Reporting-Workflows.',
      stack: ['C#', 'WPF', 'Power BI', 'Software-Design']
    },
    {
      period: '01/2021 - 09/2022',
      title: 'Werkstudent - Software Engineer',
      company: 'Hochschule Esslingen',
      description: 'Vorlesungsmaterial für Programmierkurse vorbereitet und Forschung/Entwicklung zu CI/CD und Framework-Evaluation unterstützt.',
      stack: ['CI/CD', 'Softwarearchitektur', 'Forschung']
    }
  ],
  contact: {
    email: 'baumgaertner997@gmx.de',
    githubUrl: 'https://github.com/Baum97',
    linkedinUrl: 'https://www.linkedin.com/in/achim-baumgärtner-087968240/',
    xingUrl: 'https://www.xing.com/profile/Achim_Baumgaertner2/',
    note: 'Offen für Software-Engineering-Kooperationen und produktorientierte Entwicklungsmöglichkeiten.'
  }
};

export function getPortfolioContent(lang: Lang): PortfolioContent {
  return lang === 'de' ? PORTFOLIO_CONTENT_DE : PORTFOLIO_CONTENT_EN;
}

export const PORTFOLIO_CONTENT: PortfolioContent = PORTFOLIO_CONTENT_EN;

export const GITHUB_FALLBACK_OVERVIEW: GithubOverview = {
  profileName: 'Achim Baumgaertner',
  username: 'Baum97',
  followers: 0,
  publicRepos: 0,
  topRepos: [],
  source: 'fallback',
  lastUpdated: new Date().toISOString()
};
