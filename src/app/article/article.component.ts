import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../articles/articles.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() article: Article;

  ngOnInit(): void {
  }

}
