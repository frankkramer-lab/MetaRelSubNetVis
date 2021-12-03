import { createReducer, on } from '@ngrx/store';
import { HydratorState } from './hydrator.state';
import { loadQueryParams } from './hydrator.actions';
import { VisualizationConfig } from '../../schema/visualization-config';

const initialState: HydratorState = {
  config: null,
};

export const hydratorReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: HydratorState, { params }): HydratorState => {
    if (Object.keys(params).length === 0) return { ...state };
    return { ...state, config: params as VisualizationConfig };
  }),
);
