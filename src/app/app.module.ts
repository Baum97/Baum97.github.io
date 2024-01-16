import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ArticleService} from "./article/article.service";
import { ArticlePostComponent } from './article-post/article-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
