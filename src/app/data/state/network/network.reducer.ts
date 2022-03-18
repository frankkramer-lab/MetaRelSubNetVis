import { createReducer, on } from '@ngrx/store';
import { NetworkState } from './network.state';
import { loadQueryParams } from '../hydrator/hydrator.actions';

const initialState: NetworkState = {
  network: null,
  isLoading: false,
};

export const networkReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: NetworkState): NetworkState => ({ ...state, isLoading: true })),
);
