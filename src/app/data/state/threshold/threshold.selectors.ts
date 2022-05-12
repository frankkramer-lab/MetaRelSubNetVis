import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ThresholdState } from './threshold.state';
import { selectPatientSelection } from '../patient/patient.selectors';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';
import { PropertyScopeEnum } from '../../../core/enum/property-scope.enum';

const selectState = createSelector(
  (appState: AppState) => appState.threshold,
  (state: ThresholdState) => state,
);

export const selectMultiplier = createSelector(
  selectState,
  (state: ThresholdState) => state.multiplier,
);

export const selectMin = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection: PatientSelectionEnum) => {
    const mins: number[] = [];

    state.thresholds.forEach((th) => {
      switch (patientSelection) {
        case PatientSelectionEnum.both:
          mins.push(
            Math.min(
              th.property.minA ?? Number.MAX_SAFE_INTEGER,
              th.property.minB ?? Number.MAX_SAFE_INTEGER,
            ),
          );
          break;
        case PatientSelectionEnum.groupA:
          mins.push(th.property.minA ?? 0);
          break;
        case PatientSelectionEnum.groupB:
          mins.push(th.property.minB ?? 0);
          break;
        default:
          mins.push(0);
          break;
      }
    });
    return mins;
  },
);

export const selectMax = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection: PatientSelectionEnum) => {
    const max: number[] = [];

    state.thresholds.forEach((th) => {
      switch (patientSelection) {
        case PatientSelectionEnum.both:
          max.push(
            Math.max(
              th.property.maxA ?? Number.MIN_SAFE_INTEGER,
              th.property.maxB ?? Number.MIN_SAFE_INTEGER,
            ),
          );
          break;
        case PatientSelectionEnum.groupA:
          max.push(th.property.maxA ?? 1);
          break;
        case PatientSelectionEnum.groupB:
          max.push(th.property.maxB ?? 1);
          break;
        default:
          max.push(1);
          break;
      }
    });
    return max;
  },
);

export const selectThresholds = createSelector(
  selectState,
  (state: ThresholdState) => state.thresholds,
);

export const selectThresholdIndividual = createSelector(selectState, (state: ThresholdState) =>
  state.thresholds.filter((a) => a.scope === PropertyScopeEnum.individual),
);
export const selectThresholdDefault = createSelector(selectState, (state: ThresholdState) =>
  state.thresholds.filter((a) => a.scope === PropertyScopeEnum.default),
);
