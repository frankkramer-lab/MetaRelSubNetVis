import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SidebarState } from './sidebar.state';

const selectState = createSelector(
  (appState: AppState) => appState.sidebar,
  (state: SidebarState) => state,
);

export const selectSidebarVisibility = createSelector(selectState, (state: SidebarState) => state.visibility);
