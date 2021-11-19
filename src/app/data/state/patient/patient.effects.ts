import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../service/api.service';
import {
  loadPatientADetailsFailure,
  loadPatientADetailsSuccess,
  loadPatientBDetailsFailure,
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

@Injectable()
export class PatientEffects {
  loadPatientData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadInitialAppData),
      switchMap(() => {
        return this.apiService.loadPatientsClassified().pipe(
          map((collection) => loadPatientDataSuccess({ collection })),
          catchError(() => of(loadPatientDataFailure())),
        );
      }),
    );
  });

  loadPatientADetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientA),
      mergeMap((action) => {
        return this.apiService.loadPatientDetails(action.patientA.name).pipe(
          map((patientADetails) => {
            console.log(patientADetails);
            return loadPatientADetailsSuccess({ patientADetails });
          }),
          catchError(() => of(loadPatientADetailsFailure())),
        );
      }),
    );
  });

  loadPatientBDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientB),
      mergeMap((action) => {
        return this.apiService.loadPatientDetails(action.patientB.name).pipe(
          map((patientBDetails) => {
            console.log(patientBDetails);
            return loadPatientBDetailsSuccess({ patientBDetails });
          }),
          catchError(() => of(loadPatientBDetailsFailure())),
        );
      }),
    );
  });

  setPatientSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientA, setPatientB, resetPatientA, resetPatientB),
      map(() => setPatientSelection()),
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
