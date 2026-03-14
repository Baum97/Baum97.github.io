import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SectionId } from '../../models/portfolio-content.model';

export interface NavItem {
  id: SectionId;
  label: string;
}

@Component({
  selector: 'app-dot-nav',
  templateUrl: './dot-nav.component.html',
  styleUrls: ['./dot-nav.component.less']
})
export class DotNavComponent {
  @Input() items: NavItem[] = [];
  @Input() activeId: SectionId = 'hero';
  @Output() navigate = new EventEmitter<SectionId>();
}
