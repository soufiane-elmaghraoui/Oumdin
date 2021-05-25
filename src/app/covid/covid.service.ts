import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentCovid } from './document-covid.model';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = 'http://localhost:12530/api/DocGenere';

  docCovid!: DocumentCovid;


  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  ajouterDocument() {
    this.docCovid.idLang = 1;
    this.docCovid.idDocParnet = 1;
    return this.http.post(this.url, this.docCovid);
  }

  //soufiane add a variable CovidData
  CovidData!:DocumentCovid;
  //soufiane add a method postImprimer
  postImprimer() {
    return this.http.post(this.url,this.CovidData)
  }
}
