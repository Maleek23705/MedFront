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
import { LayoutSecretaryComponent } from './layoutsSecretary.component';
import { VerticalSecretaryComponent } from './verticalSecretary/verticalSecretary.component';
import { SidebarSecretaryComponent } from './sidebar-secretary/sidebar-secretary.component';
import { SidebarSECRETARYComponent } from './sidebarSecretary/sidebarSecretary.component';
import { FooterSecretaryComponent } from './footerSecretary/footerSecretary.component';
import { RightsidebarComponent } from './rightsidebarSecretary/rightsidebarSecretary.component';
import { TwoColumnSecretaryComponent } from './two-column-secretary/two-column-secretary.component';
import { TwoColumnSidebarSecretaryComponent } from './two-column-sidebar-secretary/two-column-sidebar-secretary.component';
// import { CdkAriaLive } from "../../../node_modules/@angular/cdk/a11y/index";
import { A11yModule } from "@angular/cdk/a11y";


@NgModule({
  declarations: [
    LayoutSecretaryComponent,
    VerticalSecretaryComponent,
    SidebarSECRETARYComponent,
    FooterSecretaryComponent,
    RightsidebarComponent,
    TwoColumnSecretaryComponent,
    TwoColumnSidebarSecretaryComponent,
    SidebarSecretaryComponent
  ],
  imports: [
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
export class LayoutsSecretaryModule { }
