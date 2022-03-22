import { createAction, props } from '@ngrx/store';
import { Patient } from '../../schema/patient';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

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

export const setPatientSelection = createAction('[Patient Effect] set patient selection', props<{previousSelection: PatientSelectionEnum}>());
