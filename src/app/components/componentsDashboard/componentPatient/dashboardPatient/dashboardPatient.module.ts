import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule, NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';

import { LanguageService } from 'src/app/core/services/language.service';
import { DashboardPatientComponent } from './dashboardPatient.component';
import { EngagementPanelComponent } from '../engagement-panel/engagement-panel.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { HealthOverviewComponent } from '../health-overview/health-overview.component';
import { MedicationsCardComponent } from '../../commonComponentsDash/medicalRecords/medications-card/medications-card.component';
import { LabResultsCardComponent } from '../../commonComponentsDash/lab-results-card/lab-results-card.component';

import { AppointmentsModule } from '../../commonComponentsDash/appointments/appointments.module'; 

const routes: Routes = [
  {
    path: '',
    data: { title: 'dashboardPatient' },
    children: [
      {
        path: 'dashboardPatient',
        component: DashboardPatientComponent,
        data: { title: 'Dashboard Patient' }
      }
    ],

  }
];

@NgModule({
  declarations: [
    DashboardPatientComponent,
    EngagementPanelComponent,
    QuickActionsComponent,
    HealthOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    FlatpickrModule.forRoot(),
    RouterModule,
    RouterModule.forChild(routes),
    CountUpModule,
    NgApexchartsModule,
    LeafletModule,
    SimplebarAngularModule,
    SlickCarouselModule,
    LightboxModule,
    TranslateModule,
    AppointmentsModule, 
    MedicationsCardComponent,
    LabResultsCardComponent
  ],
  exports: [RouterModule],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPatientModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}