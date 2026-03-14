import { Component, Input } from '@angular/core';
import { GithubOverview } from '../../shared/models/github.model';
import { ProjectContent } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.less']
})
export class ProjectsSectionComponent {
  @Input() projects: ProjectContent[] = [];
  @Input() githubOverview: GithubOverview | null = null;
}
