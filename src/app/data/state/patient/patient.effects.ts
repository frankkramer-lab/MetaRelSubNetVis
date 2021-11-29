import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
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
import { loadDefaultAppData } from '../app.actions';
import { AppState } from '../app.state';

@Injectable()
export class PatientEffects {
  loadPatientData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDefaultAppData),
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
            return loadPatientBDetailsSuccess({ patientBDetails });
          }),
          catchError(() => of(loadPatientBDetailsFailure())),
        );
      }),
    );
  });

  setPatientSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPatientADetailsSuccess, loadPatientBDetailsSuccess, resetPatientA, resetPatientB),
      map(() => setPatientSelection()),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) {}
}
