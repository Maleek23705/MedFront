import { Component } from '@angular/core';

interface UpcomingTask {
  time: string;
  title: string;
  doctor?: string;
  statusText: string;
  statusType: 'confirmed' | 'pending';
}

@Component({
  selector: 'app-engagement-panel-secretary',
  standalone:false,
  templateUrl: './engagement-panel-secretary.component.html',
  styleUrls: ['./engagement-panel-secretary.component.scss']
})
export class EngagementPanelSecretaryComponent {
  
  // Dynamic list of tasks
  upcomingTasks: UpcomingTask[] = [
    {
      time: '09:00',
      title: 'Patient Check-in',
      doctor: 'Dr. Maria',
      statusText: 'Confirmed 25 mins ago',
      statusType: 'confirmed'
    },
    {
      time: '10:30',
      title: 'Lab Results Review',
      statusText: 'Waiting for data',
      statusType: 'pending'
    }
  ];

  constructor() {}

  get pendingCount(): number {
    return this.upcomingTasks.filter(t => t.statusType === 'pending').length;
  }
}