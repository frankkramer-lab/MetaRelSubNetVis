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
   * Indicates, in how many patients a specified node occurs,
   * thus it's basically a dictionary with all possible nodes as keys.
   */
  occ: NetworkOccurrences;
}
