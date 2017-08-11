import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test44',
  templateUrl: './test44.component.html',
  styleUrls: ['./test44.component.css']
})
export class Test44Component implements OnInit {
  public demo=['demo1','demo2','demo3'];
  public demoIndex = 2; // current demo
  constructor() { }

  ngOnInit() {
  }

}
