import { createReducer, on } from '@ngrx/store';
import { SidebarState } from './sidebar.state';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';
import {
  setSidebarVisibility,
  toggleSidebarVisibility,
  toggleSidebarVisibilityDownload,
  toggleSidebarVisibilityGenerator,
  toggleSidebarVisibilityImpressum,
  toggleSidebarVisibilityLayout,
  toggleSidebarVisibilityNodes,
  toggleSidebarVisibilityPatients,
  toggleSidebarVisibilityThreshold,
} from './sidebar.actions';
import { hydrateSidebarVisibilitySuccess } from '../hydrator/hydrator.actions';

const initialState: SidebarState = {
  visibility: ComponentVisibilityEnum.full,
  visibilityImport: ComponentVisibilityEnum.button,
  visibilityPatients: ComponentVisibilityEnum.button,
  visibilityThreshold: ComponentVisibilityEnum.button,
  visibilityNodes: ComponentVisibilityEnum.button,
  visibilityLayout: ComponentVisibilityEnum.button,
  visibilityDownload: ComponentVisibilityEnum.button,
  visibilityGenerator: ComponentVisibilityEnum.button,
  visibilityImpressum: ComponentVisibilityEnum.button,
  visibilityBackButton: true,
};

export const sidebarReducer = createReducer(
  initialState,
  on(
    toggleSidebarVisibility,
    (state: SidebarState, { visibility }): SidebarState => ({
      ...state,
      visibility,
    }),
  ),
  on(
    toggleSidebarVisibilityPatients,
    (state: SidebarState, { visibilityPatients }): SidebarState => ({
      ...state,
      visibilityPatients,
    }),
  ),
  on(
    toggleSidebarVisibilityThreshold,
    (state: SidebarState, { visibilityThreshold }): SidebarState => ({
      ...state,
      visibilityThreshold,
    }),
  ),
  on(
    toggleSidebarVisibilityNodes,
    (state: SidebarState, { visibilityNodes }): SidebarState => ({ ...state, visibilityNodes }),
  ),
  on(
    toggleSidebarVisibilityLayout,
    (state: SidebarState, { visibilityLayout }): SidebarState => ({ ...state, visibilityLayout }),
  ),
  on(
    toggleSidebarVisibilityDownload,
    (state: SidebarState, { visibilityDownload }): SidebarState => ({
      ...state,
      visibilityDownload,
    }),
  ),
  on(
    toggleSidebarVisibilityGenerator,
    (state: SidebarState, { visibilityGenerator }): SidebarState => ({
      ...state,
      visibilityGenerator,
    }),
  ),
  on(
    toggleSidebarVisibilityImpressum,
    (state: SidebarState, { visibilityImpressum }): SidebarState => ({
      ...state,
      visibilityImpressum,
    }),
  ),
  on(
    setSidebarVisibility,
    (state: SidebarState, { visibility }): SidebarState => ({
      ...state,
      visibility,
    }),
  ),
  on(
    hydrateSidebarVisibilitySuccess,
    (
      state: SidebarState,
      {
        visibility,
        cmpPatientsVis,
        cmpThresholdVis,
        cmpNodesVis,
        cmpLayoutVis,
        cmpDownloadVis,
        cmpGeneratorVis,
        cmpImpressumVis,
        backButtonVis,
      },
    ): SidebarState => ({
      ...state,
      visibility,
      visibilityPatients: cmpPatientsVis,
      visibilityThreshold: cmpThresholdVis,
      visibilityNodes: cmpNodesVis,
      visibilityLayout: cmpLayoutVis,
      visibilityDownload: cmpDownloadVis,
      visibilityGenerator: cmpGeneratorVis,
      visibilityImpressum: cmpImpressumVis,
      visibilityBackButton: backButtonVis,
    }),
  ),
);
