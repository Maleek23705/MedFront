import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-patients-add',
  templateUrl: './doctor-patients-add.component.html',
  standalone: false,
})
export class DoctorPatientsAddComponent {
  patient = {
    firstName: '',
    lastName: '',
    phone: '',
    chronic: '',
  };

  constructor(private router: Router) {}

  save(): void {
    if (!this.patient.firstName || !this.patient.lastName || !this.patient.phone) {
      return;
    }
    this.router.navigate(['/doctor', 'patients']);
  }
}
