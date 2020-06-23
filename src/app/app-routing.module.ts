import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { WildComponent } from './wild/wild.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'question',component:QuestionComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'**',component:WildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
