import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWebSiteComponent } from './sidebarWebSite.component';

describe('SidebarComponent', () => {
  let component: SidebarWebSiteComponent;
  let fixture: ComponentFixture<SidebarWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
