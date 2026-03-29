import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRdvComponent } from './view-rdv.component';

describe('ViewRdvComponent', () => {
  let component: ViewRdvComponent;
  let fixture: ComponentFixture<ViewRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
