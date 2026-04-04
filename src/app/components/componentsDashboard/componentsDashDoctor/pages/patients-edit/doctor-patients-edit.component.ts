import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-patients-edit',
  templateUrl: './doctor-patients-edit.component.html',
  standalone: false,
})
export class DoctorPatientsEditComponent {
  patient = {
    firstName: 'John',
    lastName: 'Smith',
    phone: '+216 55 100 200',
    chronic: 'Hypertension',
  };

  constructor(private router: Router) {}

  update(): void {
    this.router.navigate(['/doctor', 'patients']);
  }
}
