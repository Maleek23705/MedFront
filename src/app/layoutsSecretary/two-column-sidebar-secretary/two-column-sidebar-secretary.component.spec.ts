import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarSecretaryComponent } from './two-column-sidebar-secretary.component';

describe('TwoColumnSidebarSecretaryComponent', () => {
  let component: TwoColumnSidebarSecretaryComponent;
  let fixture: ComponentFixture<TwoColumnSidebarSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnSidebarSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnSidebarSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
