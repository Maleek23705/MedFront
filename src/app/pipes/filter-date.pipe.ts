import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../components/componentsDashboard/commonComponentsDash/appointments/appointment.model';

@Pipe({
  name: 'filterDate',
  standalone: false
})
export class FilterDatePipe implements PipeTransform {
  transform(appointments: Appointment[], dateFilter: string): Appointment[] {
    if (dateFilter === 'all') {
      return appointments;
    }
    const today = new Date();
    return appointments.filter(appt => {
      const appointmentDate = new Date(appt.date);
      return appointmentDate.toDateString() === today.toDateString(); // Compare la date sans l'heure
    });
  }
}