import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnWebSiteComponent } from './two-column-WebSite.component';

describe('TwoColumnWebSiteComponent', () => {
  let component: TwoColumnWebSiteComponent;
  let fixture: ComponentFixture<TwoColumnWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
