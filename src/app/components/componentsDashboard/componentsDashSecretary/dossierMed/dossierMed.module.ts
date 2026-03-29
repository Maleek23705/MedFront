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

import { CreateDossierComponent} from './create-dossier/create-dossier.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { ViewDossierComponent } from './view-dossier/view-dossier.component';


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
              path: 'create',
              component: CreateDossierComponent,
              data: {
                  title: 'create dossierMed'
              }
          },
          {
              path: 'edit/:id',
              component: EditDossierComponent,
              data: {
                  title: 'Edit dossierMed'
              }
          },
           {
              path: 'view/:id',
              component: ViewDossierComponent,
              data: {
                  title: 'View dossierMeds'
              }
          }

          
        ]
 } 
]

@NgModule({
  declarations: [
    CreateDossierComponent,
    EditDossierComponent,
    ViewDossierComponent
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
export class DossierMedModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
