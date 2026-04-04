import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-payments.component.html',
  styleUrl: './view-payments.component.scss'
})
export class ViewPaymentsComponent implements OnInit {
  searchTerm: string = '';

  // Mock payment history
  payments = [
    { id: 501, patient: 'Malek', invoiceRef: 'INV-8499', date: '2026-04-04', amount: 80.785, method: 'Cash' },
    { id: 502, patient: 'Sami Khiari', invoiceRef: 'INV-2104', date: '2026-04-02', amount: 120.000, method: 'Insurance' },
    { id: 503, patient: 'Ahmed Ben Ali', invoiceRef: 'INV-9921', date: '2026-03-29', amount: 55.300, method: 'Check' }
  ];

  constructor(public router: Router) {} // Public to avoid ngtsc(2341) error

  ngOnInit(): void {}

  get filteredPayments() {
    return this.payments.filter(p => 
      p.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.invoiceRef.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewReceipt(id: number) {
    console.log('Generating receipt for payment:', id);
    // Logic for PDF generation or viewing receipt details
  }
}