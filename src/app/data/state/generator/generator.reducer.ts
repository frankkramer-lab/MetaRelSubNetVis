import { createReducer, on } from '@ngrx/store';
import { GeneratorState } from './generator.state';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import {
  setGeneratorImageExtension,
  setGeneratorImageScale,
  setGeneratorSidebarVisibility,
  setQueryParams,
  toggleGeneratorImageBackground,
  toggleGeneratorTriggerImmediateDownload,
} from './generator.actions';

const initialState: GeneratorState = {
  imageDownloadConfig: {
    extension: 'PNG',
    scale: 1,
    transparent: false,
  },
  isImageDownloadConfigValid: true,
  sidebarVisibility: SidebarVisibilityEnum.full,
  triggerImageDownload: false,
  queryParams: '',
  domain: 'http://localhost:4200',
};

export const generatorReducer = createReducer(
  initialState,
  on(
    setGeneratorSidebarVisibility,
    (state: GeneratorState, { sidebarVisibility }): GeneratorState => ({
      ...state,
      sidebarVisibility,
    }),
  ),
  on(
    toggleGeneratorTriggerImmediateDownload,
    (state: GeneratorState): GeneratorState => ({
      ...state,
      triggerImageDownload: !state.triggerImageDownload,
    }),
  ),
  on(setGeneratorImageScale, (state: GeneratorState, { scale }): GeneratorState => {
    if (scale <= 0 || scale > 10) {
      return {
        ...state,
        imageDownloadConfig: { ...state.imageDownloadConfig, scale },
        isImageDownloadConfigValid: false,
      };
    }
    return {
      ...state,
      imageDownloadConfig: { ...state.imageDownloadConfig, scale },
      isImageDownloadConfigValid: true,
    };
  }),
  on(
    setGeneratorImageExtension,
    (state: GeneratorState, { extension }): GeneratorState => ({
      ...state,
      imageDownloadConfig: { ...state.imageDownloadConfig, extension },
    }),
  ),
  on(
    setQueryParams,
    (state: GeneratorState, { queryParams }): GeneratorState => ({
      ...state,
      queryParams,
    }),
  ),
  on(
    toggleGeneratorImageBackground,
    (state: GeneratorState): GeneratorState => ({
      ...state,
      imageDownloadConfig: {
        ...state.imageDownloadConfig,
        transparent: !state.imageDownloadConfig.transparent,
      },
    }),
  ),
);
