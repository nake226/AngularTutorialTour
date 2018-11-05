import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * HeroServiceと親子(?)みたいな感じ。
 * 子サービスクラスではプロパティ / メソッドのみ定義
 */
export class MessageService {
  messages: string[] = [];

  // メッセージの追加
  add(message: string) {
    this.messages.push(message);
  }
  // メッセージのリセット
  clear() {
    this.messages = [];
  }
}
