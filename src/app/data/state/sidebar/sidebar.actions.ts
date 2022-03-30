import { createAction, props } from '@ngrx/store';
import { ComponentVisibilityEnum } from '../../../core/enum/component-visibility.enum';

export const toggleSidebarVisibility = createAction(
  '[Sidebar Component] change sidebar visibility',
  props<{ visibility: ComponentVisibilityEnum }>(),
);

export const setSidebarVisibility = createAction(
  '[Hydrator Effects] set sidebar visibility',
  props<{ visibility: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityPatients = createAction(
  "[Sidebar Component] change sidebar's patients component visibility",
  props<{ visibilityPatients: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityThreshold = createAction(
  "[Sidebar Component] change sidebar's threshold component visibility",
  props<{ visibilityThreshold: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityNodes = createAction(
  "[Sidebar Component] change sidebar's nodes component visibility",
  props<{ visibilityNodes: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityLayout = createAction(
  "[Sidebar Component] change sidebar's layout component visibility",
  props<{ visibilityLayout: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityDownload = createAction(
  "[Sidebar Component] change sidebar's download component visibility",
  props<{ visibilityDownload: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityGenerator = createAction(
  "[Sidebar Component] change sidebar's generator component visibility",
  props<{ visibilityGenerator: ComponentVisibilityEnum }>(),
);

export const toggleSidebarVisibilityImpressum = createAction(
  "[Sidebar Component] change sidebar's impressum component visibility",
  props<{ visibilityImpressum: ComponentVisibilityEnum }>(),
);

export const navigateHome = createAction('[Sidebar Component] navigate home');
