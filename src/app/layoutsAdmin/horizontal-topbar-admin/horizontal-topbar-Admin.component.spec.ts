import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTopbarAdminComponent } from './horizontal-topbar-Admin.component';

describe('HorizontalTopbarAdminComponent', () => {
  let component: HorizontalTopbarAdminComponent;
  let fixture: ComponentFixture<HorizontalTopbarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTopbarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTopbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
