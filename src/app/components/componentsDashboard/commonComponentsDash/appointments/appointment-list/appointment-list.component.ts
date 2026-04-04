import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../appointment.model';
import { CommonModule } from '@angular/common';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  standalone: true,
  imports: [CommonModule, UpdateAppointmentComponent, AddAppointmentComponent],
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];
  selectedStatus: string = 'all';
  selectedDate: string = 'all';
  selectedAppointmentId: number | null = null;
  openStatusDropdown = false;
  openDateDropdown = false;
  showAddModal: boolean = false;
  constructor(private service: AppointmentsService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.service.getAll().subscribe(data => this.appointments = data);
  }

  cancel(id: number): void {
    this.service.cancel(id);
    this.loadAppointments();
  }

  toggleStatusDropdown(): void {
    this.openStatusDropdown = !this.openStatusDropdown;
    this.openDateDropdown = false;
  }

  toggleDateDropdown(): void {
    this.openDateDropdown = !this.openDateDropdown;
    this.openStatusDropdown = false;
  }

  closeDropdowns(): void {
    this.openStatusDropdown = false;
    this.openDateDropdown = false;
  }

  confirm(id: number): void {
    const appt = this.appointments.find(a => a.id === id);
    if (appt && appt.status === 'scheduled') appt.status = 'confirmed';
  }

  update(id: number): void {
    this.selectedAppointmentId = id;
  }

  closeUpdateForm(): void {
    this.selectedAppointmentId = null;
  }

  getStatusClass(status: string): string {
    return ({
      scheduled: 'status-scheduled',
      completed: 'status-completed',
      cancelled: 'status-cancelled',
      confirmed: 'status-confirmed'
    } as Record<string, string>)[status] || '';
  }

  getStatusDisplay(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  getStatusCount(status: string): number {
    return this.appointments.filter(appt => appt.status === status).length;
  }

  filterByStatus(appointments: Appointment[]): Appointment[] {
    if (this.selectedStatus === 'all') return appointments;
    return appointments.filter(appt => appt.status === this.selectedStatus);
  }

  filterByDate(appointments: Appointment[]): Appointment[] {
    if (this.selectedDate === 'all') return appointments;
    const today = new Date();
    return appointments.filter(appt => {
      const appointmentDate = new Date(appt.date);
      return appointmentDate.toDateString() === today.toDateString();
    });
  }

  getFilteredAppointments(): Appointment[] {
    let filtered = this.filterByStatus(this.appointments);
    filtered = this.filterByDate(filtered);
    return filtered;
  }

  clearFilters(): void {
    this.selectedStatus = 'all';
    this.selectedDate = 'all';
  }

  get hasActiveFilters(): boolean {
    return this.selectedStatus !== 'all' || this.selectedDate !== 'all';
  }

  formatDate(dateValue: Date | string): string {
    const date = new Date(dateValue);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  openAddForm(): void {
    this.showAddModal = true;
  }

  closeAddForm(): void {
    this.showAddModal = false;
  }
}