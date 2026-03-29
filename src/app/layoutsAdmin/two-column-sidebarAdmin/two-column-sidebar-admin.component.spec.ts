import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarAdminComponent } from './two-column-sidebar-admin.component';

describe('TwoColumnSidebarAdminComponent', () => {
  let component: TwoColumnSidebarAdminComponent;
  let fixture: ComponentFixture<TwoColumnSidebarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSidebarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSidebarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
