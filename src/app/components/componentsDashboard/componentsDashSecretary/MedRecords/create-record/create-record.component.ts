import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-record',
  standalone: false,
  templateUrl: './create-record.component.html',
  styleUrl: './create-record.component.scss'
})
export class CreateRecordComponent implements OnInit {

  userForm!: FormGroup;
  alertMessage: string | null = null;
  submitted = false;
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialisation du formulaire avec validateurs de saisie
   */
  initForm() {
    this.userForm = this.fb.group({
      // Personal Information - Champs obligatoires
      CIN: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], 
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      LastName: ['', [Validators.required, Validators.minLength(2)]],
      Phone: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]], 
      BirthDate: [null, [Validators.required]],
      Gender: ['male', [Validators.required]],

      // Vitals - Optionnels
      BloodPressure: [''],
      HeartRate: [null],
      Weight: [null],
      Height: [null],
      Temperature: [null],

      // Medical History
      BloodGroup: ['', [Validators.required]], // Obligatoire
      HereditaryDiseases: [''],
      ChronicDiseases: [''],
      PastSurgeries: [''],
      Allergies: [''],

      // Diagnosis 
      Diagnosis: ['']
    });
  }

  /**
   * Capture des fichiers sélectionnés
   */
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  /**
   * Soumission avec contrôle de validité
   */
  onSubmit() {
    this.submitted = true;
    this.alertMessage = null;

    // Arrêter ici si le formulaire est invalide
    if (this.userForm.invalid) {
      this.alertMessage = 'Please correct the errors in the form before saving.';
      this.markFormGroupTouched(this.userForm);
      return; // Empêche l'exécution de la suite
    }

    // Si valide, préparation du FormData pour ASP.NET Core
    const formData = new FormData();
    const formValues = this.userForm.getRawValue();

    Object.keys(formValues).forEach(key => {
      // Éviter d'envoyer des valeurs nulles au backend si non remplies
      if (formValues[key] !== null && formValues[key] !== '') {
        formData.append(key, formValues[key]);
      }
    });

    this.selectedFiles.forEach(file => {
      formData.append('attachments', file);
    });

    console.log('Form is valid. Sending to Backend...', formValues);
    
    // Appel service simulé
    alert('Medical Record Saved Successfully!');
    // reset après succès si besoin :
    // this.submitted = false;
    // this.userForm.reset({Gender: 'male'});
  }

  /**
   * Utilitaire pour marquer tous les champs comme "touched"
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  /**
   * Getter pratique pour vérifier l'état d'un champ dans le HTML
   */
  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.submitted));
  }
}