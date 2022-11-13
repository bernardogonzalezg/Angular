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
      stock : 500,
      image : "assets/img/banana.jpg",
      clearance : false,
    },
    { 
      name : "Trapo de piso",
      category : "Limpieza",
      price : 100,
      stock : 0,
      image : "assets/img/trapodepiso.jpg",
      clearance : false,
    },
    { 
      name : "Televisor",
      category : "Electronica",
      price : 50000,
      stock : 3,
      image : "assets/img/televisor.jpg",
      clearance : true,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
