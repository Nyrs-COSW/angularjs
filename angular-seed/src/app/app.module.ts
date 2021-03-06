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
import { SignUpNurseComponent } from './pages/sign-up-nurse/sign-up-nurse.component';
import { SignUpButtonsComponent } from './pages/sign-up-buttons/sign-up-buttons.component';
import { NursingPersonalByServiceComponent } from './pages/nursing-personal-byservice/nursing-personal-byservice.component';

import { RequestViewPageComponent } from './pages/request-view/request-view.component';



import { NursingServicesPageComponent } from './pages/nursing-services/nursing-services-page.component';
import { UsersService } from './services/users.service';
import { NursingservicesService } from './services/nursingservices.service';



import { RequestPageComponent } from './pages/requests-page/request-page.component';
import { RequestService } from './services/request.service';
import { ProfilePatient } from './pages/profile-patient/profile-patient.component';
import { ProfileNurse } from './pages/profile-nurse/profile-nurse.component';
import { RequestPageUsersComponent } from './pages/requests-page-users/request-page.users.component';
import { RequestUsersService } from './services/request.users.service';
import { EditPatientComponent } from './pages/profile-patient-edit/profile-patient-edit.component';
import { CreateRequest } from './pages/create-request/create-request.component';

import { EditNurseComponent } from './pages/profile-nurse-edit/profile-nurse-edit.component';



const ROUTES = [
  { path: 'nursingservices', component: NursingServicesPageComponent, canActivate: [AuthService],},
  { path: '', component: SignInPageComponent },
  { path: 'signupbuttons', component: SignUpButtonsComponent },
  { path: 'signUpPatient', component: SignUpPatientComponent },
  { path: 'nursingPersonalByService', component: NursingPersonalByServiceComponent , canActivate: [AuthService],},
  { path: 'signUpNurse', component: SignUpNurseComponent },
  { path: 'requests', component: RequestPageComponent, canActivate: [AuthService],},
  { path: 'requestsview', component: RequestViewPageComponent, canActivate: [AuthService],},
  { path: 'requestsUsers', component: RequestPageUsersComponent, canActivate: [AuthService],},
  { path: 'home', component: HomePageComponent },
  { path: 'profilePatient', component: ProfilePatient },
  { path: 'profileNurse', component: ProfileNurse},
  { path: 'editPatient', component: EditPatientComponent},
  { path: 'createRequest', component: CreateRequest},
  { path: 'editNurse', component: EditNurseComponent},
  {path: '**', component: PageNotFoundComponent},

  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    SignUpPatientComponent,
    SignUpNurseComponent,
    NursingServicesPageComponent,
    RequestPageComponent,
    RequestPageUsersComponent,
    SignUpButtonsComponent,
    NursingPersonalByServiceComponent,
    ProfilePatient,
    ProfileNurse,
    RequestViewPageComponent,
   NursingPersonalByServiceComponent,
   CreateRequest,
   EditPatientComponent,
   EditNurseComponent
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
    RequestUsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
