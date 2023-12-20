import {Component, Input, OnInit} from '@angular/core';
import {Observer} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  constructor()
  {
    let image: File;
    let price: number;
    let description: string;
  }

  @Input()


  ngOnInit(): void {
  }

}

function itemSubscriber(observer: Observer<ArticleComponent>) {

}
