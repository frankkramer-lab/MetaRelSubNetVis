import { createReducer, on } from '@ngrx/store';
import { LayoutState } from './layout.state';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';
import {
  setNodeColorBy,
  setNodeSizeBy,
  toggleShowAllNodes,
  toggleShowMtbResults,
  toggleShowOnlySharedNodes,
} from './layout.actions';
import { hydrateLayoutSuccess, loadDataSuccess } from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';

const initialState: LayoutState = {
  nodeColorBy: null,
  nodeSizeBy: NodeSizeByEnum.relevance,
  showAllNodes: false,
  showOnlySharedNodes: false,
  showMtbResults: true,
  properties: [],
  highlightColor: '#000000',
};

export const layoutReducer = createReducer(
  initialState,
  on(
    loadDataSuccess,
    (state: LayoutState, { properties, highlightColor }): LayoutState => ({
      ...state,
      properties,
      highlightColor,
    }),
  ),
  on(
    toggleShowMtbResults,
    (state: LayoutState): LayoutState => ({
      ...state,
      showMtbResults: !state.showMtbResults,
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
      { showAll, showShared, showMtb, nodeSizeBy, nodeColorBy },
    ): LayoutState => {
      return {
        ...state,
        nodeSizeBy: nodeSizeBy ?? NodeSizeByEnum.relevance,
        nodeColorBy: nodeColorBy ?? null,
        showAllNodes: showAll && showShared ? false : showAll,
        showOnlySharedNodes: showShared,
        showMtbResults: showMtb,
      };
    },
  ),
  on(
    navigateHome,
    (state: LayoutState): LayoutState => ({
      ...state,
      showMtbResults: true,
      showOnlySharedNodes: false,
      showAllNodes: false,
      nodeColorBy: null,
      nodeSizeBy: NodeSizeByEnum.relevance,
    }),
  ),
);
