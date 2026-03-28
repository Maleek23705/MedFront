import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { LayoutAdminComponent } from './layoutsAdmin/layoutAdmin.component';

// Auth
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutPatientComponent } from './layoutsPatient/layoutPatient.component';
import { LayoutDoctorComponent } from './layoutsDoctor/layoutsDoctor.component';
import { LayoutSecretaryComponent } from './layoutsSecretary/layoutsSecretary.component';
import { LayoutWebSiteComponent } from './layoutsWebSite/layoutsWebSite.component';


const routes: Routes = [
  
  { path: 'theme', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  { path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  // NEW MSK
  { path: 'admin', component: LayoutAdminComponent, loadChildren: () => import('./components/componentsAdmin/componentsAdmin.module').then(m => m.ComponentsAdminModule)},
  { path: 'dashPatient',component: LayoutPatientComponent , loadChildren: () => import('./components/componentsDashboard/componentPatient/componentsPatient.module').then(m => m.ComponentsPatientModule)},
  { path: 'dashDoctor',component: LayoutDoctorComponent , loadChildren: () => import('./components/componentsDashboard/componentsDashDoctor/componentsDashDoctor.module').then(m => m.ComponentsDashDoctorModule )},
  { path: 'dashSecretary',component: LayoutSecretaryComponent , loadChildren: () => import('./components/componentsDashboard/componentsDashSecretary/componentsDashSecretary.module').then(m => m.ComponentsDashSecretaryModule )  },
  { path: 'website',component: LayoutWebSiteComponent , loadChildren: () => import('./components/componentsDashboard/componentDashWebSite/componentsDashWebSite.module').then(m => m.ComponentsDashWebSiteModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
