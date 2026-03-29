import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarPatientComponent } from './two-column-sidebarPatient.component';

describe('TwoColumnSidebarPatientComponent', () => {
  let component: TwoColumnSidebarPatientComponent;
  let fixture: ComponentFixture<TwoColumnSidebarPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSidebarPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSidebarPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
