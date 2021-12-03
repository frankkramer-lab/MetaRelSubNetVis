import { createAction, props } from '@ngrx/store';

export const setDefined = createAction(
  '[Sidebar Threshold Component] set defined',
  props<{ defined: number }>(),
);
