import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test44RoutingModule } from './test44-routing.module';
import {Test44Component} from './test44.component';
import { TestService } from '../service/test.service';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import {ReactiveFormsModule} from "@angular/forms";
import {KSSwiperModule} from 'angular2-swiper';
@NgModule({
  imports: [
    CommonModule,
    Test44RoutingModule,
    ReactiveFormsModule,
    KSSwiperModule
  ],
  declarations: [Test44Component, Demo1Component, Demo2Component, Demo3Component],
  providers: [ TestService ],
})
export class Test44Module { }
