import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RealFakeNewsComponent } from './real-fake-news/real-fake-news.component';
import { FakeRealNewsComponent } from './fake-real-news/fake-real-news.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { routing } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RealFakeNewsComponent,
    FakeRealNewsComponent,
    ArticleDetailComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
