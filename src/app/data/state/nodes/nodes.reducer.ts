import { NodesState } from './nodes.state';
import { createReducer } from '@ngrx/store';

const initialState: NodesState = {};

export const nodesReducer = createReducer(initialState);
