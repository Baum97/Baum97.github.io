import { Component } from '@angular/core';
import {Article} from "./articles/articles.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarktHelferFE';
  articles: Article[] = [];

}
