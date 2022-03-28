import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HomeState } from './home.state';

const selectState = createSelector(
  (appState: AppState) => appState.home,
  (state: HomeState) => state,
);

export const selectIsLoading = createSelector(selectState, (state) => state.isLoading);

export const selectNetworks = createSelector(selectState, (state) => state.networks);
export const selectSampleNetworks = createSelector(selectState, (state) => state.sampleNetworks);
export const selectSearchTerm = createSelector(selectState, (state) => state.searchTerm);
