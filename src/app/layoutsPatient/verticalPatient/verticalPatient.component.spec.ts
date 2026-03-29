import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPatientComponent } from './verticalPatient.component';

describe('VerticalPatientComponent', () => {
  let component: VerticalPatientComponent;
  let fixture: ComponentFixture<VerticalPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
