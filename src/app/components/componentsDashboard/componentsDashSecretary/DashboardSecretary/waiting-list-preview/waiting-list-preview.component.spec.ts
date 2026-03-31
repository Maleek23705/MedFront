import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingListPreviewComponent } from './waiting-list-preview.component';

describe('WaitingListPreviewComponent', () => {
  let component: WaitingListPreviewComponent;
  let fixture: ComponentFixture<WaitingListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingListPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
