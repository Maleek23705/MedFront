import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarWebSiteComponent } from './topbarWebSite.component';

describe('TopbarWebSiteComponent', () => {
  let component: TopbarWebSiteComponent;
  let fixture: ComponentFixture<TopbarWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarWebSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
