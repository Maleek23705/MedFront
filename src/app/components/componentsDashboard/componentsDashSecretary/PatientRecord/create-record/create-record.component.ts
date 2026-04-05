import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-record',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-record.component.html',
  styleUrl: './create-record.component.scss'
})
export class CreateRecordComponent implements OnInit {
  recordForm!: FormGroup;
  // Mock data representing the list seen in your reference
  appointments: any[] = [
    { date: '2026-04-05', time: '14:30', type: 'Consultation' },
    { date: '2026-04-12', time: '10:00', type: 'Follow-up' }
  ]; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const today = new Date().toISOString().substring(0, 10);
    this.recordForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // Validation for 8-digit Tunisian identity formats
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], 
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], 
      dob: ['', Validators.required],
      gender: ['Male', Validators.required],
      arrivalDate: [today, Validators.required]
    });
  }

  saveRecord(): void {
    if (this.recordForm.valid) {
      // Logic for saving to your .NET backend
      console.log('Manual Entry Saved:', this.recordForm.value);
      alert('Patient Profile Created Successfully!');
      // Resetting form after successful interaction
      this.recordForm.reset({ gender: 'Male', arrivalDate: new Date().toISOString().substring(0, 10) });
    }
  }

  // Action methods for the table icons
  printAppointment(appt: any) {
    console.log('Printing details for:', appt);
  }

  viewAppointment(appt: any) {
    console.log('Viewing details for:', appt);
  }
}