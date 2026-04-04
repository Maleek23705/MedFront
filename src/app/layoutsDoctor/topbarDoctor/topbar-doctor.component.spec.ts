import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarDoctorComponent } from './topbar-doctor.component';

describe('TopbarDoctorComponent', () => {
  let component: TopbarDoctorComponent;
  let fixture: ComponentFixture<TopbarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
