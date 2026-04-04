import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// ===============================================
// INTERFACES
// ===============================================

export type LabResultStatus = 'normal' | 'optimal' | 'watch' | 'high' | 'low';

export type LabResultIconColor = 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'yellow';

export interface LabResult {
  id: string;
  name: string;
  date: string;
  value: string;
  unit: string;
  status: LabResultStatus;
  iconColor: LabResultIconColor;
  icon: string;
}

export interface LabResultsPeriod {
  label: string;
  value: string;
}

// ===============================================
// COMPONENT
// ===============================================

@Component({
  selector: 'app-lab-results-card',
  templateUrl: './lab-results-card.component.html',
  styleUrls: ['./lab-results-card.component.scss'],
  imports: [CommonModule]
})
export class LabResultsCardComponent {
  // ===============================================
  // MOCK DATA
  // ===============================================

  hasResults: boolean = true;

  labResults: LabResult[] = [
    {
      id: 'lab-001',
      name: 'Hemoglobin A1C',
      date: 'Mar 15, 2024',
      value: '5.4',
      unit: '%',
      status: 'optimal',
      iconColor: 'green',
      icon: 'ri-heart-pulse-line'
    },
    {
      id: 'lab-002',
      name: 'Fasting Glucose',
      date: 'Mar 15, 2024',
      value: '98',
      unit: 'mg/dL',
      status: 'normal',
      iconColor: 'blue',
      icon: 'ri-water-percent-line'
    },
    {
      id: 'lab-004',
      name: 'LDL Cholesterol',
      date: 'Feb 28, 2024',
      value: '142',
      unit: 'mg/dL',
      status: 'watch',
      iconColor: 'orange',
      icon: 'ri-flask-line'
    }
  ];

  periods: LabResultsPeriod[] = [
    { label: 'Last 30 Days', value: '30' },
    { label: 'Last 90 Days', value: '90' },
    { label: 'Last 6 Months', value: '180' },
    { label: 'Last Year', value: '365' }
  ];

  // ===============================================
  // STATE
  // ===============================================

  selectedPeriod: string = '90';
  isEmptyState: boolean = false;

  // ===============================================
  // GETTERS
  // ===============================================

  get currentPeriodLabel(): string {
    const period = this.periods.find(p => p.value === this.selectedPeriod);
    return period ? period.label : 'Last 90 Days';
  }

  // ===============================================
  // METHODS
  // ===============================================

  /**
   * TrackBy function for ngFor optimization
   */
  trackByLabResultId(index: number, result: LabResult): string {
    return result.id;
  }

  /**
   * Get status label
   */
  getStatusLabel(status: LabResultStatus): string {
    const labels: Record<LabResultStatus, string> = {
      'normal': 'Normal',
      'optimal': 'Optimal',
      'watch': 'Watch',
      'high': 'High',
      'low': 'Low'
    };
    return labels[status] || 'Normal';
  }

  /**
   * Get status icon
   */
  getStatusIcon(status: LabResultStatus): string {
    const icons: Record<LabResultStatus, string> = {
      'normal': 'ri-check-line',
      'optimal': 'ri-star-line',
      'watch': 'ri-eye-line',
      'high': 'ri-arrow-up-line',
      'low': 'ri-arrow-down-line'
    };
    return icons[status] || 'ri-check-line';
  }

  /**
   * Get icon color class
   */
  getIconColorClass(color: LabResultIconColor): string {
    return `lab-result__icon--${color}`;
  }

  /**
   * Get value color class
   */
  getValueColorClass(status: LabResultStatus): string {
    const colorMap: Record<LabResultStatus, string> = {
      'normal': 'green',
      'optimal': 'blue',
      'watch': 'orange',
      'high': 'red',
      'low': 'yellow'
    };
    return `lab-result__value--${colorMap[status]}`;
  }

  /**
   * Get status color class
   */
  getStatusColorClass(status: LabResultStatus): string {
    return `lab-result__status--${status}`;
  }

  /**
   * Handle period change
   */
  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
    console.log('Period changed to:', period);
    // TODO: Fetch new data for period
  }

  /**
   * Handle view all click
   */
  onViewAll(): void {
    console.log('View all lab results clicked');
    // TODO: Navigate to lab results page
  }

  /**
   * Handle more options click
   */
  onMoreOptions(): void {
    console.log('More options clicked');
    // TODO: Open options menu
  }

  /**
   * Toggle between data and empty state (for testing)
   */
  toggleState(): void {
    this.isEmptyState = !this.isEmptyState;
    console.log('State toggled. Empty state:', this.isEmptyState);
  }

  /**
   * Show data state
   */
  showData(): void {
    this.isEmptyState = false;
    console.log('Showing data state');
  }

  /**
   * Show empty state
   */
  showEmpty(): void {
    this.isEmptyState = true;
    console.log('Showing empty state');
  }
}
