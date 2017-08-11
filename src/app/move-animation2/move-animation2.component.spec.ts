import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAnimation2Component } from './move-animation2.component';

describe('MoveAnimation2Component', () => {
  let component: MoveAnimation2Component;
  let fixture: ComponentFixture<MoveAnimation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveAnimation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveAnimation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
