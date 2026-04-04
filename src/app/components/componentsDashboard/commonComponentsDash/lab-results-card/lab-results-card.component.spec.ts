import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResultsCardComponent } from './lab-results-card.component';

describe('LabResultsCardComponent', () => {
  let component: LabResultsCardComponent;
  let fixture: ComponentFixture<LabResultsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabResultsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
