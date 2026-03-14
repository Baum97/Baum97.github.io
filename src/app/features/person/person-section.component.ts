import { Component, Input } from '@angular/core';
import { GithubOverview } from '../../shared/models/github.model';
import { PersonContent } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-person-section',
  templateUrl: './person-section.component.html',
  styleUrls: ['./person-section.component.less']
})
export class PersonSectionComponent {
  @Input({ required: true }) person!: PersonContent;
  @Input() githubOverview: GithubOverview | null = null;
}
