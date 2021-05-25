import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CovidComponent } from './covid/covid.component';
import { ImprimerComponent } from './imprimer/imprimer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategorieComponent,
    ContactComponent,
    PageNotFoundComponent,
    FormsComponent,
    AccueilComponent,
    CovidComponent,
    ImprimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
