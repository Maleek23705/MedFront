import { Component } from '@angular/core';

/** Route : `/doctor/ia-planning` — menu : AI scheduling */
@Component({
  selector: 'app-doctor-ia-planning',
  templateUrl: './doctor-ia-planning.component.html',
  standalone: false,
})
export class DoctorIaPlanningComponent {
  recommendations = [
    'Move A-102 to 11:00 to reduce waiting overlap.',
    'Reserve one teleconsultation slot at 16:30.',
    'Send automatic reminder to 3 high no-show patients.',
  ];
}
