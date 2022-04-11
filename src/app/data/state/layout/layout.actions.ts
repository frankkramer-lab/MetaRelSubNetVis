import { createAction, props } from '@ngrx/store';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';
import { Property } from '../../schema/property';

export const toggleShowMtbResults = createAction(
  '[Sidebar Layout Component] toggle show mtb results',
);
export const toggleShowAllNodes = createAction('[Sidebar Layout Component] toggle show all nodes');
export const toggleShowOnlySharedNodes = createAction(
  '[Sidebar Layout Component] toggle show only shared nodes',
);
export const setNodeColorBy = createAction(
  '[Sidebar Layout Component] select color nodes by',
  props<{ nodeColorBy: Property | null }>(),
);
export const setNodeSizeBy = createAction(
  '[Sidebar Layout Component] select size nodes by',
  props<{ nodeSizeBy: NodeSizeByEnum }>(),
);
export const fitGraph = createAction('[Sidebar Layout Component] fit graph');
