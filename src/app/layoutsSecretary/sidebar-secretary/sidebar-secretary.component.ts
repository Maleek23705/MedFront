import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar-secretary',
  templateUrl: './sidebar-secretary.component.html',
  standalone: false
})
export class SidebarSecretaryComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[] = [];
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Initialisation des items du menu
    this.menuItems = MENU;

    // Souscription aux événements de navigation pour mettre à jour le menu actif
    this.router.events.subscribe((event) => {
      if (document.documentElement.getAttribute('data-layout') !== "twocolumn") {
        if (event instanceof NavigationEnd) {
          this.initActiveMenu();
        }
      }
    });
  }

  ngAfterViewInit() {
    // Un léger délai permet de s'assurer que le DOM est prêt pour la manipulation de classes
    setTimeout(() => {
      this.initActiveMenu();
    }, 0);
  }

  /***
   * Supprime la classe 'active' de tous les liens fournis
   */
  removeActivation(items: HTMLElement[]) {
    items.forEach((item: HTMLElement) => {
      item.classList.remove("active");
    });
  }

  /***
   * Gère l'ouverture/fermeture des menus (Accordion)
   */
  toggleItem(item: any) {
    if (!item) return;

    this.menuItems.forEach((menuItem: any) => {
      if (menuItem === item) {
        menuItem.isCollapsed = !menuItem.isCollapsed;
      } else {
        // On ferme les autres menus de premier niveau si on n'est pas dans le chemin actif
        if (!this.isAncestorOf(menuItem, item)) {
          menuItem.isCollapsed = true;
        }
      }

      if (menuItem.subItems) {
        menuItem.subItems.forEach((subItem: any) => {
          if (subItem === item) {
            subItem.isCollapsed = !subItem.isCollapsed;
            menuItem.isCollapsed = false; // Garde le parent ouvert
          } else {
            if (!this.isAncestorOf(subItem, item)) {
              subItem.isCollapsed = true;
            }
          }
          
          if (subItem.subItems) {
            subItem.subItems.forEach((childItem: any) => {
              if (childItem === item) {
                childItem.isCollapsed = !childItem.isCollapsed;
                subItem.isCollapsed = false;
                menuItem.isCollapsed = false;
              }
            });
          }
        });
      }
    });
  }

  // Vérifie si un item est un ancêtre de l'item cible pour éviter de fermer le chemin actif
  private isAncestorOf(ancestor: any, target: any): boolean {
    if (!ancestor.subItems) return false;
    if (ancestor.subItems.includes(target)) return true;
    return ancestor.subItems.some((sub: any) => this.isAncestorOf(sub, target));
  }

  /***
   * Remonte l'arborescence DOM pour activer les parents
   */
  activateParentDropdown(item: any) {
    item.classList.add("active");
    const parentCollapseDiv = item.closest(".collapse.menu-dropdown");

    if (parentCollapseDiv) {
      const parentLink = parentCollapseDiv.parentElement.querySelector(".nav-link");
      if (parentLink) {
        parentLink.classList.add("active");
        // Récursivité pour les niveaux supérieurs (Invoices -> Medical Records etc.)
        this.activateParentDropdown(parentLink);
      }
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link")) as HTMLElement[];
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    let pathName = window.location.pathname;
    
    if (environment.production) {
      pathName = pathName.replace('/velzon/angular/default', '');
    }

    const activeItem = this.findMenuItem(pathName, this.menuItems);
    if (activeItem) {
      this.toggleItem(activeItem);
    }

    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link")) as HTMLElement[];
      const activeLinks = items.filter((x: HTMLElement) => x.classList.contains("active"));
      this.removeActivation(activeLinks);

      const matchingMenuItem = items.find((x: any) => {
        let linkPath = x.pathname;
        if (environment.production) {
          linkPath = linkPath.replace('/velzon/angular/default', '');
        }
        return linkPath === pathName;
      });

      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  private findMenuItem(pathname: string, menuItems: any[]): any {
    for (const menuItem of menuItems) {
      if (menuItem.link && menuItem.link === pathname) {
        return menuItem;
      }
      if (menuItem.subItems) {
        const foundItem = this.findMenuItem(pathname, menuItem.subItems);
        if (foundItem) return foundItem;
      }
    }
    return null;
  }

  hasItems(item: MenuItem) {
    return !!item.subItems && item.subItems.length > 0;
  }

  toggleMobileMenu(event: any) {
    const sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
    const newSize = sidebarsize === 'sm-hover-active' ? 'sm-hover' : 'sm-hover-active';
    document.documentElement.setAttribute("data-sidebar-size", newSize);
  }

  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }
}