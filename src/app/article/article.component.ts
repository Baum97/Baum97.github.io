import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {ArticlesComponent} from "../articles/articles.component";
import {Article} from "../articles/articles.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService) { }


  ngOnInit(): void {
    this.showArticle();
  }

  showArticle() {
    this.articleService.getArticle().subscribe(data => this.article = data);
  }



}
