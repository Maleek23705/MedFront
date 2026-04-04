import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatesComponent } from './financial-states.component';

describe('FinancialStatesComponent', () => {
  let component: FinancialStatesComponent;
  let fixture: ComponentFixture<FinancialStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
