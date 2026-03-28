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

import { AddPatient } from './addPatient/addPatient';
import { ViewPatientExtern } from './viewPatient/viewPatient';

import { ReactiveFormsModule } from '@angular/forms';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/core/services/language.service';
import { ViewreclamationsExtern } from '../../commonComponentsDash/reclamations/viewreclamations/viewreclamations';




// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";
 const routes: Routes = [
  {
        path: '',
              //component: AddPatient,
              data: {
                  title: 'patients'
              }, 
              children: [ 
                  {
                      path: 'ADD',
                      component: AddPatient,
                      data: {
                          title: 'Add patient'
                      }
                  },
              {  
                    path: 'view/:id',
                    component: ViewPatientExtern,
                    data: {
                    title: 'View patient'
                    }
                }
                ]}
]

@NgModule({
  declarations: [
    AddPatient,
    ViewPatientExtern
  ],
  imports: [
    CommonModule,
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
  exports: [RouterModule],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrudPatientsModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}