import { Component } from '@angular/core';
import { QuickAction } from '../quick-actions/quick-actions.model';

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboardPatient.component.html',
  styleUrl: './dashboardPatient.component.scss',
  standalone: false
})
export class DashboardPatientComponent {
   userName: string = 'Kmar';
 
  handleJoinNow(): void {
    console.log('Join Now clicked');
  }
 
  handleViewDetails(): void {
    console.log('View Details clicked');
  }
  
  handleQuickAction(id: QuickAction['id']): void {
  switch (id) {
    case 'book':    /* navigate to booking */ break;
    case 'message': /* open message dialog */ break;
    case 'ai':      /* open AI chat        */ break;
    case 'lab':     /* navigate to lab     */ break;
  }
}

}
 