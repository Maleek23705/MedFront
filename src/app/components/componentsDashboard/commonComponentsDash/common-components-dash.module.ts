import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { StatusBadgeComponent } from './status-badge/status-badge.component';
import { CalendarLegendComponent } from './calendar/calendar-legend.component';
import { MedicationsCardComponent } from './medicalRecords/medications-card/medications-card.component';
import { LabResultsCardComponent } from './lab-results-card/lab-results-card.component';


@NgModule({
  declarations: 
  [DashboardShellComponent, 
    StatusBadgeComponent, 
    CalendarLegendComponent,
    
  ],
  imports:
  [CommonModule, 
    RouterModule,
  MedicationsCardComponent,
  LabResultsCardComponent],
  exports: 
  [DashboardShellComponent, 
    StatusBadgeComponent, 
    CalendarLegendComponent,
    MedicationsCardComponent,
    LabResultsCardComponent],
})
export class CommonComponentsDashModule {}
