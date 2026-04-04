import { Component, OnInit } from '@angular/core';

interface Patient {
  name: string;
  condition: string;
  initials: string;
  lastVisit: string;
  colorType: 'blue' | 'green' | 'orange' | 'purple'; // Match these to SCSS classes
}

@Component({
  selector: 'app-recent-patient',
  templateUrl: './recent-patient.component.html',
  styleUrls: ['./recent-patient.component.scss'],
  standalone: false
})
export class RecentPatientComponent implements OnInit {

  recentPatients: Patient[] = [
    {
      name: 'John Doe',
      condition: 'Hypertension',
      initials: 'JD',
      lastVisit: '2 hours ago',
      colorType: 'blue'
    },
    {
      name: 'Sarah Kim',
      condition: 'Type 2 Diabetes',
      initials: 'SK',
      lastVisit: 'Today, 10:30',
      colorType: 'green'
    },
    {
      name: 'Mike Ross',
      condition: 'Annual physical',
      initials: 'MR',
      lastVisit: 'Yesterday',
      colorType: 'orange'
    },
    {
      name: 'Lisa Wong',
      condition: 'Post-op follow-up',
      initials: 'LW',
      lastVisit: 'Yesterday',
      colorType: 'purple'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  // Function to handle clicking a patient (for navigation)
  viewPatientDetails(patient: Patient): void {
    console.log('Navigating to details for:', patient.name);
    // this.router.navigate(['/patients', patient.id]);
  }
}