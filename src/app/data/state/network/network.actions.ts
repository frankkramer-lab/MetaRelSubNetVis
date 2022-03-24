import { createAction, props } from '@ngrx/store';

export const setUuid = createAction(
  '[Sidebar Import Component] set UUID',
  props<{ uuid: string }>(),
);

export const initializeCore = createAction('[Network Component] initialize cytoscape core');
