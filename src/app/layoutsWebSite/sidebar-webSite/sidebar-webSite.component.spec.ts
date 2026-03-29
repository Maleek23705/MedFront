import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar_WebsiteComponent } from './sidebar-webSite.component';

describe('Sidebar_WebsiteComponent', () => {
  let component: Sidebar_WebsiteComponent;
  let fixture: ComponentFixture<Sidebar_WebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidebar_WebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidebar_WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
