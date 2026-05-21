import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lang, UI_TEXT } from './translations';

const STORAGE_KEY = 'baum97.lang';
const TUTORIAL_KEY = 'baum97.langTutorial.seen';
const CHAT_HINT_KEY = 'baum97.chatHint.seen';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly lang$ = new BehaviorSubject<Lang>(this.detectInitialLang());

  readonly current$: Observable<Lang> = this.lang$.asObservable();

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.lang$.value;
    }
  }

  get current(): Lang {
    return this.lang$.value;
  }

  setLang(lang: Lang): void {
    if (this.lang$.value === lang) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    this.lang$.next(lang);
  }

  toggle(): void {
    this.setLang(this.current === 'de' ? 'en' : 'de');
  }

  t(key: string): string {
    const entry = UI_TEXT[key];
    if (!entry) {
      return key;
    }
    return entry[this.current] ?? entry.en ?? key;
  }

  hasSeenTutorial(): boolean {
    try {
      return localStorage.getItem(TUTORIAL_KEY) === '1';
    } catch {
      return false;
    }
  }

  markTutorialSeen(): void {
    try {
      localStorage.setItem(TUTORIAL_KEY, '1');
    } catch {}
  }

  hasSeenChatHint(): boolean {
    try {
      return localStorage.getItem(CHAT_HINT_KEY) === '1';
    } catch {
      return false;
    }
  }

  markChatHintSeen(): void {
    try {
      localStorage.setItem(CHAT_HINT_KEY, '1');
    } catch {}
  }

  private detectInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') {
        return stored;
      }
    } catch {}
    const navLang =
      typeof navigator !== 'undefined' ? (navigator.language || '').toLowerCase() : '';
    return navLang.startsWith('de') ? 'de' : 'en';
  }
}
