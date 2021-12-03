import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GeneratorState } from './generator.state';

const selectState = createSelector(
  (appState: AppState) => appState.generator,
  (state: GeneratorState) => state,
);

export const selectImageDownloadConfig = createSelector(
  selectState,
  (state: GeneratorState) => state.imageDownloadConfig,
);
export const selectSidebarVisibility = createSelector(
  selectState,
  (state: GeneratorState) => state.sidebarVisibility,
);
export const selectTriggerImmediateDownload = createSelector(
  selectState,
  (state: GeneratorState) => state.triggerImageDownload,
);
