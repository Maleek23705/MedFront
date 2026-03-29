import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientExtern } from './viewPatient';

describe('ViewPatient', () => {
  let component: ViewPatientExtern;
  let fixture: ComponentFixture<ViewPatientExtern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPatientExtern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPatientExtern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
