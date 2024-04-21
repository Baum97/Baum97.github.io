import { Component } from '@angular/core';
import {ArticlesService} from "./articles/articles.service";
import {Article} from "./articles/articles.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'EinkaufsHeldFE';
  articles: Article[] = [];

  constructor() {
  }

}
