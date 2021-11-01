/**
 * Item the patient data consist of
 */
export interface PatientItem {
  /**
   * Identifier
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
