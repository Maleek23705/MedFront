import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  standalone: true, // Matching your modern standalone approach
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.scss'
})
export class EditRecordComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  isUpdating = false;
  recordId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recordId = this.route.snapshot.paramMap.get('id');
    this.initForm();
    this.loadPatientData(); // Load existing data
  }

  initForm() {
    this.userForm = this.fb.group({
      CIN: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      BirthDate: [null, [Validators.required]],
      Gender: ['male', [Validators.required]],
      BloodPressure: [''],
      HeartRate: [null],
      Weight: [null],
      Height: [null],
      Temperature: [null],
      BloodGroup: ['', [Validators.required]],
      HereditaryDiseases: [''],
      ChronicDiseases: [''],
      PastSurgeries: [''],
      Allergies: [''],
      Diagnosis: ['']
    });
  }

  // Simulate fetching data from your ASP.NET Core API
  loadPatientData() {
    // In production, use: this.patientService.getById(this.recordId).subscribe(...)
    const mockData = {
      CIN: '09876543',
      FirstName: 'Mohamed',
      LastName: 'Ben Ali',
      Phone: '21623000',
      BirthDate: '1995-05-15',
      Gender: 'male',
      BloodGroup: 'O+',
      ChronicDiseases: 'None',
      Diagnosis: 'Patient is recovering well from the last visit.'
    };
    
    this.userForm.patchValue(mockData);
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return;

    this.isUpdating = true;
    
    // Simulate API update call
    setTimeout(() => {
      console.log('Updating record...', this.userForm.value);
      alert('Medical Record Updated Successfully!');
      this.isUpdating = false;
      this.router.navigate(['/dashboard/secretary/med-records']); 
    }, 1500);
  }

  onCancel() {
    this.router.navigate(['/dashboard/secretary/med-records']);
  }
}