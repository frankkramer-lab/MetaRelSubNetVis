import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ThresholdState } from './threshold.state';
import { selectPatientSelection } from '../patient/patient.selectors';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

const selectState = createSelector(
  (appState: AppState) => appState.threshold,
  (state: ThresholdState) => state,
);

export const selectDefined = createSelector(selectState, (state: ThresholdState) => state.defined);

export const selectMultiplier = createSelector(
  selectState,
  (state: ThresholdState) => state.multiplier,
);

export const selectMin = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection: PatientSelectionEnum) => {
    switch (patientSelection) {
      case PatientSelectionEnum.both:
        return Math.min(state.rangeGroupA?.min ?? 0, state.rangeGroupB?.min ?? 0);
      case PatientSelectionEnum.groupA:
        return state.rangeGroupA?.min ?? 0;
      case PatientSelectionEnum.groupB:
        return state.rangeGroupB?.min ?? 0;
      default:
        return 0;
    }
  },
);

export const selectMax = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection: PatientSelectionEnum) => {
    switch (patientSelection) {
      case PatientSelectionEnum.both:
        return Math.max(state.rangeGroupA?.max ?? 1, state.rangeGroupB?.max ?? 1);
      case PatientSelectionEnum.groupA:
        return state.rangeGroupA?.max ?? 1;
      case PatientSelectionEnum.groupB:
        return state.rangeGroupB?.max ?? 1;
      default:
        return 1;
    }
  },
);

export const selectMinA = createSelector(
  selectState,
  (state: ThresholdState) => state.rangeGroupA?.min || null,
);

export const selectMaxA = createSelector(
  selectState,
  (state: ThresholdState) => state.rangeGroupA?.max || null,
);

export const selectMinB = createSelector(
  selectState,
  (state: ThresholdState) => state.rangeGroupB?.min || null,
);

export const selectMaxB = createSelector(
  selectState,
  (state: ThresholdState) => state.rangeGroupB?.max || null,
);

export const selectLabelMin = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection) => {
    if (state.responsibleProperty) {
      switch (patientSelection) {
        default:
        case PatientSelectionEnum.both:
        case PatientSelectionEnum.none:
          return Math.min(
            state.responsibleProperty.minA ?? Number.MAX_SAFE_INTEGER,
            state.responsibleProperty.minB ?? Number.MAX_SAFE_INTEGER,
          ).toString();
        case PatientSelectionEnum.groupA:
          return (state.responsibleProperty.minA ?? Number.MAX_SAFE_INTEGER).toString();
        case PatientSelectionEnum.groupB:
          return (state.responsibleProperty.minB ?? Number.MAX_SAFE_INTEGER).toString();
      }
    }
    return Number.MAX_SAFE_INTEGER.toString();
  },
);
export const selectLabelMax = createSelector(
  selectState,
  selectPatientSelection,
  (state: ThresholdState, patientSelection) => {
    if (state.responsibleProperty) {
      switch (patientSelection) {
        default:
        case PatientSelectionEnum.both:
        case PatientSelectionEnum.none:
          return Math.max(
            state.responsibleProperty.maxA ?? Number.MIN_SAFE_INTEGER,
            state.responsibleProperty.maxB ?? Number.MIN_SAFE_INTEGER,
          ).toString();
        case PatientSelectionEnum.groupA:
          return (state.responsibleProperty.maxA ?? Number.MIN_SAFE_INTEGER).toString();
        case PatientSelectionEnum.groupB:
          return (state.responsibleProperty.maxB ?? Number.MIN_SAFE_INTEGER).toString();
      }
    }
    return Number.MIN_SAFE_INTEGER.toString();
  },
);
export const selectResponsibleProperty = createSelector(
  selectState,
  (state: ThresholdState) => state.responsibleProperty,
);
export const selectAvailableProperties = createSelector(
  selectState,
  (state: ThresholdState) => state.availableProperties,
);
