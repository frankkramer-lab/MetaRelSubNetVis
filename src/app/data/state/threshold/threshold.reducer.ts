import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import {
  hydrateThresholdSuccess,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
} from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';
import {
  setAllDefaultThresholds,
  setAllIndividualThresholds,
  setThresholdDefault,
  setThresholdIndividual,
} from './threshold.action';
import { ThresholdDefinition } from '../../schema/threshold-definition';

const initialState: ThresholdState = {
  thresholds: {
    default: [],
    individual: [],
  },
  multiplier: 1000000000,
  isLoading: false,
};

export const thresholdReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: true })),
  on(loadDataFailure, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: false })),
  on(
    loadDataSuccess,
    (state: ThresholdState, { thresholds }): ThresholdState => ({
      ...state,
      isLoading: false,
      thresholds,
    }),
  ),
  on(
    hydrateThresholdSuccess,
    (state: ThresholdState, { thresholds }): ThresholdState => ({
      ...state,
      thresholds,
    }),
  ),
  on(
    setAllIndividualThresholds,
    (state: ThresholdState, { individual }): ThresholdState => ({
      ...state,
      thresholds: {
        default: [...state.thresholds.default],
        individual,
      },
    }),
  ),
  on(
    setAllDefaultThresholds,
    (state: ThresholdState, { defaults }): ThresholdState => ({
      ...state,
      thresholds: {
        default: defaults,
        individual: [...state.thresholds.individual],
      },
    }),
  ),
  on(setThresholdIndividual, (state: ThresholdState, { threshold }): ThresholdState => {
    const index = state.thresholds.individual.findIndex(
      (a) => a.property.name === threshold.property.name,
    );
    const individual: ThresholdDefinition[] = [
      ...state.thresholds.individual.slice(0, index),
      threshold,
      ...state.thresholds.individual.slice(index + 1),
    ];
    return {
      ...state,
      thresholds: {
        default: [...state.thresholds.default],
        individual,
      },
    };
  }),
  on(setThresholdDefault, (state: ThresholdState, { threshold }): ThresholdState => {
    const index = state.thresholds.default.findIndex(
      (a) => a.property.name === threshold.property.name,
    );
    const defaults: ThresholdDefinition[] = [
      ...state.thresholds.default.slice(0, index),
      threshold,
      ...state.thresholds.default.slice(index + 1),
    ];
    return {
      ...state,
      thresholds: {
        individual: [...state.thresholds.individual],
        default: defaults,
      },
    };
  }),
  on(
    navigateHome,
    (state: ThresholdState): ThresholdState => ({
      ...state,
      isLoading: false,
      thresholds: {
        default: [],
        individual: [],
      },
    }),
  ),
);
