import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the common component using its relative path
import { AddAppointmentComponent } from '../../../commonComponentsDash/appointments/add-appointment/add-appointment.component';

@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [CommonModule, AddAppointmentComponent], // Add it here
  template: `
    <div class="secretary-create-wrapper">
      <app-add-appointment 
        (close)="handleClose()" 
        (added)="handleSuccess()">
      </app-add-appointment>
    </div>
  `,
  styles: [`
    .secretary-create-wrapper {
      padding: 20px;
      background: #f8fafc; /* Matches your dashboard background */
      min-height: 100vh;
    }
  `]
})
export class CreateAppointmentComponent {
  handleClose() {
    // Logic for when the secretary cancels
  }

  handleSuccess() {
    // Refresh the agenda list or show a success toast
  }
}