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

import { CreateRecordComponent } from './create-record/create-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { ViewRecordComponent } from './view-record/view-record.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from 'src/app/core/services/language.service';


 const routes: Routes = [
  {
      path: '',
      data: {
          title: 'Patient Record'
      }, 
      children: [ 
          {
              path: 'create',
              component: CreateRecordComponent,
              data: {
                  title: 'create record'
              }
          },
          {
              path: 'edit/:id',
              component: EditRecordComponent,
              data: {
                  title: 'edit record'
              }
          },
          {
              path: 'view/:id',
              component: ViewRecordComponent,
              data: {
                  title: 'view record'
              }
          }
        ]
 } 
]

@NgModule({
  declarations: [
   
    
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
    ReactiveFormsModule,
    CreateRecordComponent,
    EditRecordComponent,
    ViewRecordComponent
  ],
  exports: [RouterModule],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientRecordModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
