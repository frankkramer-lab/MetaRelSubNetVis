import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import { setDefined } from './threshold.action';
import {
  hydrateThresholdSuccess,
  loadDataFailure,
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
  on(
    loadDataSuccess,
    (state: ThresholdState, { thresholds }): ThresholdState => ({
      ...state,
      groupA: thresholds.metastatic,
      groupB: thresholds.nonmetastatic,
      defined: Math.min(thresholds.metastatic.threshold, thresholds.nonmetastatic.threshold),
      isLoading: false,
    }),
  ),
  on(loadDataFailure, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: false })),
  on(
    setDefined,
    hydrateThresholdSuccess,
    (state: ThresholdState, { defined }): ThresholdState => ({ ...state, defined }),
  ),
);
