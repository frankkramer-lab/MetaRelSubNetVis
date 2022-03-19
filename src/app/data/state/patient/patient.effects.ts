import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { resetPatientA, resetPatientB, setPatientSelection } from './patient.actions';
import { setColumnGroupA, setColumnGroupB } from '../nodes/nodes.actions';

@Injectable()
export class PatientEffects {
  setPatientSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setColumnGroupA, setColumnGroupB, resetPatientA, resetPatientB),
      map(() => setPatientSelection()),
    );
  });

  constructor(private actions$: Actions) {}
}
