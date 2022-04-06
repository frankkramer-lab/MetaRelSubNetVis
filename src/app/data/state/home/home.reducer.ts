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
import { navigateHome } from '../sidebar/sidebar.actions';

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
  on(loadSampleSummariesSuccess, (state: HomeState, { sampleNetworks }): HomeState => {
    if (sampleNetworks.length > 0) {
      return {
        ...state,
        isLoading: false,
        sampleNetworks,
        selectedNetwork: sampleNetworks[0],
      };
    }
    return {
      ...state,
      isLoading: false,
      sampleNetworks,
      selectedNetwork: null,
    };
  }),
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
  on(loadNetworkSummariesSuccess, (state: HomeState, { networks }): HomeState => {
    return {
      ...state,
      isLoading: false,
      networks,
      lastResultWasEmpty: networks.length === 0,
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
      const invalidNetworkIndex = state.networks.findIndex((a) => a.externalId === uuid);
      const invalidNetwork = state.networks[invalidNetworkIndex];
      const validNetworks: NetworkSearchItem[] = state.networks.filter(
        (a) => a.externalId !== uuid,
      );

      let selectedNetwork: NetworkSearchItem | null = null;
      if (invalidNetwork) {
        selectedNetwork = { ...invalidNetwork, isValid: false };
        validNetworks.splice(invalidNetworkIndex, 0, selectedNetwork);
      }

      return {
        ...state,
        setupInProgress: false,
        networks: validNetworks,
        selectedNetwork,
      };
    }
    return {
      ...state,
      setupInProgress: false,
    };
  }),
  on(showNetworkDetails, (state: HomeState, { selectedNetwork }): HomeState => {
    return { ...state, selectedNetwork };
  }),
  on(
    navigateHome,
    (state: HomeState): HomeState => ({
      ...state,
      lastTermWasEmpty: false,
      lastResultWasEmpty: false,
    }),
  ),
);
