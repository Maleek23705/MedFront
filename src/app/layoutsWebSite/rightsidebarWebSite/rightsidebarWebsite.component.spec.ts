import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidebarWebsiteComponent } from './rightsidebarWebsite.component';

describe('RightsidebarWebsiteComponent', () => {
  let component: RightsidebarWebsiteComponent;
  let fixture: ComponentFixture<RightsidebarWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsidebarWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidebarWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
