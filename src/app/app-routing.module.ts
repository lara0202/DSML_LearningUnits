import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Unit1Component } from './unit1/unit1.component';
import { Unit2Component } from './unit2/unit2.component';
import { Unit3Component } from './unit3/unit3.component';
import { Unit4Component } from './unit4/unit4.component';
import { Unit5Component } from './unit5/unit5.component';
import { Unit6Component } from './unit6/unit6.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unit1', component: Unit1Component },
  { path: 'unit2', component: Unit2Component },
  { path: 'unit3', component: Unit3Component },
  { path: 'unit4', component: Unit4Component },
  { path: 'unit5', component: Unit5Component },
  { path: 'unit6', component: Unit6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
