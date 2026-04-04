import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export type MedicationIconColor = 'teal' | 'blue' | 'orange' | 'purple';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  icon: string;
  iconColor: MedicationIconColor;
  schedule: {
    time: string;
    timeIcon: string;
    mealTime: string;
    mealIcon: string;
  };
}

export interface MedicationState {
  showData: boolean;
}

// ===============================================
// COMPONENT
// ===============================================

@Component({
  selector: 'app-medications-card',
  templateUrl: './medications-card.component.html',
  styleUrls: ['./medications-card.component.scss'],
  imports: [CommonModule],

})
export class MedicationsCardComponent {
  // ===============================================
  // MOCK DATA - With medications
  // ===============================================

  medicationsWithData: Medication[] = [
    {
      id: 'med-001',
      name: 'Metformin',
      dosage: '500mg • 1 tablet',
      icon: 'ri-bill-line',
      iconColor: 'teal',
      schedule: {
        time: '8:00 AM',
        timeIcon: 'ri-time-line',
        mealTime: 'With breakfast',
        mealIcon: 'ri-restaurant-line'
      }
    },
    {
      id: 'med-002',
      name: 'Lisinopril',
      dosage: '10mg • 1 tablet',
      icon: 'ri-heart-pulse-line',
      iconColor: 'blue',
      schedule: {
        time: '9:00 PM',
        timeIcon: 'ri-time-line',
        mealTime: 'Before sleep',
        mealIcon: 'ri-moon-line'
      }
    },
    {
      id: 'med-003',
      name: 'Vitamin D3',
      dosage: '2000 IU • 1 softgel',
      icon: 'ri-flask-line',
      iconColor: 'orange',
      schedule: {
        time: '12:00 PM',
        timeIcon: 'ri-time-line',
        mealTime: 'Lunchtime',
        mealIcon: 'ri-sun-line'
      }
    }
  ];

  // ===============================================
  // EMPTY STATE DATA
  // ===============================================

  emptyStateData = {
    icon: 'ri-capsule-line',
    title: 'No medications yet',
    description: 'Your prescriptions and supplements will appear here once added by your healthcare provider.',
    buttonText: 'Add Medication',
    buttonIcon: 'ri-add-line'
  };

  // ===============================================
  // STATE
  // ===============================================

  showDataState: boolean = true;

  // ===============================================
  // GETTERS
  // ===============================================

  get medications(): Medication[] {
    return this.showDataState ? this.medicationsWithData : [];
  }

  get isEmpty(): boolean {
    return !this.showDataState;
  }

  get hasMedications(): boolean {
    return this.medications.length > 0;
  }

  get totalMedications(): number {
    return this.medicationsWithData.length;
  }

  // ===============================================
  // METHODS
  // ===============================================

  /**
   * Toggle between data and empty state
   * For testing purposes
   */
  toggleState(): void {
    this.showDataState = !this.showDataState;
  }

  /**
   * Set to data state (with medications)
   */
  showData(): void {
    this.showDataState = true;
  }

  /**
   * Set to empty state (first login / no data)
   */
  showEmpty(): void {
    this.showDataState = false;
  }

  /**
   * Handle add medication button click
   */
  onAddMedication(): void {
    console.log('Add medication clicked');
    // TODO: Implement navigation to add medication form
  }

  /**
   * Handle medication item click
   */
  onMedicationClick(medication: Medication): void {
    console.log('Medication clicked:', medication);
    // TODO: Implement medication detail view
  }

  /**
   * Handle header add button click
   */
  onHeaderAdd(): void {
    console.log('Header add clicked');
    // TODO: Implement navigation to add medication form
  }

  /**
   * Get icon color class
   */
  getIconColorClass(color: MedicationIconColor): string {
    return `med-item__icon--${color}`;
  }

  /**
   * TrackBy function for ngFor optimization
   */
  trackByMedicationId(index: number, medication: Medication): string {
    return medication.id;
  }
}