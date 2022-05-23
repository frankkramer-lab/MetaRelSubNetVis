import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, from, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../app.state';
import {
  closeModalFormat,
  loadNetworkSummaries,
  loadNetworkSummariesFailure,
  loadNetworkSummariesSuccess,
  loadSampleSummaries,
  loadSampleSummariesFailure,
  loadSampleSummariesSuccess,
  showModalFormat,
} from './home.actions';
import { ApiService } from '../../service/api.service';
import { NetworkSearchItem } from '../../schema/network-search-item';
import { HomeModalFormatComponent } from '../../../layout/home-modal-format/home-modal-format.component';

@Injectable()
export class HomeEffects {
  loadExampleNetworkSummaries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSampleSummaries),
      concatMap(() => {
        return forkJoin({
          sample_1: this.apiService.loadNetworkSummary('a420aaee-4be9-11ec-b3be-0ac135e8bacf'),
        }).pipe(
          map((payload) => {
            return loadSampleSummariesSuccess({
              sampleNetworks: [
                {
                  ...payload.sample_1,
                  linkNdex: `https://www.ndexbio.org/viewer/networks/${payload.sample_1.externalId}`,
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

  openModal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(showModalFormat),
      exhaustMap(() => {
        return this.showModal().pipe(
          map(() => {
            return closeModalFormat();
          }),
          catchError(() => {
            return of(closeModalFormat());
          }),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
    private modalService: NgbModal,
  ) {}

  private showModal() {
    const modal = this.modalService.open(HomeModalFormatComponent, {
      size: 'xl',
      scrollable: true,
    });
    return from(modal.result);
  }
}
