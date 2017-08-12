import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TestService} from '../service/test.service';
import {Hero} from './data-model';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-test44',
  templateUrl: './test44.component.html',
  styleUrls: ['./test44.component.css']
})
export class Test44Component implements OnInit {
  public demo= ['demo1', 'demo2', 'demo3'];
  public demoIndex = 0; // current demo
  public isLoading= false;
  heroes: Observable<Hero[]>;
  selectedHero: Hero;
  constructor(private TestService: TestService) { }

  ngOnInit() {
  }
  getHeroes() {
    this.isLoading = true;
    this.heroes =  this.TestService.getHeroes().finally(() => this.isLoading = false);
      // Observable.of("xxxx").delay(3000).subscribe(data => console.log(data));
    // this.heroes = this.TestService.getHeroes()
    this.heroes.subscribe();

    this.selectedHero = undefined;
  }
  selectDemo(num) {
    console.log(num);
    this.demoIndex = num;
    this.getHeroes();

  }

}
