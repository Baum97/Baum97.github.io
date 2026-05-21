import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatMessage, ChatService } from '../../core/chat/chat.service';
import { LanguageService } from '../../core/i18n/language.service';
import { Lang } from '../../core/i18n/translations';

@Component({
  standalone: false,
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatbotComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollAnchor') scrollAnchor?: ElementRef<HTMLDivElement>;
  @ViewChild('input') inputRef?: ElementRef<HTMLTextAreaElement>;

  isOpen = false;
  isSending = false;
  draft = '';
  messages: ChatMessage[] = [];
  errorKey: string | null = null;
  showHint = false;

  private langSub?: Subscription;
  private hintTimer?: ReturnType<typeof setTimeout>;
  private shouldScroll = false;
  private greeted = false;
  private lang: Lang = 'en';

  constructor(
    private readonly chat: ChatService,
    private readonly i18n: LanguageService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.langSub = this.i18n.current$.subscribe((lang) => {
      this.lang = lang;
      if (this.greeted) {
        this.messages = [this.buildGreeting(lang)];
      }
      this.cdr.markForCheck();
    });

    if (!this.i18n.hasSeenChatHint()) {
      this.hintTimer = setTimeout(() => {
        this.showHint = true;
        this.cdr.markForCheck();
      }, 1400);
    }
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    if (this.hintTimer) {
      clearTimeout(this.hintTimer);
    }
  }

  dismissHint(): void {
    if (this.hintTimer) {
      clearTimeout(this.hintTimer);
      this.hintTimer = undefined;
    }
    if (!this.showHint) {
      this.i18n.markChatHintSeen();
      return;
    }
    this.showHint = false;
    this.i18n.markChatHintSeen();
    this.cdr.markForCheck();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.shouldScroll = false;
      this.scrollAnchor?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  togglePanel(): void {
    this.isOpen = !this.isOpen;
    this.dismissHint();
    if (this.isOpen) {
      if (!this.greeted) {
        this.messages = [this.buildGreeting(this.lang)];
        this.greeted = true;
      }
      this.shouldScroll = true;
      setTimeout(() => this.inputRef?.nativeElement.focus(), 50);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  send(): void {
    const text = this.draft.trim();
    if (!text || this.isSending) {
      return;
    }

    this.errorKey = null;
    this.messages = [...this.messages, { role: 'user', content: text }];
    this.draft = '';
    this.isSending = true;
    this.shouldScroll = true;
    this.cdr.markForCheck();

    this.chat.sendMessage(this.messages, this.lang).subscribe({
      next: (reply) => {
        this.messages = [...this.messages, { role: 'assistant', content: reply }];
        this.isSending = false;
        this.shouldScroll = true;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isSending = false;
        this.errorKey = 'chatbot_error';
        this.cdr.markForCheck();
      }
    });
  }

  private buildGreeting(lang: Lang): ChatMessage {
    return {
      role: 'assistant',
      content:
        lang === 'de'
          ? 'Hi! Was möchtest du über Achim wissen?'
          : 'Hi! What would you like to know about Achim?'
    };
  }
}
