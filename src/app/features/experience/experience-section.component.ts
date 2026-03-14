import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.less']
})
export class ExperienceSectionComponent {
  @Input() items: ExperienceItem[] = [];

  readonly pageSize = 3;
  activePage = 0;

  get pages(): ExperienceItem[][] {
    const chunks: ExperienceItem[][] = [];

    for (let index = 0; index < this.items.length; index += this.pageSize) {
      chunks.push(this.items.slice(index, index + this.pageSize));
    }

    return chunks;
  }

  get pageCount(): number {
    return this.pages.length;
  }

  onCarouselScroll(container: HTMLElement): void {
    const width = Math.max(container.clientWidth, 1);
    const page = Math.round(container.scrollLeft / width);
    this.activePage = Math.max(0, Math.min(page, this.pageCount - 1));
  }

  goToPage(index: number, container: HTMLElement): void {
    const page = Math.max(0, Math.min(index, this.pageCount - 1));
    this.activePage = page;
    container.scrollTo({
      left: page * container.clientWidth,
      behavior: 'smooth'
    });
  }
}
