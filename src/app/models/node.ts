import { Occurrences } from './occurrences';
import { Data } from './data';

/**
 * Node information
 */
export interface Node {
  /**
   * This node's data, which only consists of its ID
   */
  data: Data;
  /**
   * List of occurrences
   */
  occ: Occurrences;
}
