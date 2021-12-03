import { createReducer, on } from '@ngrx/store';
import { GeneratorState } from './generator.state';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import {
  setImageDownloadConfig,
  setSidebarVisibility,
  toggleTriggerImmediateDownload,
} from './generator.actions';

const initialState: GeneratorState = {
  imageDownloadConfig: {
    extension: 'PNG',
    scale: 1,
    transparent: false,
  },
  sidebarVisibility: SidebarVisibilityEnum.full,
  triggerImageDownload: false,
};

export const generatorReducer = createReducer(
  initialState,
  on(
    setSidebarVisibility,
    (state: GeneratorState, { sidebarVisibility }): GeneratorState => ({
      ...state,
      sidebarVisibility,
    }),
  ),
  on(
    setImageDownloadConfig,
    (state: GeneratorState, { imageDownloadConfig }): GeneratorState => ({
      ...state,
      imageDownloadConfig,
    }),
  ),
  on(
    toggleTriggerImmediateDownload,
    (state: GeneratorState): GeneratorState => ({
      ...state,
      triggerImageDownload: !state.triggerImageDownload,
    }),
  ),
);
