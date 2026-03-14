import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.less']
})
export class SectionWrapperComponent {
  @Input() id = '';
  @Input() title = '';
  @Input() kicker = '';
}
