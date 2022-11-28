import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article-list/Article';

@Injectable({
  providedIn: 'root'
})

export class ArticleCartService {
  
  private _cartList: Article[] = [];
  
  cartList: BehaviorSubject<Article[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }

  addToCart(article : Article) { 
  
    let item = this._cartList.find((v1) => v1.name == article.name); 
    if (!item){
      this._cartList.push({... article});  
    } else {
      item.quantity += article.quantity;
    }
    console.log(this._cartList); 
    this.cartList.next(this._cartList);
  }
}