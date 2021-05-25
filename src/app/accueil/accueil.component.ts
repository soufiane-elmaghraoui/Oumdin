import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public service: CategorieService) { }

  ngOnInit(): void {
    this.service.getCategories();
  }

}
