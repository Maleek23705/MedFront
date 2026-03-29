import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDoctorComponent } from './verticalDoctor.component';

describe('VerticalDoctorComponent', () => {
  let component: VerticalDoctorComponent;
  let fixture: ComponentFixture<VerticalDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
