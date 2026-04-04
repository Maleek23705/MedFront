import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { NextAppointmentComponent } from './next-appointment/next-appointment.component';

import { FilterStatusPipe } from '../../../../pipes/filter-status.pipe'; 
import { FilterDatePipe } from '../../../../pipes/filter-date.pipe';  
import { AppointmentsService } from './appointments.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';


const routes: Routes = [
  {
    path: 'appointmentsList',          
    component: AppointmentListComponent,
    data: { title: 'Appointments List' }
  },
  {
    path: 'addAppointment',
    component: AddAppointmentComponent,
    data: { title: 'Add Appointment' }
  },
  {
    path: 'updateAppointment',
    component: UpdateAppointmentComponent,
    data: { title: 'Update Appointment' }
  }
];

@NgModule({
  declarations: [
    NextAppointmentComponent,
    FilterStatusPipe,
    FilterDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UpdateAppointmentComponent,
    AddAppointmentComponent,
    AppointmentListComponent,

  ],
  providers: [AppointmentsService],
  exports: [
    RouterModule,
    AppointmentListComponent,
    NextAppointmentComponent,
    UpdateAppointmentComponent,
    AddAppointmentComponent
  ]
})
export class AppointmentsModule {}