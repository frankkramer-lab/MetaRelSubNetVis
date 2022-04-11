import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ApiService } from '../../service/api.service';
import { setDefined, setProperty } from './threshold.action';
import { setPatientSelection } from '../patient/patient.actions';
import { AppState } from '../app.state';
import {
  selectDefined,
  selectMinA,
  selectMinB,
  selectResponsibleProperty,
} from './threshold.selectors';
import { selectPatientSelection } from '../patient/patient.selectors';
import { PatientSelectionEnum } from '../../../core/enum/patient-selection-enum';

@Injectable()
export class ThresholdEffects {
  resetDefined$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientSelection),
      concatLatestFrom(() => [
        this.store.select(selectPatientSelection),
        this.store.select(selectMinA),
        this.store.select(selectMinB),
        this.store.select(selectDefined),
        this.store.select(selectResponsibleProperty),
      ]),
      mergeMap(([action, patientSelection, minA, minB, defined, property]) => {
        // there was a change in patient group selection
        if (property !== null && action.previousSelection !== patientSelection) {
          if (patientSelection === PatientSelectionEnum.both && minA !== null && minB !== null) {
            return [
              setDefined({
                thresholdDefinition: {
                  defined: Math.min(minA, minB),
                  property,
                },
              }),
            ];
          }
          // todo wrong group min, when selecting one patient
          if (patientSelection === PatientSelectionEnum.groupA && minA !== null) {
            return [
              setDefined({
                thresholdDefinition: {
                  defined: minA,
                  property,
                },
              }),
            ];
          }
          if (patientSelection === PatientSelectionEnum.groupB && minB !== null) {
            return [
              setDefined({
                thresholdDefinition: {
                  defined: minB,
                  property,
                },
              }),
            ];
          }
          // defaulting
          return [
            setDefined({
              thresholdDefinition: {
                defined: Number.MIN_SAFE_INTEGER,
                property,
              },
            }),
          ];
        }

        if (defined !== null && property !== null) {
          return [
            setDefined({
              thresholdDefinition: {
                defined,
                property,
              },
            }),
          ];
        }
        return [
          setDefined({
            thresholdDefinition: {
              defined: Number.MIN_SAFE_INTEGER,
              property: null,
            },
          }),
        ];
      }),
    );
  });

  setProperty$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setProperty),
      concatLatestFrom(() => this.store.select(selectPatientSelection)),
      map(([action, patientSelection]) => {
        switch (patientSelection) {
          case PatientSelectionEnum.groupA:
            return setDefined({
              thresholdDefinition: {
                defined: action.responsibleProperty.minA ?? Number.MAX_SAFE_INTEGER,
                property: action.responsibleProperty,
              },
            });
          case PatientSelectionEnum.groupB:
            return setDefined({
              thresholdDefinition: {
                defined: action.responsibleProperty.minB ?? Number.MAX_SAFE_INTEGER,
                property: action.responsibleProperty,
              },
            });
          default:
          case PatientSelectionEnum.both:
          case PatientSelectionEnum.none:
            return setDefined({
              thresholdDefinition: {
                defined: Math.min(
                  action.responsibleProperty.minA ?? Number.MAX_SAFE_INTEGER,
                  action.responsibleProperty.minB ?? Number.MAX_SAFE_INTEGER,
                ),
                property: action.responsibleProperty,
              },
            });
        }
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>,
  ) {}
}
