import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url = 'http://localhost:12530/api/categories';

  categories!: Categorie[];

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getCategories(){
    this.http.get(this.url).toPromise().then(
    res => {
            this.categories = res as Categorie[];
          }
  );
  }

}

