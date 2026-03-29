import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    isCollapsed: true,
  },
  {
    id: 2,
    label: 'Appointments',
    icon: 'ri-calendar-check-line',
    isCollapsed: true,
    subItems: [
      {
        id: 3,
        label: 'Schedule Appointment',
        link: 'appointments/create',
        parentId: 2,
        icon: 'ri-add-circle-line'
      },
      {
        id: 4,
        label: 'Update Appointment',
        link: 'appointments/update/1',
        parentId: 2,
        icon: 'ri-edit-2-line'
      },
      {
        id: 5,
        label: 'View Agenda',
        link: 'appointments/view/1',
        parentId: 2,
        icon: 'ri-eye-line'
      },
      {
        id: 6,
        label: 'Waiting List',
        link: 'appointments/waitingList',
        parentId: 2,
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
        link: 'MedRecords/edit/1',
        parentId: 10,
        icon: 'ri-ball-pen-line'
      },
      {
        id: 13,
        label: 'Patient History',
        link: 'MedRecords/view/1',
        parentId: 10,
        icon: 'ri-history-line'
      }
    ]
  },
  {
    id: 20,
    label: 'Invoices',
    icon: 'ri-file-list-3-line',
    isCollapsed: true,
    subItems: [
      {
        id: 21,
        label: 'Generate Invoice',
        link: 'Invoices/create',
        parentId: 20,
        icon: 'ri-bill-line'
      },
      {
        id: 22,
        label: 'Edit Invoice',
        link: 'Invoices/edit/1',
        parentId: 20,
        icon: 'ri-edit-box-line'
      },
      {
        id: 23,
        label: 'Billing Details',
        link: 'Invoices/view/1',
        parentId: 20,
        icon: 'ri-money-dollar-circle-line'
      }
    ]
  },
  {
    id: 30,
    label: 'Payments',
    icon: 'ri-bank-card-line',
    isCollapsed: true,
    subItems: [
      {
        id: 31,
        label: 'Payment History',
        link: 'Payments/view/1', 
        parentId: 30,
        icon: 'ri-refund-2-line'
      },
      {
        id: 32,
        label: 'Pending Payments',
        link: 'Payments/pending/1', 
        parentId: 30,
        icon: 'ri-error-warning-line'
      }]
  },
  {
    id: 40,
    label: 'Communications',
    icon: 'ri-chat-voice-line', 
    isCollapsed: true,
    subItems: [
      {
        id: 41,
        label: 'SMS Reminders',
        link: 'Communications/sms', 
        parentId: 40,
        icon: 'ri-message-3-line'
      },
      {
        id: 42,
        label: 'Gmail Reminders',
        link: 'Communications/gmail', 
        parentId: 40,
        icon: 'ri-google-line'
      }]
  }
];