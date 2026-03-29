import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-doctor',
    templateUrl: './footerDoctor.component.html',
    standalone: false
})
export class FooterDoctorComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
