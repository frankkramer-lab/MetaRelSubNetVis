import { createReducer, on } from '@ngrx/store';
import { NetworkState } from './network.state';
import { loadDataSuccess, loadQueryParams } from '../hydrator/hydrator.actions';

const initialState: NetworkState = {
  network: null,
  isLoading: false,
};

export const networkReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: NetworkState): NetworkState => ({ ...state, isLoading: true })),
  on(
    loadDataSuccess,
    (state: NetworkState, { network }): NetworkState => ({
      ...state,
      isLoading: false,
      network,
    }),
  ),
);
