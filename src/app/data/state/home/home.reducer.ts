import { createReducer, on } from '@ngrx/store';
import { HomeState } from './home.state';
import {
  loadNetworkSummaries,
  loadNetworkSummariesFailure,
  loadNetworkSummariesSuccess,
  loadSampleSummaries,
  loadSampleSummariesFailure,
  loadSampleSummariesSuccess,
} from './home.actions';
import { NetworkSearchItem } from '../../schema/network-search-item';

const initialState: HomeState = {
  sampleNetworks: [],
  networks: [],
  isLoading: false,
  searchTerm: null,
};

export const homeReducer = createReducer(
  initialState,
  on(
    loadSampleSummaries,
    (state: HomeState): HomeState => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    loadSampleSummariesSuccess,
    (state: HomeState, { sampleNetworks }): HomeState => ({
      ...state,
      isLoading: false,
      sampleNetworks,
    }),
  ),
  on(loadSampleSummariesFailure, (state: HomeState): HomeState => ({ ...state, isLoading: false })),
  on(
    loadNetworkSummaries,
    (state: HomeState, { searchTerm }): HomeState => ({
      ...state,
      searchTerm,
      isLoading: true,
    }),
  ),
  on(loadNetworkSummariesSuccess, (state: HomeState, { search }): HomeState => {
    const newNetworks: NetworkSearchItem[] = [];

    search.networks.forEach((network: NetworkSearchItem) => {
      newNetworks.push({
        ...network,
        isValid: true,
        linkNdex: `https://www.ndexbio.org/viewer/networks/${network.externalId}`,
      });
    });
    return { ...state, isLoading: false, networks: newNetworks };
  }),
  on(
    loadNetworkSummariesFailure,
    (state: HomeState): HomeState => ({
      ...state,
      isLoading: false,
    }),
  ),
);
