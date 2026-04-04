import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss'
})
export class GeneralSettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  isSaving = false;
  logoPreview: string | ArrayBuffer | null = 'assets/images/default-clinic.png';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.settingsForm = this.fb.group({
      clinicName: ['Mon Cabinet Médical', [Validators.required]],
      email: ['contact@cabinet.tn', [Validators.required, Validators.email]],
      phone: ['+216 71 000 000', [Validators.required]],
      address: ['Grand Tunis, Tunisie'],
      language: ['fr'],
      notifications: [true],
      darkMode: [false]
    });
  }

  onLogoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.logoPreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  saveSettings() {
    if (this.settingsForm.invalid) return;
    
    this.isSaving = true;
    // Simulation d'appel API vers votre backend ASP.NET Core
    setTimeout(() => {
      this.isSaving = false;
      alert('Settings updated successfully!');
    }, 1500);
  }
}