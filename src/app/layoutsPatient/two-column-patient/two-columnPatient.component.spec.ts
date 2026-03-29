import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnPatientComponent } from './two-columnPatient.component';

describe('TwoColumnPatientComponent', () => {
  let component: TwoColumnPatientComponent;
  let fixture: ComponentFixture<TwoColumnPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
