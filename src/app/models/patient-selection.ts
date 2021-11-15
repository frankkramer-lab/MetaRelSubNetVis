import { Patient } from './patient';

/**
 * Contains for both metastatic and nonmetastatic a {@link Patient} item.
 */
export interface PatientSelection {
  /**
   * Preselected metastatic patient
   */
  metastatic: Patient | null;
  /**
   * Preselected nonmetastatic patient
   */
  nonmetastatic: Patient | null;
}
