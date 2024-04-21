import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  article: any;
  constructor(private articleService: ArticleService) { }


  ngOnInit(): void {
    this.article = this.articleService.getArticle();

  }

}
