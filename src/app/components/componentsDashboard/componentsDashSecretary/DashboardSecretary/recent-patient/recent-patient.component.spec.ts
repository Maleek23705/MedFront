import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPatientComponent } from './recent-patient.component';

describe('RecentPatientComponent', () => {
  let component: RecentPatientComponent;
  let fixture: ComponentFixture<RecentPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
