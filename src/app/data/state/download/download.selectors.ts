import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DownloadState } from './download.state';

const selectState = createSelector(
  (appState: AppState) => appState.download,
  (state: DownloadState) => state,
);

export const selectExtension = createSelector(
  selectState,
  (state: DownloadState) => state.extension,
);
export const selectScale = createSelector(selectState, (state: DownloadState) => state.scale);
export const selectTransparentBackground = createSelector(
  selectState,
  (state: DownloadState) => state.transparentBackground,
);
export const selectIsFormValid = createSelector(
  selectState,
  (state: DownloadState) => state.isFormValid,
);
