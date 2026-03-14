import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-chip',
  templateUrl: './skill-chip.component.html',
  styleUrls: ['./skill-chip.component.less']
})
export class SkillChipComponent {
  @Input() label = '';
}
