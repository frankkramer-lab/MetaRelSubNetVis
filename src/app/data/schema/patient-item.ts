/**
 * Item the patient data consist of
 */
export interface PatientItem {
  /**
   * Protein's identifier
   */
  name: string;
  /**
   * Score
   */
  score: number;
  /**
   * Gene expression
   */
  ge: number;
  /**
   * Gene expression level class
   */
  geLevel: string;
  /**
   * MTB
   */
  mtb: boolean;
}
