import { createAction, props } from '@ngrx/store';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';

export const toggleSidebarVisibility = createAction(
  '[Sidebar Component] change sidebar visibility',
  props<{ visibility: SidebarVisibilityEnum }>(),
);

export const setSidebarVisibility = createAction(
  '[Hydrator Effects] set sidebar visibility',
  props<{ visibility: SidebarVisibilityEnum }>(),
);
