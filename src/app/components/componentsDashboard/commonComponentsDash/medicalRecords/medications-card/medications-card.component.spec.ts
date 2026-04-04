import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsCardComponent } from './medications-card.component';

describe('MedicationsCardComponent', () => {
  let component: MedicationsCardComponent;
  let fixture: ComponentFixture<MedicationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
