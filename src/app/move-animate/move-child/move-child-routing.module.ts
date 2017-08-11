import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoveChildComponent} from "./move-child.component";

const routes: Routes = [
  {
    path:'',component:MoveChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveChildRoutingModule { }
