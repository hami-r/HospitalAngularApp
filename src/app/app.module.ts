import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalEntryComponent } from './hospital-entry/hospital-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const myRoute:Routes = [
  {
    path:"",
    component:HospitalEntryComponent
  },
  {
    path:"search",
    component:PatientSearchComponent
  },
  {
    path:"delete",
    component:PatientDeleteComponent
  },
  {
    path:"view",
    component:ViewPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HospitalEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
