import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { resetPatientA, resetPatientB, setPatientA, setPatientB } from '../patient/patient.actions';
import {
  resetColumnGroupA,
  resetColumnGroupB,
  setColumnGroupA,
  setColumnGroupB,
} from './nodes.actions';

@Injectable()
export class NodesEffects {
  setPatientGroupA$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientA),
      map((action) => {
        return setColumnGroupA({ subtypeColumnA: action.patientA.subtype });
      }),
    );
  });

  setPatientGroupB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setPatientB),
      map((action) => {
        return setColumnGroupB({ subtypeColumnB: action.patientB.subtype });
      }),
    );
  });

  resetPatientGroupA$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resetPatientA),
      map(() => {
        return resetColumnGroupA();
      }),
    );
  });

  resetPatientGroupB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resetPatientB),
      map(() => {
        return resetColumnGroupB();
      }),
    );
  });

  constructor(private actions$: Actions) {
  }
}
