import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { AppState } from '../app.state';
import {
  loadNetworkSummaries,
  loadNetworkSummariesFailure,
  loadNetworkSummariesSuccess,
  loadSampleSummaries,
  loadSampleSummariesFailure,
  loadSampleSummariesSuccess,
} from './home.actions';
import { ApiService } from '../../service/api.service';
import { NetworkSearchItem } from '../../schema/network-search-item';

@Injectable()
export class HomeEffects {
  loadExampleNetworkSummaries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSampleSummaries),
      concatMap(() => {
        return forkJoin({
          sample_1: this.apiService.loadNetworkSummary('a420aaee-4be9-11ec-b3be-0ac135e8bacf'),
          sample_2: this.apiService.loadNetworkSummary('140d01f0-acfe-11ec-b3be-0ac135e8bacf'),
        }).pipe(
          map((payload) => {
            return loadSampleSummariesSuccess({
              sampleNetworks: [
                {
                  ...payload.sample_1,
                  linkNdex: `https://www.ndexbio.org/viewer/networks/${payload.sample_1.externalId}`,
                },
                {
                  ...payload.sample_2,
                  linkNdex: `https://www.ndexbio.org/viewer/networks/${payload.sample_2.externalId}`,
                },
              ],
            });
          }),
          catchError(() => {
            return of(loadSampleSummariesFailure());
          }),
        );
      }),
    );
  });

  searchNdex$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadNetworkSummaries),
      switchMap((action) => {
        if (action.searchTerm === null || action.searchTerm.trim().length === 0) {
          return of(
            loadNetworkSummariesFailure({
              lastTermWasEmpty: true,
            }),
          );
        }

        return this.apiService.searchNdex(action.searchTerm).pipe(
          map((payload) => {
            const networks: NetworkSearchItem[] = [];
            payload.networks.forEach((network) => {
              networks.push({
                ...network,
                linkNdex: `https://www.ndexbio.org/viewer/networks/${network.externalId}`,
              });
            });

            return loadNetworkSummariesSuccess({ networks });
          }),
          catchError(() =>
            of(
              loadNetworkSummariesFailure({
                lastTermWasEmpty: false,
              }),
            ),
          ),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) {
  }
}
