import { Patient } from './patient';
import { PatientDetails } from './patient-details';

/**
 * Collection of patients classified by groups A and B, e.g. metastatic and non-metastatic patients.
 */
export interface PatientCollection {
  /**
   * List of patients in group A, e.g. metastatic patients.
   */
  groupA: Patient[];
  /**
   * List of patients in group B, e.g. non-metastatic patients
   */
  groupB: Patient[];
  /**
   * All patients belonging to group A and their respective details
   */
  detailsA: PatientDetails;
  /**
   * All patients belonging to group B and their respective details
   */
  detailsB: PatientDetails;
  /**
   * Minimal gene expression
   */
  geMin: number;
  /**
   * Center between extrema gene expression
   */
  geMidRange: number;
  /**
   * Maximal gene expression
   */
  geMax: number;
  /**
   * Minimal relevance score
   */
  scoreMin: number;
  /**
   * Center between extrema relevance scores
   */
  scoreMidRange: number;
  /**
   * Maximal relevance score
   */
  scoreMax: number;
  /**
   * Label for patient group A
   */
  labelA: string;
  /**
   * Label for patient group B
   */
  labelB: string;
}
