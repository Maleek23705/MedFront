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

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';



import { ReactiveFormsModule } from '@angular/forms';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/core/services/language.service';




// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";
 const routes: Routes = [
  {
      path: '',
      //component: AdduserComponent,
      data: {
          title: 'Appointments'
      }, 
      children: [ 
          {
              path: 'create',
              component: CreateAppointmentComponent,
              data: {
                  title: 'Create Appointment'
              }
          },
          {
              path: 'update/:id',
              component: UpdateAppointmentComponent,
              data: {
                  title: 'Update appointment'
              }
          },
          {
              path: 'view/:id',
              component: ViewAppointmentsComponent,
              data: {
                  title: 'View appointment'
              }
          },
          {
              path: 'waitingList',
              component: WaitingListComponent,
              data: {
                  title: 'Waiting list'
              }
          }
        ]
 } 
]

@NgModule({
  declarations: [
     
    UpdateAppointmentComponent, 
    ViewAppointmentsComponent,
    WaitingListComponent

  ],
  imports: [
    CommonModule,
    CreateAppointmentComponent,
    FormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    FlatpickrModule.forRoot(),
    RouterModule,
    RouterModule.forChild(routes),
    CountUpModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    SlickCarouselModule,
    LightboxModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule,CreateAppointmentComponent],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentsModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
