import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CovidService } from './covid.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DocumentCovid } from './document-covid.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  
  resume = new DocumentCovid();

  constructor(public service: CovidService) {
  }

  ngOnInit(): void {
    this.service.docCovid = {
      id: 1,
      idLang: 1,
      nom: '',
      prenom: '',
      cin: '',
      region: '',
      province: '',
      numero: '',
      sexe: false,
      idDocParnet: 1,
      // soufiane ajoute la variable de "address"
      address: '',
      // soufiane ajoute la variable "checkboxCovid" qui prend la valeur qui revient de checkbox " covid.component.html "
      checkboxCovid: '',
      // 
      // date: Date.parse(toString) || 0,

    };
    
  }

  // tslint:disable-next-line:typedef
  submit()
  {
    this.service.ajouterDocument().subscribe(res => {
    this.service.ajouterDocument();
    },
    err => {
      console.log(err);
    });
  }
}
