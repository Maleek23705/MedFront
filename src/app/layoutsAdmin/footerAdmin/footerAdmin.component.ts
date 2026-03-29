import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-admin',
    templateUrl: './footerAdmin.component.html',
    standalone: false
})
export class FooterAdminComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
