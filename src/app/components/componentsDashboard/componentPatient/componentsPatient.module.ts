import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';


import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TranslateModule } from '@ngx-translate/core';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';
import { RouterModule, Routes } from '@angular/router';


// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/dashboardPatient',
    pathMatch: 'full'
  },
  {
        path: 'patients',
        //component: AddPatientComponent,
        loadChildren: () => import('../componentPatient/crudPatients/crudPatients.module').then(m => m.CrudPatientsModule),
  },
  {
        path: 'dashboard',
        loadChildren: () => import('../componentPatient/dashboardPatient/dashboardPatient.module').then(m => m.DashboardPatientModule),
  },
  {
  path: 'appointments',
  loadChildren: () =>
    import('../commonComponentsDash/appointments/appointments.module')
      .then(m => m.AppointmentsModule)
  }
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    TranslateModule,
    NgbProgressbarModule,
    RouterModule.forChild(routes),
    FlatpickrModule.forRoot(),
    CountUpModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    SlickCarouselModule,
    LightboxModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsPatientModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}