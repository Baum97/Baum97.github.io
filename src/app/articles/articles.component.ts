import {Component, Input, OnInit} from '@angular/core';
import {Article} from './articles.model'
import {ArticlesService} from "./articles.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})

export class ArticlesComponent implements OnInit{
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService, private router: Router) {}


  @Input() article: Article;

  ngOnInit() {
    this.showArticle();
  }

  showArticle() {
    this.articlesService.getArticles().subscribe(data => this.articles = data)
  }

  navigateToArticle(articleNo: number) {
    this.router.navigate(['/article/'+articleNo]);
  }

  protected readonly ArticlesService = ArticlesService;
}

