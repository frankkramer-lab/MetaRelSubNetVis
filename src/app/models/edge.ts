import { EdgeData } from './edge-data';

/**
 * Edge information
 */
export interface Edge {
  /**
   * This edge's data, which consists of its own ID,
   * as well as IDs from its source and its target nodes
   */
  data: EdgeData;
}
