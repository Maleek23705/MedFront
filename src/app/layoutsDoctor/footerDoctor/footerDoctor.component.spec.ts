import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDoctorComponent } from './footerDoctor.component';

describe('FooterDoctorComponent', () => {
  let component: FooterDoctorComponent;
  let fixture: ComponentFixture<FooterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
