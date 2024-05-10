import {Component, Input, OnInit} from '@angular/core';
import {ArticlePostService} from "./article-post.service";
import {Article} from "../articles/articles.model";

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.less'],
  standalone: true
})
export class ArticlePostComponent implements OnInit {
  articles : Article[] = [];

  constructor(private articlepostService: ArticlePostService) { }

  @Input() article: Article | undefined;

  ngOnInit(): void {
    this.articlepostService.postArticle(this.article!)
      .subscribe(article => this.articles.push(this.article!));

}

}
