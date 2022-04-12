import { createAction, props } from '@ngrx/store';
import { ThresholdDefinition } from '../../schema/threshold-definition';

// export const setDefined = createAction(
//   '[Sidebar Threshold Component] set defined',
//   props<{ thresholdDefinition: ThresholdDefinition }>(),
// );

// export const setProperty = createAction(
//   '[Threshold Component] set property',
//   props<{ responsibleProperty: Property }>(),
// );

// range changed value
// todo reducer
export const setThreshold = createAction(
  '[Sidebar Threshold Component] set Threshold',
  props<{ threshold: ThresholdDefinition }>(),
);
export const setAllThresholds = createAction('[Threshold Effects] set all thresholds', props<{thresholds: ThresholdDefinition[]}>());
