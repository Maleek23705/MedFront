import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-website',
    templateUrl: './footerWebSite.component.html',
    standalone: false
})
export class FooterWebSiteComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
