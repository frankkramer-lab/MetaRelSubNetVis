import { createAction, props } from '@ngrx/store';
import { ImageDownloadConfig } from '../../schema/image-download-config';

export const setFileExtension = createAction(
  '[Download Component] set file extension',
  props<{ extension: string }>(),
);
export const setScale = createAction('[Download Component] set scale', props<{ scale: number }>());
export const toggleBackgroundTransparent = createAction(
  '[Download Component] toggle background transparent',
);
export const triggerImageDownload = createAction(
  '[Download Component] trigger image download',
  props<{ imageDownloadConfig: ImageDownloadConfig }>(),
);
