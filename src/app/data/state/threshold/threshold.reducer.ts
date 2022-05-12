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
import { PropertyScopeEnum } from '../../../core/enum/property-scope.enum';
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
  on(setAllThresholds, (state: ThresholdState, { thresholds }): ThresholdState => {
    if (thresholds.length === 0) return { ...state };
    if (thresholds[0].scope === PropertyScopeEnum.individual) {
      return {
        ...state,
        thresholds: {
          ...state.thresholds,
          individual: thresholds,
        },
      };
    }
    return {
      ...state,
      thresholds: {
        ...state.thresholds,
        default: thresholds,
      },
    };
  }),
  on(setThreshold, (state: ThresholdState, { threshold }): ThresholdState => {
    console.log(threshold);

    if (threshold.scope === PropertyScopeEnum.individual) {
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
          ...state.thresholds,
          individual,
        },
      };
    }
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
        ...state.thresholds,
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
