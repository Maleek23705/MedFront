import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-waiting-list-preview',
  templateUrl: './waiting-list-preview.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./waiting-list-preview.component.scss']
})
export class WaitingListPreviewComponent implements OnInit {
  patients = [
    { name: 'John Smith', time: '09:30 AM', reason: 'Follow-up', status: 'Waiting', color: '#e0e7ff' },
    { name: 'Mary Johnson', time: '10:15 AM', reason: 'Consultation', status: 'In-Progress', color: '#fef3c7' },
    { name: 'David Chen', time: '10:45 AM', reason: 'Check-up', status: 'Waiting', color: '#dcfce7' },
    { name: 'Emma Wilson', time: '11:15 AM', reason: 'Vaccination', status: 'Priority', color: '#fae8ff' },
    { name: 'James Brown', time: '11:30 AM', reason: 'Consultation', status: 'Waiting', color: '#ffedd5' }
  ];

  constructor() { }

  ngOnInit(): void { }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}