import { Network } from '../../schema/network';

export interface NetworkState {
  network: Network | null;
  headline: string | null;
  isLoading: boolean;
}
