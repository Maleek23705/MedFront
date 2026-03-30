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

import { DoctorPatientsComponent } from './pages/patients/doctor-patients.component';
import { DoctorRendezVousComponent } from './pages/rendez-vous/doctor-rendez-vous.component';
import { DoctorAgendaComponent } from './pages/agenda/doctor-agenda.component';
import { DoctorDossierMedicalComponent } from './pages/dossier-medical/doctor-dossier-medical.component';
import { DoctorOrdonnancesComponent } from './pages/ordonnances/doctor-ordonnances.component';
import { DoctorDocumentsComponent } from './pages/documents/doctor-documents.component';
import { DoctorTeleconsultationComponent } from './pages/teleconsultation/doctor-teleconsultation.component';
import { DoctorMessagerieComponent } from './pages/messagerie/doctor-messagerie.component';
import { DoctorSuiviChroniqueComponent } from './pages/suivi-chronique/doctor-suivi-chronique.component';
import { DoctorFacturationComponent } from './pages/facturation/doctor-facturation.component';
import { DoctorIaAssistanceComponent } from './pages/ia-assistance/doctor-ia-assistance.component';
import { DoctorIaPlanningComponent } from './pages/ia-planning/doctor-ia-planning.component';
import { DoctorReportingComponent } from './pages/reporting/doctor-reporting.component';
import { DoctorParametresComponent } from './pages/parametres/doctor-parametres.component';



// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";

const routes: Routes = [
  {
        path: 'doctors',
        //component: AddDoctorsComponent,
        loadChildren: () => import('../componentsDashDoctor/doctors/doctors.module').then(m => m.DoctorsModule),
  },

  {
        path: 'reclamations',
        //component: AdduserComponent,
        loadChildren: () => import('../commonComponentsDash/reclamations/reclamations.module').then(m => m.ReclamationsModule),
  }, 
  
  { path: 'rendez-vous', component: DoctorRendezVousComponent },
  { path: 'agenda', component: DoctorAgendaComponent },
  { path: 'dossier-medical', component: DoctorDossierMedicalComponent },
  { path: 'ordonnances', component: DoctorOrdonnancesComponent },

  { path: 'documents', component: DoctorDocumentsComponent },
  { path: 'teleconsultation', component: DoctorTeleconsultationComponent },
  { path: 'messagerie', component: DoctorMessagerieComponent },
  { path: 'suivi-chronique', component: DoctorSuiviChroniqueComponent },

  { path: 'facturation', component: DoctorFacturationComponent },
  { path: 'ia-assistance', component: DoctorIaAssistanceComponent },
  { path: 'ia-planning', component: DoctorIaPlanningComponent },
  { path: 'reporting', component: DoctorReportingComponent },
  { path: 'parametres', component: DoctorParametresComponent },
            
   ] 


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
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
export class ComponentsDashDoctorModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}