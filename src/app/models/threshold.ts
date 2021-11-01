import { ThresholdItem } from './threshold-item';

/**
 * Threshold
 */
export interface Threshold {
  /**
   * Metastatic threshold item
   */
  metastatic: ThresholdItem;
  /**
   * Nonmetastatic threshold item
   */
  nonmetastatic: ThresholdItem;
}
