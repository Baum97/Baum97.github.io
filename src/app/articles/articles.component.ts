import {Component, Input, OnInit} from '@angular/core';
import {Article} from './articles.model'
import {ArticlesService} from "./articles.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})

export class ArticlesComponent implements OnInit{
  articles: Article[] = [];

  constructor(protected articlesService: ArticlesService, private router: Router) {}


  @Input() article: Article;

  ngOnInit() {
    this.showArticles();
  }

  showArticles() {
    this.articlesService.getArticles().subscribe(data => this.articles = data)
  }

  protected readonly ArticlesService = ArticlesService;
}

