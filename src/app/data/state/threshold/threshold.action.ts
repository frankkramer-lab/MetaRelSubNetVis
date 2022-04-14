import { createAction, props } from '@ngrx/store';
import { ThresholdDefinition } from '../../schema/threshold-definition';

export const setThreshold = createAction(
  '[Sidebar Threshold Component] set Threshold',
  props<{ threshold: ThresholdDefinition }>(),
);
export const setAllThresholds = createAction(
  '[Threshold Effects] set all thresholds',
  props<{ thresholds: ThresholdDefinition[] }>(),
);
export const keepAllThresholds = createAction('[Threshold Effects] keep all thresholds');
