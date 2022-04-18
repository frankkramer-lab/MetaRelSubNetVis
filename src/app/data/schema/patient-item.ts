/**
 * Item the patient data consist of
 */
export interface PatientItem {
  /**
   * Protein's or gene's identifier
   */
  id: string;
  /**
   * Protein's or gene's name
   */
  name: string;

  /**
   * All relevant properties have to be defined for a patient
   */
  [key: string]: string;
}
