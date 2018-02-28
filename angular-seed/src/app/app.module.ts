import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { AppDataService } from './common/app-data.service';
import { AuthService } from './common/auth.service';
import { APIService } from './common/api.service';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { SignUpPatientComponent } from './pages/sign-up-patient/sign-up-patient.component';

import { NursingServicesPageComponent } from './pages/nursing-services/nursing-services-page.component';
import { UsersService } from './services/users.service';
import { NursingservicesService } from './services/nursingservices.service';

import { RequestPageComponent } from './pages/requests-page/request-page.component';
import { RequestService } from './services/request.service';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { User } from './models/user';

const ROUTES = [
  { path: 'nursingservices', component: NursingServicesPageComponent, canActivate: [AuthService],},
  { path: '', component: SignInPageComponent },
  { path: 'signUpPatient', component: SignUpPatientComponent },
  { path: 'requests', component: RequestPageComponent, canActivate: [AuthService], },
  { path: 'home', component: HomePageComponent, canActivate: [AuthService],},
  { path: '**', component: PageNotFoundComponent},
  { path: 'profile', component: ProfilePageComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    SignUpPatientComponent,
    NursingServicesPageComponent,
<<<<<<< HEAD
    RequestPageComponent,
    ProfilePageComponent
=======
    RequestPageComponent

>>>>>>> 084d1a779ef2af02a0c9ed8a9a8a9b1f1ef8303d
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    AppConfiguration,
    AppDataService,
    AuthService,
    APIService,
    UsersService,
    NursingservicesService,
    RequestService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
