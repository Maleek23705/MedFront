import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthOverviewComponent } from './health-overview.component';

describe('HealthOverviewComponent', () => {
  let component: HealthOverviewComponent;
  let fixture: ComponentFixture<HealthOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
