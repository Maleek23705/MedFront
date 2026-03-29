import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-patient',
    templateUrl: './footerPatient.component.html',
    standalone: false
})
export class FooterPatientComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
