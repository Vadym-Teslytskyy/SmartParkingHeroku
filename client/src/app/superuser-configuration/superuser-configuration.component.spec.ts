import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserConfigurationComponent } from './superuser-configuration.component';

describe('SuperuserConfigurationComponent', () => {
  let component: SuperuserConfigurationComponent;
  let fixture: ComponentFixture<SuperuserConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
