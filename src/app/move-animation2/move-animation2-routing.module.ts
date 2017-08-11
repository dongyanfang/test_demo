import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MoveAnimation2Component} from "./move-animation2.component";

const routes: Routes = [
  {path:'',component:MoveAnimation2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveAnimation2RoutingModule { }
