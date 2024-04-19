import {Article} from "../article/article.model";
import {Component, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

@Component({
  standalone: true,
  templateUrl: 'article-post.component.html'
})

export class  ArticlePostService {
  private apiUrl;
  articleData: any = {}

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/articles';
  }

  public postArticle(article: Article):Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
