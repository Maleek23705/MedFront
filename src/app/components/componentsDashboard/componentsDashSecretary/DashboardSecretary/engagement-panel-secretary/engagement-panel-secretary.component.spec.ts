import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPanelSecretaryComponent } from './engagement-panel-secretary.component';

describe('EngagementPanelSecretaryComponent', () => {
  let component: EngagementPanelSecretaryComponent;
  let fixture: ComponentFixture<EngagementPanelSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementPanelSecretaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementPanelSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
