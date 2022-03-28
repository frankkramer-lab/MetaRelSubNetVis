import { createReducer, on } from '@ngrx/store';
import { DownloadState } from './download.state';
import { setFileExtension, setScale, toggleBackgroundTransparent } from './download.actions';
import { hydrateDownloadConfigSuccess } from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';

const initialState: DownloadState = {
  extension: 'PNG',
  scale: 1,
  transparentBackground: false,
  isFormValid: true,
};

export const downloadReducer = createReducer(
  initialState,
  on(setFileExtension, (state: DownloadState, { extension }): DownloadState => {
    if (extension === 'SVG') {
      return {
        ...state,
        extension,
        scale: 1,
        isFormValid: true,
      };
    }
    return {
      ...state,
      extension,
    };
  }),
  on(setScale, (state: DownloadState, { scale }): DownloadState => {
    if (scale <= 0 || scale > 10) {
      return { ...state, scale, isFormValid: false };
    }
    return { ...state, scale, isFormValid: true };
  }),
  on(
    toggleBackgroundTransparent,
    (state: DownloadState): DownloadState => ({
      ...state,
      transparentBackground: !state.transparentBackground,
    }),
  ),
  on(hydrateDownloadConfigSuccess, (state: DownloadState, { downloadConfig }): DownloadState => {
    return {
      ...state,
      scale: downloadConfig.scale,
      extension: downloadConfig.extension,
      transparentBackground: downloadConfig.transparent,
    };
  }),
  on(
    navigateHome,
    (state: DownloadState): DownloadState => ({
      ...state,
      scale: 1,
      isFormValid: true,
      transparentBackground: false,
      extension: 'PNG',
    }),
  ),
);
