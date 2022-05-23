import { createReducer, on } from '@ngrx/store';
import { LayoutState } from './layout.state';
import {
  setNodeColorBy,
  setNodeMarkup,
  setNodeSizeBy,
  toggleBooleanProperty,
  toggleShowAllNodes,
  toggleShowOnlySharedNodes,
} from './layout.actions';
import { hydrateLayoutSuccess, loadDataSuccess } from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';
import { PropertyTypeEnum } from '../../../core/enum/property-type-enum';

const initialState: LayoutState = {
  nodeColorBy: null,
  nodeSizeBy: null,
  showAllNodes: false,
  showOnlySharedNodes: false,
  booleanProperty: null,
  properties: {
    individual: [],
    default: [],
  },
  highlightColor: '#000000',
};

export const layoutReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state: LayoutState, { properties, highlightColor }): LayoutState => {
    const firstContinuous = properties.default.find((a) => a.type === PropertyTypeEnum.continuous);
    return {
      ...state,
      properties,
      highlightColor,
      nodeColorBy: firstContinuous ?? null,
      nodeSizeBy: firstContinuous ?? null,
    };
  }),
  on(
    setNodeMarkup,
    (state: LayoutState, { property }): LayoutState => ({
      ...state,
      booleanProperty: null,
      nodeColorBy: property ?? state.nodeColorBy,
      nodeSizeBy: property ?? state.nodeSizeBy,
    }),
  ),
  on(
    toggleBooleanProperty,
    (state: LayoutState, { booleanProperty }): LayoutState => ({
      ...state,
      booleanProperty,
    }),
  ),
  on(toggleShowAllNodes, (state: LayoutState): LayoutState => {
    const showAllNodes = !state.showAllNodes;
    return {
      ...state,
      showAllNodes,
      showOnlySharedNodes: showAllNodes ? false : state.showOnlySharedNodes,
    };
  }),
  on(toggleShowOnlySharedNodes, (state: LayoutState): LayoutState => {
    const showOnlySharedNodes = !state.showOnlySharedNodes;
    return {
      ...state,
      showOnlySharedNodes,
      showAllNodes: showOnlySharedNodes ? false : state.showAllNodes,
    };
  }),
  on(
    setNodeColorBy,
    (state: LayoutState, { nodeColorBy }): LayoutState => ({
      ...state,
      nodeColorBy,
    }),
  ),
  on(
    setNodeSizeBy,
    (state: LayoutState, { nodeSizeBy }): LayoutState => ({
      ...state,
      nodeSizeBy,
    }),
  ),
  on(
    hydrateLayoutSuccess,
    (
      state: LayoutState,
      { showAll, showShared, booleanProperty, nodeSizeBy, nodeColorBy },
    ): LayoutState => ({
      ...state,
      nodeSizeBy: nodeSizeBy ?? null,
      nodeColorBy: nodeColorBy ?? null,
      showAllNodes: showAll && showShared ? false : showAll,
      showOnlySharedNodes: showShared,
      booleanProperty,
    }),
  ),
  on(
    navigateHome,
    (state: LayoutState): LayoutState => ({
      ...state,
      booleanProperty: null,
      showOnlySharedNodes: false,
      showAllNodes: false,
      nodeColorBy: null,
      nodeSizeBy: null,
    }),
  ),
);
