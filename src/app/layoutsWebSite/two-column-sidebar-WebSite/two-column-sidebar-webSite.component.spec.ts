import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarWebSiteComponent } from './two-column-sidebar-webSite.component';

describe('TwoColumnSidebarWebSiteComponent', () => {
  let component: TwoColumnSidebarWebSiteComponent;
  let fixture: ComponentFixture<TwoColumnSidebarWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSidebarWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSidebarWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
