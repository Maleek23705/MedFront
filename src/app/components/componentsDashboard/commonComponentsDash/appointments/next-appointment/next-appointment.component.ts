import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrl: './next-appointment.component.scss',
  standalone: false
})
export class NextAppointmentComponent implements OnInit {

  appointment: Appointment | null = null;

  constructor(private service: AppointmentsService) {}

  ngOnInit(): void {
    this.service.getNext().subscribe(appt => this.appointment = appt);
  }

  getDaysUntil(): number {
    if (!this.appointment) return 0;
    const diff = new Date(this.appointment.date).getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}