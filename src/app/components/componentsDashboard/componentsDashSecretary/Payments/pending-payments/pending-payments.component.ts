import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pending-payments.component.html',
  styleUrl: './pending-payments.component.scss'
})
export class PendingPaymentsComponent implements OnInit {
  searchTerm: string = '';

  // Mock data for pending medical fees
  pendingPayments = [
    { id: 101, patient: 'Malek', invoiceRef: 'INV-8499', dueDate: '2026-04-10', amount: 80.785, daysOverdue: 0 },
    { id: 102, patient: 'Sami Khiari', invoiceRef: 'INV-2104', dueDate: '2026-04-01', amount: 120.000, daysOverdue: 3 },
    { id: 103, patient: 'Selima Abid', invoiceRef: 'INV-3302', dueDate: '2026-03-25', amount: 45.000, daysOverdue: 10 }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get filteredPayments() {
    return this.pendingPayments.filter(p => 
      p.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.invoiceRef.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getTotalPending(): number {
    return this.pendingPayments.reduce((sum, p) => sum + p.amount, 0);
  }

  processPayment(id: number) {
    // Logic to open a payment modal or navigate to checkout
    console.log('Processing payment for ID:', id);
    alert('Payment processing started.');
  }
}