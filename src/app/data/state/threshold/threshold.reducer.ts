import { createReducer, on } from '@ngrx/store';
import { ThresholdState } from './threshold.state';
import { setDefined, setProperty } from './threshold.action';
import {
  hydrateThresholdSuccess,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
} from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';

const initialState: ThresholdState = {
  rangeGroupA: null,
  rangeGroupB: null,
  defined: null,
  responsibleProperty: null,
  availableProperties: [],
  multiplier: 1000000000,
  isLoading: false,
  labelMin: null,
  labelMax: null,
};

export const thresholdReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: true })),
  on(loadDataFailure, (state: ThresholdState): ThresholdState => ({ ...state, isLoading: false })),
  on(loadDataSuccess, (state: ThresholdState, payload): ThresholdState => {
    if (payload.thresholds.availableProperties.length > 0) {
      return {
        ...state,
        isLoading: false,
        responsibleProperty: payload.thresholds.availableProperties[0],
        availableProperties: payload.thresholds.availableProperties,
        rangeGroupA: payload.thresholds.rangeGroupA,
        rangeGroupB: payload.thresholds.rangeGroupB,
      };
    }
    return {
      ...state,
      isLoading: false,
      responsibleProperty: null,
      availableProperties: payload.thresholds.availableProperties,
      rangeGroupA: payload.thresholds.rangeGroupA,
      rangeGroupB: payload.thresholds.rangeGroupB,
    };
  }),
  on(
    setDefined,
    hydrateThresholdSuccess,
    (state: ThresholdState, { thresholdDefinition }): ThresholdState => ({
      ...state,
      defined: thresholdDefinition.defined,
    }),
  ),
  on(
    setProperty,
    (state: ThresholdState, { responsibleProperty }): ThresholdState => ({
      ...state,
      responsibleProperty,
    }),
  ),
  on(navigateHome, (state: ThresholdState): ThresholdState => ({ ...state, defined: null })),
);
