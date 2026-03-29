import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSecretaryComponent } from './verticalSecretary.component';

describe('VerticalSecretaryComponent', () => {
  let component: VerticalSecretaryComponent;
  let fixture: ComponentFixture<VerticalSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
