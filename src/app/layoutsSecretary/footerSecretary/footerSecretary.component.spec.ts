import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecretaryComponent } from './footerSecretary.component';

describe('FooterSecretaryComponent', () => {
  let component: FooterSecretaryComponent;
  let fixture: ComponentFixture<FooterSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
