import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GeneratorState } from './generator.state';

const selectState = createSelector(
  (appState: AppState) => appState.generator,
  (state: GeneratorState) => state,
);

export const selectIsImageDownloadConfigValid = createSelector(
  selectState,
  (state: GeneratorState) => state.isImageDownloadConfigValid,
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
export const selectQueryParams = createSelector(
  selectState,
  (state: GeneratorState) => state.queryParams,
);
export const selectDomain = createSelector(selectState, (state: GeneratorState) => state.domain);

export const selectGenCmpVisImport = createSelector(
  selectState,
  (state: GeneratorState) => state.componentImportVisibility,
);
export const selectGenCmpVisPatients = createSelector(
  selectState,
  (state: GeneratorState) => state.componentPatientsVisibility,
);
export const selectGenCmpVisThreshold = createSelector(
  selectState,
  (state: GeneratorState) => state.componentThresholdVisibility,
);
export const selectGenCmpVisNodes = createSelector(
  selectState,
  (state: GeneratorState) => state.componentNodesVisibility,
);
export const selectGenCmpVisLayout = createSelector(
  selectState,
  (state: GeneratorState) => state.componentLayoutVisibility,
);
export const selectGenCmpVisDownload = createSelector(
  selectState,
  (state: GeneratorState) => state.componentDownloadVisibility,
);
export const selectGenCmpVisGenerator = createSelector(
  selectState,
  (state: GeneratorState) => state.componentGeneratorVisibility,
);
export const selectGenCmpVisImpressum = createSelector(
  selectState,
  (state: GeneratorState) => state.componentImpressumVisibility,
);
