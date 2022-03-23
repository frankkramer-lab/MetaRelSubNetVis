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

export const selectComponentVisibilityImport = createSelector(
  selectState,
  (state: GeneratorState) => state.componentImportVisibility,
);
export const selectComponentVisibilityPatients = createSelector(
  selectState,
  (state: GeneratorState) => state.componentPatientsVisibility,
);
export const selectComponentVisibilityThreshold = createSelector(
  selectState,
  (state: GeneratorState) => state.componentThresholdVisibility,
);
export const selectComponentVisibilityNodes = createSelector(
  selectState,
  (state: GeneratorState) => state.componentNodesVisibility,
);
export const selectComponentVisibilityLayout = createSelector(
  selectState,
  (state: GeneratorState) => state.componentLayoutVisibility,
);
export const selectComponentVisibilityDownload = createSelector(
  selectState,
  (state: GeneratorState) => state.componentDownloadVisibility,
);
export const selectComponentVisibilityGenerator = createSelector(
  selectState,
  (state: GeneratorState) => state.componentGeneratorVisibility,
);
export const selectComponentVisibilityImpressum = createSelector(
  selectState,
  (state: GeneratorState) => state.componentImpressumVisibility,
);
