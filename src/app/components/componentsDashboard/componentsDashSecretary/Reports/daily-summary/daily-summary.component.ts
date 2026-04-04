import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-summary.component.html',
  styleUrl: './daily-summary.component.scss'
})
export class DailySummaryComponent implements OnInit {
  today = new Date();
  
  // Mock data for the daily report
  summary = {
    totalAppointments: 18,
    completedConsultations: 14,
    newPatients: 5,
    totalRevenue: 1245.500,
    pendingPayments: 210.000
  };

  recentActivities = [
    { time: '09:15 AM', action: 'Payment Received', patient: 'Malek', amount: '80.785 TND', icon: 'ri-money-dollar-circle-line', color: 'text-success' },
    { time: '10:30 AM', action: 'New Appointment', patient: 'Sami Khiari', amount: null, icon: 'ri-calendar-check-line', color: 'text-primary' },
    { time: '11:00 AM', action: 'Invoice Generated', patient: 'Selima Abid', amount: '120.000 TND', icon: 'ri-file-list-3-line', color: 'text-info' }
  ];

  constructor() {}

  ngOnInit(): void {}

  printReport() {
    window.print();
  }
}