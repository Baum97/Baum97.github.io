import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./article.model";

@Injectable({
  providedIn: 'root',
})

export class  ArticleService{
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/articles';
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  public getArticle() {
    return this.http.get<Article>(this.apiUrl + "id");
  }
}
