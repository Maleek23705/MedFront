import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Component pages
import { LayoutPatientComponent } from './layoutPatient.component';
import { FooterPatientComponent } from './footerPatient/footerPatient.component';
import { HorizontalPatientComponent } from './horizontal-patient/horizontalPatient.component';
import { HorizontalTopbarPatientComponent } from './horizontal-topbar-Patient/horizontal-topbar-patient.component';
import { SidebarPatientComponent } from './sidebarPatient/sidebarPatient.component';
import { TopbarPatientComponent } from './topbarPatient/topbarPatient.component';
import { TwoColumnPatientComponent } from './two-column-patient/two-columnPatient.component';
import { TwoColumnSidebarPatientComponent } from './two-column-sidebar-patient/two-column-sidebarPatient.component';
import { VerticalPatientComponent } from './verticalPatient/verticalPatient.component';

@NgModule({
  declarations: [
    LayoutPatientComponent,
    HorizontalPatientComponent,
    TwoColumnPatientComponent,
    TwoColumnSidebarPatientComponent,
    TopbarPatientComponent,
    FooterPatientComponent,
    VerticalPatientComponent,
    HorizontalTopbarPatientComponent,
    SidebarPatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
    NgbCollapseModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    // Exportez le composant TopbarComponent si nécessaire
    HorizontalPatientComponent,
    HorizontalTopbarPatientComponent,
    FooterPatientComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [LanguageService]
})
export class LayoutsPatientModule { }
