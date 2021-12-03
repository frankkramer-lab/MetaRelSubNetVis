import { createReducer, on } from '@ngrx/store';
import { DownloadState } from './download.state';
import { setFileExtension, setScale, toggleBackgroundTransparent } from './download.actions';
import { hydrateDownloadConfigSuccess } from '../hydrator/hydrator.actions';

const initialState: DownloadState = {
  extension: 'PNG',
  scale: 1,
  transparentBackground: false,
};

export const downloadReducer = createReducer(
  initialState,
  on(
    setFileExtension,
    (state: DownloadState, { extension }): DownloadState => ({
      ...state,
      extension,
    }),
  ),
  on(setScale, (state: DownloadState, { scale }): DownloadState => ({ ...state, scale })),
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
);
