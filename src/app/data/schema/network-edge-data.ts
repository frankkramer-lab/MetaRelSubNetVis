import { NetworkData } from './network-data';

export interface NetworkEdgeData extends NetworkData {
  source: string;
  target: string;
}
