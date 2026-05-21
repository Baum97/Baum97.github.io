import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../core/i18n/language.service';
import { Lang } from '../../../core/i18n/translations';

@Component({
  standalone: false,
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangToggleComponent implements OnInit, OnDestroy {
  current: Lang = 'en';
  showTutorial = false;

  private sub?: Subscription;

  constructor(private readonly i18n: LanguageService, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sub = this.i18n.current$.subscribe((lang) => {
      this.current = lang;
      this.cdr.markForCheck();
    });

    if (!this.i18n.hasSeenTutorial()) {
      setTimeout(() => {
        this.showTutorial = true;
        this.cdr.markForCheck();
      }, 600);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  select(lang: Lang): void {
    this.i18n.setLang(lang);
    this.dismissTutorial();
  }

  dismissTutorial(): void {
    if (!this.showTutorial) {
      return;
    }
    this.showTutorial = false;
    this.i18n.markTutorialSeen();
    this.cdr.markForCheck();
  }
}
