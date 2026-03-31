import { Component, Output, EventEmitter } from '@angular/core';
import { QuickAction, QUICK_ACTIONS } from './quick-actions.model';

@Component({
  selector: 'app-quick-actions',
  standalone: false,
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss'
})
export class QuickActionsComponent {

  // List of available quick actions
  actions: QuickAction[] = QUICK_ACTIONS;

  // Emit when an action is clicked
  @Output() actionClicked = new EventEmitter<QuickAction['id']>();

  /**
   * Handle action button click
   */
  onActionClick(action: QuickAction): void {
    this.actionClicked.emit(action.id);
  }
}
