import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NetworkState } from './network.state';
import { Network } from '../../schema/network';

const selectState = createSelector(
  (appState: AppState) => appState.network,
  (state: NetworkState) => state,
);

export const selectNetwork = createSelector(selectState, (state: NetworkState) => state.network);

export const selectHeadline = createSelector(selectState, (state: NetworkState) => state.headline);

export const selectUuid = createSelector(selectState, (state: NetworkState) => state.uuid);

export const selectIsLoading = createSelector(
  selectState,
  (state: NetworkState) => state.isLoading,
);
export const selectNodeAttributes = createSelector(
  selectState,
  (state: NetworkState) => state.nodeAttributes,
);

export const selectNodes = createSelector(selectNetwork, (network: Network | null) => {
  return network?.nodes || [];
});

export const selectOccurrences = createSelector(selectNetwork, (network: Network | null) => {
  return network?.occ || {};
});
