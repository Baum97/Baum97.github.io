export type SectionId = 'person' | 'projects' | 'experience' | 'contact';

export interface PersonContent {
  name: string;
  role: string;
  intro: string;
  location: string;
  availability: string;
  avatarPath: string;
  skills: string[];
  hobbies: string[];
  facts: string[];
}

export interface ProjectContent {
  title: string;
  summary: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  stack: string[];
}

export interface ContactContent {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  note: string;
}

export interface PortfolioContent {
  person: PersonContent;
  projects: ProjectContent[];
  experience: ExperienceItem[];
  contact: ContactContent;
}
