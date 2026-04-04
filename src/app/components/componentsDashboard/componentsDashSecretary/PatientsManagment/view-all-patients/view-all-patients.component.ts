import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  id: number;
  fullName: string;
  gender: 'Male' | 'Female';
  age: number;
  phone: string;
  lastVisit: Date;
  status: 'In Treatment' | 'Recovered' | 'New';
}

@Component({
  selector: 'app-view-all-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.scss']
})
export class ViewAllPatientsComponent implements OnInit {
  searchTerm: string = '';
  
  patients: Patient[] = [
    { id: 1, fullName: 'Ahmed Ben Salem', gender: 'Male', age: 45, phone: '+216 98 123 456', lastVisit: new Date('2026-03-28'), status: 'In Treatment' },
    { id: 2, fullName: 'Sonia Mansour', gender: 'Female', age: 32, phone: '+216 22 555 888', lastVisit: new Date('2026-04-01'), status: 'New' },
    { id: 3, fullName: 'Youssef Gharbi', gender: 'Male', age: 29, phone: '+216 55 444 333', lastVisit: new Date('2026-02-15'), status: 'Recovered' },
    { id: 4, fullName: 'Leila Toumi', gender: 'Female', age: 54, phone: '+216 97 000 111', lastVisit: new Date('2026-03-30'), status: 'In Treatment' },
  ];

  constructor() {}

  ngOnInit(): void {}

  get filteredPatients() {
    return this.patients.filter(p => 
      p.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.phone.includes(this.searchTerm)
    );
  }

  deletePatient(id: number) {
    if(confirm('Are you sure you want to delete this patient record?')) {
      this.patients = this.patients.filter(p => p.id !== id);
    }
  }
}