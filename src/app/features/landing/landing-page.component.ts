import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PORTFOLIO_CONTENT } from '../../content/portfolio-content';
import { GithubService } from '../../core/data/github.service';
import { GithubOverview } from '../../shared/models/github.model';
import { SectionId } from '../../shared/models/portfolio-content.model';
import { NavItem } from '../../shared/ui/dot-nav/dot-nav.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {
  readonly content = PORTFOLIO_CONTENT;
  readonly navItems: NavItem[] = [
    { id: 'person', label: 'Person' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection: SectionId = 'person';
  githubOverview: GithubOverview | null = null;

  constructor(private readonly githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .loadOverview({
        username: environment.github.username,
        repoLimit: environment.github.repoLimit,
        endpoint: environment.github.endpoint
      })
      .subscribe((overview) => {
        this.githubOverview = overview;
      });

    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  scrollToSection(sectionId: SectionId): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateActiveSection(): void {
    const currentScroll = window.scrollY + window.innerHeight * 0.35;

    this.navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) {
        return;
      }

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (currentScroll >= top && currentScroll < bottom) {
        this.activeSection = item.id;
      }
    });
  }
}
