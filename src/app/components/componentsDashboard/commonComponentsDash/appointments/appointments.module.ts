import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { NextAppointmentComponent } from './next-appointment/next-appointment.component';
import { DashboardPatientComponent } from '../../componentPatient/dashboardPatient/dashboardPatient.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'appointments' },
    children: [
      {
        path: 'appointmentsList',
        component: AppointmentListComponent,
        data: { title: 'Appointments List' },
      },
    ],
  },
];


@NgModule({
  declarations: [
    AppointmentListComponent,
    NextAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    AppointmentListComponent,
    NextAppointmentComponent   // exported so dashboard can use it
  ]
})
export class AppointmentsModule {
  
}