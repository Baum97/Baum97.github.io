import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  helpvar!: string | null;
  article: any;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.helpvar = param.get('id');
      this.article = this.articleService.getArticle(this.helpvar);
    })

  }

}
