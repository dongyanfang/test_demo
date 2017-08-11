import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoveChild2Component} from "./move-child2.component";

const routes: Routes = [
  {path:'',component:MoveChild2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveChild2RoutingModule { }
