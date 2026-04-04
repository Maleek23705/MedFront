import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// search module
import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { initFirebaseBackend } from './authUtils';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';

// Language
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Store
import { rootReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ApikeyEffects } from './store/APIKey/apikey_effect';
import { AuthenticationEffects } from './store/Authentication/authentication.effects';
import { Adduser } from './components/componentsAdmin/users/adduser/adduser';
import { Edituser } from './components/componentsAdmin/users/edituser/edituser';
import { Viewusers } from './components/componentsAdmin/users/viewusers/viewusers';
import { Addcountry } from './components/componentsAdmin/countries/addcountry/addcountry';
import { Editcountry } from './components/componentsAdmin/countries/editcountry/editcountry';
import { Viewcountries } from './components/componentsAdmin/countries/viewcountries/viewcountries';
import { Viewcities } from './components/componentsAdmin/cities/viewcities/viewcities';
import { Addcity } from './components/componentsAdmin/cities/addcity/addcity';
import { Editcity } from './components/componentsAdmin/cities/editcity/editcity';
import { Addcategory } from './components/componentsAdmin/categories/addcategory/addcategory';
import { Editcategory } from './components/componentsAdmin/categories/editcategory/editcategory';
import { Viewcategories } from './components/componentsAdmin/categories/viewcategories/viewcategories';
import { Viewcauses } from './components/componentsAdmin/causes/viewcauses/viewcauses';
import { Addcause } from './components/componentsAdmin/causes/addcause/addcause';
import { Editcause } from './components/componentsAdmin/causes/editcause/editcause';
//----------------------
import { LayoutsPatientModule } from './layoutsPatient/layoutPatient.module';
import  { LayoutsSecretaryModule } from './layoutsSecretary/layoutsSecretary.module';
import { LayoutsWebSiteModule } from './layoutsWebSite/layoutsWebSite.module';
import { LayoutsAdminModule } from './layoutsAdmin/layoutAdmin.module';
import { LayoutsDoctorModule } from './layoutsDoctor/layoutsDoctor.module';



export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

if (environment.defaultauth === 'firebase') {
  initFirebaseBackend(environment.firebaseConfig);
}

@NgModule({ 
    declarations: [
        AppComponent,
        Adduser,
        Edituser,
 
        Viewusers,
        Addcountry,
        Editcountry,
        Viewcountries,
        Viewcities,
        
        Addcity,
        Editcity,
        Addcategory,
        Editcategory,
        Viewcategories,
        Viewcauses,
        Addcause,
        Editcause,
    ],
    bootstrap: [AppComponent], 
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        LayoutsAdminModule,
        LayoutsDoctorModule,
        LayoutsPatientModule,
        LayoutsSecretaryModule,
        LayoutsWebSiteModule,
        StoreModule.forRoot(rootReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([
            AuthenticationEffects,
            ApikeyEffects
        ]),
        NgPipesModule
    ], 
        providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
