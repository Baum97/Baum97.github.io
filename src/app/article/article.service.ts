import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Article} from "../articles/articles.model";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {last} from "rxjs";
import {formatNumber} from "@angular/common";

@Injectable({
  providedIn: 'root',
})

export class ArticleService{
  private apiUrl;

  articleUrl?: string;
  articleNo: string;

  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.apiUrl = 'http://localhost:8080/articles/';
  }

  public getArticle() {
    this.articleUrl = this.router.snapshot.url
      .at(this.router.snapshot.url.length-1)?.toString()
    return this.http.get<Article>(this.apiUrl + this.articleNo);
  }
}
