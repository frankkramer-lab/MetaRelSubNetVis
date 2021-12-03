import { createAction, props } from '@ngrx/store';
import { SidebarVisibilityEnum } from '../../../core/enum/sidebar-visibility.enum';
import { ImageDownloadConfig } from '../../schema/image-download-config';

export const setSidebarVisibility = createAction(
  '[Generator Component] set sidebar visibility',
  props<{ sidebarVisibility: SidebarVisibilityEnum }>(),
);
export const setImageDownloadConfig = createAction(
  '[Generator Component] set image download config',
  props<{ imageDownloadConfig: ImageDownloadConfig }>(),
);
export const toggleTriggerImmediateDownload = createAction(
  '[Generator Component] toggle trigger immediate download',
);
