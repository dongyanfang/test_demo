import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {

  @ViewChild(KSSwiperContainer)
  swiperContainer: KSSwiperContainer;

  // 图片数组
  data: Array<number>;
  // 配置
  swipeOptions: any;

  constructor() {
    this.swipeOptions = {
      // 每页显示几张图片
      slidesPerView: 1,
      // 是否循环
      loop: false,
      spaceBetween: 5
    };
    this.data = [
      1, 2
    ];
  }
  // 下一个
  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }
  // 上一个
  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

}
