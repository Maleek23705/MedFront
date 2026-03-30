import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {

  private appointments: Appointment[] = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: new Date('2026-04-10'),
      time: '09:00',
      status: 'scheduled',
      location: 'Room 204'
    },
    {
      id: 2,
      doctorName: 'Dr. Mark Davis',
      specialty: 'Neurology',
      date: new Date('2026-04-18'),
      time: '11:30',
      status: 'scheduled',
      location: 'Room 101'
    },
    {
      id: 3,
      doctorName: 'Dr. Emily Clarke',
      specialty: 'Dermatology',
      date: new Date('2026-03-01'),
      time: '14:00',
      status: 'completed',
      location: 'Room 305'
    },
    {
      id: 4,
      doctorName: 'Dr. Ali Hassan',
      specialty: 'Orthopedics',
      date: new Date('2026-02-15'),
      time: '10:00',
      status: 'cancelled',
      location: 'Room 210'
    }
  ];

  getAll(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  getNext(): Observable<Appointment | null> {
    const now = new Date();
    const next = this.appointments
      .filter(a => new Date(a.date) > now && a.status === 'scheduled')
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
    return of(next || null);
  }

  cancel(id: number): void {
    const appt = this.appointments.find(a => a.id === id);
    if (appt) appt.status = 'cancelled';
  }
}