import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTopbar_websiteComponent } from './horizontal-topbarWebSite.component';

describe('HorizontalTopbarWebsiteComponent', () => {
  let component: HorizontalTopbar_websiteComponent;
  let fixture: ComponentFixture<HorizontalTopbar_websiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTopbar_websiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTopbar_websiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
