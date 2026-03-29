import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDoctorComponent } from './layoutsDoctor.component';

describe('LayoutDoctorComponent', () => {
  let component: LayoutDoctorComponent;
  let fixture: ComponentFixture<LayoutDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
