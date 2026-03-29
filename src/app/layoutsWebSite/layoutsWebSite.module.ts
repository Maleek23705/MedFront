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
import { LayoutWebSiteComponent } from './layoutsWebSite.component';
import { VerticalWebSiteComponent } from './verticalWebSite/verticalWebSite.component';
import { TopbarWebSiteComponent } from './topbarWebSite/topbarWebSite.component';
import { Topbar_websiteComponent } from './topbar-webSite/topbar-webSite.component';
import { Sidebar_WebsiteComponent } from './sidebar-webSite/sidebar-webSite.component';
import { SidebarWebSiteComponent } from './sidebarWebSite/sidebarWebSite.component';
import { FooterWebSiteComponent } from './footerWebSite/footerWebSite.component';
import { RightsidebarWebsiteComponent } from './rightsidebarWebSite/rightsidebarWebsite.component';
import { Horizontal_WebsiteComponent } from './horizontal-webSite/horizontal-webSite.component';
import { TwoColumnWebSiteComponent } from './two-column-WebSite/two-column-WebSite.component';
import { TwoColumnSidebarWebSiteComponent } from './two-column-sidebar-WebSite/two-column-sidebar-webSite.component';
import { HorizontalTopbar_websiteComponent } from './horizontal-topbar-webSite/horizontal-topbarWebSite.component';
@NgModule({
  declarations: [
    LayoutWebSiteComponent,
    Horizontal_WebsiteComponent,
    Topbar_websiteComponent,
    VerticalWebSiteComponent,
    TopbarWebSiteComponent,
    Sidebar_WebsiteComponent,
    FooterWebSiteComponent,
    RightsidebarWebsiteComponent,
    TwoColumnWebSiteComponent,
    TwoColumnSidebarWebSiteComponent,
    HorizontalTopbar_websiteComponent,
    SidebarWebSiteComponent
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
    Horizontal_WebsiteComponent,
    HorizontalTopbar_websiteComponent,
    Topbar_websiteComponent,
    TopbarWebSiteComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [LanguageService]
})
export class LayoutsWebSiteModule { }
