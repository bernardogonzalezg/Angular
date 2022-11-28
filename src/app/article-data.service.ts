import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article } from './article-list/Article';

const URL = 'https://6383e32f3fa7acb14fe9a075.mockapi.io/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) {}
    
  public getAll(): Observable<Article[]> {

    return this.http.get<Article[]>(URL)
      .pipe(
        tap((articles: Article[]) => articles.forEach(
          article => article.quantity =0))
      );      

  }
}
