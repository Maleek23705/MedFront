import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horizontal_WebsiteComponent } from './horizontal-webSite.component';

describe('HorizontalComponent', () => {
  let component: Horizontal_WebsiteComponent;
  let fixture: ComponentFixture<Horizontal_WebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Horizontal_WebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Horizontal_WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
