import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule, NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Plugins
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';

// Icons & Lottie
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

import { DashboardSecretaryModule } from './DashboardSecretary/dashboard-secretary.module'; 

// Import du composant parent pour la route
import { DashboardComponent } from './DashboardSecretary/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, 
    data: { title: 'Secretary Dashboard' }
  },
  {
    path: 'Communications',
    loadChildren: () => import('../componentsDashSecretary/Communications/communications.module').then(m => m.CommunicationsModule),
  },
  {
    path: 'PatientRecord',
    loadChildren: () => import('../componentsDashSecretary/PatientRecord/PatientRecord.module').then(m => m.PatientRecordModule),
  },
  {
    path: 'Payments',
    loadChildren: () => import('../componentsDashSecretary/Payments/payments.module').then(m => m.PaymentsModule),
  },
  {
    path: 'Appointments',
    loadChildren: () => import('../commonComponentsDash/appointments/appointments.module').then(m => m.AppointmentsModule),
  },
  {
    path: 'Reports',
    loadChildren: () => import('../componentsDashSecretary/Reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'Settings',
    loadChildren: () => import('../componentsDashSecretary/Settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'PatientsManagement',
    loadChildren: () => import('../componentsDashSecretary/PatientsManagment/PatientsManagement.module').then(m => m.PatientsManagementModule),
  },
  {
    path: 'Invoices',
    loadChildren: () => import('../componentsDashSecretary/Invoices/invoices.module').then(m => m.InvoicesModule),
  },
  {
    path: 'waiting-list',
    loadChildren: () => import('../componentsDashSecretary/waiting-list/waiting-list.module').then(m => m.WaitingListModule),
  }
];

@NgModule({
  declarations: [
    // ON LAISSE VIDE OU UNIQUEMENT LES COMPOSANTS QUI NE SONT PAS DANS DashboardSecretaryModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    CountUpModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    SlickCarouselModule,
    LightboxModule,
    LeafletModule,
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes),
    DashboardSecretaryModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsDashSecretaryModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}