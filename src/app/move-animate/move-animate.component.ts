import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-move-animate',
  templateUrl: './move-animate.component.html',
  styleUrls: ['./move-animate.component.css'],
  animations:[
    //在position状态改变时，触发动画
    trigger('position',[
      //position为left时的样式
      state('left',style({
        'height': '*',
      })),
      //position为right时的样式
      state('right',style({
        'height': 0,
      })),
      //状态切换时的动画设置
      transition('left => right',animate('1000ms ease-in')),
      transition('right => left',animate('1000ms ease-out'))
    ])
  ]
})
export class MoveAnimateComponent implements OnInit {
  currentPosition='left';
  constructor() { }

  ngOnInit() {
  }
  togglePosition() {
    if(this.currentPosition=='left') {
      this.currentPosition='right';
    }else{
      this.currentPosition='left';
    }
  }
}
