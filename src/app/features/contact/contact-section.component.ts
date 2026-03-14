import { Component, Input } from '@angular/core';
import { ContactContent } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.less']
})
export class ContactSectionComponent {
  @Input({ required: true }) content!: ContactContent;
}
