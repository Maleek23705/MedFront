import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.scss'
})
export class EditRecordComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  recordId!: string;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    // 1. Get the ID from the URL (e.g., /MedRecords/edit/101)
    this.recordId = this.route.snapshot.paramMap.get('id') || '';
    this.initForm();
    this.loadRecordData();
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

  loadRecordData() {
    // Simulating an API call to your .NET Backend
    setTimeout(() => {
      const mockData = {
        CIN: '09887766',
        FirstName: 'Ahmed',
        LastName: 'Ben Salem',
        Phone: '98123456',
        BirthDate: '1980-05-15',
        Gender: 'male',
        BloodGroup: 'A+',
        BloodPressure: '120/80',
        ChronicDiseases: 'Diabetes Type 2',
        Diagnosis: 'Routine checkup, stable condition.'
      };

      this.userForm.patchValue(mockData);
      this.isLoading = false;
    }, 800); 
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return;

    console.log('Updating Record ID:', this.recordId, this.userForm.value);
    alert('Medical Record Updated Successfully!');
    this.router.navigate(['/MedRecords/view-all']); 
  }
}