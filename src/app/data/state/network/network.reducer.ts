import { NetworkState } from './network.state';
import { createReducer, on } from '@ngrx/store';
import { loadInitialAppData } from '../app.actions';
import { loadNetworkDataFailure, loadNetworkDataSuccess } from './network.actions';

const initialState: NetworkState = {
  network: null,
  isLoading: false,
};

export const networkReducer = createReducer(
  initialState,
  on(loadInitialAppData, (state: NetworkState): NetworkState => ({ ...state, isLoading: true })),
  on(
    loadNetworkDataSuccess,
    (state: NetworkState, { network }): NetworkState => ({ ...state, isLoading: false, network }),
  ),
  on(
    loadNetworkDataFailure,
    (state: NetworkState): NetworkState => ({ ...state, isLoading: false }),
  ),
);
