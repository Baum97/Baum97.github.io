import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./articles.model";
import {ArticleService} from "../article/article.service";
import {FloatLabelType} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})

export class  ArticlesService{
  private apiUrl;

  constructor(private http: HttpClient, private article: ArticleService) {
    this.apiUrl = 'http://localhost:8080/articles';
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  public setArticleNo(articleNo: number) {
    this.article.articleNo = articleNo.toString();
  }

  public getArticlesByName(filterName: FormControl): Observable<Article[]> {
    const name = filterName;
    return this.http.get<Article[]>(this.apiUrl + '#:name')
  }
}
