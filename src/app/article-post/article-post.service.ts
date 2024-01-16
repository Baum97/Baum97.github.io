import {Article} from "../article/article.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class  ArticleService {
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/articles';
  }

  public postArticle(article: Article) {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
