import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CovidComponent } from './covid/covid.component';
import { ImprimerComponent } from './imprimer/imprimer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path: 'covid',
    component: CovidComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'categorie',
    component: CategorieComponent,
    pathMatch: 'full'
  },
  {
    path: 'covid/imprimer',
    component: ImprimerComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
