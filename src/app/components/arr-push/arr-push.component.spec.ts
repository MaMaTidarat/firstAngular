import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrPushComponent } from './arr-push.component';

describe('ArrPushComponent', () => {
  let component: ArrPushComponent;
  let fixture: ComponentFixture<ArrPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
