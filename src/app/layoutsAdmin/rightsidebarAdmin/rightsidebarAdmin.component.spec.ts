import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidebarAdminComponent } from './rightsidebarAdmin.component';

describe('RightsidebarAdminComponent', () => {
  let component: RightsidebarAdminComponent;
  let fixture: ComponentFixture<RightsidebarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsidebarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidebarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
