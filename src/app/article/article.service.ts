import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Article} from "../articles/articles.model";

@Injectable({
  providedIn: 'root',
})

export class ArticleService{
  private apiUrl;

  articleNo: number;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/article/';
  }

  public getArticle(id: string|null) {
    console.log('number: '+ this.articleNo);
    return this.http.get<Article>(this.apiUrl + id);
  }

  navigateToArticle() {

  }
}
