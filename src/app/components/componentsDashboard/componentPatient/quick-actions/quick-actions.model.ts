export interface QuickAction {
  id: 'book' | 'message' | 'ai' | 'lab';
  label: string;
  icon: string;
  route: string;
  color: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'book',
    label: 'Book Appointment',
    icon: '📅',
    route: '/appointments/new',
    color: '#556ee6'
  },
  {
    id: 'message',
    label: 'Messages',
    icon: '💬',
    route: '/messages',
    color: '#50a5f1'
  },
  {
    id: 'ai',
    label: 'AI Assistant',
    icon: '🤖',
    route: '/ai-assistant',
    color: '#764ba2'
  },
  {
    id: 'lab',
    label: 'Lab Results',
    icon: '🧪',
    route: '/lab-results',
    color: '#34c38b'
  }
];
