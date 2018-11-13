import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  // ヒーロー 一覧
  heroes: Hero[];
  
  // HeroService型のインスタンスを宣言
  constructor(private heroService: HeroService) { }

  // コンポーネント生成直後に呼ばれるライフルサイクルフック
  ngOnInit() {
    this.getHeroes();
  }

  /**
   * サービスからヒーローを取得
   * Observable.subscribe()の形式で取得することにより、
   * データの取得を待つことができる。
   */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
