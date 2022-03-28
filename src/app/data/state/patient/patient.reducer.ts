import { createReducer, on } from '@ngrx/store';
import { PatientState } from './patient.state';
import {
  resetPatientA,
  resetPatientB,
  setPatientA,
  setPatientB,
  setPatientSelection,
} from './patient.actions';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';
import {
  hydratePatientAPatientBSuccess,
  loadDataFailure,
  loadDataSuccess,
  loadQueryParams,
} from '../hydrator/hydrator.actions';
import { navigateHome } from '../sidebar/sidebar.actions';

const initialState: PatientState = {
  groupALabel: '',
  groupBLabel: '',
  groupA: [],
  groupB: [],
  groupADetails: {},
  groupBDetails: {},
  patientA: null,
  patientB: null,
  patientADetails: [],
  patientBDetails: [],
  patientSelection: PatientSelectionEnum.none,
  geMin: null,
  geMidRange: null,
  geMax: null,
  scoreMin: null,
  scoreMidRange: null,
  scoreMax: null,
  isLoading: false,
};

export const patientReducer = createReducer(
  initialState,
  on(loadQueryParams, (state: PatientState): PatientState => ({ ...state, isLoading: true })),
  on(loadDataFailure, (state: PatientState): PatientState => ({ ...state, isLoading: false })),
  on(loadDataSuccess, (state: PatientState, payload): PatientState => {
    return {
      ...state,
      isLoading: false,
      groupA: payload.patients.groupA,
      groupB: payload.patients.groupB,
      groupADetails: payload.patients.detailsA,
      groupBDetails: payload.patients.detailsB,
      geMin: payload.patients.geMin,
      geMidRange: payload.patients.geMidRange,
      geMax: payload.patients.geMax,
      scoreMin: payload.patients.scoreMin,
      scoreMidRange: payload.patients.scoreMidRange,
      scoreMax: payload.patients.scoreMax,
      groupALabel: payload.patients.labelA,
      groupBLabel: payload.patients.labelB,
    };
  }),
  on(
    setPatientA,
    hydratePatientAPatientBSuccess,
    (state: PatientState, { patientA }): PatientState => {
      if (patientA) {
        return { ...state, patientA, patientADetails: state.groupADetails[patientA.name] };
      }
      return { ...state, patientA, patientADetails: [] };
    },
  ),
  on(
    setPatientB,
    hydratePatientAPatientBSuccess,
    (state: PatientState, { patientB }): PatientState => {
      if (patientB) {
        return { ...state, patientB, patientBDetails: state.groupBDetails[patientB.name] };
      }
      return { ...state, patientB, patientBDetails: [] };
    },
  ),
  on(
    resetPatientA,
    (state: PatientState): PatientState => ({
      ...state,
      patientA: null,
      patientADetails: [],
    }),
  ),
  on(
    resetPatientB,
    (state: PatientState): PatientState => ({
      ...state,
      patientB: null,
      patientBDetails: [],
    }),
  ),
  on(
    hydratePatientAPatientBSuccess,
    (state: PatientState, { patientADetails }): PatientState => ({
      ...state,
      patientADetails,
    }),
  ),
  on(
    hydratePatientAPatientBSuccess,
    (state: PatientState, { patientBDetails }): PatientState => ({
      ...state,
      patientBDetails,
    }),
  ),
  on(setPatientSelection, hydratePatientAPatientBSuccess, (state: PatientState): PatientState => {
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
  on(
    navigateHome,
    (state: PatientState): PatientState => ({
      ...state,
      patientA: null,
      patientB: null,
    }),
  ),
);
