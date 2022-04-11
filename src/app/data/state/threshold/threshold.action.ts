import { createAction, props } from '@ngrx/store';
import { Property } from '../../schema/property';
import { ThresholdDefinition } from '../../schema/threshold-definition';

export const setDefined = createAction(
  '[Sidebar Threshold Component] set defined',
  props<{ thresholdDefinition: ThresholdDefinition }>(),
);

export const setProperty = createAction(
  '[Threshold Component] set property',
  props<{ responsibleProperty: Property }>(),
);
