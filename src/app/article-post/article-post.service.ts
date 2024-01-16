import {Article} from "../article/article.model";
import {Component, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

@Component({
  standalone: true,
  templateUrl: 'article-post.component.html'
})

export class  ArticleService {
  private apiUrl;
  articleData: any = {}

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/articles';
  }

  public postArticle() {
    return this.http.post<Article>(this.apiUrl, this.articleData).subscribe( {
      next: (value) => console.log(value),
      error: (value) => console.error(value)
    });
  }
}
