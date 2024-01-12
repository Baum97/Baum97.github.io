import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleArrayComponent } from './article-array/article-array.component';
import { ArticleComponent } from './article/article.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    ArticleArrayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
