import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topbar_websiteComponent } from './topbar-webSite.component';

describe('Topbar_websiteComponent', () => {
  let component: Topbar_websiteComponent;
  let fixture: ComponentFixture<Topbar_websiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topbar_websiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topbar_websiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
