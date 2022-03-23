import { createReducer, on } from '@ngrx/store';
import { GeneratorState } from './generator.state';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import {
  setComponentVisibilityDownload,
  setComponentVisibilityGenerator,
  setComponentVisibilityImport,
  setComponentVisibilityImpressum,
  setComponentVisibilityLayout,
  setComponentVisibilityNodes,
  setComponentVisibilityPatients,
  setComponentVisibilityThreshold,
  setGeneratorImageExtension,
  setGeneratorImageScale,
  setGeneratorSidebarVisibility,
  setQueryParams,
  toggleGeneratorImageBackground,
  toggleGeneratorTriggerImmediateDownload,
} from './generator.actions';
import { environment } from '../../../../environments/environment';

const initialState: GeneratorState = {
  imageDownloadConfig: {
    extension: 'PNG',
    scale: 1,
    transparent: false,
  },
  isImageDownloadConfigValid: true,
  sidebarVisibility: ComponentVisibilityEnum.full,
  componentImportVisibility: ComponentVisibilityEnum.button,
  componentPatientsVisibility: ComponentVisibilityEnum.button,
  componentThresholdVisibility: ComponentVisibilityEnum.button,
  componentNodesVisibility: ComponentVisibilityEnum.button,
  componentLayoutVisibility: ComponentVisibilityEnum.button,
  componentDownloadVisibility: ComponentVisibilityEnum.button,
  componentGeneratorVisibility: ComponentVisibilityEnum.button,
  componentImpressumVisibility: ComponentVisibilityEnum.button,
  triggerImageDownload: false,
  queryParams: '',
  domain: environment.host,
};

export const generatorReducer = createReducer(
  initialState,
  on(
    setComponentVisibilityImport,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentImportVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityPatients,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentPatientsVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityThreshold,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentThresholdVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityNodes,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentNodesVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityLayout,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentLayoutVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityDownload,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentDownloadVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityGenerator,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentGeneratorVisibility: visibility,
    }),
  ),
  on(
    setComponentVisibilityImpressum,
    (state: GeneratorState, { visibility }): GeneratorState => ({
      ...state,
      componentImpressumVisibility: visibility,
    }),
  ),
  on(
    setGeneratorSidebarVisibility,
    (state: GeneratorState, { sidebarVisibility }): GeneratorState => {
      return {
        ...state,
        sidebarVisibility,
      };
    },
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
  on(setGeneratorImageExtension, (state: GeneratorState, { extension }): GeneratorState => {
    if (extension === 'SVG') {
      return {
        ...state,
        isImageDownloadConfigValid: true,
        imageDownloadConfig: {
          ...state.imageDownloadConfig,
          scale: 1,
          extension,
        },
      };
    }
    return {
      ...state,
      imageDownloadConfig: {
        ...state.imageDownloadConfig,
        extension,
      },
    };
  }),
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
