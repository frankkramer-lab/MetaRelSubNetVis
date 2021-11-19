import { Patient } from '../../schema/patient';
import { PatientItem } from '../../schema/patient-item';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

export interface PatientState {
  patientsGroupA: Patient[];
  patientsGroupB: Patient[];
  patientA: Patient | null;
  patientB: Patient | null;
  patientADetails: PatientItem[];
  patientBDetails: PatientItem[];
  patientSelection: PatientSelectionEnum;
  isLoading: boolean;
}
