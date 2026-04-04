import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MedicalRecord {
  id: number;
  patientName: string;
  cin: string;
  bloodGroup: string;
  lastVisit: Date;
  lastBP: string; // Blood Pressure
  chronicConditions: string[];
  status: 'Critical' | 'Stable' | 'Follow-up';
}

@Component({
  selector: 'app-view-records',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.scss']
})
export class ViewRecordsComponent implements OnInit {
  searchTerm: string = '';
  
  records: MedicalRecord[] = [
    { id: 101, patientName: 'Ahmed Ben Salem', cin: '09887766', bloodGroup: 'A+', lastVisit: new Date('2026-03-28'), lastBP: '120/80', chronicConditions: ['Diabetes'], status: 'Stable' },
    { id: 102, patientName: 'Sonia Mansour', cin: '11223344', bloodGroup: 'O-', lastVisit: new Date('2026-04-01'), lastBP: '145/95', chronicConditions: ['Asthma'], status: 'Critical' },
    { id: 103, patientName: 'Youssef Gharbi', cin: '07445522', bloodGroup: 'B+', lastVisit: new Date('2026-02-15'), lastBP: '110/70', chronicConditions: [], status: 'Follow-up' },
    { id: 104, patientName: 'Leila Toumi', cin: '05554433', bloodGroup: 'AB+', lastVisit: new Date('2026-03-30'), lastBP: '128/82', chronicConditions: ['Hypertension'], status: 'Stable' },
  ];

  constructor() {}

  ngOnInit(): void {}

  get filteredRecords() {
    return this.records.filter(r => 
      r.patientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      r.cin.includes(this.searchTerm)
    );
  }

  getBloodGroupClass(group: string): string {
    return group.replace('+', '-pos').replace('-', '-neg');
  }
}