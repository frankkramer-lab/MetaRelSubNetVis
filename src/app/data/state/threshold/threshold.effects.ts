import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ApiService } from '../../service/api.service';
import { setDefined } from './threshold.action';
import { setPatientSelection } from '../patient/patient.actions';
import { AppState } from '../app.state';
import { selectMin } from './threshold.selectors';

@Injectable()
export class ThresholdEffects {
  resetDefined$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientSelection),
      concatLatestFrom(() => this.store.select(selectMin)),
      map(([, defined]) => {
        return setDefined({ defined });
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>,
  ) {}
}
