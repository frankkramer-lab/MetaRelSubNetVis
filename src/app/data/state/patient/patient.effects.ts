import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { resetPatientA, resetPatientB, setPatientSelection } from './patient.actions';
import { setColumnGroupA, setColumnGroupB } from '../nodes/nodes.actions';
import { AppState } from '../app.state';
import { selectPatientSelection } from './patient.selectors';

@Injectable()
export class PatientEffects {
  setPatientSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setColumnGroupA, setColumnGroupB, resetPatientA, resetPatientB),
      concatLatestFrom(() => [this.store.select(selectPatientSelection)]),
      map(([, previousSelection]) => {
        return setPatientSelection({ previousSelection });
      }),
    );
  });

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
