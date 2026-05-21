import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Lang } from '../i18n/translations';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  reply: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly endpoint = environment.chatEndpoint ?? '/api/chat';

  constructor(private readonly http: HttpClient) {}

  sendMessage(messages: ChatMessage[], lang: Lang): Observable<string> {
    return this.http
      .post<ChatResponse>(this.endpoint, { messages, lang })
      .pipe(map((res) => res.reply ?? ''));
  }
}
