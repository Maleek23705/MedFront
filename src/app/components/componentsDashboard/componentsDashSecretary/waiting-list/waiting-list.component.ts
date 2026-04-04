import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.scss'
})
export class WaitingListComponent implements OnInit {
  searchTerm: string = '';

  // Mock data for the current day's waiting patients
  patients = [
    { id: 1, position: 1, name: 'Malek', arrivalTime: '08:30', reason: 'Routine Checkup', status: 'Waiting' },
    { id: 2, position: 2, name: 'Sami Khiari', arrivalTime: '08:45', reason: 'Follow-up', status: 'In Consultation' },
    { id: 3, position: 3, name: 'Selima Abid', arrivalTime: '09:10', reason: 'Emergency', status: 'Waiting' },
    { id: 4, position: 4, name: 'Ahmed Ben Ali', arrivalTime: '09:20', reason: 'Consultation', status: 'Waiting' }
  ];

  constructor() {}

  ngOnInit(): void {}

  get filteredPatients() {
    return this.patients.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updateStatus(patientId: number, newStatus: string) {
    const patient = this.patients.find(p => p.id === patientId);
    if (patient) {
      patient.status = newStatus;
    }
  }

  removePatient(id: number) {
    if(confirm('Remove patient from the waiting list?')) {
      this.patients = this.patients.filter(p => p.id !== id);
    }
  }
}