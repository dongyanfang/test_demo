import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChild2Component } from './move-child2.component';

describe('MoveChild2Component', () => {
  let component: MoveChild2Component;
  let fixture: ComponentFixture<MoveChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
