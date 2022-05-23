import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SidebarState } from './sidebar.state';

const selectState = createSelector(
  (appState: AppState) => appState.sidebar,
  (state: SidebarState) => state,
);

export const selectSidebarVisibility = createSelector(
  selectState,
  (state: SidebarState) => state.visibility,
);

export const selectSidebarVisibilityImport = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityImport,
);
export const selectSidebarVisibilityPatients = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityPatients,
);
export const selectSidebarVisibilityThreshold = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityThreshold,
);
export const selectSidebarVisibilityNodes = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityNodes,
);
export const selectSidebarVisibilityLayout = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityLayout,
);
export const selectSidebarVisibilityDownload = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityDownload,
);
export const selectSidebarVisibilityGenerator = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityGenerator,
);
export const selectSidebarVisibilityImpressum = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityImpressum,
);
export const selectSidebarBackButtonVisibility = createSelector(
  selectState,
  (state: SidebarState) => state.visibilityBackButton,
);
