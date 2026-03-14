import { GithubOverview } from '../shared/models/github.model';
import { PortfolioContent } from '../shared/models/portfolio-content.model';

export const PORTFOLIO_CONTENT: PortfolioContent = {
  person: {
    name: 'Sebastian Baum',
    role: 'Full Stack Developer',
    intro: 'I build practical products with Angular, clean architecture, and a strong focus on maintainable UI systems.',
    location: 'Germany',
    availability: 'Open to freelance and product collaborations',
    avatarPath: 'assets/img/Untitled.png',
    skills: ['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'RxJS', 'CSS Architecture'],
    hobbies: ['Road cycling', 'Photography', 'Gaming', 'Music production'],
    facts: ['Enjoys refactoring legacy systems', 'Balances design and technical depth', 'Strong fan of modular frontends']
  },
  projects: [
    {
      title: 'Portfolio Landing Architecture',
      summary: 'A modular one-page Angular setup with feature-first structure and reusable UI building blocks.',
      tags: ['Angular', 'LESS', 'GitHub Pages'],
      repoUrl: 'https://github.com/Baum97/Baum97.github.io'
    },
    {
      title: 'Content Driven Sections',
      summary: 'Section content modeled as structured data so text and ordering can evolve without rewriting templates.',
      tags: ['TypeScript', 'Architecture', 'DX'],
      repoUrl: 'https://github.com/Baum97/Baum97.github.io'
    },
    {
      title: 'Graceful GitHub Fallbacks',
      summary: 'Live profile and repository data with stable fallback rendering when API limits are hit.',
      tags: ['HTTP', 'RxJS', 'Resilience'],
      repoUrl: 'https://github.com/Baum97/Baum97.github.io'
    }
  ],
  experience: [
    {
      period: '2023 - Today',
      title: 'Frontend Engineer',
      company: 'Independent Projects',
      description: 'Designing and delivering maintainable Angular applications with a focus on architecture and UX consistency.',
      stack: ['Angular', 'TypeScript', 'Jasmine', 'Karma']
    },
    {
      period: '2021 - 2023',
      title: 'Software Developer',
      company: 'Product Teams',
      description: 'Implemented feature modules, API integrations, and internal tooling to accelerate product delivery.',
      stack: ['Node.js', 'REST', 'SQL', 'CI/CD']
    }
  ],
  contact: {
    email: 'hello@example.dev',
    githubUrl: 'https://github.com/Baum97',
    linkedinUrl: 'https://www.linkedin.com/',
    note: 'If you have an ambitious idea, I am happy to discuss a focused implementation plan.'
  }
};

export const GITHUB_FALLBACK_OVERVIEW: GithubOverview = {
  profileName: 'Sebastian Baum',
  username: 'Baum97',
  followers: 0,
  publicRepos: 0,
  topRepos: [],
  source: 'fallback',
  lastUpdated: new Date().toISOString()
};
