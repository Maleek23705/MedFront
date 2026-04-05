import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-record',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-record.component.html',
  styleUrl: './view-record.component.scss'
})
export class ViewRecordComponent implements OnInit {
  searchTerm: string = '';
  // Mock data representing your SQL database records
  patients = [
    { id: 1, name: 'Ahmed Ben Salah', cin: '01234567', phone: '99 000 111', dob: '15/05/1990', gender: 'Male', status: 'Active' },
    { id: 2, name: 'Sarra Mansour', cin: '08765432', phone: '22 333 444', dob: '22/11/1995', gender: 'Female', status: 'New' },
    { id: 3, name: 'Mohamed Ali', cin: '12341234', phone: '55 666 777', dob: '03/01/1985', gender: 'Male', status: 'Active' }
  ];

  get filteredPatients() {
    return this.patients.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      p.cin.includes(this.searchTerm)
    );
  }

  ngOnInit(): void {}
}