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
   * 全ヒーローの取得
   * Observable型(?)でラップ(?)することによって、
   * 取得できるようになったら取得、ということができる
   */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  /**
   * 個のヒーローの取得
   * @param id 
   */
  getHero(id: Number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
