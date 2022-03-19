import { createAction, props } from '@ngrx/store';

export const setUuid = createAction(
  '[Sidebar Import Component] set UUID',
  props<{ uuid: string }>(),
);
