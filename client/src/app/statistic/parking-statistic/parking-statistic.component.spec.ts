import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingStatisticComponent } from './parking-statistic.component';

describe('ParkingStatisticComponent', () => {
  let component: ParkingStatisticComponent;
  let fixture: ComponentFixture<ParkingStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
