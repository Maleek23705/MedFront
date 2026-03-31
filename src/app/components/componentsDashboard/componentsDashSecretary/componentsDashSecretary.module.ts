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

// --- IMPORT DU MODULE QUE TU VIENS DE CRÉER ---
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
    path: 'appointments',
    loadChildren: () => import('../componentsDashSecretary/appointments/appointments.module').then(m => m.AppointmentsModule),
  },
  {
    path: 'Communications',
    loadChildren: () => import('../componentsDashSecretary/Communications/communications.module').then(m => m.CommunicationsModule),
  },
  {
    path: 'Invoices',
    loadChildren: () => import('../componentsDashSecretary/Invoices/invoices.module').then(m => m.InvoicesModule),
  },
  {
    path: 'MedRecords',
    loadChildren: () => import('../componentsDashSecretary/MedRecords/MedRecords.module').then(m => m.MedRecordsModule),
  },
  {
    path: 'Payments',
    loadChildren: () => import('../componentsDashSecretary/Payments/payments.module').then(m => m.PaymentsModule),
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
    
    // --- ON AJOUTE TON MODULE ICI ---
    DashboardSecretaryModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsDashSecretaryModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}