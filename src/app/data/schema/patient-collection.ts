import { Patient } from './patient';

/**
 * Collection of patients classified by metastatic and nonmetastatic
 */
export interface PatientCollection {
  /**
   * List of metastatic patients
   */
  metastatic: Patient[];
  /**
   * List of nonmetastatic patients
   */
  nonmetastatic: Patient[];
  /**
   * Minimal gene expression
   */
  geMin: number;
  /**
   * Maximal gene expression
   */
  geMax: number;
}
