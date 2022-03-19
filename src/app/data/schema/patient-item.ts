/**
 * Item the patient data consist of
 */
export interface PatientItem {
  /**
   * Protein's or gene's identifier
   */
  id: number;
  /**
   * Protein's or gene's name
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
