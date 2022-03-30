import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HydratorState } from './hydrator.state';

const selectState = createSelector(
  (appState: AppState) => appState.hydrator,
  (state: HydratorState) => state,
);

export const selectConfig = createSelector(selectState, (state: HydratorState) => state.config);

export const selectHydrationInProgress = createSelector(
  selectState,
  (state: HydratorState) => state.hydrationInProgress,
);
