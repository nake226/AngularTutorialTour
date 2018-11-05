import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // MessageService型のインスタンスを宣言
  constructor(private messageService: MessageService) { }

  /**
   * ヒーローの取得
   * Observable型(?)でラップ(?)することによって、
   * 取得できるようになったら取得、ということができる
   */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
