import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Article} from "../articles/articles.model";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ArticleService{
  private apiUrl;

  articleUrl: string;

  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.apiUrl = 'http://localhost:8080/article/';
  }

  public getArticle() {
    this.articleUrl = this.router.snapshot.url.join();
    return this.http.get<Article>(this.articleUrl);
  }
}
