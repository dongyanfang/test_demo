import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChildComponent } from './move-child.component';

describe('MoveChildComponent', () => {
  let component: MoveChildComponent;
  let fixture: ComponentFixture<MoveChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
