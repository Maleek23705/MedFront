import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSecretaryComponent } from './topbar-secretary.component';

describe('TopbarSecretaryComponent', () => {
  let component: TopbarSecretaryComponent;
  let fixture: ComponentFixture<TopbarSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
