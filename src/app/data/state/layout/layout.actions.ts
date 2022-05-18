import { createAction, props } from '@ngrx/store';
import { Property } from '../../schema/property';

export const toggleBooleanProperty = createAction(
  '[Sidebar Layout Component] toggle boolean property',
  props<{ booleanProperty: Property | null }>(),
);
export const toggleShowAllNodes = createAction('[Sidebar Layout Component] toggle show all nodes');
export const toggleShowOnlySharedNodes = createAction(
  '[Sidebar Layout Component] toggle show only shared nodes',
);
export const keepNodeMarkup = createAction('[Layout Effects] keep current node markup');
export const setNodeMarkup = createAction(
  '[Layout Effects] set node color and size by the same property',
  props<{ property: Property | null }>(),
);
export const setNodeColorBy = createAction(
  '[Sidebar Layout Component] select color nodes by',
  props<{ nodeColorBy: Property | null }>(),
);
export const setNodeSizeBy = createAction(
  '[Sidebar Layout Component] select size nodes by',
  props<{ nodeSizeBy: Property | null }>(),
);
export const fitGraph = createAction('[Sidebar Layout Component] fit graph');
