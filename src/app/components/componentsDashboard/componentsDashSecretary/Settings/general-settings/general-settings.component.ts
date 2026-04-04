import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss'
})
export class GeneralSettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  // This property must match exactly what is used in the HTML
  isSaving = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      cabinetName: ['Medical Cabinet', Validators.required],
      address: ['Tunis, Tunisia', Validators.required],
      phone: ['+21623000', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      email: ['contact@cabinet.tn', [Validators.required, Validators.email]],
      openingTime: ['08:00'],
      closingTime: ['17:00'],
      isCabinetOpen: [true]
    });
  }

  saveSettings() {
    if (this.settingsForm.valid) {
      // Changed from isSending to isSaving to match the class property
      this.isSaving = true; 
      
      // Simulate API call to your .NET backend
      setTimeout(() => {
        alert('Settings updated successfully!');
        this.isSaving = false;
      }, 1000);
    }
  }
}