import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getSidebarSize } from 'src/app/store/layouts/layout-selector';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-vertical-patient',
    templateUrl: './verticalPatient.component.html',
    standalone: false
})
export class VerticalPatientComponent implements OnInit {

  isCondensed = false;
  getsize: any;

  constructor(
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<RootReducerState>
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe((event: any) => {
      if (document.documentElement.getAttribute('data-preloader') == 'enable') {
        if (event instanceof NavigationEnd) {
          if (event.url !== '/disabled-route') {
            this.showPreloader();
          } else {
            this.hidePreloader();
          }
        }
      }
    });

    this.handlePreloader(this.activatedRoute.snapshot.routeConfig?.path);

    if (document.documentElement.getAttribute('data-sidebar-size') == 'lg') {
      this.store.select(getSidebarSize).subscribe((size) => {
        this.getsize = size;
      });

      window.addEventListener('resize', () => {
        const self = this;
        if (document.documentElement.clientWidth <= 767) {
          document.documentElement.setAttribute('data-sidebar-size', '');
          document.querySelector('.hamburger-icon')?.classList.add('open');
        } else if (document.documentElement.clientWidth <= 1024) {
          document.documentElement.setAttribute('data-sidebar-size', 'sm');
          document.querySelector('.hamburger-icon')?.classList.add('open');
        } else if (document.documentElement.clientWidth >= 1024) {
          if (document.documentElement.getAttribute('data-layout-width') == 'fluid') {
            document.documentElement.setAttribute('data-sidebar-size', self.getsize);
            document.querySelector('.hamburger-icon')?.classList.remove('open');
          }
        }
      });
    }
  }

  // ✅ Safe helper — shows preloader then hides after 1s
  private showPreloader(): void {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;                     // ✅ null guard
    preloader.style.opacity = '1';
    preloader.style.visibility = '';
    setTimeout(() => {
      const el = document.getElementById('preloader');
      if (!el) return;                          // ✅ null guard inside timeout too
      el.style.opacity = '0';
      el.style.visibility = 'hidden';
    }, 1000);
  }

  // ✅ Safe helper — hides preloader immediately
  private hidePreloader(): void {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;                     // ✅ null guard
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
  }

  // ✅ Fixed — was crashing when preloader element didn't exist in DOM
  private handlePreloader(route: any): void {
    if (route !== '/disabled-route') {
      this.showPreloader();
    } else {
      this.hidePreloader();
    }
  }

  onToggleMobileMenu() {
    const currentSidebarSize = document.documentElement.getAttribute('data-sidebar-size');
    if (document.documentElement.clientWidth >= 767) {
      if (currentSidebarSize == null) {
        (document.documentElement.getAttribute('data-sidebar-size') == null ||
          document.documentElement.getAttribute('data-sidebar-size') == 'lg')
          ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
          : document.documentElement.setAttribute('data-sidebar-size', 'lg');
      } else if (currentSidebarSize == 'md') {
        document.documentElement.getAttribute('data-sidebar-size') == 'md'
          ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
          : document.documentElement.setAttribute('data-sidebar-size', 'md');
      } else {
        document.documentElement.getAttribute('data-sidebar-size') == 'sm'
          ? document.documentElement.setAttribute('data-sidebar-size', 'lg')
          : document.documentElement.setAttribute('data-sidebar-size', 'sm');
      }
    }

    if (document.documentElement.clientWidth <= 767) {
      document.body.classList.toggle('vertical-sidebar-enable');
    }
    this.isCondensed = !this.isCondensed;
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', 'visibility: visible;');
    }
  }

  onResize(event: any) {
    if (document.body.getAttribute('layout') == 'twocolumn') {
      if (event.target.innerWidth <= 767) {
        this.eventService.broadcast('changeLayout', 'vertical');
      } else {
        this.eventService.broadcast('changeLayout', 'twocolumn');
        document.body.classList.remove('twocolumn-panel');
        document.body.classList.remove('vertical-sidebar-enable');
      }
    }
  }
}