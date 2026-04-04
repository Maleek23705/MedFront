import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class UpdateAppointmentComponent implements OnInit {

  @Input() appointmentId!: number;
  @Output() close = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  form!: FormGroup;
  minDate!: string;
  appointmentType: string = '';

  appointmentTypes = [
    { label: 'Consultation', value: 'CONSULTATION' },
    { label: 'Follow-up', value: 'FOLLOW_UP' },
    { label: 'Emergency', value: 'EMERGENCY' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      appointmentDate: [''],
      appointmentTime: [''],
      appointmentType: ['']
    });

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  filterSpecialty(type: string): void {
    this.appointmentType = type;
    this.form.patchValue({ appointmentType: type });
  }

  resetForm(): void {
    this.form.reset();
    this.appointmentType = '';
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.updated.emit();
  }

  onCancel(): void {
    this.close.emit();
  }
}