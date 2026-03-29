import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarPatientComponent } from './topbarPatient.component';

describe('TopbarPatientComponent', () => {
  let component: TopbarPatientComponent;
  let fixture: ComponentFixture<TopbarPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
