import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWebSiteComponent } from './footerWebSite.component';

describe('FooterWebSiteComponent', () => {
  let component: FooterWebSiteComponent;
  let fixture: ComponentFixture<FooterWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
