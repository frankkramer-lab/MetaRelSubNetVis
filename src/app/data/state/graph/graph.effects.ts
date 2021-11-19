import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadNetworkDataSuccess } from '../network/network.actions';
import { selectNetwork } from '../network/network.selectors';
import { AppState } from '../app.state';
import { ApiService } from '../../service/api.service';
import { GraphService } from '../../../core/service/graph.service';
import { resetPatientA, resetPatientB, setPatientA, setPatientB } from '../patient/patient.actions';
import { selectPatientA, selectPatientB } from '../patient/patient.selectors';

@Injectable()
export class GraphEffects {
  processGraphCore$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadNetworkDataSuccess),
        concatLatestFrom(() => this.store.select(selectNetwork)),
        map(([, network]) => {
          if (!network) {
            return;
          }

          this.graphService.initializeCore(network);
        }),
      );
    },
    { dispatch: false },
  );

  patientSelectionChanged$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(setPatientA, setPatientB, resetPatientA, resetPatientB),
        concatLatestFrom(() => [
          this.store.select(selectPatientA),
          this.store.select(selectPatientB),
          this.store.select(selectNetwork),
        ]),
        map(([, patientA, patientB, network]) => {
          if (!network) return;

          this.graphService.layoutPatient(patientA, patientB, network);
        }),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
    private graphService: GraphService,
  ) {
  }
}
