import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule ,RouterModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.scss'
})
export class EditRecordComponent implements OnInit {
  editForm!: FormGroup;
  patientId!: string | null;
  appointments: any[] = [];
  
  // New selection properties
  searchTerm: string = '';
  showDropdown: boolean = false;
  patientsList: any[] = [
    { id: '1', firstName: 'Ahmed', lastName: 'Ben Salah', cin: '09876543', phone: '55123456', dob: '1990-05-15', gender: 'Male' },
    { id: '2', firstName: 'Sarra', lastName: 'Mansour', cin: '12345678', phone: '22334455', dob: '1995-08-20', gender: 'Female' }
  ];
  filteredPatients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.patientId = this.route.snapshot.paramMap.get('id');
    
    if (this.patientId) {
      this.loadPatientData(this.patientId);
    }
    this.filteredPatients = this.patientsList;
  }

  initForm(): void {
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], 
      dob: ['', Validators.required],
      gender: ['Male', Validators.required],
      arrivalDate: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  // Filter patients as user types
  onSearchChange(): void {
    this.showDropdown = this.searchTerm.length > 0;
    this.filteredPatients = this.patientsList.filter(p => 
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.cin.includes(this.searchTerm)
    );
  }

  // Select a patient and fill the form
  selectPatient(patient: any): void {
    this.patientId = patient.id;
    this.searchTerm = `${patient.firstName} ${patient.lastName}`;
    this.showDropdown = false;
    this.loadPatientData(patient.id);
  }

  loadPatientData(id: string): void {
    // In your real app, call your ASP.NET Core API service here
    const patient = this.patientsList.find(p => p.id === id);
    if (patient) {
      this.editForm.patchValue({
        ...patient,
        arrivalDate: new Date().toISOString().split('T')[0]
      });
      
      // Mock appointments for the timeline
      this.appointments = [
        { date: '2026-04-05', time: '14:30' },
        { date: '2026-04-12', time: '10:00' }
      ];
    }
  }

  updateRecord(): void {
    if (this.editForm.valid) {
      console.log('Updating record for ID:', this.patientId, this.editForm.value);
      alert('Patient Profile Updated Successfully!');
    }
  }
}