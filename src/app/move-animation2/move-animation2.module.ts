import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveAnimation2RoutingModule } from './move-animation2-routing.module';
import {MoveAnimation2Component} from "./move-animation2.component";

@NgModule({
  imports: [
    CommonModule,
    MoveAnimation2RoutingModule
  ],
  declarations: [
    MoveAnimation2Component
  ]
})
export class MoveAnimation2Module { }
