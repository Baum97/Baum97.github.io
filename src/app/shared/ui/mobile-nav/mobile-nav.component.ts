import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { SectionId } from '../../models/portfolio-content.model';
import { NavItem } from '../dot-nav/dot-nav.component';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.less']
})
export class MobileNavComponent implements AfterViewInit, OnDestroy {
  @Input() items: NavItem[] = [];
  @Input() activeId: SectionId = 'person';
  @Output() navigate = new EventEmitter<SectionId>();

  isHidden = false;

  private lastScrollTop = 0;
  private scrollDownBudget = 0;
  private scrollUpBudget = 0;
  private readonly hideThreshold = 110;
  private readonly showThreshold = 42;

  ngAfterViewInit(): void {
    this.lastScrollTop = this.readScrollTop(window);
  }

  ngOnDestroy(): void {
    this.scrollDownBudget = 0;
    this.scrollUpBudget = 0;
  }

  @HostListener('document:scroll', ['$event'])
  onDocumentScroll(event: Event): void {
    if (window.innerWidth > 900) {
      this.isHidden = false;
      return;
    }

    const target = event.target;
    if (!(target instanceof Element || target === document || target === window)) {
      return;
    }

    const currentTop = this.readScrollTop(target);
    const delta = currentTop - this.lastScrollTop;
    this.lastScrollTop = currentTop;

    if (Math.abs(delta) < 1) {
      return;
    }

    if (currentTop < 10) {
      this.isHidden = false;
      this.scrollDownBudget = 0;
      this.scrollUpBudget = 0;
      return;
    }

    if (delta > 0) {
      this.scrollDownBudget += delta;
      this.scrollUpBudget = 0;

      if (this.scrollDownBudget >= this.hideThreshold) {
        this.isHidden = true;
        this.scrollDownBudget = this.hideThreshold;
      }
      return;
    }

    this.scrollUpBudget += Math.abs(delta);
    this.scrollDownBudget = 0;

    if (this.scrollUpBudget >= this.showThreshold) {
      this.isHidden = false;
      this.scrollUpBudget = this.showThreshold;
    }
  }

  private readScrollTop(target: EventTarget | Element | Document | Window): number {
    if (target instanceof Window) {
      return target.scrollY || 0;
    }

    if (target instanceof Document) {
      return target.scrollingElement?.scrollTop || 0;
    }

    if (target instanceof Element) {
      return target.scrollTop || 0;
    }

    return window.scrollY || 0;
  }
}
