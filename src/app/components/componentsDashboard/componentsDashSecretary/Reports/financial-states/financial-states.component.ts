import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financial-states',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-states.component.html',
  styleUrl: './financial-states.component.scss'
})
export class FinancialStatesComponent implements OnInit {
  currentMonth: string = 'April 2026';

  // Mock financial data
  financials = {
    totalIncome: 15420.000,
    totalExpenses: 4200.500,
    netBalance: 11219.500,
    taxEstimate: 1079.400 // 7% VAT estimate
  };

  transactions = [
    { date: '2026-04-01', category: 'Consultations', desc: 'Monthly Patient Fees', type: 'Income', amount: 12500.000 },
    { date: '2026-04-02', category: 'Supplies', desc: 'Medical Gloves & Gauze', type: 'Expense', amount: 450.000 },
    { date: '2026-04-03', category: 'Rent', desc: 'Cabinet Office Rent', type: 'Expense', amount: 1200.000 },
    { date: '2026-04-04', category: 'Insurance', desc: 'Professional Liability', type: 'Expense', amount: 300.000 }
  ];

  constructor() {}

  ngOnInit(): void {}

  exportPDF() {
    alert('Exporting Financial Statement for ' + this.currentMonth);
  }
}