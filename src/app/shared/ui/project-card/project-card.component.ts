import { Component, Input } from '@angular/core';
import { ProjectContent } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.less']
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectContent;
}
