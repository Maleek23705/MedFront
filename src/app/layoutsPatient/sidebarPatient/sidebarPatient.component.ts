import {
  Component, OnInit, OnDestroy, Output, EventEmitter,
  HostListener, ViewChild, TemplateRef, ApplicationRef,
  EmbeddedViewRef, Injector, EnvironmentInjector
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MENU } from './menu';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-sidebar-patient',
  templateUrl: './sidebarPatient.component.html',
  standalone: false
})
export class SidebarPatientComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [];
  activeItem: MenuItem | null = null;
  activeSubItem: MenuItem | null = null;
  dropdownPosition: { top: number; left: number } | null = null;

  private dropdownRef: EmbeddedViewRef<any> | null = null;

  @ViewChild('dropdownPortal') dropdownPortal!: TemplateRef<any>;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(
    private router: Router,
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  ngOnInit(): void {
    this.menuItems = MENU;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeDropdown();
        this.initActiveMenu();
      }
    });
  }

  ngOnDestroy(): void {
    this.removeDropdownFromBody();
  }

  // Toggle item principal — calcule la position et injecte dans le body
  toggleItem(item: MenuItem, event: Event, liRef: HTMLElement) {
    event.stopPropagation();
    this.activeSubItem = null;

    if (this.activeItem === item) {
      this.activeItem = null;
      this.dropdownPosition = null;
      this.removeDropdownFromBody();
      return;
    }

    this.activeItem = item;

    const rect = liRef.getBoundingClientRect();
    this.dropdownPosition = {
      top: rect.bottom + 4, 
      left: rect.left      
    };

    this.renderDropdownInBody();
  }

  // Injecte le ng-template dans le body
  renderDropdownInBody() {
    this.removeDropdownFromBody();

    this.dropdownRef = this.dropdownPortal.createEmbeddedView({});
    this.appRef.attachView(this.dropdownRef);

    const domElem = (this.dropdownRef.rootNodes[0] as HTMLElement);
    document.body.appendChild(domElem);
  }

  removeDropdownFromBody() {
    if (this.dropdownRef) {
      this.appRef.detachView(this.dropdownRef);
      this.dropdownRef.destroy();
      this.dropdownRef = null;
    }
  }

  toggleSubItem(subitem: MenuItem, event: Event) {
    event.stopPropagation();
    this.activeSubItem = this.activeSubItem === subitem ? null : subitem;
    this.renderDropdownInBody(); // re-render pour mettre à jour
    
  }

  closeDropdown() {
    this.activeItem = null;
    this.activeSubItem = null;
    this.dropdownPosition = null;
    this.removeDropdownFromBody();
  }

  hasItems(item: MenuItem): boolean {
    return !!item.subItems && item.subItems.length > 0;
  }

  initActiveMenu() {
    const currentUrl = this.router.url;

    this.menuItems.forEach((item: MenuItem) => {
      if (item.subItems) {
        item.subItems.forEach((sub: MenuItem) => {
          if (sub.link === currentUrl) {
            this.activeItem = item;
          }
          if (sub.subItems) {
            sub.subItems.forEach((subSub: MenuItem) => {
              if (subSub.link === currentUrl) {
                this.activeItem = item;
                this.activeSubItem = sub;
              }
            });
          }
        });
      }
    });
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeDropdown();
  }

  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }
}