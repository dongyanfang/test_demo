import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test44RoutingModule } from './test44-routing.module';
import {Test44Component} from './test44.component';
import { TestService } from '../service/test.service';
import { Demo1Component } from './demo1/demo1.component'; //
@NgModule({
  imports: [
    CommonModule,
    Test44RoutingModule
  ],
  declarations: [Test44Component, Demo1Component],
  providers: [ TestService ],
})
export class Test44Module { }
