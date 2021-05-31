import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentCovid } from './document-covid.model';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = 'http://localhost:12530/api/DocumentCovid';

  docCovid!: DocumentCovid;


  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  // ajouterDocument() {
  //   this.docCovid.idLang = 1;
  //   this.docCovid.idDocParnet = 1;
  //   return this.http.post(this.url, this.docCovid);
  // }

  //soufiane add a variable CovidData
  CovidData!:DocumentCovid;
  CovidDatas!:DocumentCovid[]; 

  //
  getAllDocument() {
    this.http.get(this.url).toPromise().then(
      res=>{
        this.CovidDatas = res as DocumentCovid[];
      }
    )
  }

  //soufiane add a method postImprimer
  postImprimer(form : any) {
    // console.log(this.CovidDatas);
    return this.http.post(this.url, form)
  }
}
