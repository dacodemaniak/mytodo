import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Civilite } from './../../models/civilite';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

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

/**
 * Instance du modèle User
 */
  private user: User;

  /**
   * Instance pour le contrôle du formulaire d'inscription
   */
  public signupForm: FormGroup;

  constructor(private builder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.civilite = new Array();

    this.civilite.push({id: 1, libelle: 'Mademoiselle'});
    this.civilite.push({id: 2, libelle: 'Madame'});
    this.civilite.push({id: 3, libelle: 'Monsieur'});
   }

   public get nom() { return this.signupForm.controls.nom; }
   public get email() { return this.signupForm.controls.email; }
   public get password() { return this.signupForm.controls.password; }
   public get confirmPassword() { return this.signupForm.controls.confirmPassword; }

   public onFormSubmit(): void {
     if (this.signupForm.valid) {
       this.user = new User(this.signupForm.value);
      this.userService.keepIt(this.user).then((datas) => {
        this.router.navigate(['home']);
      });
     } else {
       console.log('Same player shoot again !!!');
     }
   }
   /**
    * Méthode appelée immédiatement après le constructeur de la classe
    */
  ngOnInit() {
    this.signupForm = this.builder.group({
      nom: ['', Validators.required],
      prenom: [''],
      email: ['', [Validators.required, Validators.email]],
      civilite: [''],
      cgu: [false, Validators.requiredTrue],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

}
