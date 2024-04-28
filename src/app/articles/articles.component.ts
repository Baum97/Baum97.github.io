import {Component, Input, OnInit} from '@angular/core';
import {Article} from './articles.model'
import {ArticlesService} from "./articles.service";
import {Subscription} from "rxjs";
import {Router, RouterModule} from "@angular/router";
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
})

export class ArticlesComponent implements OnInit{
  articles: Article[] = [];
  value: '';

  filteredArticles: any[];
  collapsed: boolean = false;
  searchQuery: string = '';
  constructor(protected articlesService: ArticlesService, private router: Router) {}


  @Input() article: Article;

  ngOnInit() {
    this.showArticles();
    this.toggleCollapse();
    this.filterArticles();
    this.resetFilters();
  }

  showArticles() {
    this.articlesService.getArticles().subscribe(data => this.articles = data)
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  filterArticles() {
    this.filteredArticles = this.articles.filter(article =>
      article.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  resetFilters() {
    this.searchQuery = '';
    this.filteredArticles = this.articles;
  }
}

