export interface GithubUser {
  login: string;
  name: string;
  followers: number;
  public_repos: number;
  avatar_url: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface GithubOverview {
  profileName: string;
  username: string;
  followers: number;
  publicRepos: number;
  topRepos: GithubRepo[];
  source: 'live' | 'fallback';
  lastUpdated: string;
}
