import { Component } from '@angular/core';

@Component({
  selector: 'app-waiting-list-preview',
  templateUrl: './waiting-list-preview.component.html',
  styleUrls: ['./waiting-list-preview.component.scss'],
  standalone:false
})
export class WaitingListPreviewComponent {

  // Liste d'objets sans interface (type any)
  patients: any[] = [
    { nom: 'Ahmed Mansour', heure: '14:30', status: 'Urgent' },
    { nom: 'Sonia Ben Ali', heure: '14:45', status: 'En attente' },
    { nom: 'Kamal Dridi', heure: '15:00', status: 'Consultation' },
    { nom: 'Lina Guesmi', heure: '15:15', status: 'En attente' }
  ];

  constructor() { }

  // Fonction pour attribuer une classe CSS selon le statut
  getBadgeClass(status: string): string {
    switch (status) {
      case 'Urgent': return 'badge-red';
      case 'Consultation': return 'badge-blue';
      default: return 'badge-gray';
    }
  }
}