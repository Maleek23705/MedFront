import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

// Charts & Plugins
import { NgApexchartsModule } from 'ng-apexcharts';

// Shared Module - FIX: You must import the module itself
import { CommonComponentsDashModule } from '../../commonComponentsDash/common-components-dash.module';

// Dashboard Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { EngagementPanelSecretaryComponent } from './engagement-panel-secretary/engagement-panel-secretary.component';
import { WaitingListPreviewComponent } from './waiting-list-preview/waiting-list-preview.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RecentPatientComponent } from './recent-patient/recent-patient.component';

// FIX: Do NOT import CalendarLegendComponent here if it is declared in CommonComponentsDashModule

@NgModule({
  declarations: [
    DashboardComponent,
    EngagementPanelSecretaryComponent,
    WidgetsComponent,
    AgendaComponent,
    RecentPatientComponent
    // CalendarLegendComponent is removed from here to follow the "One Declaration" rule
  ],
  imports: [
    CommonModule,
    WaitingListPreviewComponent,
    CommonComponentsDashModule, // This now provides CalendarLegendComponent to this module
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule,
    NgApexchartsModule 
  ],
  exports: [
    DashboardComponent,
    EngagementPanelSecretaryComponent,
    WidgetsComponent, 
    AgendaComponent,
    RecentPatientComponent
  ]
})
export class DashboardSecretaryModule { }