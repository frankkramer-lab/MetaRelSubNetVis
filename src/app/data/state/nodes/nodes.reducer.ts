import { createReducer, on } from '@ngrx/store';
import { NodesState } from './nodes.state';
import {
  clearMarkedNodes,
  markNode,
  resetColumnGroupA,
  resetColumnGroupB,
  setColumnGroupA,
  setColumnGroupB,
  setFilterTerm,
  sortBy,
} from './nodes.actions';
import { SortByEnum } from '../../../core/enum/sort-by.enum';
import { hydrateNodesSuccess } from '../hydrator/hydrator.actions';

const initialState: NodesState = {
  numberOfColumns: 2,
  subtypeColumnA: null,
  subtypeColumnB: null,
  sortByColumn: SortByEnum.all,
  filterTerm: null,
  markedNodes: [],
};

export const nodesReducer = createReducer(
  initialState,
  on(setColumnGroupA, hydrateNodesSuccess, (state: NodesState, { subtypeColumnA }): NodesState => {
    if (subtypeColumnA) {
      return {
        ...state,
        numberOfColumns: state.numberOfColumns + 1,
        subtypeColumnA,
      };
    }
    return { ...state };
  }),
  on(setColumnGroupB, hydrateNodesSuccess, (state: NodesState, { subtypeColumnB }): NodesState => {
    if (subtypeColumnB) {
      return {
        ...state,
        numberOfColumns: state.numberOfColumns + 1,
        subtypeColumnB,
      };
    }
    return { ...state };
  }),
  on(
    resetColumnGroupA,
    (state: NodesState): NodesState => ({
      ...state,
      subtypeColumnA: null,
      numberOfColumns: state.numberOfColumns - 1,
    }),
  ),
  on(
    resetColumnGroupB,
    (state: NodesState): NodesState => ({
      ...state,
      subtypeColumnB: null,
      numberOfColumns: state.numberOfColumns - 1,
    }),
  ),
  on(sortBy, (state: NodesState, { sortByColumn }): NodesState => ({ ...state, sortByColumn })),
  on(setFilterTerm, (state: NodesState, { filterTerm }): NodesState => ({ ...state, filterTerm })),
  on(markNode, (state: NodesState, { node }): NodesState => {
    const markedNodes = [...state.markedNodes];
    const index = markedNodes.indexOf(node);
    if (index > -1) {
      markedNodes.splice(index, 1);
    } else {
      markedNodes.push(node);
    }
    return { ...state, markedNodes };
  }),
  on(clearMarkedNodes, (state: NodesState): NodesState => ({ ...state, markedNodes: [] })),
);
