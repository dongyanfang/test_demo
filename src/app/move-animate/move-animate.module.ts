import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveAnimateRoutingModule } from './move-animate-routing.module';
import {MoveAnimateComponent} from "./move-animate.component";

@NgModule({
  imports: [
    CommonModule,
    MoveAnimateRoutingModule
  ],
  declarations: [MoveAnimateComponent]
})
export class MoveAnimateModule { }
