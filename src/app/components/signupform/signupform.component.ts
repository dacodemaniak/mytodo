import { Component, OnInit } from '@angular/core';
import { Civilite } from './../../models/civilite';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  /**
   * Tableau des civilités à afficher dans le formulaire
   */
  public civilite: Civilite[];

  constructor() {
    this.civilite = new Array();

    this.civilite.push({id: 1, libelle: 'Mademoiselle'});
    this.civilite.push({id: 2, libelle: 'Madame'});
    this.civilite.push({id: 3, libelle: 'Monsieur'});
   }

  ngOnInit() {
  }

}
