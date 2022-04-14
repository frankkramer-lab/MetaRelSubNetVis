import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import {
  hydrateThresholdSuccess,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
} from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';
import { setAllThresholds, setThreshold } from './threshold.action';
import { ThresholdDefinition } from '../../schema/threshold-definition';

const initialState: ThresholdState = {
  thresholds: [],
  multiplier: 1000000000,
  isLoading: false,
};

export const thresholdReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: true })),
  on(loadDataFailure, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: false })),
  on(loadDataSuccess, (state: ThresholdState, { thresholds }): ThresholdState => {
    return {
      ...state,
      isLoading: false,
      thresholds,
    };
  }),
  on(
    hydrateThresholdSuccess,
    setAllThresholds,
    (state: ThresholdState, { thresholds }): ThresholdState => ({
      ...state,
      thresholds,
    }),
  ),
  on(setThreshold, (state: ThresholdState, { threshold }): ThresholdState => {
    const newThresholds: ThresholdDefinition[] = [
      ...state.thresholds.filter((a) => a.property.name !== threshold.property.name),
    ];
    const relevantThresholdIndex = state.thresholds.findIndex(
      (a) => a.property.name === threshold.property.name,
    );
    newThresholds.splice(relevantThresholdIndex, 0, threshold);
    return {
      ...state,
      thresholds: newThresholds,
    };
  }),
  on(
    navigateHome,
    (state: ThresholdState): ThresholdState => ({
      ...state,
      isLoading: false,
      thresholds: [],
    }),
  ),
);
