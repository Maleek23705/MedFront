import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar_adminComponent } from './sidebar-admin.component';

describe('SidebarAdminComponent', () => {
  let component: Sidebar_adminComponent;
  let fixture: ComponentFixture<Sidebar_adminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidebar_adminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidebar_adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
