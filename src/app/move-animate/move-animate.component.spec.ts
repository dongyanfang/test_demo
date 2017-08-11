import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAnimateComponent } from './move-animate.component';

describe('MoveAnimateComponent', () => {
  let component: MoveAnimateComponent;
  let fixture: ComponentFixture<MoveAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
