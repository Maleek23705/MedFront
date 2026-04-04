import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InsuranceProvider {
  id: number;
  name: string;
  patientName: string;
  policyNumber: string;
  type: 'CNAM' | 'STAR' | 'GAT' | 'MAE'; // Common Tunisian providers
  expiryDate: Date;
  status: 'Active' | 'Expired' | 'Pending';
}

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  insurances: InsuranceProvider[] = [
    { id: 1, name: 'CNAM', patientName: 'Malek Abidi', policyNumber: 'TN-99283', type: 'CNAM', expiryDate: new Date('2026-12-01'), status: 'Active' },
    { id: 2, name: 'STAR Assurance', patientName: 'Sami Khiari', policyNumber: 'ST-44102', type: 'STAR', expiryDate: new Date('2024-05-20'), status: 'Expired' },
    { id: 3, name: 'GAT', patientName: 'Yassine Ben Ali', policyNumber: 'GT-00211', type: 'GAT', expiryDate: new Date('2026-01-15'), status: 'Pending' }
  ];

  constructor() {}

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}