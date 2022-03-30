import { createAction, props } from '@ngrx/store';

export const setDefined = createAction(
  '[Sidebar Threshold Component] set defined',
  props<{ defined: number }>(),
);

export const setLabelMin = createAction(
  '[Threshold Effects] set threshold label min', props<{ labelMin: string }>(),
);
