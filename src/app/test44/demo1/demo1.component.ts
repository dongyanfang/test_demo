import {Component, OnChanges, Input} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {Address, Hero} from '../data-model';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnChanges {
  // @Input() hero: Hero;
  constructor(private fb: FormBuilder) { }
    heroForm = this.fb.group ({
      name: [''],
      sex: [''],
      password: [''],
      hobby: [''],
      secretLairs: this.fb.array([])
    });
  ngOnChanges() {
    // this.heroForm.reset({
    //   name: '啦啦'
    // });
    //this.setAddresses(this.hero.addresses);
    console.log('111');
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddresses(addresses: Address[]) {
    // const addressFGs = addresses.map(address => this.fb.group(address));
    // console.log('11111');
    // const addressFormArray = this.fb.array(addressFGs);
    // this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }
}
