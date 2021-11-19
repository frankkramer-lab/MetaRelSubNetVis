import { createAction, props } from '@ngrx/store';
import { Threshold } from '../../schema/threshold';

export const loadThresholdDataSuccess = createAction(
  '[API] load threshold data success',
  props<{ thresholds: Threshold }>(),
);
export const loadThresholdDataFailure = createAction('[API] load threshold data failure');

export const setDefined = createAction(
  '[Sidebar Threshold Component] set defined',
  props<{ defined: number }>(),
);
