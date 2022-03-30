import { PatientItem } from './patient-item';

/**
 * Contains one key and a list of this patient's specifics.
 */
export interface PatientDetails {
  /**
   * The key contains the name of this patient.
   */
  [key: string]: PatientItem[];
}
