import { createReducer, on } from '@ngrx/store';
import { HomeState } from './home.state';
import {
  loadNetworkSummaries,
  loadNetworkSummariesFailure,
  loadNetworkSummariesSuccess,
  loadSampleSummaries,
  loadSampleSummariesFailure,
  loadSampleSummariesSuccess,
  showNetworkDetails,
} from './home.actions';
import { NetworkSearchItem } from '../../schema/network-search-item';
import { loadDataFailure, loadDataSuccess, loadQueryParams } from '../hydrator/hydrator.actions';

const initialState: HomeState = {
  sampleNetworks: [],
  networks: [],
  selectedNetwork: null,
  isLoading: false,
  lastTermWasEmpty: false,
  lastResultWasEmpty: false,
  setupInProgress: false,
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
      selectedNetwork: sampleNetworks[1],
    }),
  ),
  on(loadSampleSummariesFailure, (state: HomeState): HomeState => ({ ...state, isLoading: false })),
  on(
    loadNetworkSummaries,
    (state: HomeState, { searchTerm }): HomeState => ({
      ...state,
      searchTerm,
      isLoading: true,
      lastTermWasEmpty: false,
      lastResultWasEmpty: false,
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
    return {
      ...state,
      isLoading: false,
      networks: newNetworks,
      lastResultWasEmpty: search.networks.length === 0,
    };
  }),
  on(
    loadNetworkSummariesFailure,
    (state: HomeState, { lastTermWasEmpty }): HomeState => ({
      ...state,
      isLoading: false,
      lastTermWasEmpty,
    }),
  ),
  on(loadQueryParams, (state: HomeState): HomeState => ({ ...state, setupInProgress: true })),
  on(
    loadDataSuccess,
    (state: HomeState): HomeState => ({
      ...state,
      setupInProgress: false,
    }),
  ),
  on(loadDataFailure, (state: HomeState, { uuid }): HomeState => {
    if (uuid.length > 0) {
      const networks: NetworkSearchItem[] = [];
      state.networks.forEach((network) => {
        if (network.externalId === uuid) {
          networks.push({ ...network, isValid: false });
        } else {
          networks.push(network);
        }
      });
      return {
        ...state,
        setupInProgress: false,
        networks,
      };
    }
    return {
      ...state,
      setupInProgress: false,
    };
  }),
  on(
    showNetworkDetails,
    (state: HomeState, { selectedNetwork }): HomeState => ({
      ...state,
      selectedNetwork,
    }),
  ),
);
