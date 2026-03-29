import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'DASHBOARD',
    icon: 'ri-dashboard-2-line',
    isCollapsed: true,
  },
   {
    id: 4,
    label: 'DOCTORS',
    icon: 'ri-dashboard-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 5,
        label: 'ADD',
        link: 'doctors/add',
        parentId: 4
      },
      {
        id: 6,
        label: 'VIEW',
        link: 'doctors/view/1',
        parentId: 4
      }

    ]
  }
];
