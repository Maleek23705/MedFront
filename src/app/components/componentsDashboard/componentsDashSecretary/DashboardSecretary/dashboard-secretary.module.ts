import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importation des composants du dossier DashboardSecretary
import { DashboardComponent } from './dashboard/dashboard.component';
import { EngagementPanelSecretaryComponent } from './engagement-panel-secretary/engagement-panel-secretary.component';
import { WaitingListPreviewComponent } from './waiting-list-preview/waiting-list-preview.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EngagementPanelSecretaryComponent,
    WaitingListPreviewComponent,
    WidgetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent // Optionnel : permet d'utiliser <app-dashboard> dans AppModule
  ]
})
export class DashboardSecretaryModule { }