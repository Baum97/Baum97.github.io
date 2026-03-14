import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SectionId } from '../../models/portfolio-content.model';
import { NavItem } from '../dot-nav/dot-nav.component';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.less']
})
export class MobileNavComponent {
  @Input() items: NavItem[] = [];
  @Input() activeId: SectionId = 'person';
  @Output() navigate = new EventEmitter<SectionId>();
}
