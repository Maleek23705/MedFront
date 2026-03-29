import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTopbarPatientComponent } from './horizontal-topbar-patient.component';

describe('HorizontalTopbarPatientComponent', () => {
  let component: HorizontalTopbarPatientComponent;
  let fixture: ComponentFixture<HorizontalTopbarPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTopbarPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTopbarPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
