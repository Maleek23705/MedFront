import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWebSiteComponent } from './layoutsWebSite.component';

describe('LayoutWebSiteComponent', () => {
  let component: LayoutWebSiteComponent;
  let fixture: ComponentFixture<LayoutWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
