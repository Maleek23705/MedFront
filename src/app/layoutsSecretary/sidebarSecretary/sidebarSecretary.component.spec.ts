import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSECRETARYComponent } from './sidebarSecretary.component';

describe('SidebarSECRETARYComponent', () => {
  let component: SidebarSECRETARYComponent;
  let fixture: ComponentFixture<SidebarSECRETARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSECRETARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSECRETARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
