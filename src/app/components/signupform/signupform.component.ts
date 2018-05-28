import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  /**
   * Tableau des civilités à afficher dans le formulaire
   */
  public civilite: string[];

  constructor() {
    this.civilite = new Array();

    this.civilite.push('Mademoiselle');
    this.civilite.push('Madame');
    this.civilite.push('Monsieur');
   }

  ngOnInit() {
  }

}
