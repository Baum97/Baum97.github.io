import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgForOf} from "@angular/common";
import {Observer, Subscriber} from "rxjs";
import {ArticleComponent} from "../article/article.component";

export interface Tile {
  image: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-article-array',
  templateUrl: './article-array.component.html',
  styleUrls: ['./article-array.component.less'],
  standalone: true,
  imports: [MatGridListModule, NgForOf],
})
export class ArticleArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  articles: Tile[] = [

  ];
}

function subscribeArticles(subscribe: Subscriber<ArticleComponent>) {

}
