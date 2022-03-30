import { NetworkOccurrences } from './network-occurrences';
import { NetworkData } from './network-data';

export interface NetworkNode {
  data: NetworkData;
  occ: NetworkOccurrences;
}
