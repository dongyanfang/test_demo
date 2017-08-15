import { Component } from '@angular/core';
import { Demo2Service } from '../../service/demo2.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
  providers: [ Demo2Service ]
})
export class Demo2Component {
  // public heroes= ['aaa', 'bbb', 'ccc'];

  // addHero(name: string) {
  //    this.heroes.push(name);
  // }
  items: Observable<string[]>;

  constructor (private wikipediaService: Demo2Service) { }

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }
}
