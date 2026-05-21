import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from './language.service';

@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform, OnDestroy {
  private readonly sub: Subscription;

  constructor(private readonly i18n: LanguageService, cdr: ChangeDetectorRef) {
    this.sub = this.i18n.current$.subscribe(() => cdr.markForCheck());
  }

  transform(key: string): string {
    return this.i18n.t(key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
