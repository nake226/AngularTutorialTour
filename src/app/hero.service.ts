import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  // 実際は即座にデータを返せないケースがほとんどなので、
  // データの取得を監視状態（できるようになったらする）で定義。
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
