import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.scss'
})
export class SmsComponent implements OnInit {
  smsForm!: FormGroup;
  isSending = false;
  maxChars = 160;

  templates = [
    { name: 'Urgent: Delay', body: 'The doctor is running 20 minutes late. We apologize for the inconvenience.' },
    { name: 'Confirm Visit', body: 'Please reply YES to confirm your appointment today at [Time].' },
    { name: 'Pickup Meds', body: 'Your prescription is ready for pickup at the front desk.' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.smsForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8,12}$')]],
      message: ['', [Validators.required, Validators.maxLength(this.maxChars)]]
    });
  }

  selectTemplate(tpl: any) {
    this.smsForm.patchValue({ message: tpl.body });
  }

  get charCount(): number {
    return this.smsForm.get('message')?.value?.length || 0;
  }

  onSend() {
    if (this.smsForm.valid) {
      this.isSending = true;
      setTimeout(() => {
        alert('SMS sent successfully!');
        this.isSending = false;
        this.smsForm.reset();
      }, 1500);
    }
  }
}