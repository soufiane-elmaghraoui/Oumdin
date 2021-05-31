import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, NgForm } from '@angular/forms';
import { CovidService } from './covid.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DocumentCovid } from './document-covid.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { logging } from 'selenium-webdriver';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  constructor( public service: CovidService, 
              private formBuilder : FormBuilder) {

  }
  
  CovidGroup! : FormGroup;
  resume = new DocumentCovid();
  chooses: cours[] = []; 

  getCheckbox(){
    this.chooses=[
      {id_checkbox:1, nom:" تنقل للعمل؛", isselected:false},
      {id_checkbox:2, nom:" تنقل من أجل اقتناء المشتريات الضرورية للمعيش اليومي في محيط مقر سكني؛", isselected:false},
      {id_checkbox:3, nom:" تتنقل من أجل العلاج؛", isselected:false},
      {id_checkbox:4, nom:" تنقل من أجل اقتناء الأدوية؛", isselected:false},
      {id_checkbox:5, nom:" تنقل من أجل غاية ملحة (*) ؛", isselected:false},
    ]
  }

  onChange(){
    console.log(this.chooses)
  }

  ngOnInit(): void {
    this.CovidGroup = this.formBuilder.group({
      // idLang: 1,
      nom: '',
      prenom: '',
      cin: '',
      region: '',
      date: new Date,
      province: '',
      numero: '',
      // sexe: true,
      // idDocParnet: 1,
      address: '',
      // checjboxCovid:
    })

    this.getCheckbox();
    
    this.service.getAllDocument();
  }

  //
  logState:String="";
  isAuth:Boolean = false;

  toggle() {
    this.isAuth = !this.isAuth;
    // this.logState
  } 

  // tslint:disable-next-line:typedef
  submit()
  {
    console.log(this.CovidGroup.value);
    this.service.postImprimer(this.CovidGroup.value).subscribe(res => {
    // this.service.ajouterDocument();
    },
    err => {
      console.log(err);
    });
  }
}
export class cours {

  id_checkbox!: number;
  nom!: String;
  isselected!: boolean;
}
