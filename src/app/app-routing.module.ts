import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  // ルーターの初期化
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
