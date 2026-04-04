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
import { LayoutsPatientModule } from '../layoutsPatient/layoutPatient.module';
import { LayoutDoctorComponent } from './layoutsDoctor.component';
import { VerticalDoctorComponent } from './verticalDoctor/verticalDoctor.component';
import { SidebarDoctorComponent } from './sidebarDoctor/sidebarDoctor.component';
import { FooterDoctorComponent } from './footerDoctor/footerDoctor.component';
import { TopbarDoctorComponent } from './topbarDoctor/topbar-doctor.component';
import { TwoColumnDoctorComponent } from './two-columnDoctor/two-columnDoctor.component';
import { TwoColumnSidebarDoctorComponent } from './two-column-sidebarDoctor/two-column-sidebarDoctor.component';
// import { CdkAriaLive } from "../../../node_modules/@angular/cdk/a11y/index";
import { A11yModule } from "@angular/cdk/a11y";


@NgModule({
  declarations: [
    LayoutDoctorComponent,
    VerticalDoctorComponent,
    SidebarDoctorComponent,
    FooterDoctorComponent,
    TwoColumnDoctorComponent,
    TwoColumnSidebarDoctorComponent,
    TopbarDoctorComponent
  ],
  imports: [
    LayoutsPatientModule,
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
    NgbCollapseModule,
    FormsModule, ReactiveFormsModule,
    A11yModule
    // CdkAriaLive
],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [LanguageService]
})
export class LayoutsDoctorModule { }