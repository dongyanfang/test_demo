import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ClickDirective } from './click.directive';
@NgModule({
  declarations: [

    AppComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',loadChildren:'./move-animate/move-animate.module#MoveAnimateModule' },
      {path:'moveAnimate2',loadChildren:'./move-animation2/move-animation2.module#MoveAnimation2Module' },
      {path:'test44',loadChildren:'./test44/test44.module#Test44Module'}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
