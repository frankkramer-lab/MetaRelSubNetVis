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
        return Math.min(state.groupA?.threshold ?? 0, state.groupB?.threshold ?? 0);
      case PatientSelectionEnum.groupA:
        return state.groupA?.threshold ?? 0;
      case PatientSelectionEnum.groupB:
        return state.groupB?.threshold ?? 0;
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
        return Math.max(state.groupA?.max ?? 1, state.groupB?.max ?? 1);
      case PatientSelectionEnum.groupA:
        return state.groupA?.max ?? 1;
      case PatientSelectionEnum.groupB:
        return state.groupB?.max ?? 1;
      default:
        return 1;
    }
  },
);

export const selectMinA = createSelector(
  selectState,
  (state: ThresholdState) => state.groupA?.threshold || null,
);

export const selectMaxA = createSelector(
  selectState,
  (state: ThresholdState) => state.groupA?.max || null,
);

export const selectMinB = createSelector(
  selectState,
  (state: ThresholdState) => state.groupB?.threshold || null,
);

export const selectMaxB = createSelector(
  selectState,
  (state: ThresholdState) => state.groupB?.max || null,
);

export const selectLabelMin = createSelector(
  selectState,
  (state: ThresholdState) => state.labelMin,
);
export const selectLabelMax = createSelector(
  selectState,
  (state: ThresholdState) => state.labelMax,
);
