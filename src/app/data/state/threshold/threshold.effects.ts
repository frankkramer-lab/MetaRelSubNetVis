import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApiService } from '../../service/api.service';
import { loadThresholdDataFailure, loadThresholdDataSuccess, setDefined } from './threshold.action';
import { loadDefaultAppData } from '../app.actions';
import { setPatientSelection } from '../patient/patient.actions';
import { AppState } from '../app.state';
import { selectMin } from './threshold.selectors';

@Injectable()
export class ThresholdEffects {
  loadThresholdData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDefaultAppData),
      switchMap(() => {
        return this.apiService.loadThresholds().pipe(
          map((thresholds) => loadThresholdDataSuccess({ thresholds })),
          catchError(() => of(loadThresholdDataFailure())),
        );
      }),
    );
  });

  resetDefined$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientSelection),
      concatLatestFrom(() => this.store.select(selectMin)),
      map(([, defined]) => setDefined({ defined })),
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>,
  ) {
  }
}
