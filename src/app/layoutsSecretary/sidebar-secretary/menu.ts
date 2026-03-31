import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/',
    isCollapsed: true,
  },
  {
    id: 2,
    label: 'Patient Management',
    icon: 'ri-user-settings-line',
    isCollapsed: true,
    subItems: [
      { id: 3, label: 'All Patients', link: '/patients/list', parentId: 2, icon: 'ri-team-line' },
      { id: 4, label: 'Insurance & CNAM', link: '/patients/insurance', parentId: 2, icon: 'ri-shield-check-line' },
    ]
  },
  {
    id: 5,
    label: 'Appointments',
    icon: 'ri-calendar-check-line',
    isCollapsed: true,
    subItems: [
      {
        id: 6,
        label: 'Schedule Appointment',
        link: 'appointments/create',
        parentId: 5,
        icon: 'ri-add-circle-line'
      },
      {
        id: 7,
        label: 'Update Appointment',
        link: 'appointments/update/:id',
        parentId: 5,
        icon: 'ri-edit-2-line'
      },
      {
        id: 8,
        label: 'View Agenda',
        link: 'appointments/view/:id',
        parentId: 5,
        icon: 'ri-eye-line'
      },
      {
        id: 9,
        label: 'Waiting List',
        link: 'appointments/waitingList',
        parentId: 5,
        icon: 'ri-rest-time-line' 
      }
    ]
  },
  {
    id: 10,
    label: 'Medical Records',
    icon: 'ri-folder-user-line',
    isCollapsed: true,
    subItems: [
      {
        id: 11,
        label: 'New Record',
        link: 'MedRecords/create',
        parentId: 10,
        icon: 'ri-file-add-line'
      },
      {
        id: 12,
        label: 'Modify Record',
        link: 'MedRecords/edit/:id',
        parentId: 10,
        icon: 'ri-ball-pen-line'
      },
      {
        id: 13,
        label: 'Patient History',
        link: 'MedRecords/view/:id',
        parentId: 10,
        icon: 'ri-history-line'
      }
    ]
  },
  {
    id: 14,
    label: 'Invoices',
    icon: 'ri-file-list-3-line',
    isCollapsed: true,
    subItems: [
      {
        id: 15,
        label: 'Generate Invoice',
        link: 'Invoices/create',
        parentId: 14,
        icon: 'ri-bill-line'
      },
      {
        id: 16,
        label: 'Edit Invoice',
        link: 'Invoices/edit/:id',
        parentId: 14,
        icon: 'ri-edit-box-line'
      },
      {
        id: 17,
        label: 'Billing Details',
        link: 'Invoices/view/:id',
        parentId: 14,
        icon: 'ri-money-dollar-circle-line'
      }
    ]
  },
  {
    id: 18,
    label: 'Payments',
    icon: 'ri-bank-card-line',
    isCollapsed: true,
    subItems: [
      {
        id: 19,
        label: 'Payment History',
        link: 'Payments/view/:id', 
        parentId: 18,
        icon: 'ri-refund-2-line'
      },
      {
        id: 20,
        label: 'Pending Payments',
        link: 'Payments/pending/:id', 
        parentId: 18,
        icon: 'ri-error-warning-line'
      }]
  },
  {
    id: 21,
    label: 'Communications',
    icon: 'ri-chat-voice-line', 
    isCollapsed: true,
    subItems: [
      {
        id: 22,
        label: 'SMS Reminders',
        link: 'Communications/sms', 
        parentId: 21,
        icon: 'ri-message-3-line'
      },
      {
        id: 23,
        label: 'Gmail Reminders',
        link: 'Communications/gmail', 
        parentId: 21,
        icon: 'ri-google-line'
      }]
  },
  {
    id: 24,
    label: 'Reports',
    icon: 'ri-pie-chart-line',
    isCollapsed: true,
    subItems: [
      { 
        id: 25, 
        label: 'Daily Summary', 
        link: '/reports/daily', 
        parentId: 24, 
        icon: 'ri-file-chart-line' 
      },
      { 
        id: 26, 
        label: 'Financial Statistics', 
        link: '/reports/finance', 
        parentId: 24, 
        icon: 'ri-line-chart-line' 
      }
    ]
  },
  {
    id: 27,
    label: 'Settings',
    icon: 'ri-settings-4-line',
    link: '/settings'
  }
];