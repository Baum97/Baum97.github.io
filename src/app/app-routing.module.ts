import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {ArticlePostComponent} from "./article-post/article-post.component";

const routes: Routes = [
  { path: 'article', component: ArticleComponent},
  { path: 'article-post', component: ArticlePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
