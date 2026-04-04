import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../components/componentsDashboard/commonComponentsDash/appointments/appointment.model';

@Pipe({
  name: 'filterStatus',
  standalone: false
})
export class FilterStatusPipe implements PipeTransform {
  transform(appointments: Appointment[], status: string): Appointment[] {
    if (status === 'all') {
      return appointments;
    }
    return appointments.filter(appt => appt.status === status);
  }
}