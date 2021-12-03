import { createAction, props } from '@ngrx/store';
import { Patient } from '../../schema/patient';
import { PatientItem } from '../../schema/patient-item';

export const setPatientA = createAction(
  '[Sidebar Patient Component] set patient A',
  props<{ patientA: Patient }>(),
);
export const setPatientB = createAction(
  '[Sidebar Patient Component] set patient B',
  props<{ patientB: Patient }>(),
);
export const resetPatientA = createAction('[Sidebar Patient Component] reset patient A');
export const resetPatientB = createAction('[Sidebar Patient Component] reset patient B');

export const loadPatientADetailsSuccess = createAction(
  '[API] load patient A details success',
  props<{ patientADetails: PatientItem[] }>(),
);
export const loadPatientADetailsFailure = createAction('[API] load patient A details failure');

export const loadPatientBDetailsSuccess = createAction(
  '[API] load patient B details success',
  props<{ patientBDetails: PatientItem[] }>(),
);
export const loadPatientBDetailsFailure = createAction('[API] load patient B details failure');

export const setPatientSelection = createAction('[Patient Effect] set patient selection');
