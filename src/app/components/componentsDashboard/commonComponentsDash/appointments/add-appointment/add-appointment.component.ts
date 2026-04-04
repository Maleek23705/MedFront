import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddAppointmentComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Output() added = new EventEmitter<void>();

  form!: FormGroup;
  minDate!: string;
  appointmentType: string = '';

  appointmentTypes = [
    { label: 'Consultation', value: 'CONSULTATION' },
    { label: 'Follow-up',    value: 'FOLLOW_UP'    },
    { label: 'Emergency',    value: 'EMERGENCY'    },
  ];

  specialties: string[] = [
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Orthopedics'
  ];

  doctors = [
    { idDoctor: 1, fullName: 'Dr. Sarah Johnson',  specialty: 'Cardiology'  },
    { idDoctor: 2, fullName: 'Dr. Michael Chen',   specialty: 'Neurology'   },
    { idDoctor: 3, fullName: 'Dr. Emily Davis',    specialty: 'Orthopedics' },
    { idDoctor: 4, fullName: 'Dr. Laura Martin',   specialty: 'Dermatology' },
    { idDoctor: 5, fullName: 'Dr. James Wilson',   specialty: 'Cardiology'  },
    { idDoctor: 6, fullName: 'Dr. Anna Smith',     specialty: 'Pediatrics'  },
    { idDoctor: 7, fullName: 'Dr. Robert Brown',   specialty: 'Neurology'   },
    { idDoctor: 8, fullName: 'Dr. Clara Nguyen',   specialty: 'Orthopedics' },
  ];

  // ✅ Initialisé avec tous les docteurs (plus vide au départ)
  filteredDoctors: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      patientName:     ['', Validators.required],
      idDoctor:        ['', Validators.required],
      doctorName:      [''],
      specialty:       ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      appointmentType: ['', Validators.required],
    });

    this.minDate = new Date().toISOString().split('T')[0];

    // ✅ Affiche tous les docteurs avant toute sélection de spécialité
    this.filteredDoctors = [...this.doctors];
  }

  selectType(value: string): void {
    this.appointmentType = value;
    this.form.patchValue({ appointmentType: value });
  }

  // ✅ Correction du bug de comparaison (toLowerCase des deux côtés)
  selectSpecialty(value: string): void {
    this.form.patchValue({ specialty: value, idDoctor: '' });
    this.filteredDoctors = this.doctors.filter(
      doc => doc.specialty.toLowerCase() === value.toLowerCase()
    );
  }

  isSpecialtySelected(spec: string): boolean {
    return this.form.value.specialty === spec;
  }

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.added.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}