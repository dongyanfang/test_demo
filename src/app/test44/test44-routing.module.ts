import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test44Component} from "./test44.component";

const routes: Routes = [
  {path:'', component:Test44Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test44RoutingModule { }
