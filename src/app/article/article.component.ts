import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model'
import {ArticleService} from "./article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})

export class ArticleComponent implements OnInit{
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  @Input() article: Article;

  ngOnInit() {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}

