import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.DOCTORS.TEXT',
    collapseid: 'sidebarDashboards',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 2,
        label: 'MENUITEMS.DOCTORS.LIST.ADD',
        link: '/add',
        parentId: 1
      },
      {
        id: 3,
        label: 'MENUITEMS.DOCTORS.LIST.VIEW',
        link: '/view',
        parentId: 1
      }

    ]
  },
  {
    id: 1,
    label: 'MENUITEMS.P.TEXT',
    collapseid: 'sidebarDashboards',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 2,
        label: 'MENUITEMS.DOCTORS.LIST.ADD',
        link: '/add',
        parentId: 1
      },
      {
        id: 3,
        label: 'MENUITEMS.DOCTORS.LIST.VIEW',
        link: '/view',
        parentId: 1
      }

    ]
  }


];
