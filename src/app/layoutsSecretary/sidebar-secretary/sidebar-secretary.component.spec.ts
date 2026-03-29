import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSecretaryComponent } from './sidebar-secretary.component';

describe('SidebarSecretaryComponent', () => {
  let component: SidebarSecretaryComponent;
  let fixture: ComponentFixture<SidebarSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
