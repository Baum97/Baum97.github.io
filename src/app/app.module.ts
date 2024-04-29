import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticlesComponent} from './articles/articles.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ArticlesService} from "./articles/articles.service";
import { ArticlePostComponent } from './article-post/article-post.component';
import {ImpressumComponent} from "./impressum-component/impressum-component.component";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ArticleComponent} from "./article/article.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {FloatLabelType} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlePostComponent,
    ArticlesComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    NgOptimizedImage,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    ReactiveFormsModule,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
