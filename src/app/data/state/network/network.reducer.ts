import { createReducer, on } from '@ngrx/store';
import { NetworkState } from './network.state';
import { loadDataSuccess, loadQueryParams } from '../hydrator/hydrator.actions';
import { setUuid } from './network.actions';

const initialState: NetworkState = {
  network: null,
  isLoading: false,
  headline: null,
  uuid: 'a420aaee-4be9-11ec-b3be-0ac135e8bacf',
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
);
