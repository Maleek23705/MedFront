import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-patients-record',
  templateUrl: './doctor-patients-record.component.html',
  standalone: false,
})
export class DoctorPatientsRecordComponent {
  diagnosis = '';
  treatment = '';
  followUpDate = '';
  records = [
    { date: '2026-03-28', diagnosis: 'Seasonal allergy', treatment: 'Antihistamine' },
    { date: '2026-02-10', diagnosis: 'Type 2 diabetes', treatment: 'Diet + Metformin' },
  ];

  addRecord(): void {
    if (!this.diagnosis || !this.treatment || !this.followUpDate) {
      return;
    }
    this.records.unshift({
      date: this.followUpDate,
      diagnosis: this.diagnosis,
      treatment: this.treatment,
    });
    this.diagnosis = '';
    this.treatment = '';
    this.followUpDate = '';
  }
}
