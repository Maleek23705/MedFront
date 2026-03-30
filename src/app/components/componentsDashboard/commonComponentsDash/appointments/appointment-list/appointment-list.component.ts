import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  standalone: false
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private service: AppointmentsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.appointments = data);
  }

  cancel(id: number): void {
    this.service.cancel(id);
    this.service.getAll().subscribe(data => this.appointments = data);
  }

  getStatusClass(status: string): string {
    return {
      scheduled: 'badge-scheduled',
      completed: 'badge-completed',
      cancelled: 'badge-cancelled'
    }[status] || '';
  }
}