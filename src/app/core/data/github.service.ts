import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { GITHUB_FALLBACK_OVERVIEW } from '../../content/portfolio-content';
import { GithubOverview, GithubRepo, GithubUser } from '../../shared/models/github.model';

export interface GithubConfig {
  username: string;
  repoLimit: number;
  endpoint: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private readonly http: HttpClient) {}

  loadOverview(config: GithubConfig): Observable<GithubOverview> {
    const userUrl = `${config.endpoint}/users/${config.username}`;
    const reposUrl = `${config.endpoint}/users/${config.username}/repos?sort=updated&per_page=${config.repoLimit}`;

    return forkJoin({
      user: this.http.get<GithubUser>(userUrl),
      repos: this.http.get<GithubRepo[]>(reposUrl)
    }).pipe(
      map(({ user, repos }) => ({
        profileName: user.name || user.login,
        username: user.login,
        followers: user.followers,
        publicRepos: user.public_repos,
        topRepos: repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, config.repoLimit),
        source: 'live' as const,
        lastUpdated: new Date().toISOString()
      })),
      catchError(() => of({ ...GITHUB_FALLBACK_OVERVIEW, username: config.username }))
    );
  }
}
