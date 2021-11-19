import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import { loadThresholdDataSuccess, setDefined } from './threshold.action';

const initialState: ThresholdState = {
  groupA: null,
  groupB: null,
  defined: null,
  multiplier: 1000000000,
};

export const thresholdReducer = createReducer(
  initialState,
  on(
    loadThresholdDataSuccess,
    (state: ThresholdState, { thresholds }): ThresholdState => ({
      ...state,
      groupA: thresholds.metastatic,
      groupB: thresholds.nonmetastatic,
      defined: Math.min(thresholds.metastatic.threshold, thresholds.nonmetastatic.threshold),
    }),
  ),
  on(setDefined, (state: ThresholdState, { defined }): ThresholdState => ({ ...state, defined })),
);
