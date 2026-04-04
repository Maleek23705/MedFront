export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  specialty: string;
  date: Date | string;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  location: string;
}