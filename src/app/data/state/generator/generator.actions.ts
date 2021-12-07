import { createAction, props } from '@ngrx/store';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';

export const setGeneratorSidebarVisibility = createAction(
  '[Generator Component] set generator sidebar visibility',
  props<{ sidebarVisibility: SidebarVisibilityEnum }>(),
);

export const setGeneratorImageScale = createAction(
  '[Generator Component] set generator image scale',
  props<{ scale: number }>(),
);
export const setGeneratorImageExtension = createAction(
  '[Generator Component] set generator image extension',
  props<{ extension: string }>(),
);
export const toggleGeneratorImageBackground = createAction(
  '[Generator Component] toggle generator image background',
);

export const toggleGeneratorTriggerImmediateDownload = createAction(
  '[Generator Component] toggle generator trigger immediate download',
);
export const setQueryParams = createAction(
  '[Generator Component] set query params',
  props<{ queryParams: string }>(),
);
export const copyToClipboard = createAction('[Generator Component] copy to clipboard');
