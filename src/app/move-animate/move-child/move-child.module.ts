import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveChildRoutingModule } from './move-child-routing.module';
import {MoveChildComponent} from "./move-child.component";

@NgModule({
  imports: [
    CommonModule,
    MoveChildRoutingModule
  ],
  declarations: [
    MoveChildComponent
  ]
})
export class MoveChildModule { }
