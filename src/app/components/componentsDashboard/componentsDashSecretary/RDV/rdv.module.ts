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

import { AddRdvComponent} from './add-rdv/add-rdv.component';
import { EditRdvComponent } from './edit-rdv/edit-rdv.component';
import { ViewRdvComponent } from './view-rdv/view-rdv.component';


import { ReactiveFormsModule } from '@angular/forms';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/core/services/language.service';




// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";
 const routes: Routes = [
  {
      path: '',
      data: {
          title: 'reclamations'
      }, 
      children: [ 
          {
              path: 'add',
              component: AddRdvComponent,
              data: {
                  title: 'Add Rdv'
              }
          },
          {
              path: 'edit/:id',
              component: EditRdvComponent,
              data: {
                  title: 'Edit Rdv'
              }
          },
           {
              path: 'view/:id',
              component: ViewRdvComponent,
              data: {
                  title: 'View Rdv'
              }
          }

          
        ]
 } 
]

@NgModule({
  declarations: [
    AddRdvComponent,
    EditRdvComponent,
    ViewRdvComponent
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
export class RDVModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}