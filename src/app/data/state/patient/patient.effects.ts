import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApiService } from '../../service/api.service';
import {
  loadPatientADetailsFailure,
  loadPatientADetailsSuccess,
  loadPatientBDetailsFailure,
  loadPatientBDetailsSuccess,
  resetPatientA,
  resetPatientB,
  setPatientA,
  setPatientB,
  setPatientSelection,
} from './patient.actions';
import { AppState } from '../app.state';
import { hydratePatientAPatientBSuccess } from '../hydrator/hydrator.actions';

@Injectable()
export class PatientEffects {
  loadPatientADetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientA),
      mergeMap((action) => {
        return this.apiService.loadPatientDetails(action.patientA.name).pipe(
          map((patientADetails) => loadPatientADetailsSuccess({ patientADetails })),
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
          map((patientBDetails) => loadPatientBDetailsSuccess({ patientBDetails })),
          catchError(() => of(loadPatientBDetailsFailure())),
        );
      }),
    );
  });

  setPatientSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        loadPatientADetailsSuccess,
        loadPatientBDetailsSuccess,
        resetPatientA,
        resetPatientB,
      ),
      map(() => setPatientSelection()),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) {}
}
