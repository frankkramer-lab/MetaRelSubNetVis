import { Network } from '../../schema/network';

export interface NetworkState {
  network: Network | null;
  isLoading: boolean;
}
