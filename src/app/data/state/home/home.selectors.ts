import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HomeState } from './home.state';

const selectState = createSelector(
  (appState: AppState) => appState.home,
  (state: HomeState) => state,
);

export const selectIsLoading = createSelector(selectState, (state: HomeState) => state.isLoading);

export const selectNetworks = createSelector(selectState, (state: HomeState) => state.networks);
export const selectSampleNetworks = createSelector(
  selectState,
  (state: HomeState) => state.sampleNetworks,
);
export const selectSetupInProgress = createSelector(
  selectState,
  (state: HomeState) => state.setupInProgress,
);
export const selectLastTermEmpty = createSelector(
  selectState,
  (state: HomeState) => state.lastTermWasEmpty,
);
export const selectLastResultEmpty = createSelector(
  selectState,
  (state: HomeState) => state.lastResultWasEmpty,
);
export const selectNetworkSummary = createSelector(
  selectState,
  (state: HomeState) => state.selectedNetwork,
);
