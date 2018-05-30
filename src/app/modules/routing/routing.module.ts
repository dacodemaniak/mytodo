import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupformComponent } from '../../components/signupform/signupform.component';
import { HomeComponent } from './../../components/home/home.component';
import { AuthGuardService } from './../../services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signup', component: SignupformComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})



export class RoutingModule { }
