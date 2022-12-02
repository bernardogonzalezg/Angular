import { Component, OnInit } from '@angular/core';
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
import { Article } from './Article';

import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  articles : Article[] = [];

  carts : Article [] = [];

  constructor(
    private cart: ArticleCartService,
    private articlesDataService : ArticleDataService) {      
  }

  ngOnInit(): void {
    this.articlesDataService.getAll()
    .subscribe(articles => this.articles = articles);
  }

  addToCart(article: Article): void {
    this.cart.addToCart(article);
    article.stock -= article.quantity;
    article.quantity = 0;
  }

  maxReached(m : string) {
    alert(m); 
  }
}