import { Network } from '../../schema/network';

export interface NetworkState {
  network: Network | null;
  headline: string | null;
  uuid: string;
  isLoading: boolean;
}
