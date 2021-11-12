import { Patient } from './patient';

export interface PatientSelection {
  metastatic: Patient | null;
  nonmetastatic: Patient | null;
}
