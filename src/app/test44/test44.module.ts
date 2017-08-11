import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test44RoutingModule } from './test44-routing.module';
import {Test44Component} from "./test44.component";

@NgModule({
  imports: [
    CommonModule,
    Test44RoutingModule
  ],
  declarations: [Test44Component]
})
export class Test44Module { }
