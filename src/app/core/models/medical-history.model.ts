export interface MedicalHistory {
  id?: number;
  patientId: number;
  date: Date;
  diagnosis: string;
  notes: string;
}