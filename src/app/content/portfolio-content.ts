import { GithubOverview } from '../shared/models/github.model';
import { PortfolioContent } from '../shared/models/portfolio-content.model';

export const PORTFOLIO_CONTENT: PortfolioContent = {
  person: {
    name: 'Achim Baumgaertner',
    role: 'Software Engineer',
    intro: 'I build practical high quality software products with Angular, TypeScript, Java, Python, C# and clean architecture, with a focus on maintainability and measurable delivery impact.',
    location: 'Stuttgart Region, Germany',
    availability: 'Open to software engineering opportunities',
    avatarPath: 'assets/img/Untitled.png',
    skills: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'REST APIs', 'CI/CD', 'Python', 'Machine Learning'],
    hobbies: ['Strength training', 'Cycling', 'Bouldering', 'Gaming', 'Programming'],
    facts: ['M.Sc. Applied Computer Science', 'German C2 and English C2', 'Experience in automotive and enterprise software projects']
  },
  projects: [
    {
      title: 'Traffic Flow Forecasting with LSTM',
      summary: 'Through',
      tags: ['Machine Learning', 'Deep Learning', 'Python', 'GitHub Actions', 'Data Science', 'Data Engineering', 'CI/CD', 'Software Design', 'Scientific Research', 'Simulation'],
      repoUrl: 'https://github.com/Baum97/Forecasting_of_individual_traffic'
    },
    {
      title: 'Charging Station Distribution Simulation',
      summary: 'Built a traffic-aware simulation concept for charging station placement using SUMO, Python, XML, and machine learning methods.',
      tags: ['Python', 'Machine Learning', 'SUMO', 'XML', 'Data Analysis', 'Simulation', 'Software Design', 'GitHub Actions', 'Scientific Research'],
      repoUrl: 'https://github.com/Baum97/Bidirectional-Charging-Stations'
    },
    {
      title: 'Role-Based Time Tracking System',
      summary: 'Implemented an electronic time tracking solution with role and permission management plus database integration.',
      tags: ['Java', 'JavaFX', 'Database', 'Software Design', 'FullStack', 'Desktop Application'],
      repoUrl: 'https://github.com/Baum97/timeMgmt'
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

export const GITHUB_FALLBACK_OVERVIEW: GithubOverview = {
  profileName: 'Achim Baumgaertner',
  username: 'Baum97',
  followers: 0,
  publicRepos: 0,
  topRepos: [],
  source: 'fallback',
  lastUpdated: new Date().toISOString()
};
