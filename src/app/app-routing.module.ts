import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermercadoAboutComponent } from './supermercado-about/supermercado-about.component';
import { SupermercadoArticlesComponent } from './supermercado-articles/supermercado-articles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component : SupermercadoArticlesComponent
  },
  {
    path: 'about',
    component : SupermercadoAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
