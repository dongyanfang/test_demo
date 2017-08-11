import {Component, OnInit} from '@angular/core';
import { simAnim } from '../animation/sim-anim';
@Component({
  selector: 'app-move-animation2',
  templateUrl: './move-animation2.component.html',

  styleUrls: ['./move-animation2.component.css'],
  animations: [simAnim]

})
export class MoveAnimation2Component implements OnInit {
public isHidden=false;
  constructor() { }
  ngOnInit() {
    console.log('aaaaa');
  }



}
