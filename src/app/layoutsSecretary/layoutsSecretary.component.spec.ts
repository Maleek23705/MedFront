import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSecretaryComponent } from './layoutsSecretary.component';

describe('LayoutComponent', () => {
  let component: LayoutSecretaryComponent;
  let fixture: ComponentFixture<LayoutSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
