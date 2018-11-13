import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NgModelを使うためのライブラリ
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/* ng generate ~~ の際に自動で宣言される */
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    /* ng generate component ~~ の際に自動で宣言される */
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
