import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoveAnimateComponent} from "./move-animate.component";

const routes: Routes = [
  {path:'',component:MoveAnimateComponent,
    children: [
      {path:'next',loadChildren:'./move-child/move-child.module#MoveChildModule'},
      {path:'next2',loadChildren:'./move-child2/move-child2.module#MoveChild2Module'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveAnimateRoutingModule { }
