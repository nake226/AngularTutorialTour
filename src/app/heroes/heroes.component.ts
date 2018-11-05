import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  // ヒーロー配列
  heroes = HEROES;
  // 選択したヒーロー
  selectedHero: Hero;
  // クリックしたヒーローを割り当てる
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  // コンポーネント生成直後に呼ばれるライフルサイクルフック
  ngOnInit() {
  }

}
