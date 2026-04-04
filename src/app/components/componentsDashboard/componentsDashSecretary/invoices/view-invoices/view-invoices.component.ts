import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-invoices.component.html',
  styleUrl: './view-invoices.component.scss'
})
export class ViewInvoicesComponent implements OnInit {
  searchTerm: string = '';
  
  // Mock data - replace with your .NET API service call
  invoices = [
    { id: 1, number: 'INV-8499', patient: 'Malek', date: '2026-04-04', amount: 80.785, status: 'Paid', method: 'Cash' },
    { id: 2, number: 'INV-2104', patient: 'Sami Khiari', date: '2026-04-02', amount: 120.000, status: 'Pending', method: 'Insurance' },
    { id: 3, number: 'INV-9921', patient: 'Ahmed Ben Ali', date: '2026-03-28', amount: 55.300, status: 'Cancelled', method: 'Check' }
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  get filteredInvoices() {
    return this.invoices.filter(inv => 
      inv.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      inv.number.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Paid': return 'badge-soft-success';
      case 'Pending': return 'badge-soft-warning';
      case 'Cancelled': return 'badge-soft-danger';
      default: return 'badge-soft-secondary';
    }
  }

  editInvoice(id: number) {
    this.router.navigate(['/Invoices/edit', id]);
  }

  deleteInvoice(id: number) {
    if(confirm('Are you sure you want to delete this invoice?')) {
      this.invoices = this.invoices.filter(inv => inv.id !== id);
    }
  }
}