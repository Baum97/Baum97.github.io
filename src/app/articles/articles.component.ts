import {Component, Input, OnInit} from '@angular/core';
import {Article} from './articles.model'
import {ArticlesService} from "./articles.service";

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})

export class ArticlesComponent implements OnInit{
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  @Input() article: Article;

  ngOnInit() {
    this.showArticle();
  }

  showArticle() {
    this.articlesService.getArticles().subscribe(data => this.articles = data)
  }
  showArticleById() {
    this.articlesService.getArticle().subscribe(data => this.article = data)
  }
}

