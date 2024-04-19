import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {ArticlePostComponent} from "./article-post/article-post.component";
import {ImpressumComponent} from "./impressum-component/impressum-component.component";

export const routes: Routes = [
  { path: 'article', component: ArticleComponent},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'article-post', component: ArticlePostComponent},
  { path: 'impressum', component: ImpressumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
