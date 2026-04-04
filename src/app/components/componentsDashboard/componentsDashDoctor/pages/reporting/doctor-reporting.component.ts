import { Component } from '@angular/core';

/** Route : `/doctor/reporting` — menu : Reporting */
@Component({
  selector: 'app-doctor-reporting',
  templateUrl: './doctor-reporting.component.html',
  standalone: false,
})
export class DoctorReportingComponent {
  reports = [
    { title: 'Consultation volume - March', format: 'PDF' },
    { title: 'No-show analysis', format: 'Excel' },
    { title: 'Revenue by act', format: 'PDF' },
  ];
}
