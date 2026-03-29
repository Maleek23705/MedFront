import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-secretary',
    templateUrl: './footerSecretary.component.html',
    standalone: false
})
export class FooterSecretaryComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
