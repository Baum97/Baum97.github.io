import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model'
import {Observer} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})

export class ArticleComponent {
  @Input() article: Article;
}

