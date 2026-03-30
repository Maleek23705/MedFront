import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { QuickActionsComponent } from './quick-actions.component';
import { QuickAction } from './quick-actions.model';

describe('QuickActionsComponent', () => {
  let component: QuickActionsComponent;
  let fixture: ComponentFixture<QuickActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickActionsComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  // ─── Instantiation ────────────────────────────────────────────────
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ─── Actions list ─────────────────────────────────────────────────
  it('should expose exactly 4 actions', () => {
    expect(component.actions.length).toBe(4);
  });

  it('should contain all 4 expected action ids', () => {
    const ids = component.actions.map(a => a.id);
    expect(ids).toContain('book');
    expect(ids).toContain('message');
    expect(ids).toContain('ai');
    expect(ids).toContain('lab');
  });

  // ─── Template rendering ───────────────────────────────────────────
  it('should render 4 buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(4);
  });

  it('should render "Book appointment" label', () => {
    expect(fixture.nativeElement.textContent).toContain('Book appointment');
  });

  it('should render "Message doctor" label', () => {
    expect(fixture.nativeElement.textContent).toContain('Message doctor');
  });

  it('should render "AI assistant" label', () => {
    expect(fixture.nativeElement.textContent).toContain('AI assistant');
  });

  it('should render "Lab results" label', () => {
    expect(fixture.nativeElement.textContent).toContain('Lab results');
  });


  it('should render the section label "Quick actions"', () => {
    const text = fixture.nativeElement.textContent as string;
    expect(text.toLowerCase()).toContain('quick actions');
  });
});