import { createReducer, on } from '@ngrx/store';
import { LayoutState } from './layout.state';
import { NodeColorByEnum } from '../../../core/enum/node-color-by.enum';
import { NodeSizeByEnum } from '../../../core/enum/node-size-by.enum';
import {
  setNodeColorBy,
  setNodeSizeBy,
  toggleShowAllNodes,
  toggleShowMtbResults,
  toggleShowOnlySharedNodes,
} from './layout.actions';
import { hydrateLayoutSuccess } from '../hydrator/hydrator.actions';

const initialState: LayoutState = {
  nodeColorBy: NodeColorByEnum.geneExpressionLevel,
  nodeSizeBy: NodeSizeByEnum.relevance,
  showAllNodes: false,
  showOnlySharedNodes: false,
  showMtbResults: true,
};

export const layoutReducer = createReducer(
  initialState,
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
        nodeColorBy: nodeColorBy ?? NodeColorByEnum.geneExpressionLevel,
        showAllNodes: showAll && showShared ? false : showAll,
        showOnlySharedNodes: showShared,
        showMtbResults: showMtb,
      };
    },
  ),
);
