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
import { LayoutAdminComponent } from './layoutAdmin.component';
import { VerticalAdminComponent } from './verticalAdmin/verticalAdmin.component';
import { TopbarAdminComponent } from './topbarAdmin/topbarAdmin.component';
import { Sidebar_adminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarAdminComponent } from './sidebarAdmin/sidebarAdmin.component';
 import { FooterAdminComponent } from './footerAdmin/footerAdmin.component';
 import { RightsidebarAdminComponent } from './rightsidebarAdmin/rightsidebarAdmin.component';
 import { HorizontalAdminComponent } from './horizontalAdmin/horizontalAdmin.component';
 import { HorizontalTopbarAdminComponent } from './horizontal-topbar-admin/horizontal-topbar-Admin.component';
import { TwoColumnAdminComponent } from './two-columnAdmin/two-column-admin.component';
import { TwoColumnSidebarAdminComponent } from './two-column-sidebarAdmin/two-column-sidebar-admin.component';



@NgModule({
  declarations: [
    LayoutAdminComponent,
    VerticalAdminComponent,
    TopbarAdminComponent,
    Sidebar_adminComponent,
    FooterAdminComponent,
    RightsidebarAdminComponent,
    HorizontalAdminComponent,
    HorizontalTopbarAdminComponent,
    TwoColumnAdminComponent,
    TwoColumnSidebarAdminComponent,
    SidebarAdminComponent
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
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [LanguageService]
})
export class LayoutsAdminModule { }
