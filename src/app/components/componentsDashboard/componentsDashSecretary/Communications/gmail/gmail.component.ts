import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gmail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gmail.component.html',
  styleUrl: './gmail.component.scss'
})
export class GmailComponent implements OnInit {
  emailForm!: FormGroup;
  isSending = false;

  templates = [
    { id: 1, name: 'Appointment Reminder', subject: 'Upcoming Appointment Reminder', body: 'Hello,\n\nThis is a reminder for your medical appointment scheduled for [Date] at [Time].\n\nRegards.' },
    { id: 2, name: 'Medical Results', subject: 'Your Analysis Results are Ready', body: 'Dear Patient,\n\nYour recent test results are now available. Please contact the secretary to schedule a follow-up.' },
    { id: 3, name: 'Cabinet Holiday', subject: 'Temporary Closing Notice', body: 'Important: The cabinet will be closed from [Date] to [Date] for annual leave.' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      to: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  selectTemplate(tpl: any) {
    this.emailForm.patchValue({
      subject: tpl.subject,
      message: tpl.body
    });
  }

  onSend() {
    if (this.emailForm.valid) {
      this.isSending = true;
      // Simulate API call
      setTimeout(() => {
        alert('Email sent successfully!');
        this.isSending = false;
        this.emailForm.reset();
      }, 2000);
    }
  }
}