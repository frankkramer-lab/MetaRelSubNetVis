import { createAction, props } from '@ngrx/store';

export const setUuid = createAction(
  '[Sidebar Component] set UUID',
  props<{ uuid: string | null }>(),
);

export const initializeCore = createAction('[Network Component] initialize cytoscape core');
