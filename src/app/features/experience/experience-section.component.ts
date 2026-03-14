import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.less']
})
export class ExperienceSectionComponent {
  @Input() items: ExperienceItem[] = [];
}
