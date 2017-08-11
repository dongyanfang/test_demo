import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveChild2RoutingModule } from './move-child2-routing.module';
import {MoveChild2Component} from "./move-child2.component";

@NgModule({
  imports: [
    CommonModule,
    MoveChild2RoutingModule
  ],
  declarations: [
    MoveChild2Component
  ]
})
export class MoveChild2Module { }
