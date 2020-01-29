import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynAwitComponent } from './asyn-awit.component';

describe('AsynAwitComponent', () => {
  let component: AsynAwitComponent;
  let fixture: ComponentFixture<AsynAwitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynAwitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynAwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
