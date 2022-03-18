import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import { setDefined } from './threshold.action';
import {
  hydrateThresholdSuccess,
  loadDataSuccess,
  loadQueryParams,
} from '../hydrator/hydrator.actions';

const initialState: ThresholdState = {
  groupA: null,
  groupB: null,
  defined: null,
  multiplier: 1000000000,
  isLoading: false,
};

export const thresholdReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: true })),
  on(loadDataSuccess, (state: ThresholdState, payload): ThresholdState => {
    return {
      ...state,
      isLoading: false,
      groupA: payload.thresholds.groupA,
      groupB: payload.thresholds.groupB,
    };
  }),
  on(
    setDefined,
    hydrateThresholdSuccess,
    (state: ThresholdState, { defined }): ThresholdState => ({ ...state, defined }),
  ),
);
