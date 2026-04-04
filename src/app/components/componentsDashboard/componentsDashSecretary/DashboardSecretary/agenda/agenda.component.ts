import { Component, OnInit } from '@angular/core';
import { CalendarEventsService } from '../../../commonComponentsDash/calendar/calendar-events.service';
import { CalendarEventModel } from '../../../commonComponentsDash/calendar/calendar-event.model';

@Component({
  selector: 'app-agenda',
  standalone: false,
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  todayAppointments: CalendarEventModel[] = [];
  loading = true;

  constructor(private calendarService: CalendarEventsService) { }

  ngOnInit(): void {
  this.todayAppointments = this.calendarService.list();
  this.loading = false; // Make sure this line exists!
}

  loadTodayAgenda() {
    // In a real app, you'd filter by the current date string (e.g., '2026-03-17')
    const allEvents = this.calendarService.list();
    
    // Simulating a fetch delay for the loader
    setTimeout(() => {
      this.todayAppointments = allEvents; 
      this.loading = false;
    }, 800);
  }

  // Helper to get the CSS class based on category
  getCategoryClass(category: string): string {
    return category.toLowerCase();
  }
}