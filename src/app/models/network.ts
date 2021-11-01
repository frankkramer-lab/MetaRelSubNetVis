import { Edge } from './edge';
import { Node } from './node';
import { Occurrences } from './occurrences';

/**
 * Contains network information
 */
export interface Network {
  /**
   * List of nodes
   */
  nodes: Node[];
  /**
   * List of edges
   */
  edges: Edge[];
  /**
   * List of occurrences
   */
  occ: Occurrences;
}
