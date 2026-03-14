import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ExperienceItem } from '../../shared/models/portfolio-content.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.less']
})
export class ExperienceSectionComponent {
  @Input()
  set items(value: ExperienceItem[]) {
    this.allItems = value ?? [];
    this.rebuildPages();
  }

  get items(): ExperienceItem[] {
    return this.allItems;
  }

  @ViewChild('carousel') carouselRef?: ElementRef<HTMLDivElement>;

  readonly pageSize = 2;
  activePage = 0;
  pagedItems: ExperienceItem[][] = [];

  private allItems: ExperienceItem[] = [];

  get pageCount(): number {
    return this.pagedItems.length;
  }

  onCarouselScroll(event: Event): void {
    const container = event.target as HTMLElement | null;
    if (!container) {
      return;
    }

    const width = Math.max(container.clientWidth, 1);
    const page = Math.round(container.scrollLeft / width);
    this.activePage = Math.max(0, Math.min(page, this.pageCount - 1));
  }

  goToPage(index: number): void {
    const container = this.carouselRef?.nativeElement;
    if (!container) {
      return;
    }

    const page = Math.max(0, Math.min(index, this.pageCount - 1));
    this.activePage = page;
    container.scrollTo({
      left: page * container.clientWidth,
      behavior: 'smooth'
    });
  }

  private rebuildPages(): void {
    const chunks: ExperienceItem[][] = [];

    for (let index = 0; index < this.allItems.length; index += this.pageSize) {
      chunks.push(this.allItems.slice(index, index + this.pageSize));
    }

    this.pagedItems = chunks;
    if (this.activePage >= this.pageCount) {
      this.activePage = Math.max(0, this.pageCount - 1);
    }
  }
}
