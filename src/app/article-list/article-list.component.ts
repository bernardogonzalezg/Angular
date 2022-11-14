import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  articles : Article[] = [
    { 
      name : "Banana",
      category : "Fruteria",
      price : 200,
      stock : 5,
      image : "assets/img/banana.jpg",
      clearance : false,
      quantity : 0,
    },
    { 
      name : "Trapo de piso",
      category : "Limpieza",
      price : 10,
      stock : 0,
      image : "assets/img/trapodepiso.jpg",
      clearance : false,
      quantity : 0,
    },
    { 
      name : "Televisor",
      category : "Electronica",
      price : 50000,
      stock : 3,
      image : "assets/img/televisor.jpg",
      clearance : true,
      quantity : 0,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(article: Article): void {
    if (article.quantity < article.stock)
      article.quantity++;
  }

  downQuantity(article: Article): void {
    if (article.quantity > 0)
    article.quantity--;
  }

  changeQuantity(event: { preventDefault: () => void; }, article: Article) : void {
    if (article.quantity > article.stock){
      event.preventDefault();
      article.quantity = article.stock;
    }
  }
}