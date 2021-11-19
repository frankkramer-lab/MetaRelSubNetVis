import { NetworkNode } from './network-node';
import { NetworkEdge } from './network-edge';
import { NetworkOccurrences } from './network-occurrences';

export interface Network {
  /**
   * List of nodes
   */
  nodes: NetworkNode[];
  /**
   * List of edges
   */
  edges: NetworkEdge[];
  /**
   * List of occurrences
   */
  occ: NetworkOccurrences;
}
