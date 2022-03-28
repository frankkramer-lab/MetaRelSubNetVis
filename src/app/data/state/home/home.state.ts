import { NetworkSearchItem } from '../../schema/network-search-item';

export interface HomeState {
  sampleNetworks: NetworkSearchItem[];
  networks: NetworkSearchItem[];
  isLoading: boolean;
  searchTerm: string | null;
}
