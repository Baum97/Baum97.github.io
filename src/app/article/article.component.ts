import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {ArticlesComponent} from "../articles/articles.component";
import {Article} from "../articles/articles.model";
import {FloatLabelType} from "@angular/material/core";
import {FormControl} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;

  constructor(private articleService: ArticleService) { }


  ngOnInit(): void {
    this.showArticle();
  }

  showArticle() {
    this.articleService.getArticle().subscribe(data => this.article = data);
  }



}
