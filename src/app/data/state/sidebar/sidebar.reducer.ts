import { createReducer, on } from '@ngrx/store';
import { SidebarState } from './sidebar.state';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import { setSidebarVisibility, toggleSidebarVisibility } from './sidebar.actions';

const initialState: SidebarState = {
  visibility: SidebarVisibilityEnum.full,
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
    setSidebarVisibility,
    (state: SidebarState, { visibility }): SidebarState => ({
      ...state,
      visibility,
    }),
  ),
);
