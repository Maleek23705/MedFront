import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPanelComponent } from './engagement-panel.component';

describe('EngagementPanelComponent', () => {
  let component: EngagementPanelComponent;
  let fixture: ComponentFixture<EngagementPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
