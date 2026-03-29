import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAdminComponent } from './horizontalAdmin.component';

describe('HorizontalAdminComponent', () => {
  let component: HorizontalAdminComponent;
  let fixture: ComponentFixture<HorizontalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
