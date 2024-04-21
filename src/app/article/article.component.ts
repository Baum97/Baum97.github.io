import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../articles/articles.model";
import {ArticlesService} from "../articles/articles.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  article: any;
  constructor(private articlesService: ArticlesService) { }


  ngOnInit(): void {
    this.article = this.articlesService.getArticle();

  }

}
