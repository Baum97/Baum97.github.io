import { Component } from '@angular/core';
import {ArticleService} from "./article/article.service";
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'EinkaufsHeldFE';
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

}
