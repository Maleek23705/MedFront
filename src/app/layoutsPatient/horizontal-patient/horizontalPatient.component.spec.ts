import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPatientComponent } from './horizontalPatient.component';

describe('HorizontalPatientComponent', () => {
  let component: HorizontalPatientComponent;
  let fixture: ComponentFixture<HorizontalPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
