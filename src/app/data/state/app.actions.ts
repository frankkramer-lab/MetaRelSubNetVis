import { createAction, props } from '@ngrx/store';

export const loadDefaultAppData = createAction('[Layout Component] load default app data');
export const setupVisualizationConfigByRoute = createAction(
  '[Layout Component] setup visualization config by route',
  props<any>(),
);
