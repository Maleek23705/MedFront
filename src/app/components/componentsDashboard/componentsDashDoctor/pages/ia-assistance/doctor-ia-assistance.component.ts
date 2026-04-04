import { Component } from '@angular/core';

/** Route : `/doctor/ia-assistance` — menu : AI assistance */
@Component({
  selector: 'app-doctor-ia-assistance',
  templateUrl: './doctor-ia-assistance.component.html',
  standalone: false,
})
export class DoctorIaAssistanceComponent {
  prompt = '';
  suggestions: string[] = [];

  runAssist(): void {
    if (!this.prompt.trim()) {
      return;
    }
    this.suggestions = [
      `Possible follow-up tests for: ${this.prompt}`,
      'Check drug interactions before final prescription',
      'Generate concise visit summary for patient portal',
    ];
  }
}
