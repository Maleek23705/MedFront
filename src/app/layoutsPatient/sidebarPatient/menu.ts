import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'ri-bar-chart-line',
    link: '/dashPatient/dashboard/dashboardPatient'
  },
  {
    id: 2,
    label: 'Doctors',
    icon: 'ri-user-line',
    link: '/doctors'
  },
  {
    id: 5,
    label: 'Appointments',
    icon: 'ri-calendar-check-line',
    link: '/dashPatient/appointments/appointmentsList'
  },
  {
    id: 6,
    label: 'Medical Records',
    icon: 'ri-folder-line',
    isCollapsed: true,
    subItems: [
      { id: 7,  label: 'Documents',            link: '/documents',             parentId: 6, icon: 'ri-file-text-line' },
      { id: 8,  label: 'Lab Results',          link: '/lab-results',           parentId: 6, icon: 'ri-test-tube-line' },
      { id: 9,  label: 'Prescriptions',        link: '/prescriptions',         parentId: 6, icon: 'ri-medicine-bottle-line' },
      { id: 10, label: 'Consultation Reports', link: '/consultation-reports',  parentId: 6, icon: 'ri-stethoscope-line' },
      { id: 11, label: 'Full History',         link: '/history',               parentId: 6, icon: 'ri-time-line' }
    ]
  },
  {
    id: 12,
    label: 'Treatments & Follow-up',
    icon: 'ri-heart-pulse-line',
    isCollapsed: true,
    subItems: [
      { id: 13, label: 'Current Medications',    link: '/current-medications', parentId: 12, icon: 'ri-capsule-line' },
      { id: 14, label: 'Treatments / Therapies', link: '/treatments',          parentId: 12, icon: 'ri-heart-pulse-line' },
      { id: 15, label: 'Supplements / Nutrition',link: '/supplements',         parentId: 12, icon: 'ri-leaf-line' }
    ]
  },
  {
    id: 16,
    label: 'Ai Assistant',
    icon: 'ri-sparkling-line',
    link: '/ai-assistant'
  }, 
  {
    id: 17,
    label: 'Billing',
    icon: 'ri-money-dollar-circle-line',
    link: '/billing'
  }
];