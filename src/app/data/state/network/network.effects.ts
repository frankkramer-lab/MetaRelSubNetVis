import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { loadDefaultAppData } from '../app.actions';
import { loadNetworkDataFailure, loadNetworkDataSuccess } from './network.actions';

@Injectable()
export class NetworkEffects {
  loadNetworkData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDefaultAppData),
      switchMap(() => {
        return this.apiService.loadNetwork().pipe(
          map((network) => loadNetworkDataSuccess({ network })),
          catchError(() => of(loadNetworkDataFailure())),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
