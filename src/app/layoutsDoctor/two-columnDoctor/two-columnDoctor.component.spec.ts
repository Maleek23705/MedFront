import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnDoctorComponent } from './two-columnDoctor.component';

describe('TwoColumnDoctorComponent', () => {
  let component: TwoColumnDoctorComponent;
  let fixture: ComponentFixture<TwoColumnDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
