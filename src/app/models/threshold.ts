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
  /**
   * Range display in the frontend requires an integer based value.
   * We work with possibly very small numbers so we need to increase these numbers
   * by brute forcing them to integer range.
   */
  multiplier: number;
}
