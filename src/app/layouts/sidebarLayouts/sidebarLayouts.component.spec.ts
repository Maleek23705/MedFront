import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutsComponent } from './sidebarLayouts.component';

describe('SidebarLayoutsComponent', () => {
  let component: SidebarLayoutsComponent;
  let fixture: ComponentFixture<SidebarLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
