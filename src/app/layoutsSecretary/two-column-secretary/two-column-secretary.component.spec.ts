import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSecretaryComponent } from './two-column-secretary.component';

describe('TwoColumnSecretaryComponent', () => {
  let component: TwoColumnSecretaryComponent;
  let fixture: ComponentFixture<TwoColumnSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
