import { Patient } from '../../schema/patient';
import { PatientItem } from '../../schema/patient-item';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';
import { PatientDetails } from '../../schema/patient-details';

export interface PatientState {
  groupALabel: string;
  groupBLabel: string;
  groupA: Patient[];
  groupB: Patient[];
  groupADetails: PatientDetails;
  groupBDetails: PatientDetails;
  patientA: Patient | null;
  patientB: Patient | null;
  patientADetails: PatientItem[];
  patientBDetails: PatientItem[];
  patientSelection: PatientSelectionEnum;
  geMin: number | null;
  geMax: number | null;
  isLoading: boolean;
}
