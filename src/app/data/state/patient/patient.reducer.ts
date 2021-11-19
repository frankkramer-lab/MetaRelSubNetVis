import { createReducer, on } from '@ngrx/store';
import { PatientState } from './patient.state';
import {
  loadPatientADetailsSuccess,
  loadPatientBDetailsSuccess,
  loadPatientDataFailure,
  loadPatientDataSuccess,
  resetPatientA,
  resetPatientB,
  setPatientA,
  setPatientB,
  setPatientSelection,
} from './patient.actions';
import { loadInitialAppData } from '../app.actions';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

const initialState: PatientState = {
  patientsGroupA: [],
  patientsGroupB: [],
  patientA: null,
  patientB: null,
  patientADetails: [],
  patientBDetails: [],
  patientSelection: PatientSelectionEnum.none,
  isLoading: false,
};

export const patientReducer = createReducer(
  initialState,
  on(loadInitialAppData, (state: PatientState): PatientState => ({ ...state, isLoading: true })),
  on(
    loadPatientDataSuccess,
    (state: PatientState, { collection }): PatientState => ({
      ...state,
      isLoading: false,
      patientsGroupA: collection.metastatic,
      patientsGroupB: collection.nonmetastatic,
    }),
  ),
  on(
    loadPatientDataFailure,
    (state: PatientState): PatientState => ({ ...state, isLoading: false }),
  ),
  on(setPatientA, (state: PatientState, { patientA }): PatientState => ({ ...state, patientA })),
  on(setPatientB, (state: PatientState, { patientB }): PatientState => ({ ...state, patientB })),
  on(resetPatientA, (state: PatientState): PatientState => ({ ...state, patientA: null })),
  on(resetPatientB, (state: PatientState): PatientState => ({ ...state, patientB: null })),
  on(
    loadPatientADetailsSuccess,
    (state: PatientState, { patientADetails }): PatientState => ({
      ...state,
      patientADetails,
    }),
  ),
  on(
    loadPatientBDetailsSuccess,
    (state: PatientState, { patientBDetails }): PatientState => ({
      ...state,
      patientBDetails,
    }),
  ),
  on(setPatientSelection, (state: PatientState): PatientState => {
    let patientSelection: PatientSelectionEnum = PatientSelectionEnum.none;

    if (state.patientA && state.patientB) {
      patientSelection = PatientSelectionEnum.both;
    } else if (state.patientA) {
      patientSelection = PatientSelectionEnum.groupA;
    } else if (state.patientB) {
      patientSelection = PatientSelectionEnum.groupB;
    }
    return { ...state, patientSelection };
  }),
);
