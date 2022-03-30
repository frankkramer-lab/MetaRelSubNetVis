import { createReducer, on } from '@ngrx/store';
import { NetworkState } from './network.state';
import { loadDataFailure, loadDataSuccess, loadQueryParams } from '../hydrator/hydrator.actions';
import { setUuid } from './network.actions';
import { navigateHome } from '../sidebar/sidebar.actions';

const initialState: NetworkState = {
  network: null,
  isLoading: false,
  headline: null,
  uuid: null,
};

export const networkReducer = createReducer(
  initialState,
  on(
    setUuid,
    (state: NetworkState, { uuid }): NetworkState => ({
      ...state,
      uuid,
      isLoading: true,
    }),
  ),
  on(loadQueryParams, (state: NetworkState): NetworkState => ({ ...state, isLoading: true })),
  on(
    loadDataSuccess,
    (state: NetworkState, { network, headline }): NetworkState => ({
      ...state,
      isLoading: false,
      headline,
      network,
    }),
  ),
  on(loadDataFailure, (state: NetworkState): NetworkState => ({ ...state, isLoading: false })),
  on(
    navigateHome,
    (state: NetworkState): NetworkState => ({
      ...state,
      uuid: null,
      headline: null,
    }),
  ),
);
