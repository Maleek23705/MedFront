import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarDoctorComponent } from './two-column-sidebarDoctor.component';

describe('TwoColumnSidebarDoctorComponent', () => {
  let component: TwoColumnSidebarDoctorComponent;
  let fixture: ComponentFixture<TwoColumnSidebarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSidebarDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSidebarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
